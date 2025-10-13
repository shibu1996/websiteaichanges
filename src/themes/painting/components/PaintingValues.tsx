
import React from 'react';
import { Shield, Heart, Users, Zap, CheckCircle, Award } from 'lucide-react';

const PaintingValues = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality",
      description: "We use only premium paints and materials for lasting, beautiful results.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Care",
      description: "We treat your home with the same care and respect we'd want for our own.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teamwork",
      description: "Our collaborative approach ensures every project exceeds expectations.",
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Efficiency",
      description: "We complete projects on time without compromising on quality or cleanliness.",
      color: "from-pink-600 to-purple-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest pricing, clear communication, and ethical business practices.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every brushstroke and customer interaction.",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define who we are as a painting company
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

export default PaintingValues;
