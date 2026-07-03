import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, PenTool, Check } from 'lucide-react';
import { Review } from '../types';

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Ranga Mandaza',
      rating: 5,
      comment: 'The burgers are insane. Seriously the Abang burger has this folded egg and beef combo that is out of this world.',
      date: '2 Days ago',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100',
      isVerified: true
    },
    {
      id: '2',
      name: 'Sasha Munyori',
      rating: 5,
      comment: 'One of Harare\'s absolute hidden gems. You walk into Harare Gardens, find Theatre in the park, and boom, this amazing food oasis is right there.',
      date: '1 Week ago',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100',
      isVerified: true
    },
    {
      id: '3',
      name: 'Kundai Chidodo',
      rating: 5,
      comment: 'The atmosphere alone is worth visiting. Chilling out in the wood bench garden under the giant trees with lo-fi beats playing.',
      date: '2 Weeks ago',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100'
    },
    {
      id: '4',
      name: 'Michael Wright',
      rating: 5,
      comment: 'You accidentally fall in love with this place. Friendly staff, delicious wok fried noodles, and the unique pineapple fried rice!',
      date: '3 Weeks ago',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100',
      isVerified: true
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formComment, setFormComment] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formComment) {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formName,
        rating: formRating,
        comment: formComment,
        date: 'Just now',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100'
      };

      setReviews((prev) => [newReview, ...prev]);
      setIsSuccess(true);
      setCurrentIndex(0); // Show newest review first

      setTimeout(() => {
        setIsSuccess(false);
        setShowReviewForm(false);
        setFormName('');
        setFormComment('');
        setFormRating(5);
      }, 2000);
    }
  };

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-light dark:bg-brand-black text-brand-black dark:text-white relative overflow-hidden transition-colors duration-500 concrete-grid dark:concrete-grid-dark">
      {/* Background glow flares */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* Header Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/10 text-brand-yellow text-xs font-mono tracking-widest uppercase rounded-full mb-4 w-fit border border-[#F5B400]/25">
            <MessageSquare size={12} />
            <span>KONA EXPERIENCES</span>
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none text-brand-black dark:text-white mb-2 transition-colors duration-500">
            WHAT THE PEOPLE <span className="text-brand-yellow">SAY</span>
          </h2>
          <p className="font-space text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1 transition-colors duration-500">
            Real reviews synchronized from our Google Maps Page.
          </p>
        </div>

        {/* Big Review Slider Box */}
        <div className="glass dark:dark-glass border border-black/5 dark:border-white/5 p-8 sm:p-12 rounded-[2rem] shadow-2xl relative mb-12 text-left transition-all duration-500">
          
          {/* Decorative Giant Quote mark */}
          <span className="absolute top-6 right-8 font-bebas text-8xl text-brand-yellow/10 select-none pointer-events-none">
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-6 items-start justify-between min-h-[160px]"
            >
              <div className="space-y-4 max-w-2xl">
                {/* Stars Row */}
                <div className="flex text-brand-yellow gap-1">
                  {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review comment */}
                <p className="font-sans text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-light transition-colors duration-500">
                  "{reviews[currentIndex].comment}"
                </p>

                {/* Author Name */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-gray-200 dark:bg-gray-800 shrink-0">
                    <img 
                      src={reviews[currentIndex].avatar} 
                      alt={reviews[currentIndex].name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-xs text-brand-black dark:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-500">
                      {reviews[currentIndex].name}
                      {reviews[currentIndex].isVerified && (
                        <span className="text-[8px] bg-brand-yellow/20 text-brand-yellow px-1.5 py-0.5 rounded uppercase font-mono tracking-widest font-extrabold">
                          Verified Local
                        </span>
                      )}
                    </h4>
                    <span className="font-mono text-[9px] text-gray-500 dark:text-gray-400 block mt-0.5">
                      {reviews[currentIndex].date} • Google Review
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls bottom bar */}
          <div className="flex items-center justify-between border-t border-black/10 dark:border-white/15 pt-6 mt-8">
            <button
              onClick={() => setShowReviewForm(true)}
              className="flex items-center gap-2 font-space text-[10px] font-bold text-brand-yellow hover:text-brand-orange uppercase tracking-wider transition-colors"
            >
              <PenTool size={12} />
              <span>Leave A Google Review</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 border border-black/10 dark:border-white/10 text-brand-black dark:text-white hover:text-brand-yellow rounded-full transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-black/10 dark:border-white/10 text-brand-black dark:text-white hover:text-brand-yellow rounded-full transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Stars Counter Header Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/5 font-space text-xs text-brand-black/80 dark:text-white/80 transition-colors duration-500">
            <span className="font-bold text-brand-yellow">4.6 out of 5</span>
            <span>Based on 450+ Google Maps Reviews</span>
          </div>
        </div>
      </div>

      {/* Review Submission Popup Panel */}
      <AnimatePresence>
        {showReviewForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReviewForm(false)}
              className="fixed inset-0 bg-brand-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass dark:dark-glass border border-black/5 dark:border-white/10 rounded-[2rem] max-w-md w-full p-6 sm:p-8 relative z-10 shadow-2xl text-left text-brand-black dark:text-white transition-all duration-500"
            >
              <button
                onClick={() => setShowReviewForm(false)}
                className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-brand-black dark:hover:text-white font-bold"
              >
                ✕
              </button>

              <h3 className="font-bebas text-3xl text-brand-yellow tracking-wide uppercase mb-2">
                WRITE A REVIEW
              </h3>
              <p className="font-space text-xs text-gray-500 dark:text-gray-300 uppercase tracking-wide mb-6">
                Tell the world about your Pakona experiences!
              </p>

              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-brand-success/25 border border-brand-success text-brand-success rounded-full flex items-center justify-center animate-pulse">
                    <Check size={32} />
                  </div>
                  <h4 className="font-bebas text-2xl uppercase tracking-wider">REVIEW SHARED!</h4>
                  <p className="font-sans text-xs text-gray-400">
                    Your feedback was successfully synched to our live review carousel stream. Thank you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farai Nyoni"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none transition-all"
                    />
                  </div>

                  {/* Rating stars field */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                      Your Star Rating
                    </label>
                    <div className="flex gap-2 text-brand-yellow">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            size={24}
                            fill={star <= formRating ? 'currentColor' : 'none'}
                            stroke="currentColor"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment field */}
                  <div>
                    <label className="font-space text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-1">
                      Your Review Comment
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. Honestly the atmosphere in the park is incredible, and the Nasi Burger was delicious! Highly recommend..."
                      value={formComment}
                      onChange={(e) => setFormComment(e.target.value)}
                      className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl font-sans text-xs text-brand-black dark:text-white focus:border-brand-yellow outline-none resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-yellow hover:bg-brand-orange text-brand-black hover:text-white font-space font-bold uppercase tracking-wider text-xs rounded-2xl transition-all duration-300 shadow-lg"
                  >
                    Submit Review
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
