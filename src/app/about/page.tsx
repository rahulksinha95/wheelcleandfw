import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About WheelClean DFW",
  description:
    "Learn about WheelClean DFW — mobile wheelchair and mobility equipment cleaning serving the Dallas / Fort Worth metroplex.",
};

export default function AboutPage() {
  return <AboutContent />;
}
