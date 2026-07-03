import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Play, Heart, MessageCircle, RefreshCw, Send, Award } from 'lucide-react';

interface FeedPost {
  id: string;
  type: 'instagram' | 'tiktok' | 'promotion';
  image: string;
  likes: string;
  comments: string;
  caption: string;
  hasVideo?: boolean;
}

export default function SocialFeed() {
  const [likesState, setLikesState] = useState<Record<string, { count: string, active: boolean }>>({
    '1': { count: '1.2K', active: false },
    '2': { count: '890', active: false },
    '3': { count: '2.5K', active: false },
    '4': { count: '1.8K', active: false },
    '5': { count: '5.2K', active: false },
    '6': { count: '980', active: false }
  });

  const feedItems: FeedPost[] = [
    {
      id: '1',
      type: 'instagram',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400',
      likes: '1.2K',
      comments: '45',
      caption: 'The legendary ABANG BURGER is firing on all cylinders today. Juicy beef, spices, folded egg 🤤 #Pakona #HarareStreetFood #TheKonaVibe',
    },
    {
      id: '2',
      type: 'tiktok',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400',
      likes: '890',
      comments: '12',
      caption: 'Is our chocolate shake the thickest in Harare? Test it out today and let us know! 👇 #ThickShakes #ZimTikTokers #PakonaVibes',
      hasVideo: true
    },
    {
      id: '3',
      type: 'instagram',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=400',
      likes: '2.5K',
      comments: '180',
      caption: 'Fried rice inside a REAL pine? Only at Pakona, Theatre in the park! 🍍🍛 #PineappleFriedRice #HarareGardens #HiddenGems',
    },
    {
      id: '4',
      type: 'tiktok',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400',
      likes: '1.8K',
      comments: '94',
      caption: 'POV: Chilling with the crew at Harare Gardens after a long week. Live acoustic sets starting at 4 PM 🎸 #ZimDancehall #AcousticNights',
      hasVideo: true
    },
    {
      id: '5',
      type: 'instagram',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400',
      likes: '5.2K',
      comments: '220',
      caption: 'Accidentally you\'ll love it here. Chocolate bundt cake with dripping mango glaze is ready for dessert lovers 🎂 #BundtCake #ZimFoodLovers',
    },
    {
      id: '6',
      type: 'promotion',
      image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=400',
      likes: '980',
      comments: '30',
      caption: 'WEEKLY SPECIAL: Grab our loaded Street Platter (including hot dogs, crispy golden balls, loaded chips & dips) for just $10! 🌭💥 #StreetPlatters',
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesState((prev) => {
      const current = prev[id];
      if (current.active) {
        // Toggle off
        return {
          ...prev,
          [id]: { count: (parseFloat(current.count) - 0.1).toFixed(1) + 'K', active: false }
        };
      } else {
        // Toggle on
        return {
          ...prev,
          [id]: { count: (parseFloat(current.count) + 0.1).toFixed(1) + 'K', active: true }
        };
      }
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow bg-brand-black dark:bg-white/10 px-4 py-1.5 rounded-full">
            SOCIAL STREAM
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-brand-black dark:text-white tracking-tight mt-4">
            #PAKONA<span className="text-brand-yellow">LIFESTYLE</span>
          </h2>
          <p className="font-space text-xs sm:text-sm text-gray-500 max-w-sm mx-auto uppercase mt-2 tracking-widest">
            Tap to explore recent posts, promotions, and reviews from our active accounts.
          </p>
        </div>

        {/* Live Grid of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedItems.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -6 }}
              className="glass dark:dark-glass border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              {/* Media header block */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={post.image}
                  alt="Social post"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <button 
                    onClick={(e) => handleLike(post.id, e)}
                    className="flex items-center gap-1.5 text-white font-space font-bold hover:text-brand-yellow"
                  >
                    <Heart size={18} className={likesState[post.id].active ? 'fill-current text-red-500' : ''} />
                    <span>{likesState[post.id].count}</span>
                  </button>
                  <div className="flex items-center gap-1.5 text-white font-space font-bold">
                    <MessageCircle size={18} />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Left Tag Indicator */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.type === 'instagram' && (
                    <span className="bg-brand-orange text-white font-space text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                      <Instagram size={10} /> Instagram
                    </span>
                  )}
                  {post.type === 'tiktok' && (
                    <span className="bg-[#000] text-white font-space text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                      ♩ TikTok
                    </span>
                  )}
                  {post.type === 'promotion' && (
                    <span className="bg-brand-yellow text-brand-black font-space text-[8px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                      <Award size={10} /> Promotion
                    </span>
                  )}
                </div>

                {/* Right Video Play Indicator */}
                {post.hasVideo && (
                  <div className="absolute bottom-4 right-4 p-2 bg-brand-yellow text-brand-black rounded-full shadow-lg">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                )}
              </div>

              {/* Caption and Interactions footer */}
              <div className="p-5 text-left border-t border-black/5 dark:border-white/5 bg-transparent flex-grow">
                {/* Hearts / Comments bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 text-[11px] font-space font-bold transition-colors ${
                        likesState[post.id].active 
                          ? 'text-red-500' 
                          : 'text-gray-500 dark:text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart size={14} className={likesState[post.id].active ? 'fill-current' : ''} />
                      <span>{likesState[post.id].count}</span>
                    </button>
                    <span className="flex items-center gap-1 text-[11px] font-space font-bold text-gray-500 dark:text-gray-400">
                      <MessageCircle size={14} />
                      <span>{post.comments} comments</span>
                    </span>
                  </div>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-1.5 bg-black/5 dark:bg-brand-black rounded-lg hover:text-brand-yellow transition-colors"
                  >
                    <Send size={11} className="text-gray-400 hover:text-brand-yellow" />
                  </a>
                </div>

                {/* Main caption text */}
                <p className="font-sans text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link to follow */}
        <div className="text-center mt-12 z-10 relative">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow hover:bg-brand-orange text-brand-black hover:text-white rounded-full font-space text-xs font-bold uppercase tracking-wider transition-all shadow-md glow-yellow"
          >
            <Instagram size={14} />
            <span>Follow Our Harare Journey</span>
          </a>
        </div>

      </div>
    </section>
  );
}
