import { cn } from "@/lib/utils";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const lineItems = [
  { label: "Swim 4 — 2 nights", value: "£90.00" },
  { label: "Bait package — particle & pellet", value: "£25.00" },
  { label: "Bacon & egg breakfast × 2", value: "£24.00" },
  { label: "Extra angler", value: "£40.00" },
];

const payments = [
  { label: "Deposit — paid 24 May", value: "£50.00", state: "paid" as const },
  { label: "Balance — due on arrival", value: "£129.00", state: "due" as const },
];

export function PaymentDetail({
  className,
  label = "app.carpsync.com/payments",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ScreenshotFrame label={label} className={className}>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 border-b border-border pb-4">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground">Booking #CS-10428</p>
            <h3 className="font-heading text-base font-bold text-foreground">D. Marchetti — Willow Lake</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">12–14 Jun · 2 nights · 2 anglers</p>
          </div>
          <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-800">Part paid</span>
        </div>

        <dl className="flex flex-col gap-2.5 py-4">
          {lineItems.map((i) => (
            <div key={i.label} className="flex items-center justify-between text-xs">
              <dt className="text-muted-foreground">{i.label}</dt>
              <dd className="font-medium text-foreground">{i.value}</dd>
            </div>
          ))}
          <div className="mt-1 flex items-center justify-between border-t border-dashed border-border pt-3 text-sm">
            <dt className="font-semibold text-foreground">Booking total</dt>
            <dd className="font-heading font-bold text-foreground">£179.00</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-2.5 rounded-xl border border-border bg-muted/50 p-3">
          {payments.map((p) => (
            <div key={p.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className={cn("size-2 rounded-full", p.state === "paid" ? "bg-[var(--brand-green)]" : "bg-amber-500")} />
                {p.label}
              </span>
              <span className="font-semibold text-foreground">{p.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-[var(--brand-pale-green)] p-3">
            <p className="text-[10px] font-medium text-[var(--brand-green-dark)]">Paid to date</p>
            <p className="font-heading text-lg font-bold text-[var(--brand-green-dark)]">£50.00</p>
          </div>
          <div className="rounded-xl bg-[var(--brand-charcoal)] p-3 text-white">
            <p className="text-[10px] font-medium text-white/70">Outstanding</p>
            <p className="font-heading text-lg font-bold">£129.00</p>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}
