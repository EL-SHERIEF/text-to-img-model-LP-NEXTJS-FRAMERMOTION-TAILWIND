'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/logo-white.svg'
const navigationSections = {
  'Quick Navigation': [
    { name: 'Product Overview', href: '/product-overview' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: "FAQ's", href: '/faqs' },
  ],
  'All Pages': [
    { name: 'Home', href: '/' },
    { name: 'Waitlist', href: '/waitlist' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: '404', href: '/404' },
  ],
  'Social Handles': [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '/social/linkedin.svg' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '/social/twitter.svg' },
    { name: 'GitHub', href: 'https://github.com', icon: '/social/github.svg' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50">
      <div className="container mx-auto px-6 py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-32 h-16 relative group">
                <Image src={logo} alt="spAIce" fill className="object-contain group-hover:opacity-90 transition-all duration-200" priority />
              </div>
            </div>
            <p className="text-zinc-400 mb-10 text-sm leading-relaxed max-w-md">
              Transform your ideas into reality with our AI-powered platform. From concept to launch, we're here to guide your journey.
            </p>
            <div className="flex items-center gap-3 text-zinc-400 group">
              <span className="inline-block group-hover:translate-y-0.5 transition-transform duration-200">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7L9 12L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <a href="mailto:hello@spAIce.com" className="text-sm group-hover:text-white transition-all duration-200">
                hello@spAIce.com
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(navigationSections).map(([title, items]) => (
              <div key={title} className="space-y-6">
                <h3 className="font-medium text-white text-sm tracking-wide uppercase">{title}</h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.name}>
                      {item.icon ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-200 text-sm group"
                        >
                          <span className="group-hover:scale-110 transition-transform duration-200">
                            <Image src={item.icon} width={20} height={20} alt={item.name} />
                          </span>
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-zinc-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-0.5 inline-block"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} spAIce. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
