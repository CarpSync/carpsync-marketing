import { Globe, CreditCard, Mail, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeader } from "@/components/site/section";
import { EcosystemCard } from "@/components/site/ecosystem-card";
import { CtaSection } from "@/components/site/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Integrations",
  description:
    "CarpSync integrates into your existing fishery website and connects with the payment and communication tools you already use.",
  path: "/integrations",
});

const integrations = [
  {
    icon: Globe,
    name: "Your website",
    description:
      "CarpSync integrates into your existing fishery website, keeping your branding intact.",
  },
  {
    icon: CreditCard,
    name: "Payments",
    description: "Secure online payments for deposits, balances and extras.",
  },
  {
    icon: Mail,
    name: "Email",
    description:
      "Automated confirmations, reminders and arrival information via email.",
  },
  {
    icon: BarChart3,
    name: "Reporting",
    description:
      "Booking and occupancy data available directly in your dashboard.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="CarpSync fits into how you already work"
        description="From your website to payments and communication, CarpSync is designed to integrate rather than replace everything you already use."
      />

      <Section>
        <SectionHeader title="What CarpSync connects with" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <EcosystemCard key={integration.name} {...integration} />
          ))}
        </div>
      </Section>

      <CtaSection
        title="Have a specific integration in mind?"
        description="Tell us how your fishery works today and we'll show you how CarpSync fits in."
      />
    </>
  );
}
