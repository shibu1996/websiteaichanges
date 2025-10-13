
import React from 'react';
import { Phone, Paintbrush, Palette, Camera, Star, Award } from 'lucide-react';

const PaintingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 text-white overflow-hidden font-poppins">
      {/* Creative Paint Splashes Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Artistic Header */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="relative">
                <Paintbrush className="w-12 h-12 text-pink-300 transform rotate-12" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <Palette className="w-12 h-12 text-purple-300 transform -rotate-12" />
              <div className="text-left">
                <h2 className="text-lg font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Professional
                </h2>
                <p className="text-purple-200 text-sm">Painting Services</p>
              </div>
            </div>
            
            {/* Main Heading with Creative Typography */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Transform
              </span>
              <span className="block text-pink-300 mt-2">Your Space</span>
              <span className="block text-purple-300 text-3xl md:text-4xl mt-4 font-medium">
                with Color & Style
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert interior and exterior painting services. Quality finishes, 
              premium materials, and artistic excellence guaranteed.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/30">
                Free Color Consultation
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/30">
                Premium Materials
              </span>
              <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/30">
                Licensed & Insured
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a 
                href="tel:5551234567"
                className="group bg-white text-purple-600 px-8 py-5 rounded-3xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl transform hover:scale-105 hover:rotate-1"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                <span>Call Now: (555) 123-4567</span>
              </a>
              
              <a 
                href="/painting/contact"
                className="group bg-pink-500/80 backdrop-blur-sm hover:bg-pink-400 text-white px-8 py-5 rounded-3xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 border border-white/30 transform hover:scale-105 hover:-rotate-1"
              >
                <Palette size={24} className="group-hover:rotate-12 transition-transform" />
                <span>Free Estimate</span>
              </a>
            </div>
          </div>

          {/* Right Content - Creative Visual */}
          <div className="relative">
            {/* Main Service Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="relative">
                  <Camera className="w-16 h-16 text-pink-300 mx-auto" />
                  <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2">
                    <Star className="w-4 h-4 text-yellow-800 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white">Before & After Gallery</h3>
                <p className="text-purple-100">See our amazing transformations</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-2xl p-4 text-center">
                    <Award className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-purple-200 text-sm">Projects</div>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-purple-200 text-sm">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-4 shadow-xl transform -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Paintbrush className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl transform rotate-12 animate-bounce" style={{ animationDelay: '1.5s' }}>
              <Palette className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingHero;
