'use client';

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PageTab } from '../types';
import {
  aboutStats,
  facultyMembers,
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
  GraduationCap,
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onInquireClick }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('facult')) {
      setTimeout(() => {
        document.getElementById('star-faculties')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION (Unified Hero Layout matching HomePage, Courses, and Contact) */}
      <section className="relative pt-12 sm:pt-20 pb-4 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>SINCE 1998 • 27+ YEARS OF EXCELLENCE</span>
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
                src="/assets/Directors/Professional Office Portrait.png"
                alt="Director Desk & Academic Governance at Ahuja Career Institute"
                className="w-full h-64 sm:h-96 object-cover group-hover:scale-102 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    Since 1998 Ahmedabad
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
            {/* Card 1: Late Shri R.A. Ahuja Sir (Founder) */}
            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 shadow-xl flex flex-col justify-between space-y-3 hover:border-gray-700 transition">
              <div className="space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="relative shrink-0">
                    <img
                      src="/assets/Directors/Founder - Rajkumar Ahuja.jpeg"
                      alt="Late Shri R.A. Ahuja Sir - Founder"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover object-top border-2 border-red-500/40 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-bold rounded shadow-xs">
                      Founder
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                      Late Shri R.A. Ahuja Sir
                    </h3>
                    <p className="text-[11px] font-bold text-red-400 uppercase tracking-wide mt-0.5">
                      The Visionary Founder (Since 1998)
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
                      src="/assets/Directors/Director - Sunil Ahuja.jpeg"
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
                  onClick={() => onInquireClick()}
                  className="text-red-400 hover:text-red-300 font-bold transition flex items-center gap-1 cursor-pointer"
                >
                  Connect with Mentors <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STAR FACULTIES (Merged & Preprocessed with Red Popout Ring) */}
      <section id="star-faculties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-red-600" />
            <span>Academic Wing • Ahuja Star Mentors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our <span className="text-red-600">Star Faculties</span> &amp; Mentors
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Ahmedabad’s seasoned subject authorities across Physics, Chemistry, Mathematics, Biology, and Commerce — delivering conceptual depth, error-correction drills, and 1-on-1 mentorship since 1998.
          </p>
        </div>

        {/* Faculty Grid (Rendered with Red Popout Ring Just Like Students) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {facultyMembers.map((fac) => (
            <div
              key={fac.id}
              className="group relative bg-[#FAF8F5] rounded-3xl border border-[#F0EBE1] hover:border-red-400 p-5 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(220,38,38,0.14)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between text-center overflow-hidden"
            >
              {/* Faculty Portrait (Popout with Red Circle Ring) */}
              <div className="relative w-full h-[270px] sm:h-[285px] flex items-center justify-center mb-2 mt-2">
                <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
                  <img
                    src={fac.avatarUrl}
                    alt={`${fac.name} – Star Faculty at Ahuja Career Institute`}
                    className="w-full h-full object-contain select-none drop-shadow-[0_12px_24px_rgba(220,38,38,0.18)] group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Faculty Details Content (Only Name & Subject Expert Name) */}
              <div className="w-full pt-3 pb-1 border-t border-[#EAE4D8] flex flex-col items-center mt-auto">
                <h3 className="text-base sm:text-lg font-black text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight leading-tight">
                  {fac.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wide mt-1">
                  {fac.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How Our Faculty Delivers Results (Mentorship Methodology) */}
        <div className="bg-[#18191B] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest font-mono">
              PROVEN PEDAGOGICAL SYSTEM
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              How Our Faculty Delivers <span className="text-red-400">Consistent Top Ranks</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs font-mono">
                01
              </div>
              <h4 className="text-sm font-bold text-white">Visual &amp; Conceptual Depth</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lectures emphasize fundamental mechanics with smart interactive visuals rather than formula memorization.
              </p>
            </div>

            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs font-mono">
                02
              </div>
              <h4 className="text-sm font-bold text-white">Diagnostic Error Audits</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                After every test, faculties audit answer sheets to classify conceptual gaps vs calculation slips, prescribing custom drill sheets.
              </p>
            </div>

            <div className="bg-gray-900/90 p-4 sm:p-5 rounded-2xl border border-gray-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs font-mono">
                03
              </div>
              <h4 className="text-sm font-bold text-white">Daily 1-on-1 Doubt Desks</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Dedicated personal teacher slots before and after sessions guarantee that no question remains unresolved before the next chapter.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800/80 text-xs">
            <span className="text-gray-400">
              Want to experience a lecture first-hand before enrolling?
            </span>
            <button
              onClick={() => onInquireClick('Free Demo Lecture with Faculty')}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-md shadow-red-600/25 active:scale-98 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> Attend A Free Demo Lecture
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR CORE PHILOSOPHY - All 3 Cards with Photo Headers in Unified Theme */}
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
                src="/assets/pillar-conceptual-mastery.jpg"
                alt="Conceptual Mastery - Indian Student Diligently Studying Concepts"
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
                src="/assets/pillar-unwavering-discipline.jpg"
                alt="Unwavering Discipline - Focused Indian Students in Coaching Classroom"
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
                src="/assets/pillar-student-centric-growth.jpg"
                alt="Student-Centric Growth - Indian Students Mentorship & Collaborative Learning"
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


      {/* 4. OUR 27+ YEAR JOURNEY: CONNECTED VERTICAL TIMELINE (Scroll-Triggered Reveal Animation) */}
      <section id="journey-timeline-section" className="mx-4 sm:mx-6 lg:mx-8 max-w-5xl lg:mx-auto">
        <div className="bg-[#18191B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-800 shadow-2xl space-y-10 overflow-hidden">
          {/* Section Header with Scroll-Trigger Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 max-w-2xl mx-auto"
          >
            <div className="inline-block px-3.5 py-1 bg-red-600/20 text-red-400 border border-red-500/30 text-[11px] font-bold uppercase tracking-wider rounded-full font-mono">
              1998 — 2026 • 27-YEAR LEGACY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 27+ Year <span className="text-red-500">Journey</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
              Key milestones shaping concept-first coaching across Ahmedabad.
            </p>
          </motion.div>

          {/* Connected Vertical Spine Track */}
          <div className="relative">
            {/* Animated Vertical Connector Spine Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 bottom-4 left-5 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-red-600 via-red-500 to-amber-500 origin-top pointer-events-none"
            />

            {/* Milestones List */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  year: '1998',
                  title: 'Humble Inception',
                  location: 'Ghodasar, Ahmedabad',
                  icon: BookOpen,
                  desc: 'Founded by Late Shri R.A. Ahuja Sir on concept-first pedagogy and dedicated individual mentorship.',
                  stat: '100% 1st Batch Pass Rate',
                  highlight: 'The Genesis',
                  isCurrent: false,
                },
                {
                  year: '2005',
                  title: 'Jawaharchowk Expansion',
                  location: 'Maninagar',
                  icon: Compass,
                  desc: 'Expanded into Jawaharchowk to accommodate surging demand, introducing structured daily test series.',
                  stat: '500+ Students Milestone',
                  highlight: 'Batch System',
                  isCurrent: false,
                },
                {
                  year: '2014',
                  title: 'Vastral Premier Campus',
                  location: 'Avadh Pride, Vastral',
                  icon: Building2,
                  desc: 'Inaugurated flagship campus with spacious classrooms, dedicated doubt desks, and Science & Commerce wings.',
                  stat: '5,000+ Alumni Milestone',
                  highlight: 'Premier Center',
                  isCurrent: false,
                },
                {
                  year: '2020',
                  title: 'Takshshila Square HQ',
                  location: 'Krishnabaug, Maninagar',
                  icon: Sparkles,
                  desc: 'Established modern Head Office with smart interactive boards, recorded lectures, and digital test analytics.',
                  stat: '15,000+ Enrolled',
                  highlight: 'Smart Classrooms',
                  isCurrent: false,
                },
                {
                  year: '2025–26',
                  title: '27+ Years of Excellence',
                  location: 'Maninagar & Vastral',
                  icon: Trophy,
                  desc: 'Over 22,000+ students guided with hundreds of 100/100 board scores and top JEE & NEET percentiles.',
                  stat: '22,000+ Guided Students',
                  highlight: 'Silver Jubilee',
                  isCurrent: true,
                },
              ].map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } group`}
                  >
                    {/* Glowing Milestone Spine Node with Spring Pop Reveal */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08,
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className={`absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#18191B] border-2 ${
                        milestone.isCurrent
                          ? 'border-red-500 shadow-md shadow-red-500/40 text-red-400 ring-2 ring-red-500/20'
                          : 'border-red-600/70 text-red-500/90 group-hover:border-red-400 group-hover:text-red-400 shadow-sm'
                      } flex items-center justify-center transition-all duration-300 z-10 group-hover:scale-110`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>

                    {/* Minimalist Milestone Card with Directional Scroll Reveal */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isEven ? -24 : 24,
                        y: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.55,
                        delay: 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`w-full pl-13 sm:pl-14 md:pl-0 md:w-[calc(50%-2.25rem)] ${
                        isEven ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      <div
                        className={`bg-[#1E2129] border ${
                          milestone.isCurrent
                            ? 'border-red-500/60 ring-1 ring-red-500/20'
                            : 'border-gray-800 hover:border-red-500/50'
                        } p-4 sm:p-5 rounded-2xl shadow-lg transition-all duration-300 space-y-2.5`}
                      >
                        {/* Header: Year Badge + Location */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-black ${
                              milestone.isCurrent
                                ? 'bg-red-600 text-white shadow-xs'
                                : 'bg-red-950/80 text-red-400 border border-red-800/40'
                            }`}
                          >
                            {milestone.year}
                          </span>
                          <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                            <span className="truncate">{milestone.location}</span>
                          </span>
                        </div>

                        {/* Title & Minimalist One-Line Story */}
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                            {milestone.title}
                          </h3>
                          <p className="text-xs text-gray-300 leading-relaxed font-normal">
                            {milestone.desc}
                          </p>
                        </div>

                        {/* Footer: Stat Badge & Tag */}
                        <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                          <span className="font-semibold text-red-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            <span>{milestone.stat}</span>
                          </span>
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                            {milestone.highlight}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
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
              onClick={() => onInquireClick()}
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
