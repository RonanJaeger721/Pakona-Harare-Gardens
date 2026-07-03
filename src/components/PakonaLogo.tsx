import React from 'react';
import { motion } from 'motion/react';

interface PakonaLogoProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
  glow?: boolean;
}

export default function PakonaLogo({
  className = '',
  size = '100%',
  animated = true,
  glow = false
}: PakonaLogoProps) {
  // SVG drawing representing the iconic Pakona hand sign:
  // An urban line-art style hand with fingers curled, wrist sleeve, and radiating sound/energy waves.
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-all duration-300 ${
          glow ? 'drop-shadow-[0_0_15px_rgba(245,180,0,0.85)]' : ''
        }`}
      >
        {/* Radiating street-art lines (Energy / Vibe waves) */}
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          {/* Wave Top Left */}
          <motion.path 
            d="M 60 40 Q 40 60 30 80" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          {/* Rays above hand */}
          <motion.line 
            x1="80" y1="25" x2="85" y2="40" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.line 
            x1="105" y1="20" x2="105" y2="38" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.line 
            x1="130" y1="25" x2="125" y2="40" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          {/* Rays right of hand */}
          <motion.path 
            d="M 145 42 Q 165 60 175 80" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Waves below hand */}
          <motion.line 
            x1="105" y1="135" x2="105" y2="120" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.line 
            x1="80" y1="130" x2="85" y2="115" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.line 
            x1="130" y1="130" x2="125" y2="115" 
            initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </g>

        {/* Hand Drawing Path */}
        <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Wrist sleeve/cuff */}
          <motion.path 
            d="M 140 105 L 146 112 M 146 112 L 155 105 M 155 105 L 140 105" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Sleeve border */}
          <motion.path 
            d="M 132 100 Q 140 96 150 99 M 132 110 Q 140 108 150 111" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Main Hand Outline: wrist to palm, curl of fingers, thumb */}
          {/* Back of the hand */}
          <motion.path 
            d="M 135 102 C 120 101 105 100 95 98" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          {/* The curled fingers */}
          <motion.path 
            d="M 95 98 C 80 95 65 90 60 78 C 55 68 62 60 72 61 C 82 62 88 72 88 80" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          
          <motion.path 
            d="M 88 80 C 88 70 94 62 102 63 C 110 64 114 74 113 83" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />

          <motion.path 
            d="M 113 83 C 113 74 120 66 128 67 C 135 68 138 78 136 86" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />

          {/* Thumb */}
          <motion.path 
            d="M 95 98 C 96 110 102 118 112 115 C 118 112 120 104 117 96" 
            className={animated ? "draw-path" : ""}
            initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </g>

        {/* Brand highlights (Secondary Color Sparkles/Dots inside the logo area) */}
        <motion.circle 
          cx="105" cy="50" r="3" 
          fill="var(--color-brand-yellow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
        />
        <motion.circle 
          cx="145" cy="70" r="3" 
          fill="var(--color-brand-yellow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: 'spring' }}
        />
        <motion.circle 
          cx="65" cy="95" r="4" 
          fill="var(--color-brand-yellow)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, type: 'spring' }}
        />
      </svg>
    </div>
  );
}
