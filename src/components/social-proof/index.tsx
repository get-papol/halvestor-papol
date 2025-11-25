const testimonials = [
  {
    name: 'Ahmed Hassan',
    role: 'Software Engineer',
    location: 'Toronto, Canada',
    content:
      'Finally, an investment platform that aligns with my Islamic values. Halvestor makes it easy to invest ethically.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Doctor',
    location: 'Dubai, UAE',
    content:
      'The Sharia compliance verification gives me complete peace of mind. My investments are both profitable and halal.',
    rating: 5,
  },
  {
    name: 'Omar Malik',
    role: 'Business Owner',
    location: 'London, UK',
    content:
      'I was struggling to find halal investment options. Halvestor solved this problem perfectly with their expert screening.',
    rating: 5,
  },
];

const stats = [
  { number: '10,000+', label: 'Muslim Investors' },
  { number: '$50M+', label: 'Halal Investments' },
  { number: '98%', label: 'Sharia Compliant' },
  { number: '4.9/5', label: 'User Rating' },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Muslim Investors Worldwide</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of Muslims who are building wealth while staying true to their faith
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl card-shadow">
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6 italic">&quot;{testimonial.content}&quot;</blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-8">Certified and trusted by leading Islamic finance authorities</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-gray-400 font-semibold">AAOIFI Compliant</div>
            <div className="text-gray-400 font-semibold">Sharia Certified</div>
            <div className="text-gray-400 font-semibold">Islamic Finance Council</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
