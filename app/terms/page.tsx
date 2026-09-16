import { LegalPage } from "@/components/site/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms for using the CarpSync marketing website and requesting a product demo.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="16 September 2026"
      sections={[
        {
          heading: "About these terms",
          body: [
            "These terms apply to the CarpSync marketing website at carpsync.com. They cover browsing this site and sending a demo request. They do not replace a product agreement for using the CarpSync application itself.",
          ],
        },
        {
          heading: "Using this website",
          body: [
            "You may use this site to learn about CarpSync and to request a demo. Do not misuse the site, attempt to disrupt it, or submit information you do not have the right to share.",
            "Content on this site describes CarpSync as a product for fisheries. It is general information, not a contractual specification of features for a particular venue.",
          ],
        },
        {
          heading: "Demo requests",
          body: [
            "Submitting a demo request is an enquiry, not an order. We will use the details you provide to respond. Submitting a form does not create a paid subscription or grant access to the CarpSync application.",
          ],
        },
        {
          heading: "The CarpSync product",
          body: [
            "Access to the live CarpSync application, including owner, customer and related product routes, is governed by the agreement in place for that product. Pricing for a venue is confirmed separately.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "This marketing website is provided as-is. To the extent permitted by law, Karp Studio and CarpSync are not liable for losses arising from use of this website beyond what cannot be excluded under applicable law.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about these terms can be sent to hello@carpsync.com.",
          ],
        },
      ]}
    />
  );
}
