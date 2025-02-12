'use client';

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      {/* Main navigation container */}
      <div className="relative px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#18181B] shadow-lg transition-colors group-hover:bg-[#27272A]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
              </svg>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10"/>
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Suprema™</span>
          </a>

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
          <div className="flex items-center">
            <button className="group relative">
              <div className="absolute -inset-px rounded-full bg-white opacity-20 transition-opacity group-hover:opacity-30"/>
              <div className="relative px-5 py-2 rounded-full bg-white text-[13px] font-medium text-black transition-colors group-hover:bg-white/95">
                Contact us
              </div>
            </button>
          </div>
        </div>

        {/* Bottom border gradient */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-500/15 to-transparent"/>
      </div>

      {/* Background blur effect */}
      <div className="absolute inset-0 -z-10 backdrop-blur-[1px] backdrop-saturate-150">
        <div className="absolute inset-0 bg-black/40"/>
      </div>
    </nav>
  );
};

export default NavigationBar;
