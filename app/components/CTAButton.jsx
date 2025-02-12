'use client';

const CTAButton = ({ children }) => {
  return (
    <button className="group relative">
      {/* Button background with gradient border */}
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/20 via-white to-white/20" />
      
      {/* Button content */}
      <div className="relative px-8 py-3 rounded-full bg-black text-white text-sm font-medium transition-all duration-200 group-hover:bg-black/95">
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
