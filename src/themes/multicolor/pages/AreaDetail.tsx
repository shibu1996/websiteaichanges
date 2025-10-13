import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import { useSEO } from '../../../hooks/useSEO';
import { httpFile } from "../../../config.js";
import { generateFAQSchema, generateReviewSchema, generateServicesSchema } from "../../../hooks/schemaMarkup"
import CleaningLoader from '../../cleaning/components/CleaningLoader.js';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DynamicFAIcon from '../../../extras/DynamicFAIcon.js';
import SchemaMarkup from '../components/SchemaMarkup';

import { Home, Heart, CheckCircle, Zap, Phone, Calendar, Award, Shield, Sparkles, Star, Wrench, StarHalf, Clock, ChevronUp, ChevronDown, Flag, Building, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { removeDot } from "../../../extras/removeDot.js";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/PageBreadcrumb';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProcessSection from '../components/ProcessSection';
import { ArrowRight } from 'lucide-react';

import TestimonialsSection from '../components/TestimonialsSection';
import GuaranteeSection from '../components/GuaranteeSection';
import FAQSection from '../components/FAQSection';
import MapSection from '../components/MapSection';
import PageSchemaMarkup from '../components/PageSchemaMarkup';
import AreaSchemaMarkup from '../components/AreaSchemaMarkup';
import humanizeString from "../../../extras/stringUtils.js";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  review_text: string;
  customer_image: string;
  customer_name: string;
  rating: number | string;
}
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


// const colorSets = [
//   {
//     color: 'from-yellow-500 to-orange-500',
//     bgColor: 'bg-yellow-50'
//   },
//   {
//     color: 'from-green-500 to-emerald-500',
//     bgColor: 'bg-green-50'
//   },
//   {
//     color: 'from-blue-500 to-cyan-500',
//     bgColor: 'bg-blue-50'
//   },
//   {
//     color: 'from-purple-500 to-pink-500',
//     bgColor: 'bg-purple-50'
//   }
// ];

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


// const {
//   guarantees = [],
//   guaranteeText = '',
//   promiseLine = '',
//   projectCategory = '',
//   isLoading
// } = useGuaranteeData();

// Add color classes to each guarantee, repeating as needed






