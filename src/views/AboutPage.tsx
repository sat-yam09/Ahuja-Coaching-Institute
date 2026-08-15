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

      // Calculate progress from 0 to 1
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      // Calculate active index based on milestones length
      const index = Math.min(
        journeyTimeline.length - 1,
        Math.floor(progress * journeyTimeline.length)
      );

      if (index >= 0 && index < journeyTimeline.length) {
        setActiveTimelineIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
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
    <div className="space-y-12 pb-16 bg-[#FAF6EE]">
      {/* ABOUT HERO */}
      <section className="relative text-white py-16 sm:py-24 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920"
            alt="About Ahuja Career Institute"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded-md backdrop-blur-xs">
            Official Legacy Specification • EST. 1998
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            27+ Years of Academic Excellence &amp; Inspiring Success
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Founded in 1998 by Late R.A. Ahuja Sir, Ahuja Career Institute has guided over 22,000+ students across Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET with uncompromised dedication.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('courses')}
              className="px-6 py-2.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm transition shadow-sm"
            >
              Explore Our Programs
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold rounded-md text-sm transition backdrop-blur-xs"
            >
              Contact Campuses
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg border border-[#E5DCCB] shadow-sm p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl font-bold text-[#5C1315]">{st.value}</div>
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE & OUR JOURNEY */}
      <section id="who-we-are" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
              Our Journey &amp; Legacy
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A0E10]">Who We Are</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Founded in 1998 by <strong>Late R.A. Ahuja Sir</strong>, Ahuja Career Institute began with a humble home setup in Ghodasar. Driven by an unwavering passion for quality education, the institute expanded to Jawaharchowk and has now grown into one of the most prominent and featured educational institutes in Maninagar and Vastral.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Over the past 27+ years, we have empowered more than 22,000+ students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET through rigorous concept building, continuous evaluation, and dedicated tutor support.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border-2 border-[#C99A2C] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                alt="Ahuja Classroom Journey"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="principles" className="bg-amber-100/50 py-12 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
              Our Foundations
            </div>
            <h2 className="text-2xl font-bold text-[#4A0E10]">Our Core Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-sm space-y-2 card-hover-effect">
              <div className="w-10 h-10 rounded-md bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#4A0E10]">Conceptual Mastery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focusing on deep understanding of fundamentals rather than rote learning, enabling students to tackle any complex question with ease.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-sm space-y-2 card-hover-effect">
              <div className="w-10 h-10 rounded-md bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#4A0E10]">Discipline &amp; Consistency</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cultivating daily study habits, regular testing, mini-test evaluation, and continuous feedback to build lasting academic resilience.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-amber-200 shadow-sm space-y-2 card-hover-effect">
              <div className="w-10 h-10 rounded-md bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#4A0E10]">Student-Centric Growth</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Providing individual mentorship, dedicated tutor support, and personalized attention so every student reaches their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE / TRIBUTE */}
      <section id="directors-message" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-[#E5DCCB] p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 text-center lg:text-left space-y-3">
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                alt="Late R.A. Ahuja Founder"
                className="w-44 h-52 object-cover rounded-lg border-4 border-[#5C1315] shadow-sm mx-auto"
              />
              <div className="mt-2 text-xs text-center">
                <span className="bg-[#C99A2C] text-[#1A1818] font-semibold px-2.5 py-0.5 rounded-full">
                  Our Revered Founder
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#4A0E10]">Late R.A. Ahuja Sir</h3>
              <p className="text-xs text-gray-500 font-medium">Founder &amp; Visionary (Est. 1998)</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
              From the Pen of Late R.A. Ahuja
            </div>
            <blockquote className="text-lg sm:text-xl font-bold text-[#4A0E10] leading-snug italic border-l-4 border-[#C99A2C] pl-4">
              "Life is Great but it never grows great until it is focused, dedicated &amp; disciplined. Knowledge of our duties is a more essential Part of the philosophy of Life."
            </blockquote>
            <p className="text-xs text-gray-600 leading-relaxed pt-2">
              The founding principles established by Late R.A. Ahuja Sir in 1998 remain the guiding beacon of Ahuja Career Institute today. Every batch, every mini-test, and every dedicated doubt resolution session is conducted with the sole purpose of fostering sincere dedication and character in our students.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section id="pillars" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
            Institutional Pillars
          </div>
          <h2 className="text-2xl font-bold text-[#4A0E10]">What We Stand On</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {institutionalPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#5C1315] text-white p-5 rounded-lg border border-amber-500/30 shadow-sm hover:shadow-md transition space-y-2"
            >
              <h3 className="text-base font-bold text-amber-300">{p.title}</h3>
              <p className="text-xs text-amber-100/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STICKY SCROLL-TRIGGERED TIMELINE SECTION */}
      <section id="journey-timeline-section" className="relative">
        <div ref={containerRef} className="relative min-h-[300vh] sm:min-h-[320vh] bg-[#140607]">
          {/* Sticky Viewport Stage */}
          <div className="sticky top-16 min-h-[calc(100vh-4rem)] flex items-center py-10 overflow-hidden border-y border-[#C99A2C]/40">
            {/* Background ambient lighting */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C99A2C]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#5C1315]/30 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {/* Section Header */}
              <div className="text-center space-y-1 mb-8 sm:mb-10">
                <div className="inline-block px-3 py-1 bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider rounded-md">
                  Scroll To Explore Milestones (1998 - 2025)
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-white">
                  Our 27+ Year Milestone Journey
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-normal">
                  Scroll down to navigate through each phase of Ahuja Career Institute's historic journey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Interactive Timeline Spine & Year Selectors */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative pl-6 sm:pl-8 space-y-4 sm:space-y-6">
                    {/* Vertical Progress Bar Spine */}
                    <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-1 bg-white/10 rounded-full">
                      <motion.div
                        className="w-full bg-gradient-to-b from-amber-300 to-[#C99A2C] rounded-full shadow-[0_0_12px_rgba(201,154,44,0.8)]"
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
                          {/* Dot indicator on spine */}
                          <div
                            className={`absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-amber-400 border-white shadow-[0_0_15px_rgba(251,191,36,0.9)] scale-110'
                                : isPassed
                                ? 'bg-[#C99A2C] border-amber-300 text-[#1A1818]'
                                : 'bg-[#220B0C] border-white/20 text-gray-500'
                            }`}
                          >
                            <IconComp className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? 'text-[#1A1818]' : isPassed ? 'text-[#1A1818]' : 'text-gray-400'}`} />
                          </div>

                          {/* Year Button */}
                          <button
                            onClick={() => setActiveTimelineIndex(idx)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                              isActive
                                ? 'bg-gradient-to-r from-[#5C1315] to-[#3a090b] border-amber-400 shadow-md text-white'
                                : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className={`font-mono text-sm sm:text-base font-bold ${isActive ? 'text-amber-300' : 'text-gray-400'}`}>
                                {item.year}
                              </span>
                              <div className="text-xs font-semibold text-white truncate max-w-[200px]">
                                {item.title}
                              </div>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${isActive ? 'bg-amber-400 text-[#1A1818]' : 'bg-white/10 text-gray-400'}`}>
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
                  <div className="relative min-h-[360px] bg-gradient-to-br from-[#200A0B] via-[#2D0F11] to-[#170506] p-6 sm:p-8 rounded-xl border border-amber-500/30 shadow-2xl overflow-hidden flex flex-col justify-between">
                    {/* Watermark Year in Background */}
                    <div className="absolute right-2 -bottom-6 text-7xl sm:text-9xl font-black font-mono text-white/[0.04] pointer-events-none select-none">
                      {selectedMilestone.year}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedMilestone.year}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="space-y-5 relative z-10"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#C99A2C] text-[#1A1818] font-mono text-xs font-bold rounded-md shadow-xs">
                              {selectedMilestone.year}
                            </span>
                            <span className="text-xs text-amber-300/80 uppercase font-semibold tracking-wider">
                              Phase 0{activeTimelineIndex + 1} of 05
                            </span>
                          </div>
                          <span className="text-xs font-mono text-gray-400">
                            {activeTimelineIndex === 4 ? '27+ Years Legacy ★' : 'Milestone Archive'}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {selectedMilestone.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                            {selectedMilestone.desc}
                          </p>
                        </div>

                        {/* Milestone Key Achievements List */}
                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                            Key Era Highlights:
                          </div>
                          <div className="space-y-2">
                            {(milestoneHighlights[activeTimelineIndex] || []).map((highlight, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-black/30 p-2.5 rounded-md border border-white/5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Navigation Controls & Progress Pill */}
                    <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveTimelineIndex((prev) => Math.max(0, prev - 1))}
                          disabled={activeTimelineIndex === 0}
                          className="p-2 rounded-md bg-white/10 hover:bg-[#C99A2C] hover:text-[#1A1818] text-white disabled:opacity-30 disabled:pointer-events-none transition"
                          aria-label="Previous Milestone"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setActiveTimelineIndex((prev) => Math.min(journeyTimeline.length - 1, prev + 1))}
                          disabled={activeTimelineIndex === journeyTimeline.length - 1}
                          className="p-2 rounded-md bg-white/10 hover:bg-[#C99A2C] hover:text-[#1A1818] text-white disabled:opacity-30 disabled:pointer-events-none transition"
                          aria-label="Next Milestone"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-xs text-gray-400">
                        {activeTimelineIndex === journeyTimeline.length - 1 ? (
                          <span className="text-emerald-400 font-semibold">✓ 27+ Years Legacy Milestone</span>
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

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-6">
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5DCCB] shadow-sm space-y-5">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A0E10]">
            Ready To Experience The Ahuja Difference?
          </h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Take the first step towards academic excellence with Ahmedabad's trusted institute since 1998.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onInquireClick}
              className="px-6 py-2.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-sm transition shadow-sm"
            >
              Inquire For Admissions
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 bg-amber-100 hover:bg-amber-200 text-[#5C1315] font-semibold rounded-md text-sm transition border border-amber-300"
            >
              Contact Campuses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

