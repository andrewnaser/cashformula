'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profitPacks, highTicketProducts, type ProfitPack, type DayContent } from '@/lib/platinum-data';
import Button from '@/components/ui/Button';
import Confetti from '@/components/ui/Confetti';
import VideoPlaceholder from '@/components/ui/VideoPlaceholder';

// Icons
const BoltIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const FireIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 23c-4.97 0-9-3.58-9-8 0-2.52 1.17-5.06 3.05-7.29.37-.44.75-.86 1.14-1.25l.73-.71.5.89c.63 1.11 1.4 2.07 2.27 2.86.31.28.62.53.94.76l.77.57-.45.84c-.3.55-.44 1.13-.44 1.73 0 1.1.45 2.1 1.17 2.83.72.73 1.72 1.18 2.82 1.18s2.1-.45 2.82-1.18c.72-.73 1.17-1.73 1.17-2.83 0-.6-.14-1.18-.44-1.73l-.45-.84.77-.57c.32-.23.63-.48.94-.76.87-.79 1.64-1.75 2.27-2.86l.5-.89.73.71c.39.39.77.81 1.14 1.25C19.83 9.94 21 12.48 21 15c0 4.42-4.03 8-9 8z" />
  </svg>
);

const TrendUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const PackageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Training videos placeholder data
const trainingVideos = [
  {
    title: 'Platinum Mastery: Your First $1,000',
    description: 'Complete walkthrough of the Platinum system - from setup to your first commission.',
    duration: '24:15',
    badge: 'START HERE',
    thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=450&fit=crop',
    videoUrl: '#',
  },
  {
    title: 'High-Ticket Promotion Secrets',
    description: 'Advanced strategies for promoting high-ticket products and maximizing commissions.',
    duration: '18:42',
    badge: 'ADVANCED',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    videoUrl: '#',
  },
  {
    title: '30-Day Content Calendar Strategy',
    description: 'How to use your profit pack content for maximum engagement and consistent sales.',
    duration: '15:30',
    badge: 'STRATEGY',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    videoUrl: '#',
  },
];

