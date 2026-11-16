import Link from "next/link";
import Logo from "@/components/logo";
import { CONTACT } from "@/lib/data";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import Year from "@/components/year";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
              Mobile wheelchair &amp; mobility equipment cleaning in DFW.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                <PhoneIcon className="h-4 w-4" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#pricing", label: "Pricing" },
                { href: "/about", label: "About Us" },
                { href: "/#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Service Area
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {["Dallas", "Plano", "Irving", "Richardson", "Garland"].map(
                (city) => (
                  <li key={city}>
                    <span className="text-sm font-medium text-slate-400">
                      {city}
                    </span>
                  </li>
                )
              )}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              &amp; surrounding DFW metroplex areas
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © <Year /> UnBound Adaptive LLC d/b/a Wheel Clean DFW. All rights reserved.
          </p>
          <p className="text-sm font-medium text-slate-400">
            Look fresher, roll smoother.
          </p>
        </div>
      </div>
    </footer>
  );
}
