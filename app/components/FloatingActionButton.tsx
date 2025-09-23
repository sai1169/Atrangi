'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToRegistration = () => {
    document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-40"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <motion.button
            className="relative group"
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            onClick={scrollToRegistration}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Main Button */}
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-festival-pink to-festival-orange rounded-full shadow-2xl flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(255, 107, 157, 0.4)",
                  "0 15px 40px rgba(255, 107, 157, 0.6)",
                  "0 10px 30px rgba(255, 107, 157, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </motion.div>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Expanded Text */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap"
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-semibold">Quick Register</span>
                  {/* Arrow */}
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}