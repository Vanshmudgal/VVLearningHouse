"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, PenTool, Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative text-[#0A2249] group-hover:text-[#071836] transition">
            <BookOpen size={40} strokeWidth={1.5} />
            <PenTool size={20} className="absolute -top-1 -right-2 text-[#D39B36]" />
            <Sparkles size={16} className="absolute -top-3 right-2 text-[#D39B36]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#0A2249] tracking-wider uppercase">
              V V Learning House
            </h1>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`transition ${
              pathname === '/' 
                ? 'text-[#D39B36] font-bold' 
                : 'text-[#0A2249] font-semibold hover:text-[#D39B36]'
            }`}
          >
            Home
          </Link>
          
          <Link 
            href="/contact" 
            className={`transition ${
              pathname === '/contact' 
                ? 'text-[#D39B36] font-bold' 
                : 'text-[#0A2249] font-semibold hover:text-[#D39B36]'
            }`}
          >
            Contact
          </Link>
        </nav>
        
      </div>
    </header>
  );
}