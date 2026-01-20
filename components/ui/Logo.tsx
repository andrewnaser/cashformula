'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 50 },
    md: { width: 180, height: 65 },
    lg: { width: 280, height: 100 },
  };

  const { width, height } = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Cash Formula"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

// Compact logo icon for small spaces
export function LogoIcon({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Cash Formula"
      width={size}
      height={size}
      className={className}
    />
  );
}
