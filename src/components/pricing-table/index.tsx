import Button from '@/components/button';

const CheckIcon = () => (
  <svg className="h-8 w-8 mr-3 mb-1 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const features = [
  `Laboris nulla`,
  `Lorem pariatur nisi`,
  `Id aute amet pariatur`,
  `Do duis sint aliquip`,
  `Nostrud duis tempor`,
  `Consequat eiusmod`,
  `Reprehenderit`,
  `Adipisicing reprehenderit`,
];

const PricingTable = () => (
  <section className="bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12">
    <div className="relative max-w-7xl mx-auto mb-24">
      <div className="overflow-hidden lg:max-w-none lg:flex">
        <div className="py-8 px-6 md:px-0 lg:flex-shrink-1">
          <h2 className="text-4xl lg:text-7xl font-bold text-gray-800 mb-12">Are you ready?</h2>
          <p className="mt-6 text-base leading-6 text-gray-500">
            Lorem id ullamco pariatur eiusmod labore qui deserunt incididunt deserunt nostrud. Tempor duis in
            adipisicing exercitation ipsum nostrud esse. Reprehenderit cupidatat sint est deserunt id eiusmod amet
            aliqua officia.
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h3 className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                What is included
              </h3>
              <div className="flex-1 border-t-2 border-gray-200" />
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2">
              {features.map((feature) => (
                <li className="flex items-center lg:col-span-1" key={feature}>
                  <div className="flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
          <p className="text-lg font-medium text-gray-800">If you order now...</p>
          <div className="my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800">
            $99/mo
          </div>
          <Button primary modifier="mt-6">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
