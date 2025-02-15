'use client';
import CTAButton from './shared/CTAButton';
import logo from '@/app/logo-white.svg';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <nav className="fixed top-4 left-0 z-50 w-screen xl:px-60 md:px-32 sm:px-16 px-8 mx-auto">
          <div className="flex items-center justify-between backdrop-blur-xl bg-black/30 border border-zinc-800/40 p-4 rounded-2xl shadow-lg shadow-black/5">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2 relative">
            <div className="relative w-[140px] h-[40px] group-hover:opacity-90 transition-all duration-200">
              <Image src={logo} alt="spAIce" fill className="object-contain" priority />
            </div>
          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="/" 
              className="px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all duration-200 hover:bg-white/[0.08] active:bg-white/[0.12] hover:scale-[1.02]"
            >
              Home
            </a>
            <a 
              href="/blogs" 
              className="px-5 py-2.5 text-sm font-medium text-zinc-400 rounded-full transition-all duration-200 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12] hover:scale-[1.02]"
            >
              Blogs
            </a>
            <a 
              href="/changelog" 
              className="px-5 py-2.5 text-sm font-medium text-zinc-400 rounded-full transition-all duration-200 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12] hover:scale-[1.02]"
            >
              Changelog
            </a>
            <a 
              href="/waitlist" 
              className="px-5 py-2.5 text-sm font-medium text-zinc-400 rounded-full transition-all duration-200 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12] hover:scale-[1.02]"
            >
              Waitlist
            </a>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <CTAButton className="px-7 py-2.5 hover:scale-[1.02] shadow-lg shadow-black/5">Login</CTAButton>
          </div>
          </div>
    </nav>
  );
};

export default NavigationBar;
