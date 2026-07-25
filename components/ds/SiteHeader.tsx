"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { Logo } from "./Logo";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "MOCSI", href: "/mocsi/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="pai-container hidden items-center justify-between pb-20 pt-5 md:flex">
        <Link href="/" className="shrink-0">
          <Logo height={48} alt="Public AI USA" />
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pai-body text-[var(--text-primary)] no-underline hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <span className="pai-mono text-secondary" aria-disabled="true">
            Log in
          </span>
          <Button href="https://chat.publicai.co">Try chat</Button>
        </nav>
      </div>

      <div className="md:hidden">
        <div
          className="mx-auto w-full overflow-hidden bg-white shadow-[var(--shadow-nav)]"
          style={{ borderRadius: mobileOpen ? "0 0 20px 20px" : undefined }}
        >
          <div className="flex items-start justify-between px-5 pb-12 pt-5">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Logo height={40} alt="Public AI USA" />
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
            <div className="flex flex-col gap-12 px-5 pb-8 pt-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="pai-btn-label flex h-20 items-center border-t border-hairline py-[30px] text-[var(--text-primary)] no-underline hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
                <span
                  className="pai-btn-label flex h-20 items-center border-t border-hairline py-[30px] text-secondary"
                  aria-disabled="true"
                >
                  Log in
                </span>
              </div>
              <Button href="https://chat.publicai.co">Try chat</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
