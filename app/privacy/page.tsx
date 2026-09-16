import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How CarpSync collects, uses and stores personal information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="16 September 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            "This website is operated by Karp Studio for CarpSync, online booking software for fisheries, carp lakes and angling venues. For privacy questions, contact hello@carpsync.com.",
            "This policy describes how we handle personal information collected through carpsync.com. It does not cover how fishery customers process angler data inside the CarpSync product.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "If you request a demo, we collect your name, email address, fishery or venue name, venue type and any message you choose to send.",
            "We also receive technical information that is created automatically when you visit the site, such as IP address, browser type and pages requested, as part of hosting and security logs.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "Demo requests are used to respond to your enquiry and arrange a walkthrough of CarpSync. We do not sell this information.",
            "Hosting and security logs are used to operate, protect and improve the website.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "Demo emails are sent using our email delivery provider so that your request reaches hello@carpsync.com. Hosting providers process technical data needed to serve the site.",
            "We may disclose information if required by law.",
          ],
        },
        {
          heading: "Retention",
          body: [
            "Demo requests are kept for as long as needed to handle your enquiry and any follow-up, then deleted or securely archived according to our operational needs and legal obligations.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal information, and to object to certain processing. To exercise these rights, email hello@carpsync.com.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Email hello@carpsync.com with any privacy questions about this marketing website.",
          ],
        },
      ]}
    />
  );
}
