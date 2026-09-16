import {
  Fish,
  CalendarRange,
  MapPin,
  Package,
  Lock,
  MailCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { MobileBookingFlow } from "@/components/site/mobile-booking-flow";

const steps = [
  { icon: Fish, title: "Choose venue / lake", description: "Anglers pick a lake, swim or package to fit their trip." },
  { icon: CalendarRange, title: "Select dates", description: "Only genuinely available dates are shown, in real time." },
  { icon: MapPin, title: "Select swim / package", description: "Pick the exact swim or holiday package they want." },
  { icon: Package, title: "Add optional extras", description: "Bait, food packages and upgrades added in a click." },
  { icon: Lock, title: "Pay securely", description: "Deposit, balance or full payment, taken online." },
  { icon: MailCheck, title: "Receive confirmation", description: "An instant confirmation lands straight in their inbox." },
];

export function BookingJourney() {
  return (
    <Section id="how-it-works">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="How it works"
            title="A booking journey anglers actually enjoy"
            description="From choosing a lake to receiving confirmation, CarpSync keeps the booking experience quick, clear and entirely self-service."
          />
          <ol className="mt-10 flex flex-col">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
                    <step.icon className="size-4.5" />
                  </span>
                  {index < steps.length - 1 ? <span className="w-px flex-1 bg-border" /> : null}
                </div>
                <div className={index === steps.length - 1 ? "pb-0" : "pb-6"}>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-xs font-bold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-base font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <MobileBookingFlow className="lg:pl-4" />
      </div>
    </Section>
  );
}
