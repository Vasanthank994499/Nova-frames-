'use client'

import { motion } from 'framer-motion'
import { Megaphone, TrendingUp, Palette, Code } from 'lucide-react'

const services = [
  {
    title: 'Digital Marketing',
    description: 'Data-driven campaigns across paid social, search, and programmatic channels that maximize ROI and scale revenue.',
    icon: Megaphone,
  },
  {
    title: 'Brand Growth & Performance',
    description: 'Strategic brand positioning, performance marketing, and growth frameworks that turn startups into market leaders.',
    icon: TrendingUp,
  },
  {
    title: 'Graphic Design & Visual Identity',
    description: 'Stunning visual systems, brand guidelines, social media creatives, and print collateral that demand attention.',
    icon: Palette,
  },
  {
    title: 'Website Development & UI/UX',
    description: 'Conversion-optimized websites and apps with pixel-perfect UI/UX design, built on modern tech stacks.',
    icon: Code,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-accent font-semibold">What We Do</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-txt-primary mt-2 tracking-tight">Services Built to Scale</h3>
          <p className="text-txt-muted mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
            We deliver end-to-end digital solutions designed to accelerate your growth and elevate your brand presence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-surface-alt border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <service.icon size={28} strokeWidth={2} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-txt-primary">{service.title}</h4>
                <p className="text-txt-muted mt-2 sm:mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
