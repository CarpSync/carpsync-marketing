import { Mail, Phone, Fish } from "lucide-react";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const history = [
  { lake: "Willow Lake — Swim 4", dates: "12–14 Jun 2025", value: "£179" },
  { lake: "Long Reach — Full Lake", dates: "3–7 Mar 2025", value: "£640" },
  { lake: "Carp Bay — Swim 11", dates: "18–19 Oct 2024", value: "£96" },
];

export function CustomerRecord({
  className,
  label = "app.carpsync.com/customers",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ScreenshotFrame label={label} className={className}>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-green)] font-heading text-sm font-bold text-white">DM</span>
          <div className="min-w-0">
            <h3 className="font-heading text-base font-bold text-foreground">Davide Marchetti</h3>
            <p className="truncate text-xs text-muted-foreground">Member since 2023 · Willow Lake</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 py-4">
          <div className="rounded-xl border border-border p-3">
            <p className="text-[10px] font-medium text-muted-foreground">Total bookings</p>
            <p className="font-heading text-lg font-bold text-foreground">14</p>
          </div>
          <div className="rounded-xl border border-border p-3">
            <p className="text-[10px] font-medium text-muted-foreground">Lifetime value</p>
            <p className="font-heading text-lg font-bold text-foreground">£2,480</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="size-3.5" /> d.marchetti@example.com</span>
          <span className="flex items-center gap-2"><Phone className="size-3.5" /> +44 7700 900418</span>
        </div>

        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Booking history</p>
        <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
          {history.map((h) => (
            <div key={h.dates} className="flex items-center justify-between gap-3 px-3 py-2.5">
              <span className="flex min-w-0 items-center gap-2">
                <Fish className="size-3.5 shrink-0 text-[var(--brand-green)]" />
                <span className="min-w-0">
                  <span className="block truncate text-xs font-medium text-foreground">{h.lake}</span>
                  <span className="block text-[11px] text-muted-foreground">{h.dates}</span>
                </span>
              </span>
              <span className="shrink-0 text-xs font-semibold text-foreground">{h.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}
