'use client';

import React, { useState } from 'react';
import { X, Download, FileText, Check, ChevronRight } from 'lucide-react';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onBookDemo: (courseTitle: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ course, onClose, onBookDemo }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!course) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="bg-red-600 text-white p-6 relative flex items-center justify-between flex-shrink-0">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-white font-bold text-[10px] uppercase tracking-wider mb-1">
              Official Curriculum 2026-2027
            </span>
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-red-100 text-xs mt-0.5">{course.targetExam}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs">
            <div>
              <span className="text-gray-500 block font-medium">Faculty Lead:</span>
              <span className="font-bold text-red-600 text-sm mt-0.5 block">{course.facultyHead}</span>
            </div>
            <div>
              <span className="text-gray-500 block font-medium">Batch Timings:</span>
              <span className="font-bold text-gray-900 text-sm mt-0.5 block">{course.timings}</span>
            </div>
            <div>
              <span className="text-gray-500 block font-medium">Test Frequency:</span>
              <span className="font-bold text-gray-900 text-sm mt-0.5 block">{course.testingFrequency}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Detailed Subject-Wise Modules
            </h4>

            <div className="space-y-3">
              {course.syllabus.map((sub, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                  <h5 className="font-bold text-gray-900 text-sm border-b border-gray-200 pb-2.5 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-red-600 text-white text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {sub.subject}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sub.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
                        <ChevronRight className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                        <span className="font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
              Included Preparation Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {course.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={handleDownload}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              downloaded
                ? 'bg-emerald-600 text-white'
                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 shadow-2xs'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" /> Syllabus PDF Downloaded!
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-red-600" /> Download Full Syllabus PDF
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onBookDemo(course.title);
            }}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-red-600/20 active:scale-98"
          >
            Book Free Demo Class
          </button>
        </div>
      </div>
    </div>
  );
};
