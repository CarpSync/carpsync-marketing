import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";

export function Section({
  className,
  containerClassName,
  children,
  id,
  tone = "default",
  size = "default",
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "pale" | "charcoal";
  size?: "compact" | "default" | "lg";
}) {
  return (
    <section
      id={id}
      className={cn(
        id && "scroll-mt-24",
        size === "compact" && "py-10 md:py-12",
        size === "default" && "py-14 md:py-20",
        size === "lg" && "py-20 md:py-24",
        tone === "pale" && "bg-secondary",
        tone === "charcoal" && "bg-[var(--brand-charcoal)] text-white",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  invert = false,
}: {
  children: React.ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
        invert
          ? "border-white/15 bg-white/5 text-white/75"
          : "border-border bg-card text-muted-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-[var(--brand-lime)]" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-balance font-heading text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-[2.85rem]",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed md:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
