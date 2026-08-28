'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-dark flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Floating Accent Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="section-label uppercase text-accent font-bold tracking-widest text-xs sm:text-sm mb-8">
          Built for brands ready to grow beyond ordinary.
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="editorial-heading font-display font-bold uppercase leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
          <span className="block">WE DON'T JUST MARKET BRANDS.</span>
          <span className="block">
            WE MAKE THEM <span className="gradient-text bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">IMPOSSIBLE</span> TO IGNORE.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="font-body text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-6 sm:mt-8">
          NovaFrames is a brand growth studio combining strategy, content and performance marketing to build brands that people notice, remember and choose.
        </motion.p>

        <motion.div variants={itemVariants} className="font-display text-sm sm:text-base uppercase tracking-[0.2em] text-accent/80 mt-6 flex items-center justify-center flex-wrap gap-3">
          <span>Strategy</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span>Content</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span>Performance</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
          <span>Growth</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 sm:gap-6 mt-10 sm:mt-12 justify-center flex-col sm:flex-row items-center">
          <Link href="/contact" className="bg-accent hover:bg-accent-glow text-white px-8 py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider transition-colors duration-300 w-full sm:w-auto">
            START A CONVERSATION →
          </Link>
          <Link href="#case-studies" className="border border-white/20 hover:border-accent text-white px-8 py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider transition-colors duration-300 w-full sm:w-auto">
            EXPLORE OUR WORK →
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
      </div>
    </section>
  );
}
