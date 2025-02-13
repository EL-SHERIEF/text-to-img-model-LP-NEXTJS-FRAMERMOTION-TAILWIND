'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import lightEffect from '@/public/assets/2.webp';
import image1 from '@/public/Photos/hd.jpg';

const ProductOverview = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'center center']
  });

  // Transform values for animations
  const lightScale = useTransform(containerProgress, [0, 0.5], [0.8, 1.2]);
  const lightOpacity = useTransform(containerProgress, [0, 0.3], [0.3, 1]);
  const contentY = useTransform(containerProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(containerProgress, [0, 0.3], [0, 1]);

  // Dashboard scroll-based animations
  const dashboardRotateX = useTransform(imageProgress, [0, 1], [30, 0]);
  const dashboardY = useTransform(imageProgress, [0, 1], [100, 0]);
  const dashboardScale = useTransform(imageProgress, [0, 1], [0.95, 1]);
  const dashboardOpacity = useTransform(imageProgress, [0, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Light effect */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl"
        style={{
          scale: lightScale,
          opacity: lightOpacity,
        }}
      >
        <Image
          src={lightEffect}
          alt="Light effect"
          className="w-full"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-2xl mx-auto text-center pt-24"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#18181B] shadow-lg flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Tag */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-400">
              <path d="M8 1.5l2.47 4.997 5.53.807-4 3.89.944 5.506L8 13.996l-4.944 2.704L4 11.194l-4-3.89 5.53-.807L8 1.5z" fill="currentColor"/>
            </svg>
            <span className="text-xs font-medium text-zinc-400">Product Overview</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Suprema at a Glance
        </h2>

        {/* Description */}
        <p className="text-lg text-zinc-400">
          Explore Suprema's powerful features designed to streamline project management,
          enhance collaboration, and boost efficiency.
        </p>
      </motion.div>

      {/* Dashboard Image */}
      <div className="relative z-0 max-w-7xl mx-auto mt-16 px-4 perspective-1000">
        <motion.div 
          ref={imageRef}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#18181B] shadow-2xl"
          style={{
            rotateX: dashboardRotateX,
            y: dashboardY,
            scale: dashboardScale,
            opacity: dashboardOpacity,
            transformOrigin: "center bottom"
          }}
        >
          <Image
            src={image1}
            alt="Suprema Dashboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
