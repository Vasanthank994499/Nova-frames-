"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
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
          <Link href="/" className="z-50 flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white tracking-tight group">
            <img 
              src="/logo.png" 
              alt="Nova Frames Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-extrabold uppercase tracking-wide">
              Nova<span className="text-accent mx-0.5 mb-1 text-2xl leading-[0]">.</span>Frames
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#video-showcase" className="hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="#leadership" className="hover:text-white transition-colors">
              Team
            </Link>
            <Link href="/clients" className="hover:text-white transition-colors">
              Clients
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-accent hover:bg-accent-glow text-white text-xs uppercase font-semibold tracking-wider transition-all shadow-md shadow-accent/20"
            >
              <span>Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="md:hidden z-50 text-white p-2 sm:p-2.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40"
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
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
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
