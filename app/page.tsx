// app/page.tsx
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}