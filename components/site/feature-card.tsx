import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(16,22,19,0.25)]",
        className,
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
        <Icon className="size-5" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-base font-bold text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
