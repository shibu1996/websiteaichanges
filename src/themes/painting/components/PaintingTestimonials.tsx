
import React from 'react';
import { Star, Quote } from 'lucide-react';

const PaintingTestimonials = () => {
  const testimonials = [
    {
      name: "Lisa Thompson",
      location: "Downtown Metro",
      rating: 5,
      text: "ColorPro Painting transformed our living room completely! The color consultation was amazing and the final result exceeded our expectations. Professional and clean work.",
      service: "Interior Painting"
    },
    {
      name: "David Park",
      location: "North Hills",
      rating: 5,
      text: "Excellent exterior painting job! They properly prepared all surfaces and the paint job looks fantastic. Our house looks brand new after 10 years.",
      service: "Exterior Painting"
    },
    {
      name: "Maria Rodriguez",
      location: "Westside District",
      rating: 5,
      text: "Had our kitchen cabinets painted and couldn't be happier! They saved us thousands compared to replacement and they look absolutely beautiful.",
      service: "Cabinet Painting"
    },
    {
      name: "James Wilson",
      location: "East Valley",
      rating: 5,
      text: "Professional team that showed up on time every day. Clean, efficient work and the specialty finish in our dining room is stunning. Highly recommend!",
      service: "Specialty Finishes"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied customers have to say about our painting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-purple-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <p className="text-xl text-purple-100 mb-6">
              Experience the ColorPro difference for yourself
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingTestimonials;
