"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="navbar" className="sticky top-0 z-50 backdrop-blur-md bg-navy/85 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#home" className="shrink-0 rounded-full bg-gradient-to-r from-pink to-pink-deep px-4 py-1.5 font-display font-extrabold text-sm tracking-wide shadow-neon">TEJASWI</Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#home" className="hover:text-pink-soft transition-colors">Home</Link>
          <Link href="#about" className="hover:text-pink-soft transition-colors">About</Link>
          <Link href="#experience" className="hover:text-pink-soft transition-colors">Experience</Link>
          <Link href="#certificates" className="hover:text-pink-soft transition-colors">Certificates</Link>
          <Link href="#skills" className="hover:text-pink-soft transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-pink-soft transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-pink-soft transition-colors">Contact</Link>
        </nav>

        <Link href="#contact" className="hidden lg:inline-flex rounded-full bg-gradient-to-r from-pink to-pink-deep px-5 py-2 text-sm font-semibold shadow-neon hover:shadow-neonLg hover:scale-105 transition-all">Hire Me</Link>

        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="lg:hidden grid place-items-center w-10 h-10 rounded-lg bg-panel border border-white/10 text-pink-soft active:scale-95 transition">
          {!isOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col gap-1 px-5 pb-5 bg-navy/95 border-t border-white/5">
          <Link href="#home" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Home</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">About</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Experience</Link>
          <Link href="#certificates" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Certificates</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block py-2.5 text-gray-300 hover:text-pink-soft">Contact</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-pink to-pink-deep px-5 py-2.5 text-sm font-semibold shadow-neon">Hire Me</Link>
        </div>
      )}
    </header>
  );
}
