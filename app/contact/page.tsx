'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 sm:py-32 bg-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-accent uppercase tracking-widest text-xs sm:text-sm font-semibold">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-4 tracking-tight">Let&apos;s Build Something Great</h1>
          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
            Ready to elevate your brand? Fill out the form below and our team will get back to you within 24 hours to discuss your project.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {isSubmitted ? (
                <div className="bg-surface-alt border border-gray-200 rounded-2xl p-8 sm:p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-txt-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-txt-muted text-sm sm:text-base max-w-md">
                    Thank you for reaching out. One of our team members will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 sm:mt-8 px-6 py-2.5 bg-surface-muted text-txt-secondary text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        placeholder="Your Email" 
                        className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="sr-only">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Company Name (Optional)" 
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="sr-only">Service Interest</label>
                    <select 
                      id="service" 
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition appearance-none"
                    >
                      <option value="" disabled className="text-txt-muted">Select a Service...</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="brand-growth">Brand Growth & Performance</option>
                      <option value="graphic-design">Graphic Design & Visual Identity</option>
                      <option value="web-dev">Website Development & UI/UX</option>
                      <option value="video-production">Video Production</option>
                      <option value="full-service">Full-Service Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="sr-only">Budget Range</label>
                    <select 
                      id="budget" 
                      required 
                      defaultValue=""
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition appearance-none"
                    >
                      <option value="" disabled>Select Budget Range...</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required
                      placeholder="Tell us about your project..." 
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-accent hover:bg-accent-glow text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300 shadow-md hover:shadow-lg active:scale-98"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-surface-alt rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-txt-primary mb-5 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Office Location</p>
                      <a 
                        href="https://maps.app.goo.gl/bT5u4kWdxTYabLfn8?g_st=ac" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-txt-muted hover:text-accent text-xs sm:text-sm mt-0.5 block transition-colors leading-relaxed break-words"
                      >
                        Novaframes, Sokkaramman Nagar, Kuruppanaickenpalayam, Tamil Nadu 638301
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Phone</p>
                      <a href="tel:+917826069557" className="text-txt-muted hover:text-accent text-xs sm:text-sm mt-0.5 block transition-colors">
                        +91 78260 69557
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Email</p>
                      <a href="mailto:hello@novaframes.in" className="text-txt-muted hover:text-accent text-xs sm:text-sm mt-0.5 block transition-colors break-all">
                        hello@novaframes.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Hours</p>
                      <p className="text-txt-muted text-xs sm:text-sm mt-0.5">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8">
                  <h4 className="text-xs sm:text-sm font-bold text-txt-primary mb-3 sm:mb-4">Follow Us</h4>
                  <div className="flex gap-3 sm:gap-4">
                    <a 
                      href="https://www.instagram.com/nova_.frames?igsi=MWp2OXk4bjIxZmRjaw==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-muted flex items-center justify-center text-txt-secondary hover:bg-accent hover:text-white transition-colors" 
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-muted flex items-center justify-center text-txt-secondary hover:bg-accent hover:text-white transition-colors" aria-label="Facebook">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-muted flex items-center justify-center text-txt-secondary hover:bg-accent hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
