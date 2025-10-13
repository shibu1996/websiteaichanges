
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, CheckCircle } from 'lucide-react';

const PlumbingContact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Emergency Hotline",
      info: "(555) 123-4567",
      description: "24/7 emergency plumbing services available",
      gradient: "from-red-500 to-red-600",
      action: "Call Now"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Text Message",
      info: "(555) 123-4567",
      description: "Send us a text for quick estimates",
      gradient: "from-blue-500 to-blue-600",
      action: "Text Us"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      info: "info@proflowplumbing.com",
      description: "Detailed project information and quotes",
      gradient: "from-cyan-500 to-cyan-600",
      action: "Email Us"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  const serviceAreas = [
    "Downtown District",
    "Westside Area", 
    "North Valley",
    "East Side",
    "South Bay",
    "Central Metro",
    "Industrial Zone",
    "Surrounding Cities"
  ];

  return (
    <div className="min-h-screen font-poppins">
      <PlumbingHeader />
      
      {/* Contact Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 to-cyan-600/85"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact ProFlow Plumbing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Need plumbing services? Get in touch with our expert team. We're here to help with all your plumbing needs, 24/7.
          </p>
          <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-blue-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: (555) 123-4567
          </button>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our plumbing experts. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 text-center">
                <div className={`bg-gradient-to-br ${method.gradient} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-xl`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-xl font-semibold text-gray-700 mb-3">{method.info}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
                <button className={`bg-gradient-to-r ${method.gradient} hover:shadow-lg text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours & Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Clock className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Service Hours
                </h2>
              </div>
              <div className="space-y-4">
                {serviceHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center mb-2">
                  <Truck className="w-5 h-5 text-red-500 mr-2" />
                  <span className="font-bold text-red-700">Emergency Service</span>
                </div>
                <p className="text-red-600 text-sm">
                  Burst pipes, major leaks, or no water? We're available 24/7 for plumbing emergencies.
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MapPin className="w-12 h-12 text-cyan-600 mr-4" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Service Areas
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                We proudly serve the greater metropolitan area with professional plumbing services:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-700 text-sm">
                  <strong>Don't see your area?</strong> Call us! We may still be able to provide service to your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Locally owned and operated, serving the community with professional plumbing services.
          </p>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ProFlow Plumbing</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>123 Main Street, Metro City, ST 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <span>info@proflowplumbing.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Directions
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Professional Plumbing</p>
                  <p className="text-sm">Serving Your Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlumbingFooter />
    </div>
  );
};

export default PlumbingContact;
