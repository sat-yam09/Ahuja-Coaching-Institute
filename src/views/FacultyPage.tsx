'use client';

import React from 'react';
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

export const FacultyPage: React.FC<FacultyPageProps> = ({ onInquireClick }) => {

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

      {/* 2. FACULTY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
