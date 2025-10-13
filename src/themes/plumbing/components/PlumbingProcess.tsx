
import React from 'react';
import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';

const PlumbingProcess = () => {
  const steps = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Call Us",
      description: "Contact us for immediate plumbing assistance. We're available 24/7 for emergencies.",
      gradient: "from-blue-500 to-blue-600",
      number: "01"
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Schedule Service",
      description: "We'll arrange a convenient time that works for your schedule and needs.",
      gradient: "from-cyan-500 to-cyan-600",
      number: "02"
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Expert Work",
      description: "Our skilled plumbers complete the job efficiently with quality materials.",
      gradient: "from-blue-500 to-cyan-500",
      number: "03"
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Quality Check",
      description: "We ensure everything works perfectly before considering the job complete.",
      gradient: "from-cyan-600 to-blue-600",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our streamlined 4-step process ensures you get professional plumbing service from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-xl group-hover:scale-110 transition-all duration-300">
                {step.number}
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300 z-20">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbingProcess;
