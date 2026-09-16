import {
  CalendarCheck,
  CreditCard,
  Fish,
  Package,
  Mail,
  Users,
  SlidersHorizontal,
  Smartphone,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { FeatureCard } from "@/components/site/feature-card";

const features = [
  {
    icon: CalendarCheck,
    title: "Live Availability",
    description: "Customers see real-time availability before booking.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description: "Take deposits, balances or full payment securely.",
  },
  {
    icon: Fish,
    title: "Lake & Swim Management",
    description: "Manage lakes, swims, capacity and booking rules.",
  },
  {
    icon: Package,
    title: "Optional Extras",
    description:
      "Sell bait, food packages, particle, accommodation upgrades and other add-ons.",
  },
  {
    icon: Mail,
    title: "Automated Emails",
    description:
      "Send confirmations, reminders and arrival information automatically.",
  },
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
    description: "Customers can book easily from their phone.",
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
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </Section>
  );
}
