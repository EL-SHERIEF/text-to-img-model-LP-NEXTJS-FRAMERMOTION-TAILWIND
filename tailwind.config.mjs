/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float-1': 'float1 18s ease-in-out infinite',
        'float-2': 'float2 24s ease-in-out infinite',
        'float-3': 'float3 20s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 8s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '33%': { 
            transform: 'translate(-10px, 15px) rotate(-1deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '66%': { 
            transform: 'translate(10px, -15px) rotate(1deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
        },
        float2: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '33%': { 
            transform: 'translate(15px, -10px) rotate(1deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '66%': { 
            transform: 'translate(-15px, 10px) rotate(-1deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
        },
        float3: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '33%': { 
            transform: 'translate(-8px, 12px) rotate(-0.5deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
          '66%': { 
            transform: 'translate(8px, -12px) rotate(0.5deg)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'float': '0 0 50px -12px rgba(0, 0, 0, 0.9)',
      },
      transitionTimingFunction: {
        'hover': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};
