import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-center">
      <div className="absolute inset-0">
        {/* Placeholder for background image or pattern */}
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
      </div>
      <div className="z-10 p-8 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-6">
            <Image
              src="/images/profile.jpg" // Placeholder for actual profile image
              alt="Marwan Mansur Profile"
              width={180}
              height={180}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            MARWAN MANSUR
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Web Developer & Data Management Specialist
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Lulusan Teknik Informatika yang berfokus pada efisiensi kerja melalui pengembangan web dan manajemen data yang akurat.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}