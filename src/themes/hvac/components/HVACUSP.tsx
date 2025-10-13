
import React from 'react';
import { Clock, Shield, Award, Phone, Thermometer, Star } from 'lucide-react';

const HVACUSP = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability for urgent HVAC emergencies. We're here when you need us most.",
      highlight: "Average response time: 30 minutes"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with our work, we'll make it right or refund your money.",
      highlight: "No questions asked guarantee"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Licensed & Certified",
      description: "All our technicians are fully licensed, insured, and certified professionals.",
      highlight: "Master HVAC certified"
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Advanced Technology",
      description: "We use the latest diagnostic tools and equipment for precise, efficient repairs.",
      highlight: "Smart thermostat specialists"
    }
  ];

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of customers choose us for their HVAC needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose CoolHeat Pro?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 20 years in the industry, we've perfected our approach to HVAC services. 
              Our commitment to excellence, combined with cutting-edge technology and unmatched 
              customer service, sets us apart from the competition.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Upfront Pricing</h4>
                  <p className="text-gray-600">No hidden fees or surprise charges. You know the cost before we start.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Clean & Professional</h4>
                  <p className="text-gray-600">We respect your property and leave your space cleaner than we found it.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Warranty Protection</h4>
                  <p className="text-gray-600">All our work comes with comprehensive warranty coverage.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional HVAC equipment and tools"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">20+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100 animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <span className="text-orange-600 font-semibold text-sm">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HVACUSP;
