'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-xl object-cover" />
              <span className="font-display font-bold text-white uppercase tracking-wider">NOVAFRAMES</span>
            </Link>
            <p className="font-body text-sm text-gray-500 mt-3">Building brands that move.</p>
          </div>

          <div>
            <h4 className="font-body text-sm text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-1">
              {[
                'Brand Strategy',
                'Content',
                'Social Media',
                'Performance Marketing',
                'Lead Generation',
                'Brand Growth'
              ].map(service => (
                <li key={service}>
                  <Link href="/#services" className="font-body text-sm text-gray-400 hover:text-white transition-colors block py-1">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/#about" className="font-body text-sm text-gray-400 hover:text-white transition-colors block py-1">About</Link></li>
              <li><Link href="/#case-studies" className="font-body text-sm text-gray-400 hover:text-white transition-colors block py-1">Our Work</Link></li>
              <li><Link href="/#leadership" className="font-body text-sm text-gray-400 hover:text-white transition-colors block py-1">Team</Link></li>
              <li><Link href="/contact" className="font-body text-sm text-gray-400 hover:text-white transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">Follow</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5">
          <p className="font-body text-xs sm:text-sm text-gray-600 text-center">
            © 2026 NovaFrames. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
