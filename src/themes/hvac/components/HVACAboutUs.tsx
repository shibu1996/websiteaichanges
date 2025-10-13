
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const HVACAboutUs = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "20+",
      label: "Years Experience",
      color: "text-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "5K+",
      label: "Happy Customers",
      color: "text-red-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Emergency Service",
      color: "text-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction Guarantee",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Professional HVAC Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 20 years of experience serving our community, CoolHeat Pro has built a reputation 
              for excellence in residential and commercial HVAC services. Our team of licensed, insured 
              professionals is committed to providing fast, reliable solutions for all your heating and cooling needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From emergency repairs to complete system installations, we use the latest technology and 
              highest quality equipment to ensure lasting comfort. Our 24/7 emergency service means we're 
              always here when you need us most.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional HVAC technician at work"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Licensed & Insured</div>
                  <div className="text-gray-600 text-sm">Your Protection Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HVACAboutUs;
