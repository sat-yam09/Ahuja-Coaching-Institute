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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="bg-red-600 text-white p-6 relative flex items-start justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <img
              src={faculty.avatarUrl}
              alt={faculty.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md flex-shrink-0"
            />
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/20 text-white font-bold text-[10px] uppercase tracking-wider mb-1">
                {faculty.category}
              </span>
              <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
              <p className="text-red-100 text-sm font-medium">{faculty.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-gray-800">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-center">
              <Clock className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <div className="text-xs text-gray-500 font-medium">Experience</div>
              <div className="font-bold text-red-600 text-sm">{faculty.experience}</div>
            </div>
            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-center">
              <GraduationCap className="w-4 h-4 text-red-600 mx-auto mb-1" />
              <div className="text-xs text-gray-500 font-medium">Qualification</div>
              <div className="font-bold text-gray-900 text-xs truncate" title={faculty.education}>
                {faculty.education}
              </div>
            </div>
            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-center">
              <Star className="w-4 h-4 text-amber-500 fill-amber-400 mx-auto mb-1" />
              <div className="text-xs text-gray-500 font-medium">Rating</div>
              <div className="font-bold text-gray-900 text-sm">4.9 / 5.0</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Teaching Philosophy &amp; Background
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-200">
              {faculty.bio}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-semibold"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Notable Mentorship Achievements
            </h4>
            <ul className="space-y-2">
              {faculty.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-gray-500 font-medium">Want to study under {faculty.name}?</span>
          <button
            onClick={() => {
              onClose();
              onInquire(faculty.name);
            }}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-red-600/20 active:scale-98"
          >
            Schedule Mentorship Session
          </button>
        </div>
      </div>
    </div>
  );
};
