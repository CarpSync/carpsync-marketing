import { cn } from "@/lib/utils";
import { Container } from "@/components/site/container";

export function Section({
  className,
  containerClassName,
  children,
  id,
  tone = "default",
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "pale" | "charcoal";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
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
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3.5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
