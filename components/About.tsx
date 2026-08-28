'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-20 sm:py-28 md:py-32 bg-surface" ref={ref}>
      <motion.div 
        className="max-w-5xl mx-auto px-6 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="editorial-heading font-display font-bold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-txt-primary">
          <span className="block">YOUR BRAND DOESN'T NEED MORE CONTENT.</span>
          <span className="block">IT NEEDS A REASON TO BE REMEMBERED.</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mt-10 sm:mt-14 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-txt-secondary leading-relaxed max-w-3xl font-body">
          <p>The internet is full of brands posting. Very few brands actually stand out. NovaFrames exists to change that.</p>
          <p>We combine creative thinking, strategic positioning, content and performance marketing to turn businesses into brands people recognize — and turn attention into measurable growth.</p>
          <p>We don't believe in creating content just to fill a calendar.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
          <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5 border-b border-gray-100 text-left">
            <span className="font-display text-accent text-xl sm:text-2xl font-bold">01</span>
            <p className="font-body text-base sm:text-lg text-txt-primary">Every idea needs a purpose.</p>
          </div>
          <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5 border-b border-gray-100 text-left">
            <span className="font-display text-accent text-xl sm:text-2xl font-bold">02</span>
            <p className="font-body text-base sm:text-lg text-txt-primary">Every campaign needs a direction.</p>
          </div>
          <div className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5 text-left">
            <span className="font-display text-accent text-xl sm:text-2xl font-bold">03</span>
            <p className="font-body text-base sm:text-lg text-txt-primary">Every piece of content needs to move the brand forward.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
