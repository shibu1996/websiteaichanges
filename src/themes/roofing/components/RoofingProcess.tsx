
import React from 'react';
import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';

const RoofingProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Free Estimate',
      description: 'Contact us for a comprehensive roof inspection and no-obligation quote.'
    },
    {
      icon: Calendar,
      title: 'Schedule Work',
      description: 'We arrange a convenient time that fits your schedule and weather conditions.'
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Our licensed contractors perform quality roofing work with premium materials.'
    },
    {
      icon: CheckCircle,
      title: 'Final Inspection',
      description: 'Complete quality check and cleanup, ensuring your satisfaction.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 font-poppins relative">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-8 border-slate-400 transform rotate-45"></div>
        <div className="absolute top-60 right-32 w-32 h-32 border-6 border-orange-400 transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 border-4 border-slate-300 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-6 border-orange-300 transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Structured Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-orange-500">Roofing Process</span> Works
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-orange-500 transform skew-x-12"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Professional, structured roofing services with precision engineering and quality control
          </p>
        </div>

        {/* Angular Process Timeline */}
        <div className="relative">
          {/* Structured connection lines */}
          <div className="hidden lg:block absolute top-16 left-0 w-full">
            <div className="flex justify-between items-center px-20">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-1 mx-8">
                  <div className="h-1 bg-gradient-to-r from-slate-400 to-orange-400 transform skew-x-12"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative group">
                <div className="relative z-10">
                  {/* Angular icon container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-orange-500 transform rotate-12 flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-45">
                      <step.icon size={28} className="text-white transform -rotate-12 group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 transform rotate-45 flex items-center justify-center text-white font-bold text-sm">
                      <span className="transform -rotate-45">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structured CTA */}
        <div className="text-center mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-orange-600 transform -skew-y-1 rounded-lg"></div>
            <div className="relative bg-gradient-to-r from-slate-500 to-slate-600 transform skew-y-1 p-8 rounded-lg">
              <div className="transform -skew-y-1">
                <a
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-12 py-6 rounded-none transform skew-x-6 font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl inline-block"
                >
                  <span className="transform -skew-x-6 inline-block">🏠 Start Your Roofing Project 🔨</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingProcess;
