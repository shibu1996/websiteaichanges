
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const PaintingServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Downtown Metro",
      description: "Complete interior and exterior painting services in the heart of the city",
      responseTime: "Same Day",
      services: ["Interior Painting", "Exterior Painting", "Commercial"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "North Hills",
      description: "Residential painting specialists serving North Hills and surrounding areas",
      responseTime: "Same Day",
      services: ["Residential", "Cabinet Painting", "Color Consultation"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Westside District",
      description: "Premium painting services for Westside homes and businesses",
      responseTime: "Same Day",
      services: ["Luxury Homes", "Specialty Finishes", "Exterior Staining"],
      image: "https://images.unsplash.com/photo-1572783509178-c2e65b35d1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "East Valley",
      description: "Comprehensive painting solutions for East Valley communities",
      responseTime: "Same Day",
      services: ["New Construction", "Repaints", "Multi-family"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional painting services throughout the metropolitan area with same-day estimates 
            and local expertise in every neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={area.image} 
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{area.name}</h3>
                  <div className="flex items-center text-pink-300">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{area.responseTime} Estimates</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Don't See Your Area?</h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              We're always expanding our service areas. Contact us to see if we can serve your location.
            </p>
            <a 
              href="/painting/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingServiceAreas;
