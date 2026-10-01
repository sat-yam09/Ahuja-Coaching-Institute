'use client';

import React from 'react';
import { PageTab } from '../types';
import {
  aboutStats,
} from '../data/mockData';
import {
  ArrowRight,
  Compass,
  Target,
  Sparkles,
  Building2,
  Shield,
  BookOpen,
  Trophy,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onInquireClick }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION (Unified Hero Layout matching HomePage, Courses, and Contact) */}
      <section className="relative pt-12 sm:pt-20 pb-4 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>ESTABLISHED 1998 • 27+ YEARS OF EXCELLENCE</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Our Legacy of <br />
            <span className="text-red-600">Empowering Students</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            For over two decades, Ahuja Career Institute has been the cornerstone of academic success, blending traditional discipline with modern educational methodologies across Ahmedabad.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => setActiveTab('courses')}
              className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-red-600/20 active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              Explore Programs <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#journey-timeline-section"
              className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl text-sm transition cursor-pointer"
            >
              View 27-Year Journey ↓
            </a>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative pt-6 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/assets/gallery/gallery-director-office.jpg"
                alt="Director Desk & Academic Governance at Ahuja Career Institute"
                className="w-full h-64 sm:h-96 object-cover group-hover:scale-102 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    Est. 1998 Ahmedabad
                  </span>
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    Maninagar HQ &amp; Vastral Campuses
                  </span>
                </div>
                <p className="text-white text-base sm:text-xl font-bold">
                  27 Years of Concept-First Coaching, Individual Mentorship &amp; Proven Academic Pedagogy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR & VISIONARY LEADERSHIP (Midnight Obsidian Background - Compact Layout) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-5 sm:p-7 border border-gray-800 shadow-2xl space-y-6">
        {/* Stats Grid */}
        <div className="bg-gray-900/90 rounded-2xl border border-gray-800 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center shadow-md">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-extrabold text-red-500">{st.value}</div>
              <div className="text-[10px] sm:text-[11px] text-gray-300 font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Visionary Leadership: Founder & Director Grid */}
        <div className="space-y-5">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest font-mono">
              LEADERSHIP &amp; GUIDING LIGHT
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
              The Minds Shaping Our <span className="text-red-500">27-Year Legacy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {/* Card 1: Late Rajkumar Ahuja Sir (Founder) */}
            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-3 hover:border-gray-700 transition">
              <div className="space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/assets/Founder - Rajkumar Ahuja.jpeg"
                      alt="Late Rajkumar Ahuja Sir - Founder"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover object-top border-2 border-red-500/40 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-bold rounded shadow-xs">
                      Founder
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                      Late Rajkumar Ahuja Sir
                    </h3>
                    <p className="text-[11px] font-bold text-red-400 uppercase tracking-wide mt-0.5">
                      The Visionary Founder (Est. 1998)
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-gray-400">
                      Pioneer of Concept-First Coaching in Ahmedabad
                    </p>
                  </div>
                </div>

                <div className="bg-[#121316] p-2.5 sm:p-3 rounded-xl border border-gray-800/80">
                  <p className="text-xs text-gray-200 italic font-medium leading-snug">
                    "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined."
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                <span>Core Pillar: Dedicated Pedagogy</span>
                <span className="text-red-400 font-bold font-mono">1998 — Everlasting</span>
              </div>
            </div>

            {/* Card 2: Sunil Ahuja (Director) */}
            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-3 hover:border-gray-700 transition">
              <div className="space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/assets/Director - Sunil Ahuja.jpeg"
                      alt="Sunil Ahuja - Director"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover object-top border-2 border-red-500/40 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-bold rounded shadow-xs">
                      Director
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                      Sunil Ahuja
                    </h3>
                    <p className="text-[11px] font-bold text-red-400 uppercase tracking-wide mt-0.5">
                      Director, Ahuja Career Institute
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-gray-400">
                      Academic Leadership &amp; Student Mentorship
                    </p>
                  </div>
                </div>

                <div className="bg-[#121316] p-2.5 sm:p-3 rounded-xl border border-gray-800/80">
                  <p className="text-xs text-gray-200 italic font-medium leading-snug">
                    "Every student possesses immense potential. With structured doubt clearing and personal care, top ranks become natural."
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                <span>Direction: Academic Excellence</span>
                <button
                  onClick={onInquireClick}
                  className="text-red-400 hover:text-red-300 font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  Connect with Mentors <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE PHILOSOPHY - All 3 Cards with Photo Headers in Unified Theme */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-block px-3 py-1 bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold uppercase tracking-wider rounded-full">
            Our Guiding Foundations
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Core <span className="text-red-600">Philosophy</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            The values that drive every class, mentor session, and test evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Conceptual Mastery */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col group">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
                alt="Conceptual Mastery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-red-600 text-[10px] font-extrabold rounded-md shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Pillar 01
              </span>
            </div>
            <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Conceptual Mastery
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We prioritize deep understanding over rote learning, ensuring students grasp the fundamental mechanics of every subject.
                </p>
              </div>
              <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                <span>Core Pedagogy</span>
                <span className="text-red-500 font-bold">Deep Foundation</span>
              </div>
            </div>
          </div>

          {/* Card 2: Unwavering Discipline */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col group">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
                alt="Unwavering Discipline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-red-600 text-[10px] font-extrabold rounded-md shadow-xs flex items-center gap-1">
                <Shield className="w-3 h-3" /> Pillar 02
              </span>
            </div>
            <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Unwavering Discipline
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A structured environment that instills punctuality, focus, and the resilience required to conquer competitive exams and board exams.
                </p>
              </div>
              <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                <span>Academic Rigor</span>
                <span className="text-red-500 font-bold">Focus &amp; Punctuality</span>
              </div>
            </div>
          </div>

          {/* Card 3: Student-Centric Growth */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col group">
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                alt="Student-Centric Growth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-xs text-red-600 text-[10px] font-extrabold rounded-md shadow-xs flex items-center gap-1">
                <Target className="w-3 h-3" /> Pillar 03
              </span>
            </div>
            <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  Student-Centric Growth
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Personalized mentoring pathways designed to identify individual strengths and systematically eliminate weaknesses.
                </p>
              </div>
              <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-400">
                <span>Personal Care</span>
                <span className="text-red-500 font-bold">Mentorship Desks</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. OUR 27+ YEAR JOURNEY: BENTO GRID TIMELINE (Modern, Elegant, Non-Scrolljacked) */}
      <section id="journey-timeline-section" className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto">
        <div className="bg-[#18191B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-800 shadow-2xl space-y-8 sm:space-y-10">
          {/* Section Header */}
          <div className="text-center space-y-2.5 max-w-2xl mx-auto">
            <div className="inline-block px-3.5 py-1 bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-bold uppercase tracking-wider rounded-full font-mono">
              1998 — 2026 • 27-YEAR LEGACY BENTO
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 27+ Year <span className="text-red-500">Journey</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Explore the key evolutionary milestones that established Ahuja Career Institute as Ahmedabad's trusted hub of academic excellence.
            </p>
          </div>

          {/* Bento Grid Layout (12 Columns Desktop, Responsive Stack on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {/* Bento Card 1: 1998 Inception & Founder's Genesis (Large Featured 7-Cols) */}
            <div className="col-span-1 md:col-span-12 lg:col-span-7 bg-gradient-to-br from-[#1E2129] via-[#1A1C23] to-[#14161C] border border-gray-800 hover:border-red-500/60 p-6 sm:p-8 rounded-3xl relative overflow-hidden group shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              {/* Year Watermark */}
              <span className="font-mono text-7xl sm:text-8xl font-black text-white/[0.04] absolute -bottom-4 -right-2 pointer-events-none select-none">
                1998
              </span>
              {/* Ambient Red Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 bg-red-600 text-white font-mono font-black text-sm rounded-xl shadow-xs">
                      1998
                    </span>
                    <span className="px-3 py-1 bg-red-950/60 text-red-400 border border-red-800/40 text-[10px] font-bold uppercase tracking-wider rounded-xl font-mono">
                      Phase 01 • Genesis
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-sm">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Story */}
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    Humble Beginnings in Ghodasar
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Founded by Late Rajkumar Ahuja Sir with a small home setup in Ghodasar. Pioneered concept-first pedagogy over rote learning, instilling rigorous discipline and personalized mentoring that produced our first generation of Gujarat board toppers.
                  </p>
                </div>

                {/* Founder Quote Pill */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-gray-800/80 text-xs italic text-gray-300 font-medium">
                  "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined."
                  <span className="block text-[11px] text-red-400 font-semibold not-italic mt-1">— Late Rajkumar Ahuja Sir (Founder)</span>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" /> Ghodasar Home Batch
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Concept-First Pedagogy
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> 1-on-1 Mentorship
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-bold text-red-400">100% Board Pass Rate (1st Batch)</span>
                <span className="text-[11px] font-mono text-gray-500">The Inception of Excellence</span>
              </div>
            </div>

            {/* Bento Card 2: 2005 Expansion to Jawaharchowk (5-Cols) */}
            <div className="col-span-1 md:col-span-12 lg:col-span-5 bg-[#1E2129] border border-gray-800 hover:border-red-500/60 p-6 sm:p-8 rounded-3xl relative overflow-hidden group shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              {/* Year Watermark */}
              <span className="font-mono text-7xl sm:text-8xl font-black text-white/[0.04] absolute -bottom-4 -right-2 pointer-events-none select-none">
                2005
              </span>

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 bg-red-950/80 text-red-400 border border-red-800/40 font-mono font-black text-sm rounded-xl">
                      2005
                    </span>
                    <span className="px-2.5 py-1 bg-gray-800/60 text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-xl font-mono">
                      Phase 02 • Expansion
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Story */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    Expansion to Jawaharchowk
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Expanded into Jawaharchowk to accommodate surging demand. Introduced structured batch systems, regular weekend test series, and specialized board &amp; entrance tracks across Gujarat.
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" /> Jawaharchowk, Maninagar
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Weekend Test Series
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Board Specialization
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-bold text-red-400">500+ Students Milestone</span>
                <span className="text-[11px] font-mono text-gray-500">Systematic Testing</span>
              </div>
            </div>

            {/* Bento Card 3: 2014 Vastral Flagship Campus (4-Cols) */}
            <div className="col-span-1 md:col-span-6 lg:col-span-4 bg-[#1E2129] border border-gray-800 hover:border-red-500/60 p-6 sm:p-7 rounded-3xl relative overflow-hidden group shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <span className="font-mono text-7xl font-black text-white/[0.04] absolute -bottom-4 -right-2 pointer-events-none select-none">
                2014
              </span>

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-red-950/80 text-red-400 border border-red-800/40 font-mono font-black text-xs sm:text-sm rounded-xl">
                      2014
                    </span>
                    <span className="px-2 py-0.5 bg-gray-800/60 text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-lg font-mono">
                      Phase 03
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-sm">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Story */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    Vastral Flagship Campus
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Built our premier campus at 502 Avadh Pride, Nirant Cross Road. Features spacious lecture halls, dedicated faculty doubt desks, and Science &amp; Commerce divisions.
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> Nirant Cross Road
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-red-500" /> Doubt Resolution Desks
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-bold text-red-400">5,000+ Alumni</span>
                <span className="text-[10px] font-mono text-gray-500">Flagship Center</span>
              </div>
            </div>

            {/* Bento Card 4: 2020 Maninagar HQ & Digital Analytics (4-Cols) */}
            <div className="col-span-1 md:col-span-6 lg:col-span-4 bg-[#1E2129] border border-gray-800 hover:border-red-500/60 p-6 sm:p-7 rounded-3xl relative overflow-hidden group shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
              <span className="font-mono text-7xl font-black text-white/[0.04] absolute -bottom-4 -right-2 pointer-events-none select-none">
                2020
              </span>

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-red-950/80 text-red-400 border border-red-800/40 font-mono font-black text-xs sm:text-sm rounded-xl">
                      2020
                    </span>
                    <span className="px-2 py-0.5 bg-gray-800/60 text-gray-300 text-[10px] font-bold uppercase tracking-wider rounded-lg font-mono">
                      Phase 04
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Story */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    Maninagar HQ &amp; Smart Tech
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Inaugurated modern Head Office at Takshshila Square, Krishnabaug. Integrated smart interactive screens, recorded video lectures, and digital test analytics for NEET &amp; JEE.
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> Takshshila Square HQ
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-red-500" /> Hybrid Learning
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-bold text-red-400">15,000+ Enrolled</span>
                <span className="text-[10px] font-mono text-gray-500">Digital Analytics</span>
              </div>
            </div>

            {/* Bento Card 5: 2025-26 27+ Years Legacy (4-Cols Featured) */}
            <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-gradient-to-br from-[#232732] via-[#1E2129] to-[#15171D] border-2 border-red-500/50 hover:border-red-500 p-6 sm:p-7 rounded-3xl relative overflow-hidden group shadow-2xl shadow-red-950/30 transition-all duration-300 flex flex-col justify-between ring-2 ring-red-500/20 hover:-translate-y-1">
              <span className="font-mono text-7xl font-black text-white/[0.04] absolute -bottom-4 -right-2 pointer-events-none select-none">
                2026
              </span>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/15 rounded-full blur-xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white font-mono font-black text-xs sm:text-sm rounded-xl shadow-xs">
                      2025–26
                    </span>
                    <span className="px-2 py-0.5 bg-red-950/80 text-red-300 border border-red-800/50 text-[10px] font-bold uppercase tracking-wider rounded-lg font-mono">
                      Phase 05 • Legacy
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-red-600 border border-red-400/50 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Story */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    27+ Years of Excellence
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Over 22,000+ students guided with hundreds of 100/100 perfect board &amp; competitive exam scores. Continuing Late Rajkumar Ahuja Sir’s vision under Sunil Ahuja’s academic leadership.
                  </p>
                </div>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" /> Maninagar &amp; Vastral
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#121316] text-gray-300 border border-gray-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-red-500" /> 22,000+ Alumni Network
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 relative z-10">
                <span className="font-bold text-red-400">22,000+ Students Guided</span>
                <span className="text-[10px] font-mono text-gray-400">Silver Jubilee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-2">
        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready To Experience The Ahuja Difference?
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Take the first step towards academic excellence with Ahmedabad's trusted institute since 1998.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onInquireClick}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/20 cursor-pointer"
            >
              Inquire For Admissions
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl text-sm transition border border-gray-300 cursor-pointer shadow-xs"
            >
              Contact Campuses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
