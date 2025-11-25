import Button from '@/components/button';

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
        <div className="flex items-center justify-center mx-auto flex-wrap gap-8">
          <div className="text-4xl font-bold text-gray-400">AWS</div>
          <div className="text-4xl font-bold text-gray-400">Netlify</div>
          <div className="text-4xl font-bold text-gray-400">Nike</div>
          <div className="text-4xl font-bold text-gray-400">Figma</div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
