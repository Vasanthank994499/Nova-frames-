"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 md:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-4">
            MEET THE PERSON BEHIND NOVAFRAMES
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          {/* Leader 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-display font-bold">
                HP
              </span>
            </div>
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mt-5 sm:mt-6">
              HARI PRASATH
            </h3>
            <div className="font-body text-sm sm:text-base text-accent mt-1">
              Founder & CEO
            </div>
            
            <p className="font-body text-sm sm:text-base text-gray-400 leading-relaxed mt-4 sm:mt-6">
              NovaFrames was built with a simple belief: Small and ambitious businesses deserve the same level of creative thinking and strategic marketing as the biggest brands. What started with content evolved into something bigger — a growth-focused agency helping brands build their presence, reach the right audience and create measurable business impact. Today, NovaFrames brings together strategy, creativity, content and performance under one roof.
            </p>

            <blockquote className="italic text-white/80 border-l-2 border-accent pl-4 sm:pl-6 mt-6 font-body">
              "We don't want to be another agency your brand hires. We want to become part of the reason your brand grows."
            </blockquote>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/team"
                className="text-accent text-sm font-semibold uppercase tracking-wider hover:text-accent-glow transition-colors"
              >
                MEET THE TEAM →
              </Link>
            </div>
          </motion.div>

          {/* Leader 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-display font-bold">
                TP
              </span>
            </div>
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mt-5 sm:mt-6">
              T. PREMALATHA
            </h3>
            <div className="font-body text-sm sm:text-base text-accent mt-1">
              Co-Founder, Performance Marketing
            </div>
            
            <p className="font-body text-sm sm:text-base text-gray-400 leading-relaxed mt-4 sm:mt-6">
              Leading the performance side of NovaFrames, Premalatha focuses on turning creative campaigns into measurable outcomes. From audience targeting and campaign strategy to optimisation and lead generation, she helps ensure that great creative reaches the right people — and drives action.
            </p>

            <div className="font-display text-sm sm:text-base text-accent/70 uppercase tracking-wider mt-6">
              Strategy → Targeting → Optimisation → Results
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
