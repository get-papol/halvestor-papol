import Link from 'next/link';
import Button from '@/components/button';

const productLinks = [`Features`, `How it Works`, `Security`, `Pricing`, `Halal Screening`, `Investment Options`];
const aboutLinks = [`About Us`, `Our Mission`, `Islamic Finance`, `Blog`, `Contact`, `Support`];
const resourceLinks = [
  `Get Started`,
  `Investment Guide`,
  `Halal Investing 101`,
  `FAQs`,
  `Help Center`,
  `Educational Resources`,
];

const Footer = () => (
  <footer className="bg-secondary-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-8 lg:px-0 flex flex-wrap">
      <div className="mb-14 flex items-center w-full">
        <img className="h-10 w-auto mr-3" src="/logo.png" alt="Halvestor logo" width={48} height={48} />
        <p className="text-3xl text-white font-bold">Halvestor</p>
      </div>
      <div className="w-full lg:w-1/2">
        <ul className="text-lg font-light flex flex-wrap w-full">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-white text-base font-bold mb-4">Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li
                    className="text-secondary-300 text-sm font-medium leading-6 mb-2 hover:text-white transition-colors"
                    key={link}
                  >
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-white text-base font-bold mb-4">Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li
                    className="text-secondary-300 text-sm font-medium leading-6 mb-2 hover:text-white transition-colors"
                    key={link}
                  >
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-white text-base font-bold mb-4">Company</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li
                    className="text-secondary-300 text-sm font-medium leading-6 mb-2 hover:text-white transition-colors"
                    key={link}
                  >
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <div className="border border-secondary-700 rounded-lg py-6 px-6 bg-secondary-800">
          <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
          <p className="text-secondary-300 mb-4">Get the latest news about halal investing and new features.</p>
          <div className="flex w-full">
            <input
              aria-label="email address"
              type="email"
              className="border border-secondary-600 bg-secondary-700 min-w-0 w-full rounded-l-md text-white py-3 px-4 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
            />
            <Button modifier="rounded-l-none bg-primary-600 hover:bg-primary-700 border-primary-600">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 lg:px-0 mt-12 pt-8 border-t border-secondary-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary-400 text-sm">
          © 2024 Halvestor. All rights reserved. | Designed for Muslim investors worldwide.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="text-secondary-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-secondary-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
