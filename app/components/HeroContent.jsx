'use client';
import CTAButton from './shared/CTAButton';
import Image from 'next/image';
import dots from '@/public/assets/1.webp';
import { useState } from 'react';

const HeroContent = () => {
  const [prompt, setPrompt] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle prompt submission
    console.log('Prompt submitted:', prompt);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8 px-4">
      {/* Project management tag */}
      
      <button className="mb-[-20px] relative z-10 group flex items-center gap-3 px-2.5 py-2.5 bg-[#18181B] hover:bg-[#27272A] rounded-full transition-colors duration-200">
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
          <span className="text-[14px] font-medium text-white">Manage projects end-to-end</span>
        </div>
        
        {/* Arrow */}
        <div className="relative w-5 h-5 rounded-full bg-white/[0.08] group-hover:bg-white/[0.03] transition-colors duration-200">
        <svg             className="absolute inset-0 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5"
 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
      </button>
      
      <div className="relative z-10 space-y-7">
        <h1 className="[text-shadow:_0_5px_40px_#ffffff30] text-[70px] leading-[1.2] tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-24">
          Design and innovate<br />
          Successful <span className='text-transparent bg-clip-text bg-gradient-to-b from-[#2DBFDA] to-[#AA4DFE] [text-shadow:_0_5px_40px_#AA4DFE]'>digital ideas.</span>
        </h1>


        {/* Prompt Input Section */}
        <div className="max-w-3xl mx-auto mt-20 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-[#2DBFDA] to-[#AA4DFE] blur-3xl opacity-20 scale-150" />
              <div className="relative text-zinc-400 flex items-center gap-2">
                <span className="text-sm">Type your prompt below</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r from-[#2DBFDA]/20 via-[#AA4DFE]/20 to-[#2DBFDA]/20 rounded-2xl transition-all duration-500 ${isFocused ? 'opacity-100 blur-2xl' : 'opacity-0 blur-lg'}`} />
            <div className="relative flex items-center bg-black/20 backdrop-blur-xl rounded-2xl">
              <div className="absolute inset-0.5 bg-gradient-to-r from-zinc-800/50 to-zinc-800/50 rounded-[14px]" />
              
              <div className="relative flex w-full">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Describe your imagination..."
                  className="w-full bg-transparent text-white placeholder-zinc-500 text-lg px-8 py-6 rounded-2xl focus:outline-none transition-all duration-200"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-3">
                  <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                    Press Enter ↵
                  </kbd>
                  <button
                    type="submit"
                    className="p-3 hover:bg-white/5 rounded-xl text-white/90 font-medium transition-all duration-200 group/btn"
                  >
                    <svg 
                      className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Example Prompts */}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-500">
            <span>Try:</span>
            <div className="flex items-center gap-3">
              {["Surreal floating islands", "Cyberpunk cityscape", "Abstract art"].map((example, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(example)}
                  className="px-3 py-1.5 rounded-lg border bg-[#030a11] border-zinc-800 hover:border-zinc-700 hover:text-zinc-300 transition-all duration-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
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
