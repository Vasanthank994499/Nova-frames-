'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Leadership() {
  const leaders = [
    {
      name: 'Hari Prasath',
      title: 'Founder & CEO',
      quote: '"We don\'t want to be another agency your brand hires. We want to become part of the reason your brand grows."',
      bio: 'Built NovaFrames with the belief that ambitious businesses deserve tier-1 creative thinking, strategic positioning, and performance marketing under one roof.',
      initials: 'HP',
      gradient: 'from-accent to-accent-glow',
      direction: -50,
    },
    {
      name: 'T. Premalatha',
      title: 'Co-Founder, Performance Marketing',
      quote: '"Turning creative campaigns into measurable outcomes through relentless audience targeting, testing, and high-intent lead generation systems."',
      bio: 'Leads performance marketing, full-funnel paid media strategy, and ROI optimisation to ensure creative reaches the right high-intent audiences.',
      initials: 'TP',
      gradient: 'from-purple-500 to-pink-500',
      direction: 50,
    },
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-surface-alt border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 text-txt-primary tracking-tight">
            Meet The Person Behind NovaFrames
          </h2>
          <p className="text-txt-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Strategic minds dedicated to scaling your business with creativity and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: leader.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-5 sm:gap-8 bg-surface p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300"
            >
              <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center shadow-md`}>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wider">
                  {leader.initials}
                </span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-txt-primary">
                  {leader.name}
                </h3>
                <p className="text-accent font-medium text-xs sm:text-sm mt-0.5 sm:mt-1">
                  {leader.title}
                </p>
                <p className="text-txt-secondary text-xs sm:text-sm mt-3 leading-relaxed">
                  {leader.bio}
                </p>
                <p className="text-txt-muted mt-3 italic text-xs sm:text-sm leading-relaxed border-l-2 border-accent/40 pl-3 sm:pl-4">
                  {leader.quote}
                </p>
                
                <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mt-4 pt-2">
                  <Link href="#" className="text-txt-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-alt" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link href="#" className="text-txt-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-alt" aria-label="Instagram">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
