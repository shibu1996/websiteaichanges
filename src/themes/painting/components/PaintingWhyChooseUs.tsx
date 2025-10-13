
import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle, Paintbrush } from 'lucide-react';

const PaintingWhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Same Day Estimates",
      description: "Get your free painting estimate the same day you call. No waiting, no delays.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Licensed & Insured",
      description: "All our painters are fully licensed, bonded, and insured for your protection.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "15+ Years Experience",
      description: "Over fifteen years of professional painting experience serving our community.",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Skilled, background-checked painters who treat your property with respect.",
      gradient: "from-pink-600 to-purple-600"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all painting work with warranty coverage.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Paintbrush className="w-12 h-12" />,
      title: "Premium Materials",
      description: "We use only the highest quality paints and materials for lasting results.",
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Why Choose ColorPro Painting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you choose us, you're choosing quality, reliability, and exceptional service 
            that's backed by years of experience and thousands of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100">
                <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingWhyChooseUs;
