'use client'

import { motion } from 'framer-motion'

export default function VisualEqualizer() {
  const bars = Array.from({ length: 12 })
  
  return (
    <div className="flex items-end justify-center gap-1 h-16 mb-8">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-3 bg-gradient-to-t from-festival-pink to-festival-orange rounded-full"
          animate={{
            height: [
              Math.random() * 30 + 10,
              Math.random() * 50 + 20,
              Math.random() * 40 + 15,
              Math.random() * 60 + 25,
            ],
            opacity: [0.6, 1, 0.8, 1],
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          style={{
            boxShadow: `0 0 10px ${['#FF6B9D', '#FF8C42', '#FFD93D'][i % 3]}`
          }}
        />
      ))}
    </div>
  )
}