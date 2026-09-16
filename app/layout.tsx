import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://carpsync.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CarpSync | Online Booking Software for Fisheries",
    template: "%s | CarpSync",
  },
  description:
    "CarpSync helps fisheries and carp lakes manage online bookings, availability, payments, optional extras and customer communication from one simple platform.",
  openGraph: {
    title: "CarpSync | Online Booking Software for Fisheries",
    description:
      "CarpSync helps fisheries and carp lakes manage online bookings, availability, payments, optional extras and customer communication from one simple platform.",
    url: siteUrl,
    siteName: "CarpSync",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarpSync | Online Booking Software for Fisheries",
    description:
      "CarpSync helps fisheries and carp lakes manage online bookings, availability, payments, optional extras and customer communication from one simple platform.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101613",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
