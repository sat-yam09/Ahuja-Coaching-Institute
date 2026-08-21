'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PageTab } from '../types';
import {
  aboutStats,
  institutionalPillars,
  journeyTimeline,
} from '../data/mockData';
import {
  ArrowRight,
  HeartHandshake,
  Compass,
  Target,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Award,
  GraduationCap,
  Building2,
  CheckCircle2,
  Shield,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onInquireClick }) => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineSectionRef = useRef<HTMLDivElement>(null);


  // ScrollTrigger listener for desktop horizontal translation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineSectionRef.current) return;
      const rect = timelineSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;

      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      setScrollProgress(progress);

      const targetIdx = Math.min(
        journeyTimeline.length - 1,
        Math.floor(progress * journeyTimeline.length)
      );
      if (targetIdx >= 0 && targetIdx < journeyTimeline.length) {
        setActiveTimelineIndex(targetIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shortDescs = [
    'Founded by Late R.A. Ahuja Sir with home setup in Ghodasar, pioneering concept-first pedagogy.',
    'Expanded to Jawaharchowk campus, structuring comprehensive Science & Commerce board batches.',
    'Established Vastral flagship campus on Nirant Cross Road with dedicated lecture halls.',
    'Opened modern Head Office at Takshshila Square, Maninagar with smart hybrid classrooms.',
    '27+ Years of excellence with 22,000+ successful alumni across India.'
  ];



  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION (Matches Screenshot 1: ESTABLISHED 1998 badge, "Shaping Futures Through Excellence", campus image) */}
      <section className="pt-12 sm:pt-20 text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-block px-3.5 py-1 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          ESTABLISHED 1998
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Shaping Futures <br />
          <span className="text-red-600">Through Excellence</span>
        </h1>

        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-2xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
            alt="The foundation of academic rigour"
            className="w-full h-64 sm:h-80 object-cover group-hover:scale-103 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <p className="text-white text-xs sm:text-sm font-semibold">
              The foundation of academic rigour and conceptual clarity.
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto pt-2">
          For over two decades, Ahuja Career Institute has been the cornerstone of academic success, blending traditional discipline with modern educational methodologies across Ahmedabad.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab('courses')}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition shadow-md shadow-red-600/20"
          >
            Explore Programs
          </button>
          <button
            onClick={onInquireClick}
            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-lg text-sm transition shadow-xs"
          >
            Inquire Now
          </button>
        </div>
      </section>

      {/* 2. STATS BAR & FOUNDER TRIBUTE (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-5xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-10">
        {/* Stats Grid */}
        <div className="bg-gray-900/90 rounded-2xl border border-gray-800 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-md">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-500">{st.value}</div>
              <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Founder Tribute */}
        <div className="space-y-6 text-center">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
              alt="Late R.A. Ahuja Sir"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-gray-800 shadow-xl"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Late R.A. Ahuja Sir</h3>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wide">The Visionary Founder</p>
            </div>
          </div>

          <div className="bg-gray-900/90 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg relative">
            <span className="text-4xl text-red-500/30 font-serif leading-none absolute top-3 left-4">“</span>
            <p className="text-base sm:text-lg font-bold text-gray-200 leading-relaxed italic px-4">
              "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined."
            </p>
            <span className="text-4xl text-red-500/30 font-serif leading-none absolute bottom-1 right-4">”</span>
          </div>
        </div>
      </section>

      {/* 4. OUR CORE PHILOSOPHY (Matches Screenshot 1: 3 cards - one highlighted in solid red) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Core <span className="text-red-600">Philosophy</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            The values that drive every class, mentor session, and test evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Philosophy 1: Conceptual Mastery */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition card-hover-effect space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Conceptual Mastery</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We prioritize deep understanding over rote learning, ensuring students grasp the fundamental mechanics of every subject.
              </p>
            </div>
          </div>

          {/* Philosophy 2: Unwavering Discipline (Featured in Solid Red as shown in screenshot) */}
          <div className="bg-red-600 text-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-red-600/25 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Unwavering Discipline</h3>
                <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
                  A structured environment that instills punctuality, focus, and the resilience required to conquer competitive exams and board exams.
                </p>
              </div>
            </div>
            <div className="pt-2 text-xs font-semibold text-red-200 border-t border-white/20">
              Core Academic Pillar
            </div>
          </div>

          {/* Philosophy 3: Student-Centric Growth (With image header as shown in screenshot) */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition card-hover-effect flex flex-col">
            <div className="h-32 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                alt="Student Centric Growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Student-Centric Growth</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Personalized mentoring pathways designed to identify individual strengths and systematically eliminate weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HORIZONTAL SCROLLTRIGGER TIMELINE SECTION */}
      <section id="journey-timeline-section" ref={timelineSectionRef} className="relative">
        {/* Desktop / Laptop: Smooth ScrollTrigger Horizontal Flow */}
        <div className="hidden md:block">
          <div className="sticky top-20 min-h-[500px] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-8 overflow-hidden relative">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="inline-block px-3 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-bold uppercase tracking-wider rounded-full">
                    Scroll To Navigate Timeline (1998 — 2026)
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Our 27+ Year <span className="text-red-500">Journey</span>
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400">
                    Phase 0{activeTimelineIndex + 1} / 05
                  </span>
                  <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-600 rounded-full transition-all duration-300"
                      style={{ width: `${((activeTimelineIndex + 1) / journeyTimeline.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Horizontal ScrollTrack with Thin Zigzag Path */}
              <div className="relative pt-6 pb-6 overflow-hidden">
                {/* Thin Zigzag Connecting SVG Line */}
                <div className="absolute top-[48%] left-0 right-0 h-10 -translate-y-1/2 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 30">
                    <path
                      d="M 0,15 Q 125,0 250,15 T 500,15 T 750,15 T 1000,15"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="opacity-50"
                    />
                  </svg>
                </div>

                {/* Horizontally Translating Milestone Track */}
                <motion.div
                  className="flex gap-5 relative z-10"
                  animate={{
                    x: `-${scrollProgress * (journeyTimeline.length - 2.2) * 220}px`,
                  }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                >
                  {journeyTimeline.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const isSelected = activeTimelineIndex === idx;

                    return (
                      <div
                        key={item.year}
                        onClick={() => setActiveTimelineIndex(idx)}
                        className={`min-w-[250px] max-w-[270px] flex-shrink-0 cursor-pointer transition-all duration-300 ${
                          isEven ? '-translate-y-2' : 'translate-y-2'
                        }`}
                      >
                        <div
                          className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full space-y-3 ${
                            isSelected
                              ? 'bg-gray-900 border-red-500 shadow-xl shadow-red-600/25 ring-2 ring-red-500/30 scale-103'
                              : 'bg-[#22262E]/80 border-gray-800 hover:border-gray-700 hover:bg-[#22262E]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-md ${
                                isSelected ? 'bg-red-600 text-white' : 'bg-white/10 text-red-400'
                              }`}
                            >
                              {item.year}
                            </span>
                            <div
                              className={`w-2.5 h-2.5 rounded-full transition-all ${
                                isSelected ? 'bg-red-500 ring-4 ring-red-500/30' : 'bg-gray-600'
                              }`}
                            />
                          </div>

                          <div className="space-y-1.5 flex-1">
                            <h4 className="font-bold text-sm text-white leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-400 leading-relaxed font-normal">
                              {shortDescs[idx]}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[10px] font-mono text-gray-500">
                            <span>Phase 0{idx + 1}</span>
                            {isSelected && <span className="text-red-400 font-bold">Active ✓</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Scroll Hint */}
              <div className="text-center text-xs text-gray-500 pt-2 flex items-center justify-center gap-1.5">
                <span>Scroll down page to advance horizontal milestones</span>
                <span className="text-red-500 font-bold">→</span>
              </div>
            </div>
          </div>
          <div className="h-[70vh] pointer-events-none" />
        </div>

        {/* Mobile Version: Simple Stacked Cards */}
        <div className="block md:hidden mx-4">
          <div className="bg-[#18191B] text-white rounded-3xl p-6 border border-gray-800 shadow-2xl space-y-6">
            <div className="text-center space-y-1.5">
              <div className="inline-block px-3 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                1998 — 2026
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Our 27+ Year <span className="text-red-500">Journey</span>
              </h2>
            </div>

            {/* Vertically Stacked Milestone Cards */}
            <div className="flex flex-col gap-3.5">
              {journeyTimeline.map((item, idx) => (
                <div
                  key={item.year}
                  className="p-5 rounded-2xl border border-gray-800 bg-[#22262E] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-md bg-red-600 text-white">
                      {item.year}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      0{idx + 1}/05
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-bold text-base text-white">{item.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{shortDescs[idx]}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-800 text-[11px] text-red-400 font-bold font-mono">
                    Milestone Phase 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
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

