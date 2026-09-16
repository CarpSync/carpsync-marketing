export function StatPanel({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-1.5 bg-card p-6 text-center sm:text-left"
        >
          <span className="font-heading text-2xl font-bold text-[var(--brand-green)] sm:text-3xl">
            {stat.value}
          </span>
          <span className="text-xs text-muted-foreground sm:text-sm">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
