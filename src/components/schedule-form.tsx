"use client";

import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ADDONS, CONTACT, DEVICES, TIERS } from "@/lib/data";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4.5 py-3.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none";

export default function ScheduleForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [device, setDevice] = useState("");
  const [tier, setTier] = useState(TIERS[1].id);
  const [addons, setAddons] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const total = useMemo(() => {
    const base = TIERS.find((t) => t.id === tier)?.price ?? 0;
    const extra = ADDONS.filter((a) => addons.includes(a.id)).reduce(
      (sum, a) => sum + a.price,
      0
    );
    return base + extra;
  }, [tier, addons]);

  const toggleAddon = (id: string) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const tierName = TIERS.find((t) => t.id === tier)?.name ?? "";
    const addonNames = ADDONS.filter((a) => addons.includes(a.id))
      .map((a) => a.name)
      .join(", ") || "None";
    const subject = encodeURIComponent(
      `Service Request: ${tierName}${device ? ` — ${device}` : ""}`
    );
    const body = encodeURIComponent(
      [
        "New service request from wheelcleandfw.com",
        "",
        `Name: ${name}`,
        `Email or Phone: ${contact}`,
        `Location of Service: ${location}`,
        `Mobility Device: ${device}`,
        `Base Cleaning Tier: ${tierName} ($${TIERS.find((t) => t.id === tier)?.price})`,
        `Add-Ons: ${addonNames}`,
        notes ? `Notes / Custom Service: ${notes}` : "",
        `Estimated Total: $${total}`,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-ink/5 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact" className="mb-2 block text-sm font-bold text-ink">
            Email or Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="you@email.com or (214) 555-0100"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-bold text-ink">
            Location of Service <span className="text-accent">*</span>
          </label>
          <input
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City or address in DFW"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="device" className="mb-2 block text-sm font-bold text-ink">
            Mobility Device <span className="text-accent">*</span>
          </label>
          <select
            id="device"
            required
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            className={`${inputClass} ${device ? "" : "text-slate-400"}`}
          >
            <option value="" disabled>
              Select your device
            </option>
            {DEVICES.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* tier selection */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-bold text-ink">
          Base Cleaning Tier <span className="text-accent">*</span>
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {TIERS.map((t) => {
            const active = tier === t.id;
            return (
              <motion.button
                type="button"
                key={t.id}
                onClick={() => setTier(t.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-2xl border-2 p-4 text-left transition-colors ${
                  active
                    ? "border-accent bg-accent/5"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
                aria-pressed={active}
              >
                <AnimatePresence>
                  {active && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-white shadow-md"
                    >
                      <CheckIcon className="h-3 w-3" />
                    </motion.span>
                  )}
                </AnimatePresence>
                <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                  {t.name}
                </p>
                <p className="mt-1 font-display text-2xl font-extrabold text-ink">
                  ${t.price}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">
                  {t.duration}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* add-ons */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-bold text-ink">Add-Ons</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {ADDONS.map((a) => {
            const checked = addons.includes(a.id);
            return (
              <motion.button
                type="button"
                key={a.id}
                onClick={() => toggleAddon(a.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-colors ${
                  checked
                    ? "border-accent bg-accent/5"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
                aria-pressed={checked}
              >
                <motion.span
                  animate={
                    checked
                      ? { backgroundColor: "#0ea895", color: "white" }
                      : { backgroundColor: "rgba(15,23,42,0.06)", color: "transparent" }
                  }
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-lg"
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </motion.span>
                <span>
                  <span className="flex items-center gap-2 text-sm font-bold text-ink">
                    {a.name}
                    <span className="text-xs font-extrabold text-accent">
                      +${a.price}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                    {a.description}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="notes" className="mb-2 block text-sm font-bold text-ink">
          Anything else?{" "}
          <span className="font-semibold text-slate-400">(custom service requests)</span>
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Need something specific done on your chair? Let us know and we'll do our best."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Estimated Total
          </p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={total}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="font-display text-3xl font-extrabold text-ink"
            >
              ${total}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center justify-center gap-2 rounded-full bg-accent px-9 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-colors hover:bg-accent-bright"
        >
          Submit Service Request
          <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 overflow-hidden rounded-2xl bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700"
          >
            Your request is ready — we&apos;ve opened your email to send it. We
            will reach out ASAP to schedule your cleaning!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
