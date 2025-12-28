import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Tentang Saya
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Saya adalah seorang lulusan Teknik Informatika dari Universitas Muhammadiyah Parepare dengan IPK 3.6. Dengan pengalaman 4 tahun sebagai sekretaris organisasi dan magang sebagai Web Developer, saya memiliki keahlian dalam merancang sistem informasi berbasis web serta mengelola database dan arsip secara efisien. Saya mahir menggunakan alat seperti Microsoft Excel (VLOOKUP, Pivot Table) untuk pengolahan data dan memiliki ketelitian tinggi dalam verifikasi dokumen. Saya bersemangat dalam memecahkan masalah dan mencari solusi berbasis teknologi untuk meningkatkan efisiensi dan akurasi data.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}