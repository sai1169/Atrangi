'use client'

import { useEffect, useState } from 'react'

export default function ConfettiAnimation() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`
          }}
        />
      ))}
    </div>
  )
}