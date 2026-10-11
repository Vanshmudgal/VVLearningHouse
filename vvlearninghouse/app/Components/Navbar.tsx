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
            className="flex items-center shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/vvlearninghouse.png"
              alt="V V Learning House - Education Solutions"
              width={420}
              height={120}
              priority
              className="w-[220px] sm:w-[280px] h-auto object-contain"
            />
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




            <Link
              href="/Products"
              className={`transition ${
                pathname === "/Products"
                  ? "text-[#D39B36] font-bold"
                  : "text-[#0A2249] font-semibold hover:text-[#D39B36]"
              }`}
            >
              Our Products
            </Link>

            <Link
              href="/About"
              className={`transition ${
                pathname === "/About"
                  ? "text-[#D39B36] font-bold"
                  : "text-[#0A2249] font-semibold hover:text-[#D39B36]"
              }`}
            >
              About Us
            </Link>

<Link
              href="/gk"
              className={`transition ${
                pathname === "/gk"
                  ? "text-[#D39B36] font-bold"
                  : "text-[#0A2249] font-semibold hover:text-[#D39B36]"
              }`}
            >
              Gk Resources
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

             

              <Link
                href="/About"
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg ${
                  pathname === "/About"
                    ? "bg-gray-50 text-[#D39B36] font-bold"
                    : "text-[#0A2249] font-semibold hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>


              <Link
                href="/Products"
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg ${
                  pathname === "/Products"
                    ? "bg-gray-50 text-[#D39B36] font-bold"
                    : "text-[#0A2249] font-semibold hover:bg-gray-50"
                }`}
              >
                Our Products
              </Link>


 <Link
                href="/gk"
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg ${
                  pathname === "/gk"
                    ? "bg-gray-50 text-[#D39B36] font-bold"
                    : "text-[#0A2249] font-semibold hover:bg-gray-50"
                }`}
              >
               GK Resources
              </Link>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}