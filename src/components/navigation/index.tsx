import Link from 'next/link';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function Navigation() {
  return (
    <header className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img src="/logo.png" alt="Halvestor" className="h-12 w-auto" />
          <span className="brand-text">Halvestor</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="px-4 py-2 text-sm font-medium no-underline">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/signin" className="text-sm">
          Sign In
        </Link>
      </div>
    </header>
  );
}
