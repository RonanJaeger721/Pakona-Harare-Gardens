import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPakona from './components/WhyPakona';
import About from './components/About';
import InteractiveMenu from './components/InteractiveMenu';
import BurgerChallenge from './components/BurgerChallenge';
import OurVibe from './components/OurVibe';
import CelebrityWall from './components/CelebrityWall';
import CommunityStats from './components/CommunityStats';
import GoogleReviews from './components/GoogleReviews';
import SocialFeed from './components/SocialFeed';
import LocationVisit from './components/LocationVisit';
import Footer from './components/Footer';
import FloatingControls from './components/FloatingControls';
import EventsCalendar from './components/EventsCalendar';
import { ReservePopup, CartDrawer } from './components/Popups';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showReserve, setShowReserve] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Sync Theme with DOM Document Class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Add to Cart action with popup trigger feedback
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.menuItem.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
    // Open cart drawer immediately to show active feedback
    setShowCart(true);
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleUpdateCartQuantity = (index: number, qty: number) => {
    setCart((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, quantity: qty } : item))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleFinishLoading = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-black text-brand-black dark:text-white transition-colors duration-500 overflow-x-hidden font-sans selection:bg-brand-yellow selection:text-brand-black">
      
      {/* Dynamic Animated Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            onComplete={handleFinishLoading}
            musicPlaying={musicPlaying}
            onMusicToggle={setMusicPlaying}
          />
        )}
      </AnimatePresence>

      {/* Main Page Layout (Visible when loaded) */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Navigation */}
          <Navbar
            darkMode={theme === 'dark'}
            setDarkMode={(dark) => setTheme(dark ? 'dark' : 'light')}
            cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
            onCartClick={() => setShowCart(true)}
            onReserveClick={() => setShowReserve(true)}
            onMenuClick={() => {
              const el = document.getElementById('menu');
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          />

          {/* Core Visual Sections */}
          <main className="relative z-10">
            {/* Cinematic Hero slideshow with interactive Search console */}
            <Hero
              onExploreMenu={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              onReserveTable={() => setShowReserve(true)}
              onOrderNow={() => {
                const el = document.getElementById('menu');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />
            
            {/* Why People Love Pakona bento-grid */}
            <WhyPakona />
            
            {/* Split Story panel of the restaurant */}
            <About />
            
            {/* Food items filterable grids and carts */}
            <InteractiveMenu onAddToCart={handleAddToCart} />
            
            {/* Interactive countdown Leaderboard Challenge */}
            <BurgerChallenge />
            
            {/* Calendar Events inside Theatre Gardens */}
            <EventsCalendar onReserveTable={() => setShowReserve(true)} />

            {/* Pinterest Style Masonry visual gallery */}
            <OurVibe />

            {/* Luxury horizontal scrolling seen celebrity deck */}
            <CelebrityWall />

            {/* Incremental stats counter */}
            <CommunityStats />

            {/* Dynamic synchronized reviews carousel with leave review panels */}
            <GoogleReviews />

            {/* Interactive simulated Instagram + TikTok embeds */}
            <SocialFeed />

            {/* Complete interactive Map, Landmarks and Directions dashboard */}
            <LocationVisit />
          </main>

          {/* Large Premium Footer with Newsletter signup */}
          <Footer />

          {/* Floating interactive controllers (WhatsApp, Lofi Player, Scroll-Top) */}
          <FloatingControls
            musicPlaying={musicPlaying}
            onMusicToggle={(playing) => setMusicPlaying(playing)}
          />

          {/* Reserve Table Popups and Modals */}
          <ReservePopup
            isOpen={showReserve}
            onClose={() => setShowReserve(false)}
          />

          {/* Online Ordering Cart Drawer */}
          <CartDrawer
            isOpen={showCart}
            onClose={() => setShowCart(false)}
            cartItems={cart}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onUpdateQuantity={handleUpdateCartQuantity}
          />
        </motion.div>
      )}

    </div>
  );
}
