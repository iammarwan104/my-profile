import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/marwan-mansur-a7a9a8267' },
    { icon: FaGithub, href: 'https://github.com/Marwan-Mansur' }, // Please update this
    { icon: FaEnvelope, href: 'mailto:marwahpinrang6@gmail.com' },
    { icon: FaWhatsapp, href: 'https://wa.me/6282347824914' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto py-6 px-4 text-center text-gray-600 dark:text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <Icon size={24} />
                    </a>
                )
            })}
        </div>
        <p>&copy; {new Date().getFullYear()} Marwan Mansur. All rights reserved.</p>
      </div>
    </footer>
  );
}