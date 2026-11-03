"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { CheckIcon, ClockIcon, StarIcon, ArrowRightIcon } from "@/components/icons";
import { TIERS } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose your cleaning tier"
          subtitle="Straightforward, flat pricing — pick a base cleaning for your wheelchair or mobility device."
        />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -12 }}
              className={`relative flex h-full flex-col rounded-[2rem] p-10 ${
                tier.popular
                  ? "border-2 border-accent bg-ink text-white shadow-2xl shadow-ink/30"
                  : "border border-slate-200 bg-white text-ink shadow-lg shadow-ink/5"
              }`}
            >
              {tier.popular && (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-b from-accent/20 via-transparent to-transparent"
                  />
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-accent/40">
                    <StarIcon className="h-4 w-4" />
                    Most Popular
                  </span>
                </>
              )}

              <h3
                className={`font-display text-xl font-bold ${
                  tier.popular ? "text-accent-bright" : "text-ink"
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-6 flex items-end gap-3">
                {tier.oldPrice && (
                  <span
                    className={`mb-2 text-2xl font-semibold line-through ${
                      tier.popular ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    ${tier.oldPrice}
                  </span>
                )}
                <span className="font-display text-6xl font-extrabold tracking-tight">
                  ${tier.price}
                </span>
                <span
                  className={`mb-3 flex items-center gap-1.5 text-sm font-semibold ${
                    tier.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <ClockIcon className="h-4 w-4" />
                  {tier.duration}
                </span>
              </div>

              <p
                className={`mt-6 text-base leading-relaxed ${
                  tier.popular ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {tier.blurb}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                        delay: 0.4 + i * 0.1,
                      }}
                      className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                        tier.popular
                          ? "bg-accent/25 text-accent-bright"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </motion.span>
                    <span
                      className={`text-sm font-medium ${
                        tier.popular ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-10"
              >
                <Link
                  href="/schedule"
                  className={`group flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-colors ${
                    tier.popular
                      ? "bg-accent text-white shadow-lg shadow-accent/40 hover:bg-accent-bright"
                      : "bg-ink text-white hover:bg-ink-soft"
                  }`}
                >
                  Choose {tier.name.replace("The ", "")}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 text-center text-sm font-semibold text-slate-600 sm:flex-row sm:justify-center sm:gap-10"
        >
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-accent" />
            We use skin-safe, eco-friendly materials for all cleanings
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-accent" />
            No need to transfer out of your chair for base tiers
          </span>
        </motion.div>
      </div>
    </section>
  );
}
