import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const extras = [
  { label: "Bait package", detail: "Particle & pellet, 5kg", price: "£25", selected: true },
  { label: "Food package", detail: "Breakfast & evening meal", price: "£48", selected: true },
  { label: "Accommodation", detail: "Lakeside cabin, per night", price: "£65", selected: false },
  { label: "Airport transfer", detail: "Return, up to 4 anglers", price: "£90", selected: false },
  { label: "Extra angler", detail: "Additional rod & pitch", price: "£40", selected: true },
  { label: "Equipment hire", detail: "Rods, nets, unhooking mat", price: "£30", selected: false },
];

export function ExtrasCheckout({
  className,
  label = "app.carpsync.com/book/extras",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ScreenshotFrame label={label} className={className}>
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground">Step 4 of 6 · Optional extras</p>
            <h3 className="font-heading text-base font-bold text-foreground">Build your trip</h3>
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground">3 selected</span>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {extras.map((e) => (
            <div
              key={e.label}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border p-3",
                e.selected ? "border-[var(--brand-green)] bg-[var(--brand-pale-green)]/50" : "border-border bg-card",
              )}
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">{e.label}</p>
                <p className="truncate text-[11px] text-muted-foreground">{e.detail}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-xs font-bold text-foreground">{e.price}</span>
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-lg",
                    e.selected ? "bg-[var(--brand-green)] text-white" : "border border-border text-muted-foreground",
                  )}
                >
                  {e.selected ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--brand-charcoal)] px-4 py-3 text-white">
          <div>
            <p className="text-[10px] font-medium text-white/60">Extras subtotal</p>
            <p className="font-heading text-lg font-bold">£113.00</p>
          </div>
          <span className="rounded-lg bg-[var(--brand-lime)] px-4 py-2 text-xs font-bold text-[var(--brand-charcoal)]">Continue</span>
        </div>
      </div>
    </ScreenshotFrame>
  );
}
