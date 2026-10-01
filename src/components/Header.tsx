'use client';

import React, { useState } from 'react';
import { Menu, X, Sparkles, Home, Info, BookOpen, Trophy, Image as ImageIcon, PhoneCall } from 'lucide-react';
import { AhujaLogo } from './AhujaLogo';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onInquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'achievements', label: 'Success Stories', icon: Trophy },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const handleNavClick = (id: PageTab) => {
    if (id === 'achievements') {
      setActiveTab('scoreboard');
    } else {
      setActiveTab(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-200/90 shadow-xs transition-all">
      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo (Left) */}
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="focus:outline-hidden group py-1 flex items-center gap-2 cursor-pointer flex-shrink-0"
            aria-label="Ahuja Career Institute Home"
          >
            <AhujaLogo size="md" variant="dark" showIconOnlyOnMobile={true} className="h-9 sm:h-11 md:h-12 w-auto" />
          </button>

          {/* Desktop Navigation (Center) - Direct Links with No Dropdown on About */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                activeTab === link.id || (link.id === 'achievements' && activeTab === 'scoreboard');

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition cursor-pointer ${
                    isActive
                      ? 'text-red-600 bg-red-50 font-bold'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onInquireClick}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/20 active:scale-98 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" /> Inquire Now
            </button>
          </div>

          {/* Mobile Right Side: Inquire Button + Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onInquireClick}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs active:scale-98 flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 hover:text-red-600 transition active:scale-95 cursor-pointer border border-gray-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Space-Efficient Hamburger Drawer (Direct 1-Tap Links, NO Nested Accordions/Dropdowns) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 px-4 py-3 shadow-2xl space-y-3 animate-fadeIn">
          {/* Compact 2-Column Grid (Saves vertical space, prevents tall scroll) */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                activeTab === link.id || (link.id === 'achievements' && activeTab === 'scoreboard');

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl text-xs font-bold transition active:scale-98 cursor-pointer text-left ${
                    isActive
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-gray-50 text-gray-800 hover:bg-red-50 hover:text-red-600 border border-gray-200/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-red-600'}`} />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Inquire Banner in Drawer */}
          <div className="pt-1 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquireClick();
              }}
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-98 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Inquire for Admissions 2025–26
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
