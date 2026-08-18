'use client';

import React, { useState } from 'react';
import { learningSpaces } from '../data/mockData';
import { GalleryItem } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryPageProps {
  onInquireClick: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInquireClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Classrooms', 'Awards', 'Student Life', 'Labs'];

  const filteredItems =
    selectedCategory === 'All'
      ? learningSpaces
      : learningSpaces.filter((item) => item.category === selectedCategory || (selectedCategory === 'Classrooms' && item.category === 'Smart Rooms'));

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
  };

  const currentItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-white text-gray-900">
      {/* 1. HEADER SECTION (Matches Screenshot 3: "Campus Gallery", subtitle with stock image showcase) */}
      <section className="pt-12 sm:pt-16 text-center max-w-3xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Campus <span className="text-red-600">Gallery</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore learning spaces, smart classrooms, and student life at Ahuja Career Institute.
        </p>

        {/* Hero Stock Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-2xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200"
            alt="Campus Infrastructure and Smart Classrooms"
            className="w-full h-52 sm:h-64 object-cover group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
            <p className="text-white text-xs sm:text-sm font-bold">
              Air-conditioned smart classrooms, computer CBT labs, and personalized doubt resolution desks.
            </p>
          </div>
        </div>

        {/* 2. FILTER PILLS (Matches Screenshot 3: Red active pill, white outlined inactive pills) */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
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

      {/* 3. GALLERY GRID (Midnight Obsidian Background) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
            CAMPUS SPACES &amp; INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Photo Showcase
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden transition group flex flex-col justify-between card-hover-effect cursor-pointer shadow-md hover:border-gray-700"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-gray-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 text-white">
                    <Eye className="w-5 h-5 text-white" />
                    <span className="text-xs font-semibold">Tap to Expand</span>
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>

              <div className="p-4 bg-black/30 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-red-500" /> Click to enlarge
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquireClick();
                  }}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-[11px] transition shadow-xs cursor-pointer"
                >
                  Visit Campus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Book Tour Button */}
        <div className="text-center pt-2">
          <button
            onClick={onInquireClick}
            className="px-6 py-2.5 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-bold rounded-xl text-xs sm:text-sm transition shadow-sm cursor-pointer"
          >
            Book a Personal Campus Tour →
          </button>
        </div>
      </section>
      </section>

      {/* 4. LIGHTBOX OVERLAY */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#18191B] rounded-2xl overflow-hidden border border-gray-800 text-white flex flex-col max-h-[90vh]">
            <div className="p-4 bg-[#22262E] flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md">
                  {currentItem.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white">{currentItem.title}</h3>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-w-full max-h-[60vh] object-contain transition duration-300"
              />

              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 p-2 rounded-lg bg-black/60 hover:bg-red-600 text-white border border-white/10 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 p-2 rounded-lg bg-black/60 hover:bg-red-600 text-white border border-white/10 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-[#18191B] border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
              <p className="leading-relaxed max-w-2xl">{currentItem.description}</p>
              <button
                onClick={() => {
                  handleCloseLightbox();
                  onInquireClick();
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex-shrink-0 shadow-xs"
              >
                Book Campus Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
