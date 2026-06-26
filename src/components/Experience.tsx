import Link from "next/link";
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const total = sectionHeight - window.innerHeight;
      const pct = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(pct);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bullets = [
    "Engineered YOLOX-L and YOLOv5/v8 pipelines for real-time computer vision detection (PPE compliance, parcels, tires) on RTSP feeds.",
    "Deployed 3 full-stack Django applications in Dockerized environments using Docker Compose, MySQL, Nginx, and phpMyAdmin.",
    "Implemented high-performance backend modules for scalable processing and orchestrated dataset augmentation to boost model accuracy.",
    "Developed a backend microservice to transcribe Google Drive audio files into text using the Whisper API, deployed on Google Cloud Run.",
    "Created robust Dockerfiles, pushed CI/CD automated images to DockerHub, and built PySimpleGUI tools to simplify deployments.",
    "Handled real-time client communication and deployment support, ensuring error-free delivery and smooth operations.",
  ];

  const techTags = [
    "Python", "YOLOX", "YOLOv5", "YOLOv8", "Django", "Docker", "GCP", "Whisper API", "Nginx",
  ];

  return (
    <section id="experience" ref={sectionRef} className="relative py-16 lg:py-24 px-5 lg:px-10 bg-navy-light/40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <p className="tracking-[.35em] text-xs text-pink-soft font-semibold mb-2">CAREER JOURNEY</p>
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            <span className="text-gradient">Experience</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">My professional timeline</p>
        </div>

        {/* Timeline */}
        <div className="relative mt-2">

          {/* Vertical line — left on mobile, center on desktop */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink/60 via-pink/30 to-transparent" />

          {/* Scroll ball */}
          <div
            className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink z-10 shadow-[0_0_14px_rgba(255,42,133,0.9)]"
            style={{ top: `${progress * 100}%`, transition: 'top 0.08s linear' }}
          />


          {/* Decorative sakura — LEFT side, desktop only */}
          <div className="hidden lg:flex absolute left-0 w-[46%] justify-end pr-12 items-start top-0 pointer-events-none">
            <svg viewBox="0 0 160 420" overflow="visible" className="w-44" style={{filter:'drop-shadow(0 0 10px rgba(255,42,133,.5))'}}>
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

          {/* ── Entry 1: Aurify ── */}
          <div className="relative pl-12 lg:pl-0 mb-10 reveal">
            {/* Desktop: right-side card */}
            <div className="lg:ml-[52%] lg:pl-8">
              <div className="rounded-2xl bg-panel border border-white/5 p-5 shadow-card hover:shadow-cardGlow transition-all">
                {/* Company header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-base leading-snug">Aurify Systems Pvt. Ltd</h3>
                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                      Mumbai, Maharashtra
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold text-pink-soft bg-pink/10 px-2 py-0.5 rounded-full">Current</span>
                </div>

                {/* Roles */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-pink-soft">Software Developer</span>
                    <span className="text-[10px] text-gray-500">Jul 2025 – May 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-pink-soft/70">Software Developer Intern</span>
                    <span className="text-[10px] text-gray-500">Jan 2025 – Jul 2025</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 my-3"/>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-4">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] text-gray-400 leading-relaxed">
                      <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-pink/70"/>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {techTags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Entry 2: Open opportunity ── */}
          <div className="relative pl-12 lg:pl-0 mb-4 reveal">
            <div className="lg:ml-[52%] lg:pl-8">
              <div className="rounded-2xl border border-dashed border-pink bg-panel/40 p-5 transition-all hover:shadow-cardGlow">
                <p className="text-sm font-display font-semibold text-gray-300 mb-1">Open to New Opportunities</p>
                <p className="text-xs text-gray-500 mb-4">Available for full-time roles in AI / Backend / Computer Vision</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink to-pink-deep px-4 py-1.5 text-xs font-semibold shadow-neon hover:shadow-neonLg hover:scale-105 transition-all"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.39 19a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-2.92-8.38A2 2 0 0 1 4.44 2.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
                  Hire Me
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
