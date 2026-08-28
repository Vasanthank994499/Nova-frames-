'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';

const team = [
  {
    name: 'Hari Prasath',
    role: 'Founder & CEO',
    gradient: 'from-indigo-600/40 to-purple-600/40',
  },
  {
    name: 'T. Premalatha',
    role: 'Co-Founder, Performance Marketing',
    gradient: 'from-fuchsia-600/40 to-pink-600/40',
  },
  {
    name: 'Creative Production',
    role: 'Video Direction & Reels',
    gradient: 'from-blue-600/40 to-cyan-600/40',
  },
  {
    name: 'Growth & Strategy',
    role: 'Audience & Campaign Systems',
    gradient: 'from-emerald-600/40 to-teal-600/40',
  },
];

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team-carousel" className="py-16 sm:py-24 bg-surface-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold">Our People</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">Meet the Team</h2>
            <p className="text-txt-muted mt-2 sm:mt-4 text-sm sm:text-base">
              The creative and strategic minds engineering our client growth stories.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 transition-all text-txt-primary"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:shadow-md active:scale-95 transition-all text-txt-primary"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 sm:pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={`min-w-[260px] sm:min-w-[300px] md:min-w-[340px] h-[360px] sm:h-[420px] snap-center rounded-2xl overflow-hidden relative bg-gradient-to-br ${member.gradient} flex-shrink-0 group shadow-sm border border-gray-200/50`}
              initial="initial"
              whileHover="hover"
            >
              {/* Card watermark initials */}
              <div className="absolute inset-0 flex items-center justify-center text-white/15 text-5xl sm:text-6xl font-black select-none tracking-widest">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Persistent mobile gradient with expand on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent flex flex-col justify-end p-5 sm:p-6 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{member.name}</h3>
                <p className="text-accent-light text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{member.role}</p>
                
                <div className="flex gap-3 mt-3 pt-2 border-t border-white/10 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-1 text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-1 text-white hover:text-accent transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
