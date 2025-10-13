
import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle, Thermometer } from 'lucide-react';

const HVACWhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency HVAC service when you need it most, day or night.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed, bonded, and insured for your protection.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "20+ Years Experience",
      description: "Over two decades of professional HVAC experience serving our community.",
      gradient: "from-orange-600 to-red-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Skilled, background-checked technicians who treat your home with respect.",
      gradient: "from-red-600 to-orange-600"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all HVAC work with warranty coverage.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Modern Equipment",
      description: "Latest HVAC technology and tools for efficient, effective repairs and installations.",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            Why Choose CoolHeat Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose us, you're choosing quality, reliability, and exceptional service 
            that's backed by years of experience and thousands of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div 
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HVACWhyChooseUs;
