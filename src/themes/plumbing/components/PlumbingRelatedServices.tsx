
import React from 'react';
import { Droplets, Wrench, Hammer, ArrowRight, Phone } from 'lucide-react';

const PlumbingRelatedServices = () => {
  const relatedServices = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Leak Detection",
      description: "Advanced leak detection and professional repair services",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/leak-detection"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Water Heater Repair",
      description: "Complete water heater installation and repair services",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/water-heater-repair"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Pipe Installation",
      description: "New pipe installation and replacement services",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/pipe-installation"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our other professional plumbing services to solve all your plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-blue-600 bg-white rounded-full p-2 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-cyan-600 transition-colors duration-200 group"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a 
                    href="tel:5551234567"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-lg"
                  >
                    <Phone size={16} />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbingRelatedServices;
