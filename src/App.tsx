'use client';

import React, { useState, useEffect } from 'react';
import { PageTab, Course } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { CoursesPage } from './views/CoursesPage';
import { AboutPage } from './views/AboutPage';
import { ScoreboardPage } from './views/ScoreboardPage';
import { GalleryPage } from './views/GalleryPage';
import { ContactPage } from './views/ContactPage';
import { InquireModal } from './components/InquireModal';
import { SyllabusModal } from './components/SyllabusModal';

interface AppProps {
  initialTab?: PageTab;
}

const TAB_CONFIG: Record<PageTab, { title: string; path: string }> = {
  home: {
    title: 'Ahuja Career Institute | Premier Coaching for JEE, NEET & Boards',
    path: '/',
  },
  about: {
    title: 'About Us | Ahuja Career Institute',
    path: '/about',
  },
  courses: {
    title: 'Courses & Programs | Ahuja Career Institute',
    path: '/courses',
  },
  achievements: {
    title: 'Success Stories & Rankers | Ahuja Career Institute',
    path: '/achievements',
  },
  scoreboard: {
    title: 'Success Stories & Scoreboard | Ahuja Career Institute',
    path: '/achievements',
  },
  gallery: {
    title: 'Campus & Event Gallery | Ahuja Career Institute',
    path: '/gallery',
  },
  contact: {
    title: 'Contact & Campuses | Ahuja Career Institute',
    path: '/contact',
  },
};

const getTabFromPath = (pathname: string): PageTab => {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/courses') return 'courses';
  if (cleanPath === '/achievements' || cleanPath === '/scoreboard') return 'scoreboard';
  if (cleanPath === '/gallery') return 'gallery';
  if (cleanPath === '/contact') return 'contact';
  return 'home';
};

export default function App({ initialTab }: AppProps) {
  const [activeTab, setActiveTabState] = useState<PageTab>(initialTab || 'home');
  const [inquireModalOpen, setInquireModalOpen] = useState(false);
  const [inquireCohort, setInquireCohort] = useState('JEE Main & Advanced 2027');
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<Course | null>(null);
  const [selectedCourseIdForPage, setSelectedCourseIdForPage] = useState('foundation-6-10');

  // Change tab and synchronize browser URL & document title
  const setActiveTab = (tab: PageTab) => {
    setActiveTabState(tab);
    const targetConfig = TAB_CONFIG[tab] || TAB_CONFIG.home;
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetConfig.path) {
        window.history.pushState({ tab }, '', targetConfig.path);
      }
      document.title = targetConfig.title;
    }
  };

  // Sync tab state with browser location (initial load & back/forward button clicks)
  useEffect(() => {
    const syncFromLocation = () => {
      if (typeof window !== 'undefined') {
        const pathTab = getTabFromPath(window.location.pathname);
        setActiveTabState(pathTab);
        const config = TAB_CONFIG[pathTab] || TAB_CONFIG.home;
        document.title = config.title;
      }
    };

    if (!initialTab) {
      syncFromLocation();
    } else {
      const config = TAB_CONFIG[initialTab] || TAB_CONFIG.home;
      if (typeof document !== 'undefined') {
        document.title = config.title;
      }
    }

    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, [initialTab]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenInquire = (cohortName?: string) => {
    if (cohortName) {
      setInquireCohort(cohortName);
    }
    setInquireModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans antialiased flex flex-col justify-between selection:bg-red-600 selection:text-white">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onInquireClick={() => handleOpenInquire()}
      />

      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onInquireClick={() => handleOpenInquire()}
            onSelectCourse={(courseId) => {
              setSelectedCourseIdForPage(courseId);
              setActiveTab('courses');
            }}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage
            initialCourseId={selectedCourseIdForPage}
            onInquireClick={(title) => handleOpenInquire(title)}
            onViewSyllabus={(course) => setSelectedSyllabusCourse(course)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
            onInquireClick={() => handleOpenInquire()}
          />
        )}

        {(activeTab === 'achievements' || activeTab === 'scoreboard') && (
          <ScoreboardPage
            onInquireClick={() => handleOpenInquire()}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage
            onInquireClick={() => handleOpenInquire()}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      <Footer
        setActiveTab={setActiveTab}
        onInquireClick={() => handleOpenInquire()}
      />

      <InquireModal
        isOpen={inquireModalOpen}
        onClose={() => setInquireModalOpen(false)}
        defaultCohort={inquireCohort}
      />

      <SyllabusModal
        course={selectedSyllabusCourse}
        onClose={() => setSelectedSyllabusCourse(null)}
        onBookDemo={(title) => handleOpenInquire(title)}
      />
    </div>
  );
}
