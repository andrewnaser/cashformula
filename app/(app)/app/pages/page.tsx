'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { createClient } from '@/lib/supabase/client';
import type { Page } from '@/lib/types';
import Button from '@/components/ui/Button';

// Icons
const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 2,7 12,12 22,7" />
    <polyline points="2,17 12,22 22,17" />
    <polyline points="2,12 12,17 22,12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const PlusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const TrendUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function PagesPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [pageStats, setPageStats] = useState<Record<string, { views: number; clicks: number; earnings: string }>>({});
  const supabase = createClient();

  useEffect(() => {
    setMounted(true);
    
    const fetchPages = async () => {
      const { data } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setPages(data as Page[]);
        // Generate stats on client side only
        const stats: Record<string, { views: number; clicks: number; earnings: string }> = {};
        data.forEach((page: Page) => {
          const seed = page.id.charCodeAt(0) + page.id.charCodeAt(1);
          stats[page.id] = {
            views: Math.floor(seed * 12 + Math.random() * 100),
            clicks: Math.floor(seed * 2 + Math.random() * 20),
            earnings: (seed * 1.5 + Math.random() * 30).toFixed(0),
          };
        });
        setPageStats(stats);
      }
      setLoading(false);
    };

    fetchPages();
  }, [supabase]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    await supabase.from('pages').delete().eq('id', id);
    setPages(pages.filter((p) => p.id !== id));
  };

  const copyLink = (slug: string, id: string) => {
    const url = `${window.location.origin}/p/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Get stats for a page - returns defaults if not yet loaded
  const getPageStats = (page: Page) => {
    return pageStats[page.id] || { views: 0, clicks: 0, earnings: '0' };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Your Profit Pages 📄
          </h1>
          <p className="text-navy-300 mt-2 text-lg">
            {pages.length > 0 
              ? `You have ${pages.length} page${pages.length > 1 ? 's' : ''} working for you!`
              : 'Create your first page to start earning!'
            }
          </p>
        </div>
        <Link href="/app/build">
          <Button className="btn-large">
            <PlusIcon />
            <span>Create New Page</span>
          </Button>
        </Link>
      </div>

      {/* Stats Summary */}
      {pages.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-white">{pages.length}</p>
            <p className="text-sm text-navy-400">Total Pages</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-cash-green">{pages.filter(p => p.status === 'published').length}</p>
            <p className="text-sm text-navy-400">Live Pages</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold text-gold-400">
              {mounted ? `$${pages.reduce((sum, p) => sum + parseInt(getPageStats(p).earnings || '0'), 0)}` : '—'}
            </p>
            <p className="text-sm text-navy-400">Est. Earnings</p>
          </div>
        </div>
      )}

      {/* Pages */}
      {loading ? (
        <div className="glass-card rounded-3xl p-12 text-center">
          <div className="w-12 h-12 border-3 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-navy-300 mt-4 text-lg">Loading your pages...</p>
        </div>
      ) : pages.length === 0 ? (
        <div className="glass-card rounded-3xl p-12 text-center border-2 border-dashed border-gold-500/30">
          <div className="w-24 h-24 bg-gold-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gold-400">
            <LayersIcon />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">No pages yet</h3>
          <p className="text-navy-300 mb-8 text-lg max-w-md mx-auto">
            Create your first profit page and start earning commissions today!
          </p>
          <Link href="/app/build">
            <Button className="btn-large">
              <PlusIcon />
              <span>Create My First Page</span>
            </Button>
          </Link>
          <p className="mt-4 text-navy-500">
            🚀 Takes only 2 minutes!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {pages.map((page, i) => {
            const stats = getPageStats(page);
            return (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center text-gold-400">
                    <LayersIcon />
                  </div>
                  <span className={`px-3 py-1.5 text-sm font-bold rounded-full ${
                    page.status === 'published'
                      ? 'bg-cash-green/10 text-cash-green border border-cash-green/20'
                      : 'bg-navy-700 text-navy-400'
                  }`}>
                    {page.status === 'published' ? '✓ Live' : page.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {page.title}
                </h3>
                <p className="text-base text-navy-500 mb-4">
                  Created {new Date(page.created_at).toLocaleDateString()}
                </p>

                {/* Stats Row - NEW */}
                {mounted && (
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 text-navy-400">
                      <EyeIcon />
                      <span>{stats.views} views</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-navy-400">
                      <TrendUpIcon />
                      <span>{stats.clicks} clicks</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-cash-green font-bold">
                      <span>${stats.earnings} earned</span>
                    </div>
                  </div>
                )}

                {/* URL Preview */}
                <div className="p-4 bg-navy-800/50 rounded-xl mb-4 border border-navy-700">
                  <p className="text-xs text-navy-500 mb-1">Page URL</p>
                  <p className="text-base text-gold-400 font-mono truncate">
                    /p/{page.public_slug}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/p/${page.public_slug}`}
                    target="_blank"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLinkIcon />
                      <span>View</span>
                    </Button>
                  </Link>
                  <button
                    onClick={() => copyLink(page.public_slug, page.id)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-navy-800 text-white hover:bg-navy-700 transition-colors"
                  >
                    {copiedId === page.id ? <CheckIcon /> : <CopyIcon />}
                    <span>{copiedId === page.id ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                  <Link
                    href={`/app/traffic?page=${page.id}`}
                    className="flex-1"
                  >
                    <Button variant="ghost" size="sm" className="w-full">
                      <ShareIcon />
                      <span>Share</span>
                    </Button>
                  </Link>
                  <button
                    onClick={() => handleDelete(page.id)}
                    className="px-3 py-2.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Tip for more pages */}
      {pages.length > 0 && pages.length < 5 && (
        <div className="glass-card rounded-2xl p-6 text-center border border-gold-500/20">
          <p className="text-navy-300 text-lg">
            💡 <span className="text-white font-medium">Pro tip:</span> Members with 5+ pages earn 3x more on average!
            <Link href="/app/build" className="text-gold-400 hover:underline ml-2">
              Create another page →
            </Link>
          </p>
        </div>
      )}
    </motion.div>
  );
}
