'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Input from './Input';

const CONVERSION_BOOSTERS = [
  { id: 'countdown', name: 'Countdown Timer', description: 'Creates urgency' },
  { id: 'visitors', name: 'Live Visitors Counter', description: 'Shows viewers' },
  { id: 'recent-sales', name: 'Recent Purchase Alerts', description: 'Displays purchases' },
  { id: 'urgency', name: 'Urgency Banner', description: 'Stock/sale alerts' },
  { id: 'trust-badges', name: 'Trust Badges', description: 'Security badges' },
  { id: 'exit-popup', name: 'Exit Intent Message', description: 'Last chance offer' },
];

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface MultiProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (data: {
    affiliateLinks?: string[];
    asin?: string;
    affiliateLink1?: string;
    boosters: string[];
  }) => void;
  title: string;
  type: 'bestof' | 'seasonal';
  productNames?: string[]; // For best-of lists
  productName?: string; // For seasonal
  loading?: boolean;
}

export default function MultiProductModal({
  isOpen,
  onClose,
  onGenerate,
  title,
  type,
  productNames = [],
  productName = '',
  loading = false,
}: MultiProductModalProps) {
  const [affiliateLinks, setAffiliateLinks] = useState<string[]>(
    type === 'bestof' ? new Array(productNames.length).fill('') : ['']
  );
  const [asin, setAsin] = useState('');
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([]);
  const [error, setError] = useState('');

  const toggleBooster = (boosterId: string) => {
    setSelectedBoosters(prev =>
      prev.includes(boosterId) ? prev.filter(id => id !== boosterId) : [...prev, boosterId]
    );
  };

  const updateAffiliateLink = (index: number, value: string) => {
    const newLinks = [...affiliateLinks];
    newLinks[index] = value;
    setAffiliateLinks(newLinks);
  };

  const handleGenerate = () => {
    setError('');

    if (type === 'bestof') {
      // Validate all affiliate links
      const emptyLinks = affiliateLinks.filter(link => !link.trim());
      if (emptyLinks.length > 0) {
        setError(`Please enter all ${productNames.length} affiliate links`);
        return;
      }

      // Validate URL format
      const urlPattern = /^https?:\/\/.+/;
      const invalidLinks = affiliateLinks.filter(link => !urlPattern.test(link));
      if (invalidLinks.length > 0) {
        setError('All links must be valid URLs starting with http:// or https://');
        return;
      }

      onGenerate({ affiliateLinks, boosters: selectedBoosters });
    } else if (type === 'seasonal') {
      // Validate ASIN and affiliate link
      if (!asin.trim()) {
        setError('Please enter the product ASIN');
        return;
      }
      if (!affiliateLinks[0].trim()) {
        setError('Please enter your affiliate link');
        return;
      }

      const urlPattern = /^https?:\/\/.+/;
      if (!urlPattern.test(affiliateLinks[0])) {
        setError('Please enter a valid URL starting with http:// or https://');
        return;
      }

      onGenerate({ 
        asin, 
        affiliateLink1: affiliateLinks[0], 
        boosters: selectedBoosters 
      });
    }
  };

  const handleClose = () => {
    if (!loading) {
      setAffiliateLinks(type === 'bestof' ? new Array(productNames.length).fill('') : ['']);
      setAsin('');
      setSelectedBoosters([]);
      setError('');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-deep-space-black/90 backdrop-blur-md z-[9999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl w-full max-w-3xl my-8 border-2 border-purple-primary/30 shadow-2xl shadow-purple-primary/20"
            >
              {/* Header */}
              <div className="glass-card border-b border-purple-primary/20 p-6 flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Generate Profit Page
                  </h2>
                  <p className="text-purple-primary/70 text-sm">{title}</p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="flex-shrink-0 p-2 hover:bg-purple-primary/10 rounded-lg transition-colors disabled:opacity-50 text-purple-primary hover:text-white"
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto">
                {/* Best-Of: Multiple Affiliate Links */}
                {type === 'bestof' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-2xl">🔗</span>
                        Add Affiliate Links for All {productNames.length} Products
                      </h3>
                      <p className="text-sm text-purple-primary/60 mb-4">
                        You earn commissions on ALL products in the list!
                      </p>
                    </div>

                    {productNames.map((name, index) => (
                      <div key={index}>
                        <label className="block text-sm font-bold text-purple-primary mb-2">
                          #{index + 1} - {name}
                        </label>
                        <Input
                          value={affiliateLinks[index] || ''}
                          onChange={(e) => updateAffiliateLink(index, e.target.value)}
                          placeholder="https://www.amazon.com/dp/ASIN?tag=your-tag-20"
                          disabled={loading}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Seasonal: ASIN + Affiliate Link */}
                {type === 'seasonal' && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span className="text-2xl">🔗</span>
                        Product Details
                      </h3>
                      <p className="text-sm text-purple-primary/60 mb-4">
                        For: {productName}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-purple-primary mb-2">
                        Product ASIN (from Amazon)
                      </label>
                      <Input
                        value={asin}
                        onChange={(e) => setAsin(e.target.value)}
                        placeholder="B08N5WRWNW"
                        disabled={loading}
                        className="w-full"
                      />
                      <p className="text-xs text-purple-primary/50 mt-1">
                        Find the ASIN in the product details section on Amazon
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-purple-primary mb-2">
                        Your Affiliate Link
                      </label>
                      <Input
                        value={affiliateLinks[0]}
                        onChange={(e) => updateAffiliateLink(0, e.target.value)}
                        placeholder="https://www.amazon.com/dp/ASIN?tag=your-tag-20"
                        disabled={loading}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}

                {/* Conversion Boosters */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-2xl">⚡</span>
                      Conversion Boosters (Optional)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {CONVERSION_BOOSTERS.map((booster) => (
                      <button
                        key={booster.id}
                        type="button"
                        onClick={() => toggleBooster(booster.id)}
                        disabled={loading}
                        className={`text-left p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedBoosters.includes(booster.id)
                            ? 'border-purple-primary bg-purple-primary/20 shadow-lg'
                            : 'border-purple-primary/20 bg-purple-primary/5 hover:border-purple-primary/40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              selectedBoosters.includes(booster.id)
                                ? 'border-purple-primary bg-purple-primary'
                                : 'border-purple-primary/40'
                            }`}
                          >
                            {selectedBoosters.includes(booster.id) && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                <polyline points="20,6 9,17 4,12" />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-white text-sm mb-1">{booster.name}</div>
                            <div className="text-xs text-purple-primary/60">{booster.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-rose-primary/10 border border-rose-primary/30 rounded-lg p-4">
                    <p className="text-sm text-rose-primary font-bold">{error}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-purple-primary/20 flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  disabled={loading}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={handleGenerate}
                  isLoading={loading}
                  className="flex-1"
                >
                  {loading ? 'Generating...' : '🚀 Generate Page'}
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
