"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { CONTACT, SERVICE_CITIES } from "@/lib/data";
import { PhoneIcon, MailIcon } from "@/components/icons";

const CITY_COORDS: Record<string, string> = {
  Addison: "Addison,TX",
  Carrollton: "Carrollton,TX",
  "Cockrell Hill": "Cockrell+Hill,TX",
  Dallas: "Dallas,TX",
  "Farmers Branch": "Farmers+Branch,TX",
  Garland: "Garland,TX",
  "Glenn Heights": "Glenn+Heights,TX",
  Irving: "Irving,TX",
  Mesquite: "Mesquite,TX",
  Plano: "Plano,TX",
  Richardson: "Richardson,TX",
  Rockwall: "Rockwall,TX",
  Rowlett: "Rowlett,TX",
  "University Park": "University+Park,TX",
};

export default function AboutContent() {
  const [selectedCity, setSelectedCity] = useState("Dallas,TX");

  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${selectedCity}&zoom=13`;

  return (
    <>
      {/* header */}
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Mobile wheelchair cleaning,{" "}
            <span className="bg-gradient-to-r from-accent-bright to-amber-200 bg-clip-text text-transparent">
              done right.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg text-slate-300"
          >
            We bring a deep, sanitizing clean straight to your door — skin-safe
            products, and you never have to leave your chair.
          </motion.p>
        </div>
      </section>

      {/* story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                Our Story
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Built by wheelchair users, for wheelchair users
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Wheel Clean DFW was started by two friends: Rahul, a C6
                quadriplegic wheelchair user, and Mitch, his care attendant.
                Knowing firsthand how vital regular cleaning is—and how great it
                feels to roll fresher and smoother—Rahul noticed a clear need in
                Dallas for a mobile wheelchair cleaning service.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Together, they decided to take action and bring a dedicated,
                fully mobile wheelchair detailing service on the road for the
                entire Dallas–Fort Worth community.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We use skin-safe, eco-friendly products. You never have to
                transfer out of your chair for any base tier cleaning. And we
                serve the entire Dallas / Fort Worth metroplex — from Plano to
                Mesquite, Irving to Rockwall.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Image
                src="https://images.pexels.com/photos/8543045/pexels-photo-8543045.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="People in wheelchairs"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* service area */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              Service Area
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Serving the entire DFW metroplex
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              We're fully mobile and come to you. Here are some of the cities we
              serve:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid gap-8 lg:grid-cols-2"
          >
            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                src={mapSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${selectedCity.replace(",", " ")} Map`}
                className="w-full"
              />
            </div>

            {/* Cities list */}
            <div className="grid grid-cols-2 gap-3 content-start">
              {SERVICE_CITIES.map((city, i) => {
                const isActive = selectedCity === CITY_COORDS[city];
                return (
                  <motion.button
                    key={city}
                    onClick={() => setSelectedCity(CITY_COORDS[city])}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                      isActive
                        ? "border-accent bg-accent/5 shadow-md"
                        : "border-slate-200 bg-white hover:border-accent/30 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-accent text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-ink">{city}</p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* contact */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Ready to schedule?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Call, text, or email us — we'll reach out ASAP to set up your
              on-site cleaning.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-colors hover:bg-accent-bright"
              >
                <PhoneIcon className="h-5 w-5" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 rounded-full border border-ink/20 px-8 py-4 text-base font-bold text-ink transition-colors hover:bg-ink/5"
              >
                <MailIcon className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
