'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: "01",
    title: "BRAND POSITIONING",
    desc: "We define what makes your brand different — and build a digital identity around it."
  },
  {
    number: "02",
    title: "CONTENT",
    desc: "Reels, campaigns, storytelling and visual experiences designed to earn attention."
  },
  {
    number: "03",
    title: "SOCIAL MEDIA",
    desc: "We build communities, not just follower counts."
  },
  {
    number: "04",
    title: "PERFORMANCE MARKETING",
    desc: "Strategic paid campaigns designed around enquiries, customers and growth."
  },
  {
    number: "05",
    title: "LEAD GENERATION",
    desc: "We create systems that turn digital attention into genuine business opportunities."
  },
  {
    number: "06",
    title: "BRAND GROWTH",
    desc: "A combination of strategy, creativity and performance built around your business goals."
  }
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="services" className="py-20 sm:py-28 md:py-32 bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-heading font-display font-bold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-14 sm:mb-20"
        >
          FROM ATTENTION TO ACTION.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 sm:gap-y-14"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group border-l-2 border-transparent hover:border-accent pl-0 hover:pl-4 transition-all duration-300 transform hover:translate-x-1"
            >
              <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className="text-accent">{s.number}</span> — {s.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
