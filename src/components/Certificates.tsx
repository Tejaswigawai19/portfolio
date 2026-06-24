import Link from "next/link";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-16 lg:py-24 px-5 lg:px-10 bg-navy-light/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            <span className="text-gradient">Certificates</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Professional achievements &amp; certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* card 1 — IBM Data Science */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Data Science</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">IBM</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Professional Certificate</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Python</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Data Science</span>
            </div>
            <Link href="https://drive.google.com/file/d/1okGulAnVTHWd7wHB3qg73toTcHdeScDG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card 2 — IBM Python for Data Science */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Python for Data Science</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">IBM</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Professional Certificate</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Python</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Data Science</span>
            </div>
            <Link href="https://drive.google.com/file/d/1Cbcof8Ky1Xb4oi3W3WbjpRMQoAzbrqXq/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card 3 — Tata Group Data Visualization (link updated) */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Data Visualization</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">Tata Group</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Virtual Experience Program</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Data Vis</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Analytics</span>
            </div>
            <Link href="https://drive.google.com/file/d/1XKk2HRPkYUBuzi9b8cZDlBnvg437cxeM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card — Cloud Computing & IoT (unchanged) */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Cloud Computing &amp; IoT</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">NPTEL</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Online Certification</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Cloud</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">IoT</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="https://drive.google.com/file/d/1bnU9idHc6Szu0EJ9pFh1GcaDlHgidw_e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
                Cloud Computing
              </Link>
              <Link href="https://drive.google.com/file/d/1D0xQJBOw7HgZIl0LPnJ3HoXmsF67ns6p/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
                IoT
              </Link>
            </div>
          </div>
          {/* card 4 — Python for Data Analysis */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Python for Data Analysis</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">Cognitive Class</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Online Certification</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Python</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Data Analysis</span>
            </div>
            <Link href="https://drive.google.com/file/d/1dW98SHyDR0AJc5nuiXU9pegszdslfQfj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card 5 — Python Programming */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Python Programming</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">iBase</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Online Certification</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Python</span>
            </div>
            <Link href="https://drive.google.com/file/d/1qs58YeFRh44_0pcKdoEl06M_5ixog9Ti/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card 6 — Eternia 3rd Prize */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Eternia – 3rd Prize</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">Eternia Tech Fest</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Project Competition</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">AI</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Recruitment</span>
            </div>
            <Link href="https://drive.google.com/file/d/1r975VgPP5wRAv6QY32OMsuidaqkeRGuR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
          {/* card 7 — Research Paper IJCRT */}
          <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm leading-snug">Research Paper – IJCRT</h3>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">IJCRT</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Academic Publication 2025</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">Multi-Agent</span>
              <span className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">AI</span>
            </div>
            <Link href="https://drive.google.com/file/d/14edfezrKNsVtpkVf9M3K96-5TcbTb2q3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-pink-soft hover:text-pink font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>
              View Certificate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
