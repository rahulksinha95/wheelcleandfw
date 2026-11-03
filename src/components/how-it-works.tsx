import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How It Works"
          title="Fresh in three easy steps"
          subtitle="No transfers, no hassle, no trip across town. We come to you."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-[16.6%] right-[16.6%] top-9 hidden h-px bg-gradient-to-r from-accent/0 via-accent-bright/40 to-accent/0 md:block"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15}>
              <div className="group relative flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-7 py-10 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-bright/30 hover:bg-white/[0.07]">
                <span className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-accent-bright/30 bg-ink font-display text-3xl font-extrabold text-accent-bright shadow-[0_0_40px_-8px] shadow-accent/40 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
