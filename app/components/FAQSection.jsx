'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left rounded-2xl bg-[#18181B]/60 border border-white/[0.08] hover:bg-[#18181B]/80 transition-colors duration-200 group"
      >
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium text-white">{question}</span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-white/10' : 'bg-white/5 group-hover:bg-white/10'}`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
            >
              <path
                d="M6 1v10M1 6h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-[15px] leading-relaxed text-zinc-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: 'What is Suprema?',
      answer: 'Suprema is a comprehensive project management platform designed to streamline workflows, enhance team collaboration, and boost productivity through intelligent task management and real-time analytics.',
    },
    {
      question: 'How secure is my data?',
      answer: 'Suprema prioritizes data security by utilizing encryption, regular backups, and compliance with industry standards to protect sensitive information and maintain user privacy.',
    },
    {
      question: 'How does task assigning work?',
      answer: 'Our intelligent task assignment system analyzes project requirements, team member skills, and workload to automatically suggest the most suitable assignee. You can also manually assign tasks with our intuitive interface.',
    },
    {
      question: 'Can I customize my dashboard?',
      answer: 'Yes, Suprema offers extensive dashboard customization options. You can arrange widgets, create custom views, and configure displays to match your specific workflow needs.',
    },
    {
      question: 'Is there mobile access?',
      answer: 'Yes, Suprema is fully accessible through our mobile apps for iOS and Android, allowing you to manage projects and collaborate with your team on the go.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to assist you.',
    },
    {
      question: 'Can I integrate with other tools?',
      answer: 'Yes, Suprema integrates seamlessly with popular tools and platforms, allowing you to connect your existing workflow and maintain a unified experience.',
    },
    {
      question: 'What pricing plans are available?',
      answer: 'We offer flexible pricing plans tailored to different team sizes and needs, including startup, professional, and enterprise tiers. Contact us for custom pricing.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial with full access to all features, allowing you to experience Supremas capabilities firsthand.',
    },
    {
      question: 'How do I provide feedback?',
      answer: 'You can submit feedback directly through our platform using the feedback form in your dashboard, or contact our support team via email.',
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10">
              <span className="text-amber-400 text-xs">?</span>
            </span>
            <span className="text-zinc-400 text-sm">FAQ's</span>
          </div>
          
          <h2 className="text-5xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
