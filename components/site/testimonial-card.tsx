import { Quote } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-7">
      <Quote className="size-6 text-[var(--brand-green)]" aria-hidden />
      <blockquote className="text-pretty text-base leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{role}</span>
      </figcaption>
    </figure>
  );
}
