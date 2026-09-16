import { Section, SectionHeader } from "@/components/site/section";
import { PricingCard } from "@/components/site/pricing-card";
import { pricingPlans } from "@/lib/pricing";

export function PricingPreview() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        align="center"
        title="Simple pricing built around your fishery"
        description="Plans are confirmed on a demo, based on your lakes, swims and booking volume."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} ctaLabel="Talk to CarpSync" />
        ))}
      </div>
    </Section>
  );
}
