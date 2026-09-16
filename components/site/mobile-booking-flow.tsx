import { ChevronLeft, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/site/screenshot-frame";

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
const selected = [15, 16, 17, 18];

function DatesScreen() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <ChevronLeft className="size-3.5" />
        Long Reach — French carp lake
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground">Step 2 of 6</p>
        <h4 className="font-heading text-sm font-bold text-foreground">Select your dates</h4>
      </div>

      <div className="rounded-xl border border-border bg-card p-3">
        <p className="mb-2 text-center text-[11px] font-semibold text-foreground">June 2025</p>
        <div className="mb-1.5 grid grid-cols-7 gap-1">
          {dayLabels.map((d, i) => (
            <div key={i} className="text-center text-[9px] font-medium text-muted-foreground">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 30 }).map((_, i) => {
            const day = i + 1;
            const isSel = selected.includes(day);
            return (
              <div
                key={day}
                className={cn(
                  "flex h-6 items-center justify-center rounded-md text-[10px]",
                  isSel ? "bg-[var(--brand-green)] font-semibold text-white" : "text-foreground",
                )}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2.5">
        <span className="text-[11px] font-medium text-secondary-foreground">3 nights · 15–18 Jun</span>
        <span className="text-xs font-bold text-secondary-foreground">£360</span>
      </div>
      <div className="rounded-lg bg-[var(--brand-green)] py-2.5 text-center text-xs font-semibold text-white">
        Choose swim & package
      </div>
    </div>
  );
}

function PayScreen() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <ChevronLeft className="size-3.5" />
        Secure payment
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground">Step 6 of 6</p>
        <h4 className="font-heading text-sm font-bold text-foreground">Pay your deposit</h4>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3 text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Booking total</span>
          <span className="font-medium text-foreground">£408.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Extras</span>
          <span className="font-medium text-foreground">£48.00</span>
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-border pt-2">
          <span className="font-semibold text-foreground">Deposit today</span>
          <span className="font-heading text-sm font-bold text-foreground">£84.00</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3">
        <div className="flex items-center justify-between text-[11px] text-foreground">
          <span>Card number</span>
          <span className="font-medium text-muted-foreground">•••• 4242</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-md bg-muted px-2 py-1.5 text-[10px] text-muted-foreground">Exp 09/28</div>
          <div className="flex-1 rounded-md bg-muted px-2 py-1.5 text-[10px] text-muted-foreground">CVC •••</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-green)] py-2.5 text-center text-xs font-semibold text-white">
        <Lock className="size-3.5" />
        Pay £84 deposit
      </div>
      <p className="text-center text-[10px] text-muted-foreground">Secured & encrypted checkout</p>
    </div>
  );
}

export function MobileBookingFlow({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end justify-center gap-3 sm:gap-5", className)}>
      <PhoneFrame className="w-[210px] max-w-none translate-y-5 rotate-[-4deg] sm:w-[232px]">
        <DatesScreen />
      </PhoneFrame>
      <PhoneFrame className="hidden w-[210px] max-w-none rotate-[4deg] sm:block sm:w-[232px]">
        <PayScreen />
      </PhoneFrame>
    </div>
  );
}
