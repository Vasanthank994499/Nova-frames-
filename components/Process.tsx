'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: "01", title: "DISCOVER", desc: "We understand your business, audience, market and competition." },
  { num: "02", title: "POSITION", desc: "We find your strongest market position and define how your brand should be perceived." },
  { num: "03", title: "CREATE", desc: "We turn strategy into content, campaigns and creative experiences." },
  { num: "04", title: "DISTRIBUTE", desc: "We put the right message in front of the right audience." },
  { num: "05", title: "OPTIMISE", desc: "We study what works, improve what doesn't and keep moving forward." },
  { num: "06", title: "GROW", desc: "More attention. More trust. More enquiries. More business." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-heading font-display font-bold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl text-txt-primary mb-14 sm:mb-20 max-w-4xl"
        >
          THINK DIFFERENT. CREATE BETTER. GROW FASTER.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative">
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-accent/10 select-none">
                {step.num}
              </div>
              <div className="-mt-6 sm:-mt-8 relative z-10">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-txt-primary uppercase tracking-wide">
                    {step.num} — {step.title}
                  </h3>
                </div>
                <div className="mt-4 w-12 h-0.5 bg-accent/20"></div>
                <p className="font-body text-sm sm:text-base text-txt-muted mt-4 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
