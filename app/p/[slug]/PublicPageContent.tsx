'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// AnimatePresence is required for exit animations
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Shield,
  Truck,
  Award,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Gift,
  ThumbsUp,
  Quote,
  ArrowRight,
  BadgeCheck,
  Flame,
} from 'lucide-react';
import type { AmazonReview } from '@/lib/types';
import ComparisonPageTemplate from './ComparisonPageTemplate';
import BestOfPageTemplate from './BestOfPageTemplate';

// Public page data (subset of full Page type)
interface PublicPage {
  id: string;
  title: string;
  keyword: string;
  asin: string;
  affiliate_link: string;
  public_slug: string;
  product_data: any;
  amazon_reviews: AmazonReview[];
  generated_content: any;
  hero_image: string | null;
  page_type?: string;
  conversion_boosters?: string[];
}

interface PublicPageContentProps {
  page: PublicPage;
}

export default function PublicPageContent({ page }: PublicPageContentProps) {
  // Always call hooks at the top level (before any returns)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  const [viewerCount, setViewerCount] = useState(127);
  const [recentSale, setRecentSale] = useState<{ name: string; time: string; visible: boolean } | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitPopupShown, setExitPopupShown] = useState(false);

  // Extract conversion boosters
  const boosters = page.conversion_boosters || [];
  
  // Enable all boosters by default if ANY booster was selected (for better UX)
  const anyBoosterSelected = boosters.length > 0;
  const hasCountdown = anyBoosterSelected || boosters.includes('countdown');
  const hasVisitors = anyBoosterSelected || boosters.includes('visitors');
  const hasUrgencyBanner = anyBoosterSelected || boosters.includes('urgency-banner');
  const hasTrustBadges = anyBoosterSelected || boosters.includes('trust-badges');
  const hasRecentSales = anyBoosterSelected || boosters.includes('recent-sales');
  const hasExitPopup = anyBoosterSelected || boosters.includes('exit-popup');

  // Countdown timer - only if enabled
  useEffect(() => {
    if (!hasCountdown && !hasUrgencyBanner) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hasCountdown, hasUrgencyBanner]);

  // Viewer count fluctuation - only if enabled
  useEffect(() => {
    if (!hasVisitors) return;
    const interval = setInterval(() => {
      setViewerCount(prev => Math.max(100, prev + Math.floor(Math.random() * 5) - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [hasVisitors]);

  // Recent sales popup - only if enabled
  useEffect(() => {
    if (!hasRecentSales) return;
    
    const names = ['Sarah M.', 'John D.', 'Emily R.', 'Michael T.', 'Jessica L.', 'David K.', 'Amanda P.', 'Chris W.'];
    const times = ['2 minutes ago', '5 minutes ago', '8 minutes ago', '12 minutes ago', '15 minutes ago'];
    
    const showSale = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTime = times[Math.floor(Math.random() * times.length)];
      setRecentSale({ name: randomName, time: randomTime, visible: true });
      
      // Hide after 4 seconds
      setTimeout(() => {
        setRecentSale(prev => prev ? { ...prev, visible: false } : null);
      }, 4000);
    };
    
    // Show first popup after 5 seconds
    const initialTimeout = setTimeout(showSale, 5000);
    
    // Then show every 15-25 seconds
    const interval = setInterval(showSale, 15000 + Math.random() * 10000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [hasRecentSales]);

  // Exit intent popup - only if enabled
  useEffect(() => {
    if (!hasExitPopup || exitPopupShown) return;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitPopupShown) {
        setShowExitPopup(true);
        setExitPopupShown(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasExitPopup, exitPopupShown]);

  // Check page type and render appropriate template
  if (page.page_type === 'comparison') {
    return <ComparisonPageTemplate page={page} />;
  }

  if (page.page_type === 'bestof') {
    return <BestOfPageTemplate page={page} />;
  }

  // Default: Single product template

  const { product_data, generated_content, amazon_reviews, affiliate_link, hero_image } = page;
  const reviews = amazon_reviews as AmazonReview[];

  // Extract product data with proper types
  const productTitle = String(product_data?.title || '');
  const productPrice = String(product_data?.price || '');
  const productRating = Number(product_data?.rating) || 4.8;
  const productReviewsCount = Number(product_data?.reviews_count) || 10000;

  // Extract generated content with proper types
  const rawContentTitle = String(generated_content?.title || productTitle);
  
  // Clean up any legacy "Why X Is Amazing" titles
  const cleanTitle = (title: string): string => {
    let cleaned = title;
    // Remove "Why " prefix if present
    if (cleaned.toLowerCase().startsWith('why ')) {
      cleaned = cleaned.slice(4);
    }
    // Remove awkward suffixes
    cleaned = cleaned.replace(/ is amazing$/i, '');
    cleaned = cleaned.replace(/ is worth every penny$/i, '');
    cleaned = cleaned.replace(/ is worth it$/i, '');
    cleaned = cleaned.replace(/ is the best$/i, '');
    cleaned = cleaned.trim();
    // Add a better suffix if title is now too plain
    if (cleaned.length < 30 && !cleaned.toLowerCase().includes('review')) {
      cleaned = `${cleaned} - Complete Review`;
    }
    return cleaned;
  };
  
  // Create a shorter headline for display - use a cleaner version
  const cleanedTitle = cleanTitle(rawContentTitle);
  const contentTitle = cleanedTitle.length > 80 
    ? cleanedTitle.substring(0, 80).trim() + '...'
    : cleanedTitle;
  const contentOverview = String(generated_content?.overview || '');
  const pros = (generated_content?.pros as string[]) || [];
  const cons = (generated_content?.cons as string[]) || [];
  const sections = (generated_content?.sections as Array<{ heading: string; content: string }>) || [];
  const faq = (generated_content?.faq as Array<{ question: string; answer: string }>) || [];

  const CTAButton = ({ large = false, className = '' }: { large?: boolean; className?: string }) => (
    <a
      href={affiliate_link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white font-bold rounded-xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${
        large ? 'text-xl px-10 py-5' : 'text-lg px-8 py-4'
      } ${className}`}
    >
      <ShoppingCart className={large ? 'w-6 h-6' : 'w-5 h-5'} />
      <span>Check Availability on Amazon</span>
      <ArrowRight className={`${large ? 'w-6 h-6' : 'w-5 h-5'} group-hover:translate-x-1 transition-transform`} />
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Urgency Banner - Only shows if conversion booster enabled */}
      {hasUrgencyBanner && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white py-3 px-4 sticky top-0 z-50"
        >
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 animate-pulse" />
              <span>🔥 LIMITED TIME DEAL - PRICES MAY INCREASE!</span>
            </div>
            {hasCountdown && (
              <div className="flex items-center gap-2 bg-black/20 px-4 py-1 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            )}
            {hasVisitors && (
              <div className="flex items-center gap-2 bg-black/20 px-4 py-1 rounded-full">
                <Users className="w-4 h-4" />
                <span>{viewerCount} people viewing this</span>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Standalone Countdown Timer (if no urgency banner but countdown enabled) */}
      {hasCountdown && !hasUrgencyBanner && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-900/90 to-orange-900/90 backdrop-blur-sm text-white py-4 px-4 sticky top-0 z-50 border-b border-red-500/30"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="font-medium">⏰ Special Offer Ends In:</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-6 py-2 rounded-lg">
              <div className="text-center">
                <span className="text-2xl font-bold font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
                <p className="text-xs text-gray-400">HRS</p>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <p className="text-xs text-gray-400">MIN</p>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-red-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <p className="text-xs text-gray-400">SEC</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Standalone Live Visitors Counter (if no urgency banner but visitors enabled) */}
      {hasVisitors && !hasUrgencyBanner && !hasCountdown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 text-white py-3 px-4 sticky top-0 z-50 border-b border-blue-500/30"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
            <div className="relative">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <span className="font-medium">
              👀 <span className="text-blue-400 font-bold">{viewerCount}</span> people are viewing this page right now
            </span>
          </div>
        </motion.div>
      )}

      {/* Recent Sales Popup */}
      <AnimatePresence>
        {hasRecentSales && recentSale?.visible && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-24 left-4 z-[60] bg-white rounded-xl shadow-2xl p-4 max-w-sm border border-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {recentSale.name} just purchased!
                </p>
                <p className="text-sm text-gray-500">{recentSale.time}</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Verified Purchase
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {hasExitPopup && showExitPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70]"
              onClick={() => setShowExitPopup(false)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[75] bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
            >
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Wait! Don&apos;t Leave Yet!
                </h3>
                <p className="text-gray-600 mb-6">
                  You&apos;re about to miss out on this amazing deal. This special price won&apos;t last forever!
                </p>
                <a
                  href={page.affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl w-full hover:shadow-lg transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Yes! I Want This Deal
                </a>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className="mt-3 text-sm text-gray-400 hover:text-gray-600"
                >
                  No thanks, I&apos;ll pass on this offer
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-8 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                {hero_image ? (
                  <Image
                    src={hero_image}
                    alt={productTitle || 'Product'}
                    fill
                    className="object-contain p-8"
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <ShoppingCart className="w-24 h-24 text-gray-300" />
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap className="w-4 h-4" /> BEST SELLER
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ✓ IN STOCK
                  </span>
                </div>
              </div>
              
              {/* Trust badges under image - Shows if enabled OR by default */}
              {(hasTrustBadges || boosters.length === 0) && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 grid grid-cols-3 gap-3"
                >
                  <div className="bg-[#111118] rounded-xl p-4 text-center border border-green-500/20 hover:border-green-500/40 transition-colors">
                    <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Secure Checkout</p>
                  </div>
                  <div className="bg-[#111118] rounded-xl p-4 text-center border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                    <Truck className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Fast Shipping</p>
                  </div>
                  <div className="bg-[#111118] rounded-xl p-4 text-center border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                    <Gift className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Easy Returns</p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Category badge */}
              <div className="flex items-center gap-2">
                <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                  #1 Top Rated
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  Amazon&apos;s Choice
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-white leading-snug">
                {contentTitle}
              </h1>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i <= Math.round(productRating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-yellow-400 font-bold text-lg">
                  {productRating.toFixed(1)}
                </span>
                <span className="text-gray-400">
                  ({productReviewsCount.toLocaleString()} verified reviews)
                </span>
              </div>

              {/* Price */}
              <div className="bg-[#111118] rounded-2xl p-6 border border-gray-800">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-white">
                    {productPrice || 'See Price'}
                  </span>
                  {productPrice && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ${(parseFloat(productPrice.replace(/[^0-9.]/g, '')) * 1.4).toFixed(2)}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                        SAVE 29%
                      </span>
                    </>
                  )}
                </div>
                <p className="text-green-400 text-sm flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Free shipping with Prime
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {pros.slice(0, 4).map((pro, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-4">
                <CTAButton large />
                <p className="text-center text-gray-500 text-sm">
                  🔒 Secure checkout powered by Amazon
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-[#111118] border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-white">{productReviewsCount.toLocaleString()}+</p>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{productRating}/5</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-gray-400 text-sm">Would Recommend</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24hr</p>
              <p className="text-gray-400 text-sm">Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
              Why Everyone Is Talking About This Product
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                {contentOverview}
              </p>
            </div>
            
            <div className="mt-10 flex justify-center">
              <CTAButton />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 lg:py-20 bg-[#0d0d12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Honest Pros & Cons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl p-8 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400">What We Love</h3>
              </div>
              <ul className="space-y-4">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 rounded-2xl p-8 border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-400">Minor Drawbacks</h3>
              </div>
              <ul className="space-y-4">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-400">{con}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 border-y border-orange-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of satisfied customers. Order now and see why this is the #1 choice.
          </p>
          <CTAButton large />
        </div>
      </section>

      {/* Detailed Sections */}
      {sections.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111118] rounded-2xl p-8 border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                  {section.heading}
                </h3>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Customer Reviews */}
      {reviews.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#0d0d12]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What Real Customers Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">Based on {productReviewsCount.toLocaleString()}+ reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.slice(0, 6).map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111118] rounded-2xl p-6 border border-gray-800 relative"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-800" />
                  
                  <div className="flex items-center gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= (review.rating || 5)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-400 ml-2">
                        <BadgeCheck className="w-4 h-4" /> Verified
                      </span>
                    )}
                  </div>
                  
                  {review.title && (
                    <h4 className="font-semibold text-white mb-2">{review.title}</h4>
                  )}
                  
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    &quot;{review.text}&quot;
                  </p>
                  
                  {review.author && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-sm text-gray-500">— {review.author}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <CTAButton />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#111118] rounded-xl border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/30 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{item.question}</span>
                    {expandedFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === i && (
                    <div className="px-6 pb-6 text-gray-400">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0d0d12] to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#111118] to-[#1a1a24] rounded-3xl p-10 lg:p-16 border border-gray-800 shadow-2xl">
            <Award className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Don&apos;t Miss Out!
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              This deal won&apos;t last forever. Click below to secure yours before it&apos;s gone.
            </p>
            
            <CTAButton large className="mb-6" />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Secure Payment
              </span>
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4" /> Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <Gift className="w-4 h-4" /> 30-Day Returns
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-gray-800 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block flex-1">
            <p className="text-white font-semibold truncate">{productTitle || contentTitle}</p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-orange-400 font-bold">{productPrice || 'See Price'}</span>
            </div>
          </div>
          <a
            href={affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Get It Now on Amazon</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer spacer */}
      <div className="h-28" />

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm mb-4">
            © {new Date().getFullYear()} Product Review. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Disclaimer: As an Amazon Associate, we earn from qualifying purchases. 
            Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </p>
        </div>
      </footer>
    </div>
  );
}
