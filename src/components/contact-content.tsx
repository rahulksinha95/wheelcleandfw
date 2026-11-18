"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CONTACT } from "@/lib/data";
import { PhoneIcon, MailIcon, PinIcon, ArrowRightIcon } from "@/components/icons";

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-accent/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent-bright"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Have a question?{" "}
            <span className="bg-gradient-to-r from-accent-bright to-amber-200 bg-clip-text text-transparent">
              Reach us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg text-slate-300"
          >
            Reach out with any questions about our service, pricing, or
            scheduling. We typically respond within a few hours.
          </motion.p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Get in Touch
                </h2>
                <div className="mt-6 flex flex-col gap-5">
                  <a
                    href={CONTACT.phoneHref}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all hover:border-accent/50 hover:bg-accent/5"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
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
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
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
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-accent-bright">
                      <PinIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-extrabold uppercase tracking-wide text-slate-500">
                        Service Area
                      </span>
                      <span className="block text-sm font-bold text-ink">
                        {CONTACT.area}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-accent p-8 text-white">
                <h3 className="font-display text-lg font-bold">
                  Prefer to book directly?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Skip the form and schedule your cleaning right away. We'll
                  confirm your appointment within a few hours.
                </p>
                <a
                  href="/schedule"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-accent transition-colors hover:bg-cream"
                >
                  Go to Scheduling
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-cream/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-slate-200 bg-cream/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(214) 555-0100"
                    className="w-full rounded-2xl border border-slate-200 bg-cream/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-cream/50 px-4 py-3.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  We'll never share your information.
                </p>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-bright"
                >
                  Send Message
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.button>
              </div>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 overflow-hidden rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700"
                >
                  Your response is ready to send via your email client.
                  We'll get back to you shortly!
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
