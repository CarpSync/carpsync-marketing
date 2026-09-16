import { cn } from "@/lib/utils";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const days = ["Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15", "Sun 16"];

type Booking = { start: number; span: number; label: string; tone: "green" | "lime" };

const swims: { name: string; bookings: Booking[] }[] = [
  { name: "Swim 1", bookings: [{ start: 0, span: 2, label: "D. Marchetti", tone: "green" }, { start: 4, span: 3, label: "R. Adeyemi", tone: "green" }] },
  { name: "Swim 2", bookings: [{ start: 2, span: 2, label: "Held", tone: "lime" }] },
  { name: "Swim 3", bookings: [{ start: 0, span: 4, label: "T. Novak", tone: "green" }] },
  { name: "Swim 4", bookings: [{ start: 2, span: 3, label: "S. Bianchi", tone: "green" }, { start: 6, span: 1, label: "New", tone: "lime" }] },
  { name: "Swim 5", bookings: [{ start: 3, span: 4, label: "M. Laurent", tone: "green" }] },
  { name: "Swim 6", bookings: [{ start: 0, span: 1, label: "J. Fox", tone: "green" }, { start: 5, span: 2, label: "Held", tone: "lime" }] },
];

export function BookingCalendar({
  className,
  label = "app.carpsync.com/calendar",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ScreenshotFrame label={label} className={className}>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium text-muted-foreground">Willow Lake Fishery</p>
            <h3 className="font-heading text-base font-bold text-foreground">June 2025 — Booking calendar</h3>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[var(--brand-green)]" />Booked</span>
            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-[var(--brand-lime)]" />Held</span>
            <span className="flex items-center gap-1.5"><span className="size-2 rounded-full border border-border bg-muted" />Free</span>
          </div>
        </div>

        <div className="grid grid-cols-[64px_1fr] gap-2">
          <div />
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => (
              <div key={d} className="text-center text-[10px] font-medium text-muted-foreground">{d}</div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          {swims.map((swim) => (
            <div key={swim.name} className="grid grid-cols-[64px_1fr] items-center gap-2">
              <div className="text-[11px] font-semibold text-foreground">{swim.name}</div>
              <div className="relative">
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-7 rounded-md bg-muted" />
                  ))}
                </div>
                <div className="absolute inset-0 grid grid-cols-7 gap-1">
                  {swim.bookings.map((b, idx) => (
                    <div
                      key={idx}
                      style={{ gridColumn: `${b.start + 1} / span ${b.span}` }}
                      className={cn(
                        "flex h-7 items-center rounded-md px-2 text-[10px] font-semibold",
                        b.tone === "green"
                          ? "bg-[var(--brand-green)] text-white"
                          : "bg-[var(--brand-lime)] text-[var(--brand-charcoal)]",
                      )}
                    >
                      <span className="truncate">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}
