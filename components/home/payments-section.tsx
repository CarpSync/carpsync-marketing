import { Wallet, Receipt, ShieldCheck, MailCheck } from "lucide-react";
import { Section } from "@/components/site/section";
import { SplitFeature } from "@/components/site/split-feature";

export function PaymentsSection() {
  return (
    <Section id="payments">
      <SplitFeature
        reverse
        eyebrow="Payments"
        title="Secure online payments, on your terms"
        description="Take deposits, balances or full payment securely, with clear status on every booking so nothing gets missed."
        points={[
          "Deposits, full payment or staged balances",
          "Extras added to the total and paid in one checkout",
          "Confirmation sent automatically the moment payment lands",
        ]}
        visual={<ReceiptCard />}
      />
    </Section>
  );
}

function ReceiptCard() {
  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-dashed border-border pb-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground">
            Booking receipt
          </p>
          <p className="font-heading text-base font-bold text-foreground">
            Willow Lake — Swim 4
          </p>
        </div>
        <span className="flex size-9 items-center justify-center rounded-full bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]">
          <ShieldCheck className="size-4.5" />
        </span>
      </div>

      <dl className="flex flex-col gap-3 py-5 text-sm">
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Wallet className="size-4" /> Deposit
          </dt>
          <dd className="font-medium text-foreground">£25.00</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <Receipt className="size-4" /> Extras
          </dt>
          <dd className="font-medium text-foreground">£37.00</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="flex items-center gap-2 text-muted-foreground">
            <MailCheck className="size-4" /> Balance due on arrival
          </dt>
          <dd className="font-medium text-foreground">£15.00</dd>
        </div>
      </dl>

      <div className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3">
        <span className="text-sm font-medium text-secondary-foreground">
          Paid today
        </span>
        <span className="font-heading text-lg font-bold text-secondary-foreground">
          £62.00
        </span>
      </div>
    </div>
  );
}
