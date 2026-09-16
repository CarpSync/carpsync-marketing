import {
  CalendarClock,
  Fish,
  Wallet,
  Package,
  MailCheck,
  Smartphone,
} from "lucide-react";
import { Section } from "@/components/site/section";

const items = [
  { icon: CalendarClock, label: "Live Availability", sub: "Real-time, per swim" },
  { icon: Fish, label: "Lake & Swim Management", sub: "Every venue mapped" },
  { icon: Wallet, label: "Deposits & Balances", sub: "Staged payments" },
  { icon: Package, label: "Optional Extras", sub: "Sold at checkout" },
  { icon: MailCheck, label: "Automated Emails", sub: "Sent for you" },
  { icon: Smartphone, label: "Mobile Booking", sub: "Book from anywhere" },
];

export function TrustStatement() {
  return (
    <Section size="compact" className="border-b border-border">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
              <item.icon className="size-4.5" />
            </span>
            <p className="text-sm font-semibold leading-tight text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
