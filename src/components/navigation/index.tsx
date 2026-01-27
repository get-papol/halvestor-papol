'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* LOGO - LEFT CORNER - BIGGER */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="flex items-center">
              <div className="w-48 h-16 flex items-center justify-center">
                <Image src="/logo.svg" alt="Halvestor" width={200} height={80} priority className="object-contain" />
              </div>
            </Link>
          </motion.div>

          {/* NAV LINKS - CENTER/RIGHT - BIGGER TEXT */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="px-5 py-2.5 rounded-lg text-base font-medium text-[#1e6fa8] hover:text-[#0b4f78] hover:bg-[#eaf4fb] transition-all duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* ACTIONS - RIGHT - BIGGER */}
          <div className="flex items-center gap-4">
            {/* SIGN IN - BIGGER */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signin"
                className="px-5 py-2.5 rounded-lg text-base font-medium text-[#1172af] hover:text-[#0b4f78] hover:bg-[#eaf4fb] transition-all duration-200"
              >
                Sign In
              </Link>
            </motion.div>

            {/* PRIMARY CTA - BIGGER */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(17, 114, 175, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-[#1172af] px-7 py-3 text-base font-semibold text-white shadow-md hover:bg-[#0e5f96] transition-all duration-200"
              >
                Get the App
              </Link>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <button className="lg:hidden p-2 rounded-lg text-[#1172af] hover:bg-[#eaf4fb] transition">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
