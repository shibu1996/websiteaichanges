
import React from 'react';
import { Target, Eye, Star } from 'lucide-react';

const PlumbingMissionVision = () => {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by excellence in plumbing services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide exceptional plumbing services that exceed customer expectations through 
              reliable, professional, and innovative solutions. We are committed to building lasting 
              relationships with our community by delivering quality workmanship and outstanding 
              customer service.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Excellence in every project</span>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Customer satisfaction guarantee</span>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Transparent and honest pricing</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be the most trusted and preferred plumbing service provider in our region, 
              known for our unwavering commitment to quality, innovation, and customer care. 
              We envision a future where every home and business has access to reliable 
              plumbing solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Industry leadership in service quality</span>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Sustainable and eco-friendly practices</span>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Continuous innovation and improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlumbingMissionVision;
