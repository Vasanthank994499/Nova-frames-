'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "NovaFrames didn't just handle our social media. They understood our brand and helped us generate real business.",
    client: "Brand Partner, Jewellery Industry",
  },
  {
    quote: "They brought structure, strategy and creativity to everything. The results spoke for themselves.",
    client: "Founder, Real Estate Brand",
  },
  {
    quote: "We went from having no digital presence to generating leads every single week. That's the NovaFrames difference.",
    client: "Business Owner, Retail",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-28 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="editorial-heading text-3xl sm:text-4xl md:text-5xl text-txt-primary mb-14 sm:mb-20 uppercase">
          DON'T TAKE OUR WORD FOR IT.
        </h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-txt-primary leading-relaxed italic">
                "{testimonials[activeIndex].quote}"
              </p>
              <p className="font-body text-sm sm:text-base text-txt-muted mt-6 sm:mt-8">
                — {testimonials[activeIndex].client}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-accent' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
