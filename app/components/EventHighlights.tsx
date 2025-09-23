'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const events = [
  {
    icon: '🎶',
    title: 'Singing', subtitle: 'Stage Performance', color: 'from-festival-pink to-festival-magenta',
    category: 'stage', description: 'Showcase your vocal talents and mesmerize the audience'
  },
  {
    icon: '💃',
    title: 'Dance', subtitle: 'Stage Performance', color: 'from-festival-orange to-festival-yellow',
    category: 'stage', description: 'Express yourself through graceful movements and rhythm'
  },

  {
    icon: '🎤',
    title: 'Open Mic', subtitle: 'Standup, Storytelling & More', color: 'from-festival-teal to-festival-lime',
    category: 'stage', description: 'Share your unique talent and connect with the audience'
  },
  {
    icon: '🕵️',
    title: 'Atrangi QR Quest', subtitle: 'Mystery Adventure', color: 'from-festival-magenta to-festival-pink',
    category: 'interactive', description: 'Solve puzzles and embark on a thrilling campus adventure'
  },
  {
    icon: '🔥',
    title: 'Dance Together', subtitle: 'groove to music', color: 'from-festival-yellow to-festival-orange',
    category: 'interactive', description: 'Join the crowd and dance to electrifying beats'
  },
  {
    icon: '🎬',
    title: 'Guess the Movie', subtitle: 'Picture-based Game', color: 'from-festival-lime to-festival-teal',
    category: 'games', description: 'Test your movie knowledge with visual clues'
  },
  {
    icon: '🎨',
    title: 'Face Painting', subtitle: 'Artistic Expression', color: 'from-festival-pink to-festival-purple',
    category: 'creative', description: 'Transform your face into a canvas of vibrant art'
  },
  {
    icon: '🎯',
    title: 'Dart Throw', subtitle: 'Skill Challenge', color: 'from-festival-orange to-festival-magenta',
    category: 'games', description: 'Test your precision and aim for the bullseye'
  },
  {
    icon: '🖌️',
    title: 'Mehendi', subtitle: 'Traditional Art', color: 'from-festival-teal to-festival-yellow',
    category: 'creative', description: 'Adorn your hands with beautiful henna designs'
  },
  {
    icon: '📸',
    title: 'Polaroid Corners', subtitle: 'Instant Memories', color: 'from-festival-purple to-festival-lime',
    category: 'creative', description: 'Capture and create instant memories with friends'
  },
  {
    icon: '⏳',
    title: 'Time Capsule', subtitle: 'This capsule will be opened exactly at the end of college', color: 'from-festival-magenta to-festival-teal',
    category: 'interactive', description: 'This capsule will be opened exactly at the end of college'
  }
]

const categories = [
  { name: 'All', filter: 'all' },
  { name: 'Stage Events', filter: 'stage' },
  { name: 'Interactive', filter: 'interactive' },
  { name: 'Games', filter: 'games' },
  { name: 'Creative', filter: 'creative' }
]

export default function EventHighlights() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.category === activeFilter)

  return (
    <section id="events" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-festival-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-festival-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-festival-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-festival text-5xl md:text-7xl text-white mb-6">
            Experience Atrangi
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Dive into a world of fun, creativity, and celebration
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.filter}
                onClick={() => setActiveFilter(category.filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 ${activeFilter === category.filter
                  ? 'bg-gradient-to-r from-festival-pink to-festival-orange text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
              onHoverStart={() => setHoveredEvent(event.title)}
              onHoverEnd={() => setHoveredEvent(null)}
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl md:rounded-3xl p-4 md:p-6 h-full cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-festival-pink/20 min-h-[180px] md:min-h-[220px]">

                {/* Animated Background Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${event.color.replace('from-', '').replace('to-', '').split(' ')[0]}, ${event.color.replace('from-', '').replace('to-', '').split(' ')[1]})`
                  }}
                />

                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${event.color} flex items-center justify-center mb-4 md:mb-6 mx-auto relative transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <div className="text-white transition-transform duration-300 group-hover:scale-110">
                    <span className="text-2xl md:text-3xl">
                      {event.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-white font-bold text-base md:text-xl mb-1 md:mb-2 transition-colors duration-300 group-hover:text-festival-pink leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3 font-medium transition-colors duration-300 group-hover:text-gray-300 leading-tight">
                    {event.subtitle}
                  </p>

                  <p className={`text-gray-500 text-xs leading-relaxed transition-all duration-300 overflow-hidden ${hoveredEvent === event.title ? 'max-h-16 md:max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    {event.description}
                  </p>
                </div>

                {/* Floating particles on hover */}
                {hoveredEvent === event.title && (
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={`${event.title}-particle-${i}`}
                        className="absolute w-1 h-1 bg-festival-pink rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        initial={{
                          y: 0,
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: "easeOut",
                          repeatDelay: 0
                        }}
                      />
                    ))}
                  </div>
                )}
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
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-festival-pink/20 to-festival-orange/20 backdrop-blur-sm border border-festival-pink/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <p className="text-gray-300 text-lg mb-2">
              Ready to join the celebration?
            </p>
            <p className="text-gray-400 text-sm">
              More surprises and activities await you at the venue!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}