import React from 'react';
import Link from 'next/link';
import { BookOpen, PenTool, Sparkles, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Curriculum-Based Learning',
    text: 'Learning resources designed to align with school curricula and relevant educational standards.',
  },
  {
    icon: Sparkles,
    title: 'Learning Through Activities and Exploration',
    text: 'Age-appropriate illustrations and interactive activities that encourage active participation and deeper understanding.',
  },
  {
    icon: PenTool,
    title: 'Developed by Education Experts',
    text: 'Educational content developed by experienced teachers and subject-matter experts.',
  },
];

export default function VVLearningHouseLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

      {/* HERO SECTION */}
      <section className="relative bg-[#0A2249] overflow-hidden">
        {/* Soft decorative glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D39B36]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pb-48 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Made for <span className="text-[#D39B36]">Minds in the Making</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            We develop curriculum-aligned learning resources that combine academic rigour with engaging content, helping students build the knowledge and skills that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/Products"
              className="inline-flex items-center justify-center space-x-2 bg-[#D39B36] hover:bg-[#b8852d] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition duration-300"
            >
              <span>Our Products</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/About"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition duration-300"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 md:h-24 block"
          aria-hidden="true"
        >
          <path d="M0,50 C260,115 520,0 760,40 C1000,80 1230,110 1440,30 L1440,120 L0,120 Z" fill="#D39B36" />
          <path d="M0,72 C260,125 520,28 760,62 C1000,96 1230,118 1440,58 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section id="about" className="pt-8 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A2249] mb-12">
            What Makes Our Learning Resources Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="w-14 h-14 bg-[#0A2249] rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-[#D39B36]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2249] mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
     

    </div>
  );
}