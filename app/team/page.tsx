'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'HARI PRASATH',
    role: 'Founder & CEO',
    initials: 'HP',
    gradient: 'from-accent to-accent-glow',
    bio: 'NovaFrames was built with a simple belief: Small and ambitious businesses deserve the same level of creative thinking and strategic marketing as the biggest brands. What started with content evolved into something bigger — a growth-focused agency helping brands build their presence, reach the right audience and create measurable business impact.',
    department: 'Leadership',
    skills: ['Brand Strategy', 'Business Growth', 'Creative Direction', 'Team Leadership'],
  },
  {
    name: 'T. PREMALATHA',
    role: 'Co-Founder, Performance Marketing',
    initials: 'TP',
    gradient: 'from-purple-500 to-pink-500',
    bio: 'Leading the performance side of NovaFrames, Premalatha focuses on turning creative campaigns into measurable outcomes. From audience targeting and campaign strategy to optimisation and lead generation, she helps ensure that great creative reaches the right people — and drives action.',
    department: 'Performance',
    skills: ['Performance Marketing', 'Lead Generation', 'Campaign Strategy', 'Analytics'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-dark text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-white">
            OUR TEAM
          </h1>
          <p className="font-body text-base sm:text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            The people behind NovaFrames — driven by creativity, strategy and measurable results.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="bg-surface-alt border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-accent/20 transition-colors duration-300"
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}
                >
                  <span className="text-white text-xl sm:text-2xl font-display font-bold">
                    {member.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <h2 className="font-display text-xl sm:text-2xl font-bold text-txt-primary uppercase tracking-wide mt-5 sm:mt-6">
                  {member.name}
                </h2>
                <p className="font-body text-sm sm:text-base text-accent mt-1">{member.role}</p>

                {/* Department Badge */}
                <span className="inline-block mt-3 px-3 py-1 rounded-full border border-accent/20 text-xs text-accent font-body uppercase tracking-wider">
                  {member.department}
                </span>

                {/* Bio */}
                <p className="font-body text-sm sm:text-base text-txt-muted mt-4 sm:mt-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-surface-muted text-xs text-txt-secondary font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social */}
                <div className="flex gap-3 mt-6">
                  <Link
                    href="#"
                    className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center text-txt-muted hover:bg-accent hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 h-9 rounded-full bg-surface-muted flex items-center justify-center text-txt-muted hover:bg-accent hover:text-white transition-colors duration-300"
                    aria-label={`${member.name} Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <p className="font-body text-base sm:text-lg text-txt-muted mb-6">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-glow text-white px-8 py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider transition-colors duration-300"
            >
              START A CONVERSATION →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
