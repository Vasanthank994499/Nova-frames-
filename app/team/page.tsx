'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Hari Prasath',
    role: 'Founder & CEO',
    image: '/team/hari-prasath.jpg',
    department: 'Leadership & Strategy',
    skills: ['Brand Positioning', 'Creative Direction', 'Business Growth'],
    gradient: 'from-accent to-accent-glow',
    bio: 'Built NovaFrames with a clear mission: provide ambitious businesses with high-level creative thinking and strategic marketing that delivers tangible commercial growth.',
  },
  {
    name: 'T. Premalatha',
    role: 'Co-Founder, Performance Marketing',
    image: '/team/premalatha.jpg',
    department: 'Performance & Growth',
    skills: ['Paid Media', 'Targeting & Funnels', 'Lead Generation'],
    gradient: 'from-purple-500 to-pink-500',
    bio: 'Leads full-funnel acquisition, paid advertising campaigns, and performance optimisation to ensure high-intent lead flow.',
  },
  {
    name: 'Video Production Team',
    role: 'Reels & Visual Storytelling',
    department: 'Creative Production',
    skills: ['Cinematography', 'DaVinci / Premiere', 'Motion Design'],
    gradient: 'from-violet-500 to-fuchsia-500',
    bio: 'Crafting scroll-stopping video assets, high-converting product showcases, and viral reel series.',
  },
  {
    name: 'Content & Strategy Lead',
    role: 'Brand Storytelling & Copy',
    department: 'Strategy & Content',
    skills: ['Content Frameworks', 'Brand Voice', 'Social Media'],
    gradient: 'from-blue-500 to-cyan-500',
    bio: 'Turning brand value propositions into compelling narratives that captivate and convert audiences.',
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

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('');
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-accent uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Our People</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-2 sm:mt-4 tracking-tight uppercase">
            The Minds Behind NovaFrames
          </h1>
          <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
            A cohesive team of brand strategists, creative directors, and performance marketers united by one goal: building brands that dominate.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface-alt rounded-3xl overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col border border-gray-100 p-6 sm:p-8"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${member.image ? 'p-0.5 border-2 border-accent/30 shadow-lg overflow-hidden bg-surface' : `bg-gradient-to-br ${member.gradient} shadow-md`} flex items-center justify-center flex-shrink-0`}>
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-xl object-cover object-top"
                      />
                    ) : (
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-wider">
                        {getInitials(member.name)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-txt-primary">{member.name}</h2>
                    <p className="text-accent text-xs sm:text-sm font-medium mt-0.5">{member.role}</p>
                    <span className="inline-block px-2.5 py-0.5 bg-accent/10 text-accent text-xs rounded-full mt-2 font-medium">
                      {member.department}
                    </span>
                  </div>
                </div>

                <p className="text-txt-secondary text-sm leading-relaxed flex-grow">
                  {member.bio}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-200/60">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-surface-muted text-txt-secondary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-5">
                    <a href="#" className="p-2 bg-surface rounded-full text-txt-muted hover:text-accent shadow-sm transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.instagram.com/nova_.frames?igsi=MWp2OXk4bjIxZmRjaw==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-surface rounded-full text-txt-muted hover:text-accent shadow-sm transition-colors" 
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
