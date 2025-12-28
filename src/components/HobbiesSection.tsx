import { FaBookOpen, FaFistRaised } from 'react-icons/fa'; // Example using react-icons
import AnimatedSection from './AnimatedSection';

const hobbies = [
    {
        name: 'Pencak Silat',
        description: 'Aktif melatih kedisiplinan dan ketahanan fisik melalui seni bela diri tradisional.',
        icon: FaFistRaised,
    },
    {
        name: 'Membaca Buku Filsafat & Psikologi',
        description: 'Gemar memperluas wawasan dan memahami pola pikir dari berbagai sudut pandang.',
        icon: FaBookOpen,
    }
]

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Hobi & Minat
            </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                    <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow h-full">
                        <div className="text-blue-500 mt-1">
                            <hobby.icon size={30} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{hobby.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
                        </div>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}