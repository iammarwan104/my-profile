import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { FaCode, FaShieldAlt, FaBug, FaFileExcel, FaEnvelopeOpenText, FaArchive, FaUserPlus, FaKeyboard, FaChartLine } from 'react-icons/fa';

// Icon mapping and helper function
const iconMap = {
  FaCode, FaShieldAlt, FaBug, FaFileExcel, FaEnvelopeOpenText, FaArchive, FaUserPlus, FaKeyboard, FaChartLine
};

const getIconComponent = (iconName) => iconMap[iconName];

const experiences = [
  {
    title: 'Web Developer - Magang',
    company: 'PT. Makkode Teknologi Kreatif',
    date: 'September 2023 – Desember 2023',
    image: '/images/experience/makkode.png',
    keyTasks: [
      { text: 'Merancang & membangun sistem informasi berbasis web', icon: 'FaCode' },
      { text: 'Memastikan keamanan data', icon: 'FaShieldAlt' },
      { text: 'Melakukan troubleshooting sistem digital', icon: 'FaBug' },
    ],
  },
  {
    title: 'Sekretaris',
    company: 'PSHT Cabang Pinrang',
    date: '2021 – 2024',
    image: '/images/experience/psht.jpg',
    keyTasks: [
      { text: 'Mengelola database anggota (Excel)', icon: 'FaFileExcel' },
      { text: 'Administrasi surat-menyurat', icon: 'FaEnvelopeOpenText' },
      { text: 'Mengarsip dokumen legalitas sistematis', icon: 'FaArchive' },
    ],
  },
  {
    title: 'Admin Operasional - Magang',
    company: 'Lestari Belajar',
    date: 'Februari 2019 – April 2019',
    image: '/images/experience/lestari.jpg',
    keyTasks: [
      { text: 'Mengelola administrasi pendaftaran', icon: 'FaUserPlus' },
      { text: 'Entri data harian', icon: 'FaKeyboard' },
      { text: 'Menyusun laporan operasional bulanan', icon: 'FaChartLine' },
    ],
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 md:items-start">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center gap-8
                           hover:shadow-2xl hover:scale-[1.01] transform transition-all duration-300"
              >
                <div className="w-full">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <div className="w-full md:w-[95%]">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company} | {exp.date}
                  </p>
                  <ul className="space-y-2">
                    {exp.keyTasks && exp.keyTasks.map((task, taskIndex) => {
                      const IconComponent = getIconComponent(task.icon);
                      return (
                        <li key={taskIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          {IconComponent && <IconComponent className="mr-2 text-blue-500 text-xl" />}
                          {task.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
