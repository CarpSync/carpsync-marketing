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
  { icon: CalendarDays, label: "Full booking calendar" },
  { icon: ClipboardList, label: "Organised booking list" },
  { icon: UserRound, label: "Customer details & history" },
  { icon: CircleDollarSign, label: "Payment & balance status" },
  { icon: Package, label: "Extras attached to each booking" },
  { icon: Gauge, label: "Live availability & occupancy" },
];

export function AdminDashboardSection() {
  return (
    <Section tone="pale">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="For fishery owners"
            title="Your bookings. Your lakes. One place."
            description="Everything you need to run the fishery day to day — bookings, availability, customers, payments and extras — sits in a single, clear dashboard."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-3 text-sm font-medium text-foreground"
              >
                <item.icon className="size-4 text-[var(--brand-green)]" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <DashboardPreview />
      </div>
    </Section>
  );
}
