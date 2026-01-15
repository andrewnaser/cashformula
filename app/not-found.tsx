'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-950 bg-gradient-mesh flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-9xl font-display font-bold text-dark-700 mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button>
              <Home size={18} />
              <span>Go Home</span>
            </Button>
          </Link>
          <Link href="/app">
            <Button variant="secondary">
              <ArrowLeft size={18} />
              <span>Dashboard</span>
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

