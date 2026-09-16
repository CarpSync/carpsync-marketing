import { Section } from "@/components/site/section";
import { SplitFeature } from "@/components/site/split-feature";
import { ExtrasCheckout } from "@/components/site/extras-checkout";

export function ExtrasSection() {
  return (
    <Section tone="charcoal">
      <SplitFeature
        invert
        eyebrow="Optional extras"
        title="Increase booking value without extra admin"
        description="Bait, food packages, accommodation and upgrades are offered right inside the booking journey, so anglers build their trip in one checkout instead of a follow-up email."
        points={[
          "Add-ons offered during the booking flow",
          "Bait, particle, food, accommodation and transfers",
          "Extra anglers and non-angling guests handled cleanly",
          "Every extra attached to the booking and paid up front",
        ]}
        visual={<ExtrasCheckout />}
      />
    </Section>
  );
}
