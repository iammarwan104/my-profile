import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Vibra Library',
    description: 'Aplikasi Laravel ini adalah sistem manajemen perpustakaan yang mencakup otentikasi pengguna, katalog buku, pengelolaan peminjaman, reservasi, data anggota, dan panel admin.',
    image: '/images/portfolio/library.jpg', // Placeholder
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    liveUrl: null,
    githubUrl: '#',
  },
  {
    title: 'Lestari Belajar',
    description: 'Lestari Belajar adalah website yang menyediakan info paket kursus (mengemudi, MC, desain), analisis kualitas layanan menggunakan metode Importance Performance Analysis, kuesioner, dan autentikasi pengguna.',
    image: '/images/portfolio/lestari-belajar.jpg', // Placeholder
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    liveUrl: 'https://lestari-belajar.vercel.app',
    githubUrl: '#',
  },
{
    title: 'Vibra Warkop',
    description: 'Vibra Warkop adalah sistem manajemen kedai kopi berbasis Laravel yang sistem e-commerce (keranjang belanja, checkout, riwayat pesanan), antarmuka admin POS, integrasi pembayaran Midtrans, serta UI modern dengan animasi dan dark mode.',
    image: '/images/portfolio/warkop.jpg', // Placeholder
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    liveUrl: null,
    githubUrl: '#',
  },
{
    title: 'Makkode Landing Page',
    description: 'Selama masa magang, saya berhasil mengembangkan landing page untuk Makkode, di mana saya berkontribusi aktif sebesar 60% dalam proses pembuatannya.',
    image: '/images/portfolio/makkode.jpg', // Placeholder
    tags: ['Laravel', 'React', 'MySQL', 'Tailwind'],
    liveUrl: 'https://makkode.com/',
    githubUrl: '#',
  },]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900">
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
                    {
                       !project.liveUrl? "" : 
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      Live Demo
                    </a>
}
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
