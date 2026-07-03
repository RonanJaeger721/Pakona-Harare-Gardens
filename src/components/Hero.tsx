import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Flame, Search, MapPin, Compass, Play, Instagram, Send } from 'lucide-react';
import PakonaLogo from './PakonaLogo';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
  onOrderNow: () => void;
}

export default function Hero({ onExploreMenu, onReserveTable, onOrderNow }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);

  // Cinematic slices mimicking the quick-cut background video of Pakona lifestyle
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1600',
      tagline: 'SIZZLING FLAVOURS ON THE GRILL',
      credit: 'Juicy, artisanal smash burgers'
    },
    {
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1600',
      tagline: 'HARARE GARDENS SUNSET VIBES',
      credit: 'Chill dining under the trees'
    },
    {
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1600',
      tagline: 'ASIAN-INSPIRED STREET SPECTACULAR',
      credit: 'KaBird wok stir-fries & noodles'
    },
    {
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600',
      tagline: 'COMMUNITY, MUSIC & CREATIVES',
      credit: 'Where Harare meets to hang out'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen min-h-[650px] w-full bg-brand-black overflow-hidden flex items-center justify-center">
      {/* Background Slideshow with Ken Burns Zooms */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.55 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        {/* Dark overlay with texture */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/75 z-10" />
        <div className="absolute inset-0 concrete-grid-dark opacity-40 z-10" />
      </div>

      {/* Floating Sparkles & Fire Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/12 w-2 h-2 bg-brand-yellow rounded-full animate-ping opacity-65" />
        <div className="absolute top-1/3 right-1/10 w-3 h-3 bg-brand-orange rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce" />
      </div>

      {/* Hero content grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          
          {/* Left: Text & CTA Buttons */}
          <div className="lg:col-span-7 flex flex-col text-left justify-center">
            {/* Tagline Accent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-yellow text-brand-black font-space text-xs font-bold tracking-widest uppercase rounded-full mb-6 w-fit"
            >
              <Flame size={14} className="animate-pulse" />
              <span>{slides[currentSlide].tagline}</span>
            </motion.div>

            {/* Oversized Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-4"
            >
              WELCOME TO <br />
              <span className="text-brand-yellow relative inline-block">
                PAKONA
                <svg className="absolute left-0 bottom-1 w-full h-3 text-brand-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-space text-xl md:text-2xl text-brand-light/90 max-w-xl leading-relaxed mb-8"
            >
              Harare's Favourite Street Food Spot. <br className="hidden sm:inline" />
              <span className="text-brand-yellow font-medium">Good Food. Good People. Good Vibes.</span>
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 z-20"
            >
              <button
                onClick={onExploreMenu}
                className="px-8 py-4 bg-brand-yellow hover:bg-brand-orange text-brand-black hover:text-white font-space text-sm font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg glow-yellow"
              >
                View Menu
              </button>

              <button
                onClick={onOrderNow}
                className="px-8 py-4 bg-brand-orange hover:bg-brand-yellow text-white hover:text-brand-black font-space text-sm font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Order Online
              </button>

              <button
                onClick={onReserveTable}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-space text-sm font-extrabold uppercase tracking-widest rounded-full transition-all duration-300 border border-white/20 hover:border-white"
              >
                Book A Table
              </button>
            </motion.div>
          </div>

          {/* Right: The Iconic "nice hang out places in harare" Google Search Mockup Card */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full max-w-sm glass-card rounded-[2rem] p-6 shadow-2xl relative border border-white/10 overflow-hidden"
              style={{
                background: 'rgba(24, 24, 24, 0.8)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(245, 180, 0, 0.05)'
              }}
            >
              {/* Highlight flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl" />

              {/* Mockup Top Tab */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  Live Search Insights
                </div>
              </div>

              {/* Google Input box mock */}
              <div className="bg-[#FFF0EB] text-[#111] rounded-full px-4 py-3 flex items-center justify-between mb-4 shadow-inner">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-blue-500 font-bold text-lg font-sans">G</span>
                  <input
                    type="text"
                    readOnly
                    value="nice hang out places in harare"
                    className="bg-transparent border-none text-xs font-space font-medium text-brand-black outline-none w-full"
                  />
                </div>
                <div className="flex items-center gap-2 text-brand-black/60">
                  <Search size={14} />
                  <span className="text-red-500 font-bold">|</span>
                </div>
              </div>

              {/* Google Results List */}
              <div className="space-y-3.5 mb-6">
                {/* Result 1: PAKONA */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-brand-yellow text-brand-black p-3.5 rounded-2xl flex items-center justify-between cursor-pointer border border-brand-yellow/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-brand-black text-brand-yellow rounded-xl">
                      <PakonaLogo size={22} animated={false} />
                    </div>
                    <div>
                      <h4 className="font-space font-bold text-xs uppercase leading-tight">
                        Pakona Street Food Eatery
                      </h4>
                      <p className="font-mono text-[9px] opacity-75 flex items-center gap-1 mt-0.5">
                        <MapPin size={10} /> Street Food : Theatre In The Park
                      </p>
                    </div>
                  </div>
                  <Compass size={14} className="animate-spin-slow" />
                </motion.div>

                {/* Result 2: Theatre In The Park */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/5 hover:bg-white/10 text-white/90 p-3.5 rounded-2xl flex items-center justify-between cursor-pointer border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-orange/20 text-brand-orange rounded-xl">
                      <Play size={10} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="font-space font-medium text-xs uppercase leading-tight">
                        Theatre In The Park
                      </h4>
                      <p className="font-mono text-[9px] opacity-50 mt-0.5">
                        Amphitheatre : Harare Gardens, Harare
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Result 3: Harare Gardens */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="bg-white/5 hover:bg-white/10 text-white/90 p-3.5 rounded-2xl flex items-center justify-between cursor-pointer border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 text-green-400 rounded-xl">
                      <Compass size={10} />
                    </div>
                    <div>
                      <h4 className="font-space font-medium text-xs uppercase leading-tight">
                        Harare Gardens, Park
                      </h4>
                      <p className="font-mono text-[9px] opacity-50 mt-0.5">
                        Central Park : 52W+JVC, Harare
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Handshake Logo & Schedule Footer of mockup */}
              <div className="border-t border-white/10 pt-4 flex flex-col items-center">
                <PakonaLogo size={55} animated={true} className="text-brand-yellow mb-2" />
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">
                  OPEN: 8AM - 5PM DAILY
                </div>
                <div className="text-[9px] font-mono tracking-widest text-brand-yellow uppercase mt-1">
                  Harare Gardens Theater In The Park
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating social links on left margin */}
      <div className="absolute left-6 bottom-10 z-20 hidden md:flex flex-col gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white/70 rounded-full border border-white/10 hover:border-brand-yellow transition-all duration-300">
          <Instagram size={16} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white/70 rounded-full border border-white/10 hover:border-brand-yellow transition-all duration-300 font-bold text-xs flex items-center justify-center w-[38px] h-[38px]">
          ♩
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white/70 rounded-full border border-white/10 hover:border-brand-yellow transition-all duration-300">
          <Send size={16} />
        </a>
        <div className="w-[1px] h-12 bg-white/20 self-center mt-2" />
      </div>

      {/* Slide Index indicator on right margin */}
      <div className="absolute right-6 bottom-10 z-20 hidden md:flex flex-col gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-brand-yellow w-6' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-1 cursor-pointer group"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 group-hover:text-brand-yellow transition-colors">
            Keep Rolling
          </span>
          <ArrowDown size={14} className="text-white/40 group-hover:text-brand-yellow transition-colors" />
        </motion.a>
      </div>
    </section>
  );
}
