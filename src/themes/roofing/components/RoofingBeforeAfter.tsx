
import React from 'react';
import { ArrowRight } from 'lucide-react';

const RoofingBeforeAfter = () => {
  const projects = [
    {
      id: 1,
      title: 'Residential Roof Replacement',
      before: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete roof replacement with premium asphalt shingles'
    },
    {
      id: 2,
      title: 'Commercial Roof Repair',
      before: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Emergency leak repair and waterproofing'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Before & After
            <span className="block text-orange-600">Roofing Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the amazing transformations we've achieved for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Before</h4>
                    <img
                      src={project.before}
                      alt="Before roofing work"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">After</h4>
                    <img
                      src={project.after}
                      alt="After roofing work"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:5551234567"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoofingBeforeAfter;
