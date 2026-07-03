import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, Tag, Compass, Sparkles, AlertCircle } from 'lucide-react';
import { EventItem } from '../types';

interface EventsCalendarProps {
  onReserveTable: () => void;
}

export default function EventsCalendar({ onReserveTable }: EventsCalendarProps) {
  const [activeTag, setActiveTag] = useState<string>('all');

  const events: EventItem[] = [
    {
      id: '1',
      title: 'Acoustic Guitar Garden Sessions',
      date: 'Sat, July 11, 2026',
      time: '4:00 PM - 7:00 PM',
      description: 'Harare’s finest acoustic soloists join us under the canopy for unplugged, soulful Afro-soul. Snag a bench early, grab a burger, and unwind.',
      tag: 'Live Music',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400'
    },
    {
      id: '2',
      title: 'Afrobeats & Amapiano DJ Sets',
      date: 'Fri, July 17, 2026',
      time: '5:00 PM - 10:00 PM',
      description: 'Kickstart your weekend with deep grooving house, Afrobeats, and Amapiano loops spun by Harare’s premier club tastemakers.',
      tag: 'Dj Set',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400'
    },
    {
      id: '3',
      title: 'The Monthly Giant Burger Showdown',
      date: 'Sat, July 25, 2026',
      time: '12:00 PM - 3:00 PM',
      description: 'Watch the contenders face off against the 15-minute clock to finish the legendary Pakona Giant Burger platter, or step up to the plate yourself!',
      tag: 'Food Challenge',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=400'
    },
    {
      id: '4',
      title: 'Harare Creators Roundtable & Tea',
      date: 'Wed, August 5, 2026',
      time: '2:00 PM - 5:00 PM',
      description: 'A relaxed networking meetup for Harare’s visual storytellers, TikTok developers, food bloggers, and writers. Share project concepts over lychee mocktails.',
      tag: 'Creative Meet',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400'
    }
  ];

  const tags = [
    { id: 'all', label: 'All Calendar Slots' },
    { id: 'Live Music', label: 'Live Beats' },
    { id: 'Dj Set', label: 'DJ Sets' },
    { id: 'Food Challenge', label: 'Challenges' },
    { id: 'Creative Meet', label: 'Creatives Meet' }
  ];

  const filteredEvents = events.filter(
    (item) => activeTag === 'all' || item.tag === activeTag
  );

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#F5B400] glass dark:dark-glass border border-white/20 px-4 py-1.5 rounded-full">
            UPCOMING HAPPENINGS
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-brand-black dark:text-white tracking-tight mt-4">
            PAKONA <span className="text-[#F5B400]">LIVE EVENTS</span>
          </h2>
          <p className="font-space text-xs sm:text-sm text-gray-500 max-w-sm mx-auto uppercase mt-2 tracking-widest">
            More than just dining. Experience culture, music, and local art in the park.
          </p>
        </div>

        {/* Filters Tabs row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 select-none">
          {tags.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTag(t.id)}
              className={`px-5 py-2.5 text-xs font-space font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeTag === t.id
                  ? 'bg-[#F5B400] text-black neon-glow font-extrabold'
                  : 'glass dark:dark-glass text-brand-black dark:text-white border border-black/10 dark:border-white/10 hover:border-[#F5B400] hover:text-[#F5B400]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Dynamic Events Cards stack */}
        <motion.div layout className="space-y-6 max-w-5xl mx-auto text-left">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((ev, idx) => (
              <motion.div
                layout
                key={ev.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass dark:dark-glass rounded-3xl overflow-hidden border border-black/5 dark:border-white/20 p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-center shadow-sm hover:border-[#F5B400] transition-all duration-500 relative group"
              >
                {/* Event Image Column */}
                <div className="w-full md:w-48 lg:w-56 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-black/10 dark:border-white/10 relative">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-black/80 backdrop-blur-md text-[#F5B400] font-space text-[8px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                    {ev.tag}
                  </div>
                </div>

                {/* Event text details Column */}
                <div className="flex-grow space-y-3.5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-[#F5B400] font-space text-xs font-bold uppercase tracking-wider">
                      <Calendar size={13} />
                      <span>{ev.date}</span>
                    </div>

                    <span className="hidden sm:inline text-gray-300 dark:text-white/20">|</span>

                    {/* Time */}
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 font-mono text-xs">
                      <Clock size={13} />
                      <span>{ev.time}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-2xl sm:text-3xl text-brand-black dark:text-white tracking-wide uppercase leading-none mt-1 group-hover:text-[#F5B400] transition-colors">
                    {ev.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    {ev.description}
                  </p>

                  {/* Map Pin Location Context */}
                  <p className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={11} /> Venue: Inside Theatre in the Park Garden Courtyard
                  </p>
                </div>

                {/* Reservation Action Column */}
                <div className="w-full md:w-auto md:shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-black/5 dark:border-white/5 flex items-center justify-center md:pl-4">
                  <button
                    onClick={onReserveTable}
                    className="w-full md:w-auto px-6 py-3.5 bg-black dark:bg-white/10 hover:bg-[#F5B400] text-white hover:text-black rounded-full font-space text-xs font-bold uppercase tracking-wider transition-all border border-black/10 dark:border-white/20 hover:border-[#F5B400] whitespace-nowrap font-extrabold"
                  >
                    Reserve Bench
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state calendar helper */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12 flex flex-col items-center gap-3">
            <AlertCircle className="text-gray-400 animate-pulse" size={24} />
            <p className="font-space text-xs text-gray-500 uppercase tracking-widest">No scheduled slot matches this category.</p>
          </div>
        )}

        {/* General safety banner */}
        <div className="mt-16 glass dark:dark-glass border border-black/5 dark:border-white/20 p-6 rounded-3xl max-w-3xl mx-auto text-left flex flex-col sm:flex-row gap-4 items-center transition-all duration-500">
          <div className="p-3 bg-[#F5B400]/10 rounded-2xl text-[#F5B400] shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="font-bebas text-lg tracking-wide uppercase text-brand-black dark:text-white leading-none mb-1">
              GARDEN ENTRY IS 100% FREE
            </h4>
            <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-normal">
              Theatre in the Park is a public, beautifully secured park ecosystem. There are no cover charges or hidden gate fees to visit Pakona. Simply come right in, relax, and grab a bite!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
