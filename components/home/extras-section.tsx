import {
  Wheat,
  UtensilsCrossed,
  Tent,
  Package,
  Plane,
  Fence,
  Users,
  UserPlus,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";

const extras = [
  { icon: Wheat, label: "Bait packages" },
  { icon: Package, label: "Particle" },
  { icon: UtensilsCrossed, label: "Food packages" },
  { icon: Fence, label: "Tackle hire" },
  { icon: Tent, label: "Accommodation" },
  { icon: Plane, label: "Airport transfers" },
  { icon: Package, label: "Equipment hire" },
  { icon: UserPlus, label: "Extra anglers" },
  { icon: Users, label: "Non-angling guests" },
];

export function ExtrasSection() {
  return (
    <Section tone="pale">
      <SectionHeader
        eyebrow="Optional extras"
        title="Increase booking value without extra admin"
        description="Add-ons can be offered directly during the booking journey, so anglers can build their trip in one checkout instead of a follow-up email."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {extras.map((extra) => (
          <div
            key={extra.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
              <extra.icon className="size-4.5" />
            </span>
            <span className="text-xs font-medium text-foreground">
              {extra.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
