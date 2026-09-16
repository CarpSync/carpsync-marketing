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
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
  invert?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-16">
      <div className={cn("flex flex-col gap-4", reverse && "lg:order-2")}>
        <Eyebrow invert={invert}>{eyebrow}</Eyebrow>
        <h3
          className={cn(
            "text-balance font-heading text-2xl font-bold leading-tight tracking-tight md:text-[2rem]",
            invert ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-pretty text-base leading-relaxed md:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
        <ul className="mt-2 flex flex-col gap-3">
          {points.map((point) => (
            <li
              key={point}
              className={cn(
                "flex items-start gap-2.5 text-sm",
                invert ? "text-white/90" : "text-foreground",
              )}
            >
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  invert ? "text-[var(--brand-lime)]" : "text-[var(--brand-green)]",
                )}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className={cn(reverse && "lg:order-1")}>{visual}</div>
    </div>
  );
}
