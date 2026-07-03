import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, Volume2, VolumeX, SkipForward, Play, Pause, Music } from 'lucide-react';

interface FloatingControlsProps {
  musicPlaying: boolean;
  onMusicToggle: (playing: boolean) => void;
}

export default function FloatingControls({ musicPlaying, onMusicToggle }: FloatingControlsProps) {
  const [showScroll, setShowScroll] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Playable lo-fi African Afrobeat ambient music loops
  const playlist = [
    {
      title: 'Harare Gardens Sunset Beats',
      author: 'Pakona Chill Out',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // public test loops
    },
    {
      title: 'Kona Wok Sizzle Groove',
      author: 'Afro-Lofi Collective',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      title: 'Theatre in the Park Live Guitar',
      author: 'Local Acoustic Jam',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ];

  useEffect(() => {
    // Scroll threshold to show Scroll-to-Top
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Audio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(playlist[activeTrack].url);
      audioRef.current.loop = true;
    } else {
      // If track changes
      const wasPlaying = musicPlaying;
      audioRef.current.pause();
      audioRef.current = new Audio(playlist[activeTrack].url);
      audioRef.current.loop = true;
      if (wasPlaying) {
        audioRef.current.play().catch(() => {
          onMusicToggle(false);
        });
      }
    }
  }, [activeTrack]);

  // Sync state with HTML5 audio
  useEffect(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.play().catch(() => {
          // Fallback if browser blocks
          onMusicToggle(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  const handleNextTrack = () => {
    setActiveTrack((prev) => (prev + 1) % playlist.length);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        
        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              key="scroll-top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollTop}
              className="p-3 bg-brand-black hover:bg-brand-yellow hover:text-brand-black text-white rounded-full shadow-lg border border-white/10 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Chat button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/263778140407?text=Hi%20Pakona!%20I'm%20visiting%20your%20website%20and%20I'd%20like%20to%20order%20some%20street%20food!%20🍔"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-brand-success hover:bg-[#2b8a3e] text-white rounded-full shadow-2xl flex items-center justify-center glow-yellow border border-white/15 relative group"
          aria-label="Chat on WhatsApp"
        >
          {/* Badge indicator */}
          <span className="absolute -top-1 -left-1 bg-brand-yellow w-3.5 h-3.5 rounded-full border-2 border-brand-success flex items-center justify-center animate-ping" />
          <MessageSquare size={18} fill="currentColor" />
          
          {/* Tooltip on Hover */}
          <span className="absolute right-14 bg-brand-black text-white text-[10px] font-space font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            WhatsApp Order Line
          </span>
        </motion.a>
      </div>

      {/* Ambient Lo-fi Music Player Panel (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          
          {/* Small Trigger button */}
          <button
            onClick={() => setShowPlayer(!showPlayer)}
            className={`p-3.5 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-300 ${
              musicPlaying
                ? 'bg-brand-yellow text-brand-black border-brand-yellow glow-yellow'
                : 'bg-brand-black border-white/10 text-white hover:text-brand-yellow'
            }`}
          >
            {musicPlaying ? (
              <div className="flex gap-0.5 items-end justify-center w-4 h-4">
                <span className="w-0.5 h-2.5 bg-brand-black rounded-full animate-pulse" />
                <span className="w-0.5 h-4 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                <span className="w-0.5 h-2 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                <span className="w-0.5 h-3.5 bg-brand-black rounded-full animate-pulse" style={{ animationDelay: '0.45s' }} />
              </div>
            ) : (
              <Music size={16} />
            )}
          </button>

          {/* Expanded Player Box overlay */}
          <AnimatePresence>
            {showPlayer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                className="absolute bottom-16 left-0 w-72 glass dark:dark-glass border border-black/5 dark:border-white/15 rounded-[2rem] p-5 shadow-2xl text-left text-brand-black dark:text-white transition-all duration-500"
              >
                {/* Header title */}
                <div className="flex items-center gap-2 border-b border-black/10 dark:border-white/10 pb-2 mb-3">
                  <Music className="text-brand-yellow animate-spin-slow" size={14} />
                  <div>
                    <h5 className="font-bebas text-sm tracking-widest text-brand-black dark:text-white leading-none">PAKONA GARDEN LOFI</h5>
                    <span className="font-mono text-[8px] text-gray-500 uppercase">Interactive Player</span>
                  </div>
                </div>

                {/* Song title */}
                <div className="mb-4">
                  <p className="font-space font-bold text-xs text-brand-yellow truncate uppercase tracking-wide">
                    {playlist[activeTrack].title}
                  </p>
                  <p className="font-sans text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {playlist[activeTrack].author}
                  </p>
                </div>

                {/* Player Controls Bar */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onMusicToggle(!musicPlaying)}
                    className="p-2 bg-brand-yellow text-brand-black rounded-xl hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                  >
                    {musicPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
                  </button>

                  {/* Equalizer lines decoration */}
                  <div className="flex gap-0.5 items-end justify-center h-4 mx-3 flex-grow">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((line, i) => (
                      <span 
                        key={i} 
                        className={`w-0.5 rounded-full bg-brand-yellow transition-all ${
                          musicPlaying ? 'animate-bounce' : 'h-1'
                        }`}
                        style={{ 
                          height: musicPlaying ? `${Math.floor(Math.random() * 14) + 4}px` : '4px',
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '0.8s'
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextTrack}
                    className="p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 text-brand-black dark:text-white rounded-xl hover:text-brand-yellow transition-colors cursor-pointer"
                    aria-label="Next track"
                  >
                    <SkipForward size={14} />
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">
                    Track {activeTrack + 1} of {playlist.length} • Ambient Play
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}
