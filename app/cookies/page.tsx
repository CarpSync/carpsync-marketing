import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Placeholder cookie policy for CarpSync.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="Placeholder — to be finalised"
      sections={[
        {
          heading: "Overview",
          body: [
            "This is placeholder cookie policy content for the CarpSync marketing website. It should be reviewed and replaced with a policy prepared or approved by CarpSync before this site goes live.",
          ],
        },
        {
          heading: "How we use cookies",
          body: [
            "Placeholder text describing the categories of cookies used on the CarpSync website, such as essential and analytics cookies.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "Placeholder text describing how visitors can manage or disable cookies through their browser settings.",
          ],
        },
      ]}
    />
  );
}
