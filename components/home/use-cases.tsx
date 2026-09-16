import { Section, SectionHeader } from "@/components/site/section";
import { UseCaseTabs } from "@/components/site/use-case-tabs";

const cases = [
  {
    value: "commercial",
    label: "Commercial Fisheries",
    title: "Commercial Fisheries",
    description:
      "For day tickets, lake bookings and multiple swims — handle high booking volume without the admin overload.",
    points: [
      "Day ticket & session bookings",
      "Multiple swims per lake",
      "Peak-day capacity rules",
      "Fast, self-service checkout",
    ],
  },
  {
    value: "french",
    label: "French Carp Lakes",
    title: "French Carp Lakes",
    description:
      "For weekly bookings, accommodation, food packages, bait and extras across a premium carp holiday venue.",
    points: [
      "Week-long stay bookings",
      "Accommodation & food packages",
      "Bait and particle add-ons",
      "Staged deposits and balances",
    ],
  },
  {
    value: "hire",
    label: "Exclusive Hire Lakes",
    title: "Exclusive Hire Lakes",
    description:
      "Manage full-lake bookings and group bookings, with clear visibility on who is arriving and when.",
    points: [
      "Full-lake exclusive bookings",
      "Group size & angler counts",
      "Shared arrival information",
      "Simple deposit collection",
    ],
  },
  {
    value: "syndicate",
    label: "Syndicates",
    title: "Syndicates",
    description:
      "Manage member bookings and controlled availability without spreadsheets or messages between members.",
    points: [
      "Member booking access",
      "Controlled swim availability",
      "Session limits per member",
      "Central booking record",
    ],
  },
  {
    value: "holidays",
    label: "Fishing Holidays",
    title: "Fishing Holidays",
    description:
      "Handle longer stays, deposits, balances and extras for holiday-style fishing venues and packages.",
    points: [
      "Multi-night holiday stays",
      "Deposit & balance scheduling",
      "Transfers & equipment extras",
      "Non-angling guest details",
    ],
  },
];

export function UseCases() {
  return (
    <Section id="for-fisheries">
      <SectionHeader
        eyebrow="Built around fisheries"
        title="Whatever kind of venue you run, CarpSync fits how it works"
        description="Select a venue type to see how CarpSync adapts to the way it actually takes bookings."
      />
      <div className="mt-10">
        <UseCaseTabs cases={cases} />
      </div>
    </Section>
  );
}
