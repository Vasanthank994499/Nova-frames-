"use client";

import { motion } from "framer-motion";

export default function PhilosophyBanner() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 md:py-40 bg-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface-alt opacity-50 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-txt-primary">
            DON'T FOLLOW THE MARKET. CREATE YOUR POSITION IN IT.
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-txt-secondary leading-relaxed max-w-2xl mx-auto mt-8 sm:mt-10">
            Trends change. Algorithms change. Platforms change. But a strong
            brand stays remembered. That's why we build beyond individual posts
            and campaigns. We build brand equity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
