import Image from "next/image";
import Link from "next/link";

export default function Logo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="https://assets.zyrosite.com/2J82Qbf4wzjoIRnb/uyg6x5-gg9OA6LmQGBoP2f8.png"
        alt="WheelClean DFW"
        width={compact ? 32 : 48}
        height={compact ? 32 : 48}
        className="object-contain"
      />
      <span
        className={`font-display font-bold tracking-tight ${
          compact ? "text-base" : "text-lg"
        } ${dark ? "text-white" : "text-ink"}`}
      >
        WheelClean<span className="text-accent"> DFW</span>
      </span>
    </Link>
  );
}
