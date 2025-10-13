
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Droplets, Hammer, Zap, ShowerHead, Settings } from 'lucide-react';

const PlumbingServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs and leaks.",
      features: ["24/7 Availability", "Rapid Response", "Emergency Repairs"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/emergency-plumbing"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Leak Detection & Repair",
      description: "Advanced leak detection and professional repair services.",
      features: ["Leak Detection", "Pipe Repair", "Water Damage Prevention"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/leak-repair"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Pipe Installation",
      description: "Complete pipe installation and replacement services.",
      features: ["New Installation", "Pipe Replacement", "Repiping"],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/pipe-installation"
    },
    {
      icon: <ShowerHead className="w-12 h-12" />,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing installation and repair services.",
      features: ["Toilet Repair", "Shower Installation", "Sink Repair"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/bathroom-plumbing"
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and clog removal services.",
      features: ["Drain Cleaning", "Clog Removal", "Pipe Maintenance"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/drain-cleaning"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Water Heater Service",
      description: "Water heater installation, repair, and maintenance services.",
      features: ["Installation", "Repair Service", "Maintenance"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/plumbing/services/water-heater"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Complete Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive plumbing 
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
                  <div className="text-blue-600 bg-white rounded-full p-3 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
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
            href="/plumbing/services"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlumbingServices;
