'use client';

import React, { useState } from 'react';
import { facultyMembers, brandTagline } from '../data/mockData';
import { FacultyMember } from '../types';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  PhoneCall,
  Search,
  Filter,
  ArrowRight,
  UserCheck,
  BrainCircuit,
  MessageSquare,
  Target,
} from 'lucide-react';

interface FacultyPageProps {
  onInquireClick: (facultyContext?: string) => void;
}

type FacultyFilter = 'All' | 'JEE/NEET' | 'Science Board' | 'Junior Division' | 'Commerce';

export const FacultyPage: React.FC<FacultyPageProps> = ({ onInquireClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<FacultyFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: FacultyFilter; label: string; count: number }[] = [
    { id: 'All', label: 'All Faculty', count: facultyMembers.length },
    {
      id: 'JEE/NEET',
      label: 'JEE & NEET Experts',
      count: facultyMembers.filter((f) => f.category === 'JEE/NEET').length,
    },
    {
      id: 'Science Board',
      label: 'Science Board',
      count: facultyMembers.filter((f) => f.category === 'Science Board').length,
    },
    {
      id: 'Junior Division',
      label: 'Junior Foundation (6th-10th)',
      count: facultyMembers.filter((f) => f.category === 'Junior Division').length,
    },
    {
      id: 'Commerce',
      label: 'Commerce Division',
      count: facultyMembers.filter((f) => f.category === 'Commerce').length,
    },
  ];

  const filteredFaculty = facultyMembers.filter((fac) => {
    const matchesCategory =
      selectedCategory === 'All' || fac.category === selectedCategory;
    const matchesSearch =
      fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white text-gray-900">
      {/* 1. HERO SECTION (Centered Layout matching Courses, About, and Contact pages) */}
      <section className="relative pt-12 sm:pt-20 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs">
            <GraduationCap className="w-4 h-4 text-red-600" />
            <span>Classroom Teaching Excellence • Since 1998</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Learn Directly From <br />
            <span className="text-red-600">Ahmedabad's Master Mentors</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Conceptual mastery begins with dedicated classroom teaching. Our senior educators break down complex physics derivations, organic mechanisms, calculus proofs, and board theory in live interactive sessions with individual doubt desks.
          </p>

          {/* Teaching Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-semibold bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Concept-First Pedagogy</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-semibold bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Daily Doubt Desks</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-semibold bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Maninagar &amp; Vastral Campuses</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onInquireClick()}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-red-600/25 active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>Attend Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+917405328676"
              className="px-5 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold rounded-xl text-xs sm:text-sm transition shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>Call +91 74053 28676</span>
            </a>
          </div>

          {/* Hero Stock Image Showcase (Centered with Proper Text Overlay) */}
          <div className="relative pt-4 max-w-3xl sm:max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900 group">
              <img
                src="/assets/faculty-hero-teaching.jpg"
                alt="Faculty teaching students in modern classroom at Ahuja Career Institute"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-102 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-red-600/95 backdrop-blur-xs text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Live Offline Classroom Teaching
                </span>
              </div>

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left space-y-1">
                <p className="text-base sm:text-lg font-extrabold tracking-tight">
                  Dedicated Faculty Mentorship &amp; Interactive Classroom Pedagogy
                </p>
                <p className="text-xs sm:text-sm text-gray-200 font-normal">
                  Interactive board sessions, daily doubt desks, step-by-step problem solving &amp; personalized academic care across Maninagar and Vastral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FACULTY FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-200">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/25 ring-2 ring-red-500/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    selectedCategory === tab.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty or subject..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-hidden focus:border-red-500 shadow-2xs transition"
            />
          </div>
        </div>

        {/* 3. FACULTY CARDS GRID (Sleeker, Compact Cards) */}
        <div className="pt-8">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-200 space-y-3">
              <Search className="w-10 h-10 text-gray-400 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900">No faculty members found</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                No educators matched "{searchQuery}". Try searching for another subject or clear filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
              {filteredFaculty.map((fac) => (
                <div
                  key={fac.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-red-300"
                >
                  <div>
                    {/* Faculty Photo Container (Centered portrait on beige backdrop) */}
                    <div className="relative h-48 sm:h-52 w-full bg-[#FFF0D6] overflow-hidden flex items-center justify-center">
                      <img
                        src={fac.avatarUrl}
                        alt={`${fac.name} - ${fac.role} at Ahuja Career Institute`}
                        className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-104 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold shadow-xs uppercase tracking-wider">
                          {fac.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold font-mono shadow-xs">
                          {fac.experience}
                        </span>
                      </div>

                      {/* Bottom Overlay Name & Role */}
                      <div className="absolute bottom-2.5 left-3 right-3 text-white">
                        <h3 className="text-base font-extrabold tracking-tight drop-shadow-xs leading-snug">
                          {fac.name}
                        </h3>
                        <p className="text-[11px] font-semibold text-red-200 drop-shadow-xs">
                          {fac.role}
                        </p>
                      </div>
                    </div>

                    {/* Faculty Body Content - Only Title & Details */}
                    <div className="p-3.5 sm:p-4 space-y-2">
                      {/* Title / Role & Education */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                        <BookOpen className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span className="truncate">{fac.education}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-3.5 sm:p-4 pt-0">
                    <button
                      onClick={() => onInquireClick(`${fac.name} (${fac.role})`)}
                      className="w-full py-2.5 bg-red-50 hover:bg-red-600 text-red-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 border border-red-200 hover:border-red-600 cursor-pointer group/btn"
                    >
                      <span>Inquire for Std 6th to 12th</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. TEACHING METHODOLOGY & PEDAGOGY (Obsidian Dark Section) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-800 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider rounded-full">
              Teaching Methodology
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Our Faculty Delivers <span className="text-red-500">Consistent Results</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Behind our 27-year record of hundreds of 100/100 perfect scores is an uncompromising pedagogical discipline developed by Late Shri R.A. Ahuja Sir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/90 p-6 rounded-2xl border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                <BrainCircuit className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Concept First, Rote Learning Never</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Every formula, theorem, and chemical reaction is derived from core first principles. Students learn the 'why' before the 'how', giving them the confidence to solve unseen JEE Advanced and NEET question variations.
              </p>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-2xl border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Dedicated Weekend Doubt Sessions</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                No student is allowed to carry confusion to the next class. Dedicated weekend doubt-resolution sessions and personal tutor desks ensure every single numerical query is thoroughly resolved.
              </p>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-2xl border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                <Target className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Board &amp; Competitive Synchronized Pedagogy</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Preparation for Gujarat Board / CBSE theory writing and JEE/NEET speed tests runs in harmony. Students excel simultaneously in school boards and national competitive percentiles.
              </p>
            </div>

            <div className="bg-gray-900/90 p-6 rounded-2xl border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white">4. Micro Error-Log Tracking</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                After every test, faculty review student answer sheets to pinpoint error categories — whether conceptual, calculation-based, or time-management related — creating custom corrective drill sheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION / BOOK A DEMO CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-b from-red-50 to-white p-8 sm:p-12 rounded-3xl border border-red-200 shadow-md space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions 2026-27</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Attend A Free Demo Lecture With Our Faculty
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
            Experience first-hand how our subject mentors break down complex syllabus topics. Book a counseling session at our Maninagar HQ or Vastral campus.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onInquireClick()}
              className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/25 active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+917405328676"
              className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold rounded-xl text-sm transition shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>Call Helpline: +91 74053 28676</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
