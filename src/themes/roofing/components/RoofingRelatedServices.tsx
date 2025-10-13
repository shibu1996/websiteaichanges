
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Shield, Hammer, Eye, ArrowRight } from 'lucide-react';

const RoofingRelatedServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'roof-installation',
      name: 'Roof Installation',
      description: 'Complete new roof installation with premium materials and expert craftsmanship.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'roof-repair',
      name: 'Roof Repair',
      description: 'Professional roof repair services for leaks, damage, and emergency situations.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'roof-replacement',
      name: 'Roof Replacement',
      description: 'Complete roof replacement services for old, damaged, or worn-out roofs.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'roof-inspection',
      name: 'Roof Inspection',
      description: 'Thorough roof inspections to identify potential issues before they become problems.',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    navigate(`/services/${service.id}`, {
      state: {
        serviceId: service.id,
        serviceName: service.name,
        serviceDescription: service.description,
        serviceImage: service.image
      }
    });
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Related Roofing
            <span className="block text-orange-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of professional roofing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoofingRelatedServices;
