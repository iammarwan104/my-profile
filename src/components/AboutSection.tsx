import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800 rounded-t-[2rem] lg:rounded-t-[4rem]">
      <div className="container mx-auto max-w-6xl">

         <AnimatedSection>
          <h2 className="md:hidden text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Tentang Saya
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-16">
          <AnimatedSection delay={100} className="w-full md:w-2/3">
            <div className="relative w-[90vw] h-[90vw] mx-auto overflow-hidden md:w-[30rem] md:h-[30rem] rounded-lg">
              <Image
                src="/images/about.jpg"
                alt="Foto Profil Marwan"
                width={1000}
                height={1000}
                objectFit="cover"
                className="transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </AnimatedSection>

            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left space-y-4">
         <AnimatedSection>
          <h2 className="hidden md:block text-4xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-white">
            Tentang Saya
          </h2>
        </AnimatedSection>
          <AnimatedSection delay={200} className="w-full md:w-1/3">
              <p className="mb-4">Mari mengenal saya lebih dekat melalui keahlian dan pengalaman berikut:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lulusan Teknik Informatika dengan IPK 3.6.</li>
                <li>Pengalaman 4 tahun sebagai sekretaris organisasi dan magang Web Developer.</li>
                <li>Mahir merancang sistem web, mengelola database dan arsip efisien.</li>
                <li>Menguasai Microsoft Excel (VLOOKUP, Pivot Table).</li>
                <li>Bersemangat memecahkan masalah dengan solusi teknologi untuk efisiensi dan akurasi data.</li>
              </ul>
              <p>Siap berinovasi dan memberikan kontribusi terbaik di setiap tantangan.</p>
          </AnimatedSection>
            </div>
        </div>
      </div>
    </section>
  );
}
