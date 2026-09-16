import { Tent, UtensilsCrossed, Wheat, Plane } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { FeatureCard } from "@/components/site/feature-card";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";
import { CtaSection } from "@/components/site/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "French Carp Lakes",
  description:
    "CarpSync for French carp lakes — week-long stays, accommodation, food packages and staged payments in one booking system.",
  path: "/french-fisheries",
});

const features = [
  {
    icon: Tent,
    title: "Accommodation",
    description: "Bookable lodges, chalets or on-site accommodation options.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food packages",
    description: "Breakfast, evening meal and full-board packages as extras.",
  },
  {
    icon: Wheat,
    title: "Bait & particle",
    description: "Pre-order bait and particle ahead of a week-long stay.",
  },
  {
    icon: Plane,
    title: "Transfers",
    description: "Airport transfer add-ons for travelling anglers.",
  },
];

export default function FrenchFisheriesPage() {
  return (
    <>
      <PageHero
        eyebrow="French Carp Lakes"
        title="Booking software for French carp holiday venues"
        description="CarpSync fits the week-long, holiday-style bookings typical of French carp lakes — accommodation, food, bait and staged payments in one flow."
      />

      <Section>
        <SectionHeader
          eyebrow="Built for the stay"
          title="Everything a week-long carp holiday needs"
          description="Package the full stay into a single booking, instead of managing accommodation, food and bait separately."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section tone="pale">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeader
            eyebrow="Staged payments"
            title="Deposits and balances built for longer stays"
            description="Take a deposit to secure a week-long booking, then collect the balance and any extras as arrival approaches — all tracked automatically."
          />
          <MobileBookingPreview />
        </div>
      </Section>

      <CtaSection
        title="See CarpSync configured for a French carp lake"
        description="Book a demo and we'll walk through accommodation, food packages and staged payments."
      />
    </>
  );
}
