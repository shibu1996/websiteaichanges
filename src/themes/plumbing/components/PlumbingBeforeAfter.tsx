
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PlumbingBeforeAfter = () => {
  const beforeAfterCases = [
    {
      title: "Emergency Pipe Burst Repair",
      before: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete pipe replacement and water damage restoration"
    },
    {
      title: "Bathroom Plumbing Renovation",
      before: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Modern bathroom with updated fixtures and plumbing"
    },
    {
      title: "Water Heater Installation",
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Energy-efficient tankless water heater upgrade"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Before & After Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the quality difference our professional plumbing services make. 
            Real projects, real results from satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {beforeAfterCases.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{project.title}</h3>
                
                {/* Before/After Images */}
                <div className="relative mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <img 
                        src={project.before} 
                        alt="Before plumbing work"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={project.after} 
                        alt="After plumbing work"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-2 shadow-lg">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>

                <p className="text-gray-600 text-center leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 max-w-4xl mx-auto text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Let us solve your plumbing problems with the same professional results.
            </p>
            <a 
              href="tel:5551234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingBeforeAfter;
