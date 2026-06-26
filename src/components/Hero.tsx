"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-10 lg:pt-20 lg:pb-14 bg-grid">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink/25 blur-[110px] animate-pulseGlow"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-pink-deep/20 blur-[110px] animate-pulseGlow"></div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left order-1">
          <p className="tracking-[.35em] text-xs text-pink-soft font-semibold mb-3">TEJASWI GAWAI</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-pink shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            <span>Hi, I&apos;m <span className="text-gradient">TEJASWI</span></span>
            <svg className="w-5 h-5 lg:w-6 lg:h-6 text-pink shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h1>
          <p className="mt-3 text-xl lg:text-2xl font-display font-semibold text-pink-soft">I&apos;m a <span>{text}</span><span className="animate-blink">|</span></p>
          <p className="mt-5 text-gray-400 text-sm lg:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
            Results-driven Software Developer with proven experience building AI-powered applications, computer vision pipelines, and full-stack web solutions.
          </p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <a
              href="/Tejaswi_Gawai_cv.pdf"
              download="Tejaswi_Gawai_cv.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-deep px-7 py-3 text-sm font-semibold shadow-neon hover:shadow-neonLg hover:-translate-y-0.5 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/></svg>
              Download CV
            </a>
          </div>
          <div className="mt-5 flex justify-center lg:justify-start gap-3">
            <a href="https://github.com/Tejaswigawai19" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-panel border border-white/10 grid place-items-center text-gray-300 hover:text-white hover:bg-pink hover:shadow-neon transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.1c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.4C22 6.6 17.5 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/tejaswi-gawai-26290b316" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-panel border border-white/10 grid place-items-center text-gray-300 hover:text-white hover:bg-pink hover:shadow-neon transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6.5 0H14v1.7h.06c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.44 2.47 4.44 5.68V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z"/></svg>
            </a>
          </div>
        </div>

        <div className="order-2 relative flex justify-center">
          <div className="relative w-60 sm:w-72 lg:w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-neonLg border-2 border-pink/40 bg-[#0e0918]">
            {/* Pink glow ring */}
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-pink/20 z-10 pointer-events-none"></div>
            {/* Actual profile photo — shown in full, no crop */}
            <Image
              src="/profile_neon.png"
              alt="Tejaswi Gawai"
              fill
              className="object-contain object-center"
              priority
            />
            {/* Bottom gradient fade for readability */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/80 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
              <span className="text-[11px] tracking-widest font-semibold text-white/90 bg-black/40 backdrop-blur px-3 py-1 rounded-full">SOFTWARE · DEV</span>
              <span className="w-2.5 h-2.5 rounded-full bg-pink shadow-neon animate-pulseGlow"></span>
            </div>
          </div>
          <svg className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 text-pink-soft animate-floaty" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-16 border-y border-pink/20 bg-panel/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-3.5 flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-xs sm:text-sm text-gray-300">
          <span className="flex items-center gap-2 px-4 py-1">
            <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
            Python
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10"></span>
          <span className="flex items-center gap-2 px-4 py-1">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z"/></svg>
            Django
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10"></span>
          <span className="flex items-center gap-2 px-4 py-1">
            <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6l-10-6L2 6v12l10 6 10-6V6z"/></svg>
            Docker
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10"></span>
          <span className="flex items-center gap-2 px-4 py-1">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M9 8l7 8M9 8v8" strokeLinecap="round"/></svg>
            OpenCV
          </span>
        </div>
      </div>
    </section>
  );
}
