'use client';

import React from 'react';
import { X, Award, GraduationCap, Clock, CheckCircle2, BookOpen, Star } from 'lucide-react';
import { FacultyMember } from '../types';

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
  onInquire: (facultyName: string) => void;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose, onInquire }) => {
  if (!faculty) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF6EE] rounded-lg shadow-lg border border-[#E5DCCB] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="bg-[#5C1315] text-white p-5 relative flex items-start justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <img
              src={faculty.avatarUrl}
              alt={faculty.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-sm flex-shrink-0"
            />
            <div>
              <span className="inline-block px-2 py-0.5 rounded bg-amber-400 text-[#1A1818] font-semibold text-xs mb-1">
                {faculty.category}
              </span>
              <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
              <p className="text-amber-200 text-sm font-medium">{faculty.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-md transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-5 text-gray-800">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-md border border-gray-200 text-center">
              <Clock className="w-4 h-4 text-[#5C1315] mx-auto mb-1" />
              <div className="text-xs text-gray-500">Experience</div>
              <div className="font-semibold text-[#5C1315] text-sm">{faculty.experience}</div>
            </div>
            <div className="bg-white p-3 rounded-md border border-gray-200 text-center">
              <GraduationCap className="w-4 h-4 text-[#5C1315] mx-auto mb-1" />
              <div className="text-xs text-gray-500">Qualification</div>
              <div className="font-semibold text-gray-900 text-xs truncate" title={faculty.education}>
                {faculty.education}
              </div>
            </div>
            <div className="bg-white p-3 rounded-md border border-gray-200 text-center">
              <Star className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <div className="text-xs text-gray-500">Rating</div>
              <div className="font-semibold text-gray-900 text-sm">4.9 / 5.0</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Teaching Philosophy & Background
            </h4>
            <p className="text-sm leading-relaxed text-gray-700 bg-white p-4 rounded-md border border-gray-200">
              {faculty.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-md text-xs font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#5C1315] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Notable Mentorship Achievements
            </h4>
            <ul className="space-y-2">
              {faculty.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-white p-2.5 rounded-md border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#5C1315] mt-1.5 flex-shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-gray-500">Want to study under {faculty.name}?</span>
          <button
            onClick={() => {
              onClose();
              onInquire(faculty.name);
            }}
            className="px-4 py-2 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-sm transition shadow-sm"
          >
            Schedule Mentorship Session
          </button>
        </div>
      </div>
    </div>
  );
};
