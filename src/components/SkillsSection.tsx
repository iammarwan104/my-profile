import AnimatedSection from "./AnimatedSection";

const skills = {
  "Web Development": ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React", "Next.js", "Tailwind CSS", "MySQL"],
  "Data Management": ["Microsoft Excel (VLOOKUP, Pivot Table, Rumus Logika)", "Manajemen Arsip", "Verifikasi Data"],
  "Lainnya": ["Komunikasi", "Manajemen Organisasi", "Pemecahan Masalah", "Git & GitHub"]
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
        <div className="space-y-8">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <AnimatedSection key={category} delay={index * 150}>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsList.map((skill) => (
                    <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-full">
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