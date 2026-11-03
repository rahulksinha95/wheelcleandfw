import type { Metadata } from "next";
import ScheduleContent from "@/components/schedule-content";

export const metadata: Metadata = {
  title: "Schedule Your On-Site Wheelchair Service",
  description:
    "Book a mobile wheelchair or mobility equipment cleaning anywhere in the Dallas / Fort Worth metroplex. Pick your tier, add extras, and we'll reach out ASAP.",
};

export default function SchedulePage() {
  return <ScheduleContent />;
}
