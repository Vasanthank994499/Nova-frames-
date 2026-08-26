'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Leadership() {
  const leaders = [
    {
      name: 'Arjun Mehta',
      title: 'Founder & CEO',
      quote: '"Our mission is to bridge creativity and data — every pixel, every campaign, every brand story we touch is engineered to perform and inspire."',
      initials: 'AM',
      gradient: 'from-accent to-accent-glow',
      direction: -50
    },
    {
      name: 'Nisha Kapoor',
      title: 'Co-Founder & Managing Director',
      quote: '"Great brands aren\'t built overnight. We partner with ambitious teams to create lasting digital legacies that scale beyond expectations."',
      initials: 'NK',
      gradient: 'from-purple-500 to-pink-500',
      direction: 50
    }
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 text-txt-primary tracking-tight">
            The Visionaries Behind Nova
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: leader.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-5 sm:gap-8 bg-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center shadow-md`}>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
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
                <p className="text-txt-muted mt-3 sm:mt-4 italic text-xs sm:text-sm leading-relaxed">
                  {leader.quote}
                </p>
                
                <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mt-4 pt-2">
                  <Link href="#" className="text-txt-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-alt" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link href="#" className="text-txt-muted hover:text-accent transition-colors p-2 rounded-full hover:bg-surface-alt" aria-label="Twitter">
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
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
