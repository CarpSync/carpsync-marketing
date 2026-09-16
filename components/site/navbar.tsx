"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/site/container";
import { CARPSYNC_APP_URL, primaryNav } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            render={<a href={CARPSYNC_APP_URL} />}
            nativeButton={false}
          >
            Login
          </Button>
          <Button render={<Link href="/demo" />} nativeButton={false}>
            Book a Demo
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            }
          />
          <SheetContent
            side="top"
            showCloseButton={false}
            className="h-auto rounded-b-2xl pb-8"
          >
            <SheetHeader className="flex-row items-center justify-between space-y-0">
              <SheetTitle render={<Logo href={null} />} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </Button>
            </SheetHeader>
            <nav
              aria-label="Mobile"
              className="mt-2 flex flex-col gap-1 px-4"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-3">
                <Button
                  variant="outline"
                  size="lg"
                  render={<a href={CARPSYNC_APP_URL} />}
                  nativeButton={false}
                >
                  Login
                </Button>
                <Button
                  size="lg"
                  render={<Link href="/demo" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  Book a Demo
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
