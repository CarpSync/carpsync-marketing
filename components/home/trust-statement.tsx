import { Section, SectionHeader } from "@/components/site/section";

const concepts = [
  "Day tickets",
  "Exclusive lake bookings",
  "Swim bookings",
  "Multiple lakes",
  "Fishing holidays",
  "Syndicates",
  "Optional extras",
  "Deposits & balances",
];

export function TrustStatement() {
  return (
    <Section className="border-b border-border">
      <SectionHeader
        align="center"
        title="Booking software designed around how fisheries actually operate."
        description="CarpSync isn't generic appointment software with fishing terms bolted on. Every part of the platform is built around the way fisheries, lakes and holiday venues actually take bookings."
      />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {concepts.map((concept) => (
          <span
            key={concept}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
          >
            {concept}
          </span>
        ))}
      </div>
    </Section>
  );
}
