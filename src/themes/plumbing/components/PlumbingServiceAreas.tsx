import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import InteractiveMap from '../../../components/InteractiveMap';

const PlumbingServiceAreas = () => {
  const serviceAreas = [
    {
      name: "Downtown Metro",
      description: "Emergency and residential plumbing services",
      response: "15-30 min",
      services: ["Emergency Repairs", "Water Heaters", "Drain Cleaning"],
      link: "/areas/downtown-metro",
      coordinates: [-118.2537, 34.0522] as [number, number],
      type: 'local' as const
    },
    {
      name: "North Hills",
      description: "Commercial and residential plumbing solutions",
      response: "20-35 min", 
      services: ["Pipe Installation", "Bathroom Plumbing", "General Repairs"],
      link: "/areas/north-hills",
      coordinates: [-118.3267, 34.0928] as [number, number],
      type: 'local' as const
    },
    {
      name: "Westside District", 
      description: "Full-service plumbing for homes and businesses",
      response: "25-40 min",
      services: ["Water Heater Service", "Emergency Plumbing", "Repiping"],
      link: "/areas/westside-district",
      coordinates: [-118.4695, 33.9850] as [number, number],
      type: 'local' as const
    },
    {
      name: "East Valley",
      description: "Trusted plumbing services in East Valley", 
      response: "30-45 min",
      services: ["Drain Cleaning", "Fixture Installation", "Leak Repair"],
      link: "/areas/east-valley",
      coordinates: [-118.1445, 34.1478] as [number, number],
      type: 'local' as const
    },
    {
      name: "South Bay Area",
      description: "Professional plumbing throughout South Bay",
      response: "35-50 min",
      services: ["Emergency Service", "Bathroom Remodel", "Pipe Repair"],
      link: "/areas/south-bay-area", 
      coordinates: [-118.3948, 33.9425] as [number, number],
      type: 'local' as const
    },
    {
      name: "Central District",
      description: "Comprehensive plumbing services downtown",
      response: "20-30 min",
      services: ["Water Heaters", "Commercial Plumbing", "Drain Service"],
      link: "/areas/central-district",
      coordinates: [-118.2437, 34.0522] as [number, number],
      type: 'local' as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We proudly serve communities throughout the metropolitan area with fast, reliable plumbing services.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <InteractiveMap
            centerCoordinates={[-118.2437, 34.0522]}
            zoom={10}
            locations={serviceAreas.map(area => ({
              name: area.name,
              coordinates: { lat: area.coordinates[1], lng: area.coordinates[0] },
              description: area.description,
              responseTime: area.response
            }))}
            areaName="Los Angeles"
            areaType="city"
            className="h-96 rounded-2xl shadow-2xl"
            theme="plumbing"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 group">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 text-gray-700">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm">Response time: {area.response}</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.services.map((service, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={area.link}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
              >
                View Area Details
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
            <p className="text-xl text-blue-100 mb-6">
              We're expanding our service areas. Call us to see if we can help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5551234567"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </a>
              <a 
                href="/areas"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
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

export default PlumbingServiceAreas;
