import type { LucideIcon } from "lucide-react";

export function EcosystemCard({
  icon: Icon,
  name,
  description,
}: {
  icon: LucideIcon;
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
      <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-foreground">
          {name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
