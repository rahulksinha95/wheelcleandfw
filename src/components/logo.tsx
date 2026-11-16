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
        src="https://i.postimg.cc/gk83S6Yw/IMG-1536.jpg"
        alt="WheelCleanDFW"
        width={compact ? 60 : 200}
        height="auto"
        className="object-contain"
      />
      <span
        className={`font-display font-bold tracking-tight ${
          compact ? "text-base" : "text-lg"
        } ${dark ? "text-white" : "text-ink"}`}
      >
        WheelClean<span className="text-accent">DFW</span>
      </span>
    </Link>
  );
}
