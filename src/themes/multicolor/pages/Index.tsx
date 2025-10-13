
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, useLocation, useNavigationType, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Phone, Clock, Star, Shield, Award, CheckCircle, Sparkles, Zap, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GuaranteeSection from '../components/GuaranteeSection';
import AreasSection from '../components/AreasSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import SchemaMarkup from '../components/SchemaMarkup';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import TestimonialsSchemaMarkup from '../components/TestimonialsSchemaMarkup';
import ProcessSchemaMarkup from '../components/ProcessSchemaMarkup';
import SEOHead from '../components/SEOHead';
import WebVitals from '../components/WebVitals';
import { httpFile } from "../../../config.js";
import { useSEO } from '../../../hooks/useSEO';
import DynamicIcon from '../../../extras/DynamicIcon.js';
import { useTheme } from '../contexts/ThemeContext';
import ColorThemeSelector from '../components/ColorThemeSelector';

interface Feature {
  serialno: number;
  iconName: string;
  title: string;
  subtitle: string;
  borderClass: string;
  hoverShadowClass: string;
  bgGradientClass: string;
  iconBgClass: string;
  iconColorClass: string;
  iconPulseClass: string;
  titleColorClass: string;
  topCircleClass: string;
  bottomCircleClass: string;
}



const Index = () => {

  const { seoData } = useSEO('/home');
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  const [projectCategory, setProjectCategory] = useState("");
  const [CTA, setCTA] = useState([]);
  const projectId = import.meta.env.VITE_PROJECT_ID;
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");


  const [welcomeLine, setWelcomeLine] = useState('');
  const [projectSlogan, setProjectSlogan] = useState('');

  let [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [heroHeadingPart1, setHeroHeadingPart1] = useState('');
  const [heroHeadingPart2, setHeroHeadingPart2] = useState('');
  const conjunctions = [
    'and', 'or', 'but', 'with', 'for', 'as', 'because', 'so', 'then', 'by', 'on', 'at',
    'in', 'of', 'to', 'from', 'about', 'through', 'between', 'during', 'before', 'after'
  ];


  useEffect(() => {
    (async () => {
      try {
        const { data } = await httpFile.post('/webapp/v1/my_site', {
          projectId,
          pageType: 'home',
          reqFrom: 'Hero'
        });

        const info = data.projectInfo || {};
        const about = data.aboutUs || {};
        setCTA(info.cta);
        setBackgroundImage(info.images?.[2]?.url || "");

        setProjectCategory(info.serviceType || '');
        setWelcomeLine(info.welcomeLine || '');
        setPhoneNumber(about.phone || '');
        // Split heroHeading intelligently
        const words = info.heroHeading?.split(' ') || [];

        // If heading has more than 3 words, attempt to split based on meaningful conjunctions
        if (words.length > 3) {
          let breakIndex = -1;
          // Find the first occurrence of any conjunction or preposition
          for (let i = 0; i < words.length; i++) {
            if (conjunctions.includes(words[i].toLowerCase())) {
              breakIndex = i;
              break;
            }
          }

          if (breakIndex !== -1) {
            // Split at the first meaningful conjunction
            setHeroHeadingPart1(words.slice(0, breakIndex + 1).join(' ') || '');
            setHeroHeadingPart2(words.slice(breakIndex + 1).join(' ') || '');
          } else {
            // Fallback to split the first part with a few words, and second part with the rest
            setHeroHeadingPart1(words.slice(0, words.length - 2).join(' ') || '');
            setHeroHeadingPart2(words.slice(-2).join(' ') || '');
          }
        } else {
          // For 2 or 3 words, use a simpler split
          if (words.length === 3) {
            setHeroHeadingPart1(words.slice(0, 1).join(' ') || '');
            setHeroHeadingPart2(words.slice(1).join(' ') || '');
          } else {
            setHeroHeadingPart1(words.slice(0, 1).join(' ') || '');
            setHeroHeadingPart2(words.slice(1).join(' ') || '');
          }
        }

        setProjectSlogan(info.projectSlogan || `Professional ${info.serviceType}`);
        // sanitize helper
        const strip = (s: any) =>
          typeof s === 'string'
            ? s.trim().replace(/^[,\"\s]+|[,\"\s]+$/g, '')
            : '';

        // clean features

        const classArray = [
          {
            borderClass: 'border-red-500/30',
            hoverShadowClass: 'hover:shadow-red-500/20',
            bgGradientClass: 'bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-600/5',
            iconBgClass: 'bg-gradient-to-br from-red-500/20 to-orange-500/20',
            iconColorClass: 'text-red-500',
            iconPulseClass: 'bg-red-500/10',
            titleColorClass: 'text-red-600',
            topCircleClass: 'bg-red-500/20',
            bottomCircleClass: 'bg-orange-500/20'
          },
          {
            borderClass: 'border-primary/30',
            hoverShadowClass: 'hover:shadow-primary/20',
            bgGradientClass: 'bg-gradient-to-br from-primary/5 via-blue-500/5 to-primary/5',
            iconBgClass: 'bg-gradient-to-br from-primary/20 to-blue-500/20',
            iconColorClass: 'text-primary',
            iconPulseClass: 'bg-primary/10',
            titleColorClass: 'text-primary',
            topCircleClass: 'bg-primary/20',
            bottomCircleClass: 'bg-blue-500/20'
          },
          {
            borderClass: 'border-yellow-500/30',
            hoverShadowClass: 'hover:shadow-yellow-500/20',
            bgGradientClass: 'bg-gradient-to-br from-yellow-500/5 via-green-500/5 to-yellow-600/5',
            iconBgClass: 'bg-gradient-to-br from-yellow-500/20 to-green-500/20',
            iconColorClass: 'text-yellow-500',
            iconPulseClass: 'bg-yellow-500/10',
            titleColorClass: 'text-yellow-600',
            topCircleClass: 'bg-yellow-500/20',
            bottomCircleClass: 'bg-green-500/20'
          },
        ];

        const modifiedFeatures = (info.featuresSection || []).map((f, index) => ({
          serialno: f.serialno,
          iconName: strip(f.iconName),
          title: strip(f.title),
          subtitle: strip(f.subtitle),
          ...classArray[index % classArray.length],
        }));

        setFeatures(modifiedFeatures);

      } catch (err) {
        console.error('Fetch hero data error:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [projectId]);
  // Example API fetch and modification

  const getCTAContent = (index) => {
    if (CTA.length === 0) {
      return { title: "What are you waiting for?", description: "Contact us for our services" };
    }
    return CTA[index] || CTA[0];
  };



  return (
    <HelmetProvider>
      <div className="min-h-screen font-poppins">
        <Helmet>
          <title>{seoData.meta_title}</title>
          <meta name="description" content={seoData.meta_description} />
          <meta name="keywords" content={seoData.meta_keywords} />
        </Helmet>
        <WebVitals />
        <SchemaMarkup />
        <PageSchemaMarkup
          pageType="home"
          pageTitle={seoData.meta_title}
          pageDescription={seoData.meta_description}
        />
        {/* <TestimonialsSchemaMarkup /> */}
        <ProcessSchemaMarkup />
        <Header />
        {/* Hero section */}


        {/* Modern Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: colors.surface
          }}
        >
          {/* Dynamic Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.gradient.from}, ${colors.gradient.to})`,
              mixBlendMode: colors.overlay.blend as any
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: colors.overlay.color
            }}
          ></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="container mx-auto px-16 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center lg:text-left space-y-8 relative z-20">
                
                {/* Badge */}
                <div 
                  className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-6 py-2.5"
                  style={{
                    backgroundColor: `${colors.primaryButton.bg}20`,
                    border: `1px solid ${colors.primaryButton.bg}40`
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: colors.primaryButton.bg }}
                  ></div>
                  <span 
                    className="font-semibold text-sm tracking-wide"
                    style={{ color: colors.heading }}
                  >
                    {projectSlogan}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
                  style={{ color: colors.heading }}
                >
                  {heroHeadingPart1}{' '}
                  <span 
                    className="inline-block"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primaryButton.bg}, ${colors.accent})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {heroHeadingPart2}
                  </span>
                </h1>

                {/* Subheading */}
                <p 
                  className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                  style={{ color: colors.description }}
                >
                  {welcomeLine}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                  
                  {/* Call Button */}
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300"
                    style={{
                      backgroundColor: colors.primaryButton.bg,
                      color: colors.primaryButton.text
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.hover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primaryButton.bg}
                  >
                    <Phone className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs opacity-90">Call Now</div>
                      <div className="text-sm font-bold">{phoneNumber}</div>
                    </div>
                  </a>

                  {/* Get Estimate Button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300"
                    style={{
                      backgroundColor: colors.secondaryButton.bg,
                      color: colors.secondaryButton.text,
                      border: `2px solid ${colors.secondaryButton.border}`
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.secondaryButton.hover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.secondaryButton.bg}
                  >
                    <Wrench className="w-5 h-5" />
                    <span>Get Free Estimate</span>
                  </button>
                </div>

                {/* Trust Indicators */}
                <div 
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8"
                  style={{ color: colors.description }}
                >
                  <div className="flex items-center gap-2">
                    <Shield 
                      className="w-5 h-5" 
                      style={{ color: colors.accent }}
                    />
                    <span className="text-sm font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star 
                      className="w-5 h-5 fill-current" 
                      style={{ color: colors.accent }}
                    />
                    <span className="text-sm font-medium">5-Star Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock 
                      className="w-5 h-5" 
                      style={{ color: colors.accent }}
                    />
                    <span className="text-sm font-medium">24/7 Available</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background"/>
            </svg>
          </div>
        </section>

        {/* Features Section - Separated from Hero */}
        <section className="py-20 bg-background relative -mt-1">
          <div className="container mx-auto px-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((f, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 border-2 ${f.borderClass} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`absolute inset-0 ${f.bgGradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                  <div className="relative text-center space-y-4">
                    <div className={`mx-auto p-4 ${f.iconBgClass} rounded-xl w-fit`}>
                      <DynamicIcon
                        iconName={f.iconName}
                        className={`w-10 h-10 ${f.iconColorClass}`}
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${f.titleColorClass} mb-2`}>
                        {f.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <AboutSection />
        <ServicesSection />
        {/* <BookingSection />*/}

        <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
          <div className="container mx-auto px-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              {getCTAContent(1).title}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
              {getCTAContent(1).description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Theme-Responsive Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-2 glass-card rounded-2xl animate-pulse-glow"></div>

                <Button
                  size="lg"
                  className="relative overflow-hidden btn-cta-primary text-white px-10 py-8 text-xl font-bold shadow-2xl rounded-2xl btn-cta-border btn-cta-glow group animate-gradient-shift bg-[length:200%_200%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div className="relative flex items-center">
                    <div className="relative mr-4">
                      <Phone className="w-7 h-7 animate-float-bounce" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">EMERGENCY CALL</span>
                      <a
                        href={`tel:${phoneNumber}`}>
                        <span className="text-2xl font-black tracking-wide">{phoneNumber}</span></a>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Secondary Button */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-10 py-8 text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                >
                  <Link
                    to="/contact">
                    <div className="relative flex items-center">
                      <Calendar className="w-7 h-7 mr-4" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">BOOK ONLINE</span>
                        <span className="text-xl font-black tracking-wide">Schedule Service</span>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Same Day Service</span>
              </div>
            </div>
          </div>
        </section>



        <WhyChooseUsSection />
        <ProcessSection />
        {/* <BookingSection /> */}

        <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
          <div className="container mx-auto px-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              {getCTAContent(2).title}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
              {getCTAContent(2).description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Theme-Responsive Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-2 glass-card rounded-2xl animate-pulse-glow"></div>

                <Button
                  size="lg"
                  className="relative overflow-hidden btn-cta-primary text-white px-10 py-8 text-xl font-bold shadow-2xl rounded-2xl btn-cta-border btn-cta-glow group animate-gradient-shift bg-[length:200%_200%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div className="relative flex items-center">
                    <div className="relative mr-4">
                      <Phone className="w-7 h-7 animate-float-bounce" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">EMERGENCY CALL</span>
                      <a
                        href={`tel:${phoneNumber}`}>
                        <span className="text-2xl font-black tracking-wide">{phoneNumber}</span></a>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Secondary Button */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-10 py-8 text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                >
                  <Link
                    to="/contact">
                    <div className="relative flex items-center">
                      <Calendar className="w-7 h-7 mr-4" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">BOOK ONLINE</span>
                        <span className="text-xl font-black tracking-wide">Schedule Service</span>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Same Day Service</span>
              </div>
            </div>
          </div>
        </section>


        <GuaranteeSection />
        <TestimonialsSection />
        {/* <BookingSection /> */}

        <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
          <div className="container mx-auto px-16 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              {getCTAContent(3).title}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
              {getCTAContent(3).description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Theme-Responsive Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-2 glass-card rounded-2xl animate-pulse-glow"></div>

                <Button
                  size="lg"
                  className="relative overflow-hidden btn-cta-primary text-white px-10 py-8 text-xl font-bold shadow-2xl rounded-2xl btn-cta-border btn-cta-glow group animate-gradient-shift bg-[length:200%_200%]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                  <div className="relative flex items-center">
                    <div className="relative mr-4">
                      <Phone className="w-7 h-7 animate-float-bounce" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">EMERGENCY CALL</span>
                      <a
                        href={`tel:${phoneNumber}`}>
                        <span className="text-2xl font-black tracking-wide">{phoneNumber}</span></a>
                    </div>
                  </div>
                </Button>
              </div>

              {/* Secondary Button */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                <Button
                  size="lg"
                  variant="outline"
                  className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-10 py-8 text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                >
                  <Link
                    to="/contact">
                    <div className="relative flex items-center">
                      <Calendar className="w-7 h-7 mr-4" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">BOOK ONLINE</span>
                        <span className="text-xl font-black tracking-wide">Schedule Service</span>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold">Same Day Service</span>
              </div>
            </div>
          </div>
        </section>
        <AreasSection />
        <FAQSection />
        <Footer />
        
        {/* Color Theme Selector */}
        <ColorThemeSelector />
      </div>
    </HelmetProvider>
  );
};

export default Index;
