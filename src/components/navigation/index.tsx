import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy & GDPR', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function Navigation() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="matt-header matt-header--blue flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image src="/logo.png" alt="Halvestor" width={48} height={48} className="h-12 w-auto" priority />
              <span className="brand-text">Halvestor</span>
            </Link>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="nav-item px-4 py-2 rounded-full text-sm font-medium no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-sm text-white/90 hover:text-white no-underline">
              Sign In
            </Link>

            {/* GET STARTED BUTTON (RESTORED) */}
            <Link
              href="/signup"
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-semibold no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
