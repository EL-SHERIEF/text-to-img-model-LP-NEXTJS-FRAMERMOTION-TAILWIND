'use client';
import CTAButton from './CTAButton';
import Image from 'next/image';
import dots from '@/public/assets/1.webp';
const HeroContent = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8 px-4">
      {/* Project management tag */}
      
      <button className="mb-[-20px] relative z-10 group flex items-center gap-3 px-5 py-2.5 bg-[#18181B] hover:bg-[#27272A] rounded-full transition-colors duration-200">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-white/90 to-white/70">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black">
              <path 
                d="M10 2L12.2451 7.90983H18.5106L13.3327 11.6803L15.5779 17.5902L10.4 13.8197L5.22215 17.5902L7.46734 11.6803L2.28947 7.90983H8.55496L10 2Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-[15px] font-medium text-white">Manage projects end-to-end</span>
        </div>
        
        {/* Arrow */}
        <div className="relative w-5 h-5 rounded-full bg-white/[0.08] group-hover:bg-white/[0.12] transition-colors duration-200">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path 
              d="M7 4L13 10L7 16" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      
      <div className="relative z-10 space-y-7">
        <h1 className="text-[70px] leading-[1.2] tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Design and innovate<br />
          Successful digital ideas.
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal">
          Create a clear photo, track progress, and smoothly learn how to master
          your ideas to successful Pictures that can sell.
        </p>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-4 pt-4">
        <CTAButton>Get Started For Free</CTAButton>
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          No credit card required
        </div>
      </div>
      <Image src={dots} alt="Dots" className="absolute w-screen h-screen top-0 left-0 pointer-events-none" />
    </div>
  );
};

export default HeroContent;
