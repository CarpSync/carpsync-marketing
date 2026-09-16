import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
  ctaLabel = "Talk to CarpSync",
  ctaHref = "/demo",
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-2xl border p-7",
        featured
          ? "border-[var(--brand-green)] bg-[var(--brand-charcoal)] text-white shadow-[0_24px_60px_-30px_rgba(16,22,19,0.5)]"
          : "border-border bg-card",
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold">{name}</h3>
          {featured ? (
            <span className="rounded-full bg-[var(--brand-lime)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-charcoal)]">
              Popular
            </span>
          ) : null}
        </div>
        <p
          className={cn(
            "mt-3 font-heading text-3xl font-bold",
            featured ? "text-white" : "text-foreground",
          )}
        >
          {price}
        </p>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            featured ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                featured ? "text-[var(--brand-lime)]" : "text-[var(--brand-green)]",
              )}
            />
            <span className={featured ? "text-white/85" : "text-foreground"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        render={<Link href={ctaHref} />}
        nativeButton={false}
        variant={featured ? "default" : "outline"}
        className={cn(
          "mt-auto",
          featured &&
            "bg-[var(--brand-lime)] text-[var(--brand-charcoal)] hover:bg-[var(--brand-lime)]/90",
        )}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
