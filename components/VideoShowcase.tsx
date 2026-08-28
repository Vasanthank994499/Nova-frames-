'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const videos = [
  {
    id: 1,
    title: 'Sree Balaji Jewellers',
    subtitle: 'Organic Community & Instagram Reel Series (3K → 10K+)',
    gradient: 'from-amber-950 via-amber-900 to-indigo-950',
    tag: 'Jewellery / Brand Growth',
  },
  {
    id: 2,
    title: 'Sri Varagi Promoters',
    subtitle: 'Real Estate Brand Storytelling & High-Intent Enquiries',
    gradient: 'from-blue-950 via-slate-900 to-indigo-950',
    tag: 'Real Estate / Lead Gen',
  },
  {
    id: 3,
    title: 'Sagar Readymades',
    subtitle: 'Festive Sales Drive & Store Walk-in Campaign (+30–40% Walk-ins)',
    gradient: 'from-rose-950 via-purple-950 to-indigo-950',
    tag: 'Retail / Performance Ads',
  },
];

export default function VideoShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="video-showcase" className="py-16 sm:py-24 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">
              Featured Growth Stories
            </h2>
          </div>
          <Link
            href="/clients"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-glow mt-4 sm:mt-0 group"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
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
                className={`w-full aspect-video rounded-2xl overflow-hidden relative bg-gradient-to-br ${video.gradient} cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 border border-black/10`}
                onClick={() => togglePlay(video.id)}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                
                {/* Tag pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-xs font-medium border border-white/10">
                    {video.tag}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white relative transition-transform group-hover:scale-110 shadow-lg">
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
                <h3 className="text-base sm:text-lg font-semibold text-txt-primary">{video.title}</h3>
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
  );
}
