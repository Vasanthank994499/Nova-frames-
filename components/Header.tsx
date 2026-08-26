"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileNav from './MobileNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ease-in-out ${
          isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg glass-dark' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="z-50 flex items-center text-lg sm:text-xl font-bold text-surface tracking-tight">
            Nova<span className="text-accent mx-0.5 mb-1 text-2xl leading-[0]">.</span>Frames
          </Link>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="z-50 text-surface p-2 sm:p-2.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label="Toggle Navigation"
          >
            <AnimatePresence mode="wait">
              {isMobileNavOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} className="sm:w-7 sm:h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} className="sm:w-7 sm:h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}
