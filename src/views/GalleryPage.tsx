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
    <div className="space-y-10 pb-12 bg-[#FAF6EE]">
      {/* GALLERY HERO */}
      <section className="relative text-white py-16 sm:py-20 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1920"
            alt="Infrastructure & Campus Gallery"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold tracking-wider rounded-md backdrop-blur-xs">
            INFRASTRUCTURE &amp; CAMPUS LIFE
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Our Learning Spaces &amp; Campus Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Visual showcase of air-conditioned smart classrooms, computer CBT test labs, dedicated doubt resolution desks, and student life.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR & GALLERY MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-[#5C1315] text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="bg-white rounded-lg border border-[#E5DCCB] overflow-hidden transition group flex flex-col justify-between card-hover-effect cursor-pointer"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#5C1315] text-amber-200 text-[10px] font-semibold rounded-md">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 text-white">
                    <Eye className="w-5 h-5 text-amber-300" />
                    <span className="text-xs font-semibold">Tap to View</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-[#4A0E10] text-base">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>

              <div className="p-3 bg-[#FAF6EE] border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#5C1315]" /> Click for Lightbox
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInquireClick();
                  }}
                  className="px-3.5 py-1.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-[11px] transition"
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
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#1A1818] rounded-lg overflow-hidden border border-white/10 text-white flex flex-col max-h-[90vh]">
            {/* Lightbox Header Bar */}
            <div className="p-4 bg-[#5C1315] flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-amber-400 text-[#1A1818] text-[10px] font-semibold rounded-md">
                  {currentItem.category}
                </span>
                <h3 className="font-semibold text-sm sm:text-base text-white">{currentItem.title}</h3>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-md hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
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
                className="absolute left-4 p-2 rounded-md bg-black/60 hover:bg-[#5C1315] text-white border border-white/10 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 p-2 rounded-md bg-black/60 hover:bg-[#5C1315] text-white border border-white/10 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-4 bg-[#252222] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
              <p className="leading-relaxed max-w-2xl">{currentItem.description}</p>
              <button
                onClick={() => {
                  handleCloseLightbox();
                  onInquireClick();
                }}
                className="px-5 py-2 bg-[#C99A2C] text-[#1A1818] font-semibold text-xs rounded-md flex-shrink-0"
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
