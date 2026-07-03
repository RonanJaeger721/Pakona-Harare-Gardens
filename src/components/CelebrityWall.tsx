import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Users, Flame } from 'lucide-react';

interface Celebrity {
  id: string;
  name: string;
  handle: string;
  role: string;
  comment: string;
  image: string;
}

export default function CelebrityWall() {
  const celebs: Celebrity[] = [
    {
      id: '1',
      name: 'Enzo Ishall',
      handle: '@enzoishall',
      role: 'Zimdancehall Hitmaker',
      comment: 'The Abang Burger is literally a national treasure. Best hangout in Harare, hands down!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
    },
    {
      id: '2',
      name: 'Kudzai "ZimFoodie"',
      handle: '@harare_eats',
      role: 'Professional Food Blogger',
      comment: 'Pineapple Fried Rice inside a real pineapple had me feeling like I was in Zanzibar. High art!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
    },
    {
      id: '3',
      name: 'Ruvimbo Chipo',
      handle: '@ruvimbo_chipo',
      role: 'TikTok Lifestyle Creator',
      comment: 'Cozy container vibes, friendly staff, and the chocolate milkshakes are perfect for my daily vlogs.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
    },
    {
      id: '4',
      name: 'Tarisai "ZimVibe"',
      handle: '@tarisai_vibe',
      role: 'Afrobeats DJ & Creator',
      comment: 'Live music acoustic nights inside Harare Gardens are unmatched. This is where everyone meets.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200'
    }
  ];

  return (
    <section className="py-24 bg-brand-light dark:bg-brand-black text-brand-black dark:text-white relative overflow-hidden border-t border-b border-black/5 dark:border-white/5 transition-colors duration-500 concrete-grid dark:concrete-grid-dark">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        {/* Header Block */}
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/10 text-brand-yellow text-xs font-mono tracking-widest uppercase rounded-full mb-4 w-fit border border-[#F5B400]/25">
            <Flame size={12} className="animate-pulse" />
            <span>SEEN AT PAKONA</span>
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none text-brand-black dark:text-white mb-4 transition-colors duration-500">
            THE CELEBRITY <span className="text-brand-yellow">WALL</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto uppercase tracking-wider transition-colors duration-500">
            "From musicians to creators, Pakona has become one of Harare's favourite places to eat, meet, and create memories."
          </p>
        </div>
      </div>

      {/* Marquee Scrolling Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Masking gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-light dark:from-brand-black to-transparent z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-light dark:from-brand-black to-transparent z-10 pointer-events-none transition-colors duration-500" />

        {/* Endless scrolling row */}
        <div className="flex w-max gap-6 animate-marquee">
          {/* Double array for seamless loop */}
          {[...celebs, ...celebs].map((celeb, idx) => (
            <motion.div
              key={`${celeb.id}-${idx}`}
              whileHover={{ y: -6, borderColor: 'var(--color-brand-yellow)' }}
              className="w-80 p-6 glass dark:dark-glass border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between text-left transition-all duration-500 relative select-none shadow-md"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/15 bg-gray-200 dark:bg-gray-800">
                    <img
                      src={celeb.image}
                      alt={celeb.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-xs text-brand-black dark:text-white uppercase tracking-wider transition-colors duration-500">{celeb.name}</h4>
                    <span className="font-mono text-[9px] text-brand-yellow block mt-0.5">{celeb.handle}</span>
                  </div>
                </div>
                <div className="flex text-brand-yellow">
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                  <Star size={10} fill="currentColor" />
                </div>
              </div>

              <p className="font-sans text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic mb-4 transition-colors duration-500">
                "{celeb.comment}"
              </p>

              <div className="border-t border-black/10 dark:border-white/10 pt-3 flex items-center justify-between">
                <span className="font-space text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold transition-colors duration-500">
                  {celeb.role}
                </span>
                <span className="p-1 bg-brand-yellow/10 rounded-md text-brand-yellow">
                  <Award size={10} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
