'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, MapPin, User, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
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
  defaultCohort = 'JEE Main & Advanced 2027',
  defaultBranch = 'Vastral Main Campus',
}) => {
  const [studentName, setStudentName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [targetCohort, setTargetCohort] = useState(defaultCohort);
  const [nearestBranch, setNearestBranch] = useState(defaultBranch);
  const [studentClass, setStudentClass] = useState('11th Moving');
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !mobileNumber.trim()) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5C1315', '#C99A2C', '#10B981', '#ffffff'],
      });
    } catch {
      // fallback
    }

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
      <div className="relative w-full max-w-lg bg-[#FAF6EE] rounded-2xl shadow-2xl border border-[#E5DCCB] overflow-hidden my-auto animate-scale-up">
        {/* Header Bar */}
        <div className="bg-[#5C1315] text-white px-6 py-5 flex items-center justify-between relative">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Admissions 2026-27 Open
            </div>
            <h3 className="text-xl font-bold font-serif">Inquire & Book Free Demo Class</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#4A0E10] font-serif mb-2">Demo Class Reserved!</h4>
              <p className="text-gray-700 text-sm mb-4">
                Thank you <span className="font-semibold">{studentName}</span>! Our academic counselor will call you within 30 minutes at <span className="font-semibold text-[#5C1315]">{mobileNumber}</span> to confirm your session schedule.
              </p>

              <div className="bg-white p-4 rounded-xl border border-amber-200 text-left mb-6 shadow-xs space-y-2 text-xs text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Booking Reference ID:</span>
                  <span className="font-mono font-bold text-[#5C1315]">{bookingId}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Selected Target Cohort:</span>
                  <span className="font-medium text-gray-900">{targetCohort}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Campus:</span>
                  <span className="font-medium text-gray-900">{nearestBranch}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-xl transition shadow-md"
              >
                Done & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-600 mb-2">
                Get direct counselor guidance, fee structure breakdown, and free trial demo class pass.
              </p>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Aarav Shah"
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-sm text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
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
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-sm text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Target Cohort
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={targetCohort}
                      onChange={(e) => setTargetCohort(e.target.value)}
                      className="w-full pl-9 pr-2 py-2.5 bg-white rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium"
                    >
                      <option value="JEE Main & Advanced 2027">JEE Main & Adv 2027</option>
                      <option value="NEET UG 2027">NEET UG Medical 2027</option>
                      <option value="Class 11-12 Board Prep">Class 11-12 Boards</option>
                      <option value="Junior Foundation 6-10">Class 6-10 Foundation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Current Class
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium"
                  >
                    <option value="11th Moving">Class 11th</option>
                    <option value="12th Moving">Class 12th</option>
                    <option value="12th Pass / Dropper">Dropper Batch</option>
                    <option value="Class 8-10">Class 8th to 10th</option>
                    <option value="Class 6-7">Class 6th to 7th</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Nearest Campus Branch
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    value={nearestBranch}
                    onChange={(e) => setNearestBranch(e.target.value)}
                    className="w-full pl-9 pr-2 py-2.5 bg-white rounded-xl border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-[#5C1315] text-xs text-gray-900 font-medium"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C99A2C] hover:bg-[#b08420] text-[#1A1818] font-bold rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                >
                  <Send className="w-4 h-4" /> Request Callback & Free Demo Pass
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-500">
                🔒 Your contact details are kept strictly confidential. Zero spam policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
