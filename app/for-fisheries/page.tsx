import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { UseCaseTabs } from "@/components/site/use-case-tabs";
import { ComparisonTable } from "@/components/site/comparison-table";
import { CtaSection } from "@/components/site/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Fisheries",
  description:
    "CarpSync adapts to commercial fisheries, French carp lakes, exclusive hire lakes, syndicates and fishing holiday venues.",
  path: "/for-fisheries",
});

const cases = [
  {
    value: "commercial",
    label: "Commercial Fisheries",
    title: "Commercial Fisheries",
    description:
      "High volumes of day tickets and swim bookings, handled without the admin overload of manual booking.",
    points: [
      "Day ticket & session bookings",
      "Multiple swims per lake",
      "Peak-day capacity rules",
      "Fast, self-service checkout",
    ],
    visual: "dashboard" as const,
    visualLabel: "app.carpsync.com/commercial",
  },
  {
    value: "hire",
    label: "Exclusive Hire Lakes",
    title: "Exclusive Hire Lakes",
    description:
      "Full-lake and group bookings, with clear visibility on arrivals, group size and payment status.",
    points: [
      "Full-lake exclusive bookings",
      "Group size & angler counts",
      "Shared arrival information",
      "Simple deposit collection",
    ],
    visual: "dashboard" as const,
    visualLabel: "app.carpsync.com/exclusive-hire",
  },
  {
    value: "holidays",
    label: "Fishing Holidays",
    title: "Fishing Holidays",
    description:
      "Multi-night stays, staged payments and extras for holiday-style fishing venues.",
    points: [
      "Multi-night holiday stays",
      "Deposit & balance scheduling",
      "Transfers & equipment extras",
      "Non-angling guest details",
    ],
    visual: "mobile" as const,
  },
  {
    value: "syndicate",
    label: "Syndicates",
    title: "Syndicates",
    description:
      "Member bookings and controlled availability, without spreadsheets or group messages.",
    points: [
      "Member booking access",
      "Controlled swim availability",
      "Session limits per member",
      "Central booking record",
    ],
    visual: "dashboard" as const,
    visualLabel: "app.carpsync.com/syndicate",
  },
];

export default function ForFisheriesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Fisheries"
        title="Built to fit the way your venue already runs"
        description="Whether you run day tickets, exclusive hire, holidays or a syndicate, CarpSync adapts to how bookings actually work at your fishery."
      />

      <Section>
        <UseCaseTabs cases={cases} />
      </Section>

      <Section tone="pale">
        <SectionHeader
          align="center"
          eyebrow="Why switch"
          title="Move on from manual booking admin"
          description="See how a dedicated fishery booking system compares to managing everything by hand."
        />
        <div className="mt-12">
          <ComparisonTable />
        </div>
      </Section>

      <CtaSection
        title="Tell us about your fishery"
        description="Book a demo and we'll show you CarpSync set up for your specific venue type."
      />
    </>
  );
}
