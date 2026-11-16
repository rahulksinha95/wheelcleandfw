import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "WheelCleanDFW — Mobile Wheelchair Cleaning in Dallas/Fort Worth",
    template: "%s — WheelCleanDFW",
  },
  description:
    "Mobile wheelchair & mobility equipment cleaning that comes to you across the Dallas/Fort Worth metroplex. Manual & power wheelchairs, scooters, sports chairs, walkers, canes, and more. We only use non-toxic, skin-safe products — Premium service at affordable prices. From $59.",
  keywords: [
    "wheelchair cleaning dallas",
    "wheelchair cleaning fort worth",
    "mobile wheelchair cleaning",
    "power wheelchair cleaning",
		"manual wheelchair cleaning",
		"disability cleaning dallas",
		"wheelchair cleaners dallas",
    "mobility scooter cleaning",
    "DFW",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "WheelCleanDFW — Mobile Wheelchair Cleaning",
    description:
      "Look fresher, roll smoother. On-site wheelchair & mobility equipment cleaning across Dallas/Fort Worth. From $59.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WheelCleanDFW",
  description:
    "Mobile wheelchair and mobility equipment cleaning service serving the Dallas/Fort Worth metroplex.",
  url: "https://wheelcleandfw.com",
  telephone: "+1-214-702-8369",
  email: "wheelcleandfw@gmail.com",
  priceRange: "$$-$$$",
  areaServed: "Dallas / Fort Worth Metroplex",
  makesOffer: [
    {
      "@type": "Offer",
      name: "The Essential",
      price: "59",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "The Standard",
      price: "79",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "The Heavy Duty",
      price: "109",
      priceCurrency: "USD",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
