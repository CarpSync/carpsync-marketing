import { CalendarCheck, Clock, Users } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/section";
import { DemoForm } from "@/components/demo/demo-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Demo",
  description:
    "Book a demo of CarpSync and see how online booking, payments and automation can work for your fishery.",
  path: "/demo",
});

const points = [
  {
    icon: CalendarCheck,
    label: "A walkthrough configured around your lakes and swims",
  },
  {
    icon: Clock,
    label: "See how much admin time CarpSync could save you",
  },
  {
    icon: Users,
    label: "Ask questions specific to your fishery",
  },
];

export default function DemoPage() {
  return (
    <Section className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6">
          <Eyebrow>Book a Demo</Eyebrow>
          <h1 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            See CarpSync configured around your fishery
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us a little about your venue and we&apos;ll arrange a demo
            focused on your lakes, swims and booking process.
          </p>

          <ul className="mt-2 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
                  <point.icon className="size-4.5" />
                </span>
                <span className="pt-1.5 text-sm font-medium text-foreground">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <DemoForm />
      </div>
    </Section>
  );
}
