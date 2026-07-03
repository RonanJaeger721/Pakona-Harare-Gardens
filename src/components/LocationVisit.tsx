import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Landmark, Navigation, Compass, Check, Calendar } from 'lucide-react';

interface LandmarkBubble {
  id: string;
  name: string;
  type: string;
  description: string;
  x: number; // SVG coordinates percent
  y: number;
}

export default function LocationVisit() {
  const [activeBubble, setActiveBubble] = useState<string | null>('pakona');
  const [copied, setCopied] = useState(false);

  // Address and contacts
  const addressText = 'Theatre in the Park, Harare Gardens, Harare, Zimbabwe';
  const phoneText = '077 814 0407';

  // Landmarks surrounding Pakona container in Harare Gardens
  const landmarks: LandmarkBubble[] = [
    {
      id: 'pakona',
      name: 'PAKONA Street Food Eatery',
      type: 'Our Container Venue',
      description: 'Find us in the Theatre in the Park garden area. Look for the blue shipping container with the glowing neon handshake!',
      x: 52,
      y: 48
    },
    {
      id: 'theatre',
      name: 'Theatre in the Park',
      type: 'Cultural Amphitheatre',
      description: 'Harare’s famous open-air theatre center. We are located right inside their main courtyard garden!',
      x: 54,
      y: 35
    },
    {
      id: 'national-gallery',
      name: 'National Gallery of Zimbabwe',
      type: 'Art Museum',
      description: 'Located at the edge of the gardens on Julius Nyerere Way. Just a 2-minute walk from our container!',
      x: 20,
      y: 75
    },
    {
      id: 'monomotapa',
      name: 'Monomotapa Hotel',
      type: 'Skyscraper Hotel landmark',
      description: 'The iconic crescent-shaped hotel overlooking the park. We are a short walk north into the gardens.',
      x: 82,
      y: 80
    },
    {
      id: 'main-gate',
      name: 'Harare Gardens Main Entrance',
      type: 'Park Entry',
      description: 'Main public gate off Herbert Chitepo Ave / Leopold Takawira St. Walk past the green lawn towards the theatre.',
      x: 40,
      y: 18
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111] text-white relative overflow-hidden transition-colors duration-500 concrete-grid-dark border-t border-b border-white/5">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Contact Info & Hours Details */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-yellow text-xs font-mono tracking-widest uppercase rounded-full mb-6 w-fit border border-[#F5B400]/25"
            >
              <Compass size={13} className="animate-spin-slow" />
              <span>DIRECTIONS & HOURS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none text-white mb-6"
            >
              FIND THE <span className="text-brand-yellow">KONA</span>
            </motion.h2>

            <p className="font-space text-sm text-gray-400 mb-10 leading-normal uppercase">
              Tucked inside Harare’s most peaceful cultural park, we are ready to stoke the grill for you.
            </p>

            {/* Visit Details Cards */}
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="flex gap-4 items-start p-5 dark-glass border border-white/5 rounded-3xl transition-all duration-500">
                <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white mb-1">Our Address</h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed mb-3">
                    Theatre in the Park, Harare Gardens, Harare, Zimbabwe
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1.5 font-space text-[10px] font-bold text-brand-yellow hover:text-brand-orange uppercase tracking-wider transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-brand-success" />
                        <span className="text-brand-success">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Navigation size={12} />
                        <span>Copy Address for GPS</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Opening Hours card */}
              <div className="flex gap-4 items-start p-5 dark-glass border border-white/5 rounded-3xl transition-all duration-500">
                <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl shrink-0">
                  <Clock size={20} />
                </div>
                <div className="w-full">
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white mb-1">Kitchen Hours</h4>
                  <div className="grid grid-cols-2 gap-4 font-sans text-xs text-gray-300">
                    <div>
                      <p className="font-space font-bold text-white uppercase text-[10px] tracking-wider">Mon - Sat</p>
                      <p className="mt-0.5">8:30 AM - 6:00 PM</p>
                    </div>
                    <div>
                      <p className="font-space font-bold text-white uppercase text-[10px] tracking-wider">Sunday</p>
                      <p className="mt-0.5">Closed (Stoking the grill)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4 items-start p-5 dark-glass border border-white/5 rounded-3xl transition-all duration-500">
                <div className="p-3 bg-brand-yellow/10 text-brand-yellow rounded-xl shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-wide uppercase text-white mb-1">Call / WhatsApp</h4>
                  <p className="font-sans text-xs text-gray-300 mb-2">
                    Order inquiries, bulk street catering, or challenge slots.
                  </p>
                  <a
                    href={`tel:${phoneText}`}
                    className="font-space text-sm font-extrabold text-brand-yellow hover:text-brand-orange tracking-widest"
                  >
                    077 814 0407
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Immersive Interactive Vector Map of Harare Gardens */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Legend guide */}
            <div className="w-full text-center sm:text-right mb-4">
              <span className="font-mono text-[9px] uppercase text-gray-500 tracking-widest">
                💡 Click map pins to explore the park layout
              </span>
            </div>

            {/* The SVG Map Box */}
            <div className="w-full aspect-[4/3] dark-glass border border-white/10 rounded-[2.2rem] relative shadow-2xl overflow-hidden transition-all duration-500">
              
              {/* Map grid lining */}
              <div className="absolute inset-0 concrete-grid-dark opacity-35 pointer-events-none" />

              {/* Vector Map Draw */}
              <svg viewBox="0 0 400 300" className="w-full h-full p-4 pointer-events-none select-none z-0">
                {/* Harare Gardens boundary shape (Dark grey polygon) */}
                <polygon
                  points="50,40 280,30 350,220 320,260 120,280 40,220"
                  fill="#1B221C"
                  stroke="#2F3B31"
                  strokeWidth="2.5"
                />

                {/* Main pathways inside gardens */}
                <path d="M 50,40 C 150,150 250,120 320,260" stroke="#374539" strokeWidth="3" strokeDasharray="3 3" />
                <path d="M 40,220 C 120,200 240,180 280,30" stroke="#374539" strokeWidth="2.5" strokeDasharray="3 3" />
                <path d="M 120,280 C 120,220 180,140 200,40" stroke="#374539" strokeWidth="2" strokeDasharray="3 3" />

                {/* Outer streets */}
                {/* Julius Nyerere Way (Left edge) */}
                <line x1="20" y1="10" x2="10" y2="290" stroke="#151515" strokeWidth="12" />
                {/* Herbert Chitepo Ave (Top edge) */}
                <line x1="10" y1="12" x2="390" y2="12" stroke="#151515" strokeWidth="12" />
                {/* Park Lane / Leopold Takawira (Right edge) */}
                <line x1="380" y1="10" x2="380" y2="290" stroke="#151515" strokeWidth="12" />

                {/* Labels of outer roads */}
                <text x="35" y="24" fill="#3a3a3a" fontSize="7" fontFamily="monospace" transform="rotate(-1, 35, 24)">HERBERT CHITEPO AVE</text>
                <text x="15" y="150" fill="#3a3a3a" fontSize="7" fontFamily="monospace" transform="rotate(-92, 15, 150)">JULIUS NYERERE WAY</text>
                <text x="375" y="150" fill="#3a3a3a" fontSize="7" fontFamily="monospace" transform="rotate(90, 375, 150)">LEOPOLD TAKAWIRA ST</text>
              </svg>

              {/* Map Interactive Pins (absolute positions mapped to coordinates) */}
              {landmarks.map((mark) => (
                <button
                  key={mark.id}
                  onClick={() => setActiveBubble(mark.id)}
                  className="absolute group z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{ left: `${mark.x}%`, top: `${mark.y}%` }}
                >
                  <div className="relative">
                    {/* Ring glow */}
                    <span className={`absolute -inset-2.5 rounded-full blur-sm opacity-50 transition-all duration-300 group-hover:scale-125 ${
                      mark.id === 'pakona' 
                        ? 'bg-brand-yellow animate-ping' 
                        : 'bg-brand-orange animate-pulse'
                    }`} />

                    {/* Circular marker */}
                    <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center border-2 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      mark.id === 'pakona'
                        ? 'bg-brand-yellow border-brand-black text-brand-black font-black'
                        : 'bg-brand-black border-brand-orange text-brand-orange'
                    }`}>
                      {mark.id === 'pakona' ? (
                        <Compass size={11} className="animate-spin-slow" />
                      ) : (
                        <Landmark size={11} />
                      )}
                    </div>
                  </div>
                </button>
              ))}

              {/* Selected Marker Detail Bubble Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <AnimatePresence mode="wait">
                  {activeBubble && (
                    <motion.div
                      key={activeBubble}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 15, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-2xl text-left border border-white/10 shadow-xl relative bg-brand-black/95 text-white transition-all duration-300"
                    >
                      {/* Bubble Close cross */}
                      <button
                        onClick={() => setActiveBubble(null)}
                        className="absolute top-2.5 right-3 text-xs text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>

                      {/* Detail headings */}
                      <span className="font-space text-[8px] text-brand-yellow uppercase tracking-widest font-extrabold block">
                        {landmarks.find((l) => l.id === activeBubble)?.type}
                      </span>
                      <h4 className="font-bebas text-lg text-white uppercase tracking-wider mt-0.5 flex items-center gap-1.5 transition-colors duration-300">
                        {landmarks.find((l) => l.id === activeBubble)?.name}
                      </h4>
                      <p className="font-sans text-[11px] text-gray-300 leading-relaxed mt-1 transition-colors duration-300">
                        {landmarks.find((l) => l.id === activeBubble)?.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
