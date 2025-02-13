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
    <footer className="border-t px-24 border-zinc-800 bg-black">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-32 h-16 relative">
                <Image src={logo} alt="spAIce" fill className="object-contain" />
              </div>
            </div>
            <p className="text-zinc-400 mb-6">Plan and navigate from idea to launch.</p>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="inline-block">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7L9 12L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <a href="mailto:hello@spAIce.com" className="hover:text-white transition-colors">
                hello@spAIce.com
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(navigationSections).map(([title, items]) => (
            <div key={title} className={`${title === 'Social Handles' ? 'md:col-span-2' : 'md:col-span-3'}`}>
              <h3 className="text-white font-medium mb-6">{title}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    {item.icon ? (
                      <Link 
                        href={item.href}
                        className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        <Image src={item.icon} alt={item.name} width={20} height={20} />
                        {item.name}
                      </Link>
                    ) : (
                      <Link 
                        href={item.href}
                        className="text-zinc-400 hover:text-white transition-colors"
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

        {/* System Status */}
        <div className="flex items-center gap-2 text-zinc-400 mb-12">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          All Systems Operational
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800">
          <div className="text-zinc-400 text-sm">
            © 2024 All rights reserved.
          </div>
          <Link 
            href="https://framer.com"
            className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            Powered by
            <span className="font-medium">Framer</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
