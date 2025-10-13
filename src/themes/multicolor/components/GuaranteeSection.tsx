import React from 'react';
import { Award, CheckCircle, Heart, Shield, Star, Zap } from 'lucide-react';
import { useGuaranteeData } from '../../../hooks/useGuaranteeData.js';
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';

const colorSets = [
  {
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50'
  },
  {
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  }
];

const staticHighlights = [
  { icon: Shield, text: 'Licensed & Insured Professionals' },
  { icon: Star, text: '10,000+ Satisfied Customers' },
  { icon: Heart, text: '24/7 Emergency Support' },
  { icon: Zap, text: 'Fast Response Times' }
];

const staticPromisePoints = [
  'Quick Response',
  'Efficient Solutions',
  'Stress-Free Experience',
  'Complete Satisfaction'
];


const GuaranteeSection = () => {
  const {
    guarantees = [],
    guaranteeText = '',
    promiseLine = '',
    projectCategory = '',
    isLoading
  } = useGuaranteeData();

  // Add color classes to each guarantee, repeating as needed
  const coloredGuarantees = (guarantees || []).map((g, i) => ({
    ...g,
    color: g.color || colorSets[i % colorSets.length].color,
    bgColor: g.bgColor || colorSets[i % colorSets.length].bgColor
  }));

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/10 transition-colors duration-300 relative overflow-hidden">
        <div className="container mx-auto px-16">
          <div className="text-center mb-16">
            <div className="animate-pulse bg-gray-200 h-12 w-64 mx-auto mb-6 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-96 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-2xl h-64"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/10 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-8 py-4 mb-8 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold text-lg">Our Commitment</span>
          </div>
          {/* <h2 className="text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> */}
          <h2 className="text-4xl font-bold text-foreground mb-8">
        
        
            Our {projectCategory} Guarantee
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {guaranteeText}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground leading-tight">
                Our Service Guarantee
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {guaranteeText}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
               
              </p>
            </div>
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {staticHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/50 rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-semibold">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Guarantee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coloredGuarantees.map((guarantee, index) => (
              <div
                key={index}
                className={`${guarantee.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${guarantee.color} rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {guarantee.iconClass
                      ? <DynamicFAIcon iconClass={guarantee.iconClass} className="text-white text-3xl" />
                      : <Award className="w-8 h-8 text-white" />
                    }
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{guarantee.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Promise Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl border-2 border-primary/10 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 border-2 border-primary rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-accent rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary rounded-full"></div>
          </div>
          
          <div className="relative p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Promise to You
              </h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-foreground font-semibold leading-relaxed mb-8">
                {promiseLine || `"We promise to fix your plumbing problems quickly and efficiently, so you can get back to enjoying your home without any stress or hassle!"`}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                {staticPromisePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
