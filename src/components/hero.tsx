"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";
import { ArrowRightIcon, PhoneIcon } from "@/components/icons";

const SLIDES = [
  {
    src: "https://images.pexels.com/photos/8543045/pexels-photo-8543045.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "People in wheelchairs",
  },
  {
    src: "https://images.pexels.com/photos/8127701/pexels-photo-8127701.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Person in wheelchair",
  },
  {
    src: "https://images.pexels.com/photos/18681259/pexels-photo-18681259.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Elderly person on mobility scooter",
  },
  {
    src: "https://images.pexels.com/photos/34924219/pexels-photo-34924219.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Wheelchair basketball",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent"
            >
              Mobile Wheelchair Cleaners · Dallas / Fort Worth
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl"
            >
              Look
              <br />
              <span className="text-accent">Fresher.</span>
              <br />
              Roll
							<br />
              <span className="text-accent">Smoother.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600"
            >
              Premium wheelchair & mobility device cleaning that comes to YOU.
							<br />
							Our proven cleaning process, skin-safe/non-toxic products, and thorough detailing will leave you feeling FRESHER and rolling SMOOTHER to your next adventure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Book Your Cleaning
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 text-base font-bold text-ink transition-colors hover:text-accent"
              >
                <PhoneIcon className="h-5 w-5" />
                {CONTACT.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>

          {/* Right carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative lg:col-span-5 lg:col-start-8"
          >
            <div className="relative">
              {/* Carousel container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={SLIDES[current].src}
                      alt={SLIDES[current].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-110"
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-ink">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition-all hover:bg-white hover:scale-110"
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-ink">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Dots indicator */}
              <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-accent" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
