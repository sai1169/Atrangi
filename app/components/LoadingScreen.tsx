'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)

  const loadingTexts = [
    "Mixing colors...",
    "Tuning instruments...",
    "Setting up the stage...",
    "Preparing confetti...",
    "Almost ready..."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12 + 3
        
        // Update phase based on progress
        if (newProgress > 20 && currentPhase === 0) setCurrentPhase(1)
        if (newProgress > 40 && currentPhase === 1) setCurrentPhase(2)
        if (newProgress > 60 && currentPhase === 2) setCurrentPhase(3)
        if (newProgress > 80 && currentPhase === 3) setCurrentPhase(4)
        
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        return newProgress
      })
    }, 150)

    return () => clearInterval(timer)
  }, [currentPhase])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Mobile-Optimized Background */}
          <div className="absolute inset-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: `${80 + i * 30}px`,
                  height: `${80 + i * 30}px`,
                  left: `${25 + i * 25}%`,
                  top: `${30 + i * 20}%`,
                  background: `${['#FF6B9D', '#4ECDC4', '#FFD93D'][i]}30`,
                  filter: 'blur(1px)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* College Logo with Advanced Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "backOut" }}
              className="mb-8"
            >
              <motion.img 
                src="https://kmec.in/assets/img/non-transparent-logo.png" 
                alt="KMEC Logo" 
                className="h-16 mx-auto filter drop-shadow-2xl"
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(255, 107, 157, 0.5))",
                    "drop-shadow(0 0 20px rgba(255, 107, 157, 0.8))",
                    "drop-shadow(0 0 10px rgba(255, 107, 157, 0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Mobile-Optimized Title Animation */}
            <motion.div className="mb-8">
              <motion.h1
                className="font-festival text-5xl md:text-7xl festival-text-gradient"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 1, ease: "backOut" }}
                style={{
                  textShadow: "0 0 20px rgba(255, 107, 157, 0.6)"
                }}
              >
                Atrangi
              </motion.h1>
            </motion.div>

            {/* Visual Equalizer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-end justify-center gap-1 h-16">
                {Array.from({ length: 12 }).map((_, i) => (
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
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="mb-8"
            >
              <div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden mb-2 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-festival-pink via-festival-orange to-festival-yellow relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Progress glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-festival-pink/50 to-festival-orange/50 blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              
              <motion.p
                className="text-festival-pink font-semibold text-lg"
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {loadingTexts[currentPhase]} {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Mobile-Optimized Particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full will-change-transform"
                style={{
                  left: `${40 + Math.random() * 20}%`,
                  top: `${40 + Math.random() * 20}%`,
                  background: ['#FF6B9D', '#4ECDC4', '#FFD93D'][i % 3],
                }}
                initial={{
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -60, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeOut"
                }}
              />
            ))}


          </div>

          {/* Screen Transition Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-festival-pink via-festival-orange to-festival-teal"
            initial={{ x: '-100%' }}
            animate={{ x: progress >= 100 ? '0%' : '-100%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}