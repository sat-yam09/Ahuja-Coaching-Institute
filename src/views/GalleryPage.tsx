'use client';

import React, { useState } from 'react';
import { learningSpaces, posterAssets } from '../data/mockData';
import { PosterModal } from '../components/PosterModal';
import { PosterAsset } from '../types';
import { Eye, Sparkles, Building2 } from 'lucide-react';

interface GalleryPageProps {
  onInquireClick: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInquireClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPoster, setSelectedPoster] = useState<PosterAsset | null>(null);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const categories = ['All', 'Classrooms', 'Print & Campaigns', 'Events', 'Student Life', 'Labs'];

  const filteredItems =
    selectedCategory === 'All'
      ? learningSpaces
      : learningSpaces.filter((item) => {
          if (selectedCategory === 'Classrooms') return item.category === 'Smart Rooms';
          if (selectedCategory === 'Print & Campaigns') return item.category === 'Print Media & Campaigns';
          return item.category === selectedCategory;
        });

  const handleOpenItem = (item: (typeof learningSpaces)[0]) => {
    // If it's a print media poster, open the high-res modal
    if (item.category === 'Print Media & Campaigns') {
      const match = posterAssets.find((p) => p.imageUrl === item.imageUrl);
      if (match) {
        setSelectedPoster(match);
        setIsPosterModalOpen(true);
        return;
      }
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 bg-white text-gray-900">
      {/* 1. HEADER SECTION */}
      <section className="pt-12 sm:pt-16 text-center max-w-3xl mx-auto px-4 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-red-600" />
          <span>Campuses &amp; Publications</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Campus &amp; Media <span className="text-red-600">Gallery</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore smart classrooms, student life, doubt clearing desks, and official print marketing publications.
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
            CAMPUS SPACES &amp; OFFICIAL ASSETS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Visual Showcase ({filteredItems.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenItem(item)}
              className={`bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden transition group flex flex-col justify-between shadow-md hover:border-gray-700 card-hover-effect ${
                item.category === 'Print Media & Campaigns' ? 'cursor-pointer' : ''
              }`}
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-gray-950 flex items-center justify-center p-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full w-full object-contain group-hover:scale-105 transition duration-500 rounded-lg"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold rounded-md shadow-xs">
                    {item.category}
                  </span>
                  {item.category === 'Print Media & Campaigns' && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white text-gray-900 font-bold text-xs shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-red-600" />
                        <span>View High-Res</span>
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="font-bold text-white text-base group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>

              <div className="p-4 bg-black/30 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400">
                  {item.category === 'Print Media & Campaigns' ? 'Official Media' : 'Campus Space'}
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

      {/* Modal Lightbox */}
      <PosterModal
        poster={selectedPoster}
        isOpen={isPosterModalOpen}
        onClose={() => {
          setIsPosterModalOpen(false);
          setSelectedPoster(null);
        }}
      />
    </div>
  );
};
