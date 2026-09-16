import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/container";
import { DashboardPreview } from "@/components/site/dashboard-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-14 pb-20 md:pt-20 md:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(58,168,74,0.12),transparent_65%)]"
        aria-hidden
      />
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
            <ShieldCheck className="size-3.5 text-[var(--brand-green)]" />
            Built specifically for fisheries, lakes and angling venues
          </span>

          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
            Online booking software built for fisheries
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
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
        </div>

        <DashboardPreview className="lg:-mr-6" />
      </Container>
    </section>
  );
}
