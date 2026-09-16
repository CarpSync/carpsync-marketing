"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { venueTypeOptions, venueTypeValues } from "@/lib/demo";

export type DemoResult = { ok: true } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MIN_ELAPSED_MS = 2000;

function trimField(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function clientIp(headerList: Headers): string {
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return headerList.get("x-real-ip") ?? "unknown";
}

function allowRequest(ip: string): boolean {
  const now = Date.now();
  const current = rateLimit.get(ip);

  if (!current || now > current.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX) return false;

  current.count += 1;
  return true;
}

export async function submitDemoRequest(formData: FormData): Promise<DemoResult> {
  const website = String(formData.get("company_website") ?? "").trim();
  if (website) {
    return { ok: true };
  }

  const startedAt = Number(formData.get("started_at") ?? 0);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_ELAPSED_MS) {
    return { ok: true };
  }

  const name = trimField(formData.get("name"), 120);
  const fishery = trimField(formData.get("fishery"), 160);
  const email = trimField(formData.get("email"), 254).toLowerCase();
  const venueType = trimField(formData.get("venue-type"), 40);
  const message = String(formData.get("message") ?? "")
    .trim()
    .slice(0, 4000);

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name." };
  }

  if (fishery.length < 2) {
    return { ok: false, error: "Please enter your fishery or venue name." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!venueTypeValues.has(venueType)) {
    return { ok: false, error: "Please select a venue type." };
  }

  const headerList = await headers();
  if (!allowRequest(clientIp(headerList))) {
    return {
      ok: false,
      error: "Too many demo requests from this connection. Please try again later or email hello@carpsync.com.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error:
        "Demo requests are temporarily unavailable. Please email hello@carpsync.com instead.",
    };
  }

  const venueLabel =
    venueTypeOptions.find((option) => option.value === venueType)?.label ??
    venueType;
  const inbox = process.env.DEMO_INBOX || CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL || `CarpSync <${CONTACT_EMAIL}>`;
  const submittedAt = new Date().toISOString();
  const idempotencyKey = `demo-request/${email}/${Math.floor(Date.now() / 60000)}`;

  const text = [
    "New CarpSync demo request",
    "",
    `Name: ${name}`,
    `Fishery: ${fishery}`,
    `Email: ${email}`,
    `Venue type: ${venueLabel}`,
    `Message: ${message || "(none)"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const html = `
    <h1>New CarpSync demo request</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Fishery:</strong> ${escapeHtml(fishery)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Venue type:</strong> ${escapeHtml(venueLabel)}</p>
    <p><strong>Message:</strong><br>${escapeHtml(message || "(none)").replaceAll("\n", "<br>")}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send(
    {
      from,
      to: [inbox],
      replyTo: email,
      subject: `Demo request: ${fishery}`,
      text,
      html,
    },
    { idempotencyKey },
  );

  if (error) {
    console.error("Demo request email failed:", error.message);
    return {
      ok: false,
      error:
        "We couldn't send your request just now. Please try again or email hello@carpsync.com.",
    };
  }

  return { ok: true };
}
