import { Hero } from "@/components/home/hero";
import { TrustStatement } from "@/components/home/trust-statement";
import { FeaturesOverview } from "@/components/home/features-overview";
import { BookingJourney } from "@/components/home/booking-journey";
import { AdminDashboardSection } from "@/components/home/admin-dashboard";
import { UseCases } from "@/components/home/use-cases";
import { WebsiteIntegration } from "@/components/home/website-integration";
import { PaymentsSection } from "@/components/home/payments-section";
import { ExtrasSection } from "@/components/home/extras-section";
import { AutomationSection } from "@/components/home/automation-section";
import { CaseStudy } from "@/components/home/case-study";
import { ComparisonSection } from "@/components/home/comparison-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/site/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStatement />
      <FeaturesOverview />
      <BookingJourney />
      <AdminDashboardSection />
      <UseCases />
      <WebsiteIntegration />
      <PaymentsSection />
      <ExtrasSection />
      <AutomationSection />
      <CaseStudy />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingPreview />
      <FaqSection />
      <CtaSection
        title="Ready to bring your fishery's bookings online?"
        description="Book a demo and see how CarpSync can fit your lakes, swims and booking process."
      />
    </>
  );
}
