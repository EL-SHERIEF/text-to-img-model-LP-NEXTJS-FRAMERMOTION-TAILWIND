'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FeatureCard = ({ title, description, image, align = 'left' }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center']
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [align === 'left' ? -50 : 50, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex items-center gap-8 ${
        align === 'right' ? 'flex-row-reverse' : ''
      }`}
      style={{ x, opacity }}
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-zinc-800 flex items-center justify-center">
            {title.includes('Smart') && (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 16l4-4m0 0l-4-4m4 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {title.includes('Customizable') && (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {title.includes('Track') && (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {title.includes('Auto') && (
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4V4m4 4V4m-9 3h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50" />
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-75"
          />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Smart Task Assignment',
      description: 'Automatically assign tasks based on project needs and team strengths.',
      image: 'https://picsum.photos/seed/feature1/800/600',
    },
    {
      title: 'Customizable Task Prioritization',
      description: 'Set task priorities to align with your goals and deadlines.',
      image: 'https://picsum.photos/seed/feature2/800/600',
    },
    {
      title: 'Track Progress Seamlessly',
      description: 'Monitor project updates and performance across all your tasks in real-time.',
      image: 'https://picsum.photos/seed/feature3/800/600',
    },
    {
      title: 'Auto-Cleanup of Completed Tasks',
      description: 'Effortlessly remove outdated tasks to keep your workspace organized.',
      image: 'https://picsum.photos/seed/feature4/800/600',
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
