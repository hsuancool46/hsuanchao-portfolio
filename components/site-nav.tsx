"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/data/content";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: content.about.meta.navLabel },
  { href: "/works", label: content.works.meta.navLabel },
  { href: "/contact", label: content.contact.meta.navLabel },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {content.home.meta.navLabel}
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
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
      </div>
    </header>
  );
}
