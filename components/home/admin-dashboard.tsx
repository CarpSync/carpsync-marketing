import {
  CalendarDays,
  ClipboardList,
  UserRound,
  CircleDollarSign,
  Package,
  Gauge,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { DashboardPreview } from "@/components/site/dashboard-preview";

const capabilities = [
  { icon: CalendarDays, label: "Upcoming arrivals" },
  { icon: Gauge, label: "Live occupancy" },
  { icon: CircleDollarSign, label: "Balances due" },
  { icon: ClipboardList, label: "Booking status" },
  { icon: UserRound, label: "Customer records" },
  { icon: Package, label: "Extras per booking" },
];

export function AdminDashboardSection() {
  return (
    <Section tone="charcoal" size="lg">
      <SectionHeader
        invert
        align="center"
        eyebrow="For fishery owners"
        title="Your bookings. Your lakes. One place."
        description="Everything you need to run the fishery day to day — arrivals, availability, customers, payments and extras — in a single, clear dashboard."
      />

      <div className="mt-10">
        <DashboardPreview />
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {capabilities.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm font-medium text-white"
          >
            <item.icon className="size-4 shrink-0 text-[var(--brand-lime)]" />
            {item.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}
