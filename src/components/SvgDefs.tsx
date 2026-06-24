export default function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <radialGradient id="petalGrad" cx="50%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#ffe1f0" />
          <stop offset="55%" stopColor="#ff7ab3" />
          <stop offset="100%" stopColor="#ff2a85" />
        </radialGradient>
        <linearGradient id="fanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c81866" />
          <stop offset="50%" stopColor="#ff2a85" />
          <stop offset="100%" stopColor="#ff9ac6" />
        </linearGradient>
        <g id="petal"><path d="M0 0 C -9 -11 -7 -28 0 -36 C 7 -28 9 -11 0 0 Z" fill="url(#petalGrad)" /></g>
        <g id="sakura">
          <use href="#petal" transform="rotate(0)" /><use href="#petal" transform="rotate(72)" />
          <use href="#petal" transform="rotate(144)" /><use href="#petal" transform="rotate(216)" />
          <use href="#petal" transform="rotate(288)" /><circle r="3.4" fill="#fff3f9" />
        </g>
        <path id="blade" d="M-13,0 L13,0 L4.5,-152 L-4.5,-152 Z" fill="url(#fanGrad)" stroke="#ffd1e7" strokeWidth="1" strokeOpacity=".5" />
      </defs>
    </svg>
  );
}
