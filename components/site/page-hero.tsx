import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/site/section";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryHref = "/demo",
  secondaryLabel,
  secondaryHref,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primaryLabel?: string | null;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
}) {
  return (
    <Section
      className={cn(
        "border-b border-border pt-14 pb-16 md:pt-20 md:pb-20",
      )}
    >
      <div
        className={cn(
          "flex max-w-3xl flex-col gap-5",
          align === "center" && "mx-auto items-center text-center",
        )}
      >
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
        {primaryLabel ? (
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              size="lg"
              render={<Link href={primaryHref} />}
              nativeButton={false}
            >
              {primaryLabel}
              <ArrowRight data-icon="inline-end" />
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                size="lg"
                variant="outline"
                render={<Link href={secondaryHref} />}
                nativeButton={false}
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
