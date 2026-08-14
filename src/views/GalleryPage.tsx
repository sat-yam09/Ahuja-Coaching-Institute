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

  const categories = ['All', 'Smart Rooms', 'Labs', 'Events', 'Student Life'];

  const filteredItems =
    selectedCategory === 'All'
      ? learningSpaces
      : learningSpaces.filter((item) => item.category === selectedCategory);

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
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* GALLERY HERO */}
      <section className="bg-[#5C1315] text-white py-16 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            INFRASTRUCTURE & CAMPUS LIFE
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Our Learning Spaces & Campus Gallery
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            Visual showcase of facilities, smart classrooms in action, computerized mock testing labs, doubt desks, and campus sessions.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR & GALLERY MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                selectedCategory === cat
                  ? 'bg-[#5C1315] text-white shadow-md ring-2 ring-[#C99A2C]'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="bg-white rounded-2xl border border-[#E5DCCB] overflow-hidden shadow-md transition group flex flex-col justify-between card-hover-effect animate-fade-in-up cursor-pointer"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5C1315] text-amber-200 text-[10px] font-bold uppercase rounded-md shadow-xs">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 text-white">
                    <Eye className="w-5 h-5 text-amber-300" />
                    <span className="text-xs font-bold uppercase tracking-wider">Tap to View</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-[#4A0E10] text-lg font-serif">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF6EE] border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#5C1315]" /> Click for Lightbox
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquireClick();
                  }}
                  className="px-3.5 py-1.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold rounded-lg text-[10px] uppercase tracking-wider transition"
                >
                  Visit Campus
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY (INTERACTIVE) */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#1A1818] rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-white flex flex-col max-h-[90vh]">
            {/* Lightbox Header Bar */}
            <div className="p-4 bg-[#5C1315] flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-amber-400 text-[#1A1818] text-[10px] font-bold uppercase rounded-md">
                  {currentItem.category}
                </span>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white">{currentItem.title}</h3>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-w-full max-h-[60vh] object-contain transition duration-300"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-[#5C1315] text-white border border-white/20 transition shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-[#5C1315] text-white border border-white/20 transition shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-5 bg-[#252222] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
              <p className="leading-relaxed max-w-2xl">{currentItem.description}</p>
              <button
                onClick={() => {
                  handleCloseLightbox();
                  onInquireClick();
                }}
                className="px-5 py-2 bg-[#C99A2C] text-[#1A1818] font-bold text-xs rounded-xl uppercase tracking-wider flex-shrink-0"
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

