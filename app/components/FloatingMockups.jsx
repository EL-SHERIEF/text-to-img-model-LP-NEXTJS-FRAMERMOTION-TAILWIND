'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import photo1 from '@/public/Photos/1.png';
import photo2 from '@/public/Photos/2.png';
import photo3 from '@/public/Photos/11.jpeg';
import photo4 from '@/public/Photos/4.jpeg';
import photo5 from '@/public/Photos/5.jpeg';
import photo6 from '@/public/Photos/6.jpeg';

const FloatingMockups = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ y }}
      className="absolute inset-0 -top-24 -bottom-24 overflow-hidden pointer-events-none select-none"
    >
      <div className="relative w-full h-full max-w-7xl mx-auto">
        {/* Left side mockups */}
        <div className="absolute top-[20%] -left-10 w-[480px]">
          <div className="relative">
            {/* Main window */}
            <div className="relative w-[420px] h-[280px] rounded-2xl overflow-hidden animate-float-1 shadow-2xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo1}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-12 right-12 w-64 h-48 rounded-2xl overflow-hidden animate-float-3 delay-300 shadow-xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo2}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="256px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute -bottom-8 right-0 w-56 h-56 rounded-2xl overflow-hidden animate-float-2 delay-700 shadow-xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo3}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="224px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Right side mockups */}
        <div className="absolute top-[25%] -right-10 w-[480px]">
          <div className="relative">
            {/* Main window */}
            <div className="relative w-[420px] h-[280px] rounded-2xl overflow-hidden animate-float-2 shadow-2xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo4}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-20 left-8 w-72 h-52 rounded-2xl overflow-hidden animate-float-3 delay-500 shadow-xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo5}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="288px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute -bottom-12 left-12 w-60 h-60 rounded-2xl overflow-hidden animate-float-1 shadow-xl">
              <div className="absolute inset-0 bg-[#18181B]/80" />
              <Image
                src={photo6}
                alt="Project interface"
                fill
                className="object-cover mix-blend-luminosity opacity-90"
                sizes="240px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingMockups;
