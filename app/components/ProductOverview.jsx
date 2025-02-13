'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import image1 from '@/public/Photos/hd.jpg';
import icon from '@/app/favicon.svg'
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
  const lightScale = useTransform(containerProgress, [0, 0.6], [0.3, 1.2]);
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
        className="absolute top-0 left-[15vw] w-[70vw] z-10 pointer-events-none"
        style={{
          scale: lightScale,
        }}
      >
                   <div className='w-full h-2 bg-[#c1ffff] blur-[4px]'></div>
                   <div className='w-full h-1 bg-[#ffffff] blur-[10px]'></div>
           <div className='w-[110%] absolute left-[-5%] h-4 bg-[#c1ffff] top-[30px] blur-[70px]'></div>
           <svg  className='w-full h-100px blur-[200px] opacity-90 absolute top-0' viewBox="0 0 1067 405" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1067" height="12" rx="6" fill="url(#paint0_linear_2378_13)"/>
<path d="M0 12H1063L1040.16 202.523C1038.75 214.27 1034.06 225.383 1026.63 234.589L909.128 380.18C896.762 395.502 877.943 404.162 858.261 403.586L217.465 384.847C199.081 384.309 181.849 375.765 170.294 361.456L29.9959 187.735C22.4871 178.437 17.7778 167.195 16.4177 155.322L0 12Z" fill="url(#paint1_radial_2378_13)"/>
<defs>
<linearGradient id="paint0_linear_2378_13" x1="403" y1="22.5" x2="403" y2="6" gradientUnits="userSpaceOnUse">
<stop offset="0.5" stop-color="#B148FC"/>
<stop offset="0.75" stop-color="#00EBFF"/>
<stop offset="1" stop-color="#AD4CFE"/>
</linearGradient>
<radialGradient id="paint1_radial_2378_13" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(531 77) rotate(90) scale(312.5 846.338)">
<stop stop-color="#1CCEDC"/>
<stop offset="1" stop-color="#AE4BFE" stop-opacity="0.35"/>
</radialGradient>
</defs>
</svg>


      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-1 max-w-2xl mx-auto text-center pt-0"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={icon} alt="Logo" width={100} height={100} />
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
          spAIce at a Glance
        </h2>

        {/* Description */}
        <p className="text-lg text-zinc-400">
          Explore spAIce's powerful features designed to streamline project management,
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
            alt="spAIce Dashboard"
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
