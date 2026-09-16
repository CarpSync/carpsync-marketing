import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/site/container";
import { footerNav } from "@/lib/site-config";

const columns: { title: string; key: keyof typeof footerNav }[] = [
  { title: "Product", key: "product" },
  { title: "Solutions", key: "solutions" },
  { title: "Resources", key: "resources" },
  { title: "Company", key: "company" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--brand-charcoal)] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="dark" />
            <p className="max-w-xs text-[15px] leading-relaxed text-white/70">
              Online booking software built for fisheries, carp lakes and
              angling venues.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.key} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {footerNav[column.key].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[15px] text-white/70 transition-colors hover:text-[var(--brand-lime)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[15px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>CarpSync — Online booking software built for fisheries.</p>
          <p className="text-white/40">
            A{" "}
            <Link href="/ecosystem" className="text-white/60 hover:text-[var(--brand-lime)]">
              Karp Studio
            </Link>{" "}
            product.
          </p>
        </div>
      </Container>
    </footer>
  );
}
