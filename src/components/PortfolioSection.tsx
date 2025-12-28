import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Sistem Informasi A',
    description: 'Deskripsi singkat tentang proyek ini, tujuan dibuatnya, dan hasil yang dicapai. Ini adalah proyek yang menangani manajemen data untuk mempermudah alur kerja.',
    image: '/images/portfolio/project-a.jpg', // Placeholder
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Website B',
    description: 'Deskripsi singkat tentang proyek ini. Website modern yang dibuat untuk tujuan komersial dengan fokus pada pengalaman pengguna yang baik.',
    image: '/images/portfolio/project-b.jpg', // Placeholder
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Aplikasi C',
    description: 'Deskripsi singkat tentang aplikasi ini. Sebuah aplikasi internal yang membantu dalam mengelola sumber daya dan pelaporan harian.',
    image: '/images/portfolio/project-c.jpg', // Placeholder
    tags: ['React', 'Node.js', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Portofolio
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex justify-between mt-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}