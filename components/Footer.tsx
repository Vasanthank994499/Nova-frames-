'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-100 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-xl font-bold text-txt-primary">
              <img 
                src="/logo.png" 
                alt="Nova Frames Logo" 
                className="w-8 h-8 rounded-xl object-contain shadow-sm"
              />
              <span>Nova Frames<span className="text-accent">.</span></span>
            </div>
            <p className="text-sm text-txt-muted mt-3 sm:mt-4 leading-relaxed">
              Bridging creativity and data to build digital experiences that perform, inspire, and scale.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-6">
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-alt flex items-center justify-center text-txt-muted hover:bg-accent hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-alt flex items-center justify-center text-txt-muted hover:bg-accent hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-alt flex items-center justify-center text-txt-muted hover:bg-accent hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-txt-primary mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link href="/" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Clients & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Contact / Book Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-txt-primary mb-3 sm:mb-4">
              Services
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
              <li>
                <Link href="/#services" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Brand Positioning
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Content & Storytelling
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-txt-muted hover:text-accent transition-colors block py-1">
                  Lead Generation & Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-txt-primary mb-3 sm:mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-txt-muted leading-relaxed">
                  NovaFrames Creative Studio
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:hello@novaframes.in" className="text-sm text-txt-muted hover:text-accent transition-colors break-all">
                  hello@novaframes.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-gray-100 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-txt-muted">
            © 2026 Nova Frames. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs sm:text-sm text-txt-muted hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs sm:text-sm text-txt-muted hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
