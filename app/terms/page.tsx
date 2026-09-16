import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Placeholder terms of service for CarpSync.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="Placeholder — to be finalised"
      sections={[
        {
          heading: "Overview",
          body: [
            "This is placeholder terms of service content for the CarpSync marketing website. It should be reviewed and replaced with terms prepared or approved by CarpSync before this site goes live.",
          ],
        },
        {
          heading: "Using CarpSync",
          body: [
            "Placeholder text describing the conditions under which fisheries and anglers may use the CarpSync platform.",
          ],
        },
        {
          heading: "Payments",
          body: [
            "Placeholder text describing how bookings, deposits, balances and refunds are handled through CarpSync.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Placeholder text explaining how to contact CarpSync with questions about these terms.",
          ],
        },
      ]}
    />
  );
}
