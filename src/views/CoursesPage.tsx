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
} from 'lucide-react';

interface CoursesPageProps {
  onInquireClick: (courseTitle?: string) => void;
  onViewSyllabus: (course: Course) => void;
  initialCourseId?: string;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onInquireClick,
  onViewSyllabus,
  initialCourseId = 'science-11-12',
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
    <div className="space-y-10 pb-16 bg-[#FAF6EE]">
      {/* COURSES HERO */}
      <section className="relative text-white py-16 sm:py-20 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
            alt="Programs & Curriculums at Ahuja Institute"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold tracking-wider rounded-md backdrop-blur-xs">
            Official Academic Programs 2026-27
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Programs Built Around Your Target Exam
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET with uncompromised dedication and proven methodologies.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
            What We Teach
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A0E10]">
            Our Core Target Academic Tracks
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coursesData.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`cursor-pointer rounded-lg p-5 transition-all duration-200 border flex flex-col justify-between card-hover-effect bg-white text-gray-900 ${
                  isSelected
                    ? 'border-2 border-[#C99A2C] shadow-md ring-2 ring-[#C99A2C]/25 bg-amber-50/20'
                    : 'border-[#E5DCCB] hover:border-amber-400/60 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                        isSelected
                          ? 'bg-[#C99A2C] text-[#1A1818]'
                          : 'bg-amber-100 text-[#5C1315]'
                      }`}
                    >
                      {course.tag}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#5C1315]/70">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#4A0E10]">
                    {course.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-600">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold flex items-center gap-1 ${
                      isSelected ? 'text-[#C99A2C] font-bold' : 'text-[#5C1315]'
                    }`}
                  >
                    {isSelected ? 'Active Track Selected ✓' : 'Explore Curriculum →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {coursesData.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCourseId(c.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                selectedCourseId === c.id
                  ? 'bg-[#5C1315] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-[#E5DCCB] shadow-sm p-5 sm:p-8 space-y-6">
          <div>
            <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
              Target Program Overview
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4A0E10] mt-1">
              {selectedCourse.targetExam}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#FAF6EE] p-4 rounded-md border border-amber-200 text-center">
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="text-base font-bold text-[#5C1315]">
                {selectedCourse.stats.stat1}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">Key Achievement</div>
            </div>
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="text-base font-bold text-[#5C1315]">
                {selectedCourse.stats.stat2}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">Delivery Mode</div>
            </div>
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="text-base font-bold text-[#5C1315]">
                {selectedCourse.stats.stat3}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">Testing &amp; Evaluation</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[11px] font-semibold">
                Faculty Head
              </span>
              <span className="font-semibold text-gray-900 mt-0.5 block">
                {selectedCourse.facultyHead}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[11px] font-semibold">
                Timings
              </span>
              <span className="font-semibold text-gray-900 mt-0.5 block">
                {selectedCourse.timings}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[11px] font-semibold">
                Testing Freq
              </span>
              <span className="font-semibold text-gray-900 mt-0.5 block">
                {selectedCourse.testingFrequency}
              </span>
            </div>
            <div className="p-3 bg-amber-50 rounded-md border border-amber-200">
              <span className="text-gray-500 uppercase tracking-wider block text-[11px] font-semibold">
                Medium / Target
              </span>
              <span className="font-semibold text-[#5C1315] mt-0.5 block">
                {selectedCourse.tag}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <h3 className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Syllabus Breakdown by Subject
            </h3>

            <div className="space-y-2">
              {selectedCourse.syllabus.map((s, idx) => {
                const isOpen = openSyllabusSubject === s.subject || idx === 0;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-md overflow-hidden bg-[#FAF6EE]"
                  >
                    <button
                      onClick={() => setOpenSyllabusSubject(isOpen ? '' : s.subject)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between font-semibold text-sm text-[#4A0E10] hover:bg-amber-100/50 transition"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#5C1315]" />
                        {s.subject}
                      </span>
                      <span className="text-xs text-gray-500">
                        {s.topics.length} Key Topics {isOpen ? '-' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 bg-white border-t border-gray-200 text-xs text-gray-700 space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {s.topics.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-md font-medium"
                            >
                              {t}
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

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onInquireClick(selectedCourse.title)}
              className="px-5 py-2 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-sm transition shadow-sm"
            >
              Inquire For Batch Admission
            </button>
            <button
              onClick={() => onViewSyllabus(selectedCourse)}
              className="px-5 py-2 bg-white hover:bg-amber-50 text-gray-900 border border-gray-300 font-semibold rounded-md text-sm transition flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#5C1315]" /> Download Program Overview PDF
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#2A1011] text-white py-12 border-y border-[#C99A2C]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
              Deliverables
            </div>
            <h2 className="text-2xl font-bold text-white">What's Included</h2>
            <p className="text-xs text-amber-100/80 max-w-md mx-auto">
              Every student gets standard-setting academic resources and personal oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5 space-y-2">
              {includedDeliverables.map((item, idx) => {
                const isActive = activeIncludedTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIncludedTab(idx)}
                    className={`w-full text-left px-4 py-3 rounded-md transition flex items-center gap-4 border ${
                      isActive
                        ? 'bg-[#5C1315] text-white border-amber-400 shadow-sm'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span className="font-mono font-semibold text-amber-400 text-sm">{item.num}</span>
                    <span className="font-semibold text-sm">{item.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 bg-[#381B1C] p-6 rounded-lg border border-white/10 space-y-5">
              <div>
                <span className="text-amber-400 font-mono text-sm font-semibold block mb-1">
                  {includedDeliverables[activeIncludedTab].num}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {includedDeliverables[activeIncludedTab].title}
                </h3>
                <p className="text-xs text-amber-100/80 leading-relaxed mt-2">
                  {includedDeliverables[activeIncludedTab].desc}
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                  Key Features
                </span>
                <div className="space-y-2">
                  {includedDeliverables[activeIncludedTab].bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs text-gray-200 bg-black/20 p-2.5 rounded-md border border-white/10">
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

      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-2 mb-6">
          <div className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl font-bold text-[#4A0E10]">FAQ</h2>
        </div>

        <div className="space-y-2">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#E5DCCB] overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-sm text-[#4A0E10] hover:bg-amber-50/50 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#5C1315] flex-shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#5C1315]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAF6EE]">
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
