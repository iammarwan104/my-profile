import { FaBookOpen, FaFistRaised } from 'react-icons/fa'; // Example using react-icons
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const hobbies = [
    {
        name: 'Pencak Silat',
        description: 'Aktif melatih kedisiplinan dan ketahanan fisik melalui seni bela diri tradisional.',
        icon: FaFistRaised,
        image: '/images/silat.jpg',
    },
    {
        name: 'Membaca Buku Filsafat & Psikologi',
        description: 'Gemar memperluas wawasan dan memahami pola pikir dari berbagai sudut pandang.',
        icon: FaBookOpen,
        image: '/images/membaca.jpg',
    }
]

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Hobi & Minat
            </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                    <div className="flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 h-full">
                        {hobby.image && (
                          <div className="mb-4 rounded-lg overflow-hidden w-full">
                            <Image
                              src={hobby.image}
                              alt={hobby.name}
                              width={400}
                              height={200}
                              className="w-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex items-center justify-center mb-2">
                            <hobby.icon size={30} className="mr-3 text-blue-500" />
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{hobby.name}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}
