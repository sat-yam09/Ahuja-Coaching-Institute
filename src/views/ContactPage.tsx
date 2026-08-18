'use client';

import React, { useState } from 'react';
import { branches, faqItems } from '../data/mockData';
import { Send, CheckCircle2, ChevronDown, HelpCircle, MapPin, Phone, Clock, Navigation, PhoneCall, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cohort, setCohort] = useState('11th & 12th Science (JEE/NEET)');
  const [selectedBranch, setSelectedBranch] = useState('Maninagar Head Office');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 bg-white text-gray-900">
      {/* 1. HEADER SECTION (Matches Screenshot 2: "Get in Touch", subtitle with stock image showcase) */}
      <section className="pt-12 sm:pt-16 text-center max-w-3xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Get in <span className="text-red-600">Touch</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          We're here to answer any questions you have about our programs, admissions, or centers.
        </p>

        {/* Hero Stock Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 max-w-2xl mx-auto group">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="Campus Reception and Counseling Desks"
            className="w-full h-48 sm:h-60 object-cover group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
            <p className="text-white text-xs sm:text-sm font-bold">
              Visit our counseling desks at Maninagar Head Office and Vastral Branch (Mon - Sat: 3 PM - 9 PM).
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR CENTERS SECTION (Matches Screenshot 2: Center cards with map preview headers) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Centers
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">Visit our fully-equipped campuses across Ahmedabad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Center 1: Maninagar (HQ) */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition card-hover-effect flex flex-col justify-between">
            <div>
              {/* Map Placeholder Graphic Header */}
              <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 border-b border-gray-100 flex flex-col items-center justify-center text-gray-400 relative">
                <MapPin className="w-10 h-10 text-red-500 mb-1 animate-bounce" />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Maninagar HQ Campus</span>
                <span className="text-[10px] text-gray-400">Takshshila Square</span>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-red-600">Maninagar (HQ)</h3>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mt-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>4th Floor, Takshshila Square, Opp. Sankalp Restaurant, Krishnabaug Cross Road, Maninagar, Ahmedabad - 380008</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Timings: 3:00 PM - 9:00 PM (Mon - Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 space-y-2.5">
              <a
                href="tel:+917405328676"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md shadow-red-600/20 active:scale-98 text-center"
              >
                <PhoneCall className="w-4 h-4" /> Call Now (+91 74053 28676)
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-gray-500" /> Get Directions
              </a>
            </div>
          </div>

          {/* Center 2: Vastral Branch */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition card-hover-effect flex flex-col justify-between">
            <div>
              {/* Map Placeholder Graphic Header */}
              <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 border-b border-gray-100 flex flex-col items-center justify-center text-gray-400 relative">
                <MapPin className="w-10 h-10 text-red-500 mb-1 animate-bounce" />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Vastral Branch Campus</span>
                <span className="text-[10px] text-gray-400">Avadh Pride, Metro Pillar 140</span>
              </div>

              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-red-600">Vastral Branch</h3>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mt-2">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>502, 5th Floor, Avadh Pride, Opp. Metro Pillar No. 140, Nirant Cross Road, Vastral, Ahmedabad - 382418</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>Timings: 3:00 PM - 9:00 PM (Mon - Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 pt-0 space-y-2.5">
              <a
                href="tel:+919724319900"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md shadow-red-600/20 active:scale-98 text-center"
              >
                <PhoneCall className="w-4 h-4" /> Call Now (+91 97243 19900)
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-gray-500" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEND AN INQUIRY (Matches Screenshot 2: Soft Gray Form Card with Red Button) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-50/90 rounded-3xl border border-gray-200 p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="text-center space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Send an Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-6 rounded-2xl border border-green-200 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900">Inquiry Received!</h3>
              <p className="text-sm text-gray-600">
                Thank you <span className="font-semibold text-gray-900">{name}</span>. Our counselor at{' '}
                <span className="font-semibold text-gray-900">{selectedBranch}</span> will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/10 focus:outline-hidden transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/10 focus:outline-hidden transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Interested In</label>
                  <select
                    value={cohort}
                    onChange={(e) => setCohort(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/10 focus:outline-hidden transition"
                  >
                    <option value="11th & 12th Science (JEE/NEET)">Select a program (11th/12th Science)</option>
                    <option value="11th & 12th Commerce">11th &amp; 12th Commerce</option>
                    <option value="Std. 8th to 10th Foundation">Std. 8th to 10th Foundation</option>
                    <option value="Crash Course / Test Series">Crash Course / Test Series</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Center</label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/10 focus:outline-hidden transition"
                  >
                    <option value="Maninagar Head Office">Maninagar (HQ)</option>
                    <option value="Vastral Branch">Vastral Branch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any questions about fees, batch timings, or demo classes..."
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-200 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-600/10 focus:outline-hidden transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-red-600/20 active:scale-98 flex items-center justify-center gap-2"
                >
                  Submit Inquiry ▶
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">Frequently Asked Questions</h3>
            <p className="text-xs text-gray-500">Quick answers about batches, testing, and admissions.</p>
          </div>

          <div className="space-y-2.5 pt-2">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-sm text-gray-900 flex items-center justify-between gap-3 hover:bg-gray-50 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-red-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
