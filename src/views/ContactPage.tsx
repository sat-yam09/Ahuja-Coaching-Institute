'use client';

import React, { useState } from 'react';
import { branches, faqItems } from '../data/mockData';
import { Send, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';

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
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 pb-12 bg-[#FAF6EE]">
      {/* CONTACT HERO */}
      <section className="relative text-white py-16 sm:py-20 text-center overflow-hidden flex items-center justify-center border-b border-[#C99A2C]/40">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Contact Ahuja Career Institute Campuses"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#C99A2C]/20 border border-[#C99A2C]/40 text-amber-300 text-xs font-semibold tracking-wider rounded-md backdrop-blur-xs">
            VISIT &amp; GET IN TOUCH
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Contact Ahuja Career Institute
          </h1>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Campus directory details for Maninagar Head Office and Vastral Branch. Our academic counselors are available from 3:00 PM to 9:00 PM (Monday - Saturday).
          </p>
        </div>
      </section>



      {/* INQUIRY & FAQ GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-semibold text-[#5C1315] tracking-widest uppercase">
            COUNSELING &amp; SUPPORT
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A0E10]">
            Inquiry &amp; Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-lg border border-[#E5DCCB] space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <HelpCircle className="w-5 h-5 text-[#5C1315]" />
              <h3 className="font-semibold text-base text-[#4A0E10]">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-2">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-md overflow-hidden bg-[#FAF6EE]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-3 font-semibold text-xs sm:text-sm text-[#4A0E10] flex items-center justify-between gap-2 hover:bg-amber-50"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#5C1315] transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-3 pt-0 text-xs text-gray-700 leading-relaxed border-t border-gray-200/50 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Callback Message Form */}
          <div className="lg:col-span-6 bg-white rounded-lg border border-[#E5DCCB] p-5 sm:p-6 space-y-5">
            <div className="border-b border-gray-100 pb-3">
              <div className="text-[10px] font-semibold text-[#5C1315] tracking-widest uppercase">
                DETAILED CALLBACK FORM
              </div>
              <h3 className="text-lg font-semibold text-[#4A0E10] mt-1">Request Academic Counseling</h3>
            </div>

            {submitted ? (
              <div className="bg-amber-50 p-6 rounded-lg text-center space-y-3 border border-amber-200 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-semibold text-[#5C1315]">Inquiry Received!</h3>
                <p className="text-xs text-gray-700">
                  Thank you <span className="font-semibold">{name}</span>. Our counselor at <span className="font-semibold">{selectedBranch}</span> will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#5C1315] text-white rounded-md text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full px-3 py-2 bg-[#FAF6EE] text-gray-900 rounded-md border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Contact Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10 digit mobile"
                      className="w-full px-3 py-2 bg-[#FAF6EE] text-gray-900 rounded-md border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Target Academic Cohort
                    </label>
                    <div className="relative">
                      <select
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 pr-8 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-md border border-gray-300 hover:border-[#C99A2C] text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-none font-medium appearance-none transition-colors"
                      >
                        <option value="11th & 12th Science (Eng/Guj)">11th &amp; 12th Science (GSEB/CBSE + JEE/NEET)</option>
                        <option value="11th & 12th Commerce (Eng/Guj)">11th &amp; 12th Commerce (GSEB/CBSE)</option>
                        <option value="JEE Main & Advanced / NEET UG">JEE Main/Adv &amp; NEET UG Competitive Prep</option>
                        <option value="Std. 6th to 10th Secondary Foundation">Std. 6th to 10th Secondary Foundation</option>
                      </select>
                      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C1315]/50 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                      Nearest Branch Select
                    </label>
                    <div className="relative">
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="w-full px-3 pr-8 py-2.5 bg-[#FAF6EE] text-gray-900 rounded-md border border-gray-300 hover:border-[#C99A2C] text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-none font-medium appearance-none transition-colors"
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
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    Query Text
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inquire about batch timings, doubt sessions, fee structure, or admissions..."
                    className="w-full px-3 py-2 bg-[#FAF6EE] text-gray-900 rounded-md border border-gray-300 text-xs focus:ring-2 focus:ring-[#5C1315] focus:outline-none"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#5C1315] hover:bg-[#430d0f] text-white font-semibold rounded-md text-xs transition flex items-center justify-center gap-2"
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
