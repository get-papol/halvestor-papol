import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-[#1673ac] rounded-2xl px-10 py-5 flex items-center justify-between shadow-lg">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
              <Image
                src="/logo.svg" // change to /logo.png if needed
                alt="Halvestor"
                width={36}
                height={36}
                priority
                className="object-contain"
              />
            </div>
            <span className="text-white text-xl font-semibold tracking-wide">Halvestor</span>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-white/90 font-medium">
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <Link href="/signin" className="text-white/80 hover:text-white transition font-medium">
              Sign In
            </Link>

            {/* PILL-STYLE PRIMARY CTA */}
            <Link
              href="/get-the-app"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-3.5
                rounded-full
                bg-white
                text-[#1673ac]
                font-semibold
                text-sm
                hover:opacity-90
                transition
              "
            >
              Get the App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
