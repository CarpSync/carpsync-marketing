import { CheckCircle2, CreditCard, BellRing, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Stage = {
  icon: typeof CheckCircle2;
  title: string;
  detail: string;
  subject: string;
  state: "done" | "active" | "upcoming";
};

const stages: Stage[] = [
  { icon: CheckCircle2, title: "Booking confirmed", detail: "Sent instantly", subject: "Your Willow Lake booking is confirmed", state: "done" },
  { icon: CreditCard, title: "Deposit received", detail: "Payment receipt", subject: "We've received your £50 deposit", state: "done" },
  { icon: BellRing, title: "Balance reminder", detail: "7 days before arrival", subject: "Your balance of £129 is due soon", state: "active" },
  { icon: MapPin, title: "Pre-arrival email", detail: "2 days before arrival", subject: "Directions, rules & what to bring", state: "upcoming" },
  { icon: Send, title: "Arrival information", detail: "Morning of arrival", subject: "Your swim & gate code for today", state: "upcoming" },
];

export function AutomationTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {stages.map((s, i) => (
        <div key={s.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-full",
                s.state === "upcoming" ? "bg-muted text-muted-foreground" : "bg-[var(--brand-green)] text-white",
              )}
            >
              <s.icon className="size-4" />
            </span>
            {i < stages.length - 1 ? <span className="w-px flex-1 bg-border" /> : null}
          </div>
          <div className={cn("flex-1", i === stages.length - 1 ? "pb-0" : "pb-5")}>
            <div className="flex flex-wrap items-center gap-x-2">
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <span className="text-[11px] text-muted-foreground">· {s.detail}</span>
            </div>
            <div
              className={cn(
                "mt-2 rounded-xl border p-3",
                s.state === "active" ? "border-[var(--brand-green)] bg-[var(--brand-pale-green)]/50" : "border-border bg-card",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="size-1.5 shrink-0 rounded-full bg-[var(--brand-lime)]" />
                <p className="truncate text-xs font-medium text-foreground">{s.subject}</p>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Automatically sent from your fishery&apos;s inbox</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
