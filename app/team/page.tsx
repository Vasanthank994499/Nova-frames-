'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & CEO',
    department: 'Leadership',
    skills: ['Strategy', 'Vision'],
    gradient: 'from-accent to-accent-glow',
  },
  {
    name: 'Nisha Kapoor',
    role: 'Co-Founder & MD',
    department: 'Leadership',
    skills: ['Operations', 'Growth'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Lead Editor',
    department: 'Production',
    skills: ['Premiere Pro', 'DaVinci'],
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'James Carter',
    role: 'Motion Designer',
    department: 'Production',
    skills: ['After Effects', '3D'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Content Strategist',
    department: 'Strategy',
    skills: ['SEO', 'Analytics'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    department: 'Design',
    skills: ['Figma', 'Branding'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    name: 'Rahul Verma',
    role: 'Full-Stack Developer',
    department: 'Engineering',
    skills: ['React', 'Node.js'],
    gradient: 'from-rose-500 to-red-500',
  },
  {
    name: 'Maya Chen',
    role: 'Performance Marketer',
    department: 'Marketing',
    skills: ['Google Ads', 'Meta Ads'],
    gradient: 'from-sky-500 to-blue-500',
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
      <section className="py-20 sm:py-32 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-accent uppercase tracking-widest text-xs sm:text-sm font-semibold">Our Team</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4 tracking-tight">The People Behind the Pixels</h1>
          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Meet the talented individuals who drive our agency forward. A diverse group of strategists, creatives, and technologists united by a passion for digital excellence.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface-alt rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100"
              >
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="text-2xl sm:text-3xl font-bold text-white/70">
                    {getInitials(member.name)}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-txt-primary">{member.name}</h3>
                    <p className="text-accent text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">{member.role}</p>
                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full mt-2 font-medium">
                      {member.department}
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-surface-muted text-txt-muted text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <a href="#" className="p-1 text-txt-muted hover:text-accent transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="p-1 text-txt-muted hover:text-accent transition-colors" aria-label={`${member.name}'s Twitter`}>
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
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
