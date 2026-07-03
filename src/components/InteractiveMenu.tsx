import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, ShoppingCart, SlidersHorizontal, Check, Clock, Eye } from 'lucide-react';
import { MenuItem } from '../types';

interface InteractiveMenuProps {
  onAddToCart: (item: MenuItem, customization?: string) => void;
  onViewItemDetails?: (item: MenuItem) => void;
}

export default function InteractiveMenu({ onAddToCart, onViewItemDetails }: InteractiveMenuProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [spicyFilter, setSpicyFilter] = useState<number | null>(null);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Precise menu items matching the real screenshots
  const menuItems: MenuItem[] = [
    {
      id: 'abang-burger',
      name: 'Abang Burger',
      description: 'Handcrafted beef patty infused with aromatic spices, topped with a folded egg with our special sauce, served on a toasted bun. A burger masterpiece!',
      price: 4.00,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600',
      isPopular: true,
      spicyLevel: 1,
      prepTime: '12 mins',
      customizations: ['Extra Folded Egg (+$0.50)', 'Double Beef Patty (+$1.50)', 'Spicy Chili Paste']
    },
    {
      id: 'nasi-burger',
      name: 'Nasi Burger',
      description: 'Flavourful seasoned fried rice buns, fried egg, and fresh garden toppings, served with our secret home-cooked sauce.',
      price: 3.00,
      category: 'burgers',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600',
      isNew: true,
      spicyLevel: 0,
      prepTime: '15 mins',
      customizations: ['Gluten-Free Rice', 'Extra Cheese (+$0.50)']
    },
    {
      id: 'pineapple-rice',
      name: 'Pineapple Fried Rice',
      description: 'A harmonious blend of sweet and savory flavors. Sautéed chicken & pineapple tossed in aromatic wok seasoning, served in a stunning hollowed pineapple.',
      price: 6.00,
      category: 'specials',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600',
      isPopular: true,
      spicyLevel: 1,
      prepTime: '15 mins',
      customizations: ['Vegetarian Option', 'Extra Pineapples']
    },
    {
      id: 'pattaya-rice',
      name: 'Chicken Pattaya Rice',
      description: 'Thai-inspired wok delight! Savory chicken fried rice enveloped in a luscious, paper-thin egg wrap. A true street symphony of textures.',
      price: 4.00,
      category: 'fried-rice',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600',
      spicyLevel: 2,
      prepTime: '14 mins',
      customizations: ['No Chicken (Veg)', 'Extra Chili Padi']
    },
    {
      id: 'kabird',
      name: 'KaBird Chicken',
      description: 'Sweet braised succulent chicken simmered with a Japanese chili sauce, served with compressed rice cubes.',
      price: 3.00,
      category: 'specials',
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600',
      spicyLevel: 2,
      prepTime: '10 mins',
      customizations: ['Mild Sauce', 'Extra Rice Cubes']
    },
    {
      id: 'kacow',
      name: 'KaCow Spheres',
      description: 'Juicy shredded tender beef rolled into circular street spheres that pack a burst of rich, dynamic local spices.',
      price: 4.00,
      category: 'specials',
      image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600',
      isPopular: true,
      spicyLevel: 1,
      prepTime: '10 mins',
      customizations: ['Spicy BBQ Glaze', 'Honey Mustard Glaze']
    },
    {
      id: 'signature-noodles',
      name: 'Wok Stir-Noodles',
      description: 'Steaming stir-fried street noodles tossed in rich soy-garlic sauces, loaded with local seasonal greens and wok-charred onions.',
      price: 4.50,
      category: 'fried-rice',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600',
      spicyLevel: 1,
      prepTime: '8 mins',
      customizations: ['Extra Egg (+$0.30)', 'Spicy Wok Chili']
    },
    {
      id: 'golden-chips',
      name: 'Golden Potato Chips',
      description: 'Golden, crispy hand-cut potato sticks, double-fried to crunchy perfection and tossed in Pakona signature salt.',
      price: 1.50,
      category: 'chips',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600',
      spicyLevel: 0,
      prepTime: '5 mins',
      customizations: ['Add Melted Cheese (+$0.50)', 'Spicy Dust']
    },
    {
      id: 'hotdogs',
      name: 'Pakona Hotdogs',
      description: 'Juicy grilled smoked sausage nestled inside a cloud-soft toasted bun, loaded with mustard, ketchup, and fresh relish.',
      price: 1.00,
      category: 'hotdogs',
      image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=600',
      spicyLevel: 0,
      prepTime: '5 mins',
      customizations: ['Extra Caramelized Onions', 'Jalapeño Slices']
    },
    {
      id: 'chocolate-shake',
      name: 'Signature Chocolate Shake',
      description: 'Decadently thick, premium cocoa milkshake topped with chocolate shavings, served in the custom handshake-stamped cup.',
      price: 2.50,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600',
      spicyLevel: 0,
      prepTime: '4 mins'
    },
    {
      id: 'mango-lychee',
      name: 'Fresh Mango-Lychee Cooler',
      description: 'An icy, refreshing blend of sweet local Harare mango pulp with soft, floating lychee/rambutan fruits.',
      price: 2.00,
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=600',
      spicyLevel: 0,
      prepTime: '4 mins'
    },
    {
      id: 'bundt-cake',
      name: 'Glazed Bundt Cake',
      description: 'Moist rich chocolate bundt cake drizzled beautifully with a dynamic mango-glaze dressing. As seen on our feeds.',
      price: 3.50,
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600',
      spicyLevel: 0,
      prepTime: '5 mins'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Street Eats' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'fried-rice', label: 'Rice & Noodles' },
    { id: 'specials', label: 'Street Specials' },
    { id: 'chips', label: 'Chips & Sides' },
    { id: 'drinks', label: 'Coolers & Shakes' },
    { id: 'desserts', label: 'Sweet Treats' }
  ];

  // Filters logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSpicy = spicyFilter === null || item.spicyLevel === spicyFilter;

      return matchesSearch && matchesCategory && matchesSpicy;
    });
  }, [searchTerm, activeCategory, spicyFilter]);

  const handleOrderClick = (item: MenuItem) => {
    onAddToCart(item);
    
    // Set added state for instant feedback
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black transition-colors duration-500 relative concrete-grid dark:concrete-grid-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Title block */}
        <div className="text-center mb-12">
          <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow bg-brand-black dark:bg-white/10 px-4 py-1.5 rounded-full">
            KONA CUISINE
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-brand-black dark:text-white tracking-tight mt-4">
            FEATURED <span className="text-brand-yellow">STREET EATS</span>
          </h2>
          <p className="font-space text-xs sm:text-sm text-gray-500 max-w-md mx-auto uppercase mt-2 tracking-widest">
            Freshly prepared inside our containers, served hot in the gardens.
          </p>
        </div>

        {/* Toolbar: Search & Filter Tabs */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between glass dark:dark-glass border border-black/5 dark:border-white/10 p-4.5 rounded-3xl shadow-sm transition-all duration-500">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Abang)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/5 dark:bg-brand-black/40 text-brand-black dark:text-white rounded-2xl text-xs font-space font-medium border border-black/10 dark:border-white/10 focus:border-[#F5B400] outline-none transition-all"
            />
          </div>

          {/* Spicy filter */}
          <div className="flex items-center gap-2">
            <span className="font-space text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <SlidersHorizontal size={12} /> Spicy Level:
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setSpicyFilter(spicyFilter === null ? null : null)}
                className={`px-2.5 py-1 text-[9px] font-space font-bold rounded-lg uppercase border transition-all ${
                  spicyFilter === null 
                    ? 'bg-[#F5B400] border-[#F5B400] text-black font-extrabold shadow' 
                    : 'bg-transparent border-gray-300 dark:border-white/10 text-gray-500 dark:text-gray-400'
                }`}
              >
                All
              </button>
              {[0, 1, 2].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSpicyFilter(lvl)}
                  className={`px-2.5 py-1 text-[9px] font-space font-bold rounded-lg uppercase border transition-all flex items-center gap-0.5 ${
                    spicyFilter === lvl 
                      ? 'bg-brand-orange border-brand-orange text-white' 
                      : 'bg-transparent border-gray-300 dark:border-white/10 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {lvl === 0 ? 'Mild' : lvl === 1 ? '🔥' : '🔥🔥'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category horizontal scroll bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar select-none snap-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-center px-6 py-3 text-xs font-space font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#F5B400] text-black neon-glow font-extrabold'
                  : 'glass dark:dark-glass text-brand-black dark:text-white border border-black/10 dark:border-white/10 hover:border-[#F5B400] hover:text-[#F5B400]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="glass dark:dark-glass rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group transition-all duration-500 hover:shadow-xl border border-black/5 dark:border-white/5"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Left Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isPopular && (
                      <span className="bg-brand-yellow text-brand-black font-space text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                        <Flame size={10} className="fill-current animate-pulse" /> Popular
                      </span>
                    )}
                    {item.isNew && (
                      <span className="bg-brand-orange text-white font-space text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                        New Spec
                      </span>
                    )}
                  </div>

                  {/* Top Right Prep Time Badge */}
                  {item.prepTime && (
                    <div className="absolute top-4 right-4 bg-brand-black/75 backdrop-blur-md text-white/95 font-mono text-[9px] font-semibold tracking-wider px-2 py-1 rounded-md border border-white/10 flex items-center gap-1">
                      <Clock size={10} /> {item.prepTime}
                    </div>
                  )}

                  {/* Hover Quick View Eye Icon */}
                  {onViewItemDetails && (
                    <button 
                      onClick={() => onViewItemDetails(item)}
                      className="absolute bottom-4 right-4 p-2 bg-white text-brand-black hover:bg-brand-yellow rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    >
                      <Eye size={14} />
                    </button>
                  )}
                </div>

                {/* Info and Purchase Section */}
                <div className="p-6 text-left flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Label and Spicy */}
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-space text-[9px] uppercase tracking-widest text-brand-yellow font-bold">
                        {item.category.replace('-', ' ')}
                      </span>
                      {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                        <span className="text-[10px]">
                          {'🔥'.repeat(item.spicyLevel)}
                        </span>
                      )}
                    </div>

                    {/* Food Name */}
                    <h3 className="font-bebas text-2xl md:text-3xl tracking-wide uppercase text-brand-black dark:text-white group-hover:text-brand-yellow transition-colors mb-2">
                      {item.name}
                    </h3>

                    {/* Food Description */}
                    <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and Add button bar */}
                  <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4 mt-auto">
                    <div>
                      <span className="font-space text-[9px] text-gray-400 uppercase tracking-widest block">Price</span>
                      <span className="font-space text-xl font-extrabold text-brand-black dark:text-white leading-none">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderClick(item)}
                      className={`px-4.5 py-2.5 rounded-full font-space text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                        addedItemIds[item.id]
                          ? 'bg-[#3BB54A] text-white scale-95'
                          : 'bg-black dark:bg-[#F5B400] text-white dark:text-black hover:bg-[#F5B400] hover:text-black dark:hover:bg-brand-orange dark:hover:text-white'
                      }`}
                    >
                      {addedItemIds[item.id] ? (
                        <>
                          <Check size={13} strokeWidth={3} />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={13} />
                          <span>Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state search helper */}
        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="font-space text-sm text-gray-500 uppercase tracking-widest">
              No Street Eats match your search filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
                setSpicyFilter(null);
              }}
              className="mt-4 px-4 py-2 border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black rounded-lg font-space text-xs font-bold uppercase tracking-wider transition-all"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
