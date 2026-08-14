'use client';

import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  aboutStats,
  institutionalPillars,
  journeyTimeline,
} from '../data/mockData';
import {
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Compass,
  Building,
  Target,
} from 'lucide-react';

interface AboutPageProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, onInquireClick }) => {
  const [activeTimelineYear, setActiveTimelineYear] = useState('2001');

  const selectedMilestone =
    journeyTimeline.find((m) => m.year === activeTimelineYear) || journeyTimeline[0];

  return (
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* ABOUT HERO */}
      <section className="bg-[#5C1315] text-white py-16 sm:py-20 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            ABOUT AHUJA CAREER INSTITUTE
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Building Future Doctors & Engineers Since 2001
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            At Ahuja Career Institute, we are committed to empowering students through quality education, experienced faculty, and result-oriented learning. Our goal is to help every student achieve academic excellence and build a successful future.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('courses')}
              className="px-6 py-3 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md"
            >
              Explore Our Courses
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold rounded-xl text-xs uppercase tracking-wider transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT BAR */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-[#E5DCCB] shadow-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {aboutStats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl font-black text-[#5C1315] font-serif">{st.value}</div>
              <div className="text-xs text-gray-600 font-bold uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              TO KNOW • WHO WE ARE ?
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#4A0E10]">Our Journey</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ahuja Career Institute is dedicated to providing high-quality education and creating an environment where students can achieve their academic goals. Through experienced faculty, structured learning, and continuous assessment, we prepare students for board examinations and competitive entrance tests with confidence.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Rooted in discipline and clarity, our institutional ethos blends classical rigorous problem-solving with modern visual smartboard technology.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-[#C99A2C] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                alt="Ahuja Classroom Journey"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES: VISION, MISSION, VALUES */}
      <section className="bg-amber-100/50 py-16 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-amber-200">
              WE LIVE IN
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#4A0E10]">Our Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md space-y-3 card-hover-effect">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#4A0E10]">Our Vision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To inspire and empower students through quality education, helping them achieve academic excellence and build successful careers with confidence and integrity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md space-y-3 card-hover-effect">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#4A0E10]">Our Mission</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                To provide concept-based learning, experienced faculty, continuous assessment, and personalized guidance that enables every student to reach their full potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md space-y-3 card-hover-effect">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#5C1315] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#4A0E10]">Our Values</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe in discipline, dedication, innovation, and student-first learning while fostering an environment of trust, growth, and lifelong success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E5DCCB] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 text-center lg:text-left space-y-4">
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                alt="R.A. Ahuja Founder"
                className="w-48 h-56 object-cover rounded-2xl border-4 border-[#5C1315] shadow-lg mx-auto"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#C99A2C] text-[#1A1818] font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Founder & Director
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-[#4A0E10]">R.A. Ahuja</h3>
              <p className="text-xs text-gray-500 font-medium">Founder & Managing Director</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
              IN HIS WORDS • DIRECTOR'S MESSAGE
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold font-serif text-[#4A0E10] leading-snug">
              “Education is not only about marks — it's about building character, discipline, and the confidence to face any challenge.”
            </blockquote>
            <p className="text-xs text-gray-600 leading-relaxed">
              For over two decades, our mission has stayed the same: to prepare students not just for exams, but for the discipline and confidence that outlasts them. Every faculty member, every batch, every test — all built around that one belief.
            </p>
          </div>
        </div>
      </section>

      {/* CORE INSTITUTIONAL PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            WHAT WE STAND ON
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#4A0E10]">Core Institutional Pillars</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionalPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#5C1315] text-white p-6 rounded-2xl border border-amber-500/30 shadow-md hover:shadow-xl transition space-y-2"
            >
              <h3 className="text-lg font-bold font-serif text-amber-300">{p.title}</h3>
              <p className="text-xs text-amber-100/80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-[#1A1818] text-white py-16 border-y-4 border-[#C99A2C]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
              SINCE 2001
            </span>
            <h2 className="text-3xl font-bold font-serif text-white">Our Journey</h2>
          </div>

          {/* Timeline Year Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {journeyTimeline.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveTimelineYear(item.year)}
                className={`px-5 py-2 rounded-full text-xs font-bold font-mono transition ${
                  activeTimelineYear === item.year
                    ? 'bg-[#C99A2C] text-[#1A1818] ring-2 ring-amber-300'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Timeline Detail Card */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-xl mx-auto space-y-3">
            <span className="text-amber-400 font-bold font-mono text-xl">{selectedMilestone.year}</span>
            <h3 className="text-xl font-bold font-serif text-white">{selectedMilestone.title}</h3>
            <p className="text-xs text-amber-100/80 leading-relaxed">{selectedMilestone.desc}</p>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5DCCB] shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
            Ready To Join Ahuja Career Institute?
          </h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Take the first step towards your engineering or medical dream career. Book a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onInquireClick}
              className="px-8 py-3.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-md"
            >
              Apply Now
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 bg-amber-100 hover:bg-amber-200 text-[#5C1315] font-bold rounded-xl text-xs uppercase tracking-wider transition border border-amber-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
