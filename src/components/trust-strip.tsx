import { SparkIcon } from "@/components/icons";

const ITEMS = [
  "Skin-safe, eco-friendly products",
  "You stay in your chair",
  "Serving the DFW Metroplex",
  "30–60 minute on-site service",
  "Manual & power wheelchairs",
  "Scooters · Sports chairs · Walkers",
];

export default function TrustStrip() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-accent-bright/20 bg-accent py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-bold tracking-wide text-white"
          >
            {item}
            <SparkIcon className="h-3.5 w-3.5 text-white/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
