'use client';

import React, { useState } from 'react';
import { branches, faqItems } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Navigation, ChevronDown, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(branches[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#5C1315', '#C99A2C', '#ffffff'],
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16 bg-[#FAF6EE]">
      {/* CONTACT HERO */}
      <section className="bg-[#5C1315] text-white py-16 text-center border-b-4 border-[#C99A2C] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-400/30 text-xs font-bold uppercase tracking-wider rounded-full">
            VISIT & GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Contact Ahuja Career Institute
          </h1>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            Campus directory details for Vastral, Isanpur, and Maninagar branches. Our academic counselors are available 6 days a week.
          </p>
        </div>
      </section>

      {/* BRANCH CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            CAMPUS DIRECTORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
            Our Campuses Across Ahmedabad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-2xl p-6 border shadow-md flex flex-col justify-between space-y-5 relative card-hover-effect ${
                branch.isMainBranch
                  ? 'border-[#C99A2C] ring-2 ring-amber-400/40'
                  : 'border-[#E5DCCB]'
              }`}
            >
              {branch.isMainBranch && (
                <span className="absolute -top-3 right-4 px-3 py-0.5 bg-[#C99A2C] text-[#1A1818] font-bold text-[10px] uppercase rounded-full shadow-xs">
                  Head Office
                </span>
              )}

              <div className="space-y-3">
                <h3 className="font-bold text-lg font-serif text-[#4A0E10]">{branch.name}</h3>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#5C1315] flex-shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5C1315] flex-shrink-0" />
                    <span className="font-semibold text-gray-900">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#5C1315] flex-shrink-0" />
                    <span>{branch.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#5C1315] flex-shrink-0" />
                    <span>{branch.timing}</span>
                  </div>
                </div>
              </div>

              {/* Actions Bar */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <a
                  href={`tel:${branch.phone.split('/')[0].trim()}`}
                  className="w-full py-2 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider transition"
                >
                  <Phone className="w-3.5 h-3.5" /> Click-to-Call Branch
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={branch.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-xl border border-emerald-200 flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                  </a>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 bg-amber-50 hover:bg-amber-100 text-[#5C1315] font-bold text-[11px] rounded-xl border border-amber-200 flex items-center justify-center gap-1.5 transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-600" /> Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY & FAQ GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            COUNSELING & SUPPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#4A0E10]">
            Inquiry & Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DCCB] shadow-lg space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <HelpCircle className="w-5 h-5 text-[#5C1315]" />
              <h3 className="font-serif font-bold text-lg text-[#4A0E10]">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition bg-[#FAF6EE]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 font-bold text-xs sm:text-sm text-[#4A0E10] flex items-center justify-between gap-2 hover:bg-amber-50"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#5C1315] transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-gray-700 leading-relaxed border-t border-gray-200/50 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Callback Message Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E5DCCB] p-6 sm:p-8 shadow-lg space-y-6">
            <div className="border-b border-gray-100 pb-3">
              <span className="text-[10px] font-bold text-[#5C1315] uppercase tracking-widest bg-amber-100 px-2.5 py-0.5 rounded-full">
                DETAILED CALLBACK FORM
              </span>
              <h3 className="text-xl font-bold font-serif text-[#4A0E10] mt-1">Request Academic Counseling</h3>
            </div>

            {submitted ? (
              <div className="bg-amber-50 p-8 rounded-2xl text-center space-y-3 border border-amber-200 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold font-serif text-[#5C1315]">Inquiry Received!</h3>
                <p className="text-xs text-gray-700">
                  Thank you <span className="font-bold">{name}</span>. Our counselor at <span className="font-bold">{selectedBranch}</span> will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#5C1315] text-white rounded-xl text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Contact Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10 digit mobile"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Target Cohort Select
                    </label>
                    <select
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-hidden font-medium"
                    >
                      <option value="JEE Main & Advanced 2027">JEE Main & Advanced 2027</option>
                      <option value="NEET UG 2027 Medical">NEET UG 2027 Medical</option>
                      <option value="Class 11-12 Science Board">Class 11-12 Science Board</option>
                      <option value="Class 6-10 Junior Foundation">Class 6-10 Junior Foundation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Nearest Branch Select
                    </label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-hidden font-medium"
                    >
                      {branches.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Query Text
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inquire about demo classes, fee installment structure, or scholarship test..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-xl border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Callback Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

