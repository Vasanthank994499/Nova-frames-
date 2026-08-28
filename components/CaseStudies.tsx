"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    hook: "FROM 3K TO 10K+ FOLLOWERS.",
    summary:
      "We transformed the brand's digital presence through strategic content, positioning and organic growth — building a jewellery community that didn't just watch, but engaged and enquired.",
    stats: [
      { value: "3K → 10K+", label: "Organic Instagram Growth" },
      { value: "400–500+", label: "Leads Generated" },
      { value: "4 MONTHS", label: "Growth Partnership" },
    ],
    shift: "From a local jewellery page → to a recognizable digital brand.",
    tags: ["Strategy", "Content", "Organic Growth", "Lead Generation"],
    clientName: "Sree Balaji Jewellers",
  },
  {
    hook: "FROM ZERO TO 5,000+ FOLLOWERS.",
    summary:
      "We built Sri Varagi Promoters' digital presence from the ground up — creating a recognizable real estate brand through positioning, local storytelling and organic content.",
    stats: [
      { value: "0 → 5K+", label: "Organic Followers" },
      { value: "400+", label: "Leads Generated" },
      { value: "3 MONTHS", label: "Growth Partnership" },
    ],
    shift:
      "From a new digital presence → to a brand people started recognizing and enquiring about.",
    tags: ["Positioning", "Content", "Organic Growth", "Lead Generation"],
    clientName: "Sri Varagi Promoters",
  },
  {
    hook: "WE DIDN'T CHASE VIEWS. WE CHASED STORE TRAFFIC.",
    summary:
      "NovaFrames created sales-focused campaigns combining content, promotional strategy, local reach and performance marketing. The goal was simple: Get more customers through the door.",
    stats: [
      { value: "₹2K → ₹26K", label: "Campaign Revenue" },
      { value: "+30–40%", label: "Peak-Season Store Walk-ins" },
    ],
    shift: "From online visibility → to measurable offline movement.",
    tags: ["Content", "Campaigns", "Performance Marketing", "Sales"],
    clientName: "Sagar Readymades",
  },
  {
    hook: "1,000+ LEADS. IN JUST ONE MONTH.",
    summary:
      "We built a focused content and performance strategy designed to reach the right audience, generate demand and convert attention into enquiries.",
    stats: [
      { value: "300 → 2K+", label: "Instagram Followers" },
      { value: "1,000+", label: "Leads Generated" },
      { value: "30 DAYS", label: "Campaign Period" },
    ],
    shift:
      "From limited digital traction → to a growing audience and a high-volume lead pipeline.",
    tags: ["Content", "Performance Marketing", "Lead Generation", "Growth"],
    clientName: "High-Volume Lead Campaign",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-20 sm:py-28 md:py-32 bg-dark"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            WE DON'T SHOW OFF WORK. WE SHOW WHAT CHANGED.
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-400 mb-14 sm:mb-20">
            Selected NovaFrames growth stories.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-dark-card border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-accent/20 transition-colors duration-500"
            >
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                {study.hook}
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-3xl">
                {study.summary}
              </p>

              <div className="flex flex-wrap gap-6 sm:gap-10 mt-6 sm:mt-8">
                {study.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs sm:text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 italic text-sm sm:text-base text-gray-500">
                — {study.shift}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 text-xs sm:text-sm text-gray-400 font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/clients"
                  className="text-accent text-sm sm:text-base font-semibold uppercase tracking-wider hover:text-accent-glow transition-colors"
                >
                  VIEW CASE STUDY →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
