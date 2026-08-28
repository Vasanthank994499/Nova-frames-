"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Creative + Commercial",
    description:
      "Beautiful content means nothing if it doesn't contribute to the business.",
  },
  {
    title: "Strategy Before Execution",
    description:
      "We don't start with \"What should we post?\" We start with: \"What does the brand need to achieve?\"",
  },
  {
    title: "Built Around Your Brand",
    description:
      "No recycled strategies. No copy-paste content calendars. Your market, your audience, your opportunity.",
  },
  {
    title: "Obsessed With Results",
    description:
      "Followers are useful. Reach is useful. But business growth is the real scoreboard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function WhyNovaFrames() {
  return (
    <section id="why-novaframes" className="py-20 sm:py-28 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="editorial-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-txt-primary mb-14 sm:mb-20 max-w-4xl">
            WE'RE NOT HERE TO MAKE YOUR BRAND LOOK BUSY.
            <br />
            WE'RE HERE TO MAKE IT MATTER.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 border border-gray-100 rounded-2xl hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="font-display text-lg sm:text-xl font-bold text-txt-primary uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-txt-muted mt-3 sm:mt-4 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
