import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  PenTool,
  Sparkles,
  Globe,
  Lightbulb,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 md:pb-48 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block text-xs font-semibold text-[#D39B36] uppercase tracking-[0.2em] border border-[#D39B36]/40 rounded-full px-4 py-1.5 mb-8">
            Educational Publishing for Classes 1–8
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Made for <span className="text-[#D39B36]">Minds in the Making</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-4">
            We develop curriculum-aligned learning resources that combine academic rigour with engaging content, helping students build the knowledge and skills that matter.
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Globe size={16} className="text-[#D39B36]" />
            <span>Serving schools across India and the Gulf region</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
          
           
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
      <section id="about" className="pt-8 pb-20 bg-white">
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

      {/* OUR PRODUCTS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#D39B36] uppercase tracking-[0.15em] mb-3">Our Products</p>
            <h2 className="text-3xl font-bold text-[#0A2249] mb-5">
              The Right Books. A Stronger Foundation.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Curriculum-aligned textbooks for Classes 1–8, developed with academic care and an understanding of how young minds learn.
            </p>

            <h3 className="text-xl font-bold text-[#0A2249] mb-3">
              Discover the V V Learning House Collection
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our collection brings together the expertise of experienced educators and thoughtfully structured learning content. With illustrations that support comprehension and activities that reinforce key concepts, our books are designed for meaningful classroom learning.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Explore our publications or request samples for your school.
            </p>
       

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Change /products to your publications page route */}
              <Link
                href="/Products"
                className="inline-flex items-center justify-center space-x-2 bg-[#0A2249] hover:bg-[#12336b] text-white font-bold px-7 py-3.5 rounded-lg shadow-md transition duration-300"
              >
                <span>Explore Publications</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center border border-[#0A2249]/30 hover:border-[#D39B36] hover:text-[#D39B36] text-[#0A2249] font-semibold px-7 py-3.5 rounded-lg transition duration-300"
              >
                Request Samples
              </Link>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative bg-[#0A2249] rounded-2xl p-10 md:p-12 text-center overflow-hidden shadow-lg">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#D39B36]/15 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D39B36] rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="text-white" size={30} />
              </div>
              <p className="text-6xl font-extrabold text-white mb-2">1–8</p>
              <p className="text-sm font-semibold text-[#D39B36] uppercase tracking-[0.2em] mb-6">Classes</p>
              <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto">
                Textbooks built for how young minds learn, with illustrations and activities that reinforce key concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GK TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-[#D39B36] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
              <Lightbulb className="text-white" size={30} />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="text-xs font-semibold text-[#D39B36] uppercase tracking-[0.2em]">Coming Soon</span>
              <h3 className="text-xl font-bold text-[#0A2249] mt-1 mb-1">General Knowledge content</h3>
              <p className="text-slate-600 text-sm">Fresh GK content for students is on the way.</p>
            </div>
            <Link
              href="/gk"
              className="inline-flex items-center space-x-2 text-[#0A2249] font-semibold hover:text-[#D39B36] transition whitespace-nowrap"
            >
              <span>Learn more</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2249] rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D39B36]/10 rounded-full blur-3xl" />
            <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
              Bring our books to your classrooms
            </h2>
            <p className="relative text-slate-300 max-w-xl mx-auto mb-8">
              Explore our publications or request samples for your school.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center space-x-2 bg-[#D39B36] hover:bg-[#b8852d] text-white font-bold px-8 py-4 rounded-lg shadow-md transition duration-300"
            >
              <span>Request Samples</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#051329] py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} V V Learning House. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">A BioFuture Life Sciences Brand</p>
        </div>
      </footer>

    </div>
  );
}