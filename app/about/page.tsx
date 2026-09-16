import type { Metadata } from "next";
import Link from "next/link";
import { X, Check, Target, Layers, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { SplitFeature } from "@/components/site/split-feature";
import { CtaSection } from "@/components/site/cta-section";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { BookingCalendar } from "@/components/site/booking-calendar";
import { Logo } from "@/components/site/logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "CarpSync is built by Karp Studio to give fisheries a booking system designed specifically around how lakes, swims and anglers actually work.",
};

const genericProblems = [
  "Time slots and staff rotas that don't map to lakes or swims",
  "No concept of multi-night stays or full-lake bookings",
  "Extras like bait, food and accommodation bolted on awkwardly",
  "Generic language that confuses anglers mid-booking",
];

const carpsyncAnswers = [
  "Lakes, swims and capacity modelled exactly as they exist",
  "Multi-night and full-lake bookings handled natively",
  "Bait, food and accommodation sold inside the same checkout",
  "A booking flow anglers instantly understand",
];

const principles = [
  {
    icon: Target,
    title: "Fishery-first, always",
    description:
      "Every decision starts from how fisheries actually operate, not from a generic template we've reshaped.",
  },
  {
    icon: Sparkles,
    title: "Simple by default",
    description:
      "Features remove admin rather than adding another system owners have to learn and maintain.",
  },
  {
    icon: Layers,
    title: "One connected record",
    description:
      "Availability, payments, extras and customers feed the same booking, so nothing is re-entered.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CarpSync"
        title="Booking software built specifically for fisheries"
        description="CarpSync exists because fisheries deserve a booking system designed around lakes, swims and anglers — not a generic scheduler with fishing terms bolted on."
      />

      {/* Why CarpSync exists */}
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader
            eyebrow="Why we exist"
            title="Running a fishery is hard enough without fighting your software"
          />
          <div className="flex flex-col gap-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Most fishery owners we spoke to were running bookings through a
              patchwork of spreadsheets, messages and paper diaries — or bending
              a booking tool built for salons and clinics into something that
              almost worked.
            </p>
            <p>
              Double bookings, chasing balances and answering the same questions
              over and over were quietly eating into time that should have been
              spent on the water. CarpSync was built to take that weight off,
              with software that understands fisheries from the first click.
            </p>
          </div>
        </div>
      </Section>

      {/* The problem with generic booking software (dark) */}
      <Section tone="charcoal">
        <SectionHeader
          invert
          align="center"
          eyebrow="The problem"
          title="Generic booking software wasn't built for this"
          description="Tools designed for appointments treat every booking the same. Fisheries don't work that way."
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-4 text-sm font-semibold text-white/60">
              Generic scheduling tools
            </p>
            <ul className="flex flex-col gap-3">
              {genericProblems.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--brand-lime)]/30 bg-[var(--brand-green)]/15 p-6">
            <p className="mb-4 text-sm font-semibold text-[var(--brand-lime)]">
              CarpSync
            </p>
            <ul className="flex flex-col gap-3">
              {carpsyncAnswers.map((answer) => (
                <li
                  key={answer}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-white"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--brand-lime)]" />
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Why fishery-specific workflows matter */}
      <Section tone="pale">
        <SplitFeature
          eyebrow="Fishery-specific by design"
          title="The details are the whole point"
          description="When software mirrors how your venue actually runs, bookings get accurate and admin gets quiet. That only happens when the workflow is built around fisheries from the start."
          points={[
            "Availability that thinks in lakes and swims, not time slots",
            "Multi-night stays and full-lake bookings handled natively",
            "Extras and payments that belong to the same booking record",
          ]}
          visual={<BookingCalendar />}
        />
      </Section>

      {/* Product principles */}
      <Section>
        <SectionHeader
          eyebrow="Product principles"
          title="What guides how we build"
        />
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-heading text-2xl font-bold text-[var(--brand-green)]">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <principle.icon className="size-6 text-foreground" />
              <h3 className="font-heading text-lg font-bold text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Built by / under Karp Studio */}
      <Section tone="pale">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionHeader
              eyebrow="Part of Karp Studio"
              title="Built and backed by Karp Studio"
              description="Karp Studio builds focused software for the angling world. CarpSync is its booking platform for fisheries, lakes and venues — shaped by direct conversations with the people running them day to day."
            />
            <Link
              href="/ecosystem"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--brand-green)]"
            >
              Explore the Karp Studio ecosystem
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                Karp Studio ecosystem
              </span>
            </div>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              &ldquo;We build tools we&apos;d want to use ourselves — focused,
              uncomplicated and made for the way anglers and fisheries actually
              operate.&rdquo;
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-foreground">
                The Karp Studio team
              </p>
              <p className="text-sm text-muted-foreground">
                Focused tools for the angling world.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Large product UI section (dark) */}
      <Section tone="charcoal">
        <SectionHeader
          invert
          eyebrow="The product"
          title="Everything comes together in one clear view"
          description="The owner dashboard brings availability, arrivals, payments and occupancy into a single place — the heart of running your fishery with CarpSync."
        />
        <div className="mt-10 lg:scale-[1.08] lg:transform">
          <DashboardPreview />
        </div>
      </Section>

      <CtaSection
        title="Want to learn more about CarpSync?"
        description="Book a demo and talk to the team building CarpSync directly."
      />
    </>
  );
}
