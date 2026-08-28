'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Team', href: '/#leadership' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-40 bg-dark-alt/95 backdrop-blur-xl flex flex-col"
        >
          <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-10 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <img src="/logo.png" alt="Logo" className="w-14 h-14 rounded-2xl object-cover" />
            </motion.div>

            <nav className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="bg-accent text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider inline-block"
              >
                Start a Conversation →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-10 flex gap-6"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
