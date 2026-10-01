'use client';

import React, { useState } from 'react';
import { scoreboardStats, standeeToppers, brandTagline } from '../data/mockData';
import { StandeeTopper, PosterAsset } from '../types';
import { PosterModal } from '../components/PosterModal';
import { StudentShowcase } from '../components/StudentShowcase';
import {
  Award,
  Trophy,
  Sparkles,
  PhoneCall,
  School,
  Eye,
  Download,
  Calendar,
} from 'lucide-react';

interface ScoreboardPageProps {
  onInquireClick: () => void;
}

export const ScoreboardPage: React.FC<ScoreboardPageProps> = ({ onInquireClick }) => {
  const [activeStandeeType, setActiveStandeeType] = useState<'All' | 'Senior' | 'Junior'>('All');
  const [selectedPoster, setSelectedPoster] = useState<PosterAsset | null>(null);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const handleOpenStandee = (st: StandeeTopper) => {
    setSelectedPoster({
      id: st.id,
      title: `${st.name} - ${st.score}`,
      subtitle: `${st.exam} • Official Felicitation Standee`,
      category: 'Felicitation Standee',
      imageUrl: st.standeeUrl,
      downloadUrl: st.standeeUrl,
      year: '2024-25',
      description: `Official authentic felicitation standee celebrating ${st.name} (${st.score} in ${st.exam}) from Ahuja Career Institute.`,
      highlights: [
        `Score: ${st.score}`,
        `Exam: ${st.exam}`,
        st.school ? `School: ${st.school}` : `Campus: ${st.branch}`,
        'Verified Batch Achiever',
      ],
    });
    setIsPosterModalOpen(true);
  };

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

        {/* Action Buttons with the ONE Dedicated Official Brochure Button */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onInquireClick}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/20 hover:bg-red-700 transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Inquire for 2026-27 Batch</span>
          </button>
          
          <a
            href="/assets/Ahuja Institute 23X33.pdf"
            download="Ahuja-Institute-23X33-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-gray-800 border border-gray-300 font-bold text-xs sm:text-sm hover:border-red-500 hover:text-red-600 transition shadow-xs cursor-pointer group"
          >
            <Download className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
            <span>Official 23"×33" Brochure (PDF)</span>
          </a>

          <a
            href="#student-records-grid"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs sm:text-sm hover:bg-gray-200 transition cursor-pointer"
          >
            <Trophy className="w-4 h-4 text-red-600" />
            <span>Browse All Student Records</span>
          </a>
        </div>

        {/* Hero Photo Showcase */}
        <div className="relative pt-6 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
            <img
              src="/assets/gallery/gallery-smart-screen-physics.jpg"
              alt="Rank-Producing Preparation at Ahuja Career Institute"
              className="w-full h-64 sm:h-96 object-cover group-hover:scale-102 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                  Official Academic Records
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                  22,000+ Success Stories
                </span>
              </div>
              <p className="text-white text-base sm:text-xl font-bold">
                Celebrating Consistent 100/100 Subject Toppers, Board State Merits &amp; High Competitive Percentiles
              </p>
            </div>
          </div>
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
              <span>Official Felicitation Standees (2024–25)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Top Rankers &amp; High Scorers
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Authentic standee banners celebrating Ahuja students in their official uniforms. Click to inspect high-resolution standees.
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
              onClick={() => handleOpenStandee(st)}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-red-400 transition duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
                <img
                  src={st.standeeUrl}
                  alt={st.name}
                  className="w-full h-auto max-h-72 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                  {st.tag}
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white text-gray-900 font-bold text-xs shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-red-600" />
                    <span>View High-Res</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-2 text-center bg-gray-50/50 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base line-clamp-1 group-hover:text-red-600 transition-colors">
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

      {/* 4. SEARCH AND FILTERABLE STUDENT SCOREBOARD TABLE & CARDS (WITH 2024-25 & 2025-26 DROPDOWN) */}
      <div id="student-records-grid" className="scroll-mt-24">
        <StudentShowcase
          id="student-records-grid"
          showHeading={true}
          title="Verified Student Achievers Roster"
          subtitle="Explore our verified rankers with individual subject distinction records and authentic portraits across batches."
        />
      </div>

      {/* 5. CALL TO ACTION: ADMISSION & ENQUIRY */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Be Next on Our Wall of Fame
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Admissions open for Std. 6th to 12th Science &amp; Commerce, JEE Main, and NEET UG batches. Experience the teaching philosophy that builds rankers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onInquireClick}
              className="px-6 py-3.5 bg-white text-red-600 font-extrabold text-xs sm:text-sm rounded-xl hover:bg-gray-100 transition shadow-lg cursor-pointer"
            >
              Inquire Now
            </button>
            <a
              href="tel:7405328676"
              className="px-5 py-3.5 bg-red-800/80 hover:bg-red-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-red-500/40 transition flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 74053 28676</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Fullscreen Poster / Standee Inspection */}
      <PosterModal
        poster={selectedPoster}
        isOpen={isPosterModalOpen}
        onClose={() => setIsPosterModalOpen(false)}
      />
    </div>
  );
};
