"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Clients & Case Studies', href: '/clients' },
  { name: 'Portfolio Reel', href: '/#video-showcase' },
  { name: 'Our Team', href: '/team' },
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
      staggerChildren: 0.1, 
      delayChildren: 0.2 
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
          className="fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-10 py-24 sm:py-28 overflow-y-auto"
        >
          <div className="my-auto w-full">
            <nav className="flex flex-col space-y-6 sm:space-y-8 items-center text-center w-full">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-surface transition-colors duration-300 hover:text-accent inline-block group py-1"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <motion.div 
            variants={linkVariants}
            className="pt-8 flex justify-center space-x-6 sm:space-x-8 text-surface/80"
          >
            <a href="#" className="p-2 hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="p-2 hover:text-accent hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a href="#" className="p-2 hover:text-accent hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
