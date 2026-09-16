import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for CarpSync.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Placeholder — to be finalised"
      sections={[
        {
          heading: "Overview",
          body: [
            "This is placeholder privacy policy content for the CarpSync marketing website. It should be reviewed and replaced with a policy prepared or approved by CarpSync before this site goes live.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "Placeholder text describing the categories of personal information CarpSync and its fishery customers may collect, such as contact details and booking information.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "Placeholder text describing how booking, payment and contact information is used to provide the CarpSync service.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Placeholder text explaining how to contact CarpSync with privacy questions.",
          ],
        },
      ]}
    />
  );
}
