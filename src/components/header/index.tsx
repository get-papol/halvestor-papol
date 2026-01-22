import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-[#1673ac] rounded-2xl px-10 py-5 flex items-center justify-between shadow-lg">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                <Image src="/logo.svg" alt="Halvestor" width={36} height={36} priority />
              </div>
              <span className="text-white text-xl font-semibold">Halvestor</span>
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-10 text-white/90 font-medium">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">
              <Link href="/signin" className="text-white/80 hover:text-white font-medium">
                Sign In
              </Link>

              {/* 🔥 HIGHLIGHTED CTA — LIKE SIGN UP IN IMAGE */}
              <Link
                href="/get-the-app"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-2.5
                  rounded-full
                  bg-[#0f4f7a]          /* deep brand blue */
                  text-white
                  font-semibold
                  text-sm
                  border
                  border-[#7a4a2e]      /* brown accent stroke */
                  shadow-md
                  hover:bg-[#0d456b]
                  transition
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* PAGE BODY PLACEHOLDER */}
      <main className="min-h-screen bg-[#f4f9fd]" />
    </>
  );
}
