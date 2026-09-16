import { Users, SlidersHorizontal, Smartphone } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { FeatureCard } from "@/components/site/feature-card";
import { SplitFeature } from "@/components/site/split-feature";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";
import { Timeline } from "@/components/site/timeline";

const secondaryFeatures = [
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Keep booking and customer information organised in one place.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Booking Rules",
    description:
      "Control arrival dates, minimum stays, capacities and restrictions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Customers can book easily from their phone, start to finish.",
  },
];

const automationSteps = [
  {
    title: "Confirmation sent",
    description: "The angler receives an automatic booking confirmation.",
  },
  {
    title: "Payment reminder",
    description: "A reminder goes out automatically if a balance is due.",
  },
  {
    title: "Arrival information",
    description: "Details anglers need ahead of their visit are sent out.",
  },
];

export function FeaturesOverview() {
  return (
    <Section tone="pale" id="features">
      <SectionHeader
        eyebrow="Platform"
        title="Everything a fishery needs to take bookings online"
        description="A complete booking system built around lakes, swims, extras and payments — not a generic scheduler stretched to fit."
      />

      <div className="mt-16 flex flex-col gap-20">
        <SplitFeature
          eyebrow="Availability"
          title="Live availability, right down to the swim"
          description="Customers see exactly what's free before they book — by lake, by swim, by session — so you're never stuck confirming a date that's already taken."
          points={[
            "Real-time availability across every lake",
            "Capacity and booking rules enforced automatically",
            "One calendar instead of a notebook and a phone",
          ]}
          visual={<DashboardPreview />}
        />

        <SplitFeature
          reverse
          eyebrow="Extras & payments"
          title="Extras and payment, in the same checkout"
          description="Anglers add bait, food packages or accommodation upgrades as they book, then pay securely in one step — no follow-up calls, no separate invoices."
          points={[
            "Bait, food and accommodation add-ons at checkout",
            "Deposits, balances or full payment on your terms",
            "Clear payment status on every booking",
          ]}
          visual={
            <div className="flex justify-center">
              <MobileBookingPreview className="max-w-[280px]" />
            </div>
          }
        />

        <SplitFeature
          eyebrow="Automated communication"
          title="Less chasing, fewer messages"
          description="CarpSync handles the repetitive messages that eat into a fishery owner's week — confirmations, reminders and arrival details, sent automatically."
          points={[
            "Confirmations sent the moment payment lands",
            "Automatic reminders for outstanding balances",
            "Arrival information delivered without lifting a finger",
          ]}
          visual={
            <div className="rounded-2xl border border-border bg-card p-7">
              <Timeline steps={automationSteps} />
            </div>
          }
        />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {secondaryFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
