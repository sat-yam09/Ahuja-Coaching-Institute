'use client';

import React, { useState } from 'react';
import { learningSpaces } from '../data/mockData';
import { Sparkles, Building2, MapPin } from 'lucide-react';

interface GalleryPageProps {
  onInquireClick: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInquireClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Classrooms', 'Student Life', 'Labs', 'Events'];

  const filteredItems =
    selectedCategory === 'All'
      ? learningSpaces
      : learningSpaces.filter((item) => {
          if (selectedCategory === 'Classrooms') return item.category === 'Smart Rooms';
          return item.category === selectedCategory;
        });

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-white text-gray-900">
      {/* 1. HEADER SECTION */}
      <section className="pt-12 sm:pt-16 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-red-600" />
          <span>Campuses &amp; Learning Spaces</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Campus &amp; Facilities <span className="text-red-600">Gallery</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore our smart classrooms, student life, doubt clearing desks, and state-of-the-art facilities across Maninagar and Vastral campuses.
        </p>

        {/* 2. FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-102'
                  : 'bg-white text-gray-700 hover:border-red-500 hover:text-red-600 border border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. GALLERY GRID (Midnight Obsidian Card) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-800 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            MANINAGAR HEAD OFFICE &amp; VASTRAL BRANCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Campus Showcase ({filteredItems.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden transition group flex flex-col justify-between shadow-md hover:border-gray-700 card-hover-effect"
            >
              <div>
                <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                    {item.category === 'Smart Rooms' ? 'Classroom' : item.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-white text-base group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="p-4 bg-black/30 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  Campus Space
                </span>
                <button
                  onClick={onInquireClick}
                  className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-[11px] transition shadow-xs cursor-pointer"
                >
                  Visit Campus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={onInquireClick}
            className="px-6 py-2.5 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-bold rounded-xl text-xs sm:text-sm transition shadow-sm cursor-pointer"
          >
            Book a Personal Campus Tour →
          </button>
        </div>
      </section>
    </div>
  );
};
