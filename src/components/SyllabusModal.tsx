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
      <div className="relative w-full max-w-3xl bg-[#FAF6EE] rounded-2xl shadow-2xl border border-[#E5DCCB] overflow-hidden my-auto max-h-[90vh] flex flex-col animate-scale-up">
        {/* Modal Header */}
        <div className="bg-[#5C1315] text-white p-6 relative flex items-center justify-between flex-shrink-0">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-[#1A1818] font-bold text-xs uppercase tracking-wider mb-1">
              Official Curriculum 2026-2027
            </span>
            <h3 className="text-2xl font-bold font-serif">{course.title}</h3>
            <p className="text-amber-200 text-xs mt-0.5">{course.targetExam}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-gray-800">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-xl border border-gray-200 text-xs">
            <div>
              <span className="text-gray-500 block">Faculty Lead:</span>
              <span className="font-bold text-[#5C1315]">{course.facultyHead}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Batch Timings:</span>
              <span className="font-bold text-gray-900">{course.timings}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Test Frequency:</span>
              <span className="font-bold text-gray-900">{course.testingFrequency}</span>
            </div>
          </div>

          {/* Subjects Breakdown */}
          <div>
            <h4 className="text-sm font-bold text-[#5C1315] uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Detailed Subject-Wise Modules
            </h4>

            <div className="space-y-4">
              {course.syllabus.map((sub, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200 shadow-2xs">
                  <h5 className="font-bold text-[#4A0E10] text-sm border-b pb-2 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#5C1315] text-white text-xs flex items-center justify-center font-bold">
                      0{idx + 1}
                    </span>
                    {sub.subject}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sub.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-gray-700 bg-amber-50/50 p-2 rounded-lg border border-amber-100">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Course Features */}
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="text-xs font-bold text-[#5C1315] uppercase tracking-wider mb-3">
              Included Preparation Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {course.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-white border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={handleDownload}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              downloaded
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" /> Syllabus PDF Downloaded!
              </>
            ) : (
              <>
                <Download className="w-4 h-4" /> Download Full Syllabus PDF
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onBookDemo(course.title);
            }}
            className="px-6 py-2.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs transition shadow-md"
          >
            Book Free Demo Class
          </button>
        </div>
      </div>
    </div>
  );
};
