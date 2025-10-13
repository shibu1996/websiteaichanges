import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { generateFAQSchema, generateReviewSchema, generateServicesSchema } from "../../../hooks/schemaMarkup"

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import DrainCleaningHero from '../components/services/drain-cleaning/DrainCleaningHero';
import DrainCleaningAbout from '../components/services/drain-cleaning/DrainCleaningAbout';
import DrainCleaningServices from '../components/services/drain-cleaning/DrainCleaningServices';
import DrainCleaningProcess from '../components/services/drain-cleaning/DrainCleaningProcess';
import WhyChooseUsSimple from '../components/WhyChooseUsSimple';
import DrainCleaningGuarantee from '../components/services/drain-cleaning/DrainCleaningGuarantee';
import DrainCleaningPromise from '../components/services/drain-cleaning/DrainCleaningPromise';
import DrainCleaningRelated from '../components/services/drain-cleaning/DrainCleaningRelated';
import DrainCleaningFAQ from '../components/services/drain-cleaning/DrainCleaningFAQ';
import BookingSection from '../components/BookingSection';
import ServiceSchemaMarkup from '../components/ServiceSchemaMarkup';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import { useMemo } from 'react';
import DynamicIcon from '../../../extras/DynamicIcon.js';
import { Shield, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Star, StarHalf, Sparkles, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { httpFile } from "../../../config.js";
import humanizeString from "../../../extras/stringUtils.js";
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js'; // make sure the path is correct
import { removeDot } from "../../../extras/removeDot.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { slugify } from "../../../extras/slug";
import { useSEO } from '../../../hooks/useSEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
interface Testimonial {
  review_text: string;
  customer_image: string;
  customer_name: string;
  rating: number | string;
}

const DrainCleaning = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Drain Cleaning" }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  let { serviceName: urlServiceName } = useParams();
  const [projectOurProcess, setprojectOurProcess] = useState([]);
  const [slugApiCompleted, setSlugApiCompleted] = useState(false); // Tracks slug API completion
  const [serviceDetails, setServiceDetails] = useState(null);
  const [serviceImage, setServiceImage] = useState("");
  const [ProjectBaseImage, setProjectBaseImage] = useState("");
  const [stepProcess, setStepProcess] = useState([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectReviews, setProjectReviews] = useState<Testimonial[]>([]);

  const [whyChooseUsHeading, setWhyChooseUsHeading] = useState("");
  const [customSolutionText, setCustomSolutionText] = useState("");
  const [comprehensiveCoverageText, setComprehensiveCoverageText] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reloadFlag, setReloadFlag] = useState(0);
  const [aboutService, setAboutService] = useState('');
  const [subServices, setSubServices] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const projectId = import.meta.env.VITE_PROJECT_ID;

  const [serviceId, setServiceId] = useState(location.state?.serviceId || "");
  let displayServiceName = humanizeString(urlServiceName) || 'Residential Cleaning';
  const [guarantees, setGuarantees] = useState([]);
  const [guaranteeText, setGuaranteeText] = useState("");
  const [promiseLine, setPromiseLine] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectName, setprojectName] = useState("");
  const [locationName, setDisplayLocationName] = useState("");
  const [areaType, setAreaType] = useState("");
  const [areaId, setAreaId] = useState("");
  const [cta1, setCta1] = useState(null);
  const [cta2, setCta2] = useState(null);
  const [cta3, setCta3] = useState(null);
  const [cta4, setCta4] = useState(null);
  const [projectWhyChooseUs, setprojectWhyChooseUs] = useState([]);

  const [projectFaqs, setprojectFaqs] = useState([]);
  const [residentialServices, setResidentialServices] = useState([]);
  const [commercialServices, setCommercialServices] = useState([]);
  const [professionalMethods, setProfessionalMethods] = useState([]);
  const [premiumOptions, setPremiumOptions] = useState([]);

  const stepColors = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500'
  ];

  const gradients = [
    'from-red-500 to-pink-500',
    'from-yellow-500 to-orange-500',
    'from-green-500 to-emerald-500',
    'from-blue-500 to-indigo-500',
    'from-purple-500 to-fuchsia-500',
    'from-amber-500 to-lime-500'
  ];

  // extract the slug after "/services/"
  const serviceSlug = useMemo(() => {
    const segments = location.pathname.split('/');
    const idx = segments.findIndex(s => s === 'services');
    return idx >= 0 && segments[idx + 1] ? segments[idx + 1] : '';
  }, [location.pathname]);



  const pathname = location.pathname;

  // Extract path before '/services/'
  const routeBeforeServices = pathname.split('/services/')[0];

  // Remove leading '/' if needed
  const locationSlug = routeBeforeServices.startsWith('/') ? routeBeforeServices.slice(1) : routeBeforeServices;



  useEffect(() => {
    const fetchPageType = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/slugToPageType", {
          projectId,
          slug: locationSlug
        });

        console.log(data, "<<<<<>>>>>>>>data of slug type useful for unique data of service");

        if (data?.slugType) {
          console.log(data.showName, "data . showName")
          setDisplayLocationName(data.showName);
          setAreaType(data.slugType);
          setAreaId(data.locationId);
        }
      } catch (error) {
        console.error("Error fetching page type:", error);
      } finally {
        setSlugApiCompleted(true); // Mark slug API as completed
      }
    };

    if (locationSlug) {
      fetchPageType();
    } else {
      setSlugApiCompleted(true); // If no locationSlug, mark as completed
    }
  }, [locationSlug, projectId]);

  let seoPayload = locationSlug ? `/${locationSlug}/services/${slugify(serviceSlug)}` : `/services/${slugify(serviceSlug)}`




  const { seoData } = useSEO(seoPayload);

  console.log(seoData, "HEY THIS IS SEO DATA<><><><><><><>", seoPayload)


  displayServiceName = location.state?.locationName ? displayServiceName : removeDot(displayServiceName)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes


  useEffect(() => {
    localStorage.setItem("locaitonname", locationName);
  }, [locationName]);


  // When URL changes (same page but different param), force refetch
  useEffect(() => {
    window.scrollTo(0, 0);
    setServiceId(location.state?.serviceId || "");
    setReloadFlag(prev => prev + 1);
  }, [urlServiceName]);

  useEffect(() => {
    const fetchServiceId = async () => {
      if (!serviceId && displayServiceName && slugApiCompleted) { // Wait for slug API completion
        try {
          const { data } = await httpFile.post("/webapp/v1/fetch_service_by_name_and_project", {
            projectId,
            serviceName: displayServiceName,
          });

          if (data?.serviceId) {
            setServiceId(data.serviceId);
          }
        } catch (error) {
          console.error("Error fetching service ID:", error);
        }
      }
    };

    fetchServiceId();
  }, [projectId, urlServiceName, displayServiceName, slugApiCompleted, reloadFlag]); // Add slugApiCompleted as dependency

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceId || !slugApiCompleted) return;

      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_service", { serviceId, areaType, areaId });


        console.log(areaType, areaId)
        if (data.service) {




          setServiceDetails(data.service);
          setServiceImage(data.service.images?.[0]?.url || "");
          setProjectBaseImage(data.service.images?.[2]?.url || "");
          setStepProcess(
            (data.service.steps_process || []).map((step, index) => ({
              ...step,
              color: stepColors[index % stepColors.length],
              number: index + 1  // Also set number for display
            }))
          );


          setAboutService(data.service.about_service || '');
          setCta1(data.cta1 || null);
          setCta2(data.cta2 || null);
          setCta3(data.cta3 || null);
          setCta4(data.cta4 || null);
          setWhyChooseUsHeading(data.service.whyChooseUsHeading || '');
          setCustomSolutionText(data.service.customSolutionText || '');
          setComprehensiveCoverageText(data.service.comprehensiveCoverageText || '');

          setResidentialServices(data.service.residentialServices || []);
          setCommercialServices(data.service.commercialServices || []);
          setProfessionalMethods(data.service.professionalMethods || []);
          setPremiumOptions(data.service.premiumOptions || []);


          setGuarantees(
            (data.service.ourGuaranteeSection || []).map((item, index) => ({
              ...item,
              gradient: gradients[index % gradients.length]
            }))
          );


          setGuaranteeText(data.service.ourGuaranteeText);
          setPromiseLine(data.service.promiseLine)
          setprojectWhyChooseUs(data.service.whyChooseUsSection);
          setProjectReviews(data.testimonials || []);

          console.log(data, data.testimonials, "heleo data")
          setprojectFaqs(data.faq || []);

          // Parse subServices from comma-separated string
          const subServicesArray = Array.isArray(data.service.subServices)
            ? data.service.subServices.map(item => item.trim()).filter(Boolean) // If it's an array, trim and filter
            : typeof data.service.subServices === 'string'
              ? data.service.subServices.split(',').map(item => item.trim()).filter(Boolean) // If it's a string, split, trim, and filter
              : []; // Default to an empty array if it's neither a string nor an array

          setSubServices(subServicesArray);

          // Fetch SEO data based on current route



          setIsLoading(false);


        }
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceData();
  }, [serviceId, slugApiCompleted]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: "home",
        });

        if (data.projectInfo) {
          setprojectOurProcess(data.projectInfo.ourProcessSection);
          setProjectCategory(data.projectInfo.serviceType);
          setPhoneNumber(data.aboutUs.phone);
          setprojectName(data.projectInfo.projectName);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]);
  const hasLocationName = Boolean(location.state?.locationName);
  let inlocationName = ''

  console.log(location.state?.locationName, "locationname")
  if (hasLocationName) {
    inlocationName = `in ${location.state?.locationName}`;

  }
  const rawDescription = serviceDetails?.service_description || "";
  // Always clean it first:
  const cleaned = removeDot(rawDescription);

  const displayServiceDescription = location.state?.locationName
    // then, if you have a location, tack it on:
    ? `${cleaned}.`
    : cleaned;


  const displayServiceImage = serviceImage || '';



  // console.log(seoData, "seoData>>>>><<<<<<<<<")

  const schemaBreadcrumbs = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    let cumulativePath = '';
    return segments.map((segment, index) => {
      cumulativePath += `/${segment}`;
      const isLast = index === segments.length - 1;

      const name =
        segment === 'services'
          ? 'Services'
          : isLast
            ? displayServiceName
            : humanizeString(segment);

      // PageSchemaMarkup will absolutize relative URLs
      return { name, url: cumulativePath };
    });
  }, [location.pathname, displayServiceName]);


  const locationUrl = window.location.pathname.split('/services/')[0];
  console.log(locationUrl);
  // "/united-states/california/agoura-hills"




  const faqSchema = generateFAQSchema(projectFaqs);
  const reviewSchema = generateReviewSchema(projectReviews);
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

  const coloredSteps = stepProcess.map((step, i) => ({
    ...step,
    color: step.color || colorSets[i % colorSets.length].color,
    bgColor: step.bgColor || colorSets[i % colorSets.length].bgColor,
    borderColor: step.borderColor || colorSets[i % colorSets.length].borderColor,
    number: (i + 1).toString()
  }));


  return (


    <HelmetProvider>
      <Helmet>
        <title>{`${seoData?.meta_title} ${locationName}`}</title>

        <meta name="description" content={seoData.meta_description} />
        <meta name="keywords" content={seoData.meta_keywords} />

        {/* Embed FAQ schema */}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema, null, 2)}
          </script>
        )}
        {/* Embed Reviews schema */}
        {reviewSchema && (
          <script type="application/ld+json">
            {JSON.stringify(reviewSchema, null, 2)}
          </script>
        )}

      </Helmet>

      <div className="min-h-screen font-poppins">
        {/* ✅ Replace your existing PageSchemaMarkup usage with this */}
        <PageSchemaMarkup
          pageType="service-detail"
          pageTitle={`${seoData?.meta_title} ${locationName}`}
          pageDescription={seoData.meta_description}
          breadcrumbs={schemaBreadcrumbs}
          serviceName={displayServiceName}
        />

        <ServiceSchemaMarkup
          serviceName="Professional Drain Cleaning Services"
          serviceDescription="Expert drain cleaning solutions to keep your pipes flowing smoothly. 24/7 emergency service available with fast response times."
          serviceUrl={`${window.location.origin}/services/drain-cleaning`}
        />
        <Header />
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">


            <Breadcrumb>
              <BreadcrumbList>
                {/* Home */}
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center">
                      <Home className="w-4 h-4 mr-1" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Dynamic segments */}
                {(() => {
                  const segments = location.pathname.split('/').filter(Boolean); // remove empty strings

                  // Build cumulative URLs for each segment
                  let cumulativePath = '';
                  return segments.map((segment, index) => {
                    cumulativePath += `/${segment}`;
                    const isLast = index === segments.length - 1;

                    // Display: humanize string, unless it's 'services' (capitalize)
                    const displayName = segment === 'services'
                      ? 'Services'
                      : humanizeString(segment);

                    return (
                      <React.Fragment key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage className="font-medium text-green-600">
                              {displayName}
                            </BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link to={cumulativePath}>{displayName}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  });
                })()}
              </BreadcrumbList>
            </Breadcrumb>



          </div>
        </div>
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden pb-16 sm:pb-20 lg:pb-24"
          style={{
            backgroundColor: colors.surface
          }}
        >
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
              {/* Breadcrumb - Top Left */}
              <div className="absolute top-6 left-4 sm:left-8 lg:left-16 z-30">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/" className="flex items-center text-xs text-gray-600 hover:text-gray-900 transition-colors">
                            <Home className="w-3 h-3 mr-1" />
                            Home
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                          <Link to="/services" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="font-medium text-xs" style={{ color: colors.primaryButton.bg }}>{displayServiceName}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>

              <div className="pt-16 sm:pt-20 lg:pt-24">
                <div className="text-center lg:text-left space-y-6 relative z-20">

                  {/* Badge */}
                  <div className="inline-block mb-4">
                    <span
                      className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-6 py-2.5"
                      style={{
                        color: colors.heading,
                        backgroundColor: `${colors.primaryButton.bg}15`
                      }}
                    >
                      <Star className="w-4 h-4" />
                      Professional {displayServiceName} Solutions
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.1] tracking-tight">
                    <span style={{ color: colors.heading }}>
                      {locationName}
                    </span>{' '}
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
                      {displayServiceName}
                    </span>
                  </h1>

                  {/* Subheading */}
                  <p
                    className="text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                    style={{ color: colors.description }}
                  >
                    {displayServiceDescription}
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
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
                    <div className="flex items-center gap-2" style={{ color: colors.description }}>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
                      <span className="text-xs font-semibold">24/7 Available</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: colors.description }}>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#3B82F6' }}></div>
                      <span className="text-xs font-semibold">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: colors.description }}>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.accent }}></div>
                      <span className="text-xs font-semibold">Same Day Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:flex w-1/2 relative min-h-screen items-center justify-center p-8">
            <div className="relative w-full max-w-lg">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={displayServiceImage || '/placeholder.svg'}
                  alt="Professional Services"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradient.from}20, ${colors.gradient.to}20)`
                  }}
                ></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl opacity-20" style={{ backgroundColor: colors.primaryButton.bg }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl opacity-15" style={{ backgroundColor: colors.accent }}></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.primaryButton.bg }}></div>
                  <span className="text-gray-900 font-semibold text-sm">Professional Service</span>
                </div>
              </div>
            </div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ backgroundColor: colors.accent }}></div>
              <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ backgroundColor: colors.primaryButton.bg, animationDelay: '1s' }}></div>
              <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ backgroundColor: colors.accent, animationDelay: '2s' }}></div>
              <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-pulse" style={{ backgroundColor: colors.primaryButton.bg, animationDelay: '3s' }}></div>
            </div>
          </div>

          {/* Mobile Background Image */}
          <div
            className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: displayServiceImage ? `url(${displayServiceImage})` : `linear-gradient(135deg, ${colors.primaryButton.bg}, ${colors.accent})`,
              zIndex: -1
            }}
          >
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${colors.gradient.from}CC, ${colors.gradient.to}CC)`
              }}
            ></div>
          </div>
        </section>
        {/* <DrainCleaningAbout /> */}


        <section className="py-20 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-16 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Column */}
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h2 className="mb-6 animate-heading-slide-up">
                      About Our Professional {displayServiceName} Services
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 animate-subtitle-fade-in" style={{ animationDelay: '0.2s' }}>
                      {aboutService}
                    </p>
                  </div>



                  {/* Feature Grid */}

                </div>

                {/* Image Column */}
                <div className="lg:order-first animate-image-slide-right" style={{ animationDelay: '0.3s' }}>
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={ProjectBaseImage}
                        alt="Professional plumber performing drain cleaning service with modern equipment"
                        className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                    </div>

                    {/* Floating Stats Cards */}
                    <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-4 shadow-lg animate-float">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                    </div>

                    <div className="absolute -top-8 -right-8 bg-card border border-border rounded-xl p-4 shadow-lg animate-float-delayed">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Emergency Service</div>
                      </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </section>



        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text (centered vertically) */}
              <div className="prose prose-lg max-w-none animate-text-slide-left" style={{ animationDelay: '0.4s' }}>
                <h4 className="mb-4">Comprehensive Service Coverage</h4>
                <p className="mb-6">{comprehensiveCoverageText}</p>
              </div>

              {/* Right: features grid */}
              <div className="animate-image-slide-right" style={{ animationDelay: '0.3s' }}>
                <div className="grid sm:grid-cols-2 gap-4 animate-card-fade-up" style={{ animationDelay: '0.6s' }}>
                  {projectWhyChooseUs.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <DynamicFAIcon iconClass={feature.iconClass || ''} className="text-black w-18 h-18" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>












        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="mb-6 animate-heading-slide-up">
                Our Complete {projectCategory} Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-subtitle-fade-in" style={{ animationDelay: '0.2s' }}>
                Comprehensive {projectCategory} solutions for every need. for all kind of services related to {projectCategory} we've got you covered.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
              {/* Residential Services */}
              <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group animate-card-scale-in overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {/* You can put a home icon here if you want */}
                      <DynamicFAIcon iconClass="fas fa-home" className="w-18 h-18 text-green-600" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Residential Services
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {residentialServices.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group/item">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                          <DynamicFAIcon iconClass={item.iconClass} className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors leading-tight">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Commercial Services */}
              <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group animate-card-scale-in overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <DynamicFAIcon iconClass="fas fa-building" className="w-18 h-18  text-blue-600" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Commercial Services
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {commercialServices.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group/item">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                          <DynamicFAIcon iconClass={item.iconClass} className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors leading-tight">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Methods */}
              <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group animate-card-scale-in overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <DynamicFAIcon iconClass="fas fa-tools" className="w-18 h-18 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Professional Methods
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {professionalMethods.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group/item">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                          <DynamicFAIcon iconClass={item.iconClass} className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors leading-tight">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Premium Options */}
              <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group animate-card-scale-in overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <DynamicFAIcon iconClass="fas fa-gem" className="w-18 h-18  text-purple-600" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Premium Options
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {premiumOptions.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group/item">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                          <DynamicFAIcon iconClass={item.iconClass} className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors leading-tight">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* different kind of cta */}

            {/* <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20 animate-card-fade-up" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-8 text-center">
                <h4 className="font-bold text-foreground mb-4">
                  Need a Custom Solution?
                </h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {customSolutionText}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Custom Quote
                  </Button>
                  <Button variant="outline">
                    Schedule Inspection
                  </Button>
                </div>
              </CardContent>
            </Card> */}




           

          </div>
        </section>



  {cta2 && (
              <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
                <div className="container mx-auto px-16 text-center">
                  <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
                    {cta2.title}
                  </h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
                    {cta2.description}
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
            )}










        {/* <DrainCleaningProcess /> */}







        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background transition-colors duration-300 relative overflow-hidden">
          {/* ...header and background stuff... */}
          <div className="container mx-auto px-16">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">  Our Simple {displayServiceName} Process {inlocationName}</span>
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
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.stepName}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{step.serviceDescription}</p>
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


            {/* <div className="text-center mt-20">
                        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 border border-primary/20">
                          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
                          <p className="text-lg text-muted-foreground mb-6">
                            Experience our professional process firsthand. Contact us today for your free estimate!
                          </p>
                          <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Get Free Estimate
                          </button>
                        </div>
                      </div> */}






          </div>
        </section>
        {/* <WhyChooseUsSimple /> */}

        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4"> Why Choose {displayServiceName} by {projectName}  {inlocationName}?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're committed to providing exceptional {displayServiceName} services with professional expertise and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {projectWhyChooseUs.map((feature, index) => (
                <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <DynamicFAIcon
                        iconClass={feature.iconClass || ''}
                        className="w-18 h-18 text-primary"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>


        {/* <DrainCleaningGuarantee /> */}

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our {displayServiceName} Guarantee {inlocationName}
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {guaranteeText}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${guarantee.gradient} mb-4`}>
                        <DynamicFAIcon
                          iconClass={guarantee.iconClass || ''}
                          className="w-18 h-18 text-white"
                        />



                      </div>








                      <h3 className="text-xl font-bold text-foreground mb-3">{guarantee.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>



        {/* <DrainCleaningPromise /> */}


        <section className="py-20 bg-background">
          <div className="container mx-auto px-16">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Our Promise to You
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {promiseLine}

                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <DrainCleaningRelated serviceId={serviceId} cta3={cta3} phoneNumber={phoneNumber} locationUrl={locationUrl} />

  {cta3 && (
              <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
                <div className="container mx-auto px-16 text-center">
                  <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
                    {cta3.title}
                  </h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
                    {cta3.description}
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
            )}
        <section className="py-20 bg-secondary transition-colors duration-300">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our {projectCategory} services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectReviews.map((testimonial, index) => {
                const rawRating = Number(testimonial.rating) || 0;
                const fullStars = Math.floor(rawRating);
                const hasHalf = rawRating - fullStars >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

                return (
                  <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(fullStars)].map((_, i) => (
                        <Star key={`full-${index}-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      {hasHalf && (
                        <StarHalf key={`half-${index}`} className="w-5 h-5 text-yellow-400 fill-current" />
                      )}
                      {[...Array(emptyStars)].map((_, i) => (
                        <Star key={`empty-${index}-${i}`} className="w-5 h-5 text-gray-300 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{testimonial.review_text}"
                    </p>
                    <div className="flex items-center mt-auto">

                      <div>
                        <h4 className="font-semibold text-card-foreground">
                          {testimonial.customer_name}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
          <div className="container mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Got questions? We've got answers. Here are the most common questions about our {displayServiceName} services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {projectFaqs.map((faq, index) => (
                  <div key={index} className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-8 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Section */}



            </div>

          
          </div>


        </section>

          {cta1 && (
              <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
                <div className="container mx-auto px-16 text-center">
                  <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
                    {cta1.title}
                  </h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
                    {cta1.description}
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
            )}

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default DrainCleaning;
