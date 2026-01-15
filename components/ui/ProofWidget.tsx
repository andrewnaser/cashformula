'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, DollarSign, Users, CheckCircle } from 'lucide-react';
import {
  generateRandomEarning,
  proofNames,
  proofProducts,
  getRandomItem,
} from '@/lib/utils';

interface ProofNotification {
  id: string;
  name: string;
  amount: string;
  product: string;
  time: string;
}

const tickerItems = [
  { text: '$147.50 commission just earned', icon: '💰' },
  { text: 'New member from Texas just joined', icon: '🎉' },
  { text: '$297.00 sale confirmed', icon: '✅' },
  { text: 'Premium upgrade completed', icon: '⭐' },
  { text: '$97.00 recurring commission', icon: '💵' },
  { text: 'New review page published', icon: '📄' },
  { text: '$447.00 product sale', icon: '🛒' },
  { text: 'Affiliate bonus unlocked', icon: '🏆' },
];

export default function ProofWidget() {
  const [notifications, setNotifications] = useState<ProofNotification[]>([]);
  const [totalEarnings, setTotalEarnings] = useState(147823.45);

  // Generate new proof notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification: ProofNotification = {
        id: Date.now().toString(),
        name: getRandomItem(proofNames),
        amount: generateRandomEarning(),
        product: getRandomItem(proofProducts),
        time: 'just now',
      };

      setNotifications((prev) => [newNotification, ...prev.slice(0, 4)]);
      setTotalEarnings((prev) => prev + Math.random() * 100 + 20);
    }, 8000);

    // Initial notification
    const initialNotification: ProofNotification = {
      id: 'initial',
      name: getRandomItem(proofNames),
      amount: generateRandomEarning(),
      product: getRandomItem(proofProducts),
      time: '2 min ago',
    };
    setNotifications([initialNotification]);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Earnings Ticker */}
      <div className="glass rounded-xl p-4 overflow-hidden">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent-success/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-accent-success" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Live Earnings</p>
            <motion.p
              key={totalEarnings}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              className="text-2xl font-display font-bold text-white"
            >
              ${totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </motion.p>
          </div>
        </div>

        {/* Animated ticker */}
        <div className="relative overflow-hidden h-8 bg-dark-800 rounded-lg">
          <div className="ticker-content whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 text-sm text-gray-300">
                <span>{item.icon}</span>
                <span>{item.text}</span>
                <span className="text-dark-500">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Proof Cards */}
      <div className="grid gap-4">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-accent-primary" />
          <span className="text-sm font-medium text-gray-300">Recent Success Stories</span>
        </div>

        <AnimatePresence mode="popLayout">
          {notifications.slice(0, 3).map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-4 border border-accent-success/20 bg-gradient-to-r from-dark-800 to-accent-success/5"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-sm font-bold text-dark-950">
                  {notification.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {notification.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    earned{' '}
                    <span className="text-accent-success font-semibold">
                      {notification.amount}
                    </span>{' '}
                    from {notification.product}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-accent-success flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass rounded-xl p-4 text-center">
          <DollarSign className="w-6 h-6 text-accent-gold mx-auto mb-2" />
          <p className="text-2xl font-display font-bold text-white">$2.4M+</p>
          <p className="text-xs text-gray-400">Total Earned</p>
        </div>
        <div className="glass rounded-xl p-4 text-center">
          <Users className="w-6 h-6 text-accent-primary mx-auto mb-2" />
          <p className="text-2xl font-display font-bold text-white">12,847</p>
          <p className="text-xs text-gray-400">Active Members</p>
        </div>
      </div>
    </div>
  );
}

