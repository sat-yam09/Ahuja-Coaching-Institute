'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, Search, X, Sparkles, ArrowRight, Trophy, Calendar, ChevronDown, ChevronLeft, ChevronRight, GraduationCap, School, SlidersHorizontal } from 'lucide-react';
import { ShowcaseStudent } from '../types';
import { showcaseStudents } from '../data/mockData';

// Primary active filter tabs with counts
const FILTER_TABS = [
  { id: 'All', label: 'All' },
  { id: '10th Board', label: '10th Board' },
  { id: '9th Foundation', label: '9th Foundation' },
  { id: '8th Foundation', label: '8th Foundation' },
  { id: '12th Science', label: '12th Science' },
  { id: 'Physics', label: 'Physics' },
  { id: 'Maths', label: 'Maths' },
  { id: 'Chemistry', label: 'Chemistry' },
  { id: 'Biology', label: 'Biology' },
  { id: 'JEE Main', label: 'JEE Main' },
  { id: 'NEET UG', label: 'NEET UG' },
] as const;

// Compact sliding pagination range for desktop, tablet, and mobile
const getPaginationRange = (current: number, total: number): (number | string)[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, '...', total];
  }
  if (current >= total - 2) {
    return [1, '...', total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
};

interface StudentShowcaseProps {
  id?: string;
  showHeading?: boolean;
  title?: string;
  subtitle?: string;
  onViewMore?: () => void;
  previewLimit?: number;
  showFilters?: boolean;
  showPagination?: boolean;
}

export const StudentShowcase: React.FC<StudentShowcaseProps> = ({
  id,
  showHeading = true,
  title,
  subtitle,
  onViewMore,
  previewLimit,
  showFilters = true,
  showPagination = true,
}) => {
  const [selectedYear, setSelectedYear] = useState<'All' | '2025-26' | '2024-25'>('2025-26');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'marks' | 'year' | 'class' | 'name'>('class');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState<boolean>(true);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Responsive page size: 12 cards for desktop/tablet (3 rows on desktop 4-column grid), 8 cards for mobile
  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== 'undefined') {
        setIsDesktopOrTablet(window.innerWidth >= 640);
      }
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Reset page whenever filters or search criteria change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear, activeFilter, searchQuery, sortBy]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper function to check if student matches active tab
  const checkTabMatch = (s: ShowcaseStudent, tabId: string): boolean => {
    if (tabId === 'All') return true;
    if (tabId === '12th Science') return s.category === '12th Science' || Boolean(s.grade && s.grade.includes('12th'));
    if (tabId === '10th Board') return Boolean(s.grade && s.grade.includes('10th')) || s.subjects.includes('10th Board') || s.subjects.includes('10th');
    if (tabId === '9th Foundation' || tabId === '9th Class') return Boolean(s.grade && s.grade.includes('9th')) || s.subjects.includes('9th Foundation') || s.subjects.includes('9th') || s.category === '9th Foundation';
    if (tabId === '8th Foundation') return Boolean(s.grade && s.grade.includes('8th')) || s.subjects.includes('8th Foundation') || s.subjects.includes('8th') || s.category === '8th Foundation';
    if (tabId === 'Foundation') return s.category === 'Foundation' || Boolean(s.grade && (s.grade.includes('7th') || s.grade.includes('8th') || s.grade.includes('9th') || s.grade.includes('10th')));
    if (tabId === 'JEE Main' || tabId === 'JEE') return s.category === 'JEE' || s.subjects.includes('JEE') || s.subjects.includes('JEE Main');
    if (tabId === 'NEET UG' || tabId === 'NEET') return s.category === 'NEET' || s.subjects.includes('NEET') || s.subjects.includes('NEET UG');

    // Strict filter for individual science subjects: Maths, Chemistry, Physics, Biology
    // ONLY includes 12th Science students. Excludes any 10th or 8th students.
    if (['Maths', 'Chemistry', 'Physics', 'Biology'].includes(tabId)) {
      const is12thScience = s.category === '12th Science' || Boolean(s.grade && s.grade.includes('12th'));
      return is12thScience && s.subjects.includes(tabId);
    }

    return s.subjects.includes(tabId);
  };

  // Tab counts calculation respecting current selectedYear
  const getTabCount = (tabId: string): number => {
    return showcaseStudents.filter((s) => {
      if (selectedYear !== 'All' && s.year !== selectedYear) return false;
      return checkTabMatch(s, tabId);
    }).length;
  };

  // Filter students based on year dropdown, active filter tab, and search query
  const filteredStudents: ShowcaseStudent[] = showcaseStudents.filter((student) => {
    // 1. Year / Batch dropdown filter
    if (selectedYear !== 'All' && student.year !== selectedYear) {
      return false;
    }

    // 2. Tab filter check
    const matchesTab = checkTabMatch(student, activeFilter);

    // 3. Search query check
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      student.name.toLowerCase().includes(query) ||
      student.category.toLowerCase().includes(query) ||
      (student.grade && student.grade.toLowerCase().includes(query)) ||
      (student.exam && student.exam.toLowerCase().includes(query)) ||
      (student.school && student.school.toLowerCase().includes(query)) ||
      (student.scoreDisplay && student.scoreDisplay.toLowerCase().includes(query)) ||
      student.subjects.some((sub) => sub.toLowerCase().includes(query)) ||
      (student.marks &&
        Object.entries(student.marks).some(
          ([subj, score]) =>
            subj.toLowerCase().includes(query) ||
            score.toString().includes(query)
        ));

    return matchesTab && matchesSearch;
  });

  // Sort students according to selected sort criteria
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    // If filtering by a specific subject and default sort is active, rank by that subject's score descending
    if (['Maths', 'Chemistry', 'Physics', 'Biology'].includes(activeFilter) && sortBy === 'default') {
      const markA = (a.marks && a.marks[activeFilter]) || 0;
      const markB = (b.marks && b.marks[activeFilter]) || 0;
      if (markA !== markB) {
        return markB - markA;
      }
    }

    if (sortBy === 'marks') {
      const scoreA = a.topScore && a.topScore > 100 ? 99.5 : (a.topScore || 0);
      const scoreB = b.topScore && b.topScore > 100 ? 99.5 : (b.topScore || 0);
      return scoreB - scoreA;
    }
    if (sortBy === 'year') {
      if (a.year === b.year) {
        const scoreA = a.topScore && a.topScore > 100 ? 99.5 : (a.topScore || 0);
        const scoreB = b.topScore && b.topScore > 100 ? 99.5 : (b.topScore || 0);
        return scoreB - scoreA;
      }
      return a.year === '2025-26' ? -1 : 1;
    }
    if (sortBy === 'class') {
      const classRank = (s: ShowcaseStudent) => {
        const g = s.grade || s.category;
        if (g.includes('12th')) return 0;
        if (g.includes('10th Board')) return 1;
        if (g.includes('10th Foundation')) return 2;
        if (g.includes('9th')) return 3;
        if (g.includes('8th')) return 4;
        return 5;
      };
      if (classRank(a) !== classRank(b)) {
        return classRank(a) - classRank(b);
      }
      const scoreA = a.topScore && a.topScore > 100 ? 99.5 : (a.topScore || 0);
      const scoreB = b.topScore && b.topScore > 100 ? 99.5 : (b.topScore || 0);
      return scoreB - scoreA;
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    // 'default': pre-sorted by Year -> Class -> Marks in mockData
    return 0;
  });

  const effectiveLimit = previewLimit || (!showPagination ? 8 : undefined);
  const displayedStudents = effectiveLimit
    ? sortedStudents.slice(0, effectiveLimit)
    : sortedStudents;
  const hasMore = effectiveLimit ? sortedStudents.length > effectiveLimit : false;

  return (
    <section id={id} ref={cardsContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 scroll-mt-24">
      {/* ── Section Header (Conditional) ── */}
      {showHeading && (
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
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

      {/* ── Search & Filter Pill Bar ── */}
      {showFilters && (
        <div className="bg-gray-50 p-4 sm:p-6 rounded-3xl border border-gray-200 space-y-4 shadow-xs">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                  <Calendar className="w-4 h-4 text-red-600" />
                  <span className="hidden sm:inline">Batch:</span>
                </span>
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value as 'All' | '2025-26' | '2024-25')}
                    aria-label="Filter by Academic Batch"
                    className="w-full sm:w-auto appearance-none pl-3.5 pr-9 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-black text-gray-900 focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/15 cursor-pointer shadow-xs"
                  >
                    <option value="All">All Batches (2024–26)</option>
                    <option value="2025-26">2025–26 Results (Latest Board)</option>
                    <option value="2024-25">2024–25 Results (Brochure Stars)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {selectedYear !== 'All' && (
                  <button
                    onClick={() => setSelectedYear('All')}
                    className="px-2.5 py-1 text-[11px] font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition border border-red-200 cursor-pointer"
                    title="Reset batch filter"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                  <SlidersHorizontal className="w-4 h-4 text-red-600" />
                  <span className="hidden sm:inline">Sort:</span>
                </span>
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    aria-label="Sort Achievers"
                    className="w-full sm:w-auto appearance-none pl-3.5 pr-9 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-black text-gray-900 focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/15 cursor-pointer shadow-xs"
                  >
                    <option value="default">Year, Class &amp; Marks</option>
                    <option value="marks">Highest Marks (Top Score)</option>
                    <option value="year">Batch Year (2025–26 First)</option>
                    <option value="class">Class (12th &gt; 10th &gt; Foundation)</option>
                    <option value="name">Name (A–Z)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search student name, exam, score, or subject..."
                className="w-full pl-11 pr-10 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/15 text-gray-900 placeholder:text-gray-400 shadow-xs"
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
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-gray-200/70">
            {FILTER_TABS.map((tab) => {
              const count = getTabCount(tab.id);
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-red-600/20 scale-102'
                      : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`ml-1.5 text-[11px] ${isSelected ? 'text-white/90' : 'text-gray-500 font-semibold'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}

            {onViewMore && (
              <button
                onClick={onViewMore}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 text-xs font-bold transition-all cursor-pointer shadow-xs group ml-auto"
                title="Open full scoreboard page"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Cards Grid ── */}
      {filteredStudents.length === 0 ? (
        <div className="p-10 sm:p-14 bg-white rounded-3xl border border-gray-200 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              No students found matching your criteria
            </h3>
            <p className="text-xs text-gray-500">
              Try switching academic batches, adjusting your search, or selecting another subject tab.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('All');
              setSelectedYear('2025-26');
              setSortBy('class');
            }}
            className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl hover:bg-red-600 transition cursor-pointer"
          >
            Reset Search &amp; Filters
          </button>
        </div>
      ) : (
        (() => {
          const pageSize = isDesktopOrTablet ? 12 : 8;
          const totalPages = Math.ceil(displayedStudents.length / pageSize);
          const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
          const paginatedStudents = displayedStudents.slice(
            (safeCurrentPage - 1) * pageSize,
            safeCurrentPage * pageSize
          );

          const renderStudentCard = (student: ShowcaseStudent) => {
            const hasMarks = student.marks && Object.keys(student.marks).length > 0;
            const isNeet = student.scoreDisplay && student.scoreDisplay.includes('NEET');
            const isJee = student.scoreDisplay && (student.scoreDisplay.includes('JEE') || student.scoreDisplay.includes('%ile'));

            const isSubjectFilter = ['Maths', 'Chemistry', 'Physics', 'Biology'].includes(activeFilter);
            const activeSubjectScore = isSubjectFilter && student.marks ? student.marks[activeFilter] : undefined;
            const activeSubjectRank = isSubjectFilter && student.ranks ? student.ranks[activeFilter] : undefined;

            const cardImage = (() => {
              if (isSubjectFilter && student.year === '2025-26') {
                let filename = `${student.name}.png`;
                if (student.name === 'Hanna Pathan') filename = 'hanna Pathan.png';
                if (student.name === 'Om Parmar') filename = 'Om parmar.png';
                return `/Converted Student of 25-26/${activeFilter}/${filename}`;
              }
              return student.imagePath;
            })();

            return (
              <div
                key={student.id}
                className="group relative bg-[#FAF8F5] rounded-3xl border border-[#F0EBE1] hover:border-red-400 p-5 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between text-center overflow-hidden"
              >
                <div className="absolute top-3.5 left-3.5 z-20 flex flex-col items-start gap-1">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider shadow-2xs border ${
                      student.year === '2025-26'
                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}
                  >
                    {student.year || '2025-26'}
                  </span>
                  {student.grade && (
                    <span className="px-2 py-0.5 rounded-md text-[9px] font-black text-gray-700 bg-white/95 border border-gray-200/90 shadow-2xs">
                      {student.grade}
                    </span>
                  )}
                </div>

                <div className="absolute top-3.5 right-3.5 z-20">
                  {isSubjectFilter && activeSubjectScore ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-black shadow-md tracking-wider uppercase">
                      <Trophy className="w-3 h-3 text-amber-300" />
                      <span>{activeFilter}: {activeSubjectScore}/100{activeSubjectRank ? ` (#${activeSubjectRank})` : ''}</span>
                    </div>
                  ) : isNeet ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-[10px] font-black shadow-md tracking-wider uppercase">
                      <Trophy className="w-3 h-3 text-amber-300" />
                      <span>{student.scoreDisplay}</span>
                    </div>
                  ) : isJee ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-[10px] font-black shadow-md tracking-wider uppercase">
                      <Sparkles className="w-3 h-3 text-cyan-200" />
                      <span>{student.scoreDisplay}</span>
                    </div>
                  ) : student.topScore && student.topScore >= 95 ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-black shadow-md tracking-wider uppercase">
                      <Sparkles className="w-3 h-3 text-amber-200" />
                      <span>Top {student.topScore}/100</span>
                    </div>
                  ) : student.topScore && student.topScore >= 90 ? (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-black shadow-md tracking-wider uppercase">
                      <Trophy className="w-3 h-3 text-amber-300" />
                      <span>Top {student.topScore}/100</span>
                    </div>
                  ) : student.topScore ? (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-[10px] font-extrabold uppercase">
                      <span>{student.topScore}/100</span>
                    </div>
                  ) : student.scoreDisplay ? (
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-bold border border-red-200 uppercase tracking-wide">
                      <span>{student.scoreDisplay}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold border border-gray-200 uppercase tracking-wide">
                      <span>Board Achiever</span>
                    </div>
                  )}
                </div>

                {/* Portrait */}
                <div className="relative w-full h-[280px] flex items-center justify-center mb-2 mt-4">
                  {cardImage && (
                    <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                      <img
                        src={cardImage}
                        alt={`${student.name} – Ahuja Career Institute`}
                        className="w-full h-full object-contain select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  )}
                </div>

                <div className="w-full space-y-2 pt-3 border-t border-[#EAE4D8] flex flex-col items-center mt-auto">
                  <h3 className="text-base font-black text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight leading-tight">
                    {student.name}
                  </h3>
                  {(student.exam || student.school) && (
                    <div className="text-[11px] font-semibold text-gray-500 flex items-center justify-center gap-1">
                      {student.school ? (
                        <span className="flex items-center gap-1">
                          <School className="w-3 h-3 text-red-500" />
                          <span>{student.school}</span>
                        </span>
                      ) : (
                        <span className="truncate max-w-[200px]">{student.exam}</span>
                      )}
                    </div>
                  )}

                  {hasMarks ? (
                    <div className="w-full space-y-1.5 pt-1">
                      <div className="text-[10px] uppercase font-extrabold tracking-wider text-gray-500 flex items-center justify-center gap-1">
                        <span>Official Subject Marks</span>
                        <span className="text-red-600 font-black">(/100)</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-1.5">
                        {Object.entries(student.marks!).map(([subject, score]) => {
                          let colorClasses = 'bg-sky-50 text-sky-900 border-sky-200';
                          let pillScoreColor = 'text-sky-700';
                          if (subject === 'Physics') {
                            colorClasses = 'bg-sky-50 text-sky-900 border-sky-200';
                            pillScoreColor = 'text-sky-700';
                          } else if (subject === 'Chemistry') {
                            colorClasses = 'bg-amber-50 text-amber-900 border-amber-200';
                            pillScoreColor = 'text-amber-800';
                          } else if (subject === 'Maths') {
                            colorClasses = 'bg-emerald-50 text-emerald-900 border-emerald-200';
                            pillScoreColor = 'text-emerald-700';
                          } else if (subject === 'Biology') {
                            colorClasses = 'bg-purple-50 text-purple-900 border-purple-200';
                            pillScoreColor = 'text-purple-700';
                          } else if (subject === 'Science') {
                            colorClasses = 'bg-teal-50 text-teal-900 border-teal-200';
                            pillScoreColor = 'text-teal-700';
                          } else if (subject === 'Social Science') {
                            colorClasses = 'bg-orange-50 text-orange-900 border-orange-200';
                            pillScoreColor = 'text-orange-700';
                          } else if (subject === 'English') {
                            colorClasses = 'bg-indigo-50 text-indigo-900 border-indigo-200';
                            pillScoreColor = 'text-indigo-700';
                          }
                          const rank = student.ranks ? student.ranks[subject] : undefined;

                          return (
                            <div
                              key={subject}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-black border shadow-2xs transition-all hover:scale-105 ${colorClasses}`}
                            >
                              <span className="uppercase text-[10px] font-bold tracking-wide">{subject}</span>
                              <span className={`text-[13px] font-black bg-white px-1.5 py-0.2 rounded-md shadow-2xs ${pillScoreColor}`}>
                                {score}
                              </span>
                              {rank && rank <= 3 && (
                                <span className="text-[9px] font-extrabold text-amber-600" title={`Subject Rank #${rank}`}>
                                  #{rank}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : student.scoreDisplay ? (
                    <div className="pt-1">
                      <span className="inline-block px-3 py-1 bg-red-50 border border-red-200 text-red-700 font-black text-xs rounded-xl shadow-2xs">
                        {student.scoreDisplay}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center justify-center gap-1 min-h-[26px] pt-1">
                      {student.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-lg bg-red-50 text-red-700 border border-red-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          };

          return (
            <div className="space-y-6 sm:space-y-8 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-stretch">
                {paginatedStudents.map(renderStudentCard)}
              </div>

              {showPagination && totalPages > 1 && (
                <div className="flex flex-col items-center gap-2.5 pt-4">
                  <div className="flex items-center justify-between w-full max-w-sm sm:max-w-md bg-white border border-gray-200 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xs">
                    <button
                      onClick={() => handlePageChange(Math.max(1, safeCurrentPage - 1))}
                      disabled={safeCurrentPage === 1}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs sm:text-sm font-bold text-gray-700 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden xs:inline">Prev</span>
                    </button>

                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {getPaginationRange(safeCurrentPage, totalPages).map((pageItem, idx) => {
                        if (typeof pageItem === 'string') {
                          return (
                            <span
                              key={`ellipsis-${idx}`}
                              className="w-5 sm:w-6 text-center text-xs sm:text-sm font-bold text-gray-400 select-none"
                            >
                              …
                            </span>
                          );
                        }
                        const isCurrent = safeCurrentPage === pageItem;
                        return (
                          <button
                            key={`page-${pageItem}`}
                            onClick={() => handlePageChange(pageItem)}
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
                              isCurrent
                                ? 'bg-red-600 text-white shadow-md shadow-red-600/20 ring-2 ring-red-600/20'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            aria-label={`Go to page ${pageItem}`}
                            aria-current={isCurrent ? 'page' : undefined}
                          >
                            {pageItem}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(Math.min(totalPages, safeCurrentPage + 1))}
                      disabled={safeCurrentPage === totalPages}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-xs sm:text-sm font-bold text-gray-700 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                      aria-label="Next Page"
                    >
                      <span className="hidden xs:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs font-bold text-gray-400">
                    Page {safeCurrentPage} of {totalPages} • Showing {paginatedStudents.length} of {displayedStudents.length} achievers
                  </p>
                </div>
              )}
            </div>
          );
        })()
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
