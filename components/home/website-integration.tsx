import { Globe, ArrowRight, CalendarCheck2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";

export function WebsiteIntegration() {
  return (
    <Section tone="pale">
      <SectionHeader
        eyebrow="Website integration"
        title="Built into your website, not bolted on awkwardly."
        description="CarpSync integrates into your existing fishery website, so customers move naturally from browsing your venue to completing a booking. Keep your brand. Keep your website. Add a better booking system."
      />

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
          <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
            <Globe className="size-5" />
          </span>
          <p className="text-sm font-semibold text-foreground">
            Fishery website
          </p>
          <p className="text-xs text-muted-foreground">
            Your existing site, branding and content
          </p>
        </div>

        <ArrowRight className="hidden size-6 shrink-0 text-muted-foreground sm:block" />

        <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border-2 border-[var(--brand-green)] bg-card p-6 text-center">
          <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
            <CalendarCheck2 className="size-5" />
          </span>
          <p className="text-sm font-semibold text-foreground">
            CarpSync booking experience
          </p>
          <p className="text-xs text-muted-foreground">
            Availability, extras and secure payment
          </p>
        </div>

        <ArrowRight className="hidden size-6 shrink-0 text-muted-foreground sm:block" />

        <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
          <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
            <CalendarCheck2 className="size-5" />
          </span>
          <p className="text-sm font-semibold text-foreground">Confirmation</p>
          <p className="text-xs text-muted-foreground">
            Instant confirmation for angler and fishery
          </p>
        </div>
      </div>
    </Section>
  );
}
