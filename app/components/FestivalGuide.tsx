'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tips = [
  {
    icon: '🎨',
    title: 'Embrace the Chaos',
    description: 'Come ready to get messy, laugh loud, and dance like nobody\'s watching!'
  },
  {
    icon: '📱',
    title: 'Capture Everything',
    description: 'Document every colorful moment - these memories will be priceless!'
  },
  {
    icon: '💧',
    title: 'Stay Hydrated',
    description: 'Dancing and celebrating is thirsty work - keep that energy up!'
  },
  {
    icon: '😎',
    title: 'Don\'t Be Shy',
    description: 'Channel your inner confidence - introduce yourself to someone new and make connections!'
  },
  {
    icon: '🎭',
    title: 'Participate Fully',
    description: 'Don\'t be a wallflower - join the activities, sing along, and be part of the magic!'
  },
  {
    icon: '⚡',
    title: 'Bring Your Energy',
    description: 'Your enthusiasm is contagious - the more energy you bring, the better it gets for everyone!'
  }
]

const dressCodeIdeas = [
  {
    category: 'Color Explosion',
    items: ['Neon everything', 'Tie-dye masterpieces', 'Rainbow accessories', 'Glow-in-the-dark elements']
  },
  {
    category: 'Creative Chaos',
    items: ['Mismatched patterns', 'Inside-out clothes', 'Backwards caps', 'Socks with sandals (yes, really!)']
  },
  {
    category: 'Festival Vibes',
    items: ['Flower crowns', 'Face gems', 'Temporary tattoos', 'Colorful hair chalk']
  },
  {
    category: 'Comfort First',
    items: ['Clothes you can dance in', 'Comfortable shoes', 'Layers for weather', 'Pockets for essentials']
  }
]

export default function FestivalGuide() {
  const [activeTab, setActiveTab] = useState('tips')

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-festival-pink rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-festival-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-festival-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-festival text-4xl md:text-5xl text-white mb-4">
            Guide
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            How to make the most of your Atrangi experience
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <button
              onClick={() => setActiveTab('tips')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'tips'
                  ? 'bg-gradient-to-r from-festival-pink to-festival-orange text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Festival Tips
            </button>
            <button
              onClick={() => setActiveTab('dress')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'dress'
                  ? 'bg-gradient-to-r from-festival-pink to-festival-orange text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Dress Code Ideas
            </button>
          </div>
        </div>

        {/* Tips Section */}
        {activeTab === 'tips' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 hover:bg-gray-700/40 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Dress Code Section */}
        {activeTab === 'dress' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Express Yourself Freely
              </h3>
              <p className="text-gray-300 text-base max-w-xl mx-auto">
                There are no rules, only suggestions! Wear what makes you feel amazing and ready to celebrate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dressCodeIdeas.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                >
                  <h4 className="text-xl font-bold text-white mb-4 text-center">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-festival-pink to-festival-orange rounded-full"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <div className="bg-gradient-to-r from-festival-pink/20 to-festival-orange/20 backdrop-blur-sm border border-festival-pink/30 rounded-2xl p-6 max-w-xl mx-auto">
                <h4 className="text-xl font-bold text-white mb-3">
                  Remember: You Are the Art! 🎨
                </h4>
                <p className="text-gray-300 text-base">
                  The most important thing you can wear is your smile and enthusiasm. 
                  Come as you are, and let your personality shine brighter than any outfit!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}