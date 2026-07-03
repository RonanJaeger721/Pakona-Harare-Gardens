import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Compass, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import PakonaLogo from './PakonaLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 2500);
    }
  };

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-light dark:bg-brand-black text-brand-black dark:text-white pt-20 pb-8 relative overflow-hidden concrete-grid dark:concrete-grid-dark border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      {/* Decorative logo glow overlay */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-black/5 dark:border-white/10 text-left">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <PakonaLogo size={48} animated={false} className="text-brand-yellow" />
              <div className="flex flex-col">
                <span className="font-bebas text-3xl tracking-[0.2em] text-brand-black dark:text-white leading-none transition-colors">PAKONA</span>
                <span className="font-mono text-[8px] tracking-widest text-brand-yellow uppercase mt-1">Harare Gardens</span>
              </div>
            </div>

            <p className="font-sans text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm transition-colors">
               Providing Good Food for the People. Harare’s favorite street food and creative lifestyle hub, nestled inside Theatre in the Park at Harare Gardens.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-gray-500 dark:text-gray-300 rounded-xl border border-black/5 dark:border-white/5 transition-all">
                <Instagram size={15} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-gray-500 dark:text-gray-300 rounded-xl border border-black/5 dark:border-white/5 transition-all font-bold text-xs w-[32px] h-[32px] flex items-center justify-center">
                ♩
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-gray-500 dark:text-gray-300 rounded-xl border border-black/5 dark:border-white/5 transition-all">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-bebas text-lg tracking-wider text-brand-black dark:text-white uppercase border-b border-black/5 dark:border-white/10 pb-2 transition-colors">THE DESTINATION</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home Hub', target: '#home' },
                { name: 'Our Philosophy', target: '#about' },
                { name: 'Street Food Menu', target: '#menu' },
                { name: 'Vibe Gallery', target: '#gallery' },
                { name: 'Events Calendar', target: '#events' },
                { name: 'Burger Challenge', target: '#challenge' },
                { name: 'Google Reviews', target: '#reviews' },
                { name: 'Visit & Hours', target: '#visit' }
              ].map((lnk) => (
                <li key={lnk.name}>
                  <button
                    onClick={() => handleScrollTo(lnk.target)}
                    className="font-space text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-brand-yellow transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Compass size={10} />
                    <span>{lnk.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter Signups */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-bebas text-lg tracking-wider text-brand-black dark:text-white uppercase border-b border-black/5 dark:border-white/10 pb-2 transition-colors">JOIN THE KONA CLUB</h4>
            <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-normal mb-1 transition-colors">
              Subscribe to get notified about upcoming live bands, secret off-menu burgers, and major food challenges first!
            </p>

            {subscribed ? (
              <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl">
                <p className="font-space text-xs text-brand-yellow uppercase tracking-wider font-bold">🎉 Welcome to the Club!</p>
                <p className="font-sans text-[11px] text-gray-600 dark:text-gray-300 mt-1 transition-colors">We’ll keep your inbox juicy. No spam, ever.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none pr-12 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-yellow text-brand-black hover:bg-brand-orange hover:text-white rounded-lg transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send size={12} />
                </button>
              </form>
            )}

            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">
              💡 Zero spam • Unsubscribe anytime with one tap
            </span>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              © {currentYear} PAKONA. All rights reserved.
            </span>
            <span className="hidden sm:inline text-black/15 dark:text-white/20">|</span>
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              Accidentally You'll Love It Here
            </span>
          </div>

          <div className="font-mono text-[9px] text-brand-yellow uppercase tracking-widest">
            Made with Passion • Harare, Zimbabwe
          </div>
        </div>

      </div>
    </footer>
  );
}
