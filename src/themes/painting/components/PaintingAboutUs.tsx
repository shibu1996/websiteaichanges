
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const PaintingAboutUs = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
      color: "text-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "5K+",
      label: "Happy Customers",
      color: "text-pink-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "Same Day",
      label: "Free Estimates",
      color: "text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction Guarantee",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Professional Painting Solutions You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience serving our community, ColorPro Painting has built a reputation 
              for excellence in interior and exterior painting services. Our team of licensed, insured 
              professionals is committed to providing high-quality finishes for all your painting needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From color consultation to final touches, we use premium paints and proven techniques 
              to ensure lasting, beautiful results. Our same-day estimates and satisfaction guarantee 
              mean you can trust us with your most important spaces.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional painters at work"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Licensed & Insured</div>
                  <div className="text-gray-600 text-sm">Your Protection Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingAboutUs;
