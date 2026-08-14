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
  Sparkles,
} from 'lucide-react';

interface ScoreboardPageProps {
  onInquireClick: () => void;
}

export const ScoreboardPage: React.FC<ScoreboardPageProps> = ({ onInquireClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExamCategory, setSelectedExamCategory] = useState<'All' | 'JEE' | 'NEET' | 'Board'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Filter students based on search and category
  const filteredStudents = resultStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.score.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedExamCategory === 'All' || student.category === selectedExamCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const currentStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* SCOREBOARD HERO */}
      <section className="bg-[#5C1315] text-white py-16 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        {/* Background Stock Image with Deep Maroon Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
            alt="Celebrating Academic Success and Rankers"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#380608]/95 via-[#5C1315]/90 to-[#2A0506]/92" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C99A2C_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            HISTORICAL HALL OF FAME
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Our Results Speak for Themselves
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            A running record of every student who trusted us with their preparation - and made it count.
          </p>
        </div>
      </section>

      {/* HISTORICAL RESULTS SCOREBOARD COUNTERS */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#400B0D] p-6 sm:p-8 rounded-3xl border-2 border-[#C99A2C] shadow-2xl text-white space-y-4">
          <div className="text-center">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">
              HISTORICAL RESULTS
            </span>
            <h2 className="text-2xl font-bold font-serif">Scoreboard</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {scoreboardStats.map((st, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-1 hover:bg-white/15 transition"
              >
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">
                  {st.value}
                </div>
                <div className="text-xs text-amber-100 font-bold uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E5DCCB] shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
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
              placeholder="Search student name, rank, or exam..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6EE] rounded-xl border border-gray-300 text-xs font-medium focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-gray-900"
            />
          </div>

          {/* Active Result Count & Stream Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[#5C1315] bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200">
              {filteredStudents.length} {filteredStudents.length === 1 ? 'Result' : 'Toppers'} Found
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              {(['All', 'JEE', 'NEET', 'Board'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedExamCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                    selectedExamCategory === cat
                      ? 'bg-[#5C1315] text-white shadow-md'
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
          <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
            <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold font-serif text-gray-800">No Student Records Found</h3>
            <p className="text-xs text-gray-500">Try adjusting your search criteria or filter tags.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl border border-[#E5DCCB] overflow-hidden shadow-md transition group flex flex-col justify-between card-hover-effect animate-fade-in-up"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#C99A2C] text-[#1A1818] text-[10px] font-bold uppercase rounded-md shadow-xs">
                      {student.year} Batch
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-[#4A0E10] text-lg font-serif">{student.name}</h3>
                    <div className="inline-block bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg text-sm font-bold text-[#5C1315]">
                      {student.score}
                    </div>
                    <p className="text-xs text-gray-500 font-semibold">{student.exam}</p>

                    {student.quote && (
                      <p className="text-[11px] text-gray-600 italic bg-[#FAF6EE] p-2.5 rounded-lg border border-amber-100 mt-2">
                        “{student.quote}”
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-[#FAF6EE] border-t border-gray-100 text-center text-[11px] text-gray-500 font-medium">
                  🏫 {student.instituteBranch}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-bold text-xs transition border ${
                  currentPage === page
                    ? 'bg-[#5C1315] text-white border-[#5C1315] shadow-md'
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
