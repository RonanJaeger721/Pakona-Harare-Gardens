import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Clock, Skull, Check, User, Phone, Calendar, Star } from 'lucide-react';
import { LeaderboardEntry } from '../types';

export default function BurgerChallenge() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');

  // Sample leaderboard filled with local legends, influencers, and Harare food bloggers
  const leaderboard: LeaderboardEntry[] = [
    { id: '1', rank: 1, name: 'Enzo Ishall (Artist)', time: '07:42', date: '2026-05-12', burgerCount: 1 },
    { id: '2', rank: 2, name: 'Tinashe (Food Blogger)', time: '08:19', date: '2026-06-01', burgerCount: 1 },
    { id: '3', rank: 3, name: 'Ruvimbo (TikToker)', time: '09:04', date: '2026-06-18', burgerCount: 1 },
    { id: '4', rank: 4, name: 'Kudzai "The Tank"', time: '11:15', date: '2026-06-25', burgerCount: 1 },
    { id: '5', rank: 5, name: 'Chef Zim Blogger', time: '12:30', date: '2026-07-02', burgerCount: 1 }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formPhone && formDate) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowSignUp(false);
        setFormName('');
        setFormPhone('');
        setFormDate('');
      }, 2500);
    }
  };

  return (
    <section id="challenge" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F0F0F] text-white relative overflow-hidden transition-colors duration-500 concrete-grid-dark">
      {/* Background glow flares for industrial grunge style */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Oversized Text and CTA */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/20 text-brand-orange text-xs font-mono tracking-widest uppercase rounded-full mb-6 w-fit border border-brand-orange/30"
            >
              <Skull size={13} className="animate-bounce" />
              <span>ARE YOU READY FOR THE BEAST?</span>
            </motion.div>

            {/* Huge Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none text-white mb-6"
            >
              CAN YOU <span className="text-brand-yellow">FINISH IT</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-space text-lg text-gray-300 max-w-xl mb-8 leading-relaxed"
            >
              Take on Pakona's legendary <span className="text-brand-yellow font-bold">Giant Burger Challenge</span>. 
              A tower of fire-grilled beef patties, layers of melted cheddar, folded farm eggs, secret sauces, and loaded potatoes. 
              Beat the clock, earn your crown, and get your face permanently painted on our wall!
            </motion.p>

            {/* Challenge Rules Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-xl">
              <div className="flex gap-3 items-start p-5 dark-glass rounded-3xl border border-white/5 transition-all duration-500 hover:scale-[1.03] shadow-sm">
                <Clock className="text-brand-yellow mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white leading-none mb-1">15 MINS</h4>
                  <p className="font-sans text-[11px] text-gray-400">Time limit to finish the entire platter</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start p-5 dark-glass rounded-3xl border border-white/5 transition-all duration-500 hover:scale-[1.03] shadow-sm">
                <Trophy className="text-brand-yellow mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white leading-none mb-1">WIN GOLD</h4>
                  <p className="font-sans text-[11px] text-gray-400">Meal is 100% free + exclusive T-shirt</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-5 dark-glass rounded-3xl border border-white/5 transition-all duration-500 hover:scale-[1.03] shadow-sm">
                <Star className="text-brand-yellow mt-1 shrink-0" size={18} />
                <div>
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white leading-none mb-1">WALL OF FAME</h4>
                  <p className="font-sans text-[11px] text-gray-400">Permanent photo spot on our container</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSignUp(true)}
              className="px-8 py-4 bg-[#F5B400] hover:bg-brand-orange text-black font-space text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 w-fit neon-glow"
            >
              Accept The Challenge
            </motion.button>
          </div>

          {/* Right: Wall of Fame Leaderboard */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="dark-glass rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-white/5 relative transition-all duration-500"
            >
              {/* Leaderboard Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                <Trophy className="text-brand-yellow" size={20} />
                <h3 className="font-bebas text-2xl tracking-wider text-white uppercase">WALL OF FAME (TOP TIMES)</h3>
              </div>

              {/* Table list */}
              <div className="space-y-3">
                {leaderboard.map((entry, idx) => (
                  <div
                    key={entry.id}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-500 ${
                      entry.rank === 1
                        ? 'bg-brand-yellow/15 border-brand-yellow/30 text-brand-yellow'
                        : 'bg-white/5 border-white/5 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Rank Indicator */}
                      <span className={`font-space font-extrabold text-sm w-6 h-6 flex items-center justify-center rounded-full ${
                        entry.rank === 1 ? 'bg-brand-yellow text-brand-black' : 'bg-white/10 text-white'
                      }`}>
                        {entry.rank}
                      </span>
                      <span className="font-space font-semibold text-xs text-white">{entry.name}</span>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <span className="font-mono text-xs font-bold block text-white">{entry.time}</span>
                        <span className="font-sans text-[8px] opacity-50 uppercase text-gray-400">{entry.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                  Live updates • Only the brave are listed
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Challenge Signup Popup Modal */}
      <AnimatePresence>
        {showSignUp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSignUp(false)}
              className="fixed inset-0 bg-brand-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass dark:dark-glass border border-black/5 dark:border-white/10 rounded-[2rem] max-w-md w-full p-6 sm:p-8 relative z-10 shadow-2xl text-left text-brand-black dark:text-white transition-all duration-500"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSignUp(false)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white font-bold"
              >
                ✕
              </button>

              <h3 className="font-bebas text-3xl sm:text-4xl text-brand-yellow tracking-wide uppercase mb-2">
                BECOME A LEGEND
              </h3>
              <p className="font-space text-xs text-gray-500 dark:text-gray-300 uppercase tracking-wide mb-6">
                Register below to secure your official slot.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-brand-success/25 border border-brand-success text-brand-success rounded-full flex items-center justify-center animate-pulse">
                    <Check size={32} />
                  </div>
                  <h4 className="font-bebas text-2xl uppercase tracking-wider">CHALLENGE ACCEPTED!</h4>
                  <p className="font-sans text-xs text-gray-400">
                    Our pitmaster will WhatsApp you shortly with slot confirmations. Get hungry!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                      Contender Name
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Tendai Chivandikwa"
                        className="w-full pl-10 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                      WhatsApp Number (for confirmation)
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 077 814 0407"
                        className="w-full pl-10 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Date selection */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="date"
                        required
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Safety Waiver Notice */}
                  <div className="bg-black/5 dark:bg-white/5 p-3.5 rounded-2xl border border-black/5 dark:border-white/5 text-[10px] text-gray-600 dark:text-gray-400 leading-normal mb-2 transition-colors">
                    ⚠️ <strong>Contender Agreement:</strong> I understand that the Pakona Giant Burger is extremely heavy. I acknowledge my mouth is large enough to execute this task safely.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#F5B400] hover:bg-brand-orange text-black font-space font-bold uppercase tracking-wider text-xs rounded-2xl transition-all duration-300 shadow-lg"
                  >
                    Confirm My Challenge Slot
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
