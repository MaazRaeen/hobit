import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Parth Agrawal',
      role: 'Founder, growhabit.online',
      image: 'https://thehobit.in/wp-content/uploads/2023/11/Screenshot-2023-04-20-005102-e1701194213303-768x361.png',
      content: 'Hobit Technologies transformed our digital presence completely. The analytics dashboard provides incredible insights that helped us increase our conversion rate by 150%.',
      rating: 5,
      company: 'Growhabit.online.',
    },
    {
      name: 'Garima Tyagi',
      role: 'Founder, brewingwellness.store',
      image: 'https://thehobit.in/wp-content/uploads/2023/11/IMG_20231107_181019_387-e1701193706588.jpg',
      content: 'The team delivered beyond our expectations. Their attention to detail and technical expertise is unmatched. Our website performance improved dramatically.',
      rating: 5,
      company: 'brewingwellness.store',
    },
    {
      name: 'Pradeep',
      role: 'Founder, thechromehostel.com',
      image: 'https://thehobit.in/wp-content/uploads/2023/11/chromehostels-e1701193952622-300x217.png',
      content: 'Working with PortfolioTrack was a game-changer. They not only built us a beautiful website but also helped us understand our users better through comprehensive analytics.',
      rating: 5,
      company: 'thechromehostel.com',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-sm font-medium text-blue-600">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;