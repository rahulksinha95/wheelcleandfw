"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import { CONTACT } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`relative mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
          scrolled
            ? "h-14 max-w-6xl border-slate-200 bg-white/95 px-4 shadow-lg sm:px-6"
            : "h-20 max-w-7xl border-transparent bg-white px-3 sm:px-5"
        }`}
      >
        <Logo dark={false} compact={scrolled} />

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-accent"
          >
            <PhoneIcon className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            href="/schedule"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-accent/40"
          >
            Schedule
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        {/* mobile menu */}
        <div
          className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] lg:hidden ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`mx-1 origin-top rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition-all duration-300 ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700"
              >
                <PhoneIcon className="h-4 w-4" />
                {CONTACT.phoneDisplay}
              </a>
              <Link
                href="/schedule"
                onClick={() => setOpen(false)}
                className="rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-white"
              >
                Schedule a Cleaning
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
