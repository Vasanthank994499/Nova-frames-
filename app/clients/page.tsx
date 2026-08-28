'use client';

import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 'case-study-1',
    metric: '300%',
    metricLabel: 'Increase in Qualified Leads',
    title: 'Transforming a Legacy Brand',
    description: 'We took a 20-year-old traditional business and completely revamped their digital presence, resulting in unprecedented inbound inquiries within 90 days.',
    shift: 'From purely offline word-of-mouth → Predictable online revenue engine.',
    tags: ['Brand Strategy', 'Performance Marketing', 'Lead Generation']
  },
  {
    id: 'case-study-2',
    metric: '10x',
    metricLabel: 'Social Engagement Growth',
    title: 'A New Voice for Retail',
    description: 'Through targeted content creation and consistent community management, we helped this rising retail star dominate their niche on Instagram.',
    shift: 'From sporadic posts → A cohesive, community-driven social brand.',
    tags: ['Content', 'Social Media', 'Brand Growth']
  },
  {
    id: 'case-study-3',
    metric: '50k+',
    metricLabel: 'New Monthly Site Visitors',
    title: 'Scaling D2C E-commerce',
    description: 'A comprehensive performance marketing overhaul combined with conversion rate optimization led to record-breaking sales months.',
    shift: 'From high bounce rates → A high-converting digital storefront.',
    tags: ['Performance Marketing', 'Brand Growth']
  },
  {
    id: 'case-study-4',
    metric: 'Top 3',
    metricLabel: 'Market Positioning',
    title: 'B2B Authority Building',
    description: 'We helped a specialized B2B firm articulate their unique value proposition, elevating them from a vendor to an industry thought leader.',
    shift: 'From price competing → Premium market positioning.',
    tags: ['Brand Strategy', 'Content']
  }
];

export default function ClientsPage() {
  return (
    <main>
      <section className="py-24 sm:py-32 bg-dark text-center">
        <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase">
          OUR WORK
        </h1>
        <p className="text-gray-400 mt-4 font-body text-lg max-w-2xl mx-auto">
          Selected NovaFrames growth stories.
        </p>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-12 sm:space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              id={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface-alt border border-gray-100 rounded-2xl p-6 sm:p-8 md:p-10"
            >
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-accent">
                    {study.metric}
                  </span>
                  <p className="font-body text-sm font-semibold text-txt-primary mt-2 uppercase tracking-wide">
                    {study.metricLabel}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-txt-primary mb-4">
                    {study.title}
                  </h3>
                  <p className="font-body text-base text-txt-secondary leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <p className="font-body text-sm text-accent-glow font-medium mb-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                    <span className="font-bold text-accent">THE SHIFT:</span> {study.shift}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-white border border-gray-200 rounded-full text-txt-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
