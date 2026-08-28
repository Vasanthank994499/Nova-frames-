'use client';

import { motion } from 'framer-motion';
import { Sparkles, Film, Users, TrendingUp, Target, Rocket } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Brand Positioning',
    description: 'We define what makes your brand different — and build a distinct digital identity around it.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Content & Storytelling',
    description: 'Reels, campaigns, storytelling and visual experiences designed to earn genuine audience attention.',
    icon: Film,
  },
  {
    number: '03',
    title: 'Social Media',
    description: 'We build active communities and customer relationships, not just vanity follower counts.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Performance Marketing',
    description: 'Strategic paid campaigns designed around enquiries, qualified customers, and measurable ROI.',
    icon: TrendingUp,
  },
  {
    number: '05',
    title: 'Lead Generation',
    description: 'We create reliable systems that turn digital attention into high-intent business opportunities.',
    icon: Target,
  },
  {
    number: '06',
    title: 'Brand Growth',
    description: 'A cohesive combination of strategy, creativity, and performance built around your business goals.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">
            From Attention To Action.
          </h2>
          <p className="text-txt-muted mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            We deliver end-to-end digital solutions designed to position your brand, capture demand, and drive measurable revenue.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-surface-alt border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <service.icon size={24} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-accent/60 tracking-wider">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-txt-primary group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-txt-muted mt-2 sm:mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
