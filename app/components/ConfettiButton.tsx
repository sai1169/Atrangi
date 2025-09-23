'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ConfettiButton() {
  const [isExploding, setIsExploding] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const triggerConfetti = () => {
    setIsExploding(true)
    setTimeout(() => setIsExploding(false), 3000)
  }

  return (
    <div className="fixed bottom-8 left-8 z-50 md:bottom-32 md:right-8 md:left-auto">
      <div className="relative group">
        <motion.button
          onClick={triggerConfetti}
          onTouchStart={() => setShowTooltip(true)}
          onTouchEnd={() => setTimeout(() => setShowTooltip(false), 2000)}
          className="w-16 h-16 bg-gradient-to-r from-festival-yellow to-festival-orange rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              "0 10px 30px rgba(255, 215, 0, 0.4)",
              "0 15px 40px rgba(255, 215, 0, 0.6)",
              "0 10px 30px rgba(255, 215, 0, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl">🎉</span>
          
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Tooltip */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.8 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-xl whitespace-nowrap md:left-20 md:right-auto"
          >
            <span className="text-sm font-semibold">Tap for Confetti!</span>
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-4 border-r-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent md:right-0 md:left-auto md:translate-x-1 md:border-r-0 md:border-l-4 md:border-l-gray-800" />
          </motion.div>
        )}
      </div>

      {/* Confetti Explosion */}
      {isExploding && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#FF6B9D', '#4ECDC4', '#FFD93D', '#FF8C42', '#9B59B6'][i % 5],
                left: '50%',
                top: '50%',
              }}
              initial={{
                scale: 0,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 600,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}