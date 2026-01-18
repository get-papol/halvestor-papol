import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import { motion, Variants } from 'framer-motion';
import Footer from '@/components/footer';

/* ------------------ ANIMATIONS ------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <Page>
      <NextSeo title="About Us · Halvestor" />

      <main style={{ backgroundColor: '#eaf4fb' }}>
        {/* ABOUT SECTION */}
        <section className="py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#0b4f78] mb-3">About Halvestor</h1>

            <p className="text-lg text-[#1e6fa8] leading-relaxed">
              Halvestor is built to make Sharia-compliant and ethical investing simple, transparent, and accessible. We
              remove guesswork and manual effort so investors can invest with confidence and peace of mind.
            </p>
          </motion.div>
        </section>

        {/* GLOBAL FOOTER */}
        <Footer />
      </main>
    </Page>
  );
}
