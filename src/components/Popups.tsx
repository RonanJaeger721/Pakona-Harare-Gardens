import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Check, ShoppingBag, Trash2, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface ReservePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservePopup({ isOpen, onClose }: ReservePopupProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00 PM');
  const [guests, setGuests] = useState('2 Guests');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && date) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setName('');
        setPhone('');
        setDate('');
      }, 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass dark:dark-glass border border-black/5 dark:border-white/10 rounded-[2rem] max-w-md w-full p-6 sm:p-8 relative z-10 shadow-2xl text-left text-brand-black dark:text-white transition-all duration-500"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white font-bold"
            >
              ✕
            </button>

            <h3 className="font-bebas text-3xl sm:text-4xl text-brand-yellow tracking-wide uppercase mb-1">
              RESERVE A KONA TABLE
            </h3>
            <p className="font-space text-[10px] text-gray-400 uppercase tracking-widest mb-6">
              Gather your friends under the trees at Harare Gardens.
            </p>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-brand-success/25 border border-brand-success text-brand-success rounded-full flex items-center justify-center animate-pulse">
                  <Check size={32} />
                </div>
                <h4 className="font-bebas text-2xl uppercase tracking-wider">TABLE RESERVED!</h4>
                <p className="font-sans text-xs text-gray-400">
                  Your reservation is locked in. We will WhatsApp you confirmation within 15 minutes!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sandra Mandisodza"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 077 814 0407"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                  />
                </div>

                {/* Selection Details */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                    />
                  </div>

                  {/* Time slot */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                      Arrival Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-light dark:bg-brand-black border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                    >
                      {['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-light dark:bg-brand-black border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                  >
                    {['1 Guest', '2 Guests', '4 Guests', '6 Guests', '8+ Guests'].map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F5B400] hover:bg-brand-orange text-black font-space font-bold uppercase tracking-wider text-xs rounded-2xl transition-all duration-300 shadow-lg"
                >
                  Request Table Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onUpdateQuantity: (index: number, quantity: number) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onUpdateQuantity
}: CartDrawerProps) {
  const [userName, setUserName] = useState('');
  const [takeawayMethod, setTakeawayMethod] = useState<'Takeaway' | 'Dine-In'>('Takeaway');

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  // Compiles and launches WhatsApp text order
  const handleCheckoutWhatsApp = () => {
    if (!userName) return;

    let orderList = '';
    cartItems.forEach((item) => {
      orderList += `- ${item.quantity} x ${item.menuItem.name} ($${(item.menuItem.price * item.quantity).toFixed(2)})\n`;
    });

    const msg = `Hi Pakona! I'd like to place an order:
------------------------------
${orderList}
------------------------------
Method: ${takeawayMethod}
Name: ${userName}
Total: $${subtotal.toFixed(2)}
------------------------------
Thank you! Placed via your Lifestyle website. 🍔🍍`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/263778140407?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Black overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md glass dark:dark-glass border-l border-black/5 dark:border-white/10 shadow-2xl relative flex flex-col justify-between text-brand-black dark:text-white transition-all duration-500"
            >
              {/* Header */}
              <div className="p-6 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-brand-yellow" size={18} />
                  <h3 className="font-bebas text-2xl tracking-wider text-brand-black dark:text-white uppercase transition-colors">Your Street Cart</h3>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white"
                  aria-label="Close cart"
                >
                  ✕
                </button>
              </div>

              {/* Items List scrollable body */}
              <div className="p-6 overflow-y-auto flex-grow no-scrollbar space-y-4">
                {cartItems.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center justify-center gap-4 text-gray-500">
                    <div className="p-4 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5 text-gray-400 dark:text-gray-600">
                      <ShoppingBag size={32} />
                    </div>
                    <p className="font-space text-xs uppercase tracking-widest font-bold">Your cart is empty.</p>
                    <button
                      onClick={onClose}
                      className="text-brand-yellow font-space text-[10px] font-bold uppercase tracking-wider hover:text-[#F5B400] flex items-center gap-1"
                    >
                      <span>Fill it with delicious food</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">{cartItems.length} Dishes selected</span>
                      <button
                        onClick={onClearCart}
                        className="font-mono text-[9px] text-red-400/80 hover:text-red-400 uppercase tracking-widest flex items-center gap-1"
                      >
                        <Trash2 size={10} /> Clear Cart
                      </button>
                    </div>

                    {cartItems.map((item, idx) => (
                      <div
                        key={`${item.menuItem.id}-${idx}`}
                        className="p-3.5 glass dark:dark-glass rounded-2xl flex gap-3.5 items-center justify-between border border-black/5 dark:border-white/5 shadow-sm transition-all duration-500"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-black/10 dark:border-white/10">
                          <img
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="flex-grow text-left">
                          <h4 className="font-space font-bold text-xs text-brand-black dark:text-white uppercase leading-tight truncate transition-colors">
                            {item.menuItem.name}
                          </h4>
                          <span className="font-mono text-[10px] text-[#F5B400] font-bold mt-1 block">
                            ${(item.menuItem.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Quantity adjusters */}
                        <div className="flex items-center gap-1.5 bg-brand-light dark:bg-brand-black border border-black/10 dark:border-white/10 px-2 py-1 rounded-xl transition-colors">
                          <button
                            onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                            className="font-mono text-xs text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs font-bold text-brand-black dark:text-white px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="font-mono text-xs text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>

                        {/* Trash remove button */}
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-gray-500 hover:text-red-400 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Cart Footer Checkout panel */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-black/5 dark:border-white/10 glass dark:dark-glass space-y-4 transition-colors">
                  {/* Totals */}
                  <div className="flex justify-between items-baseline">
                    <span className="font-bebas text-lg text-gray-400 tracking-wider">Subtotal</span>
                    <span className="font-bebas text-3xl text-[#F5B400] tracking-wide">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Customer Information Form */}
                  <div className="space-y-3 pt-2 text-left">
                    {/* Method Selector */}
                    <div>
                      <span className="font-space text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">Takeaway Method</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setTakeawayMethod('Takeaway')}
                          className={`py-2 text-[10px] font-space font-bold rounded-lg uppercase tracking-wider transition-all ${
                            takeawayMethod === 'Takeaway'
                              ? 'bg-[#F5B400] text-black font-extrabold shadow'
                              : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
                          }`}
                        >
                          Takeaway Bag
                        </button>
                        <button
                          onClick={() => setTakeawayMethod('Dine-In')}
                          className={`py-2 text-[10px] font-space font-bold rounded-lg uppercase tracking-wider transition-all ${
                            takeawayMethod === 'Dine-In'
                              ? 'bg-[#F5B400] text-black font-extrabold shadow'
                              : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-brand-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10'
                          }`}
                        >
                          Dine in Garden
                        </button>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <span className="font-space text-[9px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">Your Name</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sandra Mandisodza"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-black/5 dark:bg-brand-black/50 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-[#F5B400] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    disabled={!userName}
                    onClick={handleCheckoutWhatsApp}
                    className={`w-full py-4.5 rounded-xl font-space font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                      userName
                        ? 'bg-[#3BB54A] hover:bg-[#2b8a3e] text-white cursor-pointer'
                        : 'bg-black/5 dark:bg-white/5 text-gray-400/40 dark:text-white/30 border border-black/5 dark:border-white/5 cursor-not-allowed'
                    }`}
                  >
                    <MessageSquare size={14} fill="currentColor" />
                    <span>Place Order on WhatsApp</span>
                    <ArrowRight size={12} />
                  </button>
                  
                  {!userName && (
                    <p className="font-mono text-[9px] text-gray-500 text-center uppercase tracking-widest">
                      ⚠️ Please enter your name above to activate checkout
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
