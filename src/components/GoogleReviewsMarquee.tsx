'use client';

import React, { useState, useEffect } from 'react';
import { googleReviews as defaultGoogleReviews, googleReviewStats as defaultGoogleReviewStats } from '../data/mockData';
import { GoogleReview } from '../types';
import { Star, ExternalLink, CheckCircle2, RefreshCw } from 'lucide-react';

interface GoogleReviewsMarqueeProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

export const GoogleReviewsMarquee: React.FC<GoogleReviewsMarqueeProps> = ({
  title = 'Student & Parent Experiences',
  subtitle = 'Real reviews and feedback from our Google Business Profiles across Ahmedabad.',
  showStats = true,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<'All' | 'Maninagar' | 'Vastral'>('All');
  const [reviews, setReviews] = useState<GoogleReview[]>(defaultGoogleReviews);
  const [stats, setStats] = useState(defaultGoogleReviewStats);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Attempt to fetch live Google Reviews if API route / credentials exist
    const fetchLiveReviews = async () => {
      try {
        const branchParam =
          selectedBranch === 'All' ? '' : `?branch=${selectedBranch.toLowerCase()}`;
        const res = await fetch(`/api/google-reviews${branchParam}`);
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.success && data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          if (data.stats) {
            setStats((prev) => ({ ...prev, ...data.stats }));
          }
          setIsLive(data.isLive || false);
        }
      } catch (e) {
        // Fallback gracefully to default mock data
      }
    };

    fetchLiveReviews();
  }, [selectedBranch]);

  const filteredReviews =
    selectedBranch === 'All'
      ? reviews
      : reviews.filter((r) => r.branch.toLowerCase().includes(selectedBranch.toLowerCase()));

  // Double the list for seamless continuous infinite marquee loop
  const marqueeItems = [...filteredReviews, ...filteredReviews, ...filteredReviews];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Google Badge & Statistics */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-2xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google Maps Verified Reviews</span>
              {isLive && (
                <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live Sync
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {subtitle}
            </p>
          </div>

          {/* Rating Summary Pill Box */}
          {showStats && (
            <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-black text-gray-900 tracking-tight">
                  {stats.averageRating}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-500 font-medium">
                    Based on {stats.totalReviews}+ Google reviews
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gray-200" />

              <a
                href={stats.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold rounded-xl border border-gray-200 transition inline-flex items-center gap-1.5"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
              </a>
            </div>
          )}
        </div>

        {/* Campus Filter Pills (Responsive Non-scrollable Wrap on Mobile) */}
        <div className="flex flex-wrap items-center gap-2 pb-1">
          {(['All', 'Maninagar', 'Vastral'] as const).map((branch) => (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedBranch === branch
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {branch === 'All' ? 'All Reviews' : `${branch} Campus`}
            </button>
          ))}
          <span className="text-[11px] text-gray-400 ml-auto hidden sm:inline">
            Hover over any card to pause scrolling
          </span>
        </div>
      </div>

      {/* Infinite Card Marquee Track */}
      <div className="relative mt-6">
        {/* Gradient Edge Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Container */}
        <div className="flex animate-marquee w-max py-4 gap-5">
          {marqueeItems.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[310px] sm:w-[360px] bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between space-y-4 flex-shrink-0 card-hover-effect group"
            >
              <div className="space-y-3.5">
                {/* Card Top: Google Icon, 5 Stars & Relative Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {review.relativeTimeDescription}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal line-clamp-4 group-hover:line-clamp-none transition-all">
                  "{review.text}"
                </p>
              </div>

              {/* Card Footer: Reviewer Info + Branch Badge */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={review.authorPhotoUrl}
                    alt={review.authorName}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                        {review.authorName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    </div>
                    <p className="text-[10px] text-gray-500 truncate">
                      {review.badge || review.tag}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {review.branch.includes('Maninagar') ? 'Maninagar' : 'Vastral'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA for Trust */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Real, authentic feedback submitted by enrolled students &amp; parents.</span>
        </div>
        <a
          href={stats.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 font-bold inline-flex items-center gap-1"
        >
          View all {stats.totalReviews}+ Google Reviews on Google Maps <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};
