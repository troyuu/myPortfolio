// Cloned layout — custom content applied
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PhotoSection from "@/components/sections/PhotoSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/common/BackToTop";
import BeeCursor from "@/components/common/BeeCursor";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative w-full text-center transition-colors duration-500">
      <Navbar />
      <main>
        <HeroSection isDark={isDark} onToggle={toggle} />
        <PhotoSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <BeeCursor />
    </div>
  );
}
