import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "How cookies and similar technologies are used on the CarpSync marketing website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="16 September 2026"
      sections={[
        {
          heading: "What this policy covers",
          body: [
            "This page explains how carpsync.com uses cookies and similar technologies. It applies to this marketing website only.",
          ],
        },
        {
          heading: "Cookies we use",
          body: [
            "We use essential cookies and similar storage that are required for the site to function, including security, load balancing and remembering basic session state where the hosting platform needs it.",
            "This marketing site does not currently set analytics or advertising cookies. If that changes, this policy will be updated first.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can block or delete cookies in your browser settings. Blocking essential cookies may prevent parts of the site from working.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about cookies on this website can be sent to hello@carpsync.com.",
          ],
        },
      ]}
    />
  );
}
