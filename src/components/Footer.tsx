'use client';

import React from 'react';
import { AhujaLogo } from './AhujaLogo';
import { PageTab } from '../types';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onInquireClick }) => {
  return (
    <footer className="bg-[#18191B] text-[#E5E7EB] pt-16 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <AhujaLogo variant="footer" size="lg" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-md pt-2">
              Building Strong Foundations, Achieving Top Results. Trusted name for 27+ years in empowering students from Std. 6th to 12th (Science &amp; Commerce), JEE, and NEET. Founded in 1998 by Late R.A. Ahuja Sir.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onInquireClick}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm transition shadow-sm hover:shadow-md flex items-center gap-1.5 active:scale-98"
              >
                Inquire Admissions <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-red-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-red-400 transition">
                  About Us (Est. 1998)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-red-400 transition">
                  Academic Programs
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faculty')} className="hover:text-red-400 transition">
                  Faculty &amp; Mentors
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('scoreboard')} className="hover:text-red-400 transition">
                  Toppers &amp; Results
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-red-400 transition">
                  Contact &amp; Campuses
                </button>
              </li>
            </ul>
          </div>

          {/* Maninagar Head Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">
              Maninagar Head Office
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>4th Floor, Takshshila Square, Opp. Sankalp Restaurant, Krishnabaug Cross Road, Maninagar, Ahmedabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>74053 28676 / 97243 28989 / (079) 48909397</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>3:00 PM - 9:00 PM (Mon - Sat)</span>
              </li>
            </ul>
          </div>

          {/* Vastral Branch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">
              Vastral Branch
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>502, 5th Floor, Avadh Pride, Opp. Metro Pillar No. 140, Nirant Cross Road, Vastral, Ahmedabad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>97243 19900 / 98792 28189 / (079) 48909398</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>3:00 PM - 9:00 PM (Mon - Sat)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>© 2026 Ahuja Career Institute (Est. 1998). All rights reserved.</p>
          <p className="text-gray-400 font-mono">Official Academic Specification</p>
        </div>
      </div>
    </footer>
  );
};
