import React from 'react';
import Link from 'next/link';
import {
  Lightbulb,
  Globe,
  Landmark,
  Trophy,
  FlaskConical,
  ArrowLeft,
} from 'lucide-react';

const TOPICS = [
  { icon: Globe, label: 'World & Geography' },
  { icon: Landmark, label: 'History & Civics' },
  { icon: FlaskConical, label: 'Science & Technology' },
  { icon: Trophy, label: 'Sports & Current Affairs' },
];

export default function GKComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">

      {/* HERO */}
      <section className="relative bg-[#0A2249] overflow-hidden">
        {/* Soft decorative glows */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#D39B36]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-[#D39B36] rounded-full flex items-center justify-center shadow-lg">
            <Lightbulb className="text-white" size={38} />
          </div>

          <span className="inline-block text-xs font-semibold text-[#D39B36] uppercase tracking-[0.2em] border border-[#D39B36]/40 rounded-full px-4 py-1.5 mb-6">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            General Knowledge, <span className="text-[#D39B36]">Made Simple</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            We are putting together fresh GK content for students and schools. It is on the way, so stay tuned.
          </p>
        </div>
      </section>

      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* WHAT TO EXPECT */}
          <div>
            <p className="text-center text-sm font-semibold text-[#D39B36] uppercase tracking-[0.15em] mb-6">
              What to expect
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOPICS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center hover:shadow-md transition"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                    <Icon className="text-[#0A2249]" size={22} />
                  </div>
                  <p className="text-sm font-semibold text-[#0A2249]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            <span className="hidden sm:block text-slate-300">|</span>
            
          </div>

        </div>
      </main>

      {/* FOOTER */}


    </div>
  );
}