import {
  Fish,
  CalendarRange,
  Package,
  UserRound,
  Lock,
  MailCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { BookingFlowSteps } from "@/components/site/booking-flow-steps";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";

const steps = [
  {
    icon: Fish,
    title: "Choose lake / package",
    description: "Anglers pick a lake, swim or package to fit their trip.",
  },
  {
    icon: CalendarRange,
    title: "Select dates",
    description: "Only genuinely available dates are shown, in real time.",
  },
  {
    icon: Package,
    title: "Choose optional extras",
    description: "Bait, food packages and upgrades added in a click.",
  },
  {
    icon: UserRound,
    title: "Enter angler details",
    description: "Simple details form for anglers and any guests.",
  },
  {
    icon: Lock,
    title: "Pay securely",
    description: "Deposit, balance or full payment, taken online.",
  },
  {
    icon: MailCheck,
    title: "Receive booking confirmation",
    description: "An instant confirmation lands straight in their inbox.",
  },
];

export function BookingJourney() {
  return (
    <Section id="how-it-works">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="How it works"
            title="A booking journey anglers actually enjoy"
            description="From choosing a lake to receiving confirmation, CarpSync keeps the booking experience quick, clear and entirely self-service."
          />
          <div className="mt-10">
            <BookingFlowSteps steps={steps} />
          </div>
        </div>
        <MobileBookingPreview className="lg:sticky lg:top-28" />
      </div>
    </Section>
  );
}
