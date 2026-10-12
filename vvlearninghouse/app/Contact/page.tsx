"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';

const COUNTRIES = [
  {
    code: 'IN',
    name: 'India',
    dial: '+91',
    length: 10,
    pattern: '[6-9][0-9]{9}',
    placeholder: '98XXXXXXXX',
    hint: 'Enter a valid 10-digit Indian mobile number',
  },
  {
    code: 'AE',
    name: 'UAE',
    dial: '+971',
    length: 9,
    pattern: '5[0-9]{8}',
    placeholder: '5XXXXXXXX',
    hint: 'Enter a valid 9-digit UAE mobile number starting with 5',
  },
];

// Real flag image from flagcdn.com (works on every device)
function Flag({ code, className = '' }: { code: string; className?: string }) {
  const c = code.toLowerCase();
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${c}.png`}
      srcSet={`https://flagcdn.com/w80/${c}.png 2x`}
      width={24}
      height={18}
      alt=""
      className={`rounded-[2px] object-cover shadow-sm ${className}`}
    />
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [countryCode, setCountryCode] = useState('IN');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const country = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or an API route
    console.log('Form submitted:', {
      ...formData,
      phone: `${country.dial}${formData.phone}`,
      country: country.name,
    });
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      // Phone: digits only, limited to the selected country's length
      [name]: name === 'phone' ? value.replace(/\D/g, '').slice(0, country.length) : value
    });
  };

  const handleCountrySelect = (code: string) => {
    setCountryCode(code);
    setDropdownOpen(false);
    // Clear the number since format rules differ per country
    setFormData({ ...formData, phone: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">

      {/* PAGE HEADER */}
      <section className="bg-[#0A2249] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about our books or want to place a bulk order for your school? Send us a message and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row">

            {/* INQUIRY FORM (Left Side) */}
            <div className="w-full lg:w-3/5 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#0A2249] mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#D39B36] focus:border-transparent outline-none transition bg-slate-50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                    <div className="flex">

                      {/* Custom country dropdown with real flags */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setDropdownOpen((o) => !o)}
                          aria-haspopup="listbox"
                          aria-expanded={dropdownOpen}
                          aria-label="Select country"
                          className="h-full flex items-center gap-2 px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-100 text-slate-700 font-medium outline-none focus:ring-2 focus:ring-[#D39B36] hover:bg-slate-200 transition"
                        >
                          <Flag code={country.code} />
                          <span>{country.dial}</span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {dropdownOpen && (
                          <ul
                            role="listbox"
                            className="absolute left-0 top-full mt-1 w-52 bg-white border border-slate-200 rounded-lg shadow-lg z-20 py-1"
                          >
                            {COUNTRIES.map((c) => (
                              <li key={c.code} role="option" aria-selected={c.code === countryCode}>
                                <button
                                  type="button"
                                  onClick={() => handleCountrySelect(c.code)}
                                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-slate-50 transition ${
                                    c.code === countryCode ? 'bg-slate-50 font-semibold text-[#0A2249]' : 'text-slate-700'
                                  }`}
                                >
                                  <Flag code={c.code} />
                                  <span className="flex-1">{c.name}</span>
                                  <span className="text-slate-500 text-sm">{c.dial}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        inputMode="numeric"
                        pattern={country.pattern}
                        maxLength={country.length}
                        title={country.hint}
                        className="w-full min-w-0 px-4 py-3 rounded-r-lg border border-slate-300 focus:ring-2 focus:ring-[#D39B36] focus:border-transparent outline-none transition bg-slate-50"
                        placeholder={country.placeholder}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#D39B36] focus:border-transparent outline-none transition bg-slate-50"
                    placeholder="you@school.in"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#D39B36] focus:border-transparent outline-none transition bg-slate-50 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D39B36] hover:bg-[#b8852d] text-white font-bold py-4 rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* CONTACT DETAILS (Right Side) */}
            <div className="w-full lg:w-2/5 bg-slate-50 p-8 md:p-12 border-l border-slate-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0A2249] mb-8">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                      <Phone className="text-[#0A2249]" size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                      <a href="tel:+919810691542" className="text-lg font-medium text-[#0A2249] hover:text-[#D39B36] transition">
                        +91 98106 91542
                      </a>
                      <p className="text-slate-500 text-sm mt-1">Lalit Sharma</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                      <Mail className="text-[#0A2249]" size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:vvlearninghouse@gmail.com" className="text-lg font-medium text-[#0A2249] hover:text-[#D39B36] transition">
                        vvlearninghouse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                      <MapPin className="text-[#0A2249]" size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Head Office</p>
                      <p className="text-md font-medium text-[#0A2249] leading-relaxed">
                        A-162, Plot No-2, A-Block,<br />
                        Upper Ground Floor, Shakarpur, Vikas Marg,<br />
                        New Delhi - 110092, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding Bottom Right */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.1em] mb-1">A Brand Of</p>
                <h4 className="text-xl font-bold text-[#0A2249]">BioFuture Life Sciences</h4>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
    

    </div>
  );
}