import { Section, SectionHeader } from "@/components/site/section";
import { TestimonialCard } from "@/components/site/testimonial-card";

// Placeholder testimonials — no named customers. Replace with real
// testimonials once available.
const testimonials = [
  {
    quote:
      "Customer testimonial placeholder — describing how CarpSync reduced booking admin for a commercial fishery.",
    name: "Fishery owner",
    role: "Commercial fishery, placeholder testimonial",
  },
  {
    quote:
      "Customer testimonial placeholder — describing the online booking experience for a French carp lake.",
    name: "Venue manager",
    role: "French carp lake, placeholder testimonial",
  },
  {
    quote:
      "Customer testimonial placeholder — describing how deposits and balances are now handled automatically.",
    name: "Syndicate organiser",
    role: "Syndicate lake, placeholder testimonial",
  },
];

export function TestimonialsSection() {
  return (
    <Section tone="pale">
      <SectionHeader
        eyebrow="Testimonials"
        align="center"
        title="Built with fishery owners in mind"
        description="These are placeholder testimonial cards, ready to be replaced with real quotes from CarpSync fisheries."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
