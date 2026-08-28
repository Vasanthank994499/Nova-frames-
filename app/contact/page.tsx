'use client';

import { useState } from 'react';
import { Mail, Instagram, Linkedin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="py-24 sm:py-32 bg-dark text-center">
        <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase">
          START A CONVERSATION
        </h1>
        <p className="text-gray-400 mt-4 font-body text-lg max-w-2xl mx-auto">
          Tell us about your brand and where you want to take it.
        </p>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16">
            
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="font-display text-2xl font-bold text-txt-primary mb-2">Thank you!</h3>
                  <p className="font-body text-txt-secondary">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-txt-primary mb-2">Name</label>
                      <input required type="text" id="name" className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-txt-primary mb-2">Email</label>
                      <input required type="email" id="email" className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-txt-primary mb-2">Company/Brand</label>
                    <input required type="text" id="company" className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-txt-primary mb-2">Service interested in</label>
                      <select required id="service" className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option>Brand Strategy</option>
                        <option>Content</option>
                        <option>Social Media</option>
                        <option>Performance Marketing</option>
                        <option>Lead Generation</option>
                        <option>Brand Growth</option>
                        <option>Full-Service</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-txt-primary mb-2">Budget range</label>
                      <select required id="budget" className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                        <option value="">Select a range...</option>
                        <option>Under ₹25K</option>
                        <option>₹25K–50K</option>
                        <option>₹50K–1L</option>
                        <option>₹1L+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-txt-primary mb-2">Message</label>
                    <textarea required id="message" rows={5} className="w-full bg-surface-alt border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                  </div>

                  <button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent-glow text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider transition-colors">
                    SEND INQUIRY →
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-alt rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Mail className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-txt-primary">Email Us</h4>
                    <a href="mailto:hello@novaframes.in" className="text-txt-secondary hover:text-accent transition-colors">hello@novaframes.in</a>
                  </div>
                </div>
              </div>

              <div className="bg-surface-alt rounded-2xl p-8 border border-gray-100">
                <h4 className="font-semibold text-txt-primary mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-txt-secondary hover:text-accent hover:-translate-y-1 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-txt-secondary hover:text-accent hover:-translate-y-1 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-dark rounded-2xl p-8">
                <h4 className="font-display font-semibold text-white mb-2">Response Time</h4>
                <p className="text-gray-400 text-sm">We typically respond within 24 hours.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
