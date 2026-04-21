import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { DoctorSection } from "@/components/home/doctor-section";
import { HealingStoriesSection } from "@/components/home/healing-stories-section";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { ServicesSection } from "@/components/home/services-section";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <HealingStoriesSection />
      <ContactSection />
    </>
  );
}