const AreaDetail = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { countryName } = useParams();
  const displayCountryName = humanizeString(countryName) || 'United States';
  const [isAreaLoading, setIsAreaLoading] = useState(false);
  let { id, UpcomingPage, nextPage, locationName, sortname, _id } = location.state || {};

  const [refId, setRefId] = useState(() => {
    if (id) return id; // coming from internal navigation
    return ""; // will set after slugToPageType API call on refresh
  });
  const sanitize = (raw: any): string =>
    typeof raw === 'string'
      ? raw.trim().replace(/^[,\s"]+|[,\s"]+$/g, '')
      : '';


  const pathname = location.pathname;
  const slug = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [projectWhyChooseUs, setProjectWhyChooseUs] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [processSteps, setProcessSteps] = useState([]);
  // Add these inside your component to lift those values into state:

  const [guarantees, setGuarantees] = useState([]);
  const [guaranteeText, setGuaranteeText] = useState("");
  const [guaranteeText2, setGuaranteeText2] = useState("");
  const [promiseLine, setPromiseLine] = useState("");
  const [heroHeading, setHeroHeading] = useState("");

  const [projectCategory, setProjectCategory] = useState("");
  const [pageType, setPageType] = useState('');
  const [projectLocations, setProjectLocations] = useState([]);
  const [projectServices, setprojectServices] = useState([]);
  const [projectReviews, setProjectReviews] = useState<Testimonial[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [projectFaqs, setprojectFaqs] = useState([]);
  const [welcomeLine, setWelcomeLine] = useState("");
  const [showName, setShowName] = useState("");
  const [countryDescription, setCountryDescription] = useState("");
  const [stateDescription, setStateDescription] = useState("");
  const [cityDescription, setCityDescription] = useState("");
  const [localAreaDescription, setLocalAreaDescription] = useState("");
  const [projectDescription, setProjectDescription] = useState('');
  const [stats, setStats] = useState([]);
  const [pageLocation, setPageLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroLoading, setIsHeroLoading] = useState(true);

  const [locInfo, setLocInfo] = useState<{ name: string; lat: number; lng: number } | null>(null);
  const [CTA, setCTA] = useState([]);
  const { seoData } = useSEO('/');
  const [heroImage, setHeroImage] = useState("");
  const [hero2Image, setHero2Image] = useState("");
  const [hero3Image, setHero3Image] = useState("");
  const [hero4Image, setHero4Image] = useState("");
  const areaSectionRef = useRef(null);

  const ctaSlotMap = {
    country: {
      slot1: 0, // first CTA
      slot2: 2, // third CTA
      slot3: 1, // second CTA
      slot4: 4, // fifth CTA
      slot5: 3  // fourth CTA
    },
    state: {
      slot1: 3, // fourth CTA
      slot2: 0, // first CTA
      slot3: 1, // second CTA
      slot4: 2, // third CTA
      slot5: 4  // fifth CTA
    },
    city: {
      slot1: 4, // second CTA
      slot2: 2, // third CTA
      slot3: 0, // first CTA
      slot4: 3, // fourth CTA
      slot5: 1  // fifth CTA
    },
    local_area: {
      slot1: 1, // second CTA
      slot2: 3, // fourth CTA
      slot3: 2, // third CTA
      slot4: 0, // first CTA
      slot5: 4  // fifth CTA
    }
  };

  const coloredGuarantees = (guarantees || []).map((g, i) => ({
    ...g,
    color: g.color || colorSets[i % colorSets.length].color,
    bgColor: g.bgColor || colorSets[i % colorSets.length].bgColor
  }));



  const getNextPage = () => {
    if (UpcomingPage === "country") return "States";
    if (UpcomingPage === "state") return "Cities";
    if (UpcomingPage === "city") return "Local Areas";
    if (UpcomingPage === "local") return "whole areas";
    return "";
  };



  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  const renderCTA = (CTA, pageType, slot, phoneNumber, projectCategory) => {
    const slotMap = ctaSlotMap[pageType] || {};
    const index = slotMap[slot];

    if (CTA.length === 0) return null;
    const cta = CTA[index] || CTA[0];




    return (



      <section className="py-20 bg-hero-gradient text-primary-foreground transition-all duration-300">
        <div className="container mx-auto px-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            {cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            {cta.description}
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
                  <a
                    href={`tel:${phoneNumber}`}>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">EMERGENCY CALL</span>
                      <span className="text-2xl font-black tracking-wide">{phoneNumber}</span>
                    </div>
                  </a>
                </div>
              </Button>
            </div>

            {/* Secondary Button */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

              <Button
                onClick={() => navigate('/contact')}
                size="lg"
                variant="outline"
                className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-10 py-8 text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
              >
                <div className="relative flex items-center">
                  <Calendar className="w-7 h-7 mr-4" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold opacity-90 uppercase tracking-wide">BOOK ONLINE</span>
                    <span className="text-xl font-black tracking-wide">Schedule Service</span>
                  </div>
                </div>
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

    );
  };


  const projectId = import.meta.env.VITE_PROJECT_ID;

  // Extract values from location state or URL

  // Get city name from URL for city/local area pages
  let cityName = pathname.split('/').pop();
  cityName = showName ? showName : cityName
  // Convert the first letter of each word to uppercase and the rest to lowercase
  cityName = cityName.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');

  function formatLocation(input) {
    const [first, second] = input.split(",").map(s => s.trim());
    if (!second) return input;
    return second.length <= 3
      ? `${first}, ${second.toUpperCase()}`
      : `${first}, ${second.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())}`;
  }

  cityName = formatLocation(cityName)

  const getTruncatedDescription = (text) => {
    if (!text) return '';
    const idx = text.indexOf('.');
    return idx !== -1 ? text.substring(0, idx + 1) : text;
  };



  const getPageTitle = () => {
    switch (pageType) {
      case 'country':
        return `${projectCategory} services in ${cityName}`;
      case 'state':
        return `${cityName} ${projectCategory} Services`;
      case 'city':
        return `${cityName} ${projectCategory} Services`;
      case 'local_area':
        return `${cityName} ${projectCategory} Services`;
      default:
        return `${projectCategory} services`;
    }
  };

  const getPageDescription = () => {
    switch (pageType) {
      case 'country':
        return `${countryDescription} in ${humanizeString(pageLocation)}.`;
      case 'state':
        return ` ${stateDescription} in ${(cityName)}`;
      case 'city':
        return ` ${cityDescription} in ${(cityName)}`;
      case 'local_area':
        return `${localAreaDescription} in ${(cityName)}`;
      default:
        return `${projectCategory} services.`;
    }
  };

  const getHeroIcon = () => {
    switch (pageType) {
      case 'country':
        return Flag;
      case 'state':
      case 'city':
        return Building;
      case 'local_area':
        return MapPin;
      default:
        return Flag;
    }
  };

  useEffect(() => {
    if (location.state?.scrollToAreaSection && areaSectionRef.current) {
      areaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]); // Runs only when location.state changes



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // runs every time URL path changes

  useEffect(() => {
    if (heroImage && hero2Image && hero3Image && hero4Image) {
      setIsHeroLoading(false);  // Set to false when hero data is ready
    }
  }, [heroImage, hero2Image, hero3Image, hero4Image]);

  // First API call to determine page type
  useEffect(() => {
    const fetchPageType = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/slugToPageType", {
          projectId,
          slug
        });

        console.log(data, "<<<<<>>>>>>>>data of slug")

        if (data?.slugType) {
          setPageType(data.slugType);
        }

        if (data?.locationId) {
          setRefId(data.locationId);
        } else if (id) {
          setRefId(id);
        }
      } catch (error) {
        console.error("Error fetching page type:", error);
        setPageType('country');
      }
    };



    if (slug) {
      fetchPageType();
    }
  }, [slug, projectId]);

  // Second API call based on page type
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiPageType = pageType;
        let refId = id;
        let apiId = _id;
        let refLocation = slug;
        let reqFrom = "";

        switch (pageType) {
          case 'country':
            reqFrom = "cleaningCountry";
            break;
          case 'state':
            reqFrom = "cleaningState";
            break;
          case 'city':
            reqFrom = "cleaningCity";
            break;
          case 'local_area':
            reqFrom = "cleningArea";
            refLocation = slug;
            break;
        }

        const { data } = await httpFile.post("/webapp/v1/my_site", {
          projectId,
          pageType: apiPageType,
          refId: refId,
          _id: apiId,
          RefLocation: refLocation,
          reqFrom: reqFrom
        });

        if (data.projectInfo && data.projectInfo.serviceType) {

          console.log(data, "faq")
          setProcessSteps(data.projectInfo.ourProcessSection || []);

          setProjectCategory(data.projectInfo.serviceType);
          setWelcomeLine(data.projectInfo.welcomeLine);
          setProjectWhyChooseUs(data.projectInfo.whyChooseUsSection || []);
          setProjectName(data.projectInfo.projectName || "Our Team");

          // after fetching data:
          setGuarantees(data.projectInfo.ourGuaranteeSection || []);
          setGuaranteeText(data.projectInfo.ourGuaranteeText || "");
          setGuaranteeText2(data.projectInfo.ourGuaranteeText2 || "");

          setPromiseLine(data.projectInfo.promiseLine || "");
          setHeroHeading(data.projectInfo.heroHeading || "");
          console.log(data.projectInfo.heroHeading, "data.projectInfo.heroHeading data.projectInfo.heroHeading ")



          setProjectReviews(data.testimonials || []);
          setprojectFaqs(data.faq || []);
          setPageLocation(data.RefLocation || '');
          setShowName(data.showName);
          setPhoneNumber(data.aboutUs.phone);
          setCTA(data.projectInfo.cta || []); // <-- store CTA here
          setIsLoading(false);
          setHeroImage(data.projectInfo.images?.[0]?.url ?? "");
          setHero2Image(data.projectInfo.images?.[1]?.url ?? "");
          setHero3Image(data.projectInfo.images?.[2]?.url ?? "");
          setHero4Image(data.projectInfo.images?.[3]?.url ?? "");

          setProjectDescription(data.projectInfo.description || '');

          if (data.projectInfo.statsSection) {

            const fetchedStats = (data.projectInfo.statsSection || []).map((s: any) => ({
              serialno: s.serialno,
              iconName: sanitize(s.iconName),
              value: sanitize(s.value),
              label: sanitize(s.label),
            }));
            setStats(fetchedStats);

          }

          // Split projectDescription into two parts



          if (data.projectInfo.descriptions) {

            setCountryDescription(removeDot(data.projectInfo.description || "")); // Country description (index 0)
            setStateDescription(removeDot(data.projectInfo.description || ""));   // State description (index 1)
            setCityDescription(removeDot(data.projectInfo.description || ""));    // City description (index 2)
            setLocalAreaDescription(removeDot(data.projectInfo.description || "")); // Local Area description (index 3)
          }

          if (data.info && data.info.lat && data.info.lng) {
            setLocInfo({
              name: data.info.name,
              lat: data.info.lat,
              lng: data.info.lng
            });
          }

          // Set isHeroLoading to false once title and description are ready
          if (getPageTitle() && getPageDescription()) {
            setIsHeroLoading(false);
          }

        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    if (pageType) {
      fetchData();
    }
  }, [pageType, projectId, slug]);

  // Make sure this useEffect runs on mount, and when the pageType and refId are available
  useEffect(() => {
    const fetchAreasWeServe = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/area_we_serve", {
          projectId,
          pageType,
          refId
        });

        if (data && data.locations) {
          setProjectLocations(data.locations || []);
        }
      } catch (error) {
        console.error("Error fetching areas we serve:", error);
      }
    };

    // Check if pageType and refId are available
    if (pageType) {

      console.log("having page type and refid")
      fetchAreasWeServe();
    } else {
      console.log("not haveing page tiyep ofr refid", pageType, refId)
    }
  }, [projectId, pageType, refId]); // Add these as dependencies so it runs when they change


  useEffect(() => {
    if (location.state?.scrollToAreaSection && areaSectionRef.current) {
      areaSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleLocationClick = (locationSlug) => {
    return `/${locationSlug}`;
  };

  const handleServiceClick = (service: any) => {
    const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');

    // Build the new route using the current pathname
    const newRoute = `${pathname}/services/${serviceName}`;

    navigate(newRoute, {
      state: {
        serviceId: service._id,
        serviceName: service.service_name,
        serviceDescription: service.service_description,
        locationName: cityName, // or your preferred location identifier
        serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage1: service.images[1]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
        serviceImage2: service.images[2]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
      }
    });
  };




  const getFirstSentence = (text: string) => {
    if (!text) return '';
    const idx = text.indexOf('.');
    return idx > -1 ? text.slice(0, idx + 1) : text;
  };



  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await httpFile.post("/webapp/v1/fetch_services", {
          projectId,
        });

        if (data) {
          setprojectServices(data.services || []);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [projectId]);

  const descriptionParts = projectDescription.split(/(?<=[.?!])\s+/); // splits by sentence endings
  const firstPart = descriptionParts.slice(0, 2).join(' ');
  const secondPart = descriptionParts.slice(2).join(' ');

  const coloredSteps = processSteps.map((step, i) => ({
    ...step,
    color: step.color || colorSets[i % colorSets.length].color,
    bgColor: step.bgColor || colorSets[i % colorSets.length].bgColor,
    borderColor: step.borderColor || colorSets[i % colorSets.length].borderColor,
    number: (i + 1).toString()
  }));
  if (isHeroLoading || isLoading) {
    return <CleaningLoader />;
  }

  // console.log(countryDescription,"countryDescriptioncountryDescriptioncountryDescriptioncountryDescription")

  const HeroIcon = getHeroIcon();
  // Extract route segments for dynamic breadcrumbs
  const segments = pathname.split('/').filter(Boolean); // removes empty strings due to leading '/'




  const faqSchema = generateFAQSchema(projectFaqs);
  const reviewSchema = generateReviewSchema(projectReviews);
  const servicesSchema = generateServicesSchema(projectServices);


  const areaName = cityName; // This would typically come from route params

  const breadcrumbItems = [
    { label: "Areas", href: "/areas" },
    { label: areaName }
  ];
  // Build breadcrumb data for schema from the same segments used by the UI
  const schemaBreadcrumbs = segments.map((segment, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return { name, url };
  });

  return (

    <HelmetProvider>
      <Helmet>
        <title>{`${seoData?.meta_title} in ${cityName}`}</title>

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
      <SchemaMarkup areaId={refId} areaType={pageType} />

      <div className="min-h-screen font-poppins">



        {/* Breadcrumb */}


        <div className="min-h-screen font-poppins">


          <PageSchemaMarkup
            pageType="area-detail"
            pageTitle={seoData.meta_title}
            pageDescription={seoData.meta_description}
            breadcrumbs={schemaBreadcrumbs} // ← now matches the visible breadcrumb trail
            areaName={areaName}
            serviceName={projectCategory}
          />

          <AreaSchemaMarkup
            areaName={areaName}
            areaDescription={seoData.meta_description}
          />
          <Header />
          <div className="bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto px-16 sm:px-6 lg:px-8">
              <Breadcrumb>
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
                    const url = '/' + segments.slice(0, index + 1).join('/');
                    const isLast = index === segments.length - 1;

                    // Capitalize each segment for display (you can use humanizeString or your utility)
                    const displayName = segment
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');

                    return (
                      <React.Fragment key={index}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage className="font-medium text-green-600">{displayName}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink asChild>
                              <Link to={url}>{displayName}</Link>
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>

            </div>
          </div>
          {/* Hero section */}


          <section
            id="home"
            className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center py-8 px-16 transition-all duration-300 overflow-hidden"
            style={{
              backgroundImage: 'ur[](https://images.unsplash.com/photo-1506744038136-46273834b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Background Overlay with Gradient */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/80 animate-gradient-shift bg-[length:200%_200%]"></div> */}

  <div
            className="
            absolute inset-0 bg-gradient-to-br
            from-[hsl(0_0%_20%_/0.8)]
            via-[hsl(0_0%_15%_/0.7)]
            to-[hsl(220_20%_10%_/0.8)]
            animate-gradient-shift bg-[length:200%_200%]
          "
          />
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
                  {heroHeading}
                  <Sparkles className="w-4 h-4 ml-1 animate-pulse" />
                </div>

                {/* Enhanced Main Headline */}
                <div className="space-y-3 animate-heading-slide-up" style={{ animationDelay: '0.2s' }}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
                    {cityName}
                    <span className="block md:inline text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text animate-gradient-shift"> {projectCategory} </span>
                    <span className="block md:inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-foreground/90">
                      Services
                    </span>
                  </h1>
                </div>

                {/* Enhanced Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-4xl mx-auto leading-relaxed animate-subtitle-fade-in" style={{ animationDelay: '0.4s' }}>
                  {getPageDescription()}

                </p>

                {/* Two Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-cta-zoom-in" style={{ animationDelay: '0.6s' }}>
                  {/* Call Now Button */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>
                    <div className="absolute -inset-1 glass-card rounded-2xl animate-pulse-glow"></div>

                    <Button
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-2xl rounded-2xl border-2 border-orange-400/50 transform hover:scale-105 transition-all duration-300 group animate-gradient-shift bg-[length:200%_200%]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-shift bg-[length:200%_200%]"></div>

                      <div className="relative flex items-center">
                        <div className="relative mr-3">
                          <Phone className="w-6 h-6 animate-float-bounce" />
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <a
                          href={`tel:${phoneNumber}`}>
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-semibold opacity-90">CALL NOW</span>
                            <span className="text-xl font-black tracking-wide">{phoneNumber}</span>
                          </div>
                        </a>
                      </div>

                      <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                      </div>
                    </Button>
                  </div>

                  {/* Get Estimate Button */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-primary to-blue-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-border-dance bg-[length:300%_300%]"></div>

                    <Button
                      onClick={() => navigate('/contact')}
                      size="lg"
                      variant="outline"
                      className="relative bg-white/95 backdrop-blur-sm text-primary border-2 border-primary/30 px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl font-bold shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300 group hover:bg-primary hover:text-white"
                    >
                      <div className="relative flex items-center">
                        <div className="relative mr-3">
                          <Wrench className="w-6 h-6 animate-float-bounce" />
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-semibold opacity-90">FREE</span>
                          <span className="text-xl font-black tracking-wide">Get Estimate</span>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* White Service Cards with Theme Colors */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 max-w-5xl mx-auto">


                </div>
              </div>
            </div>
          </section>





          <section id="about" className="py-16 sm:py-20 bg-secondary transition-colors duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
              <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent rounded-full animate-float-delayed"></div>
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
                        src={hero2Image}
                        alt="Professional plumber working"
                        className="w-full h-96 sm:h-[500px] object-cover"
                      />

                      {/* Overlay with Professional Badge */}
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-16 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm bg-primary/90">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        Licensed Professional
                      </div>

                      {/* Bottom Overlay with Stats */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-gray-600">Emergency</div>
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
          {/* services section */}

          <section id="services" className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
            <div className="container mx-auto px-16">
              <div className="text-center mb-16">
                <h2>Our {projectCategory} Services in  {cityName}</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
                  Comprehensive {projectCategory} solutions delivered by experienced professionals. We ensure quality results for every project.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {projectServices.map((service, index) => {
                  const serviceName = service.service_name.toLowerCase().replace(/\s+/g, '-');
                  const servicePath = `${pathname}/services/${serviceName}`;
                  return (
                    <Link
                      key={index}
                      to={servicePath}
                      // target="_blank" // <-- this makes it open in a new tab
                      rel="noopener noreferrer"
                      state={{
                        serviceId: service._id,
                        serviceName: service.service_name,
                        serviceDescription: service.service_description,
                        locationName: cityName,
                        serviceImage: service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
                        serviceImage1: service.images[1]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg",
                        serviceImage2: service.images[2]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"
                      }}
                      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.images[0]?.url || "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041850.jpg"}
                          alt={service.service_name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div> */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                       
                       
                 
                       
                        <div className="absolute top-4 left-4 w-12 h-12 bg-background rounded-xl flex items-center justify-center shadow-lg">
                          <i className={`${service.fas_fa_icon} text-primary text-xl`}></i>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.service_name} in {cityName}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {getTruncatedDescription(service.service_description)}
                        </p>
                      </div>
                    </Link>
                  );
                })}

              </div>
            </div>
          </section>
          {/* CTA */}

          {renderCTA(CTA, pageType, 'slot2', phoneNumber, projectCategory)}

          <section className="py-20 bg-secondary transition-colors duration-300">
            <div className="container mx-auto px-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Why Choose {projectName}?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  When you choose us, you're choosing quality, reliability, and exceptional service that's backed by years of experience and thousands of satisfied customers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectWhyChooseUs.map((feature, index) => (
                  <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      {feature.iconClass ? (
                        <DynamicFAIcon iconClass={feature.iconClass} className="text-primary text-3xl" />
                      ) : null}
                    </div>

                    <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
          {/* CTA */}

          {renderCTA(CTA, pageType, 'slot3', phoneNumber, projectCategory)}



          <section id="areas" className="py-20 bg-background transition-colors duration-300">
            <div className="container mx-auto px-16">


              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-foreground mb-8">Areas We Serve</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Professional {projectCategory} services throughout Our availability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {projectLocations.map((area, index) => (
                  <Link
                    key={index}
                    to={handleLocationClick(area.slug)}
                    state={{
                      id: area.location_id,
                      projectId,
                      UpcomingPage,
                      nextPage: getNextPage(),
                      locationName: area.name,
                      sortname: sortname,
                      _id: area._id,
                    }}
                    className="group bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MapPin className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                        {area.name}
                      </h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center text-card-foreground">
                          <Clock className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">Response time: Extreme</span>
                        </div>
                        <div className="flex items-center justify-center text-card-foreground">
                          <Shield className="w-4 h-4 text-emerald-500 mr-2" />
                          <span className="text-sm">100% Original services</span>
                        </div>
                      </div>
                      <Link
                        to={handleLocationClick(area.slug)}
                        state={{
                          id: area.location_id,
                          projectId,
                          UpcomingPage,
                          nextPage: getNextPage(),
                          locationName: area.name,
                          sortname: sortname,
                          _id: area._id,
                        }}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 w-full rounded-md inline-flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        See Areas
                      </Link>
                    </CardContent>
                  </Link>
                ))}
              </div>
            </div>
          </section>

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
                      {guaranteeText2}
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
          {/* Testimonials */}



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



          {/* CTA */}

          {renderCTA(CTA, pageType, 'slot4', phoneNumber, projectCategory)}




          {locInfo && (
            <MapSection
              locationName={locInfo.name}
              lat={locInfo.lat}
              lng={locInfo.lng}
              pageType={pageType}
            />
          )}

          {/* FAQ Section */}


          <section className="py-20 bg-gradient-to-b from-secondary to-background transition-colors duration-300">
            <div className="container mx-auto px-16">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Got questions? We've got answers. Here are the most common questions about our professional {projectCategory} services.
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
              </div>
            </div>



          </section>

          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AreaDetail;