import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/site/section";

export function SplitFeature({
  eyebrow,
  title,
  description,
  points,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
      <div
        className={cn(
          "flex flex-col gap-4",
          reverse && "lg:order-2",
        )}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="text-balance font-heading text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
          {title}
        </h3>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-2 flex flex-col gap-3">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm text-foreground"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--brand-green)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={cn(reverse && "lg:order-1")}>{visual}</div>
    </div>
  );
}
