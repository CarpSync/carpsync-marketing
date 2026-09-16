import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";

const trustPoints = [
  "No card required for a demo",
  "Works alongside your existing website",
  "Built directly with fishery owners",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-14 pb-28 md:pt-20 md:pb-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(58,168,74,0.12),transparent_65%)]"
        aria-hidden
      />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-3.5 text-[var(--brand-green)]" />
            Built specifically for fisheries, lakes and angling venues
          </span>

          <h1 className="text-balance font-heading text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-[3.85rem]">
            Online booking software built for fisheries
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            CarpSync helps fisheries take bookings, manage availability,
            accept secure payments and automate the admin that normally
            takes hours.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button size="lg" render={<Link href="/demo" />} nativeButton={false}>
              Book a Demo
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/product" />}
              nativeButton={false}
            >
              Explore CarpSync
            </Button>
          </div>

          <ul className="flex flex-col gap-2.5 pt-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="size-4 shrink-0 text-[var(--brand-green)]" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:-mr-4">
          <DashboardPreview className="w-full" />
          <div className="absolute -bottom-14 -left-8 hidden w-[200px] rotate-[-4deg] drop-shadow-[0_30px_50px_rgba(16,22,19,0.3)] sm:block md:-left-14 md:w-[220px]">
            <MobileBookingPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
