'use client'

import { useEffect, useState } from 'react'

interface SuccessScreenProps {
  name: string
  department: string
  personalityTotal: number
  memoryScore: number
}

export default function SuccessScreen({ name, department, personalityTotal, memoryScore }: SuccessScreenProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const firstName = name.split(' ')[0]

  return (
    <div className={`text-center py-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Animated checkmark */}
      <div className="relative w-24 h-24 mx-auto mb-10">
        <div className="absolute inset-0 rounded-full border-2 border-acid animate-pulse-glow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
            <path
              d="M3 18L13 28L37 3"
              stroke="#C8FF00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset="0"
              style={{
                animation: 'drawCheck 0.8s ease-out 0.3s both',
              }}
            />
          </svg>
        </div>
      </div>

      <p className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Application Received</p>
      <h2 className="font-display text-6xl sm:text-8xl text-paper mb-4 leading-none">
        {firstName}.
      </h2>
      <p className="font-body text-white/50 text-base mb-12 max-w-sm mx-auto">
        Your application for <span className="text-white/80">{department}</span> has been submitted.
        We'll be in touch if there's a match.
      </p>

      {/* Score summary */}
      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-12">
        <div className="border border-white/10 p-4">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">Personality</p>
          <p className="font-display text-4xl text-acid">{personalityTotal}</p>
          <p className="font-mono text-[10px] text-white/20 mt-1">out of 56</p>
        </div>
        <div className="border border-white/10 p-4">
          <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">Memory</p>
          <p className="font-display text-4xl text-acid">{memoryScore}</p>
          <p className="font-mono text-[10px] text-white/20 mt-1">out of 100</p>
        </div>
      </div>

      <p className="font-mono text-xs text-white/20">
        You can close this tab now.
      </p>

      <style>{`
        @keyframes drawCheck {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}
