'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import photo1 from '@/public/Photos/1.png';
import photo2 from '@/public/Photos/2.png';
import photo3 from '@/public/Photos/10.jpeg';
import photo4 from '@/public/Photos/5.jpeg';
import photo5 from '@/public/Photos/6.jpeg';
import photo6 from '@/public/Photos/7.jpeg';
import photo7 from '@/public/Photos/8.jpeg';
import photo8 from '@/public/Photos/9.jpeg';

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
 
const elements = [
  { x: '-18%', y: '10%', width: 300, height: 300 },
  { x: '-6%', y: '45%', width: 100, height: 140 },
  { x: '-17%', y: '45%', width: 100, height: 140 },
  { x: '-31%', y: '65%', width: 380, height: 260 },
   // second row
  { x: '95%', y: '20%', width: 320, height: 210 },
  { x: '91%', y: '46%', width: 150, height: 150 },
  { x: '106%', y: '45%', width: 160, height: 160 },
  { x: '94%', y: '67%', width: 210, height: 270 }
];

const FloatingMockups = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '-40vh']); // Parallax effect

  return (
 <>
    <motion.div
      ref={containerRef}
      className="opacity-40 absolute z-0 top-5 w-screen h-[120vh] flex justify-center items-center overflow-hidden pointer-events-none"
      style={{ y: parallaxY }} // Apply parallax movement
    >
      <div className="relative w-full h-full max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            className="absolute rounded-2xl overflow-hidden shadow-lg"
            initial={{ y: 20,rotate: 0 }}
            animate={{ y: [0, -10, 10, 0],rotate: [0, 1, -1, 0] }}
            transition={{
              duration: 10,
              delay: Math.random(), // Random delay between 0s and 1s
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            style={{
              left: elements[index].x,
              top: elements[index].y,
              width: `${elements[index].width}px`,
              height: `${elements[index].height}px`
            }}
          >
            <div className="absolute inset-0 bg-[#18181B]/80" />
            <Image src={src} alt="Project interface" fill className="object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        ))}
      </div>
    </motion.div>
 </>
  );
};

export default FloatingMockups;
