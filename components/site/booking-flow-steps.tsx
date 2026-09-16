import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type BookingStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function BookingFlowSteps({ steps }: { steps: BookingStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
              <step.icon className="size-4.5" />
            </span>
            <span className="font-heading text-xs font-bold text-muted-foreground">
              Step {index + 1}
            </span>
          </div>
          <div>
            <h3 className="font-heading text-base font-bold text-foreground">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
