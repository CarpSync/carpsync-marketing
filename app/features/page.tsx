import type { Metadata } from "next";
import {
  CalendarCheck,
  CreditCard,
  Fish,
  Package,
  Mail,
  Users,
  SlidersHorizontal,
  Smartphone,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { FeatureCard } from "@/components/site/feature-card";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CarpSync's full feature set — availability, payments, extras, customer management, automation and reporting.",
};

const groups = [
  {
    title: "Booking & availability",
    features: [
      {
        icon: CalendarCheck,
        title: "Live availability",
        description: "Real-time availability prevents double bookings.",
      },
      {
        icon: Fish,
        title: "Lakes & swims",
        description: "Model multiple lakes, swims and full-lake bookings.",
      },
      {
        icon: SlidersHorizontal,
        title: "Booking rules",
        description: "Set minimum stays, arrival days and capacity limits.",
      },
    ],
  },
  {
    title: "Payments",
    features: [
      {
        icon: CreditCard,
        title: "Online payments",
        description: "Accept card payments securely at checkout.",
      },
      {
        icon: Package,
        title: "Deposits & balances",
        description: "Take a deposit now and collect balances later.",
      },
      {
        icon: BarChart3,
        title: "Payment status",
        description: "See what's paid, due or outstanding at a glance.",
      },
    ],
  },
  {
    title: "Communication",
    features: [
      {
        icon: Mail,
        title: "Automated emails",
        description: "Confirmations and reminders sent without lifting a finger.",
      },
      {
        icon: Users,
        title: "Customer records",
        description: "Booking history and contact details stored centrally.",
      },
      {
        icon: ShieldCheck,
        title: "Reliable delivery",
        description: "Booking confirmations anglers can trust and rely on.",
      },
    ],
  },
  {
    title: "Everywhere your customers are",
    features: [
      {
        icon: Smartphone,
        title: "Mobile friendly",
        description: "A booking experience that works on any device.",
      },
      {
        icon: Package,
        title: "Optional extras",
        description: "Sell bait, food and accommodation as part of booking.",
      },
      {
        icon: BarChart3,
        title: "Occupancy insight",
        description: "Understand booking trends across your season.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="A closer look at what CarpSync includes"
        description="Every feature is built specifically for fisheries — not adapted from generic scheduling software."
      />

      {groups.map((group, index) => (
        <Section key={group.title} tone={index % 2 === 1 ? "pale" : "default"}>
          <SectionHeader title={group.title} />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Section>
      ))}

      <CtaSection
        title="Want to see these features on your own lakes?"
        description="Book a demo and we'll walk through CarpSync configured for your venue."
      />
    </>
  );
}
