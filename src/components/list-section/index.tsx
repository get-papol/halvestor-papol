const listItems = [
  {
    title: `86% prefer alternatives to subscriptions`,
    description: `Most respondents prefer anything other than a subscription-based model when it comes to investing platforms.`,
    source: `Halvestor Survey Statistic`,
  },
  {
    title: `Lack of transparency about companies`,
    description: `"I have to constantly check the companies I'm investing in to make sure they don't have anything that is not permissible to my religion."`,
    source: `Halvestor Survey Respondent`,
  },
  {
    title: `Limited investment information`,
    description: `"Not much info on founders/board members, who companies align themselves with or donate to."`,
    source: `Halvestor Survey Respondent`,
  },
  {
    title: `Difficulty identifying halal stocks`,
    description: `"With certain platforms, you don't see which stocks are specifically being invested in."`,
    source: `Halvestor Survey Respondent`,
  },
  {
    title: `High fees and limited options`,
    description: `"High deposit and withdrawal fees" and "Limited range of investments" are common concerns.`,
    source: `Halvestor Survey Respondent`,
  },
  {
    title: `Complex compliance research`,
    description: `"It's difficult to read through stocks and just focus on Shariah compliant stocks."`,
    source: `Halvestor Survey Respondent`,
  },
];

import Link from 'next/link';

const ListSection = () => (
  <section id="features" className="lg:py-28 pt-28 bg-secondary-50">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-16 text-center">
        <h2 className="text-base text-primary-600 font-semibold uppercase">The Challenge</h2>
        <p className="mt-2 pb-4 text-4xl lg:text-6xl font-bold text-secondary-900">What’s the problem?</p>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Muslim investors face unique challenges when trying to invest according to their faith.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {listItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-secondary-200 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-secondary-600 mb-3">{item.description}</p>
                <p className="text-sm text-primary-600 font-medium">— {item.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/why-halvestor"
          className="inline-flex items-center justify-center bg-primary-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
        >
          Why Halvestor Is Better
        </Link>
      </div>
    </div>
  </section>
);

export default ListSection;
