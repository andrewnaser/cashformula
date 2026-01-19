'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 50 },
    md: { width: 180, height: 65 },
    lg: { width: 280, height: 100 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* CASH text */}
      <text
        x="0"
        y="42"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="48"
        fontWeight="800"
        letterSpacing="-2"
        fill="white"
      >
        CASH
      </text>
      
      {/* Arrow pointing up-right */}
      <g fill="white">
        {/* Main arrow body - triangular shape */}
        <polygon points="155,0 280,0 280,55 220,55 220,20 175,20 175,55 155,55" />
        {/* Arrow tip at top */}
        <polygon points="245,0 280,0 280,8 250,8" />
      </g>
      
      {showText && (
        /* FORMULA text */
        <text
          x="0"
          y="88"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="38"
          fontWeight="800"
          letterSpacing="12"
          fill="white"
        >
          FORMULA
        </text>
      )}
    </svg>
  );
}

// Compact logo icon for small spaces
export function LogoIcon({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="0" y="0" width="40" height="40" rx="8" fill="#10b981" />
      {/* C letter */}
      <text
        x="4"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="white"
      >
        C
      </text>
      {/* Arrow */}
      <polygon
        points="18,8 36,8 36,20 28,20 28,12 22,12 22,32 18,32"
        fill="white"
      />
    </svg>
  );
}
