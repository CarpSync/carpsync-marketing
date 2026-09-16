import type { Metadata } from "next";
import {
  Smartphone,
  BarChart3,
  ShieldCheck,
  SlidersHorizontal,
  Fish,
  FileText,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { SplitFeature } from "@/components/site/split-feature";
import { FeatureCard } from "@/components/site/feature-card";
import { CtaSection } from "@/components/site/cta-section";
import { BookingCalendar } from "@/components/site/booking-calendar";
import { PaymentDetail } from "@/components/site/payment-detail";
import { CustomerRecord } from "@/components/site/customer-record";
import { ExtrasCheckout } from "@/components/site/extras-checkout";
import { AutomationTimeline } from "@/components/site/automation-timeline";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CarpSync's full feature set — availability, payments, customers, extras and automation, built specifically for fisheries.",
};

const secondaryFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-friendly booking",
    description: "A booking experience that works on any device, anywhere.",
  },
  {
    icon: BarChart3,
    title: "Occupancy insight",
    description: "Understand booking trends and occupancy across your season.",
  },
  {
    icon: SlidersHorizontal,
    title: "Booking rules",
    description: "Minimum stays, arrival days and capacity limits per lake.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description: "Confirmations and reminders anglers can trust and rely on.",
  },
  {
    icon: Fish,
    title: "Multi-lake modelling",
    description: "Run several lakes, swims and full-lake bookings side by side.",
  },
  {
    icon: FileText,
    title: "Booking records",
    description: "Every booking stored centrally with a full paper trail.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything a fishery needs, in one platform"
        description="Every feature is built specifically for fisheries — not adapted from generic scheduling software. Here's a closer look at how each part works."
      />

      <Section>
        <SplitFeature
          eyebrow="Booking & availability"
          title="Real-time availability across every lake and swim"
          description="Model your venue exactly as it exists, then let live availability keep bookings accurate to the minute."
          points={[
            "Live availability that prevents double bookings",
            "Lakes, swims and full-lake bookings modelled your way",
            "Booking rules for minimum stays, arrival days and capacity",
          ]}
          visual={<BookingCalendar />}
        />
      </Section>

      <Section tone="pale">
        <SplitFeature
          reverse
          eyebrow="Payments"
          title="Deposits, balances and payment status in one place"
          description="Take a deposit at the point of booking and collect the balance later, with a clear view of what's paid and what's outstanding."
          points={[
            "Secure card payments taken at checkout",
            "Deposit now, balance collected automatically later",
            "See what's paid, due or outstanding at a glance",
          ]}
          visual={<PaymentDetail />}
        />
      </Section>

      <Section>
        <SplitFeature
          eyebrow="Customers"
          title="A complete record behind every booking"
          description="Every booking is linked to a customer record, so contact details, history and notes build up over time in one place."
          points={[
            "Contact details stored centrally per angler",
            "Full booking history and lifetime value",
            "Notes and preferences for repeat visitors",
          ]}
          visual={<CustomerRecord />}
        />
      </Section>

      <Section tone="charcoal">
        <SplitFeature
          reverse
          invert
          eyebrow="Extras"
          title="Sell more with every booking"
          description="Offer bait, food, accommodation and other add-ons inside the same checkout, so extras become part of the booking, not an afterthought."
          points={[
            "Bait and food packages added at checkout",
            "Accommodation and lakeside add-ons",
            "Extra anglers, equipment hire and transfers",
          ]}
          visual={<ExtrasCheckout />}
        />
      </Section>

      <Section tone="pale">
        <SplitFeature
          eyebrow="Automation"
          title="The right message, sent at the right time"
          description="Confirmations, reminders and pre-arrival details go out automatically from your fishery's inbox, without anyone lifting a finger."
          points={[
            "Instant booking confirmations and receipts",
            "Automatic balance reminders before arrival",
            "Pre-arrival directions, rules and gate codes",
          ]}
          visual={
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <AutomationTimeline />
            </div>
          }
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="And more"
          title="The details that keep everything running"
          description="Smaller features that round out the platform and keep your season organised."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want to see these features on your own lakes?"
        description="Book a demo and we'll walk through CarpSync configured for your venue."
      />
    </>
  );
}
