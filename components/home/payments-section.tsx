import {
  Wallet,
  CircleDollarSign,
  Receipt,
  BadgeCheck,
  ShieldCheck,
  MailCheck,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/section";
import { FeatureCard } from "@/components/site/feature-card";

const payments = [
  {
    icon: Wallet,
    title: "Deposits",
    description: "Take a deposit at the time of booking to secure the swim.",
  },
  {
    icon: CircleDollarSign,
    title: "Full payments",
    description: "Accept full payment upfront where that suits your venue.",
  },
  {
    icon: Receipt,
    title: "Remaining balances",
    description: "Balances are tracked and can be paid ahead of arrival.",
  },
  {
    icon: BadgeCheck,
    title: "Optional extras",
    description: "Extras are added to the total and paid in the same checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Payment status",
    description: "See at a glance what's paid, due or outstanding.",
  },
  {
    icon: MailCheck,
    title: "Automated confirmation",
    description: "Confirmation is sent the moment payment is received.",
  },
];

export function PaymentsSection() {
  return (
    <Section id="payments">
      <SectionHeader
        eyebrow="Payments"
        title="Secure online payments, on your terms"
        description="Take deposits, balances or full payment securely, with clear status on every booking so nothing gets missed."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {payments.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
