'use client';

import React, { useState } from 'react';
import { facultyMembers, facultyStats, teachingApproach } from '../data/mockData';
import { FacultyMember } from '../types';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Users,
  GraduationCap,
  Award,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface FacultyPageProps {
  onViewFacultyProfile: (faculty: FacultyMember) => void;
  onInquireClick: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  onViewFacultyProfile,
  onInquireClick,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Leadership', 'JEE/NEET', 'Science Board', 'Junior Division'];

  const filteredFaculty =
    selectedFilter === 'All'
      ? facultyMembers
      : facultyMembers.filter((f) => f.category === selectedFilter);

  return (
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* FACULTY HERO */}
      <section className="bg-[#5C1315] text-white py-16 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            FACULTY MENTORS & SUBJECT HEADS
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Meet Our Expert Faculty
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            Learn From Experienced educators who are passionate about guiding students and producing results.
          </p>
        </div>
      </section>

      {/* OUR TEACHING APPROACH 4 CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            OUR PEDAGOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
            Our Teaching Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingApproach.map((app, idx) => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-2xl border border-[#E5DCCB] shadow-md space-y-3 hover:border-amber-300 transition card-hover-effect"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#5C1315] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif text-[#4A0E10]">{app.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER PILLS & FACULTY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                selectedFilter === cat
                  ? 'bg-[#5C1315] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-[#E5DCCB] overflow-hidden shadow-md transition group flex flex-col justify-between card-hover-effect animate-fade-in-up"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={faculty.avatarUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5C1315] text-amber-200 text-[10px] font-bold uppercase rounded-md shadow-xs">
                    {faculty.category}
                  </span>
                </div>

                <div className="p-5 space-y-2 text-center">
                  <h3 className="font-bold text-[#4A0E10] text-lg font-serif">{faculty.name}</h3>
                  <p className="text-xs text-[#5C1315] font-semibold">{faculty.role}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{faculty.experience} • {faculty.education}</p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF6EE] border-t border-gray-100 text-center">
                <button
                  onClick={() => onViewFacultyProfile(faculty)}
                  className="w-full py-2 bg-white hover:bg-[#5C1315] hover:text-white text-[#5C1315] font-bold rounded-xl text-xs uppercase tracking-wider transition border border-gray-300 flex items-center justify-center gap-1"
                >
                  View Profile <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM FACULTY STATS BAR */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#5C1315] text-white p-8 rounded-3xl border-2 border-[#C99A2C] shadow-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {facultyStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">
                {st.value}
              </div>
              <div className="text-xs text-amber-100 font-bold uppercase tracking-wider">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
