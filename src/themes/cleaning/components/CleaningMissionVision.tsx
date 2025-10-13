
import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';

const CleaningMissionVision = () => {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving our commitment to excellence in professional cleaning services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-4 mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide exceptional cleaning services that create healthy, beautiful environments 
              for families and businesses while using eco-friendly products and sustainable practices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-green-500 mr-3" />
                Deliver spotless results every time
              </li>
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-green-500 mr-3" />
                Use environmentally safe products
              </li>
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-green-500 mr-3" />
                Exceed customer expectations
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full p-4 mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To be the most trusted and preferred cleaning service provider, known for our reliability, 
              quality, and commitment to creating healthier spaces for our community.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-emerald-500 mr-3" />
                Leading eco-friendly cleaning standards
              </li>
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-emerald-500 mr-3" />
                Expanding our service areas
              </li>
              <li className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-emerald-500 mr-3" />
                Setting industry benchmarks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningMissionVision;
