'use client';

import React, { useState } from 'react';
import { coursesData, faqItems } from '../data/mockData';
import { Course } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Download,
  CheckCircle2,
  HelpCircle,
  FileText,
  ArrowRight,
  BookOpen,
  Sparkles,
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
      desc: 'Daily Practice Problems (DPP) with step-by-step solutions and speed-accuracy time drills.',
      bullets: ['Daily MCQ test system', 'Error-log tracking workbook', 'PYQ 10-year topicwise papers'],
    },
    {
      num: '03',
      title: 'Exam & Result Patterns',
      desc: 'Board-pattern subjective tests and NTA/NEET test series with instant doubt clearing.',
      bullets: ['Chapter-wise & weekly assessment tests', 'Speed and accuracy strategies', 'Negative mark elimination strategy'],
    },
    {
      num: '04',
      title: 'Study Materials',
      desc: 'Comprehensive theory booklets, formula handbooks, and Daily Practice Problems (DPPs).',
      bullets: ['Exhaustive theory + numerical drills', 'NCERT line-by-line coverage', 'Board-pattern model solution papers'],
    },
    {
      num: '05',
      title: 'Parent Progress Updates',
      desc: 'Transparent progress reporting and scheduled one-on-one doubt and mentorship support.',
      bullets: ['Regular attendance & test scorecards', '1-on-1 dedicated tutor support desks', 'Continuous individual guidance'],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-block px-3.5 py-1 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          OFFICIAL ACADEMIC TRACKS 2026-27
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Programs Built Around <br />
          <span className="text-red-600">Your Target Exam</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET with uncompromised dedication and proven methodologies.
        </p>

        {/* Hero Stock Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-3xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
            alt="Comprehensive Classroom & Exam Preparation"
            className="w-full h-56 sm:h-72 object-cover group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5 sm:p-6">
            <p className="text-white text-xs sm:text-sm font-bold">
              Structured curriculums designed for board perfection and competitive exam success.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM CARDS SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coursesData.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <div
                key={course.id}
                onClick={() => {
                  setSelectedCourseId(course.id);
                  const el = document.getElementById('program-detail-view');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border flex flex-col justify-between card-hover-effect bg-white text-gray-900 ${
                  isSelected
                    ? 'border-2 border-red-600 shadow-lg ring-4 ring-red-600/10'
                    : 'border-gray-200 hover:border-red-400 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isSelected
                          ? 'bg-red-600 text-white'
                          : 'bg-red-50 text-red-700 border border-red-100'
                      }`}
                    >
                      {course.tag}
                    </span>
                    <span className="text-xs font-mono font-semibold text-gray-400">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {course.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-600">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <span
                    className={`text-xs font-bold flex items-center gap-1 ${
                      isSelected ? 'text-red-600' : 'text-gray-500'
                    }`}
                  >
                    {isSelected ? 'Viewing Details Below ↓' : 'Explore Curriculum →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SELECTED PROGRAM DETAIL CARD WITH CAPSULE FILTER SELECTOR */}
      <section id="program-detail-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 scroll-mt-24">
        {/* Capsule Filter Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap pl-1 pr-2 hidden sm:inline">
            Select Track:
          </span>
          {coursesData.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/25 ring-2 ring-red-600/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <span>{course.title}</span>
                {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">Active</span>}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div>
            <div className="inline-block px-2.5 py-0.5 bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold uppercase tracking-wider rounded-md mb-2">
              Currently Viewing Detailed Syllabus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {selectedCourse.targetExam}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200 text-center">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-lg sm:text-xl font-extrabold text-red-600">
                {selectedCourse.stats.stat1}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Key Achievement</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-lg sm:text-xl font-extrabold text-red-600">
                {selectedCourse.stats.stat2}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Delivery Mode</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-lg sm:text-xl font-extrabold text-red-600">
                {selectedCourse.stats.stat3}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">Testing &amp; Evaluation</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Faculty Head
              </span>
              <span className="font-bold text-gray-900 mt-1 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.facultyHead}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Timings
              </span>
              <span className="font-bold text-gray-900 mt-1 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.timings}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Testing Freq
              </span>
              <span className="font-bold text-gray-900 mt-1 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.testingFrequency}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Medium / Target
              </span>
              <span className="font-bold text-red-600 mt-1 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.tag}
              </span>
            </div>
          </div>

          {/* Curriculum Breakdown Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-gray-900">
              Curriculum &amp; Syllabus Breakdown
            </h3>
            
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
              {selectedCourse.syllabus.map((s) => (
                <button
                  key={s.subject}
                  onClick={() => setOpenSyllabusSubject(s.subject)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                    openSyllabusSubject === s.subject || (!selectedCourse.syllabus.some((sub) => sub.subject === openSyllabusSubject) && s === selectedCourse.syllabus[0])
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {s.subject}
                </button>
              ))}
            </div>

            {(() => {
              const currentSubjectObj = selectedCourse.syllabus.find((s) => s.subject === openSyllabusSubject) || selectedCourse.syllabus[0];
              if (!currentSubjectObj) return null;
              return (
                <div className="bg-gray-50/80 p-5 sm:p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-sm text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-red-600" />
                    {currentSubjectObj.subject} Comprehensive Modules:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentSubjectObj.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onInquireClick(selectedCourse.title)}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/20 active:scale-98 cursor-pointer"
            >
              Inquire For Batch Admission
            </button>
            <button
              onClick={() => onViewSyllabus(selectedCourse)}
              className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold rounded-xl text-sm transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-red-600" /> Download Program PDF
            </button>
          </div>
        </div>
      </section>

      {/* 4. DELIVERABLES / TEACHING METHODS (Inline Accordion Pattern) */}
      <section className="bg-[#18191B] text-white py-16 sm:py-20 border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider rounded-full">
              Methodology &amp; Standards
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">What's Included</h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
              Touch any pillar to view detailed academic standards directly below.
            </p>
          </div>

          {/* Inline Expandable Accordion */}
          <div className="space-y-3">
            {includedDeliverables.map((item, idx) => {
              const isOpen = activeIncludedTab === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#22262E] border-red-500 shadow-xl ring-2 ring-red-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {/* Accordion Question/Header */}
                  <button
                    onClick={() => setActiveIncludedTab(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className={`font-mono font-bold text-sm px-2.5 py-1 rounded-lg ${
                        isOpen ? 'bg-red-600 text-white' : 'bg-white/10 text-red-400'
                      }`}>
                        {item.num}
                      </span>
                      <span className="font-bold text-base sm:text-lg text-white">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 hidden sm:inline">
                        {isOpen ? 'Close' : 'View Details'}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-red-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Detail Card Right Directly Underneath */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-700/80 space-y-4 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                          Key Highlights:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {item.bullets.map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-center gap-2 text-xs text-gray-200 bg-black/40 p-3 rounded-xl border border-white/5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-gray-500">Clarify your doubts regarding batches, admissions, and course materials.</p>
        </div>

        <div className="space-y-2.5">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-sm text-gray-900 hover:bg-gray-50 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-red-600" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
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
