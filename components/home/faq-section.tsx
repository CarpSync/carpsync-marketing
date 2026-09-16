import { Section, SectionHeader } from "@/components/site/section";
import { Faq } from "@/components/site/faq";
import { homeFaqs } from "@/lib/faqs";

export function FaqSection() {
  return (
    <Section tone="pale">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Answers to the questions fishery owners ask most often before getting started."
        />
        <Faq items={homeFaqs} />
      </div>
    </Section>
  );
}
