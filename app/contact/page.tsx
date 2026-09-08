'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);

    try {
      // Background Next.js API dispatch
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('API submission error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi NovaFrames! I submitted an inquiry on your website:\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Service: ${formData.service || 'General Inquiry'}\n` +
    `Budget: ${formData.budget || 'Not specified'}\n` +
    `Message: ${formData.message}`
  );

  return (
    <div className="min-h-screen">
      {/* Hidden iframe for seamless zero-redirect native submission */}
      <iframe name="formsubmit_frame" id="formsubmit_frame" className="hidden" style={{ display: 'none' }} />

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
                <div className="bg-surface-alt border border-gray-200 rounded-2xl p-8 sm:p-12 text-center h-full flex flex-col items-center justify-center animate-fadeIn shadow-sm">
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-accent mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-bold text-txt-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-txt-muted text-sm sm:text-base max-w-md leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-txt-primary">{formData.name || 'there'}</span>! Your inquiry details have been delivered to our inbox. We will review your project and get in touch with you at <span className="font-medium text-accent">{formData.email}</span> within 24 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 sm:mt-8">
                    <a
                      href={`https://wa.me/917826069557?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Instant Chat on WhatsApp</span>
                    </a>
                    <button 
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-surface-muted text-txt-secondary hover:text-txt-primary text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/novaframes02@gmail.com"
                  method="POST"
                  target="formsubmit_frame"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* FormSubmit Configuration Inputs */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value={`⚡ New NovaFrames Client Inquiry: ${formData.name || 'Visitor'} (${formData.service || 'General'})`} />
                  <input type="hidden" name="_replyto" value={formData.email} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
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
                      name="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name (Optional)" 
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="sr-only">Service Interest</label>
                    <select 
                      id="service" 
                      name="Interested Service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition appearance-none"
                    >
                      <option value="" disabled className="text-txt-muted">Select a Service...</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Brand Growth & Performance">Brand Growth & Performance</option>
                      <option value="Graphic Design & Visual Identity">Graphic Design & Visual Identity</option>
                      <option value="Website Development & UI/UX">Website Development & UI/UX</option>
                      <option value="Video Production & Reels">Video Production & Reels</option>
                      <option value="Full-Service Brand Scaling">Full-Service Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="sr-only">Budget Range</label>
                    <select 
                      id="budget" 
                      name="Budget Range"
                      required 
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition appearance-none"
                    >
                      <option value="" disabled>Select Budget Range...</option>
                      <option value="Under 25,000 INR">Under 25,000 INR</option>
                      <option value="25,000 to 50,000 INR">25,000 to 50,000 INR</option>
                      <option value="50,000 to 1,00,000 INR">50,000 to 1,00,000 INR</option>
                      <option value="1,00,000 INR +">1,00,000 INR +</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea 
                      id="message" 
                      name="Project Message"
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..." 
                      className="w-full px-4 py-3 bg-surface-alt border border-gray-200 rounded-xl text-sm sm:text-base text-txt-primary placeholder:text-txt-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-glow disabled:opacity-75 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Submit Inquiry</span>
                    )}
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
              <div className="bg-surface-alt border border-gray-200 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-txt-primary mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Our Studio</p>
                      <p className="text-txt-muted text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Novaframes, Sokkaramman Nagar, Kuruppanaickenpalayam, Tamil Nadu 638301
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Direct Call</p>
                      <a href="tel:+918940279776" className="text-txt-muted hover:text-accent text-xs sm:text-sm mt-0.5 block transition-colors">
                        +91 89402 79776
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-txt-primary">Email</p>
                      <a href="mailto:novaframes02@gmail.com" className="text-txt-muted hover:text-accent text-xs sm:text-sm mt-0.5 block transition-colors break-all">
                        novaframes02@gmail.com
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

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-xs sm:text-sm font-semibold text-txt-primary mb-4">Connect on Social</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.instagram.com/novaframes" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-xl bg-surface border border-gray-200 flex items-center justify-center text-txt-muted hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/novaframes" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-xl bg-surface border border-gray-200 flex items-center justify-center text-txt-muted hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/nova-frames" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-xl bg-surface border border-gray-200 flex items-center justify-center text-txt-muted hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div>
  );
}
