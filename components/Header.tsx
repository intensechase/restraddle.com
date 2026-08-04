import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/rules", label: "Straddles" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Visually hidden until focused — lets keyboard/screen-reader users
          jump past the nav straight to page content instead of tabbing
          through five links on every single page. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#241102]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b-2 border-dashed border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
          <Link
            href="/"
            className="flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() => setMobileOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Restraddle" className="h-9 w-auto" />
          </Link>

          <nav aria-label="Primary" className="hidden gap-7 text-sm font-bold uppercase tracking-wide sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded text-ink-mute hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="flex flex-col gap-1 border-t-2 border-dashed border-border px-7 py-4 text-sm font-bold uppercase tracking-wide sm:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-2.5 text-ink-mute hover:bg-surface hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
