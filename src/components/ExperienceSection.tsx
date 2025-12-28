import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const experiences = [
  {
    title: 'Web Developer - Magang',
    company: 'PT. Makkode Teknologi Kreatif',
    date: 'September 2024 – Desember 2024',
    description: 'Merancang dan membangun berbagai sistem informasi berbasis web, memastikan keamanan data, dan melakukan troubleshooting pada sistem digital.',
    image: '/images/experience/makkode.jpg', // Placeholder image
  },
  {
    title: 'Sekretaris',
    company: 'PSHT Cabang Pinrang',
    date: '2021 – 2024',
    description: 'Mengelola database anggota menggunakan Excel, menangani administrasi surat-menyurat, dan mengarsip dokumen legalitas secara sistematis.',
    image: '/images/experience/psht.jpg', // Placeholder image
  },
  {
    title: 'Admin Operasional - Magang',
    company: 'Lestari Belajar',
    date: 'Februari 2019 – April 2019',
    description: 'Mengelola administrasi pendaftaran, melakukan entri data harian, dan menyusun laporan operasional bulanan.',
    image: '/images/experience/lestari.jpg', // Placeholder image
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Pengalaman
          </h2>
        </AnimatedSection>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/3">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} | {exp.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}