'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function EntranceAnimation() {
  const [showEntrance, setShowEntrance] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Wait for loading to finish
      await new Promise(resolve => setTimeout(resolve, 4000))
      
      // Start entrance sequence
      await controls.start({
        scale: [0, 1.2, 1],
        rotate: [0, 360],
        opacity: [0, 1],
        transition: { duration: 1.5, ease: "backOut" }
      })
      
      // Explosion effect
      await controls.start({
        scale: [1, 20],
        opacity: [1, 0],
        transition: { duration: 0.8, ease: "easeIn" }
      })
      
      setShowEntrance(false)
    }
    
    sequence()
  }, [controls])

  if (!showEntrance) return null

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: showEntrance ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Central Explosion */}
      <motion.div
        animate={controls}
        className="relative"
      >
        {/* Main Circle */}
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-festival-pink to-festival-orange"
          style={{
            boxShadow: "0 0 100px rgba(255, 107, 157, 0.8)"
          }}
        />
        
        {/* Radiating Particles */}
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-festival-yellow"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: Math.cos((i * 15) * Math.PI / 180) * 200,
              y: Math.sin((i * 15) * Math.PI / 180) * 200,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 1.5 + (i * 0.05),
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Text Reveal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.h1
          className="font-festival text-8xl festival-text-gradient"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 3, duration: 1, ease: "backOut" }}
        >
          Welcome!
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}