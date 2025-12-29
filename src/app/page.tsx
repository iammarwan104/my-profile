import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import EducationSection from "../components/EducationSection";
import HobbiesSection from "../components/HobbiesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />    
      <PortfolioSection />      
      <EducationSection /> 
      <HobbiesSection /> 
    </main>
  );
}
