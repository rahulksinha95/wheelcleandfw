"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { DEVICES } from "@/lib/data";

const IMAGES = [
  "https://images.pexels.com/photos/8543045/pexels-photo-8543045.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8127701/pexels-photo-8127701.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/18681259/pexels-photo-18681259.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/34924219/pexels-photo-34924219.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6284828/pexels-photo-6284828.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6195461/pexels-photo-6195461.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Clean"
          title="Every mobility device, rolled out fresh"
          subtitle="If it helps you get around, we can clean it — thoroughly, gently, and on your schedule."
        />

        <div className="mt-20 flex flex-col gap-24">
          {DEVICES.map((device, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                  !isEven ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
                    {device.name}
                  </h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
                    {device.description}
                  </p>
                </div>
                <div
                  className={`relative overflow-hidden rounded-3xl ${
                    isEven ? "" : "md:[direction:ltr]"
                  }`}
                >
                  <Image
                    src={IMAGES[i % IMAGES.length]}
                    alt={device.name}
                    width={700}
                    height={500}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
