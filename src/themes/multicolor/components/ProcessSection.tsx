import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { httpFile } from "../../../config.js";
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';

const colorSets = [
  {
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  },
  {
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  }
];

const ProcessSection = () => {
  const [processSteps, setProcessSteps] = useState([]);
  const [projectCategory, setProjectCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
          reqFrom: "ourProcess"
        });

        if (data.projectInfo) {
          setProcessSteps(data.projectInfo.ourProcessSection || []);
          setProjectCategory(data.projectInfo.serviceType || '');
        }
      } catch (error) {
        console.error("Error fetching ourProcessSection:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [projectId]);

  const coloredSteps = processSteps.map((step, i) => ({
    ...step,
    color: step.color || colorSets[i % colorSets.length].color,
    bgColor: step.bgColor || colorSets[i % colorSets.length].bgColor,
    borderColor: step.borderColor || colorSets[i % colorSets.length].borderColor,
    number: (i + 1).toString()
  }));

  if (isLoading) {
    return null; // Or your skeleton
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background transition-colors duration-300 relative overflow-hidden">
      {/* ...header and background stuff... */}
      <div className="container mx-auto px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Step by Step Process</span>
          </div>
          {/* <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> */}
            
          <h2 className="text-4xl font-bold text-foreground mb-8">
            
            Our Simple Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our streamlined {coloredSteps.length}-step process ensures you get professional {projectCategory} service from start to finish.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full hidden lg:block"></div>
          <div className="space-y-16 lg:space-y-24">
            {coloredSteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-inherit`}>
                  <div className={`inline-block ${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-md w-full`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                        <DynamicFAIcon iconClass={step.iconClass || ''} className="text-white text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="relative z-10 hidden lg:block">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-background`}>
                    {step.number}
                  </div>
                  {index < coloredSteps.length - 1 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                    </div>
                  )}
                </div>
                <div className="lg:hidden">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
        {/* ...call to action... */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Experience our professional process firsthand. Contact us today for your free estimate!
            </p>
            <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
