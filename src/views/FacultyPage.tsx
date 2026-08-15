'use client';

import React, { useState } from 'react';
import { facultyMembers, facultyStats, teachingApproach } from '../data/mockData';
import { FacultyMember } from '../types';
import {
  BookOpen,
  ArrowRight,
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
    <div className="space-y-10 pb-12 bg-[#FAF6EE]">
      {/* FACULTY HERO */}
      <section className="relative text-white py-16 sm:py-20 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920"
            alt="Expert Faculty Mentors"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold tracking-wider rounded-md backdrop-blur-xs">
            TEACHING PHILOSOPHY &amp; MENTORS
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Meet Our Expert Faculty
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            At Ahuja Career Institute, our educators are guided by continuous mentorship, structured doubt resolution, and step-by-step concept building.
          </p>
        </div>
      </section>

      {/* OUR TEACHING APPROACH 4 CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-6">
          <div className="text-xs font-semibold text-[#5C1315] tracking-widest uppercase">
            OUR PEDAGOGY
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A0E10]">
            Our Teaching Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachingApproach.map((app) => (
            <div
              key={app.id}
              className="bg-white p-5 rounded-lg border border-[#E5DCCB] space-y-3 card-hover-effect"
            >
              <div className="w-10 h-10 rounded-md bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#4A0E10]">{app.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER PILLS & FACULTY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                selectedFilter === cat
                  ? 'bg-[#5C1315] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-lg border border-[#E5DCCB] overflow-hidden transition group flex flex-col justify-between card-hover-effect shadow-xs"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={faculty.avatarUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-amber-300 border border-amber-400/30 text-[10px] font-semibold rounded-md">
                    {faculty.category}
                  </span>
                </div>

                <div className="p-4 space-y-2 text-center">
                  <h3 className="font-bold text-[#4A0E10] text-base">{faculty.name}</h3>
                  <p className="text-xs text-[#5C1315] font-semibold">{faculty.role}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{faculty.experience} • {faculty.education}</p>
                  <p className="text-xs text-gray-600 line-clamp-2 pt-1">{faculty.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM FACULTY STATS BAR */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#5C1315] text-white p-6 rounded-lg border border-[#C99A2C]/50 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
          {facultyStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                {st.value}
              </div>
              <div className="text-xs text-amber-100 font-semibold tracking-wide">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
