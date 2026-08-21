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
  FlaskConical,
  TrendingUp,
  Target,
  GraduationCap,
  Layers,
  Check,
} from 'lucide-react';

interface CoursesPageProps {
  onInquireClick: (courseTitle?: string) => void;
  onViewSyllabus: (course: Course) => void;
  initialCourseId?: string;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onInquireClick,
  onViewSyllabus,
  initialCourseId = 'competitive-jee-neet',
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [openSyllabusSubject, setOpenSyllabusSubject] = useState<string>('Physics');
  const [activeIncludedTab, setActiveIncludedTab] = useState<number>(0);

  React.useEffect(() => {
    if (initialCourseId) {
      setSelectedCourseId(initialCourseId);
      const course = coursesData.find((c) => c.id === initialCourseId);
      if (course && course.syllabus && course.syllabus.length > 0) {
        setOpenSyllabusSubject(course.syllabus[0].subject);
      }
    }
  }, [initialCourseId]);

  const selectedCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];
  const orderedCourses = [...coursesData].sort((a, b) => {
    const classOrder = ['foundation-6-10', 'science-11-12', 'commerce-11-12', 'competitive-jee-neet'];
    return classOrder.indexOf(a.id) - classOrder.indexOf(b.id);
  });

  const getCourseIcon = (courseId: string) => {
    switch (courseId) {
      case 'science-11-12':
        return <FlaskConical className="w-4 h-4 flex-shrink-0" />;
      case 'commerce-11-12':
        return <TrendingUp className="w-4 h-4 flex-shrink-0" />;
      case 'competitive-jee-neet':
        return <Target className="w-4 h-4 flex-shrink-0" />;
      case 'foundation-6-10':
        return <GraduationCap className="w-4 h-4 flex-shrink-0" />;
      default:
        return <BookOpen className="w-4 h-4 flex-shrink-0" />;
    }
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    const course = coursesData.find((c) => c.id === courseId);
    if (course && course.syllabus && course.syllabus.length > 0) {
      setOpenSyllabusSubject(course.syllabus[0].subject);
    }
  };

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

      {/* 2. PROGRAM STATIC SHOWCASE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
            PROGRAM OVERVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Our Academic Offerings
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Comprehensive learning paths engineered for school board exams, JEE Main/Advanced, and NEET UG.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {orderedCourses.map((course, index) => (
            <div
              key={course.id}
              className="rounded-2xl p-6 border border-gray-200 flex flex-col justify-between bg-white text-gray-900 shadow-xs hover:border-gray-300 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-100 flex items-center gap-1.5">
                    {getCourseIcon(course.id)}
                    {course.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-gray-400">
                    {String(index + 1).padStart(2, '0')}/04
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-600">
                  {course.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
                <div className="text-[11px] font-semibold text-gray-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>{course.stats.stat2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED PROGRAM DETAIL CARD WITH SIMPLE CAPSULE FILTER OPTIONS */}
      <section id="program-detail-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 scroll-mt-24">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            Curriculum &amp; Batch Breakdown
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Course Detailed Syllabus &amp; Structure
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Select a course capsule below to instantly view batch timings, target examination parameters, and subject modules.
          </p>
        </div>

        {/* Non-Scrollable Course Selection Capsule Grid (2x2 on Mobile, Centered Flex on Desktop) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3">
          {orderedCourses.map((course) => {
            const isSelected = selectedCourseId === course.id;
            return (
              <button
                key={course.id}
                onClick={() => handleSelectCourse(course.id)}
                className={`w-full sm:w-auto px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/25 ring-2 ring-red-500/20 scale-[1.02]'
                    : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300 shadow-2xs hover:bg-red-50/40'
                }`}
              >
                {getCourseIcon(course.id)}
                <span className="truncate">{course.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Details Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-5 sm:p-10 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4 sm:pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider rounded-full mb-1.5">
                {getCourseIcon(selectedCourse.id)}
                <span>Detailed Syllabus &amp; Batch Guide</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                {selectedCourse.targetExam}
              </h2>
            </div>

            {/* Quick Badge Capsule */}
            <div className="self-start sm:self-auto px-3.5 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>{selectedCourse.tag}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-gray-50 p-3 sm:p-5 rounded-2xl border border-gray-200 text-center">
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-sm sm:text-xl font-extrabold text-red-600 leading-tight">
                {selectedCourse.stats.stat1}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 font-medium">Achievement</div>
            </div>
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-sm sm:text-xl font-extrabold text-red-600 leading-tight">
                {selectedCourse.stats.stat2}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 font-medium">Batch Delivery</div>
            </div>
            <div className="bg-white p-2.5 sm:p-4 rounded-xl border border-gray-200 shadow-xs">
              <div className="text-sm sm:text-xl font-extrabold text-red-600 leading-tight">
                {selectedCourse.stats.stat3}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 font-medium">Test System</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-sm">
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Faculty Head
              </span>
              <span className="font-bold text-gray-900 mt-0.5 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.facultyHead}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Timings
              </span>
              <span className="font-bold text-gray-900 mt-0.5 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.timings}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Testing Freq
              </span>
              <span className="font-bold text-gray-900 mt-0.5 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.testingFrequency}
              </span>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              <span className="text-gray-500 uppercase tracking-wider block text-[10px] sm:text-[11px] font-bold">
                Medium / Target
              </span>
              <span className="font-bold text-red-600 mt-0.5 block text-xs sm:text-sm break-words leading-snug">
                {selectedCourse.tag}
              </span>
            </div>
          </div>

          {/* Curriculum Breakdown Section with Responsive Non-Scrollable Subject Capsule Grid */}
          <div className="space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
                Curriculum &amp; Syllabus Breakdown
              </h3>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Tap a subject capsule to view modules:
              </span>
            </div>

            {/* Subject Capsule Filter Grid - Non-scrollable, all visible on one screen on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 pt-0.5">
              {selectedCourse.syllabus.map((s) => {
                const isSubActive =
                  openSyllabusSubject === s.subject ||
                  (!selectedCourse.syllabus.some((sub) => sub.subject === openSyllabusSubject) && s === selectedCourse.syllabus[0]);

                return (
                  <button
                    key={s.subject}
                    onClick={() => setOpenSyllabusSubject(s.subject)}
                    className={`w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 ${
                      isSubActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/25 ring-2 ring-red-500/20 scale-[1.01]'
                        : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300 shadow-2xs hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <BookOpen className={`w-3.5 h-3.5 flex-shrink-0 ${isSubActive ? 'text-white' : 'text-red-600'}`} />
                      <span className="truncate">{s.subject}</span>
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold flex-shrink-0 ${
                      isSubActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {s.topics.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {(() => {
              const currentSubjectObj = selectedCourse.syllabus.find((s) => s.subject === openSyllabusSubject) || selectedCourse.syllabus[0];
              if (!currentSubjectObj) return null;
              return (
                <div className="bg-gray-50/80 p-4 sm:p-6 rounded-2xl border border-gray-200 space-y-3 animate-fadeIn mt-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-red-600" />
                      <span>{currentSubjectObj.subject} Modules &amp; Coverage</span>
                    </h4>
                    <span className="text-[11px] sm:text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      Standard {selectedCourse.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                    {currentSubjectObj.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-2.5 sm:p-3 rounded-xl border border-gray-200 shadow-2xs hover:border-red-200 transition"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => onInquireClick(selectedCourse.title)}
              className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/20 active:scale-98 cursor-pointer text-center"
            >
              Inquire For Batch Admission
            </button>
            <button
              onClick={() => onViewSyllabus(selectedCourse)}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
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
