import type { Metadata } from "next";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { seoSchemas } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Post-Construction, Gym & Strata Cleaning Sydney",
  description:
    "ClearSiteCo provides post-construction cleaning, builders cleans, commercial gym facility cleaning, strata cleaning and end-of-lease handover cleaning across Sydney.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchemas.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchemas.faq) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Process />
        <ServiceAreas />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
