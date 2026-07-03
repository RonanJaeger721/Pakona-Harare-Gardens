import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Users, Star, Music, Eye, Heart } from 'lucide-react';

interface StatItemProps {
  label: string;
  endValue: number;
  suffix: string;
  icon: React.ReactNode;
}

function CounterStat({ label, endValue, suffix, icon }: StatItemProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let active = true;
    const duration = 2000; // ms
    const startTime = performance.now();

    const frame = (now: number) => {
      if (!active) return;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrent(Math.floor(easedProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
    return () => {
      active = false;
    };
  }, [endValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass dark:dark-glass border border-black/5 dark:border-white/5 rounded-3xl p-6 md:p-8 flex items-center gap-5 text-left hover:border-brand-yellow hover:shadow-lg transition-all duration-500"
    >
      <div className="p-3.5 rounded-2xl bg-brand-yellow/10 dark:bg-brand-yellow/5 text-brand-yellow shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline gap-0.5">
          <span className="font-bebas text-4xl md:text-5xl tracking-tight text-brand-black dark:text-white leading-none">
            {current === 0 ? '0' : current.toLocaleString()}
          </span>
          <span className="font-bebas text-2xl md:text-3xl text-brand-yellow font-bold leading-none">
            {suffix}
          </span>
        </div>
        <span className="font-space text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest block mt-1 font-semibold">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function CommunityStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <CounterStat
            label="Happy Customers"
            endValue={1000}
            suffix="+"
            icon={<Users size={24} />}
          />

          <CounterStat
            label="Google Rating"
            endValue={5} // We can show 4.6 in rating style
            suffix=".6★"
            icon={<Star size={24} className="fill-current text-brand-yellow" />}
          />

          <CounterStat
            label="TikTok Views"
            endValue={10}
            suffix="K+"
            icon={<Eye size={24} />}
          />

          <CounterStat
            label="Memories Made"
            endValue={9999}
            suffix="+"
            icon={<Heart size={24} className="fill-current text-brand-yellow" />}
          />

        </div>
      </div>
    </section>
  );
}
