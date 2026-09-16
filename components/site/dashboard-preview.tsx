import {
  LayoutGrid,
  CalendarDays,
  Users,
  Fish,
  Package,
  CreditCard,
  Settings,
  Search,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScreenshotFrame } from "@/components/site/screenshot-frame";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: CalendarDays, label: "Calendar" },
  { icon: Fish, label: "Lakes" },
  { icon: Users, label: "Customers" },
  { icon: Package, label: "Extras" },
  { icon: CreditCard, label: "Payments" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { label: "Bookings this month", value: "68" },
  { label: "Revenue this month", value: "£14,320" },
  { label: "Occupancy", value: "82%" },
  { label: "Upcoming arrivals", value: "12" },
];

const bookings = [
  {
    name: "D. Marchetti",
    lake: "Willow Lake — Swim 4",
    dates: "12–14 Jun",
    status: "Paid",
  },
  {
    name: "T. Novak",
    lake: "Long Reach — Full Lake",
    dates: "15–22 Jun",
    status: "Balance due",
  },
  {
    name: "S. Bianchi",
    lake: "Carp Bay — Swim 11",
    dates: "18–19 Jun",
    status: "Deposit paid",
  },
  {
    name: "M. Laurent",
    lake: "The Estate Lake",
    dates: "21–28 Jun",
    status: "Paid",
  },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-[var(--brand-pale-green)] text-[var(--brand-green-dark)]",
  "Balance due": "bg-amber-100 text-amber-800",
  "Deposit paid": "bg-secondary text-secondary-foreground",
};

export function DashboardPreview({
  className,
  label = "app.carpsync.com/dashboard",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <ScreenshotFrame label={label} className={className}>
      <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[190px_1fr]">
        {/* Sidebar */}
        <div className="flex flex-col gap-1 border-r border-border bg-muted/50 p-2.5 sm:p-3">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium",
                item.active
                  ? "bg-[var(--brand-green)] text-white"
                  : "text-muted-foreground",
              )}
            >
              <item.icon className="size-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="min-w-0 p-4 sm:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Willow Lake Fishery
              </p>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Dashboard
              </h3>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <Search className="size-3.5" />
              <span className="hidden sm:inline">Search bookings</span>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-3"
              >
                <p className="text-[11px] font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 font-heading text-base font-bold text-foreground sm:text-lg">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <p className="text-xs font-semibold text-foreground">
                Upcoming arrivals
              </p>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                This week <ChevronDown className="size-3" />
              </div>
            </div>
            <div className="divide-y divide-border">
              {bookings.map((booking) => (
                <div
                  key={booking.name}
                  className="flex items-center justify-between gap-3 px-4 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-foreground">
                      {booking.name}
                    </p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {booking.lake}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="hidden text-[11px] text-muted-foreground sm:inline">
                      {booking.dates}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-1 text-[10px] font-semibold",
                        statusStyles[booking.status],
                      )}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}
