
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const HVACServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Downtown Metro",
      description: "Emergency and residential HVAC services",
      response: "15-30 min",
      services: ["Emergency Repairs", "AC Installation", "Heating Service"],
      link: "/hvac/areas/downtown-metro"
    },
    {
      name: "North Hills",
      description: "Commercial and residential HVAC solutions",
      response: "20-35 min",
      services: ["HVAC Installation", "Duct Cleaning", "General Repairs"],
      link: "/hvac/areas/north-hills"
    },
    {
      name: "Westside District",
      description: "Full-service HVAC for homes and businesses",
      response: "25-40 min",
      services: ["AC Service", "Emergency HVAC", "System Replacement"],
      link: "/hvac/areas/westside-district"
    },
    {
      name: "East Valley",
      description: "Trusted HVAC services in East Valley",
      response: "30-45 min",
      services: ["Heating Repair", "Thermostat Install", "Maintenance"],
      link: "/hvac/areas/east-valley"
    },
    {
      name: "South Bay Area",
      description: "Professional HVAC throughout South Bay",
      response: "35-50 min",
      services: ["Emergency Service", "AC Installation", "Duct Work"],
      link: "/hvac/areas/south-bay-area"
    },
    {
      name: "Central District",
      description: "Comprehensive HVAC services downtown",
      response: "20-30 min",
      services: ["Commercial HVAC", "Heating Systems", "Air Quality"],
      link: "/hvac/areas/central-district"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We proudly serve communities throughout the metropolitan area with fast, reliable HVAC services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 text-gray-700">
                <Clock className="w-4 h-4 mr-2 text-orange-600" />
                <span className="text-sm">Response time: {area.response}</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.services.map((service, idx) => (
                    <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={area.link}
                className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
              >
                View Area Details
              </a>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="text-xl text-orange-100 mb-6">
              We're expanding our service areas. Call us to see if we can help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5551234567"
                className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </a>
              <a 
                href="/hvac/areas"
                className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                View All Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACServiceAreas;
