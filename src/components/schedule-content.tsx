"use client";

import { motion } from "motion/react";
import ScheduleForm from "@/components/schedule-form";
import { CONTACT } from "@/lib/data";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  CheckIcon,
} from "@/components/icons";

const NEXT_STEPS = [
  { title: "Submit your request", detail: "Tell us your location, device and tier." },
  { title: "We reach out ASAP", detail: "We'll call or text to lock in a time." },
  { title: "We come to you", detail: "Fully equipped, on-site, door to chair." },
];

export default function ScheduleContent() {
  return (
    <>
      {/* header */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent-bright"
          >
            Scheduling
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Schedule Your On-Site{" "}
            <span className="bg-gradient-to-r from-accent-bright to-emerald-200 bg-clip-text text-transparent">
              Wheelchair Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg text-slate-300"
          >
            Fill this out and we&apos;ll reach out ASAP to schedule your
            cleaning. Takes about a minute.
          </motion.p>
        </div>
      </section>

      {/* form + sidebar */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
          <ScheduleForm />

          <aside className="flex flex-col gap-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-3xl border border-slate-200 bg-white p-7"
            >
              <h2 className="font-display text-lg font-bold text-ink">
                Prefer to talk it through?
              </h2>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-accent/50 hover:bg-accent/5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                      Call or Text
                    </span>
                    <span className="block text-sm font-bold text-ink">
                      {CONTACT.phoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-accent/50 hover:bg-accent/5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                      Email Us
                    </span>
                    <span className="block truncate text-sm font-bold text-ink">
                      {CONTACT.email}
                    </span>
                  </span>
                </a>
              </div>
              <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-slate-500">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Serving the {CONTACT.area}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-3xl bg-ink p-7"
            >
              <h2 className="font-display text-lg font-bold text-white">
                What happens next
              </h2>
              <ol className="mt-5 flex flex-col gap-5">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/20 font-display text-sm font-extrabold text-accent-bright">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-white">
                        {step.title}
                      </span>
                      <span className="block text-xs leading-relaxed text-slate-400">
                        {step.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-xs font-semibold text-slate-300">
                <CheckIcon className="h-4 w-4 shrink-0 text-accent-bright" />
                No transfer out of your chair needed for base tiers
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </>
  );
}
