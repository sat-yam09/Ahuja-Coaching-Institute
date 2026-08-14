'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall, Sparkles, Award } from 'lucide-react';
import { AhujaLogo } from './AhujaLogo';
import { PageTab } from '../types';
import { tickerResults } from '../data/mockData';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onInquireClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onInquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

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
    <header className="sticky top-0 z-40 w-full shadow-md bg-[#5C1315] text-white border-b border-[#430d0f]">
      {/* Top Ticker Notification Bar */}
      <div className="bg-[#400B0D] text-amber-200 text-xs py-1.5 px-4 overflow-hidden border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0 font-semibold text-white">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase text-[11px] tracking-wider text-amber-300">Historical Results Highlight:</span>
          </div>
          <div className="overflow-hidden relative flex-1 mx-4">
            <div className="animate-marquee whitespace-nowrap inline-flex items-center gap-8 text-[11px]">
              {tickerResults.map((res, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <span className="font-bold text-white">{res.name}</span>
                  <span className="bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded text-[10px] font-mono">{res.score}</span>
                  <span className="text-white/70">({res.exam})</span>
                  <span className="text-amber-500/50">|</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/80 flex-shrink-0">
            <span className="flex items-center gap-1"><PhoneCall className="w-3 h-3 text-amber-400" /> +91 98250 12345</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className="focus:outline-hidden group py-2"
          >
            <AhujaLogo size="md" variant="light" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#4A0E10] px-3 py-1.5 rounded-full border border-amber-500/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;

              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="relative group" onMouseLeave={() => setAboutDropdownOpen(false)}>
                    <button
                      onClick={() => {
                        setActiveTab(link.id);
                        setAboutDropdownOpen(!aboutDropdownOpen);
                      }}
                      onMouseEnter={() => setAboutDropdownOpen(true)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#C99A2C] text-[#1A1818] shadow-xs'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label} <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {/* About Dropdown */}
                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-200 py-2 z-50 animate-fadeIn">
                        <button
                          onClick={() => {
                            setActiveTab('about');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-amber-50 hover:text-[#5C1315] flex items-center justify-between"
                        >
                          <span>About Institute</span>
                          <span className="text-[10px] text-gray-400">Since 2001</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('faculty');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-amber-50 hover:text-[#5C1315]"
                        >
                          Faculty Profiles
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('about');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-amber-50 hover:text-[#5C1315]"
                        >
                          Director's Message
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('gallery');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-amber-50 hover:text-[#5C1315]"
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-[#C99A2C] text-[#1A1818] shadow-xs'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Inquire Button (Desktop >= 1024px) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onInquireClick}
              className="px-5 py-2.5 bg-white hover:bg-amber-50 text-[#5C1315] font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md hover:shadow-lg border border-amber-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Inquire Now
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#4A0E10] border-t border-white/10 px-4 py-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                activeTab === link.id
                  ? 'bg-[#C99A2C] text-[#1A1818]'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInquireClick();
              }}
              className="w-full py-3.5 bg-white hover:bg-amber-50 text-[#5C1315] font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg border border-amber-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" /> Inquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
