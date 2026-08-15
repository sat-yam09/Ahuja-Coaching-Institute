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
  defaultCohort = '11th & 12th Science (Eng/Guj)',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-lg shadow-lg border border-[#E5DCCB] overflow-hidden my-auto">
        <div className="bg-[#5C1315] text-white px-5 py-4 flex items-center justify-between relative">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 text-xs font-semibold mb-1">
              Admissions 2026-27 Open
            </div>
            <h3 className="text-lg font-bold">Request Admissions Counseling</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-md transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          {submitted ? (
            <div className="text-center py-5 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#4A0E10] mb-2">Inquiry Successfully Received</h4>
              <p className="text-gray-700 text-sm mb-4">
                Thank you <span className="font-semibold">{studentName}</span>! Our academic counselor at <span className="font-semibold">{nearestBranch}</span> will contact you shortly on <span className="font-semibold text-[#5C1315]">{mobileNumber}</span>.
              </p>

              <div className="bg-white p-4 rounded-md border border-amber-200 text-left mb-5 space-y-2 text-xs text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Inquiry Reference ID:</span>
                  <span className="font-mono font-semibold text-[#5C1315]">{bookingId}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Target Academic Program:</span>
                  <span className="font-medium text-gray-900">{targetCohort}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Branch:</span>
                  <span className="font-medium text-gray-900">{nearestBranch}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md transition shadow-sm"
              >
                Done &amp; Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-600 mb-1">
                Get direct counseling guidance, curriculum details, batch timings, and fee breakdown.
              </p>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Saloni Vaghela"
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-md border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-sm text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="10 digit mobile number"
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-md border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-sm text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Target Program
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/60 pointer-events-none z-10" />
                    <select
                      value={targetCohort}
                      onChange={(e) => setTargetCohort(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-white rounded-md border border-gray-300 hover:border-[#C99A2C] focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium appearance-none transition-colors"
                    >
                      <option value="11th & 12th Science (Eng/Guj)">11th &amp; 12th Science</option>
                      <option value="11th & 12th Commerce (Eng/Guj)">11th &amp; 12th Commerce</option>
                      <option value="JEE Main & Advanced / NEET UG">JEE / NEET Prep</option>
                      <option value="Std. 6th to 10th Foundation">6th to 10th Foundation</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/50 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Current Class
                  </label>
                  <div className="relative">
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3 pr-8 py-2.5 bg-white rounded-md border border-gray-300 hover:border-[#C99A2C] focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium appearance-none transition-colors"
                    >
                      <option value="11th Standard">Class 11th</option>
                      <option value="12th Standard">Class 12th</option>
                      <option value="12th Pass / Repeater">Repeater / Dropper</option>
                      <option value="Class 9-10">Class 9th to 10th</option>
                      <option value="Class 6-8">Class 6th to 8th</option>
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Nearest Campus Branch
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/60 pointer-events-none z-10" />
                  <select
                    value={nearestBranch}
                    onChange={(e) => setNearestBranch(e.target.value)}
                    className="w-full pl-9 pr-8 py-2.5 bg-white rounded-md border border-gray-300 hover:border-[#C99A2C] focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium appearance-none transition-colors"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/50 pointer-events-none" />
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-semibold rounded-md transition shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" /> Request Admission Counseling
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-500">
                Your contact details are kept strictly confidential. Zero spam policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
