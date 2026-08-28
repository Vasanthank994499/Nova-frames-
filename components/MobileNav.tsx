"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Featured Reels & Work', href: '/#video-showcase' },
  { name: 'Clients & Case Studies', href: '/clients' },
  { name: 'Our Team & Leadership', href: '/team' },
  { name: 'Contact / Book Inquiry', href: '/contact' },
];

const containerVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 200, 
      staggerChildren: 0.08, 
      delayChildren: 0.15 
    }
  },
  exit: { 
    x: '100%',
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: 'spring', damping: 20, stiffness: 100 } 
  }
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-12 py-16 sm:py-24 overflow-y-auto overscroll-contain"
        >
          <div className="my-auto py-4 w-full max-w-lg mx-auto">
            {/* Logo Badge */}
            <div className="flex justify-center mb-6 sm:mb-10">
              <img 
                src="/logo.png" 
                alt="Nova Frames Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain shadow-2xl border border-white/10 p-1 bg-black/30"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3 sm:space-y-6 items-center text-center w-full">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants} className="w-full">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-lg sm:text-2xl md:text-3xl font-semibold text-white transition-colors duration-300 hover:text-accent inline-flex items-center justify-center min-h-[44px] px-4 py-2 group w-full sm:w-auto"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Quick Action Button */}
            <motion.div variants={linkVariants} className="mt-6 sm:mt-10 flex justify-center">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-3 rounded-full bg-accent hover:bg-accent-glow active:scale-[0.98] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-lg shadow-accent/30 min-h-[44px]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom Social Links */}
          <motion.div 
            variants={linkVariants}
            className="pt-8 flex justify-center space-x-6 sm:space-x-8 text-white/70"
          >
            <a 
              href="https://www.instagram.com/nova_.frames?igsi=MWp2OXk4bjIxZmRjaw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300" 
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
