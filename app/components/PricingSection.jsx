'use client';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Free Plan',
    price: '0',
    period: 'per user / month',
    description: 'Free for everyone',
    features: [
      { name: 'Task Management', included: true },
      { name: 'Data Encryption', included: true },
      { name: 'Deadline Alerts', included: true },
      { name: 'Collaboration Tools', included: false },
      { name: 'Task Management', included: false },
      { name: 'Custom Workflows', included: false },
      { name: 'Real-Time Sync', included: false },
    ],
  },
  {
    name: 'Pro Plan',
    price: '12',
    period: 'per user / month',
    description: 'Billed yearly',
    popular: true,
    features: [
      { name: 'Task Management', included: true },
      { name: 'Data Encryption', included: true },
      { name: 'Deadline Alerts', included: true },
      { name: 'Collaboration Tools', included: true },
      { name: 'Task Management', included: true },
      { name: 'Custom Workflows', included: false },
      { name: 'Real-Time Sync', included: false },
    ],
  },
  {
    name: 'Advanced Plan',
    price: '19',
    period: 'per user / month',
    description: 'Billed yearly',
    features: [
      { name: 'Task Management', included: true },
      { name: 'Data Encryption', included: true },
      { name: 'Deadline Alerts', included: true },
      { name: 'Collaboration Tools', included: true },
      { name: 'Task Management', included: true },
      { name: 'Custom Workflows', included: true },
      { name: 'Real-Time Sync', included: true },
    ],
  },
];

const sharedFeatures = [
  { name: 'Access', icon: '🔑' },
  { name: 'Data Security', icon: '🔒' },
  { name: '24/7 Support', icon: '💬' },
  { name: 'Cloud Storage', icon: '☁️' },
  { name: 'User Management', icon: '👥' },
  { name: 'Reports', icon: '📊' },
];

const PricingCard = ({ plan }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800/50 p-6"
  >
    {plan.popular && (
      <div className="mb-4">
        <span className="bg-zinc-800 text-white text-xs px-3 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    <h3 className="text-xl font-medium text-white mb-6">{plan.name}</h3>
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-4xl font-semibold text-white">$</span>
        <span className="text-6xl font-semibold text-white">{plan.price}</span>
      </div>
      <div className="text-zinc-400 text-sm">{plan.period}</div>
    </div>
    <div className="text-zinc-400 mb-2">{plan.description}</div>
    <button className="w-full py-3 px-4 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors mb-6">
      Get Started
    </button>
    <div className="text-xs text-zinc-500 flex items-center gap-2 mb-8">
      <span className="inline-block">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </span>
      Get your free 7-day trial today!
    </div>
    <div className="space-y-4">
      <div className="text-sm text-white font-medium mb-4">What's Included</div>
      {plan.features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-green-500/20 text-green-500' : 'bg-zinc-800 text-zinc-600'}`}>
            {feature.included ? '✓' : '×'}
          </span>
          <span className={feature.included ? 'text-zinc-300' : 'text-zinc-600'}>
            {feature.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 mb-6">
          <span className="text-green-400">💰</span>
          <span className="text-zinc-300 text-sm">Pricing</span>
        </div>
        <h2 className="text-4xl font-semibold text-white mb-4">
          Affordable Pricing Plans
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      <div className="text-center">
        <div className="text-zinc-400 mb-6">All Plans Include</div>
        <div className="flex flex-wrap justify-center gap-6">
          {sharedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-zinc-400"
            >
              <span>{feature.icon}</span>
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
