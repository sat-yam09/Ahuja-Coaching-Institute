'use client';

import React, { useState } from 'react';
import { learningSpaces } from '../data/mockData';
import {
  Building2,
  MapPin,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface GalleryPageProps {
  onInquireClick: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInquireClick }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems = learningSpaces;

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? galleryItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === galleryItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-white text-gray-900">
      {/* 1. HERO SECTION (Unified Hero Layout matching HomePage, Courses, and Contact) */}
      <section className="relative pt-12 sm:pt-20 pb-4 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
            <Building2 className="w-4 h-4 text-red-600" />
            <span>CAMPUSES &amp; LEARNING SPACES • EST. 1998</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
            Campus &amp; Facilities <br />
            <span className="text-red-600">Visual Gallery</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore actual classroom moments, digital smart interactive displays, student batches, and administrative facilities across our Maninagar and Vastral campuses.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onInquireClick}
              className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-red-600/20 active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              Schedule Campus Visit <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Hero Photo Showcase */}
          <div className="relative pt-6 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/assets/gallery/gallery-bohr-chemistry-lecture.jpg"
                alt="Interactive Smart Classrooms at Ahuja Career Institute"
                className="w-full h-64 sm:h-96 object-cover group-hover:scale-102 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    Smart Classrooms
                  </span>
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    Modern Digital Boards &amp; Doubt Resolution Desks
                  </span>
                </div>
                <p className="text-white text-base sm:text-xl font-bold">
                  Experience High-Engagement Teaching, Smart Screen Visuals &amp; Dedicated Faculty Desks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID (Midnight Obsidian Card Container) */}
      <section className="mx-4 sm:mx-6 lg:mx-8 max-w-6xl lg:mx-auto bg-[#18191B] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-800 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-800/80 pb-5">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono">
              MANINAGAR HEAD OFFICE &amp; VASTRAL CAMPUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Campus Showcase ({galleryItems.length})
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Campus &amp; Batch Photos</span>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-md hover:border-red-500/50 hover:shadow-xl hover:shadow-red-950/20 card-hover-effect cursor-pointer hover:-translate-y-1"
            >
              {/* Photo Header with Zoom Trigger */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-extrabold rounded-md shadow-xs">
                  {item.category}
                </span>

                {/* Real Photo / Session Badge */}
                {item.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-gray-200 border border-gray-700 text-[10px] font-bold rounded-md flex items-center gap-1 shadow-xs">
                    <CheckCircle2 className="w-3 h-3 text-red-500" />
                    {item.badge}
                  </span>
                )}

                {/* Maximize Hover Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Title & Location */}
              <div className="p-4 sm:p-5 space-y-1 bg-gray-900/90 border-t border-gray-800/80">
                <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-red-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.location && (
                  <div className="text-[11px] text-red-400 flex items-center gap-1 font-semibold">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={onInquireClick}
            className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 font-bold rounded-xl text-xs sm:text-sm transition shadow-sm cursor-pointer"
          >
            Schedule a Personal Campus Visit →
          </button>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && galleryItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18191B] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between text-white bg-gray-900/90">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-xs font-bold font-mono">
                  {galleryItems[activeLightboxIndex].category}
                </span>
                {galleryItems[activeLightboxIndex].location && (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {galleryItems[activeLightboxIndex].location}
                  </span>
                )}
              </div>

              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[300px] max-h-[60vh]">
              <img
                src={galleryItems[activeLightboxIndex].imageUrl}
                alt={galleryItems[activeLightboxIndex].title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={prevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white transition cursor-pointer border border-white/10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-red-600 text-white transition cursor-pointer border border-white/10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="p-5 sm:p-6 bg-[#18191B] border-t border-gray-800 space-y-2 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {galleryItems[activeLightboxIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    {galleryItems[activeLightboxIndex].description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    closeLightbox();
                    onInquireClick();
                  }}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap transition shadow-md shadow-red-600/25 shrink-0 cursor-pointer"
                >
                  Inquire For Admissions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
