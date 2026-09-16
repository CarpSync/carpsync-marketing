import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";

export type LegalSection = {
  heading: string;
  body: string[];
};

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={`Last updated: ${updated}`}
        primaryLabel={null}
      />
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="font-heading text-xl font-bold text-foreground">
                {section.heading}
              </h2>
              {section.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
