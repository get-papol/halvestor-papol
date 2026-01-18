import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import { motion, Variants } from 'framer-motion';

/* ------------------ ANIMATIONS (TYPE-SAFE) ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const phoneFloat: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ------------------ PAGE ------------------ */

export default function GetTheApp() {
  return (
    <Page>
      <NextSeo title="Get the App · Halvestor" />

      <main className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#eaf4fb' }}>
        <section className="w-full max-w-5xl bg-white/95 backdrop-blur rounded-3xl shadow-xl px-10 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT: CONTENT */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
              <h1 className="text-4xl font-semibold text-[#0b4f78] mb-4">Get the Halvestor App</h1>

              <p className="text-lg text-[#1e6fa8] mb-6">
                Invest with confidence using a platform built for Sharia-compliant and ethical investing — with
                transparency and automation at its core.
              </p>

              <ul className="space-y-3 text-[#0b4f78] mb-8">
                <li>• Sharia-compliant stock screening</li>
                <li>• Automatic purification & zakat calculation</li>
                <li>• Certified compliance & full transparency</li>
                <li>• Donate purified funds directly to charities</li>
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled
                  className="px-6 py-3 rounded-xl bg-[#9ac9e6] text-[#0b5f91] font-semibold cursor-not-allowed"
                >
                  Get the App on App Store
                </button>

                <button
                  disabled
                  className="px-6 py-3 rounded-xl bg-[#9ac9e6] text-[#0b5f91] font-semibold cursor-not-allowed"
                >
                  Get the App on Google Play
                </button>
              </div>

              <p className="mt-4 text-sm text-[#6b8fa8]">App screenshots and download links will be available soon.</p>
            </motion.div>

            {/* RIGHT: ANIMATED APP PREVIEWS */}
            <motion.div
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <div className="relative flex gap-6">
                {/* PHONE 1 */}
                <motion.div
                  variants={phoneFloat}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  className="w-40 h-80 rounded-3xl bg-gradient-to-b from-[#cfe6f5] to-[#9ac9e6] shadow-lg flex items-center justify-center text-sm text-[#0b4f78]"
                >
                  App Screen
                </motion.div>

                {/* PHONE 2 */}
                <motion.div
                  variants={phoneFloat}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                  whileHover={{ y: -8 }}
                  className="w-40 h-80 rounded-3xl bg-gradient-to-b from-[#cfe6f5] to-[#9ac9e6] shadow-lg flex items-center justify-center text-sm text-[#0b4f78] mt-8"
                >
                  App Screen
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Page>
  );
}
