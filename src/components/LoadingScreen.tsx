import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PakonaLogo from './PakonaLogo';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  onMusicToggle: (playing: boolean) => void;
  musicPlaying: boolean;
}

export default function LoadingScreen({
  onComplete,
  onMusicToggle,
  musicPlaying
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Stoking the coals...');

  const loadingPhrases = [
    'Stoking the charcoal...',
    'Grilling the patties...',
    'Hollowing out the pineapples...',
    'Drizzling the special sauce...',
    'Cooking Something Good...'
  ];

  useEffect(() => {
    // Progress increment simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Rotate text based on progress
    if (progress < 25) {
      setLoadingText(loadingPhrases[0]);
    } else if (progress < 50) {
      setLoadingText(loadingPhrases[1]);
    } else if (progress < 75) {
      setLoadingText(loadingPhrases[2]);
    } else if (progress < 90) {
      setLoadingText(loadingPhrases[3]);
    } else {
      setLoadingText(loadingPhrases[4]);
    }
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black text-brand-light concrete-grid-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main logo assembly */}
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          {/* Pulsing halo */}
          <div className="absolute -inset-4 bg-brand-yellow/10 rounded-full blur-xl animate-pulse" />
          <PakonaLogo size={140} animated={true} glow={true} className="text-brand-yellow" />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ letterSpacing: '0.2em', opacity: 0 }}
          animate={{ letterSpacing: '0.4em', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bebas text-5xl md:text-6xl text-white tracking-[0.4em] mr-[-0.4em] mb-2"
        >
          PAKONA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-space text-xs uppercase tracking-widest text-brand-light mb-8"
        >
          Providing Good Food for the People.
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-brand-yellow glow-yellow"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Dynamic Loading Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-space text-xs text-brand-yellow font-medium uppercase tracking-widest min-h-[20px]"
          >
            {loadingText}
          </motion.p>
        </AnimatePresence>

        {/* Optional Music Prompt (Respecting Autoplay) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 z-10"
        >
          <button
            onClick={() => onMusicToggle(!musicPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-space uppercase tracking-wider transition-all duration-300 ${
              musicPlaying
                ? 'bg-brand-yellow text-brand-black border-brand-yellow glow-yellow'
                : 'bg-transparent text-white/50 border-white/20 hover:text-white hover:border-white'
            }`}
          >
            <Music size={14} className={musicPlaying ? 'animate-bounce' : ''} />
            <span>{musicPlaying ? 'Vibe Music On' : 'Activate Vibe Music'}</span>
            {musicPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>
        </motion.div>
      </div>

      {/* Decorative details in screen corners */}
      <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest opacity-30 select-none">
        HARARE, ZIMBABWE • EST. 2024
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest opacity-30 select-none">
        LAT: 17.8252° S • LON: 31.0530° E
      </div>
    </motion.div>
  );
}
