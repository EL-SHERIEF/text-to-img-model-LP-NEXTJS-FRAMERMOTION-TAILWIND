'use client';
import { useState } from 'react';

const StatsCard = ({ value, label }) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 text-center">
    <div className="text-3xl font-semibold text-white mb-2">{value}</div>
    <div className="text-zinc-400 text-sm">{label}</div>
  </div>
);

export default function TrialSection() {
  const [email, setEmail] = useState('');

  const stats = [
    { value: '76%', label: 'Pro Users' },
    { value: '12M+', label: 'Task Organized' },
    { value: '600+', label: 'Team Members' },
    { value: '20+', label: 'Pro Users' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-900/30 backdrop-blur-sm rounded-3xl border border-zinc-800/50 p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 mb-6">
              <span className="text-green-400">⚡</span>
              <span className="text-zinc-300 text-sm">Free Trial</span>
            </div>
            <h2 className="text-4xl font-semibold text-white mb-4">Start your 7-day free trial</h2>
            <p className="text-zinc-400">
              Start your free trial now to experience seamless project management without any commitment!
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </button>
            </div>
          </form>

          {/* Features */}
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Free 7-day trial
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Cancel anytime
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
