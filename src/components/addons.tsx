"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { ADDONS } from "@/lib/data";
import { DropIcon, SparkIcon } from "@/components/icons";

const ICONS = [DropIcon, SparkIcon];

export default function Addons() {
  return (
    <section className="pb-24 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="2"
          title="Add-Ons"
          subtitle="Level up your clean. Small upgrades, big difference. Stacked onto any tier."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ADDONS.map((addon, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.article
                key={addon.id}
                initial={{ opacity: 0, x: i === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -6 }}
                className="group relative flex gap-5 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {addon.name}
                    </h3>
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-extrabold text-white">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {addon.description}
                  </p>
                  {addon.note && (
                    <p className="mt-2 text-xs font-semibold text-amber-600">
                      *{addon.note}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-r from-ink to-ink-soft p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[80px]"
          />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Custom Service
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                Need something specific done on your wheelchair or mobility
                device? Tell us what you need and we&apos;ll do our very best to
                meet it.
              </p>
            </div>
            <motion.a
              href="/schedule"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-bright"
            >
              Request It
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