export default function PlatinumPage() {
  const [selectedPack, setSelectedPack] = useState<ProfitPack | null>(null);
  const [expandedPack, setExpandedPack] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [activeTab, setActiveTab] = useState<'packs' | 'products'>('packs');
  const [visiblePosts, setVisiblePosts] = useState<number>(6);

  useEffect(() => {
    const visited = localStorage.getItem('platinum_visited');
    if (!visited) {
      setIsFirstVisit(true);
      setShowConfetti(true);
      localStorage.setItem('platinum_visited', 'true');
    }
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    const fullText = text;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyPostWithHashtags = (post: DayContent, packId: string) => {
    const fullText = `${post.caption}\n\n${post.hashtags}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(`${packId}-${post.day}`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, 30));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Confetti */}
      <Confetti
        isActive={showConfetti}
        onComplete={() => setShowConfetti(false)}
        colors={['#a855f7', '#9333ea', '#c084fc', '#d8b4fe', '#ffffff']}
      />

      {/* Premium Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 rounded-3xl opacity-70 animate-gradient-border" />

        <div className="relative m-[3px] glass-card rounded-3xl p-8 lg:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/40 animate-float">
                  <BoltIcon />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
                      Platinum Package
                    </h1>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold">
                      VIP ACCESS
                    </span>
                  </div>
                  <p className="text-navy-300 text-lg">
                    120+ ready-to-post content pieces & high-ticket products
                  </p>
                </div>
              </div>

              {isFirstVisit && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-5 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400 font-bold flex items-center gap-2"
                >
                  <SparklesIcon />
                  Platinum Unlocked!
                </motion.div>
              )}
            </div>

            {/* Stats bar */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-purple-400">
                <PackageIcon />
                <span className="font-bold">4 Complete Profit Packs</span>
              </div>
              <div className="flex items-center gap-2 text-cash-green">
                <CalendarIcon />
                <span className="font-bold">120 Days of Content</span>
              </div>
              <div className="flex items-center gap-2 text-gold-400">
                <FireIcon />
                <span className="font-bold">8 High-Ticket Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training Videos */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-purple-400"><BoltIcon /></span>
          Platinum Training Vault
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <VideoPlaceholder
                thumbnail={video.thumbnail}
                title={video.title}
                duration={video.duration}
                badge={video.badge}
                videoUrl={video.videoUrl}
                accentColor="purple"
              />
              <div className="p-4">
                <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-navy-400">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 p-1 bg-navy-800/50 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('packs')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'packs'
              ? 'bg-purple-500 text-white'
              : 'text-navy-400 hover:text-white'
          }`}
        >
          📦 30-Day Profit Packs
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`px-6 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'products'
              ? 'bg-purple-500 text-white'
              : 'text-navy-400 hover:text-white'
          }`}
        >
          🔥 High-Ticket Products
        </button>
      </div>

      {/* 30-Day Profit Packs */}
      <AnimatePresence mode="wait">
        {activeTab === 'packs' && (
          <motion.div
            key="packs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-purple-400"><SparklesIcon /></span>
                  30-Day Viral Post Packs
                </h2>
                <p className="text-navy-400 mt-1">
                  Copy-paste ready posts with hashtags for each niche
                </p>
              </div>
            </div>

            {/* Pack Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profitPacks.map((pack, i) => (
                <motion.div
                  key={pack.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card rounded-2xl overflow-hidden border-2 ${
                    expandedPack === pack.id ? 'border-purple-500' : 'border-transparent'
                  } transition-all`}
                >
                  {/* Pack Header */}
                  <div
                    className={`p-6 cursor-pointer ${pack.bgColor}`}
                    onClick={() => {
                      setExpandedPack(expandedPack === pack.id ? null : pack.id);
                      setSelectedPack(pack);
                      setVisiblePosts(6);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pack.color} flex items-center justify-center text-3xl shadow-lg`}>
                          {pack.emoji}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                          <p className="text-navy-400">{pack.niche}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedPack === pack.id ? 180 : 0 }}
                        className="text-navy-400"
                      >
                        <ChevronDownIcon />
                      </motion.div>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-navy-800/50 rounded-full text-purple-400 font-bold">
                        30 Posts
                      </span>
                      <span className="px-3 py-1 bg-navy-800/50 rounded-full text-cash-green font-bold">
                        {pack.commission}
                      </span>
                      <span className="px-3 py-1 bg-gold-500/20 rounded-full text-gold-400 font-bold">
                        Value: {pack.value}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedPack === pack.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 border-t border-navy-700 space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-white">All 30 Posts</h4>
                            <Button
                              variant="ghost"
                              onClick={() => {
                                const allPosts = pack.posts.map(p => `--- Day ${p.day} ---\n\n${p.caption}\n\n${p.hashtags}`).join('\n\n\n');
                                copyToClipboard(allPosts, `${pack.id}-all`);
                              }}
                            >
                              {copiedId === `${pack.id}-all` ? <CheckIcon /> : <CopyIcon />}
                              <span>{copiedId === `${pack.id}-all` ? 'Copied All!' : 'Copy All 30'}</span>
                            </Button>
                          </div>

                          {/* Posts Grid */}
                          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                            {pack.posts.slice(0, visiblePosts).map((post) => (
                              <div
                                key={post.day}
                                className="bg-navy-800/50 rounded-xl overflow-hidden border border-navy-700 hover:border-purple-500/30 transition-all"
                              >
                                {/* Post Image */}
                                {post.imageUrl && (
                                  <div className="aspect-video relative overflow-hidden">
                                    <img
                                      src={post.imageUrl}
                                      alt={post.imageDescription || `Day ${post.day} post`}
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-3 left-3">
                                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${pack.color} text-white shadow-lg`}>
                                        Day {post.day}
                                      </span>
                                    </div>
                                  </div>
                                )}
                                
                                <div className="p-4">
                                  {!post.imageUrl && (
                                    <div className="flex items-center justify-between mb-3">
                                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${pack.color} text-white`}>
                                        Day {post.day}
                                      </span>
                                    </div>
                                  )}

                                  <div className="flex items-start justify-between gap-2 mb-3">
                                    <p className="text-white text-sm whitespace-pre-wrap leading-relaxed flex-1" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                                      {post.caption.length > 500 ? post.caption.substring(0, 500) + '...' : post.caption}
                                    </p>
                                    <button
                                      onClick={() => copyPostWithHashtags(post, pack.id)}
                                      className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm font-medium shrink-0"
                                    >
                                      {copiedId === `${pack.id}-${post.day}` ? (
                                        <>
                                          <CheckIcon />
                                          <span>Copied!</span>
                                        </>
                                      ) : (
                                        <>
                                          <CopyIcon />
                                          <span>Copy</span>
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  <p className="text-purple-400/70 text-xs break-words">
                                    {post.hashtags}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {visiblePosts < 30 && (
                            <Button
                              variant="ghost"
                              onClick={loadMorePosts}
                              className="w-full"
                            >
                              Load More Posts ({30 - visiblePosts} remaining)
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* High-Ticket Products */}
        {activeTab === 'products' && (
          <motion.div
            key="products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-gold-400"><FireIcon /></span>
                High-Ticket Products
              </h2>
              <p className="text-navy-400 mt-1">
                Premium products with $45-$250 commissions per sale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {highTicketProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-2xl p-5 space-y-4 border border-navy-700 hover:border-gold-500/30 transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span className="px-2 py-1 bg-navy-800 rounded-lg text-navy-400 text-xs">
                      {product.category}
                    </span>
                    {product.isHot && (
                      <span className="px-2 py-1 bg-orange-500/20 rounded-lg text-orange-400 text-xs font-bold flex items-center gap-1">
                        <FireIcon /> HOT
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-gold-400 transition-colors line-clamp-2">
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < Math.floor(product.rating) ? 'text-gold-400' : 'text-navy-600'}
                        >
                          <StarIcon />
                        </span>
                      ))}
                    </div>
                    <span className="text-navy-400 text-xs">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-1">
                    {product.bulletPoints.slice(0, 2).map((point, j) => (
                      <li key={j} className="text-navy-400 text-xs flex items-start gap-2">
                        <span className="text-cash-green mt-0.5">✓</span>
                        <span className="line-clamp-1">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Commission */}
                  <div className="pt-3 border-t border-navy-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">{product.price}</span>
                      <span className="text-cash-green font-bold text-sm">
                        +{product.commission}
                      </span>
                    </div>
                    <a
                      href={`https://www.amazon.com/dp/${product.asin}?tag=YOUR_TAG`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 rounded-lg font-bold text-sm transition-colors"
                    >
                      <span>View on Amazon</span>
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Commission Calculator */}
            <div className="glass-card rounded-2xl p-6 border border-gold-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <TrendUpIcon />
                Potential Earnings Calculator
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-navy-800/50 rounded-xl p-4 text-center">
                  <p className="text-navy-400 text-sm mb-1">1 Sale/Week</p>
                  <p className="text-3xl font-bold text-white">$360-1,000</p>
                  <p className="text-cash-green text-sm">/month</p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-4 text-center border-2 border-gold-500/30">
                  <p className="text-navy-400 text-sm mb-1">3 Sales/Week</p>
                  <p className="text-3xl font-bold text-gold-400">$1,080-3,000</p>
                  <p className="text-cash-green text-sm">/month</p>
                </div>
                <div className="bg-navy-800/50 rounded-xl p-4 text-center">
                  <p className="text-navy-400 text-sm mb-1">1 Sale/Day</p>
                  <p className="text-3xl font-bold text-white">$1,350-7,500</p>
                  <p className="text-cash-green text-sm">/month</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pro Tips Section */}
      <div className="glass-card rounded-2xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <SparklesIcon />
          Pro Tips for Maximum Results
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-navy-800/30 rounded-xl p-4">
            <h4 className="font-bold text-purple-400 mb-2">📅 Content Strategy</h4>
            <p className="text-navy-300 text-sm">
              Post consistently at the same time each day. The algorithm favors regular posting schedules. Use all 30 days, then repeat with slight variations.
            </p>
          </div>
          <div className="bg-navy-800/30 rounded-xl p-4">
            <h4 className="font-bold text-gold-400 mb-2">🔥 High-Ticket Focus</h4>
            <p className="text-navy-300 text-sm">
              Promote 1-2 high-ticket products at a time. Create dedicated content around them. One $200 commission beats 20 small sales.
            </p>
          </div>
          <div className="bg-navy-800/30 rounded-xl p-4">
            <h4 className="font-bold text-cash-green mb-2">💡 Engagement Hack</h4>
            <p className="text-navy-300 text-sm">
              End every post with a question. Reply to EVERY comment within the first hour. This signals engagement to the algorithm.
            </p>
          </div>
          <div className="bg-navy-800/30 rounded-xl p-4">
            <h4 className="font-bold text-orange-400 mb-2">🎯 Platform Strategy</h4>
            <p className="text-navy-300 text-sm">
              Repurpose each post across multiple platforms. What works on Instagram can work on Facebook, Pinterest, and Twitter with minor tweaks.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
