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
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll trigger listener to update active timeline card based on scroll position inside container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const index = Math.min(
        journeyTimeline.length - 1,
        Math.floor(progress * journeyTimeline.length)
      );

      if (index >= 0 && index < journeyTimeline.length) {
        setActiveTimelineIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedMilestone = journeyTimeline[activeTimelineIndex] || journeyTimeline[0];
  const milestoneIcons = [Building2, Award, GraduationCap, Sparkles, CheckCircle2];
  const milestoneHighlights = [
    ['Founded by Late R.A. Ahuja Sir with home setup in Ghodasar', 'Pioneered concept-first pedagogy in Ahmedabad', 'Began the legacy of disciplined academic training'],
    ['Expanded to Jawaharchowk campus', 'Structured comprehensive Science & Commerce board batches', 'Specialized entrance masterclasses introduced'],
    ['Established premier Vastral flagship campus on Nirant Cross Road', 'Dedicated lecture halls and 1-on-1 tutor support desks', 'Hundreds of board distinctions and medical/engineering selections'],
    ['Opened modern Head Office at Takshshila Square, Maninagar', 'Integrated smart classrooms and hybrid learning options', 'Comprehensive Daily Practice Problems (DPP) system'],
    ['27+ Years of excellence legacy celebrated', 'Over 22,000+ students guided across Gujarat', 'Multiple 100/100 perfect board scorers & 99+ JEE/NEET percentilers'],
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

      {/* 2. STATS BAR */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600">{st.value}</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUNDER TRIBUTE & QUOTE (Matches Screenshot 1: Portrait photo + quote box) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-50/80 rounded-3xl border border-gray-200 p-6 sm:p-10 space-y-6 text-center">
          <div className="flex flex-col items-center space-y-3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
              alt="Late R.A. Ahuja Sir"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">Late R.A. Ahuja Sir</h3>
              <p className="text-xs font-bold text-red-600 uppercase tracking-wide">The Visionary Founder</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs relative">
            <span className="text-4xl text-red-200 font-serif leading-none absolute top-3 left-4">“</span>
            <p className="text-base sm:text-lg font-bold text-gray-800 leading-relaxed italic px-4">
              "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined."
            </p>
            <span className="text-4xl text-red-200 font-serif leading-none absolute bottom-1 right-4">”</span>
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

      {/* 5. STICKY SCROLL-TRIGGERED TIMELINE SECTION */}
      <section id="journey-timeline-section" className="relative">
        <div ref={containerRef} className="relative min-h-[280vh] bg-[#18191B] text-white">
          <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex items-center py-10 overflow-hidden border-y border-red-900/40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center space-y-1 mb-8 sm:mb-10">
                <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider rounded-md">
                  Scroll To Explore Milestones (1998 - 2026)
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Our 27+ Year Milestone Journey
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
                  Scroll down to navigate through each phase of Ahuja Career Institute's historic journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Interactive Timeline Spine */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative pl-6 sm:pl-8 space-y-4 sm:space-y-6">
                    <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-1 bg-white/10 rounded-full">
                      <motion.div
                        className="w-full bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.8)]"
                        style={{
                          height: `${((activeTimelineIndex) / (journeyTimeline.length - 1)) * 100}%`,
                          transition: 'height 0.4s ease-out',
                        }}
                      />
                    </div>

                    {journeyTimeline.map((item, idx) => {
                      const isActive = activeTimelineIndex === idx;
                      const isPassed = activeTimelineIndex > idx;
                      const IconComp = milestoneIcons[idx] || Sparkles;

                      return (
                        <div key={item.year} className="relative flex items-center gap-4">
                          <div
                            className={`absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-red-600 border-white shadow-[0_0_15px_rgba(220,38,38,0.9)] scale-110'
                                : isPassed
                                ? 'bg-red-800 border-red-400 text-white'
                                : 'bg-[#220B0C] border-white/20 text-gray-500'
                            }`}
                          >
                            <IconComp className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? 'text-white' : isPassed ? 'text-white' : 'text-gray-400'}`} />
                          </div>

                          <button
                            onClick={() => setActiveTimelineIndex(idx)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                              isActive
                                ? 'bg-red-600/20 border-red-500 shadow-md text-white'
                                : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className={`font-mono text-sm sm:text-base font-bold ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                                {item.year}
                              </span>
                              <div className="text-xs font-semibold text-white truncate max-w-[200px]">
                                {item.title}
                              </div>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${isActive ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-400'}`}>
                              0{idx + 1}/05
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Active Animated Milestone Card */}
                <div className="lg:col-span-7">
                  <div className="relative min-h-[340px] bg-[#22262E] p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedMilestone.year}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="space-y-5 relative z-10"
                      >
                        <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-md shadow-xs">
                              {selectedMilestone.year}
                            </span>
                            <span className="text-xs text-red-400 uppercase font-semibold tracking-wider">
                              Phase 0{activeTimelineIndex + 1} of 05
                            </span>
                          </div>
                          <span className="text-xs font-mono text-gray-400">
                            {activeTimelineIndex === 4 ? '27+ Years Legacy ★' : 'Milestone Archive'}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            {selectedMilestone.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                            {selectedMilestone.desc}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                            Key Era Highlights:
                          </div>
                          <div className="space-y-2">
                            {(milestoneHighlights[activeTimelineIndex] || []).map((highlight, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-black/30 p-2.5 rounded-lg border border-white/5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 pt-6 mt-4 border-t border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveTimelineIndex((prev) => Math.max(0, prev - 1))}
                          disabled={activeTimelineIndex === 0}
                          className="p-2 rounded-lg bg-white/10 hover:bg-red-600 text-white disabled:opacity-30 disabled:pointer-events-none transition"
                          aria-label="Previous Milestone"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setActiveTimelineIndex((prev) => Math.min(journeyTimeline.length - 1, prev + 1))}
                          disabled={activeTimelineIndex === journeyTimeline.length - 1}
                          className="p-2 rounded-lg bg-white/10 hover:bg-red-600 text-white disabled:opacity-30 disabled:pointer-events-none transition"
                          aria-label="Next Milestone"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-gray-400">
                        {activeTimelineIndex === journeyTimeline.length - 1 ? (
                          <span className="text-red-400 font-semibold">✓ 27+ Years Legacy Milestone</span>
                        ) : (
                          <span>Keep scrolling to advance ↓</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-6">
        <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xs space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready To Experience The Ahuja Difference?
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Take the first step towards academic excellence with Ahmedabad's trusted institute since 1998.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onInquireClick}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition shadow-md shadow-red-600/20"
            >
              Inquire For Admissions
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg text-sm transition border border-gray-300"
            >
              Contact Campuses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

