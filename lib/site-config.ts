// Central configuration for editable URLs and top-level navigation.
// Update CARPSYNC_APP_URL once the CarpSync application has a production login URL.
export const CARPSYNC_APP_URL =
  process.env.NEXT_PUBLIC_CARPSYNC_APP_URL ?? "https://app.carpsync.com/login";

export const DEMO_PATH = "/demo";

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Fisheries", href: "/for-fisheries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Booking System", href: "/product" },
    { label: "Payments", href: "/features#payments" },
    { label: "Integrations", href: "/integrations" },
  ],
  solutions: [
    { label: "Fisheries", href: "/for-fisheries" },
    { label: "French Carp Lakes", href: "/french-fisheries" },
    { label: "Exclusive Hire Lakes", href: "/for-fisheries#hire-lakes" },
    { label: "Fishing Holidays", href: "/for-fisheries#holidays" },
  ],
  resources: [
    { label: "Help Centre", href: "/resources" },
    { label: "Guides", href: "/resources#guides" },
    { label: "Contact", href: "/demo" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Karp Studio", href: "/ecosystem" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} satisfies Record<string, NavLink[]>;
