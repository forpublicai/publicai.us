"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "MOCSI", href: "/#mocsi" },
  { label: "About", href: "/about/" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="pai-container hidden items-center justify-between py-3 md:flex">
        <Link href="/" className="shrink-0">
          <Logo height={32} alt="Public AI USA" />
        </Link>
        <nav className="flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pai-body no-underline hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="md:hidden">
        <div
          className="mx-auto w-full overflow-hidden bg-white"
          style={{ borderRadius: mobileOpen ? "0 0 8px 8px" : undefined }}
        >
          <div className="flex items-start justify-between px-5 py-3">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo height={28} alt="Public AI USA" />
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-6 w-6 items-center justify-center border-none bg-transparent p-0"
            >
              {mobileOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000" aria-hidden="true">
                  <path d="M 1.4 0 L 8 6.6 L 14.6 0 L 16 1.4 L 9.4 8 L 16 14.6 L 14.6 16 L 8 9.4 L 1.4 16 L 0 14.6 L 6.6 8 L 0 1.4 Z" />
                </svg>
              ) : (
                <svg width="18" height="12" viewBox="0 0 18 12" fill="#000" aria-hidden="true">
                  <path d="M 0 0 L 18 0 L 18 2 L 0 2 Z M 0 5 L 18 5 L 18 7 L 0 7 Z M 0 10 L 18 10 L 18 12 L 0 12 Z" />
                </svg>
              )}
            </button>
          </div>

          {mobileOpen && (
            <div className="flex flex-col px-5 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="pai-btn-label flex h-10 items-center border-t border-hairline no-underline hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
