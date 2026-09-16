"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type UseCase = {
  value: string;
  label: string;
  title: string;
  description: string;
  points: string[];
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
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                {useCase.description}
              </p>
            </div>
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
        </TabsContent>
      ))}
    </Tabs>
  );
}
