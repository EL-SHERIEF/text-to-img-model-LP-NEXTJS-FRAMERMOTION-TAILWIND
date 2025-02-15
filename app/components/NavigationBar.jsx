'use client';
import CTAButton from './shared/CTAButton';
import logo from '@/app/logo-white.svg';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <nav className="fixed top-4 left-0 z-50 w-screen xl:px-60 md:px-32 sm-px-16 px-8 mx-auto">
          <div className=" flex items-center justify-between  backdrop-blur-3xl border-b border-zinc-700/50 p-2 rounded-2xl">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2">
           <Image src={logo} alt="spAIce" width={140} height={40}/>          </a>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a 
              href="#" 
              className="px-4 py-2 text-[13px] font-medium text-white rounded-full transition-colors hover:bg-white/[0.06] active:bg-white/[0.08]"
            >
              Home
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-[13px] font-medium text-zinc-400 rounded-full transition-colors hover:bg-white/[0.06] hover:text-white active:bg-white/[0.08]"
            >
              Blogs
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-[13px] font-medium text-zinc-400 rounded-full transition-colors hover:bg-white/[0.06] hover:text-white active:bg-white/[0.08]"
            >
              Changelog
            </a>
            <a 
              href="#" 
              className="px-4 py-2 text-[13px] font-medium text-zinc-400 rounded-full transition-colors hover:bg-white/[0.06] hover:text-white active:bg-white/[0.08]"
            >
              Waitlist
            </a>
          </div>

          {/* Contact Button */}
          <CTAButton>Login</CTAButton>
          </div>
    </nav>
  );
};

export default NavigationBar;
