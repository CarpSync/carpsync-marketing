import Link from "next/link";
import {
  ArrowRight,
  Search,
  Rocket,
  CalendarCheck,
  CreditCard,
  Globe,
  Fish,
  Settings2,
  BookOpen,
  MessageCircle,
  PlayCircle,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { Faq } from "@/components/site/faq";
import { CtaSection } from "@/components/site/cta-section";
import { homeFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Guides, help and answers for fisheries getting set up with CarpSync — from first setup to payments, website integration and day-to-day operations.",
  path: "/resources",
});

const categories = [
  { icon: Rocket, name: "Getting Started" },
  { icon: CalendarCheck, name: "Bookings" },
  { icon: CreditCard, name: "Payments" },
  { icon: Globe, name: "Website Integration" },
  { icon: Fish, name: "French Fisheries" },
  { icon: Settings2, name: "Fishery Operations" },
];

const articles = [
  {
    category: "Getting Started",
    title: "Setting up your lakes, swims and capacity",
  },
  {
    category: "Bookings",
    title: "Creating booking rules and minimum stays",
  },
  {
    category: "Payments",
    title: "Configuring deposits and balance collection",
  },
  {
    category: "Website Integration",
    title: "Adding the booking flow to your existing website",
  },
  {
    category: "French Fisheries",
    title: "Handling multi-night bookings and extras for French lakes",
  },
  {
    category: "Fishery Operations",
    title: "Managing arrivals, occupancy and the season calendar",
  },
];

const upcomingGuides = [
  {
    title: "Your first 30 minutes with CarpSync",
    meta: "Getting Started",
  },
  {
    title: "Taking your first online payment",
    meta: "Payments",
  },
  {
    title: "Embedding booking on your website",
    meta: "Website Integration",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides, help and answers in one place"
        description="Everything you need to understand and run CarpSync — from your first setup to payments, website integration and day-to-day fishery operations."
        primaryLabel={null}
      />

      <Section size="compact">
        <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden />
          <input
            type="search"
            disabled
            placeholder="Search guides, help articles and answers…"
            aria-label="Search guides (coming soon)"
            className="min-w-0 flex-1 bg-transparent text-sm text-muted-foreground outline-none"
          />
          <span className="ml-auto hidden rounded-lg bg-[var(--brand-green)] px-3.5 py-1.5 text-xs font-semibold text-white sm:inline">
            Coming soon
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-4"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
                <category.icon className="size-5" aria-hidden />
              </span>
              <span className="text-xs font-semibold leading-tight text-foreground">
                {category.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="pale" size="compact">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-[var(--brand-charcoal)] p-7 text-white sm:p-9">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/75">
                <span className="size-1.5 rounded-full bg-[var(--brand-lime)]" />
                Featured guide
              </span>
              <h3 className="text-balance font-heading text-2xl font-bold leading-tight md:text-3xl">
                The complete guide to launching bookings on your fishery
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-white/70 md:text-base">
                From modelling your lakes to taking your first online deposit —
                a start-to-finish walkthrough of getting CarpSync live.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-lime)]">
              Coming soon
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Start here
            </p>
            {upcomingGuides.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">
                    {item.meta} · Coming soon
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="guides">
        <SectionHeader
          eyebrow="Knowledge base"
          title="Browse by topic"
          description="Practical, fishery-specific articles covering setup, bookings, payments and operations."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                {article.category}
              </span>
              <h3 className="text-pretty font-heading text-base font-bold leading-snug text-foreground">
                {article.title}
              </h3>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-[11px] text-muted-foreground">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="charcoal">
        <SectionHeader
          invert
          eyebrow="Help centre"
          title="Need a hand getting set up?"
          description="Whether you prefer to read, ask or watch, there's a way to get the answer you need."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-lime)]">
              <BookOpen className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading text-base font-bold text-white">
              Documentation
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Step-by-step guides covering every part of CarpSync.
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-lime)]">
              Coming soon
            </span>
          </div>

          <Link
            href="/demo"
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-lime)]">
              <MessageCircle className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading text-base font-bold text-white">
              Talk to us
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Questions specific to your venue? We&apos;re happy to help.
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-lime)]">
              Contact support
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            href="/demo"
            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[var(--brand-lime)]">
              <PlayCircle className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading text-base font-bold text-white">
              Book a walkthrough
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              See CarpSync configured around your lakes and swims.
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-lime)]">
              Book a demo
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </Section>

      <Section tone="pale">
        <SectionHeader eyebrow="Answers" title="Frequently asked questions" />
        <div className="mt-10">
          <Faq items={homeFaqs} />
        </div>
      </Section>

      <CtaSection
        title="Can't find what you need?"
        description="Get in touch and we'll answer questions specific to your fishery."
        primaryLabel="Contact Us"
      />
    </>
  );
}
