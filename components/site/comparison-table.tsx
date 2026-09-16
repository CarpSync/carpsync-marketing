import { X, Check } from "lucide-react";

const manual = [
  "Endless WhatsApp and phone messages",
  "Spreadsheets for availability and payments",
  "Manually checking dates before confirming",
  "Chasing deposits and balances by hand",
  "Sending confirmations one by one",
  "Duplicated admin across multiple tools",
];

const carpsync = [
  "Live availability customers can book instantly",
  "One organised booking calendar",
  "Automatic date and capacity checks",
  "Deposits, balances and payment tracking built in",
  "Automated confirmations and reminders",
  "Bookings, customers and payments in one place",
];

export function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-7">
        <h3 className="font-heading text-lg font-bold text-foreground">
          Manual booking
        </h3>
        <ul className="mt-5 flex flex-col gap-4">
          {manual.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[var(--brand-green)] bg-[var(--brand-pale-green)] p-7">
        <h3 className="font-heading text-lg font-bold text-[var(--brand-green-dark)]">
          CarpSync
        </h3>
        <ul className="mt-5 flex flex-col gap-4">
          {carpsync.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--brand-green)]" />
              <span className="text-[var(--brand-green-dark)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
