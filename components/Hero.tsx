"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Globe from "@/components/Globe";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-dark flex items-center justify-center pt-16">
      {/* Background 3D Wireframe Globe */}
      <div className="absolute inset-0 opacity-85 z-0 pointer-events-none">
        <Globe />
      </div>

      {/* Radial Gradient Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#0a0a0a_85%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Top Micro-Copy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block px-3.5 py-1.5 sm:px-4 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md mb-6 sm:mb-8 max-w-full"
        >
          <span className="text-[11px] sm:text-sm font-medium uppercase tracking-wider sm:tracking-[0.2em] text-accent-light">
            Built for brands ready to grow beyond ordinary.
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight uppercase"
        >
          We Build The Brands <br className="hidden sm:inline" />
          <span className="gradient-text">
            That Scale.
          </span>
        </motion.h1>

        {/* Sub-Headline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto mt-5 sm:mt-7 px-2"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal">
            NovaFrames is a brand growth studio combining strategy, content and
            performance marketing to build brands that people notice, remember and
            choose.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium mt-2 sm:mt-2.5">
            We are in the field past 2 years.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm font-semibold uppercase tracking-wider sm:tracking-widest text-accent-light"
        >
          <span>Strategy</span>
          <span className="text-white/30">•</span>
          <span>Content</span>
          <span className="text-white/30">•</span>
          <span>Performance</span>
          <span className="text-white/30">•</span>
          <span>Growth</span>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 sm:mt-12 flex items-center justify-center w-full max-w-md sm:max-w-none mx-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-accent hover:bg-accent-glow active:scale-[0.98] text-white transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 sm:animate-float animate-glow-pulse uppercase tracking-wider min-h-[48px]"
          >
            <span>Let Us Connect</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-500 animate-bounce pointer-events-none">
        <ChevronDown size={24} className="sm:w-8 sm:h-8" />
      </div>
    </section>
  );
}
