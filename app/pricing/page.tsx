import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { PricingCard } from "@/components/site/pricing-card";
import { Faq } from "@/components/site/faq";
import { CtaSection } from "@/components/site/cta-section";
import { pricingPlans } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "CarpSync plans for fisheries of every size, from a single lake to multi-venue operations. Pricing is confirmed on a demo.",
  path: "/pricing",
});

const pricingFaqs = [
  {
    question: "How is pricing confirmed?",
    answer:
      "Plans are confirmed on a demo, based on your lakes, swims and booking volume. There are no published prices on this site yet.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Setup details are discussed during your demo, based on the size and complexity of your venue.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes. As your fishery grows, you can move to a plan that better fits your number of lakes and bookings.",
  },
  {
    question: "Do you offer multi-lake pricing?",
    answer:
      "Yes. The Multi-Lake plan is designed for venues and groups managing more than one site.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing built around your fishery, not a generic tier"
        description="Book a demo to get pricing confirmed for your lakes, swims and booking volume."
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} ctaLabel="Talk to CarpSync" />
          ))}
        </div>
      </Section>

      <Section tone="pale">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Pricing questions" />
          <Faq items={pricingFaqs} />
        </div>
      </Section>

      <CtaSection
        title="Get pricing for your fishery"
        description="Book a demo and we'll confirm pricing based on your lakes and booking needs."
      />
    </>
  );
}
