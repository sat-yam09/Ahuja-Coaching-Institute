'use client';

import React from 'react';
import { scoreboardStats, brandTagline } from '../data/mockData';
import { StudentShowcase } from '../components/StudentShowcase';
import {
  Sparkles,
  PhoneCall,
} from 'lucide-react';

interface ScoreboardPageProps {
  onInquireClick: () => void;
}

export const ScoreboardPage: React.FC<ScoreboardPageProps> = ({ onInquireClick }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white text-gray-900">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>{brandTagline.hindi} • Official Scoreboard</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Hall of <span className="text-red-600">Fame</span> &amp; Academic Milestones
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every percentile and distinction here reflects relentless discipline, individual teacher mentorship, and concept-first coaching across 12th Science, 10th Board, JEE, and NEET.
          </p>
        </div>
      </section>

      {/* 2. HIGHLIGHTS SCOREBOARD (Midnight Obsidian Background) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#18191B] rounded-3xl p-6 sm:p-10 border border-gray-800 shadow-2xl text-white">
          <div className="text-center mb-8 space-y-1">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono">
              PROVEN RESULTS SUMMARY
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Authentic Scores, Real Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {scoreboardStats.map((st, i) => (
              <div
                key={i}
                className="bg-gray-900/80 rounded-2xl p-5 border border-gray-800 text-center space-y-1 hover:border-red-500/50 transition duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500">
                  {st.value}
                </div>
                <div className="text-xs text-gray-300 font-semibold tracking-wide">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEARCH AND FILTERABLE STUDENT SCOREBOARD TABLE & CARDS (WITH 2024-25 & 2025-26 DROPDOWN) */}
      <div id="student-records-grid" className="scroll-mt-24">
        <StudentShowcase
          id="student-records-grid"
          showHeading={true}
          title="Verified Student Achievers Roster"
          subtitle="Explore our verified rankers with individual subject distinction records across batches."
        />
      </div>

      {/* 4. CALL TO ACTION: ADMISSION & ENQUIRY */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Be Next on Our Wall of Fame
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Admissions open for Std. 6th to 12th Science &amp; Commerce, JEE Main, and NEET UG batches. Experience the teaching philosophy that builds rankers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onInquireClick}
              className="px-6 py-3.5 bg-white text-red-600 font-extrabold text-xs sm:text-sm rounded-xl hover:bg-gray-100 transition shadow-lg cursor-pointer"
            >
              Inquire Now
            </button>
            <a
              href="tel:7405328676"
              className="px-5 py-3.5 bg-red-800/80 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-red-500/40 transition flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 74053 28676</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
