
import React from 'react';
import { Star, Quote } from 'lucide-react';

const HVACTestimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Downtown Metro",
      rating: 5,
      text: "CoolHeat Pro saved us when our AC failed during a heat wave. They responded within an hour and had us cool again quickly. Professional and affordable!",
      service: "AC Repair"
    },
    {
      name: "Lisa Thompson",
      location: "North Hills",
      rating: 5,
      text: "Excellent heating system installation! They replaced our old furnace with a new energy-efficient model. Clean, efficient, and very knowledgeable team.",
      service: "Heating Installation"
    },
    {
      name: "David Kim",
      location: "Westside District",
      rating: 5,
      text: "Had a complete HVAC system installed and CoolHeat Pro handled everything perfectly. From planning to completion, they were professional and delivered exactly what we wanted.",
      service: "HVAC Installation"
    },
    {
      name: "Jennifer Wilson",
      location: "East Valley",
      rating: 5,
      text: "Emergency furnace repair at midnight and they were at our house within 45 minutes. Prevented us from freezing and fixed everything properly. Truly 24/7 service!",
      service: "Emergency HVAC"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied customers have to say about our HVAC services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-600 mr-3" />
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
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Customers</h3>
            <p className="text-xl text-orange-100 mb-6">
              Experience the CoolHeat Pro difference for yourself
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACTestimonials;
