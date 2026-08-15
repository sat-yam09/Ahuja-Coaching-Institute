'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
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
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigateToSection = (tab: PageTab, sectionId?: string) => {
    setActiveTab(tab);
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  const navLinks: { id: PageTab; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', hasDropdown: true },
    { id: 'courses', label: 'Courses' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-[#5C1315] text-white border-b border-[#430d0f]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="focus:outline-hidden group py-2"
          >
            <AhujaLogo size="md" variant="light" />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;

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
                      onClick={() => {
                        handleNavigateToSection('about');
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#C99A2C] text-[#1A1818] font-semibold'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label} <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-0 pt-1 w-56 bg-white text-gray-900 rounded-lg shadow-xl border border-gray-200 py-1.5 z-50 animate-fadeIn">
                        <button
                          onClick={() => handleNavigateToSection('about', 'who-we-are')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-[#5C1315] transition flex items-center justify-between font-medium"
                        >
                          <span>About Institute</span>
                          <span className="text-xs text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded font-mono">Since 1998</span>
                        </button>
                        <button
                          onClick={() => handleNavigateToSection('faculty')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-[#5C1315] transition font-medium"
                        >
                          Faculty Mentors
                        </button>
                        <button
                          onClick={() => handleNavigateToSection('about', 'directors-message')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-[#5C1315] transition font-medium"
                        >
                          Founder's Message
                        </button>
                        <button
                          onClick={() => handleNavigateToSection('about', 'journey-timeline-section')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-[#5C1315] transition font-medium"
                        >
                          Our 27+ Year Journey
                        </button>
                        <button
                          onClick={() => handleNavigateToSection('gallery')}
                          className="w-full text-left px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-[#5C1315] transition font-medium border-t border-gray-100 mt-1"
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
                  onClick={() => setActiveTab(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? 'bg-[#C99A2C] text-[#1A1818] font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-amber-200/90">
              <PhoneCall className="w-3.5 h-3.5" /> +91 74053 28676
            </div>
            <button
              onClick={onInquireClick}
              className="px-4 py-2 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm transition shadow-sm"
            >
              Inquire Now
            </button>
          </div>

          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#4A0E10] border-t border-white/10 px-4 py-4 space-y-1 animate-fadeIn">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavigateToSection('about')}
                      className={`flex-1 text-left px-4 py-2.5 rounded-md text-sm font-medium transition ${
                        activeTab === link.id
                          ? 'bg-[#C99A2C] text-[#1A1818]'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="p-2 text-amber-300 hover:bg-white/10 rounded-md"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {mobileAboutOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-black/20 rounded-md border border-white/5">
                      <button
                        onClick={() => handleNavigateToSection('about', 'who-we-are')}
                        className="w-full text-left px-3 py-2 text-xs text-amber-100 hover:text-white"
                      >
                        • About Institute (Since 1998)
                      </button>
                      <button
                        onClick={() => handleNavigateToSection('faculty')}
                        className="w-full text-left px-3 py-2 text-xs text-amber-100 hover:text-white"
                      >
                        • Faculty Mentors
                      </button>
                      <button
                        onClick={() => handleNavigateToSection('about', 'directors-message')}
                        className="w-full text-left px-3 py-2 text-xs text-amber-100 hover:text-white"
                      >
                        • Founder's Message
                      </button>
                      <button
                        onClick={() => handleNavigateToSection('about', 'journey-timeline-section')}
                        className="w-full text-left px-3 py-2 text-xs text-amber-100 hover:text-white"
                      >
                        • Our 27+ Year Journey
                      </button>
                      <button
                        onClick={() => handleNavigateToSection('gallery')}
                        className="w-full text-left px-3 py-2 text-xs text-amber-100 hover:text-white"
                      >
                        • Campus Learning Spaces
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition ${
                  activeTab === link.id
                    ? 'bg-[#C99A2C] text-[#1A1818]'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
            <div className="flex items-center gap-1.5 px-4 text-sm text-amber-200/90">
              <PhoneCall className="w-3.5 h-3.5" /> +91 98250 12345
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquireClick();
              }}
              className="w-full py-2.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md text-sm shadow-sm"
            >
              Inquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
