import AnimatedSection from "./AnimatedSection";
import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

// Icon mapping and helper function
const iconMap = {
  FaGraduationCap, FaCertificate
};

const getIconComponent = (iconName: keyof typeof iconMap) => iconMap[iconName];

type EducationItem = {
  institution: string;
  degree: string;
  date: string;
  details: string;
  icon: keyof typeof iconMap;
  image: string;
};

const educationData: EducationItem[] = [
  {
    institution: 'Universitas Muhammadiyah Parepare',
    degree: 'S1 Teknik Informatika',
    date: 'Lulus 2025',
    details: 'IPK: 3.6',
    icon: 'FaGraduationCap',
    image: '/images/umpar.jpg',
  },
  {
    institution: 'Kelas.Work',
    degree: 'Kursus Online Admin Gudang',
    date: '2025',
    details: 'Mempelajari manajemen stok, alur barang, dan data inventori.',
    icon: 'FaCertificate',
    image: '/images/sertifikat.jpg',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-0 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Edukasi & Kursus
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 md:items-start">
          {educationData.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.01] transform transition-all duration-300">
                {edu.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={edu.image}
                      alt={edu.institution}
                      width={400}
                      height={200}
                      className="w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center mb-2">
                  {getIconComponent(edu.icon) && React.createElement(getIconComponent(edu.icon), { className: "mr-3 text-blue-500 text-3xl" })}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                </div>
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
