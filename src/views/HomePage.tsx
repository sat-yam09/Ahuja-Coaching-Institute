'use client';

import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  coursesData,
  teachingApproach,
  learningSpaces,
  testimonials,
  heroStats,
  tickerResults,
} from '../data/mockData';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  LineChart,
  FileText,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Clock,
  Send,
  Building2,
  UserCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';

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

  // Quick Home Demo Form State
  const [demoName, setDemoName] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoCohort, setDemoCohort] = useState('JEE Main & Advanced');
  const [demoBranch, setDemoBranch] = useState('Vastral Main Campus');
  const [demoSuccess, setDemoSuccess] = useState(false);

  const activeCourse = coursesData.find((c) => c.id === selectedCurriculumTab) || coursesData[0];

  const handleHomeDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName.trim() || !demoPhone.trim()) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#5C1315', '#C99A2C', '#ffffff'],
      });
    } catch {
      // fallback
    }

    setDemoSuccess(true);
  };

  return (
    <div className="space-y-16 pb-12 bg-[#FAF6EE]">
      {/* HERO SECTION */}
      <section className="relative bg-[#5C1315] text-white overflow-hidden py-16 sm:py-24 border-b-4 border-[#C99A2C]">
        {/* Background Stock Image with Deep Maroon Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920"
            alt="Students Studying in Academic Campus"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#380608]/95 via-[#5C1315]/90 to-[#2A0506]/92" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C99A2C_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Gujarat's Premier Competitive Coaching Since 1998
              </div>

              <h1 className="text-4xl sm:text-6xl font-black font-serif leading-tight tracking-tight text-white">
                Zero Excuses. <br />
                <span className="text-[#C99A2C]">Pure Results.</span>
              </h1>

              <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-2xl font-light">
                Comprehensive coaching for CBSE, GSEB, ICSE, JEE and NEET with expert faculty, personalized mentoring, and a proven track record of success.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onInquireClick}
                  className="px-7 py-3.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold rounded-xl text-sm transition shadow-lg hover:shadow-xl uppercase tracking-wider flex items-center gap-2"
                >
                  Schedule Demo Batch <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('scoreboard')}
                  className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold rounded-xl text-sm transition uppercase tracking-wider"
                >
                  Browse Ranks & Toppers
                </button>
              </div>
            </div>

            {/* Right Column: Hero Metrics Scoreboard Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 animate-scale-up">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl space-y-4">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>HISTORICAL RESULTS SCOREBOARD</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">VERIFIED</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  {heroStats.map((stat, idx) => (
                    <div key={idx} className="bg-black/30 p-3.5 rounded-xl border border-white/10 hover:border-amber-400/40 transition">
                      <div className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">{stat.value}</div>
                      <div className="text-[11px] text-gray-200 font-medium leading-tight mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-amber-200/80 bg-amber-950/40 p-2.5 rounded-lg border border-amber-500/20 text-center">
                  ⚡ 2026 Admissions Open for JEE, NEET & Foundation Batches
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE RESULTS TICKER */}
      <div className="bg-[#400B0D] py-3 text-white overflow-hidden border-y border-[#C99A2C]/30 shadow-inner">
        <div className="animate-marquee whitespace-nowrap inline-flex items-center gap-8 font-medium text-xs">
          {tickerResults.concat(tickerResults).map((res, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="text-amber-400 font-bold">{res.name}</span>
              <span className="bg-[#5C1315] px-2 py-0.5 rounded border border-amber-400/40 text-amber-200 font-mono text-[11px]">
                {res.score}
              </span>
              <span className="text-white/80">{res.exam}</span>
              <span className="text-amber-500/40">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* OUR CURRICULUM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            OUR CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#4A0E10]">
            Targeted Programs For Every Academic Goal
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Select your goal track to view batch timings, faculty leads, and key preparatory features.
          </p>
        </div>

        {/* Curriculum Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {coursesData.map((course) => {
            const isSelected = selectedCurriculumTab === course.id;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCurriculumTab(course.id)}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#5C1315] text-white shadow-md border-b-2 border-[#C99A2C]'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
                }`}
              >
                <span>{course.title}</span>
                <span className="text-[10px] opacity-75">({course.category})</span>
              </button>
            );
          })}
        </div>

        {/* Active Curriculum Highlight Box */}
        <div className="bg-white rounded-2xl border border-[#E5DCCB] p-6 sm:p-8 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in-up card-hover-effect">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-3 py-1 bg-amber-100 text-[#5C1315] text-xs font-bold rounded-lg uppercase tracking-wider">
              {activeCourse.tag} • {activeCourse.badge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
              {activeCourse.targetExam}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {activeCourse.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-amber-200">
                <span className="text-[11px] font-bold text-[#5C1315] uppercase tracking-wider block mb-1">
                  BATCH TIMINGS
                </span>
                <span className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#5C1315]" /> {activeCourse.timings}
                </span>
              </div>
              <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-amber-200">
                <span className="text-[11px] font-bold text-[#5C1315] uppercase tracking-wider block mb-1">
                  FACULTY LEAD
                </span>
                <span className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#5C1315]" /> {activeCourse.facultyHead}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">KEY FEATURES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeCourse.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  onSelectCourse(activeCourse.id);
                  setActiveTab('courses');
                }}
                className="px-6 py-3 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-2"
              >
                Explore Full Curriculum <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#FAF6EE] p-6 rounded-2xl border border-amber-200 space-y-4">
            <h4 className="text-sm font-bold text-[#5C1315] uppercase tracking-wider border-b pb-2">
              Proven Track Record Statistics
            </h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#5C1315] font-bold flex items-center justify-center text-sm font-serif">
                  01
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{activeCourse.stats.stat1}</div>
                  <div className="text-[11px] text-gray-500">Verified Top Performers</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#5C1315] font-bold flex items-center justify-center text-sm font-serif">
                  02
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{activeCourse.stats.stat2}</div>
                  <div className="text-[11px] text-gray-500">Selections & Merit Achievers</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#5C1315] font-bold flex items-center justify-center text-sm font-serif">
                  03
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{activeCourse.stats.stat3}</div>
                  <div className="text-[11px] text-gray-500">Continuous Assessment Series</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE AHUJA METHOD SECTION */}
      <section className="bg-gradient-to-b from-[#5C1315] to-[#400B0D] text-white py-16 border-y-4 border-[#C99A2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
              THE AHUJA METHOD
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Four Pillars Behind Every Student Success
            </h2>
            <p className="text-sm text-amber-100/80 max-w-xl mx-auto">
              Our systematic approach eliminates exam anxiety and turns complex concepts into lasting memory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingApproach.map((item, idx) => {
              const icons = [
                <BookOpen className="w-7 h-7 text-amber-400" key="1" />,
                <LineChart className="w-7 h-7 text-amber-400" key="2" />,
                <FileText className="w-7 h-7 text-amber-400" key="3" />,
                <RotateCcw className="w-7 h-7 text-amber-400" key="4" />,
              ];

              return (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400/50 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-amber-400/20 rounded-xl w-fit border border-amber-400/30 group-hover:scale-110 transition duration-300">
                      {icons[idx % 4]}
                    </div>
                    <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-100/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR LEARNING SPACES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            OUR LEARNING SPACES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#4A0E10]">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Designed for maximum concentration, instant doubt solving, and simulated computer test readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningSpaces.slice(0, 3).map((space) => (
            <div
              key={space.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5DCCB] shadow-md hover:shadow-xl transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={space.imageUrl}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5C1315] text-amber-200 text-[10px] font-bold uppercase rounded-md shadow-xs">
                  {space.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#4A0E10] text-lg font-serif">{space.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{space.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setActiveTab('gallery')}
            className="px-6 py-3 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm inline-flex items-center gap-2"
          >
            Explore Full Campus Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* PARENTS & STUDENTS TESTIMONIALS */}
      <section className="bg-amber-100/60 py-16 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-amber-200">
              REAL TESTIMONIALS
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#4A0E10]">
              What Our Parents and Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-amber-500 font-serif text-3xl font-bold leading-none">“</div>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#5C1315]">{item.name}</h4>
                    <p className="text-[10px] text-gray-500">{item.examOrChildExam}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK A FREE DEMO CLASS FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#5C1315] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#C99A2C] space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full">
              FREE TRIAL PASS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">Book a Free Demo Class</h2>
            <p className="text-xs text-amber-100/80 max-w-md mx-auto">
              Experience our concept-first lectures and faculty interaction firsthand before enrolling.
            </p>
          </div>

          {demoSuccess ? (
            <div className="bg-white text-gray-900 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-[#5C1315] font-serif">Demo Request Submitted!</h3>
              <p className="text-xs text-gray-600">
                Thank you <span className="font-bold">{demoName}</span>! Our Vasrtal & Science City counselors will reach out shortly on <span className="font-bold">{demoPhone}</span>.
              </p>
              <button
                onClick={() => setDemoSuccess(false)}
                className="px-6 py-2 bg-[#5C1315] text-white rounded-xl text-xs font-bold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleHomeDemoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    value={demoName}
                    onChange={(e) => setDemoName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={demoPhone}
                    onChange={(e) => setDemoPhone(e.target.value)}
                    placeholder="10 digit mobile"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                    Target Cohort
                  </label>
                  <select
                    value={demoCohort}
                    onChange={(e) => setDemoCohort(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  >
                    <option value="JEE Main & Advanced">JEE Main & Advanced</option>
                    <option value="NEET UG Medical">NEET UG Medical</option>
                    <option value="Class 11-12 Boards">Class 11-12 Boards</option>
                    <option value="Junior Foundation 6-10">Class 6-10 Foundation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1">
                    Nearest Branch
                  </label>
                  <select
                    value={demoBranch}
                    onChange={(e) => setDemoBranch(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                  >
                    <option value="Vastral Main Campus">Vastral Main Campus</option>
                    <option value="Science City Campus">Science City Campus</option>
                    <option value="Maninagar Branch">Maninagar Branch</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
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
