
import React from 'react';
import { MapPin, Clock, CheckCircle, Home } from 'lucide-react';

const RoofingServiceAreas = () => {
  const areas = [
    'Central Business District',
    'Highland Park', 
    'Riverside Commons',
    'Summit Ridge',
    'Valley View',
    'Westside Plaza'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-200 font-poppins relative">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-8 border-slate-400 transform rotate-45"></div>
        <div className="absolute top-60 right-32 w-32 h-32 border-6 border-orange-400 transform -rotate-12"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 border-4 border-slate-300 transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-6 border-orange-300 transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Structured header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Roofing Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-orange-500">Construction Areas</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-orange-500 transform skew-x-12"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Professional roofing services building excellence throughout the metropolitan construction zone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Structured areas list */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-orange-200 transform rotate-3"></div>
            <div className="relative bg-white p-8 shadow-2xl border-l-8 border-slate-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Home className="mr-3 text-slate-500" />
                Construction Coverage Areas
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {areas.map((area, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-gradient-to-r hover:from-slate-100 hover:to-orange-50 transition-all duration-300 transform hover:translate-x-2 border-l-4 border-transparent hover:border-orange-500">
                      <MapPin size={20} className="text-slate-600 flex-shrink-0 group-hover:text-orange-600 transition-colors" />
                      <span className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors">{area}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Structured service features */}
              <div className="bg-gradient-to-r from-slate-800 to-gray-900 p-8 text-white mb-8 transform skew-y-1">
                <div className="transform -skew-y-1">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock size={28} className="text-orange-300" />
                    <h4 className="text-2xl font-bold">Professional Service Coverage</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Emergency service available',
                      '24/7 emergency response',
                      'Free professional estimates',
                      'Licensed & bonded contractors'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle size={18} className="text-orange-300 flex-shrink-0" />
                        <span className="text-slate-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="tel:5551234567"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-4 rounded-none transform skew-x-6 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl inline-block"
                >
                  <span className="transform -skew-x-6 inline-block">🏠 Call Now: (555) 123-4567 🔨</span>
                </a>
              </div>
            </div>
          </div>

          {/* Structured image section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-orange-300 transform -rotate-3"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Roofing service coverage area"
                className="shadow-2xl w-full h-[500px] object-cover transform rotate-3 hover:rotate-6 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-600/30 via-transparent to-orange-400/20 transform rotate-3"></div>
              
              {/* Geometric overlays */}
              <div className="absolute top-4 left-4 w-16 h-16 bg-orange-500/80 transform rotate-45 flex items-center justify-center backdrop-blur-sm">
                <Home className="text-white transform -rotate-45" size={24} />
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-slate-500/80 transform rotate-12 flex items-center justify-center backdrop-blur-sm">
                <Home className="text-white transform -rotate-12" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingServiceAreas;
