import { Check, ChevronLeft } from "lucide-react";
import { PhoneFrame } from "@/components/site/screenshot-frame";

const extras = [
  { label: "Bait package — particle & pellet", price: "£25", selected: true },
  { label: "Bacon & egg breakfast pack", price: "£12", selected: true },
  { label: "Extra angler", price: "£40", selected: false },
];

export function MobileBookingPreview({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <ChevronLeft className="size-3.5" />
          Willow Lake — Swim 4
        </div>

        <div>
          <p className="text-[11px] font-medium text-muted-foreground">
            Step 3 of 6
          </p>
          <h4 className="font-heading text-sm font-bold text-foreground">
            Optional extras
          </h4>
        </div>

        <div className="flex flex-col gap-2">
          {extras.map((extra) => (
            <div
              key={extra.label}
              className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-2.5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    extra.selected
                      ? "flex size-4 shrink-0 items-center justify-center rounded bg-[var(--brand-green)] text-white"
                      : "size-4 shrink-0 rounded border border-border"
                  }
                >
                  {extra.selected ? <Check className="size-3" /> : null}
                </span>
                <span className="text-[11px] font-medium text-foreground">
                  {extra.label}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-foreground">
                {extra.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between rounded-lg bg-secondary px-3 py-2.5">
          <span className="text-[11px] font-medium text-secondary-foreground">
            Total due today
          </span>
          <span className="text-xs font-bold text-secondary-foreground">
            £77.00
          </span>
        </div>

        <div className="rounded-lg bg-[var(--brand-green)] py-2.5 text-center text-xs font-semibold text-white">
          Continue to angler details
        </div>
      </div>
    </PhoneFrame>
  );
}
