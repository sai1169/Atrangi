'use client'

import { motion } from 'framer-motion'

const registrationEvents = [
  { 
    icon: '🎶', 
    title: 'Singing', 
    description: 'Showcase your vocal talents on stage',
    color: 'from-festival-pink to-festival-magenta',
    formLink: 'https://forms.gle/rXdTo24x2WzoyQw7A'
  },
  { 
    icon: '💃', 
    title: 'Dance', 
    description: 'Express yourself through movement',
    color: 'from-festival-orange to-festival-yellow',
    formLink: 'https://forms.gle/s4UAkV1A3ZhHxE7r9'
  },
  { 
    icon: '🎭', 
    title: 'Skit', 
    description: 'Recreate a movie scene with your gang',
    color: 'from-festival-purple to-festival-teal',
    formLink: '#'
  },
  { 
    icon: '🎤', 
    title: 'Open Mic', 
    description: 'Share your unique talent with everyone',
    color: 'from-festival-teal to-festival-lime',
    formLink: '#'
  }
]

export default function RegistrationSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-festival-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-festival text-5xl md:text-7xl text-white mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            Join the Stage
          </motion.h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Register for spotlight events and showcase your talent
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-festival-pink to-festival-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {registrationEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-festival-pink/10">
                {/* Animated Background Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${event.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${event.color.replace('from-', '').replace('to-', '').split(' ')[1]})`
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center mr-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}>
                      <span className="text-3xl">
                        {event.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-2xl mb-2 transition-colors duration-300 group-hover:text-festival-pink">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <motion.a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full bg-gradient-to-r ${event.color} text-white font-bold py-4 px-8 rounded-2xl text-center text-lg transition-all duration-300 hover:shadow-lg hover:shadow-festival-pink/25 relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Register Now</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-festival-pink/10 to-festival-orange/10 backdrop-blur-sm border border-festival-pink/20 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <p className="text-gray-300 text-lg mb-2 font-medium">
              Ready to shine on stage?
            </p>
            <p className="text-gray-400 text-base">
              More activities and fun await you at the venue!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}