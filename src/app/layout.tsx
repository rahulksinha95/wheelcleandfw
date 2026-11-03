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
      "WheelClean DFW — Mobile Wheelchair Cleaning in Dallas / Fort Worth",
    template: "%s — WheelClean DFW",
  },
  description:
    "Mobile wheelchair & mobility equipment cleaning that comes to you across the Dallas / Fort Worth metroplex. Manual & power wheelchairs, scooters, sports chairs, walkers and canes. Skin-safe products — you never have to leave your chair. From $45.",
  keywords: [
    "wheelchair cleaning dallas",
    "wheelchair cleaning fort worth",
    "mobile wheelchair cleaning",
    "power wheelchair cleaning",
    "mobility scooter cleaning",
    "DFW",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "WheelClean DFW — Mobile Wheelchair Cleaning",
    description:
      "Look fresher, roll smoother. On-site wheelchair & mobility equipment cleaning across Dallas / Fort Worth. From $45.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WheelClean DFW",
  description:
    "Mobile wheelchair and mobility equipment cleaning service serving the Dallas / Fort Worth metroplex.",
  url: "https://wheelcleandfw.com",
  telephone: "+1-214-702-8369",
  email: "wheelcleandfw@gmail.com",
  priceRange: "$$-$$$",
  areaServed: "Dallas / Fort Worth Metroplex",
  makesOffer: [
    {
      "@type": "Offer",
      name: "The Essential",
      price: "45",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "The Deluxe",
      price: "55",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "The Heavy Duty",
      price: "75",
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
