import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function BrandedTruck({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Subtle hover tilt on the whole truck
    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      svg.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(2deg)`;
    };
    const handleMouseLeave = () => {
      svg.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    };
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.svg
      ref={svgRef}
      viewBox="0 0 600 340"
      className={className}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ transition: "transform 0.3s ease-out", transformOrigin: "center" }}
    >
      <defs>
        {/* Body gradient */}
        <linearGradient id="truckBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        {/* Cab gradient */}
        <linearGradient id="truckCab" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        {/* Window reflection */}
        <linearGradient id="windowReflect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>
        {/* Tire tread */}
        <radialGradient id="tireGrad" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#111827" />
        </radialGradient>
        {/* Rim shine */}
        <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
        {/* Under shadow */}
        <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        {/* Light glow */}
        <radialGradient id="lightGlow" cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="rgba(255,255,200,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,200,0)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="300" cy="310" rx="260" ry="14" fill="url(#shadowGrad)" />

      {/* Box body */}
      <rect x="40" y="60" width="340" height="190" rx="14" fill="url(#truckBody)" />
      {/* Roof rail */}
      <rect x="35" y="54" width="350" height="8" rx="4" fill="#1E3A8A" />
      {/* Bottom trim */}
      <rect x="40" y="240" width="340" height="10" rx="3" fill="#1E3A8A" />

      {/* Brand stripe on box */}
      <rect x="40" y="130" width="340" height="28" fill="#F8FAFC" />
      {/* Brand text on stripe */}
      <text
        x="210"
        y="150"
        textAnchor="middle"
        fill="#1E40AF"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="18"
        fontWeight="600"
        fontStyle="italic"
      >
        Kingdom Come Services
      </text>
      <text
        x="210"
        y="170"
        textAnchor="middle"
        fill="#3B82F6"
        fontFamily="'DM Sans', sans-serif"
        fontSize="9"
        fontWeight="600"
        letterSpacing="2"
      >
        JACKSON, MS
      </text>

      {/* Crown logo mark on box */}
      <g transform="translate(70, 88)">
        <path
          d="M12 2L15 8L20 5L18 12H6L4 5L9 8L12 2Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="0.5"
        />
        <circle cx="12" cy="14" r="2" fill="#F59E0B" />
      </g>

      {/* Cab */}
      <path
        d="M380 250V110C380 95 392 80 410 75L460 65C478 60 490 70 495 85L520 140C525 150 530 165 530 180V250H380Z"
        fill="url(#truckCab)"
      />
      {/* Cab highlight line */}
      <path
        d="M385 250V115C385 100 396 86 412 81L458 71"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Windshield */}
      <path
        d="M410 85L455 75L490 140L410 140Z"
        fill="url(#windowReflect)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
      />
      {/* Side window */}
      <path
        d="M465 78L495 85L515 135L470 135Z"
        fill="url(#windowReflect)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
      />

      {/* Door seam */}
      <path d="M460 75V250" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
      {/* Door handle */}
      <rect x="468" y="155" width="16" height="5" rx="2.5" fill="#CBD5E1" />

      {/* Headlight */}
      <ellipse cx="525" cy="195" rx="7" ry="12" fill="#FEF3C7" />
      <ellipse cx="527" cy="195" rx="3" ry="6" fill="#FFFFFF" />
      {/* Headlight beam */}
      <path d="M532 185L600 165V225L532 205Z" fill="url(#lightGlow)" opacity="0.5" />

      {/* Taillight */}
      <rect x="33" y="170" width="7" height="28" rx="3" fill="#EF4444" />
      <rect x="34" y="172" width="3" height="10" rx="1" fill="#FCA5A5" />

      {/* Bumper */}
      <rect x="515" y="230" width="28" height="18" rx="6" fill="#374151" />
      <rect x="520" y="234" width="18" height="10" rx="3" fill="#6B7280" />

      {/* Rear bumper */}
      <rect x="30" y="235" width="18" height="14" rx="5" fill="#374151" />

      {/* Wheels */}
      {/* Rear wheel */}
      <g>
        <circle cx="120" cy="265" r="34" fill="url(#tireGrad)" />
        <circle cx="120" cy="265" r="22" fill="url(#rimGrad)" />
        <circle cx="120" cy="265" r="16" fill="#E5E7EB" />
        {/* Spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="120"
            y1="265"
            x2={120 + 14 * Math.cos((deg * Math.PI) / 180)}
            y2={265 + 14 * Math.sin((deg * Math.PI) / 180)}
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle cx="120" cy="265" r="5" fill="#6B7280" />
      </g>

      {/* Mid wheel */}
      <g>
        <circle cx="220" cy="265" r="34" fill="url(#tireGrad)" />
        <circle cx="220" cy="265" r="22" fill="url(#rimGrad)" />
        <circle cx="220" cy="265" r="16" fill="#E5E7EB" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="220"
            y1="265"
            x2={220 + 14 * Math.cos((deg * Math.PI) / 180)}
            y2={265 + 14 * Math.sin((deg * Math.PI) / 180)}
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle cx="220" cy="265" r="5" fill="#6B7280" />
      </g>

      {/* Front wheel */}
      <g>
        <circle cx="460" cy="265" r="34" fill="url(#tireGrad)" />
        <circle cx="460" cy="265" r="22" fill="url(#rimGrad)" />
        <circle cx="460" cy="265" r="16" fill="#E5E7EB" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="460"
            y1="265"
            x2={460 + 14 * Math.cos((deg * Math.PI) / 180)}
            y2={265 + 14 * Math.sin((deg * Math.PI) / 180)}
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
        <circle cx="460" cy="265" r="5" fill="#6B7280" />
      </g>

      {/* Mudflaps */}
      <rect x="100" y="240" width="12" height="30" rx="2" fill="#111827" />
      <rect x="200" y="240" width="12" height="30" rx="2" fill="#111827" />
      <rect x="440" y="240" width="12" height="30" rx="2" fill="#111827" />

      {/* Chassis line */}
      <rect x="55" y="250" width="465" height="6" rx="3" fill="#374151" />
    </motion.svg>
  );
}
