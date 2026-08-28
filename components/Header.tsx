'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import MobileNav from './MobileNav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/80 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Nova Frames Logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover" />
            <span className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-[0.15em]">
              NOVAFRAMES
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/#about" className="font-body text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
              About
            </Link>
            <Link href="/#services" className="font-body text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
              Services
            </Link>
            <Link href="/#case-studies" className="font-body text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
              Work
            </Link>
            <Link href="/#leadership" className="font-body text-sm text-gray-300 hover:text-white transition-colors uppercase tracking-wider">
              Team
            </Link>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-glow text-white px-5 py-2 rounded-full text-sm font-semibold ml-2 transition-colors"
            >
              Start a Conversation →
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
