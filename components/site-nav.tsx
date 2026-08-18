"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { content } from "@/data/content";
import { decisionDemo } from "@/data/decision-demo.en";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: content.about.meta.navLabel },
  { href: "/works", label: content.works.meta.navLabel },
  { href: decisionDemo.nav.href, label: decisionDemo.nav.label },
  { href: "/contact", label: content.contact.meta.navLabel },
];

export function SiteNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {content.home.meta.navLabel}
        </Link>

        <nav className="hidden items-center gap-0.5 sm:gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="-mr-2 size-11 md:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            {/* Labels the dialog for assistive tech without altering the visual design. */}
            <SheetTitle className="sr-only">
              {content.home.meta.navLabel}
            </SheetTitle>
            <nav className="flex flex-col gap-1 p-4 pt-14">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <SheetClose
                    key={link.href}
                    // The rendered element is an <a>, not a native <button>, so
                    // Base UI must not apply native button semantics to it.
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        // With `nativeButton={false}` Base UI applies
                        // `role="button"`; restore the anchor's own role so the
                        // item is still announced as a link.
                        role="link"
                        className={cn(
                          "flex min-h-11 w-full items-center rounded-md px-3 text-left text-base transition-colors",
                          active
                            ? "font-medium text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                        aria-current={active ? "page" : undefined}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
