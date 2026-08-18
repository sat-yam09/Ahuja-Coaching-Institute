'use client';

import React, { useState } from 'react';
import { resultStudents, scoreboardStats } from '../data/mockData';
import { ResultStudent } from '../types';
import {
  Search,
  GraduationCap,
  Award,
  BookOpen,
  Filter,
  Trophy,
  Quote,
} from 'lucide-react';

interface ScoreboardPageProps {
  onInquireClick: () => void;
}

export const ScoreboardPage: React.FC<ScoreboardPageProps> = ({ onInquireClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExamCategory, setSelectedExamCategory] = useState<'All' | '12th Science' | 'JEE' | 'NEET' | '10th & Foundation'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Filter students based on search and category
  const filteredStudents = resultStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.score.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesCategory = true;
    if (selectedExamCategory === '12th Science') {
      matchesCategory = student.exam.includes('12th Science');
    } else if (selectedExamCategory === 'JEE') {
      matchesCategory = student.category === 'JEE';
    } else if (selectedExamCategory === 'NEET') {
      matchesCategory = student.category === 'NEET';
    } else if (selectedExamCategory === '10th & Foundation') {
      matchesCategory = student.exam.includes('10th') || student.exam.includes('Foundation') || student.exam.includes('Std');
    }

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-block px-3.5 py-1 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          HIGH ACHIEVERS &amp; TOP SCORERS • 2024-25
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Our Results <span className="text-red-600">Speak for Themselves</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A running verified record of high achievers who trusted Ahuja Career Institute across 12th Science Board, JEE Main, NEET UG, and Secondary Foundation.
        </p>

        {/* Hero Stock Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-3xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
            alt="Celebrating Top Academic Ranks and Results"
            className="w-full h-56 sm:h-72 object-cover group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5 sm:p-6">
            <p className="text-white text-xs sm:text-sm font-bold">
              Consistently producing 100/100 perfect board scorers and top medical/engineering selections.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HISTORICAL RESULTS SCOREBOARD COUNTERS */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#18191B] p-8 sm:p-10 rounded-3xl border border-gray-800 text-white space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-red-500 tracking-wider uppercase block">
              ACADEMIC BENCHMARK METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">27+ Years Results Scoreboard</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {scoreboardStats.map((st, i) => (
              <div
                key={i}
                className="bg-[#22262E] p-6 rounded-2xl border border-gray-700 text-center space-y-1"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-red-500">
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

      {/* 3. SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gray-50 p-4 sm:p-5 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search student name, score, or exam..."
              className="w-full pl-11 pr-4 py-2.5 bg-white rounded-xl border border-gray-300 text-xs sm:text-sm font-medium focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-gray-900"
            />
          </div>

          {/* Active Result Count & Stream Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-red-700 bg-red-50 px-3.5 py-2 rounded-xl border border-red-200">
              {filteredStudents.length} {filteredStudents.length === 1 ? 'Result' : 'Toppers'} Listed
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {(['All', '12th Science', 'JEE', 'NEET', '10th & Foundation'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedExamCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedExamCategory === cat
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-102'
                      : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. STUDENT RESULT CARDS GRID */}
        {currentStudents.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
            <Trophy className="w-12 h-12 text-red-500 mx-auto" />
            <h3 className="text-base font-bold text-gray-800">No Student Records Found</h3>
            <p className="text-xs text-gray-500">Try adjusting your search criteria or filter tags.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition group flex flex-col justify-between card-hover-effect shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                      {student.year} Batch
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
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

        {/* 5. PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-xl font-bold text-xs transition border ${
                  currentPage === page
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
