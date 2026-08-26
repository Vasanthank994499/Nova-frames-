"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Globe from "@/components/Globe";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark flex items-center justify-center">
      {/* Background Globe */}
      <div className="absolute inset-0 opacity-60 z-0">
        <Globe />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_80%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight"
        >
          We Build Brands That <br className="hidden xs:inline" />
          <span className="gradient-text">
            Break the Internet.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed px-2"
        >
          Nova Frames is a full-service digital marketing agency crafting
          scroll-stopping content, high-converting campaigns, and brands that
          dominate.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 sm:mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:px-8 sm:py-4 sm:text-lg font-semibold rounded-full bg-accent hover:bg-accent-glow text-white transition-all shadow-md sm:shadow-lg hover:shadow-accent/25 animate-float animate-glow-pulse uppercase sm:normal-case tracking-wider sm:tracking-normal"
          >
            Inquire Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-gray-500 animate-bounce">
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </div>
    </section>
  );
}
