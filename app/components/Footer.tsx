'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* College Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img 
              src="https://kmec.in/assets/img/non-transparent-logo.png" 
              alt="KMEC Logo" 
              className="h-12 mx-auto opacity-80"
            />
          </motion.div>

          <h3 className="font-festival text-4xl festival-text-gradient mb-8">
            Atrangi 2025
          </h3>
          
          <div className="glass-effect rounded-3xl p-6 mb-8 inline-block">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-festival-pink to-festival-orange flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">KMEC Auditorium</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-600"></div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-festival-teal to-festival-purple flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold">26th September 2025</span>
              </div>
            </div>
          </div>
          
          <motion.p 
            className="text-xl text-gray-300 font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Celebrate, Create, Cherish
          </motion.p>
          
          <motion.p
            className="text-gray-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Webpage cooked by Ramakanth KMEC 28'
          </motion.p>

        </motion.div>
      </div>
    </footer>
  )
}
