'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Icons
const CashIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const TrendUpIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const TargetIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const ShareIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export default function GoalPage() {
  const [pagesCount, setPagesCount] = useState(5);
  const [understoodSteps, setUnderstoodSteps] = useState<number[]>([]);

  const steps = [
    {
      num: 1,
      title: 'Build a Page',
      description: 'Use our AI to create a high-converting profit page in just 2 minutes',
      icon: TargetIcon,
      action: '/app/build',
      actionText: 'Build Now',
    },
    {
      num: 2,
      title: 'Share on Social',
      description: 'Post your page link on Facebook, TikTok, WhatsApp, and more',
      icon: ShareIcon,
      action: '/app/traffic',
      actionText: 'Get Captions',
    },
    {
      num: 3,
      title: 'Earn Commissions',
      description: 'Get paid when people buy through your affiliate link',
      icon: CashIcon,
      action: null,
      actionText: '💰',
    },
  ];

  const features = [
    'No website needed',
    'No inventory required',
    'No tech skills necessary',
    'Works from anywhere',
    'Start in under 10 minutes',
    'Free traffic methods',
  ];

  const toggleUnderstood = (stepNum: number) => {
    setUnderstoodSteps(prev => 
      prev.includes(stepNum) 
        ? prev.filter(n => n !== stepNum)
        : [...prev, stepNum]
    );
  };

  // Calculate estimated earnings based on slider
  const estimatedEarnings = Math.round(pagesCount * 47 * 4); // $47 avg commission * 4 sales per page per month
  const estimatedMin = Math.round(estimatedEarnings * 0.5);
  const estimatedMax = Math.round(estimatedEarnings * 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-base font-bold mb-6">
          <TargetIcon />
          <span>Set Your Goal</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          How Much Do You Want to <span className="text-cash-green">Earn?</span>
        </h1>
        <p className="text-navy-300 text-xl">
          Set your income goal and we&apos;ll show you exactly how to achieve it with our proven system
        </p>
      </div>

      {/* Goal Calculator - Primary Focus */}
      <div className="glass-card rounded-3xl p-8 border-2 border-teal-500/30 bg-gradient-to-br from-teal-500/5 to-transparent">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            🎯 Your Income Goal
          </h2>
          <p className="text-navy-300">
            Adjust the slider to set your monthly income goal
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between mb-3">
              <span className="text-navy-400 text-lg">Monthly Target</span>
              <span className="text-teal-400 font-bold text-3xl">${estimatedEarnings.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pagesCount}
              onChange={(e) => setPagesCount(parseInt(e.target.value))}
              className="w-full h-4 bg-navy-800 rounded-full appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-sm text-navy-500 mt-2">
              <span>$188/mo</span>
              <span>$3,760/mo</span>
            </div>
          </div>

          <div className="bg-navy-800/50 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4 text-center">To reach ${estimatedEarnings.toLocaleString()}/month, you need:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                <p className="text-3xl font-bold text-teal-400">{pagesCount}</p>
                <p className="text-sm text-navy-400">Profit Pages</p>
              </div>
              <div className="p-4 bg-gold-500/10 rounded-xl border border-gold-500/20">
                <p className="text-3xl font-bold text-gold-400">{pagesCount * 4}</p>
                <p className="text-sm text-navy-400">Sales/Month</p>
              </div>
              <div className="p-4 bg-cash-green/10 rounded-xl border border-cash-green/20">
                <p className="text-3xl font-bold text-cash-green">$47</p>
                <p className="text-sm text-navy-400">Avg Commission</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-navy-500">
            *Based on average $47 commission and typical 4 sales per page per month
          </p>
        </div>
      </div>

      {/* Interactive Steps */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          📋 Your Action Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isUnderstood = understoodSteps.includes(step.num);
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card rounded-3xl p-8 relative overflow-hidden transition-all ${
                  isUnderstood ? 'border-2 border-cash-green/30' : ''
                }`}
              >
                <div className="absolute top-4 right-4 text-7xl font-display font-bold text-navy-800/50">
                  {step.num}
                </div>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isUnderstood 
                      ? 'bg-cash-green/20 text-cash-green' 
                      : 'bg-teal-500/10 text-teal-400'
                  }`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy-300 text-lg mb-6">
                    {step.description}
                  </p>
                  
                  {/* Action button */}
                  {step.action && (
                    <Link 
                      href={step.action}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 rounded-xl font-medium transition-all mb-4"
                    >
                      <span>{step.actionText}</span>
                      <ArrowRightIcon />
                    </Link>
                  )}
                  
                  {!step.action && (
                    <div className="text-4xl mb-4">{step.actionText}</div>
                  )}
                  
                  {/* Understood checkbox */}
                  <button
                    onClick={() => toggleUnderstood(step.num)}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all ${
                      isUnderstood 
                        ? 'bg-cash-green/10 text-cash-green' 
                        : 'bg-navy-800/50 text-navy-400 hover:bg-navy-800'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isUnderstood ? 'bg-cash-green text-white' : 'border-2 border-navy-600'
                    }`}>
                      {isUnderstood && <CheckIcon />}
                    </div>
                    <span className="font-medium">{isUnderstood ? 'Got it!' : 'I understand'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="text-center">
        <p className="text-navy-400 mb-2">Your understanding progress</p>
        <div className="flex justify-center gap-2">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`w-16 h-2 rounded-full transition-all ${
                understoodSteps.includes(step.num) ? 'bg-cash-green' : 'bg-navy-700'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-navy-500 mt-2">
          {understoodSteps.length === 3 ? '🎉 You got it! Ready to start!' : `${understoodSteps.length}/3 steps understood`}
        </p>
      </div>

      {/* Features */}
      <div className="glass-card rounded-3xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              Why You Can Achieve This
            </h2>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-cash-green/20 rounded-full flex items-center justify-center text-cash-green flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 border-teal-500/20 border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-navy-400">Time to First Sale</p>
                  <p className="text-3xl font-bold text-white">24-48 Hours</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border-cash-green/20 border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-cash-green/10 rounded-xl flex items-center justify-center text-cash-green">
                  <TrendUpIcon />
                </div>
                <div>
                  <p className="text-navy-400">Average Commission</p>
                  <p className="text-3xl font-bold text-white">$47 - $127</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/app/build"
          className="inline-flex items-center gap-4 bg-gradient-to-r from-teal-400 to-teal-500 text-navy-950 font-bold text-xl px-10 py-5 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <PlayIcon />
          <span>Start Working Towards Your Goal</span>
          <ArrowRightIcon />
        </Link>
        <p className="mt-4 text-navy-400">
          🎯 Create {pagesCount} pages to reach ${estimatedEarnings.toLocaleString()}/month
        </p>
      </div>
    </motion.div>
  );
}
