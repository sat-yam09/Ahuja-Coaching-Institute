'use client';

import React, { useState } from 'react';
import { Award, Search, X, Sparkles, ArrowRight, Trophy } from 'lucide-react';
import { ShowcaseStudent } from '../types';
import { showcaseStudents } from '../data/mockData';

// Primary active filter tabs with counts
const PRIMARY_FILTER_TABS = [
  { id: 'All', label: 'All' },
  { id: 'Foundation', label: 'Foundation' },
  { id: 'Physics', label: 'Physics' },
  { id: 'Chemistry', label: 'Chemistry' },
  { id: 'Maths', label: 'Maths' },
  { id: 'Biology', label: 'Biology' },
] as const;

// Left-out stream filter tabs (to be filled out later as more cutouts are curated)
const LEFTOUT_FILTER_TABS = [
  { id: '12th Science', label: '12th Science' },
  { id: 'JEE Main', label: 'JEE Main' },
  { id: 'NEET UG', label: 'NEET UG' },
  { id: '10th Board', label: '10th Board' },
] as const;

const ALL_FILTER_TABS = [...PRIMARY_FILTER_TABS, ...LEFTOUT_FILTER_TABS];

interface StudentShowcaseProps {
  id?: string;
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  onViewMore?: () => void;
  previewLimit?: number;
}

