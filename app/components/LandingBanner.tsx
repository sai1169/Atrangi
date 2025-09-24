'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LandingBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-festival-pink/30 to-festival-orange/30 rounded-full blur-3xl"
          style={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-festival-teal/25 to-festival-purple/25 rounded-full blur-3xl"
          style={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="text-center z-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* College Logo with Advanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            className="mb-12"
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <img 
              src="https://kmec.in/assets/img/non-transparent-logo.png" 
              alt="KMEC Logo" 
              className="h-20 md:h-24 mx-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Mobile-Optimized Title */}
          <motion.div className="mb-8 relative">
            <motion.h1
              className="font-festival text-6xl md:text-9xl festival-text-gradient text-glow"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Atrangi
            </motion.h1>

            {/* Simple celebration particles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full will-change-transform"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
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
                  repeatDelay: 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 font-medium mb-4 shimmer-effect"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Creating moments we'll remember
          </motion.p>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-festival-pink/20 to-festival-orange/20 backdrop-blur-sm border border-festival-pink/40 rounded-full px-6 py-2"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 107, 157, 0.6)" }}
            >
              <span className="text-festival-pink font-semibold text-sm md:text-base">
                Exclusive for 2nd Year KMEC
              </span>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            To summarise: this is just a fun event for us 2nd years 
          </motion.p>
          
          <motion.div 
            className="glass-effect rounded-3xl p-8 mb-12 inline-block hover-glow"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "backOut" }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.1, x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-festival-pink to-festival-orange flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">KMEC Auditorium</span>
              </motion.div>
              <div className="hidden md:block w-px h-6 bg-gray-600"></div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.1, x: -5 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-festival-teal to-festival-purple flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">26th September 2025</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.button
            onClick={scrollToEvents}
            className="festival-gradient text-white font-bold py-5 px-12 rounded-full text-lg button-magnetic shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(255, 107, 157, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Explore the Magic
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 12, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-festival-pink to-festival-orange rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
