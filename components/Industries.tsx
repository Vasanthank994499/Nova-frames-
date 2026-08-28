"use client";

import { motion } from "framer-motion";

const industries = [
  "Jewellery",
  "Fashion & Retail",
  "Real Estate",
  "Food & Hospitality",
  "Fitness & Lifestyle",
  "Consumer Brands",
  "Local Businesses",
  "Emerging Brands",
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

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 md:py-32 bg-dark">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
            BUILT FOR AMBITIOUS BRANDS.
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16">
            We work across industries where strong positioning and digital growth
            can create a real competitive advantage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={pillVariants}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10 text-sm sm:text-base text-gray-300 font-body hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
