import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WheelClean DFW. Call, text, or email us with any questions about our mobile wheelchair cleaning service.",
};

export default function ContactPage() {
  return <ContactContent />;
}
