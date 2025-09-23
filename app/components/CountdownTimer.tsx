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
    const targetDate = new Date('2025-09-26T13:00:00').getTime()

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

  return (
    <section className="py-12 px-6 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Event Starts In
          </h3>
          
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div key={unit.label} className="text-center">
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20 min-w-[60px] md:min-w-[80px]"
                >
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wide">
                    {unit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300 text-sm md:text-base">
            September 26th, 2025 • 1:00 PM • KMEC Auditorium
          </p>
        </motion.div>
      </div>
    </section>
  )
}