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
  Download,
  FileText,
  ExternalLink,
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

  const shortDescs = [
    'Founded by Late Rajkumar Ahuja Sir with home setup in Ghodasar, pioneering concept-first pedagogy.',
    'Introduced dedicated batches and test series in Jawaharchowk for Gujarat board & entrance tests.',
    'Built state-of-the-art campus on Nirant Cross Road with comprehensive doubt-solving desks.',
    'Opened flagship center at Takshshila Square with hybrid learning and digital test analytics.',
    'Over 22,000+ students guided with hundreds of 100/100 perfect board & competitive scores.',
  ];

  // ScrollTrigger listener for desktop horizontal translation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineSectionRef.current) return;
      const rect = timelineSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      if (totalDist > 0) {
        const progress = Math.max(0, Math.min(1, currentScroll / totalDist));
        setScrollProgress(progress);
        const index = Math.min(
          journeyTimeline.length - 1,
          Math.floor(progress * journeyTimeline.length)
        );
        setActiveTimelineIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-block px-3.5 py-1 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          ESTABLISHED 1998 • 27+ YEARS OF EXCELLENCE
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Our Legacy of <span className="text-red-600">Empowering</span> Students
        </h1>

        <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto pt-2">
          For over two decades, Ahuja Career Institute has been the cornerstone of academic success, blending traditional discipline with modern educational methodologies across Ahmedabad.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab('courses')}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm transition shadow-md shadow-red-600/20 cursor-pointer"
          >
            Explore Programs
          </button>
          <a
            href="/assets/Ahuja Institute 23X33.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-lg text-sm transition shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-red-600" />
            <span>Admissions Brochure (PDF)</span>
          </a>
        </div>
      </section>

      {/* 2. STATS BAR & VISIONARY LEADERSHIP (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-12">
        {/* Stats Grid */}
        <div className="bg-gray-900/90 rounded-2xl border border-gray-800 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-md">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-500">{st.value}</div>
              <div className="text-xs text-gray-300 font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>

        {/* Visionary Leadership: Founder & Director Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
              LEADERSHIP &amp; GUIDING LIGHT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Minds Shaping Our <span className="text-red-500">27-Year Legacy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Late Rajkumar Ahuja Sir (Founder) */}
            <div className="bg-gray-900/90 p-7 sm:p-8 rounded-3xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-gray-700 transition">
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="/assets/Founder - Rajkumar Ahuja.jpeg"
                      alt="Late Rajkumar Ahuja Sir - Founder"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-red-500/40 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                      Founder
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      Late Rajkumar Ahuja Sir
                    </h3>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wide">
                      The Visionary Founder (Est. 1998)
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Pioneer of Concept-First Coaching in Ahmedabad
                    </p>
                  </div>
                </div>

                <div className="bg-[#121316] p-5 rounded-2xl border border-gray-800/80 relative">
                  <span className="text-3xl text-red-500/40 font-serif leading-none absolute top-2 left-3">“</span>
                  <p className="text-sm font-semibold text-gray-200 leading-relaxed italic px-3 pt-1">
                    "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined."
                  </p>
                  <span className="text-3xl text-red-500/40 font-serif leading-none absolute bottom-0 right-3">”</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  In 1998, Late Rajkumar Ahuja Sir established Ahuja Career Institute with a singular commitment: that true education is built upon deep conceptual foundations, personal attention, and relentless discipline. His vision continues to steer our curriculum and inspire generations of students.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <span>Core Pillar: Dedicated Pedagogy</span>
                <span className="text-red-400 font-bold">1998 — Everlasting</span>
              </div>
            </div>

            {/* Card 2: Sunil Ahuja (Director) */}
            <div className="bg-gray-900/90 p-7 sm:p-8 rounded-3xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-6 hover:border-gray-700 transition">
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src="/assets/Director - Sunil Ahuja.jpeg"
                      alt="Sunil Ahuja - Director"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-red-500/40 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                      Director
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      Sunil Ahuja
                    </h3>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wide">
                      Director, Ahuja Career Institute
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Academic Leadership &amp; Student Mentorship
                    </p>
                  </div>
                </div>

                <div className="bg-[#121316] p-5 rounded-2xl border border-gray-800/80 relative">
                  <span className="text-3xl text-red-500/40 font-serif leading-none absolute top-2 left-3">“</span>
                  <p className="text-sm font-semibold text-gray-200 leading-relaxed italic px-3 pt-1">
                    "Every student possesses immense potential. With structured doubt clearing, daily problem practice, and personal care, top ranks become natural."
                  </p>
                  <span className="text-3xl text-red-500/40 font-serif leading-none absolute bottom-0 right-3">”</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Steering Ahuja Career Institute into its 27th year, Sunil Ahuja leads academic governance, individual doubt resolution desks, and strategic preparation frameworks across Maninagar Head Office and Vastral campus.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                <span>Direction: Academic Excellence</span>
                <button
                  onClick={onInquireClick}
                  className="text-red-400 hover:text-red-300 font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  Connect with Mentors <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Official 23"×33" Admissions Brochure & Scoreboard Download Box */}
        <div className="bg-[#121316] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-bold rounded-full uppercase tracking-wider">
              <FileText className="w-3 h-3" />
              <span>Official 23" × 33" Print Standee &amp; Brochure</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ahuja Institute 23×33 Admissions &amp; Toppers Publication
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              Download the official 2-page master edition with complete 12th Science Toppers (Maths, Physics, Chem, Bio), JEE/NEET qualifiers, 10th GSEB Board stars, and special morning batch details.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="/assets/Ahuja Institute 23X33.pdf"
              download="Ahuja-Institute-23X33-Brochure.pdf"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-md shadow-red-600/20 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (5.2 MB)</span>
            </a>
            <a
              href="/assets/Ahuja Institute 23X33.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-red-400" />
              <span>View Fullscreen</span>
            </a>
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

