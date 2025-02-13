'use client';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="relative group">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      
      {/* Card border with gradient */}
      <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-white/[0.12] to-transparent" />
      
      {/* Card content */}
      <div className="relative p-8 rounded-2xl bg-[#18181B]/80 border border-white/[0.08] backdrop-blur-sm space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#18181B] border border-white/[0.08] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-5xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
      {value}
    </div>
    <div className="mt-1 text-sm text-zinc-400">{label}</div>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Increased Efficiency',
      description: 'Streamline processes to save time and resources.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M7 8h10M7 12h10M7 16h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Enhanced Collaboration',
      description: 'Foster teamwork with seamless communication tools.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Custom Workflows',
      description: "Tailor workflows to fit your team's unique needs.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Real-Time Insights',
      description: 'Access live data to make informed decisions.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M9 11H7a4 4 0 100 8h10a4 4 0 000-8h-1M9 11V9a3 3 0 016 0v2M9 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Task Accountability',
      description: 'Assign tasks clearly to ensure ownership and responsibility.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Flexible Integration',
      description: 'Connect with existing tools for a unified experience.',
    },
  ];

  const stats = [
    { value: '76%', label: 'Pro Users' },
    { value: '12M+', label: 'Tasks Organized' },
    { value: '600+', label: 'Team Members' },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400">👋</span>
            <span className="text-zinc-400 text-sm">Benefits</span>
          </div>
          
          <h2 className="text-5xl font-semibold tracking-tight">
            Unlock Your Team's Potential
          </h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Maximize efficiency, enhance collaboration, and achieve project goals with
            spAIce's powerful management tools.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
