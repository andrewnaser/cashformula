'use client';

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
    <img
      src="/logo.png"
      alt="Cash Formula"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}

// Compact logo icon for small spaces
export function LogoIcon({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <img
      src="/logo.png"
      alt="Cash Formula"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
