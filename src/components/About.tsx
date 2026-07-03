import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, Smile } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black text-brand-black dark:text-white relative overflow-hidden transition-colors duration-500 concrete-grid dark:concrete-grid-dark">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Cinematic collage of street food lifestyle (container restaurant) */}
          <div className="lg:col-span-6 relative">
            <div className="relative grid grid-cols-12 gap-4">
              
              {/* Primary Image: Container cafe & Staff */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-8 overflow-hidden rounded-3xl border-4 border-black/5 dark:border-white/5 shadow-2xl relative group aspect-[3/4]"
              >
                {/* Simulated overlay matching Staff photo */}
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-all duration-500" />
                <img 
                  src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=800" 
                  alt="Pakona Container Eatery and Crew" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-brand-black/80 backdrop-blur-md p-3.5 rounded-2xl border border-black/10 dark:border-white/10">
                  <p className="font-bebas text-lg text-brand-yellow uppercase tracking-wider">THE CONTAINER CREW</p>
                  <p className="font-space text-[10px] text-gray-700 dark:text-gray-300">Providing Good Food for the People Daily</p>
                </div>
              </motion.div>

              {/* Stacked Secondary Image: Sizzling hot dog & Pineapple */}
              <div className="col-span-4 flex flex-col gap-4 justify-between h-full">
                <motion.div 
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="overflow-hidden rounded-3xl border-2 border-black/5 dark:border-white/5 shadow-xl relative group aspect-square"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=400" 
                    alt="Delicious Pakona Hotdog" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="overflow-hidden rounded-3xl border-2 border-black/5 dark:border-white/5 shadow-xl relative group aspect-[4/5] bg-brand-yellow/15"
                >
                  {/* Decorative badge represent the hand icon logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-bebas text-5xl text-brand-yellow tracking-tighter leading-none animate-pulse">
                      EST.<br />24
                    </span>
                    <span className="font-space text-[9px] tracking-widest text-brand-black dark:text-brand-light mt-2 uppercase font-semibold">
                      Harare Gardens
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Leaf overlay resembling Theatre in the Park gardens context */}
              <div className="absolute -top-8 -left-8 text-green-400/20 select-none pointer-events-none animate-pulse">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50,10 C35,25 20,40 20,60 C20,80 35,90 50,90 C65,90 80,80 80,60 C80,40 65,25 50,10 Z M50,25 C60,35 70,48 70,60 C70,72 61,80 50,80 C39,80 30,72 30,60 C30,48 40,35 50,25 Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy and Story */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            
            {/* Tagline label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/10 text-[#F5B400] text-xs font-mono tracking-widest uppercase rounded-full mb-6 w-fit border border-[#F5B400]/25"
            >
              <Compass size={13} className="animate-spin-slow" />
              <span>WHO WE ARE</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight text-brand-black dark:text-white mb-6 leading-none transition-colors duration-500"
            >
              MORE THAN <span className="text-brand-yellow">JUST FOOD</span>.
            </motion.h2>

            {/* Core philosophy quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-space text-lg md:text-xl text-brand-yellow dark:text-brand-yellow/90 mb-8 leading-relaxed max-w-xl border-l-4 border-brand-yellow pl-4 font-medium"
            >
              "Our philosophy is simple. Bring people together over incredible food."
            </motion.p>

            {/* Narrative text */}
            <div className="space-y-6 font-sans text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl transition-colors duration-500">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Hidden inside <strong className="text-brand-black dark:text-white font-space font-semibold">Theatre in the Park at Harare Gardens</strong>, Pakona has blossomed into one of Harare's most beloved street food sanctuaries. We provide high-energy, mouth-watering eats wrapped in an atmosphere of ultimate safety, dynamic music, and genuine warmth.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                From juicy burgers and golden-fried satays to global street food inspired stir-fries, every single item is prepared with extreme passion in an open kitchen where our guests experience every sizzle, aroma, and flare firsthand.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-brand-yellow font-space uppercase tracking-wider font-bold text-xs flex items-center gap-2"
              >
                <Smile size={16} /> Pakona isn't just somewhere you eat. It's somewhere you stay.
              </motion.p>
            </div>

            {/* Quick Specs / Details */}
            <div className="grid grid-cols-2 gap-6 mt-10 border-t border-black/10 dark:border-white/10 pt-8 max-w-xl">
              <div>
                <span className="font-bebas text-3xl text-brand-black dark:text-white tracking-wide transition-colors duration-500">LOCATION</span>
                <p className="font-space text-[10px] text-brand-yellow uppercase tracking-wider mt-1 flex items-center gap-1">
                  <MapPin size={10} /> Harare Gardens Theatre In The Park
                </p>
              </div>
              <div>
                <span className="font-bebas text-3xl text-brand-black dark:text-white tracking-wide transition-colors duration-500">THE BRAND VIBE</span>
                <p className="font-space text-[10px] text-brand-yellow uppercase tracking-wider mt-1 flex items-center gap-1">
                  <Sparkles size={10} /> Street Culture & Minimal Luxury
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
