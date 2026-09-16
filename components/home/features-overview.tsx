import {
  CalendarClock,
  Fish,
  Users,
  CreditCard,
  Package,
  BarChart3,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { BookingCalendar } from "@/components/site/booking-calendar";
import { PaymentDetail } from "@/components/site/payment-detail";
import { CustomerRecord } from "@/components/site/customer-record";

const capabilities = [
  { icon: CalendarClock, label: "Live availability" },
  { icon: Fish, label: "Lakes & swims" },
  { icon: Users, label: "Customer records" },
  { icon: CreditCard, label: "Payments & balances" },
  { icon: Package, label: "Optional extras" },
  { icon: BarChart3, label: "Occupancy & revenue" },
];

export function FeaturesOverview() {
  return (
    <Section tone="pale" size="lg" id="features">
      <SectionHeader
        align="center"
        eyebrow="The platform"
        title="Everything you need to run fishery bookings"
        description="A complete booking system built around lakes, swims, extras and payments — see the whole operation at a glance, not stitched together across spreadsheets and inboxes."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.55fr_1fr] lg:items-start">
        <div className="relative">
          <BookingCalendar />
          <span className="absolute -top-3 right-4 hidden items-center gap-1.5 rounded-full bg-[var(--brand-green)] px-3 py-1 text-[11px] font-semibold text-white shadow-lg xl:inline-flex">
            <span className="size-1.5 rounded-full bg-[var(--brand-lime)]" />
            Live availability, per swim
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <PaymentDetail />
          <CustomerRecord />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {capabilities.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3"
          >
            <c.icon className="size-4 shrink-0 text-[var(--brand-green)]" />
            <span className="text-xs font-semibold text-foreground">{c.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
