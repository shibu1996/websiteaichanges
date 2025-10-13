
import React from 'react';
import { Home, Shield, Award, Hammer, Users, CheckCircle2 } from 'lucide-react';

const RoofingAboutUs = () => {
  const achievements = [
    { number: "2000+", label: "Roofs Installed", icon: Home },
    { number: "20+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Emergency Response", icon: Shield },
    { number: "98%", label: "Customer Satisfaction", icon: CheckCircle2 }
  ];

  const services = [
    {
      icon: Home,
      title: "Residential Roofing",
      description: "Complete residential roofing solutions from new installations to emergency repairs for homeowners."
    },
    {
      icon: Hammer,
      title: "Commercial Projects", 
      description: "Large-scale commercial roofing projects with industrial-grade materials and professional installation."
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "24/7 emergency response for storm damage, leaks, and urgent roofing repairs when you need us most."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Angular Header Design */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-orange-500">Elite Roofing Pro</span>
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 to-orange-500 transform skew-x-12"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Building trust one roof at a time. We deliver premium roofing solutions with unmatched craftsmanship and reliability.
          </p>
        </div>

        {/* Geometric Stats Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-orange-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-slate-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Structured Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-orange-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="mr-3 text-orange-500" size={32} />
                Our Foundation
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Since 2003, Elite Roofing Pro has been the cornerstone of quality roofing in our community. What started as a family business has evolved into the region's most trusted roofing contractor.
                </p>
                <p>
                  Our foundation is built on three pillars: exceptional craftsmanship, transparent communication, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-slate-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="mr-3 text-slate-500" size={32} />
                Our Promise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every project we undertake comes with our guarantee of quality workmanship, premium materials, and complete customer satisfaction. We don't just install roofs – we protect your most valuable investment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-gradient-to-r from-slate-500 to-orange-500">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-gray-800 transform -skew-y-1"></div>
          <div className="relative z-10 bg-gradient-to-r from-slate-900 to-gray-800 py-12 px-8 text-center text-white rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Investment?</h3>
            <p className="text-xl mb-6 text-slate-100">
              Get your free roofing consultation and estimate today. Professional service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call Now: (555) 123-4567
              </a>
              <a
                href="/roofing/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingAboutUs;
