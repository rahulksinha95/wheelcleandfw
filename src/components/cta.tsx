"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/data";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

export default function Cta() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-accent px-8 py-20 text-center sm:px-20 sm:py-28"
      >
        {/* Background elements */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-[120px]"
        />

        <div className="relative">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/80">
            On-site · Dallas / Fort Worth
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Look fresher,{" "}
            <span className="text-amber-200">
              roll smoother.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Schedule your on-site wheelchair service today — we&apos;ll reach
            out ASAP to lock in your cleaning.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schedule"
                className="group flex items-center gap-2 rounded-full bg-white px-10 py-5 text-base font-bold text-accent shadow-2xl transition-colors hover:bg-cream"
              >
                Schedule Your Cleaning
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.a
              href={CONTACT.phoneHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 rounded-full border-2 border-white/30 px-10 py-5 text-base font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              {CONTACT.phoneDisplay}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
