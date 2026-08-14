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
    <footer className="bg-[#1A1818] text-[#E8E2D8] pt-16 pb-8 border-t-4 border-[#5C1315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <AhujaLogo variant="footer" size="lg" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-md pt-2">
              Empowering medical and engineering aspirants through rigorous academics, experienced faculty mentorship, structured problem-solving practice, and disciplined continuous evaluation since 1998/2001.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onInquireClick}
                className="px-5 py-2.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold text-xs rounded-xl uppercase tracking-wider transition shadow-sm flex items-center gap-1.5"
              >
                Inquire Admissions <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-amber-300 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-amber-300 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-amber-300 transition">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faculty')} className="hover:text-amber-300 transition">
                  Faculty
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2">
              Academic
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => setActiveTab('achievements')} className="hover:text-amber-300 transition">
                  Achievements & Ranks
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gallery')} className="hover:text-amber-300 transition">
                  Campus Gallery
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-amber-300 transition">
                  Contact Us & Campuses
                </button>
              </li>
            </ul>
          </div>

          {/* Main Campus Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-white/10 pb-2">
              Head Campus
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Vastral Circle, SP Ring Road, Vastral, Ahmedabad - 382418</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 98250 12345 / +91 79 2500 1122</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>admissions@ahujacareer.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>7:00 AM - 8:30 PM (Mon - Sat)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© 2026 Ahuja Career Institute. All rights reserved.</p>
          <p className="text-gray-400 font-mono">Prepared by Converge Digitals</p>
        </div>
      </div>
    </footer>
  );
};
