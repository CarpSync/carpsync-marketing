import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

export function CtaSection({
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryHref = "/demo",
  secondaryLabel = "Contact Us",
  secondaryHref = "/demo",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section tone="charcoal">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[var(--brand-charcoal)] px-6 py-16 text-center sm:px-16">
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-[var(--brand-lime)] text-[var(--brand-charcoal)] hover:bg-[var(--brand-lime)]/90"
            render={<Link href={primaryHref} />}
            nativeButton={false}
          >
            {primaryLabel}
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/10"
            render={<Link href={secondaryHref} />}
            nativeButton={false}
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
