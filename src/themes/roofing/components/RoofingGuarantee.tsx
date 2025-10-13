
import React from 'react';
import { Shield, Clock, Award, CheckCircle, Home, Star } from 'lucide-react';

const RoofingGuarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: '100% Satisfaction Guarantee',
      description: 'If you\'re not completely satisfied with our work, we\'ll make it right or refund your money.',
      highlight: '100% Satisfaction'
    },
    {
      icon: Award,
      title: '10-Year Warranty',
      description: 'All our roofing work comes with a comprehensive 10-year warranty on materials and workmanship.',
      highlight: '10-Year Warranty'
    },
    {
      icon: Clock,
      title: 'On-Time Completion',
      description: 'We guarantee to complete your project on time or provide compensation for delays.',
      highlight: 'On-Time Promise'
    },
    {
      icon: Home,
      title: 'Licensed & Bonded',
      description: 'Fully licensed, bonded, and insured for your peace of mind and protection.',
      highlight: 'Fully Protected'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Roofing
            <span className="block text-orange-400">Guarantee</span>
          </h2>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            We stand behind our work with industry-leading guarantees and warranties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{guarantee.title}</h3>
              <p className="text-slate-200 text-center mb-4">{guarantee.description}</p>
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 text-center">
                <span className="text-orange-400 font-semibold">{guarantee.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Call Now: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoofingGuarantee;
