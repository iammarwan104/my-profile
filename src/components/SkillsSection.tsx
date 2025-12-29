import AnimatedSection from "./AnimatedSection";
import React from 'react';
import { FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

// Icon mapping and helper function
const iconMap = {
  FaLaptopCode, FaDatabase, FaTools
};

const getIconComponent = (iconName) => iconMap[iconName];

const skills = {
  "Web Development": {
    icon: "FaLaptopCode",
    list: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React", "Next.js", "Tailwind CSS", "MySQL"]
  },
  "Data Management": {
    icon: "FaDatabase",
    list: ["Microsoft Excel (VLOOKUP, Pivot Table, Rumus Logika)", "Manajemen Arsip", "Verifikasi Data"]
  },
  "Lainnya": {
    icon: "FaTools",
    list: ["Komunikasi", "Manajemen Organisasi", "Pemecahan Masalah", "Git & GitHub"]
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Keahlian
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 md:items-start">
          {Object.entries(skills).map(([categoryName, categoryData], index) => (
            <AnimatedSection key={categoryName} delay={index * 150}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg shadow-md h-full flex flex-col items-center text-center">
                {getIconComponent(categoryData.icon) && React.createElement(getIconComponent(categoryData.icon), { className: "mb-4 text-blue-600 dark:text-blue-400 text-5xl" })}
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  {categoryName}
                </h3>
                <div className="flex flex-wrap justify-center gap-3 mt-auto">
                  {categoryData.list.map((skill) => (
                    <span key={skill} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