export const StudentShowcase: React.FC<StudentShowcaseProps> = ({
  id,
  showHeading = true,
  title,
  subtitle,
  onViewMore,
  previewLimit,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Tab counts calculation
  const getTabCount = (tabId: string): number | null => {
    if (tabId === 'All') return showcaseStudents.length;
    if (tabId === 'Foundation') {
      return showcaseStudents.filter((s) => s.category === 'Foundation').length;
    }
    if (tabId === '12th Science') {
      return showcaseStudents.filter((s) => s.category === '12th Science').length;
    }
    if (['Physics', 'Chemistry', 'Maths', 'Biology'].includes(tabId)) {
      return showcaseStudents.filter((s) => s.subjects.includes(tabId)).length;
    }
    return null;
  };

  // Filter students based on active filter tab and search query
  const filteredStudents: ShowcaseStudent[] = showcaseStudents.filter((student) => {
    // 1. Tab filter check
    let matchesTab = true;
    if (activeFilter === 'All') {
      matchesTab = true;
    } else if (activeFilter === 'Foundation') {
      matchesTab = student.category === 'Foundation';
    } else if (activeFilter === '12th Science') {
      matchesTab = student.category === '12th Science';
    } else if (['Physics', 'Chemistry', 'Maths', 'Biology'].includes(activeFilter)) {
      matchesTab = student.subjects.includes(activeFilter);
    } else {
      // Stream tab where data is to be filled out later
      matchesTab = false;
    }

    // 2. Search query check
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      student.name.toLowerCase().includes(query) ||
      student.category.toLowerCase().includes(query) ||
      student.subjects.some((sub) => sub.toLowerCase().includes(query));

    return matchesTab && matchesSearch;
  });

  const displayedStudents = previewLimit
    ? filteredStudents.slice(0, previewLimit)
    : filteredStudents;
  const hasMore = previewLimit ? filteredStudents.length > previewLimit : false;

  const isLeftOutFilter = ['JEE Main', 'NEET UG', '10th Board'].includes(activeFilter);

  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* ── Section Header (Conditional) ── */}
      {showHeading && (
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4 text-red-600" />
            <span>Hall of Fame Achievers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            {title ? (
              title
            ) : (
              <>
                Celebrating <span className="text-red-600">Excellence</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {subtitle ||
              'Every champion has a story. Meet our stellar rankers who turned dreams into reality at Ahuja Career Institute.'}
          </p>

          {/* Quick Header Redirect to Scoreboard */}
          {onViewMore && (
            <div className="pt-1">
              <button
                onClick={onViewMore}
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-extrabold text-red-600 hover:text-red-700 hover:underline cursor-pointer group"
              >
                <span>View Full Official Scoreboard &amp; Ranks</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Search & Filter Pill Bar (Exact Standee Scoreboard System) ── */}
      <div className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Search Box */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student name, school, score, or exam..."
            className="w-full pl-11 pr-10 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-gray-900 placeholder:text-gray-400 shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xs font-bold p-1 cursor-pointer"
              title="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills with Counts */}
        <div className="flex flex-wrap items-center gap-2">
          {ALL_FILTER_TABS.map((tab) => {
            const count = getTabCount(tab.id);
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-red-600/20 scale-102'
                    : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300'
                }`}
              >
                <span>{tab.label}</span>
                {count !== null && (
                  <span className={`ml-1.5 text-[11px] ${isSelected ? 'text-white/90' : 'text-gray-500 font-semibold'}`}>
                    ({count})
                  </span>
                )}
              </button>
            );
          })}

          {/* Optional Direct Scoreboard Link inside Filter Bar */}
          {onViewMore && (
            <button
              onClick={onViewMore}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 text-xs font-bold transition-all cursor-pointer shadow-xs group"
              title="Open full scoreboard page"
            >
              <span>View More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Left-Out Filter State (Later will be filled out) ── */}
      {isLeftOutFilter ? (
        <div className="p-10 sm:p-14 bg-white rounded-3xl border border-gray-200 text-center space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-100">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {activeFilter} Achievers Being Curated
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              High-resolution student portraits for {activeFilter} are currently being processed and will be updated shortly. You can explore all our current verified achievers below.
            </p>
          </div>
          <button
            onClick={() => setActiveFilter('All')}
            className="px-5 py-2.5 bg-red-600 text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-red-700 transition shadow-sm cursor-pointer"
          >
            View All Current Achievers ({showcaseStudents.length})
          </button>
        </div>
      ) : filteredStudents.length === 0 ? (
        /* ── No Search Results State ── */
        <div className="p-10 sm:p-14 bg-white rounded-3xl border border-gray-200 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              No students found matching "{searchQuery}"
            </h3>
            <p className="text-xs text-gray-500">
              Try adjusting your search keywords or switching to another subject category.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('All');
            }}
            className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-red-600 transition cursor-pointer"
          >
            Reset Search &amp; Filters
          </button>
        </div>
      ) : (
        /* ── Card Grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2 items-stretch">
          {displayedStudents.map((student) => {
            return (
              <div
                key={student.id}
                className="group bg-[#FAF8F5] rounded-3xl border border-[#F0EBE1] hover:border-red-200 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(220,38,38,0.12)] p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all duration-300"
              >
                {/* ── Portrait Stage: Popout Cutout ── */}
                <div className="relative w-full h-[290px] sm:h-[310px] flex items-center justify-center mb-2">
                  <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105">
                    <img
                      src={student.imagePath}
                      alt={`${student.name} – Ahuja Career Institute achiever`}
                      className="w-full h-full object-contain select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* ── Student Information Beneath ── */}
                <div className="w-full space-y-2 pt-2 border-t border-[#EAE4D8] flex flex-col items-center">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-red-600 transition-colors">
                    {student.name}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-1 min-h-[26px]">
                    {student.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-full bg-red-50 text-red-700 border border-red-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-500 font-semibold tracking-wide uppercase">
                    {student.category === 'Foundation'
                      ? 'Std. 8th–10th Foundation'
                      : '12th Science Board'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── View More CTA Button (Redirects to Scoreboard Page) ── */}
      {onViewMore && (
        <div className="pt-6 sm:pt-10 flex flex-col items-center justify-center space-y-3 text-center">
          {hasMore && (
            <p className="text-xs sm:text-sm font-semibold text-gray-500">
              Showing preview of <span className="font-extrabold text-gray-900">{displayedStudents.length}</span> of{' '}
              <span className="font-extrabold text-red-600">{filteredStudents.length}</span> stellar rankers
            </p>
          )}
          <button
            onClick={onViewMore}
            className="inline-flex items-center space-x-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          >
            <Trophy className="w-5 h-5 text-amber-300" />
            <span>
              {hasMore
                ? `View All ${showcaseStudents.length} Achievers on Scoreboard`
                : 'Explore Complete Scoreboard Records'}
            </span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </section>
  );
};
