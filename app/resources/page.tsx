import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { Faq } from "@/components/site/faq";
import { CtaSection } from "@/components/site/cta-section";
import { homeFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, help and answers for fisheries getting set up with CarpSync's online booking system.",
};

const guides = [
  {
    icon: BookOpen,
    title: "Getting started with CarpSync",
    description:
      "An overview of setting up your lakes, swims and first booking rules.",
  },
  {
    icon: LifeBuoy,
    title: "Setting up payments",
    description:
      "How deposits, balances and full payments are configured for your venue.",
  },
  {
    icon: HelpCircle,
    title: "Adding optional extras",
    description:
      "Configure bait, food and accommodation add-ons for the booking flow.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Guides and answers for getting set up"
        description="Everything you need to understand how CarpSync fits your fishery, before and after you get started."
      />

      <Section id="guides">
        <SectionHeader eyebrow="Guides" title="Popular guides" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
                <guide.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {guide.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
              </div>
              <Link
                href="/demo"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-green)]"
              >
                Talk to us about this
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="pale">
        <SectionHeader eyebrow="Help centre" title="Frequently asked questions" />
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
