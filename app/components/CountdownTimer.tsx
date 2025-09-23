'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-09-26T13:10:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-festival-pink to-festival-magenta' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-festival-orange to-festival-yellow' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-festival-teal to-festival-lime' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-festival-purple to-festival-pink' }
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-festival-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-festival-teal rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-festival text-4xl md:text-6xl text-white mb-4">
            The Magic Begins In
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12">
            Get ready for the most colorful celebration of the year!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "backOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${unit.color} rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden`}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse"></div>
                
                <div className="relative z-10">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-2"
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider">
                    {unit.label}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-festival-pink text-lg md:text-xl font-semibold">
            September 26th, 2025 • 1:10 PM • KMEC Auditorium
          </p>
        </motion.div>
      </div>
    </section>
  )
}