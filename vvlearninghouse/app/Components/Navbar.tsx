"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/vvlearning.png"
              alt="V V Learning House"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
            />

            <h1 className="text-lg sm:text-2xl font-bold text-[#0A2249] tracking-wide uppercase">
              V V Learning House
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition ${
                pathname === "/"
                  ? "text-[#D39B36] font-bold"
                  : "text-[#0A2249] font-semibold hover:text-[#D39B36]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/Contact"
              className={`transition ${
                pathname === "/Contact"
                  ? "text-[#D39B36] font-bold"
                  : "text-[#0A2249] font-semibold hover:text-[#D39B36]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#0A2249]"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg ${
                  pathname === "/"
                    ? "bg-gray-50 text-[#D39B36] font-bold"
                    : "text-[#0A2249] font-semibold hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/Contact"
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg ${
                  pathname === "/Contact"
                    ? "bg-gray-50 text-[#D39B36] font-bold"
                    : "text-[#0A2249] font-semibold hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}