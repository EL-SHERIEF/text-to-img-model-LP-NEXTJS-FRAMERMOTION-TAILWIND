'use client';

const CTAButton = ({ children }) => {
  return (
    <button className="group relative">
      {/* Button background with gradient border */}
      <div className="absolute -inset-[1px] rounded-full border border-white/[0.08]" />
      
      {/* Button content */}
      <div className="shadow-2xl shadow-[#8c2ed45f] relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8B2ED4] to-[#1CCCD9] backdrop-blur-sm text-white text-sm font-medium transition-all duration-200 group-hover:backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          {children}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path 
              d="M1 8H15M15 8L8 1M15 8L8 15" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default CTAButton;
