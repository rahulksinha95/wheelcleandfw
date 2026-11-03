import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Addons from "@/components/addons";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <Pricing />
      <Addons />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
