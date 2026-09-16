import type { Metadata } from "next";
import { Fish, CalendarCheck, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { EcosystemCard } from "@/components/site/ecosystem-card";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Karp Studio Ecosystem",
  description:
    "CarpSync is part of the Karp Studio ecosystem of software built for the angling industry.",
};

const products = [
  {
    icon: CalendarCheck,
    name: "CarpSync",
    description:
      "Online booking software for fisheries, carp lakes and angling venues.",
  },
  {
    icon: Fish,
    name: "Karp Studio",
    description:
      "The studio behind CarpSync, building focused software for the angling world.",
  },
  {
    icon: LineChart,
    name: "More to come",
    description:
      "Karp Studio continues to build tools that reduce admin for fishery owners.",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem"
        title="CarpSync is part of Karp Studio"
        description="Karp Studio builds software for the angling industry. CarpSync is its booking platform for fisheries and lakes."
      />

      <Section>
        <SectionHeader title="Karp Studio products" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {products.map((product) => (
            <EcosystemCard key={product.name} {...product} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Curious what else Karp Studio is building?"
        description="Get in touch to learn more about CarpSync and the wider Karp Studio ecosystem."
      />
    </>
  );
}
