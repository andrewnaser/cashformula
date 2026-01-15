'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  color?: 'cyan' | 'purple' | 'gold' | 'green';
}

const colorClasses = {
  cyan: {
    bg: 'bg-accent-primary/20',
    text: 'text-accent-primary',
    border: 'border-accent-primary/30',
  },
  purple: {
    bg: 'bg-accent-secondary/20',
    text: 'text-accent-secondary',
    border: 'border-accent-secondary/30',
  },
  gold: {
    bg: 'bg-accent-gold/20',
    text: 'text-accent-gold',
    border: 'border-accent-gold/30',
  },
  green: {
    bg: 'bg-accent-success/20',
    text: 'text-accent-success',
    border: 'border-accent-success/30',
  },
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'cyan',
}: StatsCardProps) {
  const colors = colorClasses[color];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass rounded-xl p-5 border ${colors.border} transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              trend.positive
                ? 'bg-accent-success/20 text-accent-success'
                : 'bg-accent-danger/20 text-accent-danger'
            }`}
          >
            {trend.positive ? '+' : ''}{trend.value}
          </span>
        )}
      </div>
      <p className="text-3xl font-display font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-gray-400">{title}</p>
    </motion.div>
  );
}

