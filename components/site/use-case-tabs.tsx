"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardPreview } from "@/components/site/dashboard-preview";
import { MobileBookingPreview } from "@/components/site/mobile-booking-preview";

export type UseCase = {
  value: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  visual: "dashboard" | "mobile";
  visualLabel?: string;
};

export function UseCaseTabs({ cases }: { cases: UseCase[] }) {
  return (
    <Tabs defaultValue={cases[0]?.value} className="w-full gap-8">
      <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        {cases.map((useCase) => (
          <TabsTrigger
            key={useCase.value}
            value={useCase.value}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium data-[state=active]:border-[var(--brand-green)] data-[state=active]:bg-[var(--brand-green)] data-[state=active]:text-white"
          >
            {useCase.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {cases.map((useCase) => (
        <TabsContent key={useCase.value} value={useCase.value}>
          <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-border bg-card p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {useCase.title}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {useCase.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-lg bg-secondary p-3.5 text-sm text-secondary-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--brand-green)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              {useCase.visual === "mobile" ? (
                <MobileBookingPreview className="max-w-[260px]" />
              ) : (
                <DashboardPreview
                  label={useCase.visualLabel ?? "app.carpsync.com/dashboard"}
                />
              )}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
