import { cn } from "@/lib/utils";

export type TimelineStep = {
  title: string;
  description: string;
};

export function Timeline({
  steps,
  className,
}: {
  steps: TimelineStep[];
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
          {index !== steps.length - 1 ? (
            <span
              className="absolute left-[15px] top-8 h-full w-px bg-border"
              aria-hidden
            />
          ) : null}
          <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-green)] bg-card text-xs font-bold text-[var(--brand-green)]">
            {index + 1}
          </span>
          <div className="pt-0.5">
            <p className="font-heading text-sm font-bold text-foreground">
              {step.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
