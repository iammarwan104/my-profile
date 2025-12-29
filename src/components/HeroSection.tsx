"use client"
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      

        <div className="md:h-screen md:w-screen flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-0 md:gap-12">
          {/* Left Column (Text Content) */}
          <div className="md:w-1/2 text-center md:text-left py-12 md:py-0 md:ml-16 z-10">
            <AnimatedSection>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                MARWAN MANSUR
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Web Developer & Data Management Specialist
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
                Lulusan Teknik Informatika yang berfokus pada efisiensi kerja melalui pengembangan web dan manajemen data yang akurat.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link href="#portfolio" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-lg">
                  Lihat Portofolio
              </Link>
            </AnimatedSection>
          </div>

          {/* Right Column (Image) */}
          <div className="h-full w-full md:h-screen md:w-1/2">
          <div className="md:w-full md:h-full flex justify-center items-end mt-[6rem] md:mt-0">
            <AnimatedSection delay={150}>
              <div className="relative w-80 h-80 md:h-[95vh] md:w-[95vh]">
        
<Image
  id="hero-image"
  src="/images/profile.png" 
  alt="Marwan Mansur Profile"
  width={1080}
  height={1080}
  objectFit="cover"
  className="z-10 transition-all duration-300 ease-in-out 
             drop-shadow-[0_0_20px_rgba(37,99,235,0.8)] 
             hover:drop-shadow-[0_0_35px_rgba(37,99,235,1)]"
/>
              </div>
            </AnimatedSection>
</div>        
</div>
      </div>
    </section>
  );
}
