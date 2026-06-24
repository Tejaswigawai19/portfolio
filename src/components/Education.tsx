export default function Education() {
  return (
    <section id="education" className="relative py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            <span className="text-gradient">Education</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">My academic journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-center lg:items-start">
          <div className="flex justify-center reveal">
            <svg viewBox="0 0 160 420" overflow="visible" className="w-28 sm:w-36 lg:w-44 mx-auto block" style={{filter:'drop-shadow(0 0 10px rgba(255,42,133,.5))'}}>
              <defs>
                <linearGradient id="branchG2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3d1a0a"/>
                  <stop offset="100%" stopColor="#7a3520"/>
                </linearGradient>
              </defs>
              <path d="M80 415 C78 350 76 290 80 230 C84 170 77 110 82 55" stroke="#5c2810" strokeOpacity="1" strokeWidth="7" fill="none" strokeLinecap="round"/>
              <path d="M80 270 C55 255 30 248 14 240" stroke="#5c2810" strokeOpacity="1" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M80 210 C108 196 132 188 150 175" stroke="#5c2810" strokeOpacity="1" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M80 148 C55 134 35 122 18 110" stroke="#5c2810" strokeOpacity="1" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M80 95 C102 82 122 72 138 60" stroke="#5c2810" strokeOpacity="1" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <g style={{transformOrigin:'82px 55px'}} className="bsway s0">
                <circle cx="82" cy="44" r="7" fill="#ff6fb0"/><circle cx="91" cy="51" r="7" fill="#ff2a85"/>
                <circle cx="88" cy="63" r="7" fill="#ffb3d1"/><circle cx="76" cy="63" r="7" fill="#ff2a85"/>
                <circle cx="73" cy="51" r="7" fill="#ff6fb0"/><circle cx="82" cy="55" r="5" fill="#fff0f5"/>
              </g>
              <g style={{transformOrigin:'150px 175px'}} className="bsway s1">
                <circle cx="150" cy="164" r="6" fill="#ff2a85"/><circle cx="159" cy="171" r="6" fill="#ff6fb0"/>
                <circle cx="156" cy="182" r="6" fill="#ffb3d1"/><circle cx="144" cy="182" r="6" fill="#ff2a85"/>
                <circle cx="141" cy="171" r="6" fill="#ff6fb0"/><circle cx="150" cy="175" r="4" fill="#fff0f5"/>
              </g>
              <g style={{transformOrigin:'14px 240px'}} className="bsway s2">
                <circle cx="14" cy="229" r="6" fill="#ff6fb0"/><circle cx="23" cy="236" r="6" fill="#ff2a85"/>
                <circle cx="20" cy="247" r="6" fill="#ffb3d1"/><circle cx="8" cy="247" r="6" fill="#ff2a85"/>
                <circle cx="5" cy="236" r="6" fill="#ff6fb0"/><circle cx="14" cy="240" r="4" fill="#fff0f5"/>
              </g>
              <g style={{transformOrigin:'18px 110px'}} className="bsway s3">
                <circle cx="18" cy="99" r="6" fill="#ff2a85"/><circle cx="27" cy="106" r="6" fill="#ff6fb0"/>
                <circle cx="24" cy="117" r="6" fill="#ffb3d1"/><circle cx="12" cy="117" r="6" fill="#ff2a85"/>
                <circle cx="9" cy="106" r="6" fill="#ff6fb0"/><circle cx="18" cy="110" r="4" fill="#fff0f5"/>
              </g>
              <g style={{transformOrigin:'138px 60px'}} className="bsway s4">
                <circle cx="138" cy="49" r="6" fill="#ff6fb0"/><circle cx="147" cy="56" r="6" fill="#ff2a85"/>
                <circle cx="144" cy="67" r="6" fill="#ffb3d1"/><circle cx="132" cy="67" r="6" fill="#ff2a85"/>
                <circle cx="129" cy="56" r="6" fill="#ff6fb0"/><circle cx="138" cy="60" r="4" fill="#fff0f5"/>
              </g>
              <g style={{transformOrigin:'80px 195px'}} className="bsway s5">
                <circle cx="80" cy="184" r="5" fill="#ff2a85"/><circle cx="88" cy="190" r="5" fill="#ff6fb0"/>
                <circle cx="85" cy="200" r="5" fill="#ffb3d1"/><circle cx="75" cy="200" r="5" fill="#ff2a85"/>
                <circle cx="72" cy="190" r="5" fill="#ff6fb0"/><circle cx="80" cy="195" r="3.5" fill="#fff0f5"/>
              </g>
            </svg>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-panel border border-white/5 px-5 py-4 shadow-card hover:shadow-cardGlow transition-shadow reveal">
              <h3 className="font-display font-semibold text-sm">Master of Computer Applications (MCA)</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/></svg>
                  Mumbai University
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>
                  Jul. 2025
                </span>
                <span className="text-pink-soft font-medium">76.59%</span>
              </div>
            </div>
            <div className="rounded-2xl bg-panel border border-white/5 px-5 py-4 shadow-card hover:shadow-cardGlow transition-shadow reveal">
              <h3 className="font-display font-semibold text-sm">Bachelor of Computer Applications (BCA)</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4"/></svg>
                  TMV Pune University
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>
                  Apr. 2023
                </span>
                <span className="text-pink-soft font-medium">74.90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 reveal">
          <p className="tracking-[.3em] text-xs text-pink-soft font-semibold mb-4">HIGHLIGHTS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Eternia */}
            <a
              href="https://drive.google.com/file/d/1r975VgPP5wRAv6QY32OMsuidaqkeRGuR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-2xl bg-panel border border-white/5 px-5 py-3 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all flex items-center gap-4"
            >
              <span className="text-2xl shrink-0">🏆</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-sm leading-snug">3rd Rank — Eternia Tech Fest</h3>
                <p className="text-xs text-gray-500 mt-0.5 truncate">Smart Reach AI · Autonomous Recruitment Agent</p>
              </div>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">2025</span>
            </a>
            {/* IJCRT */}
            <a
              href="https://drive.google.com/file/d/14edfezrKNsVtpkVf9M3K96-5TcbTb2q3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-2xl bg-panel border border-white/5 px-5 py-3 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all flex items-center gap-4"
            >
              <span className="text-2xl shrink-0">📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-sm leading-snug">IJCRT Research Publication</h3>
                <p className="text-xs text-gray-500 mt-0.5 truncate">Multi-Agent Cooperative &amp; Competitive Dynamics in Grid Environments</p>
              </div>
              <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">2025</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
