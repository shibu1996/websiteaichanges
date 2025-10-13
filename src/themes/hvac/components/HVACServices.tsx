
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Thermometer, Wind, Settings, Wrench, Shield, Clock } from 'lucide-react';

const HVACServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Emergency HVAC",
      description: "24/7 emergency HVAC services for system failures and urgent repairs.",
      features: ["24/7 Availability", "Rapid Response", "System Diagnostics"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Air Conditioning",
      description: "Complete AC installation, repair, and maintenance services.",
      features: ["Installation", "Repair Service", "Maintenance"],
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Heating Systems",
      description: "Furnace installation, repair, and heating system maintenance.",
      features: ["Furnace Repair", "System Installation", "Energy Efficiency"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "HVAC Maintenance",
      description: "Regular maintenance and tune-ups for optimal system performance.",
      features: ["Preventive Care", "System Tune-ups", "Filter Replacement"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Duct Cleaning",
      description: "Professional air duct cleaning and ventilation services.",
      features: ["Duct Cleaning", "Air Quality", "Ventilation"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "System Installation",
      description: "New HVAC system installation and replacement services.",
      features: ["New Installation", "System Replacement", "Energy Efficient"],
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const handleServiceClick = (service: any) => {
    const serviceName = service.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services/${serviceName}`, {
      state: {
        serviceId: service.title.replace(/\s+/g, '-'),
        serviceName: service.title,
        serviceDescription: service.description,
        serviceImage: service.image
      }
    });
  };

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Complete HVAC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive HVAC 
            solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="text-orange-600 bg-white rounded-full p-3 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="/hvac/services"
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HVACServices;
