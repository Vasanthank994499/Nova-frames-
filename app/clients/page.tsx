'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    name: 'Sree Balaji Jewellers',
    industry: 'Jewellery & Luxury',
    metric: 'From 3K to 10K+ Followers',
    description: 'We transformed the brand\'s digital presence through strategic content, positioning, and organic growth — building a jewellery community that didn\'t just watch, but engaged and enquired.',
    stats: [
      { value: '3K → 10K+', label: 'Organic Growth' },
      { value: '400–500+', label: 'Leads Generated' },
      { value: '4 Months', label: 'Timeline' },
    ],
    shift: 'From a local jewellery page → to a recognizable digital brand.',
    tags: ['Brand Strategy', 'Reels Production', 'Organic Growth', 'Lead Generation'],
  },
  {
    name: 'Sri Varagi Promoters',
    industry: 'Real Estate & Properties',
    metric: 'From Zero to 5,000+ Followers',
    description: 'We built Sri Varagi Promoters\' digital presence from the ground up — creating a recognizable real estate brand through positioning, local storytelling, and organic content.',
    stats: [
      { value: '0 → 5K+', label: 'Organic Followers' },
      { value: '400+', label: 'High-Intent Leads' },
      { value: '3 Months', label: 'Timeline' },
    ],
    shift: 'From a new digital presence → to a brand people recognize and enquire about.',
    tags: ['Positioning', 'Video Storytelling', 'Lead Generation', 'Organic Strategy'],
  },
  {
    name: 'Sagar Readymades',
    industry: 'Fashion & Retail',
    metric: 'We Chased Store Traffic, Not Just Views',
    description: 'NovaFrames created sales-focused campaigns combining content, promotional strategy, local reach, and performance marketing to get more shoppers through physical doors.',
    stats: [
      { value: '+30–40%', label: 'Walk-in Increase' },
      { value: '₹2K → ₹26K', label: 'Campaign Return' },
      { value: 'Peak Season', label: 'Focus Period' },
    ],
    shift: 'From online visibility → to measurable offline movement and sales.',
    tags: ['Performance Ads', 'Local Campaigns', 'Store Footfall', 'Sales Strategy'],
  },
  {
    name: 'High-Volume Lead Campaign',
    industry: 'Growth Marketing',
    metric: '1,000+ Leads in Just 30 Days',
    description: 'We built a focused content and performance strategy designed to reach the right audience, generate demand, and convert high attention into direct customer enquiries.',
    stats: [
      { value: '1,000+', label: 'Leads Generated' },
      { value: '300 → 2K+', label: 'Follower Surge' },
      { value: '30 Days', label: 'Campaign Duration' },
    ],
    shift: 'From limited traction → to a predictable, high-volume lead pipeline.',
    tags: ['Paid Acquisition', 'Funnel Optimization', 'Lead Generation', 'Conversion Strategy'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-accent uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
            Selected Growth Stories
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-2 sm:mt-4 tracking-tight uppercase">
            We Don't Show Off Work. <br />
            <span className="gradient-text">We Show What Changed.</span>
          </h1>
          <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Real brands, strategic campaigns, and measurable growth. Explore how we turn digital attention into commercial results.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface-alt border border-gray-100 rounded-3xl p-6 sm:p-10 hover:shadow-xl hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-xs text-txt-muted font-medium">Case Study #{index + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-txt-primary">
                  {study.name}
                </h2>
                <p className="text-base sm:text-lg font-semibold text-accent mt-1">
                  {study.metric}
                </p>

                <p className="text-txt-secondary mt-4 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {study.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200/60">
                  {study.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-surface p-4 rounded-xl border border-gray-100">
                      <div className="text-xl sm:text-2xl font-bold text-txt-primary">{stat.value}</div>
                      <div className="text-xs text-txt-muted mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* The Shift */}
                <div className="mt-6 flex items-start gap-2 text-xs sm:text-sm text-txt-primary/80 font-medium italic bg-accent/5 p-4 rounded-xl border border-accent/10">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>The Shift: {study.shift}</span>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-surface-muted text-txt-secondary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-dark text-white">
            <h3 className="text-2xl sm:text-4xl font-bold">Ready to write your growth story?</h3>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
              Let&apos;s build a strategy that gets your brand noticed, remembered, and chosen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-full bg-accent hover:bg-accent-glow text-white font-semibold text-sm uppercase tracking-wider transition-all"
            >
              <span>Let Us Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
