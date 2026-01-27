'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: '#3B82F6' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="text-left mt-12 md:mt-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Invest According to Your Faith
          </motion.h1>

          <motion.p
            className="mt-10 text-lg sm:text-xl text-white leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The first platform designed for Sharia-compliant investing. Discover ethical investment opportunities with
            clarity, transparency, and full compliance.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="mt-14 flex flex-col sm:flex-row gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-lg font-bold text-[#3B82F6] shadow-xl hover:scale-[1.03] transition-transform"
            >
              Join the Waitlist
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-10 py-5 text-lg font-semibold text-white hover:bg-white hover:text-[#3B82F6] transition-all duration-300"
            >
              Learn More ↓
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end mt-20 md:mt-28">
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
            className="cursor-pointer"
          >
            <Image
              src="/hero-app.png"
              alt="Halvestor app preview"
              width={680}
              height={820}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
