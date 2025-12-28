import AnimatedSection from "./AnimatedSection";

const educationData = [
  {
    institution: 'Universitas Muhammadiyah Parepare',
    degree: 'S1 Teknik Informatika',
    date: 'Lulus 2025',
    details: 'IPK: 3.6',
  },
  {
    institution: 'Kelas.Work',
    degree: 'Kursus Online Admin Gudang',
    date: '2025',
    details: 'Mempelajari manajemen stok, alur barang, dan data inventori.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Edukasi & Kursus
          </h2>
        </AnimatedSection>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="p-6 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-900 rounded-r-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {edu.degree} | {edu.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.details}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}