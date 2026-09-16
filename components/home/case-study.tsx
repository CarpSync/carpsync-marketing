import { Section, Eyebrow } from "@/components/site/section";
import { DashboardPreview } from "@/components/site/dashboard-preview";

// NOTE: "Tranquillity Lakes" is a placeholder example venue and the metrics
// below are illustrative placeholders only — not verified customer data.
const metrics = [
  { value: "—", metricLabel: "Bookings managed (placeholder)" },
  { value: "—", metricLabel: "Admin time saved (placeholder)" },
  { value: "—", metricLabel: "Online booking adoption (placeholder)" },
];

export function CaseStudy() {
  return (
    <Section tone="pale">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Example implementation</Eyebrow>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tranquillity Lakes
          </h2>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            A premium French carp fishing venue — example integration
          </p>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            Tranquillity Lakes is an illustrative example of how a
            multi-lake, holiday-style venue could run entirely on CarpSync —
            from week-long booking availability through to accommodation,
            food packages and staged payments.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div
                key={metric.metricLabel}
                className="rounded-xl border border-dashed border-border bg-card p-4"
              >
                <p className="font-heading text-2xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {metric.metricLabel}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Figures shown are placeholders for illustration and will be
            replaced with real figures once a live case study is available.
          </p>
        </div>

        <DashboardPreview label="app.carpsync.com/tranquillity-lakes" />
      </div>
    </Section>
  );
}
