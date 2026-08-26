'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Brand Launch Teaser',
    subtitle: 'Product Launch / Nova Studios',
    gradient: 'from-indigo-900 to-purple-900',
  },
  {
    id: 2,
    title: 'Social Media Ad Reel',
    subtitle: 'Paid Social / RetailMax',
    gradient: 'from-rose-900 to-pink-900',
  },
  {
    id: 3,
    title: 'Corporate Showcase',
    subtitle: 'Brand Film / TechVault Inc.',
    gradient: 'from-emerald-900 to-cyan-900',
  },
]

export default function VideoShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [playingId, setPlayingId] = useState<number | null>(null)

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id)
  }

  return (
    <section id="video-showcase" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold">Our Work</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">Featured Video Reels</h3>
        </div>

        {/* Responsive Grid on Tablet/Desktop & Switchable on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${activeSlide === index ? 'block' : 'hidden'} sm:block w-full transition-all duration-300`}
            >
              <div
                className={`w-full aspect-video rounded-2xl overflow-hidden relative bg-gradient-to-br ${video.gradient} cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300`}
                onClick={() => togglePlay(video.id)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white relative transition-transform group-hover:scale-110">
                    {playingId === video.id && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-white/40" />
                    )}
                    {playingId === video.id ? (
                      <Pause size={24} className="sm:w-8 sm:h-8 relative z-10" />
                    ) : (
                      <Play size={24} className="sm:w-8 sm:h-8 relative z-10 ml-0.5 sm:ml-1" />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-left">
                <h4 className="text-base sm:text-lg font-semibold text-txt-primary">{video.title}</h4>
                <p className="text-txt-muted text-xs sm:text-sm mt-0.5">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-Only Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === index ? 'bg-accent w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
