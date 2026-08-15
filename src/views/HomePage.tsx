'use client';

import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  coursesData,
  teachingApproach,
  learningSpaces,
  testimonials,
  heroStats,
} from '../data/mockData';
import {
  ArrowRight,
  BookOpen,
  LineChart,
  FileText,
  RotateCcw,
  CheckCircle2,
  Clock,
  Send,
  UserCheck,
  GraduationCap,
  Target,
  BrainCircuit,
} from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
  onSelectCourse: (courseId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onInquireClick,
  onSelectCourse,
}) => {
  const [selectedCurriculumTab, setSelectedCurriculumTab] = useState<string>('jee');

  const [demoName, setDemoName] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoCohort, setDemoCohort] = useState('JEE Main & Advanced');
  const [demoBranch, setDemoBranch] = useState('Vastral Main Campus');
  const [demoSuccess, setDemoSuccess] = useState(false);

  const activeCourse = coursesData.find((c) => c.id === selectedCurriculumTab) || coursesData[0];

  const handleHomeDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoPhone.trim()) return;
    setDemoSuccess(true);
  };

  return (
    <div className="space-y-12 pb-12 bg-[#FAF6EE]">
      {/* HOME HERO — FULL SCREEN STOCK IMAGE + CLEAN OVERLAY (NO RED FILTER) */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
            alt="Students Celebrating Academic Success at Ahuja Career Institute"
            className="w-full h-full object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 text-amber-300 border border-[#C99A2C]/40 text-xs font-semibold tracking-wider rounded-md backdrop-blur-sm">
                Official Website Copy &amp; Specification • EST. 1998
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white text-wrap balance">
                Building Strong Foundations, <br />
                <span className="text-[#C99A2C]">Achieving Top Results.</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-normal">
                Trusted name for 27+ years in empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET across Ahmedabad.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onInquireClick}
                  className="px-6 py-3 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm transition shadow-sm flex items-center gap-2"
                >
                  Inquire For Admissions <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('scoreboard')}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold rounded-md text-sm transition backdrop-blur-sm"
                >
                  Browse Toppers &amp; Results
                </button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg">
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs text-amber-100/90 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#1A0304]/60 backdrop-blur-md p-6 rounded-lg border border-white/10 space-y-5">
                <div className="text-xs font-semibold text-amber-300 tracking-wider border-b border-white/10 pb-3 flex items-center justify-between">
                  <span>Admissions Open 2026-27</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-md border border-emerald-500/30">
                    Maninagar &amp; Vastral
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    Std. 6th to 12th • JEE • NEET
                  </h3>
                  <p className="text-sm text-amber-100/80 leading-relaxed">
                    Science &amp; Commerce streams (English &amp; Gujarati Medium) with daily mini-tests and personal tutor support.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 p-3 rounded-md border border-white/5 flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-100/90 text-xs">Experienced Faculty</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-md border border-white/5 flex items-center gap-2.5">
                    <LineChart className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-100/90 text-xs">Mini Tests &amp; MCQs</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-md border border-white/5 flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-100/90 text-xs">Dedicated Tutor Support</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-md border border-white/5 flex items-center gap-2.5">
                    <Target className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-amber-100/90 text-xs">Personalized Attention</span>
                  </div>
                </div>

                <button
                  onClick={onInquireClick}
                  className="w-full py-3 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm transition flex items-center justify-center gap-2"
                >
                  Request Admission Info <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <div className="text-xs font-semibold text-[#5C1315] tracking-wider uppercase">
            Academic Programs Offered
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A0E10]">
            Targeted Programs For Every Academic Goal
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {coursesData.map((course) => {
            const isSelected = selectedCurriculumTab === course.id;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCurriculumTab(course.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#5C1315] text-white border-b-2 border-[#C99A2C]'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                <span>{course.title}</span>
                <span className="text-xs opacity-75">({course.category})</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-lg border border-[#E5DCCB] p-5 sm:p-6 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center card-hover-effect">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-block px-2.5 py-0.5 bg-amber-100 text-[#5C1315] text-xs font-semibold rounded">
              {activeCourse.tag} • {activeCourse.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#4A0E10]">
              {activeCourse.targetExam}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {activeCourse.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-[#FAF6EE] p-3 rounded-md border border-amber-200">
                <span className="text-[11px] font-semibold text-[#5C1315] tracking-wider block mb-1">
                  Batch Timings
                </span>
                <span className="text-sm font-medium text-gray-800 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#5C1315]" /> {activeCourse.timings}
                </span>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-md border border-amber-200">
                <span className="text-[11px] font-semibold text-[#5C1315] tracking-wider block mb-1">
                  Faculty Lead
                </span>
                <span className="text-sm font-medium text-gray-800 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#5C1315]" /> {activeCourse.facultyHead}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold text-gray-700 tracking-wider block">Key Features</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {activeCourse.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <button
                onClick={() => {
                  onSelectCourse(activeCourse.id);
                  setActiveTab('courses');
                }}
                className="px-5 py-2 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-sm transition shadow-sm flex items-center gap-2"
              >
                Explore Full Curriculum <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF6EE] p-5 rounded-lg border border-amber-200 space-y-3">
            <h4 className="text-sm font-semibold text-[#5C1315] border-b pb-2">
              Key Academic Highlights
            </h4>
            <div className="space-y-2">
              <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                <div className="text-sm text-gray-600">Top Result Metric</div>
                <div className="ml-auto font-bold text-[#5C1315] text-right text-xs sm:text-sm">{activeCourse.stats.stat1}</div>
              </div>
              <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                <div className="text-sm text-gray-600">Delivery Mode</div>
                <div className="ml-auto font-bold text-[#5C1315] text-right text-xs sm:text-sm">{activeCourse.stats.stat2}</div>
              </div>
              <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                <div className="text-sm text-gray-600">Testing System</div>
                <div className="ml-auto font-bold text-[#5C1315] text-right text-xs sm:text-sm">{activeCourse.stats.stat3}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS — BENTO GRID: WHY CHOOSE AHUJA CAREER INSTITUTE? */}
      <section className="bg-[#5C1315] text-white py-16 sm:py-20 border-y border-[#C99A2C]/40 relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-2 mb-12">
            <div className="inline-block px-3 py-1 bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider rounded-md">
              Our Core Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-wrap balance">
              Why Choose Ahuja Career Institute?
            </h2>
            <p className="text-sm sm:text-base text-amber-100/85 max-w-2xl mx-auto font-normal">
              Our proven methodology combines decades of teaching excellence with personal attention and continuous evaluation.
            </p>
          </div>

          {/* BENTO GRID: Modern Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Bento Card 1 (Large Feature Card — 8 cols on desktop) */}
            <div className="md:col-span-12 lg:col-span-8 bg-gradient-to-br from-[#420B0E] via-[#350709] to-[#250305] p-7 sm:p-8 rounded-xl border border-amber-400/30 hover:border-amber-400/60 transition duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/15 transition" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amber-400/20 rounded-xl border border-amber-400/40 w-fit text-amber-300">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 bg-amber-400/10 rounded-md border border-amber-400/30">
                    PILLAR 01
                  </span>
                </div>

                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {teachingApproach[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                    {teachingApproach[0].description} Guided by Late R.A. Ahuja Sir’s philosophy since 1998, our educators focus on deep conceptual mastery rather than rote memorization.
                  </p>
                </div>

                {/* Key Tags / Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white/10 text-amber-200 rounded-md text-xs font-medium border border-white/10">
                    ✓ 27+ Years Teaching Mastery
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-amber-200 rounded-md text-xs font-medium border border-white/10">
                    ✓ 100/100 Perfect Board Mentors
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-amber-200 rounded-md text-xs font-medium border border-white/10">
                    ✓ Step-by-Step Concept Building
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-amber-200 rounded-md text-xs font-medium border border-white/10">
                    ✓ NCERT Line-by-Line Clarity
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-300/90 relative z-10">
                <span className="font-semibold">Core Academic Foundation</span>
                <span className="font-mono bg-black/30 px-2.5 py-1 rounded text-amber-200">22,000+ Students Guided</span>
              </div>
            </div>

            {/* Bento Card 2 (Pillar 02: Mini Test System & Daily MCQs — 4 cols on desktop) */}
            <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#2F080A] to-[#1E0406] p-7 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition duration-300 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amber-400/20 rounded-xl border border-amber-400/30 text-amber-300 w-fit">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 px-2.5 py-1 bg-amber-400/10 rounded-md border border-amber-400/20">
                    PILLAR 02
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {teachingApproach[1].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {teachingApproach[1].description}
                  </p>
                </div>

                <div className="space-y-2 pt-1 text-xs text-gray-200">
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Daily 30-min MCQ practice tests</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Negative marking elimination drills</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Real exam timing &amp; temperament</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3 (Pillar 03: Dedicated Tutor Support — 4 cols on desktop) */}
            <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#2F080A] to-[#1E0406] p-7 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition duration-300 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amber-400/20 rounded-xl border border-amber-400/30 text-amber-300 w-fit">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 px-2.5 py-1 bg-amber-400/10 rounded-md border border-amber-400/20">
                    PILLAR 03
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {teachingApproach[2].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {teachingApproach[2].description}
                  </p>
                </div>

                <div className="space-y-2 pt-1 text-xs text-gray-200">
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>1-on-1 personalized doubt clearing</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Dedicated weekend revision sessions</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Continuous on-spot query resolution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 4 (Pillar 04: Personalized Attention — 4 cols on desktop) */}
            <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#2F080A] to-[#1E0406] p-7 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition duration-300 shadow-lg flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-amber-400/20 rounded-xl border border-amber-400/30 text-amber-300 w-fit">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 px-2.5 py-1 bg-amber-400/10 rounded-md border border-amber-400/20">
                    PILLAR 04
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {teachingApproach[3].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    {teachingApproach[3].description}
                  </p>
                </div>

                <div className="space-y-2 pt-1 text-xs text-gray-200">
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Micro-progress tracking per subject</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Individual weakness identification</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/25 p-2 rounded-md border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Student confidence &amp; morale building</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 5 (Legacy Stats Banner Bento Cell — 4 cols on desktop) */}
            <div className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-[#C99A2C] via-[#b68922] to-[#8d6914] text-[#1A1818] p-7 rounded-xl border border-amber-300 shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#4A0E10]">
                  Ahmedabad's Trusted Benchmark
                </div>
                <h3 className="text-2xl font-black text-[#1A1818] mt-1 leading-tight">
                  27+ Years of Excellence
                </h3>
                <p className="text-xs text-[#380608] mt-1.5 leading-relaxed font-medium">
                  Founded in 1998 by Late R.A. Ahuja Sir. Guiding students to top medical &amp; engineering institutions across India.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-black/15">
                <div className="space-y-0.5">
                  <div className="text-2xl font-black text-[#4A0E10] leading-none">22,000+</div>
                  <div className="text-[11px] font-semibold text-[#1A1818]/85">Students Guided</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl font-black text-[#4A0E10] leading-none">2 Branches</div>
                  <div className="text-[11px] font-semibold text-[#1A1818]/85">Maninagar &amp; Vastral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS INFRASTRUCTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <div className="text-xs font-semibold text-[#5C1315] tracking-wider uppercase">
            Our Learning Spaces
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A0E10]">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Designed for maximum concentration, instant doubt solving, and continuous practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningSpaces.slice(0, 3).map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-lg overflow-hidden border border-[#E5DCCB] shadow-sm group card-hover-effect"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={space.imageUrl}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5C1315] text-amber-200 text-xs font-semibold rounded shadow-xs">
                  {space.category}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-semibold text-[#4A0E10]">{space.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{space.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setActiveTab('gallery')}
            className="px-5 py-2 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-sm transition shadow-sm inline-flex items-center gap-2"
          >
            Explore Full Campus Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-amber-100/60 py-12 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-semibold text-[#5C1315] tracking-wider uppercase">
              Student &amp; Parent Experiences
            </div>
            <h2 className="text-2xl font-bold text-[#4A0E10]">
              What Our Parents and Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-lg border border-amber-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-[#5C1315]">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.examOrChildExam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY CALLBACK CTA */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#5C1315] text-white p-6 sm:p-8 rounded-lg shadow-md border border-[#C99A2C]/40 space-y-5">
          <div className="text-center space-y-2">
            <div className="text-xs font-semibold text-amber-300 tracking-wider uppercase">
              Admissions 2026-27
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Request Admissions Counseling</h2>
            <p className="text-sm text-amber-100/80 max-w-md mx-auto">
              Empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET.
            </p>
          </div>

          {demoSuccess ? (
            <div className="bg-white text-gray-900 p-5 rounded-lg text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-[#5C1315]">Inquiry Request Submitted</h3>
              <p className="text-sm text-gray-600">
                Thank you <span className="font-semibold">{demoName}</span>! Our academic counselors at <span className="font-semibold">{demoBranch}</span> will reach out shortly on <span className="font-semibold">{demoPhone}</span>.
              </p>
              <button
                onClick={() => setDemoSuccess(false)}
                className="px-5 py-2 bg-[#5C1315] text-white rounded-md text-sm font-semibold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleHomeDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    value={demoName}
                    onChange={(e) => setDemoName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={demoPhone}
                    onChange={(e) => setDemoPhone(e.target.value)}
                    placeholder="10 digit mobile"
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1">
                    Target Academic Cohort
                  </label>
                  <select
                    value={demoCohort}
                    onChange={(e) => setDemoCohort(e.target.value)}
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  >
                    <option value="11th & 12th Science (Eng/Guj)">11th &amp; 12th Science (GSEB/CBSE + JEE/NEET)</option>
                    <option value="11th & 12th Commerce (Eng/Guj)">11th &amp; 12th Commerce (GSEB/CBSE)</option>
                    <option value="JEE Main & Advanced / NEET UG">JEE Main/Adv &amp; NEET UG Competitive Prep</option>
                    <option value="Std. 6th to 10th Secondary Foundation">Std. 6th to 10th Secondary Foundation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-200 mb-1">
                    Nearest Branch
                  </label>
                  <select
                    value={demoBranch}
                    onChange={(e) => setDemoBranch(e.target.value)}
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  >
                    <option value="Maninagar Head Office">Maninagar Head Office (Takshshila Square)</option>
                    <option value="Vastral Branch">Vastral Branch (Avadh Pride)</option>
                  </select>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm transition shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Request Callback
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
