'use client';

import React, { useState, useEffect } from 'react';
import { PageTab, Course, FacultyMember } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { CoursesPage } from './views/CoursesPage';
import { AboutPage } from './views/AboutPage';
import { FacultyPage } from './views/FacultyPage';
import { ScoreboardPage } from './views/ScoreboardPage';
import { GalleryPage } from './views/GalleryPage';
import { ContactPage } from './views/ContactPage';
import { InquireModal } from './components/InquireModal';
import { FacultyModal } from './components/FacultyModal';
import { SyllabusModal } from './components/SyllabusModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [inquireModalOpen, setInquireModalOpen] = useState(false);
  const [inquireCohort, setInquireCohort] = useState('JEE Main & Advanced 2027');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState<Course | null>(null);
  const [selectedCourseIdForPage, setSelectedCourseIdForPage] = useState('jee');

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

        {activeTab === 'faculty' && (
          <FacultyPage
            onViewFacultyProfile={(fac) => setSelectedFaculty(fac)}
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

      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        onInquire={(name) => handleOpenInquire(`Mentorship under ${name}`)}
      />

      <SyllabusModal
        course={selectedSyllabusCourse}
        onClose={() => setSelectedSyllabusCourse(null)}
        onBookDemo={(title) => handleOpenInquire(title)}
      />
    </div>
  );
}
