'use client';

import React, { useState } from 'react';
import { facultyMembers, facultyStats, teachingApproach } from '../data/mockData';
import { FacultyMember } from '../types';
import {
  BookOpen,
  ArrowRight,
  Users,
  GraduationCap,
  ClipboardCheck,
  MessageSquare,
  Target,
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

  const getApproachIcon = (app: { id: string; title: string }) => {
    switch (app.id) {
      case '1':
        return <GraduationCap className="w-6 h-6" />;
      case '2':
        return <ClipboardCheck className="w-6 h-6" />;
      case '3':
        return <MessageSquare className="w-6 h-6" />;
      case '4':
        return <Target className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-block px-3.5 py-1 border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
          TEACHING PHILOSOPHY &amp; MENTORS
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
          Meet Our <span className="text-red-600">Expert Faculty</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          At Ahuja Career Institute, our educators are guided by continuous mentorship, structured doubt resolution, and step-by-step concept building.
        </p>

        {/* Hero Stock Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-3xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
            alt="Expert Faculty Mentors"
            className="w-full h-56 sm:h-72 object-cover group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5 sm:p-6">
            <p className="text-white text-xs sm:text-sm font-bold">
              Subject matter experts dedicated to 1-on-1 doubt solving and student transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR TEACHING APPROACH 4 CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
            OUR PEDAGOGY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Our Teaching Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teachingApproach.map((app) => (
            <div
              key={app.id}
              className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3.5 card-hover-effect shadow-xs hover:border-red-200 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-2xs">
                {getApproachIcon(app)}
              </div>
              <h3 className="text-base font-bold text-gray-900">{app.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FILTER PILLS & FACULTY GRID (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            OUR MENTORS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Meet the Educator Team
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30 scale-102'
                  : 'bg-gray-900 text-gray-300 hover:border-red-500 hover:text-red-400 border border-gray-700'
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
              className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden transition group flex flex-col justify-between card-hover-effect shadow-md hover:border-gray-700"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-gray-950">
                  <img
                    src={faculty.avatarUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                    {faculty.category}
                  </span>
                </div>

                <div className="p-5 space-y-2 text-center">
                  <h3 className="font-bold text-white text-base">{faculty.name}</h3>
                  <p className="text-xs text-red-400 font-bold">{faculty.role}</p>
                  <p className="text-[11px] text-gray-400 font-medium">{faculty.experience} • {faculty.education}</p>
                  <p className="text-xs text-gray-300 line-clamp-2 pt-1">{faculty.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM FACULTY STATS BAR */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-50 text-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center shadow-xs">
          {facultyStats.map((st, i) => (
            <div key={i} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600">
                {st.value}
              </div>
              <div className="text-xs text-gray-600 font-bold tracking-wide">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
