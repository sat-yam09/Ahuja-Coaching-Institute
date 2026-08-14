'use client';

import React, { useState } from 'react';
import { coursesData, faqItems } from '../data/mockData';
import { Course } from '../types';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  CheckCircle2,
  Calendar,
  Clock,
  UserCheck,
  Sparkles,
  HelpCircle,
  FileText,
} from 'lucide-react';

interface CoursesPageProps {
  onInquireClick: (courseTitle?: string) => void;
  onViewSyllabus: (course: Course) => void;
  initialCourseId?: string;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onInquireClick,
  onViewSyllabus,
  initialCourseId = 'jee',
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openSyllabusSubject, setOpenSyllabusSubject] = useState<string>('Physics');
  const [activeIncludedTab, setActiveIncludedTab] = useState<number>(0);

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  const includedDeliverables = [
    {
      num: '01',
      title: 'Teaching Methods',
      desc: 'Interactive personalized lectures combined with experienced faculty guidance and traditional conceptual depth.',
      bullets: ['Concept-first, not memorization', 'Small batch personal attention', 'Visual digital smartboards'],
    },
    {
      num: '02',
      title: 'Practice Methods',
      desc: 'Daily Practice Papers (DPP) with step-by-step solutions and speed-accuracy time drills.',
      bullets: ['Level-wise problem sheets', 'Error-log tracking workbook', 'PYQ 10-year topicwise papers'],
    },
    {
      num: '03',
      title: 'Exam & Result Patterns',
      desc: 'NTA & NEET pattern online CBT computer lab tests with immediate micro-analytics report.',
      bullets: ['Weekly part & full syllabus tests', 'All India percentile ranking', 'Negative mark elimination strategy'],
    },
    {
      num: '04',
      title: 'Study Materials',
      desc: 'Comprehensive self-sufficient theory booklets and formula handbooks created by top faculties.',
      bullets: ['Exhaustive theory + solved examples', 'NCERT line-by-line highlight maps', 'Mind maps & revision sheets'],
    },
    {
      num: '05',
      title: 'Parent Progress Updates',
      desc: 'Transparent progress reporting and monthly scheduled one-on-one parent teacher meetings.',
      bullets: ['Real-time SMS/WhatsApp attendance', 'Post-test detailed OMR analytics', 'Academic counseling sessions'],
    },
  ];

  return (
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* COURSES HERO */}
      <section className="bg-[#5C1315] text-white py-16 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            PROGRAMS & CURRICULUMS 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Programs Built Around Your Target Exam
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            From foundation-level board prep to advanced JEE & NEET tracks. Structured for results.
          </p>
        </div>
      </section>

      {/* WHAT WE TEACH - 4 CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            WHAT WE TEACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
            Our Core Target Academic Tracks
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between card-hover-effect ${
                  isSelected
                    ? 'bg-[#5C1315] text-white border-[#C99A2C] shadow-xl ring-2 ring-[#C99A2C]'
                    : 'bg-white text-gray-900 border-[#E5DCCB] hover:border-amber-300 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-amber-400 text-[#1A1818]'
                          : 'bg-amber-100 text-[#5C1315]'
                      }`}
                    >
                      {course.tag}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? 'text-amber-200' : 'text-gray-400'
                      }`}
                    >
                      {course.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold font-serif ${
                      isSelected ? 'text-white' : 'text-[#4A0E10]'
                    }`}
                  >
                    {course.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-amber-100/90' : 'text-gray-600'
                    }`}
                  >
                    {course.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-current/10 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${
                      isSelected ? 'text-amber-300' : 'text-[#5C1315]'
                    }`}
                  >
                    Explore Curriculum &gt;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILED EXAM EXPLORER PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {coursesData.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourseId(c.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                selectedCourseId === c.id
                  ? 'bg-[#5C1315] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {c.category} {c.id === 'board' ? '11-12' : c.id === 'junior' ? '6-10' : ''}
            </button>
          ))}
        </div>

        {/* Selected Track Detailed View Card */}
        <div className="bg-white rounded-2xl border border-[#E5DCCB] shadow-xl p-6 sm:p-10 space-y-8">
          <div>
            <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              TARGET EXAM OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10] mt-2">
              {selectedCourse.targetExam}
            </h2>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FAF6EE] p-4 rounded-xl border border-amber-200 text-center">
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <div className="text-base sm:text-lg font-black text-[#5C1315] font-serif">
                {selectedCourse.stats.stat1}
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <div className="text-base sm:text-lg font-black text-[#5C1315] font-serif">
                {selectedCourse.stats.stat2}
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-2xs">
              <div className="text-base sm:text-lg font-black text-[#5C1315] font-serif">
                {selectedCourse.stats.stat3}
              </div>
            </div>
          </div>

          {/* Meta Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] font-bold">
                FACULTY HEAD
              </span>
              <span className="font-bold text-gray-900 text-sm mt-0.5 block">
                {selectedCourse.facultyHead}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] font-bold">
                TIMINGS
              </span>
              <span className="font-bold text-gray-900 text-sm mt-0.5 block">
                {selectedCourse.timings}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] font-bold">
                TESTING FREQ
              </span>
              <span className="font-bold text-gray-900 text-sm mt-0.5 block">
                {selectedCourse.testingFrequency}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] font-bold">
                TARGET EXAM
              </span>
              <span className="font-bold text-[#5C1315] text-sm mt-0.5 block">
                {selectedCourse.tag}
              </span>
            </div>
          </div>

          {/* SYLLABUS BREAKDOWN ACCORDION */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-bold text-[#5C1315] uppercase tracking-widest border-b pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" /> SYLLABUS BREAKDOWN BY SUBJECT
            </h3>

            <div className="space-y-3">
              {selectedCourse.syllabus.map((s, idx) => {
                const isOpen = openSyllabusSubject === s.subject || idx === 0;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-[#FAF6EE]"
                  >
                    <button
                      onClick={() => setOpenSyllabusSubject(isOpen ? '' : s.subject)}
                      className="w-full text-left px-5 py-3.5 flex items-center justify-between font-bold text-sm text-[#4A0E10] hover:bg-amber-100/50 transition"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#5C1315]" />
                        {s.subject}
                      </span>
                      <span className="text-xs text-gray-500">
                        {s.topics.length} Modules Covered {isOpen ? '-' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 bg-white border-t border-gray-200 text-xs text-gray-700 space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {s.topics.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg font-medium"
                            >
                              • {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onInquireClick(selectedCourse.title)}
              className="px-7 py-3.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md"
            >
              Book Demo Class
            </button>
            <button
              onClick={() => onViewSyllabus(selectedCourse)}
              className="px-7 py-3.5 bg-white hover:bg-amber-50 text-gray-900 border border-gray-300 font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-2xs flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#5C1315]" /> Download Syllabus PDF
            </button>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="bg-gradient-to-b from-[#2A1011] to-[#1E0B0C] text-white py-16 border-y-4 border-[#C99A2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-400/20 px-3 py-1 rounded-full">
              DELIVERABLES
            </span>
            <h2 className="text-3xl font-bold font-serif text-white">What's Included</h2>
            <p className="text-xs text-amber-100/80 max-w-md mx-auto">
              Every student gets standard-setting academic resources and personal oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector */}
            <div className="lg:col-span-5 space-y-2">
              {includedDeliverables.map((item, idx) => {
                const isActive = activeIncludedTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIncludedTab(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition flex items-center gap-4 border ${
                      isActive
                        ? 'bg-[#5C1315] text-white border-amber-400 shadow-lg'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-mono font-bold text-amber-400 text-sm">{item.num}</span>
                    <span className="font-bold text-sm">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right detail view */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 space-y-6">
              <div>
                <span className="text-amber-400 font-mono text-sm font-bold block mb-1">
                  {includedDeliverables[activeIncludedTab].num} MODULE
                </span>
                <h3 className="text-2xl font-bold font-serif text-white">
                  {includedDeliverables[activeIncludedTab].title}
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed mt-2">
                  {includedDeliverables[activeIncludedTab].desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  KEY FEATURES
                </span>
                <div className="space-y-2">
                  {includedDeliverables[activeIncludedTab].bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs text-gray-200 bg-black/20 p-2.5 rounded-lg border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#4A0E10]">FAQ</h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DCCB] shadow-2xs overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between font-bold text-sm text-[#4A0E10] hover:bg-amber-50/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#5C1315] flex-shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#5C1315]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAF6EE]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
