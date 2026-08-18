'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { AhujaLogo } from './AhujaLogo';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onInquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click or ESC key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAboutDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks: { id: PageTab; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', hasDropdown: true },
    { id: 'courses', label: 'Courses' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'achievements', label: 'Success Stories' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: PageTab) => {
    if (id === 'achievements') {
      setActiveTab('scoreboard');
    } else {
      setActiveTab(id);
    }
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md text-gray-900 border-b border-gray-200/90 shadow-xs transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo (Left) */}
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="focus:outline-hidden group py-1.5 flex items-center gap-2 cursor-pointer flex-shrink-0"
            aria-label="Ahuja Career Institute Home"
          >
            <AhujaLogo size="md" variant="dark" className="h-9 sm:h-11 md:h-12 w-auto" />
          </button>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                activeTab === link.id || (link.id === 'achievements' && activeTab === 'scoreboard');

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    ref={dropdownRef}
                    className="relative group"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`px-3.5 py-2 rounded-xl text-sm font-bold transition flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          aboutDropdownOpen ? 'rotate-180 text-red-600' : 'text-gray-400'
                        }`}
                      />
                    </button>

                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-60 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                        <button
                          onClick={() => handleNavClick('about')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700 transition flex items-center justify-between font-semibold"
                        >
                          <span>About Institute</span>
                          <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                            Since 1998
                          </span>
                        </button>
                        <button
                          onClick={() => handleNavClick('faculty')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700 transition font-semibold"
                        >
                          Faculty Mentors
                        </button>
                        <button
                          onClick={() => handleNavClick('about')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700 transition font-semibold"
                        >
                          Founder's Message
                        </button>
                        <button
                          onClick={() => handleNavClick('gallery')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-red-50 hover:text-red-700 transition font-semibold border-t border-gray-100 mt-1 pt-2"
                        >
                          Campus Learning Spaces
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

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

          {/* Mobile Right Side Controls (Hamburger on Right like before) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onInquireClick}
              className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs active:scale-98"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:bg-gray-100 hover:text-red-600 transition active:scale-95 cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu (Directly Below Navbar like before) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-1.5 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive =
              activeTab === link.id || (link.id === 'achievements' && activeTab === 'scoreboard');

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
              >
                {link.label === 'about' ? 'About Us' : link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-gray-100 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquireClick();
              }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm text-center shadow-md shadow-red-600/20 flex items-center justify-center gap-2 active:scale-98 transition"
            >
              <Sparkles className="w-4 h-4" /> Inquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
