import DynamicIcon from '../../../extras/DynamicIcon.js';
// src/themes/multicolor/components/CleaningAboutUs.tsx
import React, { useEffect, useState } from 'react';
import { httpFile } from '../../../config.js';
const AboutSection = () => {

const sanitize = (raw: any): string =>
  typeof raw === 'string'
    ? raw.trim().replace(/^[,\s"]+|[,\s"]+$/g, '')
    : '';

   const [aboutImage, setAboutImage] = useState('');
  const [projectCategory, setProjectCategory] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Read projectId from query or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const site = urlParams.get('siteId');
  if (site && localStorage.getItem('currentSiteId') !== site) {
    localStorage.setItem('currentSiteId', site);
  }
  const projectId = import.meta.env.VITE_PROJECT_ID;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await httpFile.post('/webapp/v1/my_site', {
          projectId,
          pageType: 'home',
          reqFrom: 'Aboutus',
        });

        const info = data.projectInfo || {};
        const about = data.aboutUs || {};

        setProjectCategory(info.serviceType || '');
        setProjectDescription(info.description || '');
        setAboutImage((info.images?.[0]?.url as string) || '');

        const fetchedStats= (info.statsSection || []).map((s: any) => ({
          serialno: s.serialno,
          iconName: sanitize(s.iconName),
          value: sanitize(s.value),
          label: sanitize(s.label),
        }));
        setStats(fetchedStats);
      } catch (err) {
        console.error('Error fetching About Us data:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [projectId]);

  // Split projectDescription into two parts
  const descriptionParts = projectDescription.split(/(?<=[.?!])\s+/); // splits by sentence endings
  const firstPart = descriptionParts.slice(0, 2).join(' ');
  const secondPart = descriptionParts.slice(2).join(' ');


  // const stats = [
  //   { number: '120+', label: 'Projects Completed' },
  //   { number: '10K+', label: 'Customer Satisfaction' },
  //   { number: '500+', label: 'Hours Worked' },
  //   { number: '$1M+', label: 'Revenue Generated' }
  // ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-secondary transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/50 animate-morphing-shape"></div>
      </div>

      <div className="container mx-auto px-16 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 animate-text-slide-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Professional {projectCategory} You Can Trust
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
               {firstPart}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {secondPart}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-stat-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Plumber Image - Right Side */}
          <div className="relative order-1 lg:order-2 animate-image-slide-right">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-gradient rounded-full transform rotate-6 scale-110 opacity-20 animate-bg-rotate"></div>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/30 rounded-full opacity-40 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/30 rounded-full opacity-30 animate-float-delayed"></div>
              
              {/* Professional Plumber Image */}
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-card-scale-in">
                <img 
                  src={aboutImage}
                  alt="Professional plumber working"
                  className="w-full h-96 sm:h-[500px] object-cover"
                />
                
                {/* Overlay with Professional Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm bg-primary/90">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  Licensed Professional
                </div>
                
                {/* Bottom Overlay with Stats */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-gray-600">Availability</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">30min</div>
                      <div className="text-xs text-gray-600">Response</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-yellow-600">100%</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
