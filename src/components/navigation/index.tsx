import { useState } from 'react';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}
type Link = { label: string; href: string };

const links: Link[] = [
  { label: 'Services', href: '/' },
  { label: 'Benefits', href: '/' },
  { label: 'Our process', href: '/' },
  { label: 'FAQs', href: '/' },
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
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link: Link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => setShowMenu((s) => !s);

  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Brand
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
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
