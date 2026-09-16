import { Section, SectionHeader } from "@/components/site/section";
import { AutomationTimeline } from "@/components/site/automation-timeline";

export function AutomationSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Automated communications"
            title="Less chasing. Fewer messages."
            description="CarpSync handles the repetitive messages that eat into a fishery owner's week — confirmations, reminders and arrival information, sent automatically at exactly the right moment."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-heading text-2xl font-bold text-foreground">5+</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">Emails sent automatically per booking</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="font-heading text-2xl font-bold text-foreground">0</p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">Reminders you have to send by hand</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-secondary/60 p-6 sm:p-8">
          <AutomationTimeline />
        </div>
      </div>
    </Section>
  );
}
