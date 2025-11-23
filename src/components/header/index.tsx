import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const Header = () => (
  <header className="bg-white min-h-[calc(100vh-6rem)]">
    <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
      <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800">
        Your website, beyond expectations
      </h1>
      <div className="max-w-xl mx-auto">
        <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl">
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div className="mt-10 flex justify-center items-center w-full mx-auto">
        <Button primary>Get started</Button>
        <span className="mx-2">or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className="flex justify-center w-full">
      <div className="mt-4 w-full">
        <p className="font-mono uppercase text-center font-medium text-sm text-gray-600">These folks get it</p>
        <div className="flex items-center justify-center mx-auto flex-wrap">
          <Aws className="m-12 mb-8" width={120} />
          <Netlify className="m-12" width={140} />
          <Nike className="m-12" width={140} />
          <Figma className="m-12" width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
