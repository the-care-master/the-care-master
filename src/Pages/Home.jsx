import React, { Suspense, lazy } from "react";
import HeroSlider from "../Components/HeroSlider";
import FeaturedProductsSlider from "../Components/FeaturedProductsSlider";
const StatsSection = lazy(() => import("../Components/StatsSection"));
const AboutSection = lazy(() => import("../Components/AboutSection"));
const SustainabilitySection = lazy(() => import("../Components/SustainabilitySection"));
const OurAchievements = lazy(() => import("../Components/OurAchievements"));
const ClientSection = lazy(() => import("../Components/ClientsSection"));
const Testimonials = lazy(() => import("../Components/Testimonials"));
const ContactSection = lazy(() => import("../Components/ContactSection"));

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Suspense>
        <FeaturedProductsSlider/>
        <StatsSection />
        <AboutSection />
        <SustainabilitySection />
        <OurAchievements />
        <ClientSection />
        <Testimonials />
        <ContactSection />
      </Suspense>
    </>
  );
}