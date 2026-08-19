'use client';

import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  coursesData,
  teachingApproach,
  learningSpaces,
  testimonials,
  heroStats,
  facultyMembers,
  resultStudents,
} from '../data/mockData';
import { GoogleReviewsMarquee } from '../components/GoogleReviewsMarquee';

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
  FlaskConical,
  Award,
  Sparkles,
  ChevronRight,
  Building2,
  MapPin,
  TrendingUp,
  Quote,
  Trophy,
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
  const [demoCohort, setDemoCohort] = useState('11th & 12th Science (JEE/NEET)');
  const [demoBranch, setDemoBranch] = useState('Maninagar Head Office');
  const [demoSuccess, setDemoSuccess] = useState(false);

  const activeCourse = coursesData.find((c) => c.id === selectedCurriculumTab) || coursesData[0];

  const handleHomeDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoPhone.trim()) return;
    setDemoSuccess(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION (With High-Quality Stock Image & Floating Highlights) */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-semibold shadow-xs animate-fadeIn">
            <Trophy className="w-4 h-4 text-red-600" aria-hidden="true" />
            <span>27+ Years of Academic Excellence • Est. 1998</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Building Strong Foundations, <br />
            <span className="text-red-600">Achieving Top Results</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Guiding students towards academic excellence since 1998. Join our legacy of 22,000+ successful students across Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onInquireClick}
              className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-red-600/20 active:scale-98 flex items-center gap-2"
            >
              Inquire Now <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className="px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-xl text-sm transition shadow-xs hover:border-gray-400 active:scale-98"
            >
              Explore Programs
            </button>
          </div>

          {/* Hero Stock Image Showcase */}
          <div className="relative pt-6 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1400"
                alt="Students studying at Ahuja Career Institute"
                className="w-full h-64 sm:h-96 object-cover group-hover:scale-102 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-xs">
                    Admissions 2026-27 Open
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-xs text-white text-xs font-medium rounded-full">
                    Maninagar &amp; Vastral Campuses
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Nurturing Conceptual Clarity &amp; Rank-Producing Discipline
                </h3>
              </div>
            </div>
          </div>

          {/* Key Stats Bar */}
          <div className="pt-8 max-w-3xl mx-auto grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-0.5 px-1">
                <div className="text-xl sm:text-3xl font-extrabold text-red-600 whitespace-nowrap">{stat.value}</div>
                <div className="text-[11px] sm:text-sm text-gray-500 font-medium leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial Marquee Ticker */}
          <div className="pt-8 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee w-max py-4">
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div
                    key={`${t.id}-${idx}`}
                    className="flex items-center gap-3 px-6 min-w-max"
                  >
                    <Quote className="w-4 h-4 text-red-400 flex-shrink-0 opacity-60" />
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-8 h-8 rounded-full object-cover border border-gray-200 flex-shrink-0"
                    />
                    <p className="text-xs sm:text-sm text-gray-700 max-w-xs sm:max-w-sm">
                      <span className="italic">"{t.quote.length > 80 ? t.quote.slice(0, 80) + '…' : t.quote}"</span>
                      <span className="text-gray-400 ml-1.5">— {t.name}</span>
                    </p>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100 flex-shrink-0">
                      {t.examOrChildExam}
                    </span>
                    <div className="w-px h-6 bg-gray-200 mx-2 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. A LEGACY OF 27+ YEARS (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full">
              ESTABLISHED 1998
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Legacy of <span className="text-red-500">27+ Years</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Founded in 1998 on the vision of Late R.A. Ahuja Sir, Ahuja Career Institute has been a beacon of academic excellence in Ahmedabad. Our philosophy centers on providing quality education with unwavering dedication, discipline, and personal mentorship.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              We believe in nurturing talent and instilling a lifelong passion for learning, empowering over 22,000 students to secure admissions in premier engineering and medical institutions across India.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="text-red-400 hover:text-red-300 font-bold text-sm inline-flex items-center gap-2 group transition"
              >
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/60 group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
                alt="Classroom at Ahuja Career Institute"
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-red-400">Inspiring Learning Spaces</p>
                <p className="text-sm font-bold">The foundation of academic rigour and conceptual clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS (White / Light Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-2 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Comprehensive curriculum and expert guidance from foundation to competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Science */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition duration-300 card-hover-effect flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Science (JEE/NEET)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rigorous preparation for engineering (JEE Main/Advanced) and medical (NEET UG) entrance exams with expert faculty and proven test systems.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onSelectCourse('competitive-jee-neet');
                setActiveTab('courses');
              }}
              className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center gap-1.5 group self-start pt-2 cursor-pointer"
            >
              Explore Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Commerce */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition duration-300 card-hover-effect flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Commerce</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Expert guidance for Accountancy, Statistics, Economics, and Business Studies to excel in school, GSEB/CBSE boards, and foundation exams.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onSelectCourse('commerce');
                setActiveTab('courses');
              }}
              className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center gap-1.5 group self-start pt-2 cursor-pointer"
            >
              Explore Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: Foundation */}
          <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition duration-300 card-hover-effect flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Foundation (8th-10th)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lays strong program focus to build conceptual clarity, mathematical rigor, and scientific temperament for standard 8th, 9th, and 10th boards.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onSelectCourse('foundation');
                setActiveTab('courses');
              }}
              className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center gap-1.5 group self-start pt-2 cursor-pointer"
            >
              Explore Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. LEARN FROM SUBJECT MATTER EXPERTS (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-900 border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1000"
                alt="Subject Matter Experts at Ahuja Institute"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-white text-xs font-semibold bg-red-600 px-3 py-1 rounded-md shadow-xs">
                  Mentorship Driven
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learn from <span className="text-red-500">Subject Matter</span> Experts
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our leadership and senior faculty have personally mentored thousands of students to top ranks. With decades of combined teaching experience, they simplify complex concepts into crystal-clear fundamentals.
            </p>

            <div className="bg-gray-900/90 p-5 rounded-2xl border border-gray-800 space-y-1.5 shadow-md">
              <h4 className="font-bold text-base text-white">Chiragbhai Ahuja</h4>
              <p className="text-xs font-bold text-red-400">Director &amp; Lead in Mathematics</p>
              <p className="text-xs text-gray-300 leading-relaxed pt-1">
                16+ years of inspiring students to conquer mathematics with deep conceptual clarity, speed tricks, and board exam perfection.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('faculty')}
                className="text-red-400 hover:text-red-300 font-bold text-sm inline-flex items-center gap-2 group cursor-pointer"
              >
                Meet All Faculty <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CELEBRATING EXCELLENCE (White Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Celebrating <span className="text-red-600">Excellence</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Consistently benchmarked by students achieving top ranks and scores every year.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resultStudents.slice(0, 4).map((top) => (
            <div
              key={top.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:shadow-md transition card-hover-effect flex items-center gap-4"
            >
              <img
                src={top.avatarUrl}
                alt={top.name}
                className="w-14 h-14 rounded-xl object-cover border border-gray-100 flex-shrink-0"
              />
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-gray-900 leading-tight">{top.name}</h4>
                <p className="text-xs text-gray-500">{top.exam}</p>
                <div className="text-base font-extrabold text-red-600">{top.score}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setActiveTab('scoreboard')}
            className="px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-lg text-sm transition shadow-xs cursor-pointer"
          >
            See All Results →
          </button>
        </div>
      </section>

      {/* 6. GOOGLE REVIEWS CARD MARQUEE SECTION */}
      <GoogleReviewsMarquee
        title="What Students &amp; Parents Say on Google"
        subtitle="Transparent 5-star ratings and reviews from our Maninagar &amp; Vastral campuses on Google Maps."
      />

      {/* 7. WHY CHOOSE US (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl">

        <div className="text-center space-y-2 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-red-500">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            The pillars of our academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-[#22262E]/80 rounded-2xl border border-gray-800 p-6 shadow-md hover:border-gray-700 hover:bg-[#22262E] transition card-hover-effect space-y-4">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-white">{teachingApproach[0].title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{teachingApproach[0].description}</p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#22262E]/80 rounded-2xl border border-gray-800 p-6 shadow-md hover:border-gray-700 hover:bg-[#22262E] transition card-hover-effect space-y-4">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <LineChart className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-white">{teachingApproach[1].title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{teachingApproach[1].description}</p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#22262E]/80 rounded-2xl border border-gray-800 p-6 shadow-md hover:border-gray-700 hover:bg-[#22262E] transition card-hover-effect space-y-4">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-white">{teachingApproach[2].title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{teachingApproach[2].description}</p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-[#22262E]/80 rounded-2xl border border-gray-800 p-6 shadow-md hover:border-gray-700 hover:bg-[#22262E] transition card-hover-effect space-y-4">
            <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-base text-white">{teachingApproach[3].title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{teachingApproach[3].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAMPUS LIFE (White / Light Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Campus <span className="text-red-600">Life</span>
            </h2>
            <p className="text-sm text-gray-600">A glimpse into our vibrant learning environment.</p>
          </div>
          <button
            onClick={() => setActiveTab('gallery')}
            className="text-red-600 hover:text-red-700 font-bold text-sm inline-flex items-center gap-1 group cursor-pointer"
          >
            View Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-xs border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
              alt="Campus Life"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-xs border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600"
              alt="Library Study Space"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-xs border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
              alt="Student Collaboration"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 8. SEND AN INQUIRY (Midnight Obsidian Theme) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-3xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-6">
        <div className="text-center space-y-1.5">
          <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full mb-1">
            GET IN TOUCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Send an Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Fill out the form below and our counseling team will get back to you shortly.
          </p>
        </div>

        {demoSuccess ? (
          <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Inquiry Request Received</h3>
            <p className="text-sm text-gray-300">
              Thank you <span className="font-bold text-white">{demoName}</span>! Our counselors at{' '}
              <span className="font-bold text-red-400">{demoBranch}</span> will contact you on{' '}
              <span className="font-bold text-white">{demoPhone}</span>.
            </p>
            <button
              onClick={() => setDemoSuccess(false)}
              className="px-5 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleHomeDemoSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-500 rounded-xl border border-gray-700 text-sm focus:border-red-500 focus:outline-hidden transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={demoPhone}
                  onChange={(e) => setDemoPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 bg-gray-900 text-white placeholder-gray-500 rounded-xl border border-gray-700 text-sm focus:border-red-500 focus:outline-hidden transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Interested In</label>
                <select
                  value={demoCohort}
                  onChange={(e) => setDemoCohort(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 text-sm focus:border-red-500 focus:outline-hidden transition"
                >
                  <option value="11th & 12th Science (JEE/NEET)">11th &amp; 12th Science (JEE/NEET)</option>
                  <option value="11th & 12th Commerce">11th &amp; 12th Commerce</option>
                  <option value="Std. 8th to 10th Foundation">Std. 8th to 10th Foundation</option>
                  <option value="Crash Course / Test Series">Crash Course / Test Series</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Preferred Center</label>
                <select
                  value={demoBranch}
                  onChange={(e) => setDemoBranch(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 text-sm focus:border-red-500 focus:outline-hidden transition"
                >
                  <option value="Maninagar Head Office">Maninagar HQ (Takshshila Square)</option>
                  <option value="Vastral Branch">Vastral Branch (Avadh Pride)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/30 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                Submit Admission Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
