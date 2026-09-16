import { ArrowRight, MailCheck, Fish, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { ScreenshotFrame, PhoneFrame } from "@/components/site/screenshot-frame";

function WebsiteScreen() {
  return (
    <div className="flex flex-col">
      <div className="relative h-24 bg-[radial-gradient(ellipse_at_top,rgba(58,168,74,0.35),transparent_70%)] bg-[var(--brand-charcoal)]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-center">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
            <Fish className="size-3.5 text-[var(--brand-lime)]" /> Willow Lake Fishery
          </span>
          <span className="text-[10px] text-white/70">Est. 1998 · Cheshire, UK</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="h-2 w-3/4 rounded-full bg-muted" />
        <div className="h-2 w-full rounded-full bg-muted" />
        <div className="h-2 w-2/3 rounded-full bg-muted" />
        <span className="mt-2 w-fit rounded-lg bg-[var(--brand-green)] px-3 py-1.5 text-[11px] font-semibold text-white">
          Book your session
        </span>
      </div>
    </div>
  );
}

function BookingScreen() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-[11px] font-medium text-muted-foreground">Step 3 of 6 · Choose swim</p>
      {["Swim 2 — island view", "Swim 4 — the point", "Swim 7 — margin"].map((s, i) => (
        <div
          key={s}
          className={
            i === 1
              ? "flex items-center justify-between rounded-lg border border-[var(--brand-green)] bg-[var(--brand-pale-green)]/50 px-3 py-2.5"
              : "flex items-center justify-between rounded-lg border border-border px-3 py-2.5"
          }
        >
          <span className="text-[11px] font-medium text-foreground">{s}</span>
          {i === 1 ? <CheckCircle2 className="size-4 text-[var(--brand-green)]" /> : null}
        </div>
      ))}
      <span className="mt-1 rounded-lg bg-[var(--brand-green)] py-2.5 text-center text-[11px] font-semibold text-white">
        Continue to extras
      </span>
    </div>
  );
}

function ConfirmationScreen() {
  return (
    <div className="flex flex-col items-center gap-2.5 p-5 text-center">
      <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
        <MailCheck className="size-5" />
      </span>
      <p className="font-heading text-sm font-bold text-foreground">Booking confirmed</p>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        Willow Lake — Swim 4<br />12–14 Jun · 2 anglers
      </p>
      <div className="mt-1 w-full rounded-lg bg-secondary px-3 py-2 text-[11px] font-medium text-secondary-foreground">
        Confirmation sent to angler & fishery
      </div>
    </div>
  );
}

export function WebsiteIntegration() {
  return (
    <Section tone="pale">
      <SectionHeader
        align="center"
        eyebrow="Website integration"
        title="Built into your website, not bolted on awkwardly"
        description="Anglers move naturally from browsing your venue to completing a booking. Keep your brand, keep your website — add a better booking system."
      />

      <div className="mt-12 grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_auto_0.7fr_auto_0.85fr]">
        <div className="flex flex-col gap-2.5">
          <ScreenshotFrame label="willowlakefishery.co.uk">
            <WebsiteScreen />
          </ScreenshotFrame>
          <p className="text-center text-xs font-medium text-muted-foreground">Your fishery website</p>
        </div>

        <ArrowRight className="mx-auto hidden size-6 shrink-0 rotate-90 text-muted-foreground lg:block lg:rotate-0" />

        <div className="flex flex-col items-center gap-2.5">
          <PhoneFrame className="w-[190px]">
            <BookingScreen />
          </PhoneFrame>
          <p className="text-center text-xs font-medium text-muted-foreground">CarpSync booking flow</p>
        </div>

        <ArrowRight className="mx-auto hidden size-6 shrink-0 rotate-90 text-muted-foreground lg:block lg:rotate-0" />

        <div className="flex flex-col gap-2.5">
          <ScreenshotFrame label="Confirmation email">
            <ConfirmationScreen />
          </ScreenshotFrame>
          <p className="text-center text-xs font-medium text-muted-foreground">Instant confirmation</p>
        </div>
      </div>
    </Section>
  );
}
