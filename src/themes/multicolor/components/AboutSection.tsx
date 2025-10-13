import DynamicIcon from '../../../extras/DynamicIcon.js';
// src/themes/multicolor/components/CleaningAboutUs.tsx
import React, { useEffect, useState } from 'react';
import { httpFile } from '../../../config.js';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span style={{ color: colors.heading }}>Professional </span>
            <span 
              className="inline-block"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primaryButton.bg}, ${colors.accent})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {projectCategory}
            </span>
            <span style={{ color: colors.heading }}> You Can Trust</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          {/* Left: Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={aboutImage}
                  alt="Professional service"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Licensed Badge */}
                <div 
                  className="absolute bottom-6 left-6 right-6 px-6 py-4 rounded-2xl backdrop-blur-md flex items-center justify-center gap-3"
                  style={{
                    backgroundColor: `${colors.primaryButton.bg}95`,
                    border: `1px solid ${colors.primaryButton.bg}`
                  }}
                >
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-base">Licensed Professional</span>
                </div>
              </div>

              {/* Decorative Border on Hover */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryButton.bg}30, ${colors.accent}30)`,
                  filter: 'blur(20px)'
                }}
              ></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Description */}
            <div 
              className="p-8 rounded-2xl space-y-4"
              style={{
                backgroundColor: `${colors.primaryButton.bg}08`,
                border: `1px solid ${colors.primaryButton.bg}20`
              }}
            >
              <p className="text-lg leading-relaxed text-black">
                {firstPart}
              </p>
              <p className="text-lg leading-relaxed text-black">
                {secondPart}
              </p>
            </div>

            {/* Stats - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: index % 2 === 0 ? colors.primaryButton.bg : colors.accent,
                  }}
                >
                  {/* Icon */}
                  {stat.iconName && (
                    <div className="flex justify-center mb-3">
                      <DynamicIcon
                        iconName={stat.iconName}
                        className="w-10 h-10 text-white"
                      />
                    </div>
                  )}
                  
                  {/* Value */}
                  <div className="text-3xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs font-semibold text-white uppercase tracking-wide opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
