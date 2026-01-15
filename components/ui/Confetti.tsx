'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

interface ConfettiProps {
  isActive: boolean;
  duration?: number;
  pieces?: number;
  colors?: string[];
  onComplete?: () => void;
}

const defaultColors = [
  '#fbbf24', // gold
  '#f59e0b', // amber
  '#22c55e', // green
  '#10b981', // emerald
  '#ffffff', // white
  '#a855f7', // purple
  '#ec4899', // pink
];

const goldColors = [
  '#fbbf24',
  '#f59e0b',
  '#fcd34d',
  '#fde68a',
  '#ffffff',
];

const purpleColors = [
  '#a855f7',
  '#9333ea',
  '#c084fc',
  '#d8b4fe',
  '#ffffff',
];

export default function Confetti({
  isActive,
  duration = 3000,
  pieces = 100,
  colors = defaultColors,
  onComplete,
}: ConfettiProps) {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = Array.from({ length: pieces }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
      }));
      setConfettiPieces(newPieces);

      const timer = setTimeout(() => {
        setConfettiPieces([]);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, pieces, colors, duration, onComplete]);

  return (
    <AnimatePresence>
      {confettiPieces.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {confettiPieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: '110vh',
                rotate: piece.rotation + 720,
                opacity: [1, 1, 0.8, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

// Export color presets for easy use
export { defaultColors, goldColors, purpleColors };
