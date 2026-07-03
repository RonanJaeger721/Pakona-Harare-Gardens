import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Trees, 
  Music, 
  Utensils, 
  DollarSign, 
  Instagram, 
  Users, 
  Sparkles,
  Award,
  Compass,
  Heart
} from 'lucide-react';

interface WhyCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  size: 'normal' | 'large';
}

export default function WhyPakona() {
  const features: WhyCard[] = [
    {
      title: 'Authentic Street Culture',
      description: 'Harare’s heartbeat lives here. We blend premium hospitality with real African urban street vibes, set inside a customized shipping container hangout.',
      icon: <Flame className="text-brand-yellow" size={24} />,
      tag: 'STREET FOOD',
      size: 'large'
    },
    {
      title: 'Outdoor Garden Sanctuary',
      description: 'Tucked inside Theatre in the Park at Harare Gardens. Dine under the canopy of lush green trees, enjoying the fresh air and beautiful sunset.',
      icon: <Trees className="text-brand-yellow" size={24} />,
      tag: 'OUTDOOR DINING',
      size: 'normal'
    },
    {
      title: 'Live Afro-Acoustic Beats',
      description: 'From local acoustic guitar soloists to late-night DJ vibes, the open gardens regularly stage Harare’s most exciting creative talents.',
      icon: <Music className="text-brand-yellow" size={24} />,
      tag: 'LIVE MUSIC',
      size: 'normal'
    },
    {
      title: 'Open Kitchen Experience',
      description: 'Watch the fire flare, smell the spices toast, and observe every step of your Abang Burger being crafted live by our passionate chefs.',
      icon: <Utensils className="text-brand-yellow" size={24} />,
      tag: 'OPEN KITCHEN',
      size: 'normal'
    },
    {
      title: 'Accidentally You’ll Love It',
      description: 'Our prices are pocket-friendly, offering mouth-watering value so that students, foodies, and families can gather here daily without stress.',
      icon: <DollarSign className="text-brand-yellow" size={24} />,
      tag: 'AFFORDABLE VALUE',
      size: 'large'
    },
    {
      title: 'Instagram & TikTok Worthy',
      description: 'Every plate, from Pineapple Fried Rice in a hollowed-out fruit to the massive loaded hot dogs, is built to steal the show on your feed.',
      icon: <Instagram className="text-brand-yellow" size={24} />,
      tag: 'INSTAGRAM WORTHY',
      size: 'normal'
    },
    {
      title: 'The Harare Youth Hub',
      description: 'More than a restaurant—it’s a sanctuary for musicians, digital creators, content writers, and families to share jokes, network, and grow.',
      icon: <Users className="text-brand-yellow" size={24} />,
      tag: 'CREATIVE COMMUNITY',
      size: 'normal'
    },
    {
      title: 'Asian-Inspired Fusion',
      description: 'Wok-fired noodles, crispy golden arancini balls, satays, and Pattaya egg-wrapped fried rice meet classic African fire-grilled seasoning.',
      icon: <Sparkles className="text-brand-yellow" size={24} />,
      tag: 'GLOBAL FLAVOURS',
      size: 'normal'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      {/* Abstract street-art spray accent */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header with strong visual hierarchy */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-black dark:bg-white/10 text-brand-yellow dark:text-brand-yellow text-xs font-mono tracking-widest uppercase rounded-full mb-4"
          >
            <Award size={12} />
            <span>THE PAKONA PILLARS</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight text-brand-black dark:text-white mb-4"
          >
            WHY PEOPLE LOVE <span className="text-brand-yellow">PAKONA</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-space text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto uppercase tracking-wide"
          >
            Harare’s premier destination where top-tier street eats, creative minds, and absolute comfort collide.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 30px rgba(0,0,0,0.06)',
                borderColor: '#F5B400'
              }}
              className={`flex flex-col justify-between p-8 sm:p-9 rounded-3xl transition-all duration-500 relative overflow-hidden group border ${
                feature.size === 'large' 
                  ? 'md:col-span-2 bg-brand-black dark:bg-brand-dark-card text-white border-white/5' 
                  : 'bg-white/90 dark:bg-brand-dark-card text-brand-black dark:text-white border-black/5 dark:border-white/15'
              }`}
            >
              {/* Corner Tagline Accent */}
              <div className="flex items-center justify-between mb-8 z-10">
                <span className={`font-mono text-[9px] tracking-widest font-bold px-3 py-1 rounded-full uppercase ${
                  feature.size === 'large'
                    ? 'bg-[#F5B400] text-black font-extrabold'
                    : 'bg-black/10 text-brand-black dark:bg-white/10 dark:text-[#F5B400]'
                }`}>
                  {feature.tag}
                </span>
                <div className={`p-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                  feature.size === 'large' ? 'bg-white/5 text-brand-yellow' : 'bg-brand-black/5 text-brand-black dark:bg-white/5 dark:text-white'
                }`}>
                  {feature.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="z-10">
                <h3 className="font-bebas text-2xl md:text-3xl tracking-wide uppercase mb-3 text-current group-hover:text-brand-yellow transition-colors">
                  {feature.title}
                </h3>
                <p className={`font-sans text-xs md:text-sm leading-relaxed ${
                  feature.size === 'large' ? 'text-gray-300 dark:text-gray-300' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Decorative Vector Lines behind card */}
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
