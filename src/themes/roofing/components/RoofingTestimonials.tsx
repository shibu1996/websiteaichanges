
import React from 'react';
import { Star, Quote, Home } from 'lucide-react';

const RoofingTestimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Davis",
      location: "Highland Park",
      rating: 5,
      text: "Elite Roofing Pro replaced our entire roof after storm damage. The quality of work and attention to detail was outstanding. Highly recommend!"
    },
    {
      name: "Robert Wilson",
      location: "Summit Ridge",
      rating: 5,
      text: "Emergency roof repair was handled quickly and professionally. They prevented further water damage and completed the permanent fix the next day."
    },
    {
      name: "Maria Garcia",
      location: "Valley View",
      rating: 5,
      text: "From estimate to completion, the entire process was smooth and professional. Our new roof looks amazing and the crew cleaned up perfectly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-900 font-poppins relative">
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-orange-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 border-4 border-slate-400 -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 border-4 border-orange-300 rotate-12 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border-4 border-slate-300 -rotate-45 animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Structured Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-slate-300">Customers</span> Say
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-slate-500 transform skew-x-12"></div>
          </div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mt-8 leading-relaxed">
            Trusted by homeowners and businesses throughout the construction industry
          </p>
        </div>

        {/* Structured testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative">
                {/* Angular background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 to-orange-600/30 backdrop-blur-sm transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                
                <div className="relative bg-white rounded-lg p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-t-4 border-orange-500">
                  {/* Structured quote header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-orange-500 transform rotate-12 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <Quote className="text-white transform -rotate-12 group-hover:-rotate-45 transition-transform duration-300" size={20} />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-slate-600 text-sm">{testimonial.location}</p>
                    </div>
                    <Home className="text-slate-400" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Structured CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-700 to-gray-800 transform skew-y-2 p-12 shadow-2xl">
            <div className="transform -skew-y-2">
              <h3 className="text-3xl font-bold text-white mb-6">🏠 Join Our Satisfied Customers 🔨</h3>
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-12 py-6 rounded-none transform skew-x-12 font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl inline-block"
              >
                <span className="transform -skew-x-12 inline-block">Call Now: (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingTestimonials;
