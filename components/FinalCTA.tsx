'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Instagram, Linkedin } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 sm:py-32 md:py-40 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-glow/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase">
            <span className="block">READY TO MAKE YOUR BRAND</span>
            <span className="block gradient-text">IMPOSSIBLE TO IGNORE?</span>
          </h2>

          <p className="mt-6 sm:mt-8 font-body text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            You don't need another agency sending you a monthly content calendar. You need a team that understands where your brand is, where it needs to go, and what it will take to get there.
          </p>

          <p className="mt-8 sm:mt-10 font-display text-lg sm:text-xl md:text-2xl text-white uppercase tracking-wider">
            LET'S BUILD YOUR NEXT GROWTH STORY.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-glow text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider transition-colors animate-glow-pulse"
            >
              START A CONVERSATION →
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-sm text-gray-500 font-body">
            <a href="mailto:hello@novaframes.in" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              hello@novaframes.in
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
              Instagram →
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
