import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Heart, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'garden' | 'food' | 'people' | 'container';
  title: string;
  description: string;
  image: string;
}

export default function OurVibe() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      category: 'container',
      title: 'Our Custom Container Shop',
      description: 'The industrial shipping container setup at Theatre in the Park, stenciled with the glowing handshake neon.',
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=600'
    },
    {
      id: '2',
      category: 'food',
      title: 'The Real Nasi Burger',
      description: 'Perfect seasoned rice buns with crispy egg, fresh lettuce, and chili paste.',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600'
    },
    {
      id: '3',
      category: 'people',
      title: 'Harare Creatives Chilling',
      description: 'Musicians, photographers, and writers laughing together on the benches.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600'
    },
    {
      id: '4',
      category: 'food',
      title: 'Pineapple Fried Rice',
      description: 'Sweet, wok-grilled pineapple fried rice served in a real hollowed pineapple shell.',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600'
    },
    {
      id: '5',
      category: 'garden',
      title: 'Sunset Under the Canopy',
      description: 'Open air picnic seating nestled deeply in the Theatre in the Park tree lines.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600'
    },
    {
      id: '6',
      category: 'people',
      title: 'The Team in Action',
      description: 'Our chefs tossing noodles and grilling patties live in the container kitchen.',
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600'
    },
    {
      id: '7',
      category: 'food',
      title: 'Dripping Bundt Cake',
      description: 'Decadent chocolate cake loaded with glistening golden mango syrup.',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600'
    },
    {
      id: '8',
      category: 'garden',
      title: 'Night Garden Ambience',
      description: 'Cozy warm lighting and fairy lights glowing, creating a hidden retreat in Harare.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600'
    }
  ];

  const filters = [
    { id: 'all', label: 'Everything' },
    { id: 'container', label: 'The Container' },
    { id: 'food', label: 'The Eats' },
    { id: 'garden', label: 'The Garden' },
    { id: 'people', label: 'The Crowd' }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow bg-brand-black dark:bg-white/10 px-4 py-1.5 rounded-full">
            OUR VIBE
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-brand-black dark:text-white tracking-tight mt-4">
            SCENES FROM <span className="text-brand-yellow">KONA</span>
          </h2>
          <p className="font-space text-xs sm:text-sm text-gray-500 max-w-sm mx-auto uppercase mt-2 tracking-widest">
            A visual glance at our food, containers, events, and community memories.
          </p>
        </div>

        {/* Filters Tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 select-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 text-xs font-space font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-brand-yellow border-brand-yellow text-brand-black glow-yellow'
                  : 'bg-white dark:bg-brand-dark-card border-black/5 dark:border-white/5 text-brand-black dark:text-white hover:border-brand-yellow hover:text-brand-yellow'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Masonry-Simulated Responsive Columns Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid glass dark:dark-glass border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-md relative group cursor-pointer transition-all duration-500"
              >
                {/* Image layout */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Hover dark overlay */}
                  <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

                  {/* Icon hover states */}
                  <div className="absolute top-4 right-4 p-2 bg-brand-yellow text-brand-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <Eye size={14} />
                  </div>

                  {/* Text displayed on hover overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <span className="font-space text-[9px] uppercase text-brand-yellow tracking-widest font-bold">
                      {item.category}
                    </span>
                    <h3 className="font-bebas text-xl uppercase tracking-wide text-white leading-none mt-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[10px] text-gray-300 leading-normal mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/95 backdrop-blur-md">
            {/* Dark closing background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0"
            />

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Main Interactive Lightbox Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center z-10"
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full hover:text-brand-yellow transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image */}
              <div className="glass dark:dark-glass border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden max-h-[75vh] w-full flex flex-col justify-center transition-all duration-500">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[55vh] w-full object-contain bg-black"
                  referrerPolicy="no-referrer"
                />
                
                {/* Lightbox details footer */}
                <div className="p-5 sm:p-6 bg-transparent border-t border-black/5 dark:border-white/10 text-left">
                  <span className="font-space text-[10px] text-brand-yellow uppercase tracking-widest font-bold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-bebas text-2xl sm:text-3xl uppercase tracking-wider text-brand-black dark:text-white mt-1 transition-colors">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="font-sans text-xs text-gray-600 dark:text-gray-400 mt-2 transition-colors">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-16 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full hover:text-brand-yellow transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
