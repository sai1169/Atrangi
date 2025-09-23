'use client'

import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        
        bgRef.current.style.setProperty('--mouse-x', `${x}%`)
        bgRef.current.style.setProperty('--mouse-y', `${y}%`)
      }
    }

    const element = bgRef.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      return () => element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={bgRef}
      className="fixed inset-0 interactive-bg pointer-events-none z-0"
    >
      {/* Floating Orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="floating-orb"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, 
              ${['#FF6B9D', '#FF8C42', '#FFD93D', '#4ECDC4', '#9B59B6'][Math.floor(Math.random() * 5)]}40, 
              ${['#FF6B9D', '#FF8C42', '#FFD93D', '#4ECDC4', '#9B59B6'][Math.floor(Math.random() * 5)]}20)`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  )
}