import {
  CalendarCheck,
  Fish,
  CreditCard,
  Package,
  Mail,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";
import { FeatureCard } from "@/components/site/feature-card";
import { CtaSection } from "@/components/site/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Product",
  description:
    "See how CarpSync's booking calendar, availability, payments and customer management work together for fisheries.",
  path: "/product",
});

const pillars = [
  {
    icon: Fish,
    title: "Lakes & swims",
    description:
      "Model your venue exactly as it exists — lakes, swims, capacity and access rules.",
  },
  {
    icon: CalendarCheck,
    title: "Live availability",
    description:
      "Availability updates in real time as bookings are made, so double bookings can't happen.",
  },
  {
    icon: CreditCard,
    title: "Payments built in",
    description:
      "Deposits, balances and full payments are collected securely as part of booking.",
  },
  {
    icon: Package,
    title: "Optional extras",
    description:
      "Offer bait, food, accommodation and other add-ons in the same checkout.",
  },
  {
    icon: Users,
    title: "Customer records",
    description:
      "Every booking is linked to a customer record, building venue history over time.",
  },
  {
    icon: Mail,
    title: "Automated messaging",
    description:
      "Confirmations, reminders and arrival details go out without manual effort.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One platform for every part of the booking process"
        description="CarpSync brings availability, payments, extras and communication together, so fishery owners spend less time on admin and more time on the water."
      />

      <Section>
        <SectionHeader
          eyebrow="Owner dashboard"
          title="A clear view of every booking, every lake"
          description="See upcoming arrivals, payment status and occupancy without digging through spreadsheets or messages."
        />
        <div className="mt-10">
          <DashboardPreview />
        </div>
      </Section>

      <Section tone="pale">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Customer experience"
              title="A booking journey that feels effortless"
              description="Anglers choose a lake, pick dates from real availability, add extras and pay — all from their phone."
            />
          </div>
          <MobileBookingPreview />
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Core pillars"
          title="Everything works together, not in silos"
          description="Each part of CarpSync is designed to feed the same booking record, so nothing needs to be re-entered or reconciled."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="See the full product in a live walkthrough"
        description="Book a demo and we'll show you CarpSync configured around your lakes and swims."
      />
    </>
  );
}
