import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Waitlist() {
  return (
    <main className="min-h-screen bg-[#eaf4fb] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl w-full text-center bg-white rounded-2xl shadow-xl p-10"
      >
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b4f78]">Join the Halvestor Waitlist</h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-lg text-[#1e6fa8]">
          Be among the first to access a Sharia-compliant investing platform built on transparency, trust, and
          faith-aligned principles.
        </p>

        {/* FORM */}
        <form className="mt-8 space-y-4">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="
              w-full
              rounded-lg
              border
              border-[#cfe4f3]
              px-4
              py-3
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-[#1172af]
            "
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="
              w-full
              rounded-lg
              bg-[#1172af]
              px-6
              py-3
              text-base
              font-semibold
              text-white
              hover:bg-[#0e5f96]
              transition
            "
          >
            Secure My Spot
          </motion.button>
        </form>

        {/* TRUST TEXT */}
        <p className="mt-6 text-sm text-[#4a7fa6]">No spam. Early access updates only.</p>

        {/* BACK LINK */}
        <div className="mt-6">
          <Link href="/" className="text-sm font-medium text-[#1172af] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
