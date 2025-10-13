
import React from 'react';
import { Shield, Heart, Users, Zap, CheckCircle, Award } from 'lucide-react';

const PlumbingValues = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "We show up when we say we will and deliver on our promises every time.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest pricing, transparent communication, and ethical business practices.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in everything we do.",
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in workmanship and customer service.",
      color: "from-cyan-600 to-blue-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Professionalism",
      description: "Skilled technicians who respect your property and time.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Using the latest technology and techniques for better solutions.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define who we are as a company
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbingValues;
