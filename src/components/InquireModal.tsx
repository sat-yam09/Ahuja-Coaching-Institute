'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, MapPin, User, Send, ChevronDown } from 'lucide-react';
import { branches } from '../data/mockData';

interface InquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCohort?: string;
  defaultBranch?: string;
}

export const InquireModal: React.FC<InquireModalProps> = ({
  isOpen,
  onClose,
  defaultCohort = '11th & 12th Science (JEE/NEET)',
  defaultBranch = 'Maninagar Head Office',
}) => {
  const [studentName, setStudentName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [targetCohort, setTargetCohort] = useState(defaultCohort);
  const [nearestBranch, setNearestBranch] = useState(defaultBranch);
  const [studentClass, setStudentClass] = useState('11th Standard');
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !mobileNumber.trim()) return;

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setBookingId(`AHUJA-2026-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStudentName('');
    setMobileNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden my-auto">
        <div className="bg-red-600 text-white px-6 py-5 flex items-center justify-between relative">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider mb-1">
              Admissions 2026-27 Open
            </div>
            <h3 className="text-xl font-bold">Request Admissions Counseling</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 animate-fadeIn">
              <div className="w-16 h-16 bg-green-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Inquiry Successfully Received</h4>
              <p className="text-gray-600 text-sm mb-5">
                Thank you <span className="font-semibold text-gray-900">{studentName}</span>! Our counselor at <span className="font-semibold text-gray-900">{nearestBranch}</span> will contact you shortly on <span className="font-semibold text-red-600">{mobileNumber}</span>.
              </p>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-left mb-6 space-y-2 text-xs text-gray-700">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Inquiry ID:</span>
                  <span className="font-mono font-bold text-red-600">{bookingId}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Target Program:</span>
                  <span className="font-semibold text-gray-900">{targetCohort}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Branch:</span>
                  <span className="font-semibold text-gray-900">{nearestBranch}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-md shadow-red-600/20 active:scale-98"
              >
                Done &amp; Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-500 mb-2">
                Get direct counseling guidance, curriculum details, batch timings, and fee breakdown.
              </p>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Student Full Name <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Saloni Vaghela"
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-sm font-medium transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Mobile Number (WhatsApp) <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="10 digit mobile number"
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-sm font-medium transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Target Program
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600 pointer-events-none z-10" />
                    <select
                      value={targetCohort}
                      onChange={(e) => setTargetCohort(e.target.value)}
                      className="w-full pl-10 pr-8 py-2.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-xs font-medium appearance-none transition"
                    >
                      <option value="11th & 12th Science (JEE/NEET)">11th &amp; 12th Science</option>
                      <option value="11th & 12th Commerce">11th &amp; 12th Commerce</option>
                      <option value="JEE Main & Advanced / NEET UG">JEE / NEET Prep</option>
                      <option value="Std. 6th to 10th Foundation">6th to 10th Foundation</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Current Class
                  </label>
                  <div className="relative">
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 pr-8 py-2.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-xs font-medium appearance-none transition"
                    >
                      <option value="11th Standard">Class 11th</option>
                      <option value="12th Standard">Class 12th</option>
                      <option value="12th Pass / Repeater">Repeater / Dropper</option>
                      <option value="Class 9-10">Class 9th to 10th</option>
                      <option value="Class 6-8">Class 6th to 8th</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nearest Campus Branch
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600 pointer-events-none z-10" />
                  <select
                    value={nearestBranch}
                    onChange={(e) => setNearestBranch(e.target.value)}
                    className="w-full pl-10 pr-8 py-2.5 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 focus:bg-white focus:outline-hidden focus:border-red-600 focus:ring-2 focus:ring-red-600/10 text-xs font-medium appearance-none transition"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition shadow-md shadow-red-600/20 flex items-center justify-center gap-2 text-sm active:scale-98"
                >
                  <Send className="w-4 h-4" /> Request Admission Counseling
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-400">
                Your contact details are kept strictly confidential. Zero spam policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
