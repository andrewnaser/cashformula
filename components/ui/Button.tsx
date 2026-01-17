'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, children, disabled, style, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-3 font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none overflow-hidden';

    const variants = {
      primary: `
        bg-gradient-to-r from-purple-neon to-pink-neon text-white rounded-2xl
        shadow-[0_4px_20px_rgba(168,85,247,0.4),0_0_40px_rgba(168,85,247,0.2),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:shadow-[0_8px_32px_rgba(168,85,247,0.5),0_0_60px_rgba(168,85,247,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]
        hover:-translate-y-0.5
        active:scale-95
        focus:ring-4 focus:ring-purple-neon/30
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-bright before:to-pink-bright before:opacity-0 before:transition-opacity hover:before:opacity-100
      `,
      secondary: `
        bg-gradient-to-r from-teal-neon to-cash-green text-white rounded-2xl
        shadow-[0_4px_20px_rgba(6,182,212,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]
        hover:shadow-[0_8px_32px_rgba(6,182,212,0.5)]
        hover:-translate-y-0.5
        active:scale-95
        focus:ring-4 focus:ring-teal-neon/30
      `,
      ghost: `
        bg-white/5 text-white rounded-2xl border border-white/10
        hover:bg-white/10 hover:border-white/20
        active:scale-95
        focus:ring-4 focus:ring-white/20
      `,
      outline: `
        bg-purple-neon/5 text-purple-neon rounded-2xl border-2 border-purple-neon/40
        shadow-[0_0_20px_rgba(168,85,247,0.1)]
        hover:bg-purple-neon/15 hover:border-purple-neon hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]
        hover:-translate-y-0.5
        active:scale-95
        focus:ring-4 focus:ring-purple-neon/20
      `,
      danger: `
        bg-gradient-to-r from-red-500 to-pink-neon text-white rounded-2xl
        shadow-[0_4px_20px_rgba(220,38,38,0.4)]
        hover:shadow-[0_8px_32px_rgba(220,38,38,0.5)]
        hover:-translate-y-0.5
        active:scale-95
        focus:ring-4 focus:ring-red-500/30
      `,
    };

    const sizes = {
      sm: 'px-6 py-3 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        style={style}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3">
          {isLoading && (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// Motion button variant for animated buttons
export const MotionButton = motion(Button);
