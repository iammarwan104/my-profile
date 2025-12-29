"use client"; // Pastikan ada ini karena kita menggunakan useEffect/Math.random
import { IoStar, IoSparkles } from "react-icons/io5"; // Contoh icon bintang
import { FaCode, FaDatabase } from "react-icons/fa"; // Icon tambahan sesuai skill Anda
import { useEffect, useState } from "react";

const StarBackground = () => {
  const [icons, setIcons] = useState<{ id: number; top: string; left: string; size: number; delay: string; Icon: any }[]>([]);

  useEffect(() => {
    // Daftar icon yang akan "bertaburan"
    const iconList = [IoStar, IoSparkles, FaCode, FaDatabase];
    
    // Generate 20 icon secara acak
    const generatedIcons = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * (24 - 12) + 12, // Ukuran antara 12px - 24px
      delay: `${Math.random() * 5}s`, // Delay animasi acak
      Icon: iconList[Math.floor(Math.random() * iconList.length)],
    }));
    
    setIcons(generatedIcons);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item) => (
        <div
          key={item.id}
          className="absolute text-blue-400/30 dark:text-purple-400/20 animate-pulse"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
        >
          <item.Icon size={item.size} />
        </div>
      ))}
    </div>
  );
};
