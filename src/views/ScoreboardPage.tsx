'use client';

import React, { useState } from 'react';
import { resultStudents, scoreboardStats, standeeToppers, brandTagline } from '../data/mockData';
import { ResultStudent, StandeeTopper } from '../types';
import {
  Search,
  Award,
  Trophy,
  Sparkles,
  PhoneCall,
  School,
} from 'lucide-react';

interface ScoreboardPageProps {
  onInquireClick: () => void;
}

export const ScoreboardPage: React.FC<ScoreboardPageProps> = ({ onInquireClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | '12th Science' | 'JEE Main' | 'NEET UG' | '10th Board' | 'Foundation' | 'Chemistry 100' | 'Maths Top'
  >('All');
  const [activeStandeeType, setActiveStandeeType] = useState<'All' | 'Senior' | 'Junior'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Filter students based on search and category
  const filteredStudents = resultStudents.filter((student) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      student.name.toLowerCase().includes(query) ||
      student.exam.toLowerCase().includes(query) ||
      student.score.toLowerCase().includes(query) ||
      (student.school && student.school.toLowerCase().includes(query)) ||
      (student.subject && student.subject.toLowerCase().includes(query));

    let matchesCategory = true;
    if (selectedCategory === '12th Science') {
      matchesCategory = student.exam.includes('12th Science') || student.category === 'Board';
    } else if (selectedCategory === 'JEE Main') {
      matchesCategory = student.category === 'JEE' || student.exam.includes('JEE');
    } else if (selectedCategory === 'NEET UG') {
      matchesCategory = student.category === 'NEET' || student.exam.includes('NEET');
    } else if (selectedCategory === '10th Board') {
      matchesCategory = student.exam.includes('10th');
    } else if (selectedCategory === 'Foundation') {
      matchesCategory = student.category === 'Foundation' || student.exam.includes('Foundation') || student.exam.includes('Std');
    } else if (selectedCategory === 'Chemistry 100') {
      matchesCategory = student.subject === 'Chemistry' || student.score === '100/100';
    } else if (selectedCategory === 'Maths Top') {
      matchesCategory = student.subject === 'Mathematics' || student.score.includes('99/100') || student.score.includes('100/100');
    }

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredStandees = standeeToppers.filter((st) => {
    if (activeStandeeType === 'All') return true;
    return st.type === activeStandeeType;
  });


  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-white text-gray-900">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 text-center max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>{brandTagline.hindi} • Official Scoreboard</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Our Results <span className="text-red-600">Speak For Themselves</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Every year, students at Ahuja Career Institute achieve record-breaking scores across 12th Science Boards, JEE Main, NEET UG, and 10th Secondary Boards with consistent 100/100 subject distinctions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onInquireClick}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/20 hover:bg-red-700 transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Inquire for 2026-27 Batch</span>
          </button>
          <a
            href="#student-records-grid"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-gray-800 border border-gray-300 font-semibold text-xs sm:text-sm hover:bg-gray-50 transition cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-red-600" />
            <span>Browse Student Records</span>
          </a>
        </div>
      </section>

      {/* 2. STATS SCOREBOARD BANNER (Midnight Obsidian Card) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#18191B] p-8 sm:p-10 rounded-3xl border border-gray-800 text-white shadow-xl space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-red-500 tracking-wider uppercase block">
              ACADEMIC BENCHMARK METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">27+ Years Results Legacy</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {scoreboardStats.map((st, i) => (
              <div
                key={i}
                className="bg-[#22262E] p-5 sm:p-6 rounded-2xl border border-gray-700 text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-500">
                  {st.value}
                </div>
                <div className="text-xs text-gray-300 font-semibold tracking-wide">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OFFICIAL FELICITATION STANDEES GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-red-600">
              <Award className="w-4 h-4" />
              <span>Official Felicitation Standees</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Top Rankers &amp; High Scorers
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Authentic standee banners celebrating Ahuja students in their official uniforms.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
            {(['All', 'Senior', 'Junior'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveStandeeType(type)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeStandeeType === type
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {type === 'All' ? 'All Standees' : type === 'Senior' ? '12th & Entrance' : '10th Board'}
              </button>
            ))}
          </div>
        </div>

        {/* Standee Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredStandees.map((st) => (
            <div
              key={st.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md hover:border-red-300 transition duration-300 group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-gray-50 p-2">
                <img
                  src={st.standeeUrl}
                  alt={st.name}
                  className="w-full h-auto max-h-72 object-contain rounded-lg group-hover:scale-103 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                  {st.tag}
                </span>
              </div>

              <div className="p-4 space-y-2 text-center bg-gray-50/50 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1">
                  {st.name}
                </h3>
                <div className="inline-block bg-red-50 border border-red-200 px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold text-red-600">
                  {st.score}
                </div>
                <p className="text-[11px] text-gray-500 font-medium line-clamp-1">
                  {st.exam}
                </p>
                {st.school && (
                  <p className="text-[10px] text-gray-500 font-semibold flex items-center justify-center space-x-1">
                    <School className="w-3 h-3 text-red-500" />
                    <span>{st.school}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEARCH AND FILTERABLE STUDENT SCOREBOARD TABLE & CARDS */}
      <section id="student-records-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search student name, school, score, or exam..."
              className="w-full pl-11 pr-4 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-gray-900"
            />
          </div>

          {/* Stream Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                'All',
                '12th Science',
                'JEE Main',
                'NEET UG',
                '10th Board',
                'Foundation',
                'Chemistry 100',
                'Maths Top',
              ] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-xs scale-102'
                    : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Student Result Cards Grid */}
        {currentStudents.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
            <Trophy className="w-12 h-12 text-red-500 mx-auto" />
            <h3 className="text-base font-bold text-gray-800">No Student Records Found</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your search query or switching the category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-xs hover:shadow-md hover:border-red-300"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="max-h-full w-auto object-contain rounded-lg group-hover:scale-103 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                      {student.year}
                    </span>
                    {student.school && (
                      <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-gray-900/85 text-white text-[9px] font-medium rounded">
                        {student.school}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-gray-900 text-base">{student.name}</h3>
                    <div className="inline-block bg-red-50 border border-red-200 px-3 py-1 rounded-lg text-sm font-extrabold text-red-600">
                      {student.score}
                    </div>
                    <p className="text-xs text-gray-500 font-semibold">{student.exam}</p>

                    {student.quote && (
                      <p className="text-xs text-gray-600 italic bg-gray-50 p-3 rounded-xl border border-gray-100 mt-2">
                        "{student.quote}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-3.5 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 font-medium">
                  {student.instituteBranch}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl font-bold text-xs transition border cursor-pointer ${
                  currentPage === page
                    ? 'bg-red-600 text-white border-red-600 shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 6. CALL TO ACTION: ADMISSION & ENQUIRY */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              Admissions Open 2026-27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Want Your Child on Our Next Scoreboard?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Join Ahmedabad’s trusted institute for 11th–12th Science, JEE/NEET entrance, and 6th–10th foundation batches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onInquireClick}
              className="px-6 py-3 rounded-xl bg-white text-red-600 font-bold text-sm hover:bg-red-50 transition shadow-md text-center cursor-pointer"
            >
              Book Admission Consultation
            </button>
            <a
              href="tel:+917405328676"
              className="px-5 py-3 rounded-xl bg-red-950/40 hover:bg-red-950/60 border border-white/20 text-white font-bold text-sm transition flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
