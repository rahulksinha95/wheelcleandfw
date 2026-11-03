"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { TESTIMONIALS } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-accent">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path d="M10 1.8 12.5 7l5.7.6-4.3 3.8 1.2 5.6L10 14.2 4.9 17l1.2-5.6L1.8 7.6 7.5 7 10 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="Real reviews from real people across the DFW metroplex."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all duration-300 hover:border-accent/30 hover:shadow-xl"
            >
              <Stars count={t.rating} />
              <p className="mt-6 flex-1 text-base leading-relaxed text-slate-700">
                "{t.text}"
              </p>
              <footer className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-display text-lg font-bold text-ink">{t.name}</p>
                <p className="mt-1 text-sm text-accent">{t.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
