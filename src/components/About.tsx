export default function About() {
  return (
    <section id="about" className="relative py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center overflow-visible">

          {/* fan: first on mobile, middle column on desktop */}
          <div className="cherry-tree-wrapper order-1 lg:order-2 lg:col-start-2 lg:row-start-2 flex justify-center reveal block w-full min-h-[280px] overflow-visible">
            <svg viewBox="0 0 200 200" className="w-44 lg:w-56 mx-auto animate-floatySlow" style={{filter:'drop-shadow(0 0 18px rgba(255,42,133,.6))'}}>
              <defs>
                <linearGradient id="fanG" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c81866"/>
                  <stop offset="60%" stopColor="#ff2a85"/>
                  <stop offset="100%" stopColor="#ffb3d1"/>
                </linearGradient>
                <radialGradient id="petalG" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ffe0ef"/>
                  <stop offset="100%" stopColor="#ff2a85"/>
                </radialGradient>
              </defs>
              <g style={{transformOrigin:'100px 168px',animation:'fanOpen 4s ease-in-out infinite'}}>
                <path d="M100,168 L68,28 Q100,8 132,28 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.95"/>
                <path d="M100,168 L40,55 Q60,20 88,32 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.9"/>
                <path d="M100,168 L160,55 Q140,20 112,32 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.9"/>
                <path d="M100,168 L18,88 Q28,48 62,52 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.8"/>
                <path d="M100,168 L182,88 Q172,48 138,52 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.8"/>
                <path d="M100,168 L10,125 Q10,82 42,78 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.65"/>
                <path d="M100,168 L190,125 Q190,82 158,78 Z" fill="url(#fanG)" stroke="#ffd1e7" strokeWidth="0.8" opacity="0.65"/>
                {/* sakura blooms on fan */}
                <circle cx="78" cy="55" r="5" fill="url(#petalG)" opacity="0.9"/>
                <circle cx="100" cy="35" r="6" fill="url(#petalG)" opacity="0.9"/>
                <circle cx="122" cy="55" r="5" fill="url(#petalG)" opacity="0.9"/>
                <circle cx="58" cy="85" r="4" fill="url(#petalG)" opacity="0.8"/>
                <circle cx="142" cy="85" r="4" fill="url(#petalG)" opacity="0.8"/>
                {/* ribs */}
                <line x1="100" y1="168" x2="68" y2="28" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.5"/>
                <line x1="100" y1="168" x2="100" y2="15" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.5"/>
                <line x1="100" y1="168" x2="132" y2="28" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.5"/>
                <line x1="100" y1="168" x2="40" y2="55" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.4"/>
                <line x1="100" y1="168" x2="160" y2="55" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.4"/>
                <line x1="100" y1="168" x2="18" y2="88" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.3"/>
                <line x1="100" y1="168" x2="182" y2="88" stroke="#ffd1e7" strokeWidth="0.5" opacity="0.3"/>
              </g>
              {/* pivot */}
              <circle cx="100" cy="168" r="6" fill="#1c1530" stroke="#ff9ac6" strokeWidth="1.5"/>
              <rect x="97" y="168" width="6" height="24" rx="2" fill="#2a1140"/>
              <circle cx="100" cy="195" r="4" fill="#ff2a85"/>
            </svg>
          </div>

          {/* heading: spans full width, second on mobile, top row on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-3 lg:row-start-1 text-center reveal">
            <p className="tracking-[.35em] text-xs text-pink-soft font-semibold mb-2">GET TO KNOW ME</p>
            <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
              About <span className="text-gradient">Me</span>
              <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            </h2>
          </div>

          {/* text + stats */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 text-center lg:text-left reveal">
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Proficient in integrating deep learning models (YOLO, GenAI) with scalable backend architectures. Adept at optimizing deployment workflows using Docker and Google Cloud Platform (GCP) to deliver robust, low-latency, and high-performance systems.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-7 max-w-xs mx-auto lg:mx-0">
              <div><p className="font-display text-2xl font-bold text-pink-soft">1.5+</p><p className="text-[11px] text-gray-500 mt-0.5">Years Experience</p></div>
              <div><p className="font-display text-2xl font-bold text-pink-soft">AI</p><p className="text-[11px] text-gray-500 mt-0.5">&amp; Full-Stack Focus</p></div>
              <div><p className="font-display text-2xl font-bold text-pink-soft">3+</p><p className="text-[11px] text-gray-500 mt-0.5">Major Projects</p></div>
              <div><p className="font-display text-2xl font-bold text-pink-soft">Mumbai</p><p className="text-[11px] text-gray-500 mt-0.5">Based</p></div>
            </div>
          </div>

          {/* philosophy + mission cards */}
          <div className="order-4 lg:col-start-3 lg:row-start-2 space-y-4 reveal">
            <div className="rounded-2xl bg-panel border border-white/5 border-l-4 border-l-pink px-5 py-4 shadow-card hover:shadow-cardGlow transition-shadow">
              <h3 className="font-display font-semibold text-pink-soft text-sm mb-1.5">My Philosophy</h3>
              <p className="text-xs text-gray-400 leading-relaxed">I believe AI should solve real problems — not just impress. I build systems that are fast, deployable, and actually work in production.</p>
            </div>
            <div className="rounded-2xl bg-panel border border-white/5 border-l-4 border-l-pink px-5 py-4 shadow-card hover:shadow-cardGlow transition-shadow">
              <h3 className="font-display font-semibold text-pink-soft text-sm mb-1.5">The Mission</h3>
              <p className="text-xs text-gray-400 leading-relaxed">To bridge the gap between deep learning research and real-world applications — shipping CV pipelines, GenAI tools, and scalable backends that deliver measurable impact.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
