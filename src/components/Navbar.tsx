import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, Calendar, Sun, Moon } from 'lucide-react';
import PakonaLogo from './PakonaLogo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  cartCount: number;
  onCartClick: () => void;
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  cartCount,
  onCartClick,
  onReserveClick,
  onMenuClick
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Food Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Burger Challenge', href: '#challenge' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-brand-black/90 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-3 shadow-sm dark:shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <PakonaLogo size={42} animated={false} glow={scrolled} className="text-brand-yellow" />
              <div className="flex flex-col">
                <span className={`font-bebas text-2xl tracking-[0.2em] leading-none transition-colors duration-300 ${
                  scrolled ? 'text-brand-black dark:text-white' : 'text-white'
                }`}>
                  PAKONA
                </span>
                <span className="font-mono text-[8px] tracking-widest text-brand-yellow uppercase mt-0.5">
                  Harare Gardens
                </span>
              </div>
            </a>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-space text-xs font-semibold uppercase tracking-wider transition-colors relative group py-2 duration-300 ${
                    scrolled ? 'text-brand-black/85 dark:text-white/80 hover:text-brand-yellow' : 'text-white/80 hover:text-brand-yellow'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Header Toolbar */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${
                  scrolled
                    ? 'text-brand-black/70 dark:text-white/70 hover:text-brand-yellow hover:bg-black/5 dark:hover:bg-white/5'
                    : 'text-white/70 hover:text-brand-yellow hover:bg-white/5'
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Shopping Cart button */}
              <button
                onClick={onCartClick}
                className={`p-2 rounded-full transition-all relative ${
                  scrolled
                    ? 'text-brand-black/70 dark:text-white/70 hover:text-brand-yellow hover:bg-black/5 dark:hover:bg-white/5'
                    : 'text-white/70 hover:text-brand-yellow hover:bg-white/5'
                }`}
                aria-label="Open cart"
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-space font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Booking button */}
              <button
                onClick={onReserveClick}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-yellow text-brand-black hover:bg-brand-orange hover:text-white transition-all duration-300 rounded-full font-space text-xs font-bold uppercase tracking-wider"
              >
                <Calendar size={13} />
                <span>Reserve</span>
              </button>

              {/* Mobile Menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-colors ${
                  scrolled
                    ? 'text-brand-black/70 dark:text-white/70 hover:text-brand-yellow hover:bg-black/5 dark:hover:bg-white/5'
                    : 'text-white/70 hover:text-brand-yellow hover:bg-white/5'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-20 bg-brand-black/95 backdrop-blur-lg flex flex-col justify-between pb-10 px-6 lg:hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none" />

            <nav className="flex flex-col gap-5 text-center mt-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-bebas text-3xl tracking-widest text-white hover:text-brand-yellow transition-colors py-1.5"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Actions Drawer Bottom */}
            <div className="flex flex-col items-center gap-4 z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full max-w-xs flex items-center justify-center gap-2 py-3 bg-brand-yellow text-brand-black rounded-full font-space font-bold uppercase tracking-widest text-sm glow-yellow"
              >
                <Calendar size={16} />
                <span>Reserve A Table</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onMenuClick();
                }}
                className="w-full max-w-xs py-3 border border-white/20 text-white rounded-full font-space font-bold uppercase tracking-widest text-xs hover:border-brand-yellow hover:text-brand-yellow transition-all"
              >
                View Street Food Menu
              </button>

              <div className="text-[10px] font-mono text-white/40 tracking-widest mt-4">
                THEATRE IN THE PARK • HARARE GARDENS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
