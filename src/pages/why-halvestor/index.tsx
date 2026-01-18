// src/pages/why-halvestor/index.tsx

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const StepCard = ({ title, index, primary = false }: { title: string; index: number; primary?: boolean }) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    whileHover={{ y: -6 }}
    className={`relative rounded-2xl px-6 py-6 text-left shadow-lg
      ${primary ? 'bg-gradient-to-br from-[#1172af] to-[#0b4f78] text-white' : 'bg-white text-[#0b4f78]'}`}
  >
    <div
      className={`absolute -top-4 -left-4 h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold
        ${primary ? 'bg-white text-[#0b4f78]' : 'bg-[#1e6fa8] text-white'}`}
    >
      {index}
    </div>
    <p className="mt-4 font-medium">{title}</p>
  </motion.div>
);

export default function WhyHalvestorPage() {
  return (
    <main className="min-h-screen bg-[#eaf4fb] overflow-hidden">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-semibold text-[#0b4f78]"
        >
          Why Halvestor
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-xl text-[#1e6fa8] max-w-3xl mx-auto"
        >
          Investing according to Sharia principles shouldn’t be complicated. We’ve removed unnecessary steps and built a
          simpler, more transparent experience.
        </motion.p>
      </section>

      {/* COMPARISON */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* HALVESTOR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-[#0b4f78]">Halvestor</h2>
              <p className="mt-2 text-[#1e6fa8]">Everything you need, simplified</p>
            </div>

            <div className="relative bg-gradient-to-b from-[#e1f0fb] to-transparent rounded-3xl p-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="space-y-10"
              >
                <StepCard index={1} title="Download the app" primary />
                <StepCard index={2} title="Deposit & invest in Sharia-screened stocks" primary />
                <StepCard index={3} title="Automatic purification, zakat & withdrawals" primary />
              </motion.div>
            </div>
          </motion.div>

          {/* OTHERS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold text-[#0b4f78]">Traditional Platforms</h2>
              <p className="mt-2 text-[#1e6fa8]">Fragmented tools and manual work</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="rounded-3xl bg-white p-10 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                'Download app',
                'Create multiple accounts',
                'Subscribe to services',
                'Link external brokers',
                'Manually track compliance',
                'Calculate purification yourself',
                'Handle zakat separately',
              ].map((text, i) => (
                <StepCard key={text} index={i + 1} title={text} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM MESSAGE */}
      <section className="bg-gradient-to-r from-[#0b4f78] to-[#1172af] py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h3 className="text-3xl font-semibold text-white">Fewer steps. Clear compliance. Total peace of mind.</h3>
          <p className="mt-4 text-lg text-white/90">
            Halvestor brings stock screening, purification, zakat, and transparency into one seamless platform — so you
            can focus on investing with confidence.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
