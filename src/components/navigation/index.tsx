import { useState } from 'react';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}
type Link = { label: string; href: string };

const links: Link[] = [
  { label: 'Features', href: '/' },
  { label: 'How it Works', href: '/' },
  { label: 'Pricing', href: '/' },
  { label: 'About', href: '/' },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className="p-2 text-gray-600"
  >
    <span className="sr-only">Open menu</span>
    {showMenu ? (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className="md:hidden bg-white border-t">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link: Link) => (
        <Link
          key={link.label}
          href={link.href}
          className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-gray-50"
        >
          {link.label}
        </Link>
      ))}
      <div className="border-t pt-4 mt-4">
        <Link href="/login" className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600">
          Sign In
        </Link>
        <Link
          href="/signup"
          className="block mx-3 mt-2 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => setShowMenu((s) => !s);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Halvestor" className="h-8 w-auto" />
              <span className="text-xl font-bold text-primary-600">Halvestor</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-secondary-600 hover:text-primary-600 text-sm font-medium">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="md:hidden">
            <MenuButton toggleMenu={toggleMenu} showMenu={showMenu} />
          </div>
        </div>
      </nav>
      {showMenu && <MobileMenu />}
    </header>
  );
};

export default Navigation;
