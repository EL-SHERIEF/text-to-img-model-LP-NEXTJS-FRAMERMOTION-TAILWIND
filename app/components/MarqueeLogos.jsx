'use client';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Artistry',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L1 21h22L12 2zm0 4.5l7.5 13H4.5L12 6.5z"/>
      </svg>
    )
  },
  {
    name: 'Prelude',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
      </svg>
    )
  },
  {
    name: 'Emblem',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    )
  },
  {
    name: 'Iconic',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 7L9 19l-6-6 1.41-1.41L9 16.17l10.59-10.59L21 7z"/>
      </svg>
    )
  },
  {
    name: 'Optimal',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      </svg>
    )
  },
  {
    name: 'Vectra',
    logo: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19.8h20L12 2zm0 4l6.9 12H5.1L12 6z"/>
      </svg>
    )
  },
];

const MarqueeGroup = () => (
  <div className="flex items-center gap-16 animate-marquee">
    {logos.map((item, i) => (
      <div key={i} className="flex items-center gap-2 text-zinc-700">
        <div className="w-6 h-6">
          {item.logo}
        </div>
        <span className="text-sm font-medium tracking-wide">{item.name}</span>
      </div>
    ))}
  </div>
);

const MarqueeLogos = () => {
  return (
    <div className="relative">
      {/* Trusted by text */}
      <div className="text-center mb-8">
        <p className="text-sm text-zinc-600">
          Trusted by 50,000+ businesses for innovative design and growth.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex gap-16 w-max">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>

        {/* Gradient masks */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#030a11] via-[#030a11] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#030a11] via-[#030a11] to-transparent z-10" />
      </div>
    </div>
  );
};

export default MarqueeLogos;
