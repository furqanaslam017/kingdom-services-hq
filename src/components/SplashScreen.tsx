'use client'
import { useEffect, useState } from 'react'
import TruckSVG from '@/components/TruckSVG'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'driving' | 'stopped' | 'fading'>('driving')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('stopped'), 2000)
    const t2 = setTimeout(() => setPhase('fading'), 4200)
    const t3 = setTimeout(() => onComplete(), 4900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  const isStopped = phase === 'stopped' || phase === 'fading'

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'radial-gradient(ellipse at 30% 60%, #1a2d6e 0%, #0d1b3e 55%, #060d1f 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: phase === 'fading' ? 0 : 1,
        transition: phase === 'fading' ? 'opacity 0.7s ease' : 'none',
      }}
    >
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes roadScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100px); }
        }
        @keyframes loadBarFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes expandLine {
          from { width: 0px; }
          to { width: 220px; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.2; }
        }
        @keyframes crownGlow {
          0%, 100% { filter: drop-shadow(0 0 4px #E8C27A); }
          50% { filter: drop-shadow(0 0 14px #E8C27A) drop-shadow(0 0 24px rgba(232,194,122,0.4)); }
        }
        @keyframes dustFloat {
          0% { opacity: 0.5; transform: translateY(0) translateX(0) scale(1); }
          100% { opacity: 0; transform: translateY(-35px) translateX(-15px) scale(0.5); }
        }
        @keyframes headlightPulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.22; }
        }
      `}</style>

      {/* Stars */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(1.5px 1.5px at 8%  12%, rgba(255,255,255,0.85) 0%, transparent 100%),
          radial-gradient(1px   1px   at 22%  6%,  rgba(255,255,255,0.6)  0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 38%  18%, rgba(255,255,255,0.7)  0%, transparent 100%),
          radial-gradient(1px   1px   at 55%  4%,  rgba(255,255,255,0.9)  0%, transparent 100%),
          radial-gradient(1px   1px   at 70%  14%, rgba(255,255,255,0.5)  0%, transparent 100%),
          radial-gradient(1.5px 1.5px at 85%  8%,  rgba(255,255,255,0.75) 0%, transparent 100%),
          radial-gradient(1px   1px   at 14%  32%, rgba(255,255,255,0.4)  0%, transparent 100%),
          radial-gradient(1px   1px   at 50%  28%, rgba(255,255,255,0.55) 0%, transparent 100%),
          radial-gradient(1px   1px   at 92%  22%, rgba(255,255,255,0.5)  0%, transparent 100%),
          radial-gradient(1px   1px   at 30%  45%, rgba(255,255,255,0.3)  0%, transparent 100%)
        `,
      }} />

      {/* Brand text (appears when truck stops) */}
      <div style={{
        position: 'absolute',
        top: '9%',
        textAlign: 'center',
        opacity: isStopped ? 1 : 0,
        transform: isStopped ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
        userSelect: 'none',
      }}>
        {/* Crown icon above text */}
        <div style={{
          fontSize: 28,
          marginBottom: 8,
          animation: isStopped ? 'crownGlow 2.5s ease-in-out infinite' : 'none',
          display: 'inline-block',
        }}>
          {'\uD83D\uDC51'}
        </div>

        <div style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(28px, 5.5vw, 52px)',
          fontWeight: 700,
          color: '#F5F0E8',
          letterSpacing: '0.09em',
          lineHeight: 1,
        }}>
          KINGDOM{' '}
          <span style={{ color: '#E8C27A' }}>COME</span>
        </div>

        <div style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(14px, 2.5vw, 22px)',
          color: '#E8C27A',
          letterSpacing: '0.3em',
          marginTop: 6,
          fontWeight: 400,
        }}>
          SERVICES
        </div>

        {/* Animated gold divider line */}
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, #E8C27A 30%, #E8C27A 70%, transparent)',
          margin: '14px auto',
          animation: isStopped ? 'expandLine 0.7s ease 0.4s forwards' : 'none',
          width: 0,
        }} />

        <div style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 10,
          color: 'rgba(255,255,255,0.38)',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
        }}>
          Jackson, MS &nbsp;&middot;&nbsp; Moving &amp; Junk Removal
        </div>
      </div>

      {/* Headlight beam (appears when stopped) */}
      {isStopped && (
        <div style={{
          position: 'absolute',
          bottom: 182,
          left: '50%',
          marginLeft: 158,
          width: 0, height: 0,
          borderTop: '30px solid transparent',
          borderBottom: '30px solid transparent',
          borderLeft: '140px solid rgba(255, 245, 160, 0.13)',
          filter: 'blur(10px)',
          animation: 'headlightPulse 2s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Dust particles (appear when truck stops) */}
      {isStopped && [
        { left: -210, delay: '0s',   size: 8 },
        { left: -195, delay: '0.15s', size: 5 },
        { left: -225, delay: '0.3s',  size: 6 },
        { left: -180, delay: '0.1s',  size: 4 },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          bottom: 115,
          left: `calc(50% + ${p.left}px)`,
          width: p.size,
          height: p.size,
          borderRadius: '50%',
          background: 'rgba(200, 180, 120, 0.5)',
          animation: `dustFloat 1.2s ease ${p.delay} forwards`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Truck wrapper (drives in from left) */}
      <div style={{
        position: 'absolute',
        bottom: 80,
        left: phase === 'driving' ? '-520px' : '50%',
        transform: phase === 'driving' ? 'none' : 'translateX(-50%)',
        transition: phase === 'driving'
          ? 'none'
          : 'left 1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        width: 'min(420px, 88vw)',
        zIndex: 10,
      }}>
        <TruckSVG
          animate={phase === 'driving'}
          width="100%"
        />
      </div>

      {/* Road */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 108,
        background: 'linear-gradient(180deg, #1c1c30 0%, #0f0f1e 100%)',
        overflow: 'hidden',
        zIndex: 5,
      }}>
        {/* Dashed center line scrolling */}
        <div style={{
          position: 'absolute',
          top: '48%',
          left: 0,
          height: 4,
          width: '200%',
          background: 'repeating-linear-gradient(90deg, #E8C27A 0px, #E8C27A 55px, transparent 55px, transparent 100px)',
          animation: 'roadScroll 0.7s linear infinite',
          borderRadius: 2,
          opacity: 0.7,
        }} />
        {/* Road edge line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 1,
          background: 'rgba(232,194,122,0.15)',
        }} />
      </div>

      {/* Loading bar (appears when stopped) */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        opacity: isStopped ? 1 : 0,
        transition: 'opacity 0.6s ease 0.1s',
        zIndex: 20,
        minWidth: 200,
      }}>
        <div style={{
          width: 200,
          height: 2,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 2,
          margin: '0 auto 10px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            borderRadius: 2,
            background: 'linear-gradient(90deg, #C4973A, #E8C27A, #C4973A)',
            backgroundSize: '200% 100%',
            width: 0,
            animation: isStopped ? 'loadBarFill 1.9s ease forwards' : 'none',
          }} />
        </div>
        <div style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: 10,
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
        }}>
          Loading your experience
        </div>
      </div>
    </div>
  )
}
