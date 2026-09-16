import type { Metadata } from "next";
import { Fish, Sparkles, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { CtaSection } from "@/components/site/cta-section";
import { EcosystemCard } from "@/components/site/ecosystem-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "CarpSync is built by Karp Studio to give fisheries a booking system designed specifically around how they operate.",
};

const values = [
  {
    icon: Fish,
    name: "Built by anglers, for fisheries",
    description:
      "CarpSync is designed around real fishery workflows — lakes, swims, extras and payments — not generic scheduling.",
  },
  {
    icon: Sparkles,
    name: "Simple by default",
    description:
      "Every feature is designed to remove admin, not add another system fishery owners have to learn.",
  },
  {
    icon: HeartHandshake,
    name: "Built with fishery owners",
    description:
      "CarpSync is shaped by direct conversations with the people running lakes and venues day to day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CarpSync"
        title="Booking software built specifically for fisheries"
        description="CarpSync exists because fisheries deserve a booking system designed around lakes, swims and anglers — not a generic scheduler with fishing terms bolted on."
      />

      <Section>
        <SectionHeader
          eyebrow="Our approach"
          title="Why CarpSync is different"
          description="Most booking tools are built for salons, clinics or restaurants. CarpSync starts from how fisheries actually take bookings."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {values.map((value) => (
            <EcosystemCard key={value.name} {...value} />
          ))}
        </div>
      </Section>

      <Section tone="pale">
        <SectionHeader
          eyebrow="Part of Karp Studio"
          title="CarpSync is a Karp Studio product"
          description="Karp Studio builds focused software for the angling world. CarpSync is its booking platform for fisheries, lakes and venues."
        />
      </Section>

      <CtaSection
        title="Want to learn more about CarpSync?"
        description="Book a demo and talk to the team building CarpSync directly."
      />
    </>
  );
}
