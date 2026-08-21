
"use client";

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, BookOpen, PenTool, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or an API route
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* HEADER */}
  

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
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#D39B36] focus:border-transparent outline-none transition bg-slate-50"
                      placeholder="+91 XXXXX XXXXX"
                    />
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
                    placeholder="john@school.com"
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
                      <p className="text-lg font-medium text-[#0A2249]">9810691542</p>
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
                        Upper Ground Floor Shakarpur Vikas Marg,<br />
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
      <footer className="bg-[#051329] py-8 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} V V Learning House. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}