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
    <div className="space-y-10 pb-12 bg-[#FAF6EE]">
      {/* SCOREBOARD HERO */}
      <section className="relative text-white py-16 sm:py-20 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            alt="Historical Hall of Fame and Top Ranks"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold tracking-wider rounded-md backdrop-blur-xs">
            HIGH ACHIEVERS &amp; TOP SCORERS • 2024-25
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Our Results Speak for Themselves
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            A running verified record of high achievers who trusted Ahuja Career Institute across 12th Science Board, JEE Main, NEET UG, and Secondary Foundation.
          </p>
        </div>
      </section>

      {/* HISTORICAL RESULTS SCOREBOARD COUNTERS */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#400B0D] p-5 sm:p-6 rounded-lg border border-[#C99A2C]/50 text-white space-y-4">
          <div className="text-center">
            <div className="text-[11px] font-semibold text-amber-300 tracking-widest block">
              ACADEMIC BENCHMARK METRICS
            </div>
            <h2 className="text-xl font-bold">27+ Years Results Scoreboard</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {scoreboardStats.map((st, i) => (
              <div
                key={i}
                className="bg-[#2C080A] p-5 rounded-lg border border-[#C99A2C]/20 text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                  {st.value}
                </div>
                <div className="text-xs text-amber-100 font-semibold tracking-wide">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-4 rounded-lg border border-[#E5DCCB] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search student name, score, or exam..."
              className="w-full pl-10 pr-4 py-2 bg-[#FAF6EE] rounded-md border border-gray-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#5C1315] text-gray-900"
            />
          </div>

          {/* Active Result Count & Stream Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[#5C1315] bg-amber-100 px-3 py-1.5 rounded-md border border-amber-200">
              {filteredStudents.length} {filteredStudents.length === 1 ? 'Result' : 'Toppers'} Listed
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              {(['All', '12th Science', 'JEE', 'NEET', '10th & Foundation'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedExamCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    selectedExamCategory === cat
                      ? 'bg-[#5C1315] text-white'
                      : 'bg-[#FAF6EE] text-gray-700 hover:bg-amber-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* STUDENT RESULT CARDS GRID */}
        {currentStudents.length === 0 ? (
          <div className="bg-white p-10 text-center rounded-lg border border-gray-200 space-y-3">
            <Trophy className="w-10 h-10 text-amber-400 mx-auto" />
            <h3 className="text-base font-semibold text-gray-800">No Student Records Found</h3>
            <p className="text-xs text-gray-500">Try adjusting your search criteria or filter tags.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-lg border border-[#E5DCCB] overflow-hidden transition group flex flex-col justify-between card-hover-effect"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C99A2C] text-[#1A1818] text-[10px] font-semibold rounded-md">
                      {student.year} Batch
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-[#4A0E10] text-base">{student.name}</h3>
                    <div className="inline-block bg-amber-50 border border-amber-200 px-3 py-1 rounded-md text-sm font-semibold text-[#5C1315]">
                      {student.score}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{student.exam}</p>

                    {student.quote && (
                      <p className="text-[11px] text-gray-600 italic bg-[#FAF6EE] p-2.5 rounded-md border border-amber-100 mt-2">
                        "{student.quote}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-[#FAF6EE] border-t border-gray-100 text-center text-[11px] text-gray-500 font-medium">
                  {student.instituteBranch}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-md font-semibold text-xs transition border ${
                  currentPage === page
                    ? 'bg-[#5C1315] text-white border-[#5C1315]'
                    : 'bg-white text-gray-700 hover:bg-amber-100 border-gray-300'
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
