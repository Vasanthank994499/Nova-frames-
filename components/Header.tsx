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
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-dark/85 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="z-50 flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white tracking-tight group">
            <img 
              src="/logo.png" 
              alt="Nova Frames Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-extrabold uppercase tracking-wide">
              Nova Frames
            </span>
          </Link>

          {/* 3-Dash Menu Button Alone */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="z-50 text-white p-2 sm:p-2.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label="Toggle Navigation Menu"
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
