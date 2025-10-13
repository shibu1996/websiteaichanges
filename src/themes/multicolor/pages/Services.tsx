import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigationType, useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Phone, Star, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import humanizeString from "../../../extras/stringUtils.js";

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import WhyChooseUsSimple from '../components/WhyChooseUsSimple';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';

import ServicesGuarantee from '../components/services/ServicesGuarantee';
import ServicesProcess from '../components/services/ServicesProcess';
import AreasSection from '../components/AreasSection';
import FAQSection from '../components/FAQSection';
import BookingSection from '../components/BookingSection';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import ProcessSchemaMarkup from '../components/ProcessSchemaMarkup';
import SEOHead from '../components/SEOHead';
import { httpFile } from "../../../config.js";

const Services = () => {
  const breadcrumbItems = [
    { label: "Services" }
  ];
  const [phoneNumber, setPhoneNumber] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const [CTA, setCTA] = useState([]);
  const [projectCategory, setProjectCategory] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescriptions, setProjectDescriptions] = useState([]);
  let [locationName, setDisplayLocationName] = useState("");

  const formattedLocationName = locationName ? `in ${locationName}` : "";
  const projectId = import.meta.env.VITE_PROJECT_ID;

  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  let cumulativePath = '';

  const pathname = location.pathname;

  // Remove trailing '/services' if present
  let locationSlug = pathname;

  // If pathname ends with '/services', remove it
  if (locationSlug.endsWith('/services')) {
    locationSlug = locationSlug.slice(0, -('/services'.length));
  }

  // Remove leading '/' if needed
  if (locationSlug.startsWith('/')) {
    locationSlug = locationSlug.slice(1);
  }

  console.log(locationSlug, "locationSlug");

  useEffect(() => {
    const fetchPageType = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/slugToPageType", {
          projectId,
          slug: locationSlug
        });

        console.log(data, "<<<<<>>>>>>>>data of slug")

        if (data?.slugType) {
          setDisplayLocationName(data.showName);
        }


      } catch (error) {
        console.error("Error fetching page type:", error);

      }
    };



    if (locationSlug) {
      fetchPageType();
    }
  }, [locationSlug, projectId]);


  useEffect(() => {
    const fetchBasicProjectInfo = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/basic_project_info", {
          projectId
        });

        if (data) {
          setProjectCategory(data.serviceType || "");
          setProjectName(data.projectName || "");
          setProjectDescriptions(data.descriptions || []);
        }
      } catch (error) {
        console.error("Error fetching basic project info:", error);
      }
    };

    if (projectId) {
      console.log("Fetching basic project info for projectId:", projectId);
      fetchBasicProjectInfo();
    } else {
      console.log("No projectId available for fetching basic project info");
    }
  }, [projectId]);


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
          setBackgroundImage(data.projectInfo.images?.[4]?.url || "");

        setProjectCategory(info.serviceType || '');

        setPhoneNumber(about.phone || '');
        // Split heroHeading intelligently


      } catch (err) {
        console.error('Fetch hero data error:', err);
      }
    })();
  }, [projectId]);

  const getCTAContent = (index) => {
    if (CTA.length === 0) {
      return { title: "What are you waiting for?", description: "Contact us for our services" };
    }
    return CTA[index] || CTA[0];
  };


  console.log(formattedLocationName, "formattedLocationName in services page");

  return (
    <div className="min-h-screen font-poppins">
      <SEOHead
        title="Professional Plumbing Services - Emergency Plumbing Service"
        description="Comprehensive plumbing services including drain cleaning, emergency repairs, water heater installation, and more. Available 24/7 nationwide."
        canonical="/services"
      />
      <PageSchemaMarkup
        pageType="services"
        pageTitle="Professional Plumbing Services - Emergency Plumbing Service"
        pageDescription="Comprehensive plumbing services including drain cleaning, emergency repairs, water heater installation, and more. Available 24/7 nationwide."
        breadcrumbs={[{ name: "Services", url: "/services" }]}
      />
      <ProcessSchemaMarkup />
      <Header />
      <Breadcrumb className="ml-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, index) => {
            cumulativePath += `/${segment}`;
            const isLast = index === segments.length - 1;
            const displayName = segment === 'services' ? 'Services' : humanizeString(segment);

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="font-medium text-green-600">{displayName}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={cumulativePath}>{displayName}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      {/* <ServicesHero /> */}


      <section
        className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center py-8 px-16 transition-all duration-300 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background Overlay with Gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80 animate-gradient-shift bg-[length:200%_200%]"></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-accent/80 animate-gradient-shift bg-[length:200%_200%]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent-foreground/20 rounded-full animate-float-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary-foreground/15 animate-morphing-shape"></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-accent-foreground/10 rounded-full animate-float-bounce" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-16 py-8 z-10 max-w-6xl relative">
          <div className="text-center space-y-6 animate-hero-fade-in">

            {/* Enhanced Trust Badge */}
            <div className="inline-flex items-center glass-card rounded-full px-6 py-3 text-primary-foreground font-semibold text-base sm:text-lg animate-badge-bounce shadow-2xl">
              <Star className="w-5 h-5 mr-2 fill-current animate-pulse" />
              <Sparkles className="w-4 h-4 mr-1 animate-pulse" />
              Professional Services Available
              <Sparkles className="w-4 h-4 ml-1 animate-pulse" />
            </div>

            {/* Enhanced Main Headline */}
            <div className="space-y-3 animate-heading-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
                Professional
                <span className="block md:inline text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text animate-gradient-shift"> {projectCategory} </span>
                <span className="block md:inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground/90">
                  Services {formattedLocationName}
                </span>
              </h1>
            </div>

            {/* Enhanced Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-4xl mx-auto leading-relaxed animate-subtitle-fade-in" style={{ animationDelay: '0.4s' }}>
              {projectDescriptions[2]}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-cta-zoom-in" style={{ animationDelay: '0.6s' }}>
              {/* Call Now Button */}
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                <div className="absolute -inset-1 glass-card rounded-2xl animate-pulse-glow"></div>


              </div>

              {/* Get Estimate Button */}

            </div>
          </div>
        </div>
      </section>

      


      <ServicesGrid formattedLocationName={formattedLocationName} />
      <WhyChooseUsSection />
      <ServicesGuarantee />
      <ServicesProcess />
      <AreasSection />
      <FAQSection />
      <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
        <div className="container mx-auto px-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            {getCTAContent(4).title}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            {getCTAContent(4).description}
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
      <Footer />
    </div>
  );
};

export default Services;
