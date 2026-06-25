"use client";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    // Add skillbar animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skillbar');
          bars.forEach((bar: unknown) => {
            const htmlBar = bar as HTMLElement;
            htmlBar.style.width = htmlBar.getAttribute('data-fill') + '%';
          });
          const percentages = entry.target.querySelectorAll('[data-pct]');
          percentages.forEach((pct: unknown) => {
            const htmlPct = pct as HTMLElement;
            htmlPct.textContent = htmlPct.getAttribute('data-pct') + '%';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
    
    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  return (
    <section id="skills" className="relative py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            My <span className="text-gradient">Skills</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px_1fr] gap-10 items-center max-w-5xl mx-auto">
          <div className="space-y-5 order-1 reveal">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>Python</span><span className="text-pink-soft" data-pct="95">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="95"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>Django</span><span className="text-pink-soft" data-pct="90">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="90"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>OpenCV / YOLO</span><span className="text-pink-soft" data-pct="85">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="85"></div></div>
            </div>
          </div>

          <div className="order-3 lg:order-2 flex justify-center reveal">
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

          <div className="space-y-5 order-2 lg:order-3 reveal">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>Docker &amp; GCP</span><span className="text-pink-soft" data-pct="80">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="80"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>SQL Databases</span><span className="text-pink-soft" data-pct="85">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="85"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5"><span>Machine Learning / AI</span><span className="text-pink-soft" data-pct="90">0%</span></div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden"><div className="skillbar h-full w-0 rounded-full bg-gradient-to-r from-pink to-pink-soft shadow-neon" data-fill="90"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
