
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paintbrush, Home, Building, Palette, Brush, Droplets } from 'lucide-react';

const PaintingServices = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Interior Painting",
      description: "Professional interior painting services for homes and businesses.",
      features: ["Wall Painting", "Ceiling Work", "Trim & Molding"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Exterior Painting",
      description: "Complete exterior painting and weatherproofing services.",
      features: ["House Painting", "Weatherproofing", "Deck Staining"],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: "Commercial Painting",
      description: "Professional commercial painting services for businesses.",
      features: ["Office Painting", "Retail Spaces", "Industrial Coating"],
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Color Consultation",
      description: "Expert color consultation and design services.",
      features: ["Color Matching", "Design Advice", "Paint Selection"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Cabinet Painting",
      description: "Kitchen and bathroom cabinet painting and refinishing.",
      features: ["Cabinet Refinishing", "Hardware Updates", "Custom Colors"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Pressure Washing",
      description: "Professional pressure washing and surface preparation.",
      features: ["Surface Cleaning", "Preparation", "Maintenance"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Complete Painting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From interior transformations to exterior protection, we provide comprehensive painting 
            solutions with premium materials and expert craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
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
                  <div className="text-purple-600 bg-white rounded-full p-3 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/painting/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaintingServices;
