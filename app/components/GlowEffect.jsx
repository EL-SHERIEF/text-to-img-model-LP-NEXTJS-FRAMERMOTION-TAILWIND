'use client';

import Image from 'next/image';
import dotPattern from '@/public/assets/1.avif';

const GlowEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a1a,#000000_70%)]" />
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
        <Image
          src={dotPattern}
          alt="Background pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Top glow */}
      <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-500/20 via-zinc-500/5 to-transparent blur-3xl" />
      </div>
      
      {/* Subtle grain effect */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.5)_140%)]" />
    </div>
  );
};

export default GlowEffect;
