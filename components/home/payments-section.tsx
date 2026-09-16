import { Section } from "@/components/site/section";
import { SplitFeature } from "@/components/site/split-feature";
import { PaymentDetail } from "@/components/site/payment-detail";

export function PaymentsSection() {
  return (
    <Section id="payments">
      <SplitFeature
        reverse
        eyebrow="Payments"
        title="Secure online payments, on your terms"
        description="Take deposits, staged balances or full payment securely, with clear status on every booking — part-paid, outstanding and due dates all visible at a glance."
        points={[
          "Deposits, full payment or staged balances",
          "Extras added to the total and paid in one checkout",
          "Part-paid and outstanding amounts tracked automatically",
          "Confirmation sent the moment payment lands",
        ]}
        visual={<PaymentDetail />}
      />
    </Section>
  );
}
