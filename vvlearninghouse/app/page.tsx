import React from 'react';
import Link from 'next/link';
import { BookOpen, PenTool, Sparkles } from 'lucide-react';

export default function VVLearningHouseLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* HEADER */}
    

      {/* HERO SECTION */}
      <section className="relative bg-[#0A2249] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#D39B36]" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-48 relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Shaping Young Minds with <br/>
            <span className="text-[#D39B36]">Quality School Books</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10">
            A premier publishing house dedicated to creating engaging, educational, and inspiring books for school children. 
          </p>
          <Link href="/contact" className="bg-[#D39B36] hover:bg-[#b8852d] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-[#0A2249] mb-12">Empowering Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#0A2249] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-[#D39B36]" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#0A2249] mb-2">Curriculum Based</h4>
              <p className="text-slate-600">Books meticulously designed to align with current school curriculums and educational standards.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#0A2249] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#D39B36]" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#0A2249] mb-2">Interactive Learning</h4>
              <p className="text-slate-600">Engaging illustrations and activities that make learning fun for kids of all ages.</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 bg-[#0A2249] rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="text-[#D39B36]" size={28} />
              </div>
              <h4 className="text-xl font-bold text-[#0A2249] mb-2">Expert Authors</h4>
              <p className="text-slate-600">Content created by experienced educators and subject matter experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION (To replace the old contact section) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-[#0A2249] mb-6">Ready to bring our books to your school?</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Contact us today to request samples, discuss bulk orders, or learn more about our publications.
          </p>
          <Link href="/contact" className="inline-block bg-[#0A2249] hover:bg-[#071836] text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300">
            Contact Us Now
          </Link>
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