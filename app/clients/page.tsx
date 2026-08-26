'use client';

import { motion } from 'framer-motion';

const clients = [
  {
    name: 'TechVault Inc.',
    industry: 'Technology',
    description: 'A leading SaaS platform that needed a complete brand overhaul and digital marketing strategy to penetrate new B2B markets.',
    services: ['Brand Strategy', 'Paid Ads', 'Web Development'],
  },
  {
    name: 'RetailMax',
    industry: 'E-Commerce',
    description: 'Fast-growing D2C brand seeking to scale their social media presence and optimize conversion funnels across platforms.',
    services: ['Social Media', 'Content Creation', 'Performance Marketing'],
  },
  {
    name: 'Luxora Living',
    industry: 'Luxury Lifestyle',
    description: 'Premium lifestyle brand requiring sophisticated visual identity and influencer marketing campaigns.',
    services: ['Visual Identity', 'Influencer Marketing', 'Video Production'],
  },
  {
    name: 'Greenfield Co.',
    industry: 'Sustainability',
    description: 'Eco-conscious startup aiming to build brand awareness and community engagement through purpose-driven content.',
    services: ['Brand Growth', 'Community Building', 'Content Strategy'],
  },
  {
    name: 'Meridian Labs',
    industry: 'Healthcare',
    description: 'Health-tech company needing a modern web presence and targeted lead generation campaigns.',
    services: ['UI/UX Design', 'Web Development', 'Lead Generation'],
  },
  {
    name: 'Atlas Digital',
    industry: 'Finance',
    description: 'Fintech startup requiring comprehensive digital marketing and brand positioning in a competitive market.',
    services: ['Digital Marketing', 'Brand Positioning', 'SEO'],
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

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 sm:py-32 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-accent uppercase tracking-widest text-xs sm:text-sm font-semibold">Our Clients</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4 tracking-tight">Brands We&apos;ve Helped Grow</h1>
          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Discover how we&apos;ve partnered with ambitious brands across industries to drive growth, enhance visibility, and create lasting impact in the digital landscape.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface-alt border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col h-full"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-txt-primary">{client.name}</h3>
                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mt-2">
                    {client.industry}
                  </span>
                  <p className="text-txt-muted mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed flex-grow">
                    {client.description}
                  </p>
                </div>
                <div className="mt-auto pt-5 sm:pt-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {client.services.map((service, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-surface-muted text-txt-secondary text-xs rounded-full">
                        {service}
                      </span>
                    ))}
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
