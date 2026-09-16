import { Section, Eyebrow } from "@/components/site/section";
import { DashboardPreview } from "@/components/site/dashboard-preview";

const capabilities = [
  {
    title: "Week-long stays",
    detail: "Availability modelled around holiday-style booking patterns.",
  },
  {
    title: "Accommodation & extras",
    detail: "Lodges, food packages and bait sold in the same checkout.",
  },
  {
    title: "Staged payments",
    detail: "Deposits and balances collected against the same booking.",
  },
];

export function CaseStudy() {
  return (
    <Section tone="pale">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Eyebrow>Example implementation</Eyebrow>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How a French carp holiday venue would run on CarpSync
          </h2>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            An example of a multi-lake, holiday-style setup
          </p>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            CarpSync can model a venue with several lakes, week-long stays,
            on-site accommodation and extras as one booking — from availability
            through to staged payments — without spreading those steps across
            separate tools.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="font-heading text-sm font-bold text-foreground">
                  {capability.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {capability.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <DashboardPreview />
      </div>
    </Section>
  );
}
