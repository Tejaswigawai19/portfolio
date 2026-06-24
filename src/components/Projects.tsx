import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Reach AI",
      tags: ["Python", "Claude 3.5", "LangChain"],
      github: "https://github.com/Tejaswigawai19/smart-reach-ai",
      icon: (
        /* Neural-net nodes → envelope */
        <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* connection lines */}
          <line x1="50" y1="60" x2="100" y2="35" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          <line x1="50" y1="60" x2="100" y2="60" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          <line x1="50" y1="60" x2="100" y2="85" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          <line x1="100" y1="35" x2="140" y2="60" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          <line x1="100" y1="60" x2="140" y2="60" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          <line x1="100" y1="85" x2="140" y2="60" stroke="#ff2d78" strokeWidth="1.2" strokeOpacity="0.5"/>
          {/* arrow */}
          <line x1="148" y1="60" x2="162" y2="60" stroke="#ff2d78" strokeWidth="1.5" strokeOpacity="0.8"/>
          <polyline points="158,55 163,60 158,65" fill="none" stroke="#ff2d78" strokeWidth="1.5" strokeOpacity="0.8"/>
          {/* envelope */}
          <rect x="167" y="48" width="24" height="16" rx="2" fill="none" stroke="#ff2d78" strokeWidth="1.5" opacity="0.9"/>
          <polyline points="167,48 179,59 191,48" fill="none" stroke="#ff2d78" strokeWidth="1.5" opacity="0.9"/>
          {/* pulsing nodes */}
          <circle cx="50" cy="60" r="7" fill="#ff2d78" opacity="0.9">
            <animate attributeName="r" values="7;9;7" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="35" r="6" fill="#ff2d78" opacity="0.85">
            <animate attributeName="r" values="6;8;6" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.85;0.45;0.85" dur="2.4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="60" r="6" fill="#ff2d78" opacity="0.85">
            <animate attributeName="r" values="6;8;6" dur="2.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.85;0.45;0.85" dur="2.8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="85" r="6" fill="#ff2d78" opacity="0.85">
            <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.85;0.45;0.85" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="140" cy="60" r="7" fill="#ff2d78" opacity="0.9">
            <animate attributeName="r" values="7;9;7" dur="1.9s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="1.9s" repeatCount="indefinite"/>
          </circle>
        </svg>
      ),
      bgClass: "from-purple-600/40 via-pink/30",
    },
    {
      id: 2,
      title: "Object Detection Model",
      tags: ["Python", "YOLOv3", "OpenCV"],
      github: "https://github.com/Tejaswigawai19/Object-Detection-model",
      icon: (
        /* Video frame with pink dashed bounding boxes */
        <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* video frame */}
          <rect x="20" y="12" width="160" height="96" rx="4" fill="#0f0a1a" stroke="#ffffff18" strokeWidth="1"/>
          {/* bounding box 1 — Person */}
          <rect x="38" y="24" width="52" height="68" rx="2" fill="none" stroke="#ff2d78" strokeWidth="1.5" strokeDasharray="4 2"/>
          <rect x="38" y="24" width="44" height="12" rx="2" fill="#ff2d78" opacity="0.85"/>
          <text x="41" y="33" fontSize="7" fill="white" fontFamily="monospace">Person 94%</text>
          {/* bounding box 2 — Object */}
          <rect x="108" y="36" width="54" height="52" rx="2" fill="none" stroke="#ff2d78" strokeWidth="1.5" strokeDasharray="4 2"/>
          <rect x="108" y="36" width="46" height="12" rx="2" fill="#ff2d78" opacity="0.85"/>
          <text x="111" y="45" fontSize="7" fill="white" fontFamily="monospace">Object 87%</text>
          {/* corner markers */}
          <path d="M20,18 L20,12 L26,12" stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M174,12 L180,12 L180,18" stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M20,102 L20,108 L26,108" stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.6"/>
          <path d="M174,108 L180,108 L180,102" stroke="#ff2d78" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      ),
      bgClass: "from-sky-600/40 via-pink/30",
    },
    {
      id: 3,
      title: "Full-Stack Django Blog App",
      tags: ["Django", "Python", "Docker"],
      github: "https://github.com/Tejaswigawai19/Django-Blog-Project",
      icon: (
        /* Minimal browser window with blog content lines */
        <svg width="100%" height="100%" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* browser chrome */}
          <rect x="20" y="10" width="160" height="100" rx="6" fill="#0f0a1a" stroke="#ffffff18" strokeWidth="1"/>
          {/* pink top bar */}
          <rect x="20" y="10" width="160" height="22" rx="6" fill="#ff2d78" opacity="0.85"/>
          <rect x="20" y="24" width="160" height="8" fill="#ff2d78" opacity="0.85"/>
          {/* traffic dots */}
          <circle cx="34" cy="21" r="3.5" fill="white" opacity="0.7"/>
          <circle cx="46" cy="21" r="3.5" fill="white" opacity="0.5"/>
          <circle cx="58" cy="21" r="3.5" fill="white" opacity="0.3"/>
          {/* url bar */}
          <rect x="70" y="15" width="96" height="12" rx="3" fill="white" opacity="0.12"/>
          {/* blog content lines */}
          <rect x="34" y="44" width="100" height="7" rx="3" fill="white" opacity="0.25"/>
          <rect x="34" y="58" width="132" height="5" rx="2.5" fill="white" opacity="0.12"/>
          <rect x="34" y="70" width="120" height="5" rx="2.5" fill="white" opacity="0.12"/>
          <rect x="34" y="82" width="108" height="5" rx="2.5" fill="white" opacity="0.12"/>
          <rect x="34" y="94" width="80" height="5" rx="2.5" fill="white" opacity="0.08"/>
        </svg>
      ),
      bgClass: "from-teal-600/40 via-pink/30",
    },
  ];

  return (
    <section id="projects" className="relative py-16 lg:py-24 px-5 lg:px-10 bg-navy-light/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
            <span className="text-gradient">Projects</span>
            <svg className="w-5 h-5 text-pink" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z"/></svg>
          </h2>
          <p className="text-gray-500 text-sm mt-2">My latest work &amp; creative pieces</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="projectGrid">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-2xl overflow-hidden bg-panel border border-white/5 shadow-card hover:shadow-cardGlow hover:-translate-y-1 transition-all reveal">
              <div className={`relative h-36 bg-gradient-to-br ${project.bgClass} to-panel2 flex items-center justify-center`}>
                <div className="absolute top-3 left-3 flex gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400/70"></span><span className="w-2 h-2 rounded-full bg-yellow-400/70"></span><span className="w-2 h-2 rounded-full bg-green-400/70"></span></div>
                {project.icon}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-sm">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-gray-300">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-pink-soft hover:text-pink font-medium"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>Live Demo</Link>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white font-medium"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.1c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.5.1 2.8.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.4C22 6.6 17.5 2 12 2z"/></svg>Source Code</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
