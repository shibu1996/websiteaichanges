
import React from 'react';
import { Shield, Clock, Award, Users, Home, Phone } from 'lucide-react';

const RoofingWhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Bonded',
      description: 'Fully licensed contractors with comprehensive insurance coverage'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Available around the clock for urgent roofing repairs and emergencies'
    },
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Proven track record of quality roofing installations and repairs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled roofing professionals with ongoing training and certification'
    },
    {
      icon: Home,
      title: 'Premium Materials',
      description: 'Only the highest quality roofing materials from trusted manufacturers'
    },
    {
      icon: Phone,
      title: 'Free Estimates',
      description: 'Comprehensive inspections and no-obligation quotes for all services'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-gray-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Elite Roofing Pro?
          </h2>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Professional roofing services you can trust for your home or business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-slate-400 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-100">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Professional Roofing?</h3>
            <p className="text-slate-100 mb-6">
              Get your free estimate today and experience the difference quality roofing makes
            </p>
            <a
              href="tel:5551234567"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingWhyChooseUs;
