import { Section, SectionHeader } from "@/components/site/section";
import { ComparisonTable } from "@/components/site/comparison-table";

export function ComparisonSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why CarpSync"
        align="center"
        title="Manual booking vs. CarpSync"
        description="See how a centralised booking system compares to the day-to-day reality of managing bookings by hand."
      />
      <div className="mt-12">
        <ComparisonTable />
      </div>
    </Section>
  );
}
