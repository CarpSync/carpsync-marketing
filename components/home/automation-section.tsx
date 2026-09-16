import { Section, SectionHeader } from "@/components/site/section";
import { Timeline } from "@/components/site/timeline";

const steps = [
  {
    title: "Booking received",
    description: "A new booking lands in the fishery's dashboard instantly.",
  },
  {
    title: "Confirmation sent",
    description: "The angler receives an automatic booking confirmation.",
  },
  {
    title: "Payment reminder",
    description: "A reminder is sent automatically if a balance is due.",
  },
  {
    title: "Arrival information",
    description: "Details anglers need ahead of their visit are sent out.",
  },
  {
    title: "Pre-arrival reminder",
    description: "A final reminder goes out shortly before arrival.",
  },
  {
    title: "Booking complete",
    description: "The booking is marked complete in the fishery's records.",
  },
];

export function AutomationSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Automated communications"
          title="Less chasing. Fewer messages."
          description="CarpSync is designed to handle the repetitive messages that eat into a fishery owner's week — confirmations, reminders and arrival information, sent automatically."
        />
        <div className="rounded-2xl border border-border bg-card p-8">
          <Timeline steps={steps} />
        </div>
      </div>
    </Section>
  );
}
