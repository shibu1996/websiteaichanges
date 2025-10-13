
import React from 'react';
import PlumbingHeader from '../components/PlumbingHeader';
import PlumbingFooter from '../components/PlumbingFooter';
import MapboxMap from '../../../components/MapboxMap';
import { MapPin, Navigation, Globe, Zap, Clock, Phone, Building, Home, Factory, Waves, Shield, Star, Heart, Award } from 'lucide-react';

const PlumbingMaps = () => {
  // 1. USA National Coverage - Premium Service Network
  const nationalLocations = [
    {
      name: "New York Metropolitan Area",
      coordinates: { lat: 40.7128, lng: -74.0060 },
      description: "East Coast Regional Headquarters - Serving 5 Million+ Residents",
      responseTime: "24/7 Emergency Coverage"
    },
    {
      name: "Los Angeles Metropolitan Area", 
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "West Coast Operations Center - Hollywood to Orange County",
      responseTime: "24/7 Emergency Coverage"
    },
    {
      name: "Chicago Metropolitan Area",
      coordinates: { lat: 41.8781, lng: -87.6298 },
      description: "Midwest Regional Hub - Great Lakes Service Network",
      responseTime: "24/7 Emergency Coverage"
    },
    {
      name: "Houston Energy Corridor",
      coordinates: { lat: 29.7604, lng: -95.3698 },
      description: "Southern Operations Base - Oil & Gas Industry Specialist",
      responseTime: "24/7 Emergency Coverage"
    },
    {
      name: "Phoenix Desert Metro",
      coordinates: { lat: 33.4484, lng: -112.0740 },
      description: "Southwest Service Center - Desert Climate Specialists",
      responseTime: "24/7 Emergency Coverage"
    },
    {
      name: "Miami-Dade Service Zone",
      coordinates: { lat: 25.7617, lng: -80.1918 },
      description: "Southeast Operations - Hurricane-Ready Infrastructure",
      responseTime: "24/7 Emergency Coverage"
    }
  ];

  // 2. California Golden State Network
  const californiaLocations = [
    {
      name: "San Francisco Bay Area Tech Hub",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      description: "Silicon Valley Headquarters - Tech Campus Specialists",
      responseTime: "15-30 min response"
    },
    {
      name: "Los Angeles Entertainment District",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "Hollywood & Entertainment Industry Services",
      responseTime: "15-30 min response"
    },
    {
      name: "San Diego Coastal Operations",
      coordinates: { lat: 32.7157, lng: -117.1611 },
      description: "Border Region & Navy Base Services",
      responseTime: "20-35 min response"
    },
    {
      name: "Sacramento Capital Services",
      coordinates: { lat: 38.5767, lng: -121.4687 },
      description: "State Government & Central Valley Coverage",
      responseTime: "25-40 min response"
    },
    {
      name: "Fresno Agricultural Hub",
      coordinates: { lat: 36.7378, lng: -119.7871 },
      description: "Agricultural & Farm Equipment Specialists",
      responseTime: "30-45 min response"
    },
    {
      name: "Orange County Luxury Services",
      coordinates: { lat: 33.7455, lng: -117.8677 },
      description: "Premium Residential & Resort Communities",
      responseTime: "20-30 min response"
    }
  ];

  // 3. Los Angeles Premium Service Zones
  const losAngelesMetroLocations = [
    {
      name: "Downtown Financial District",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "High-Rise & Commercial Building Specialists",
      responseTime: "10-20 min priority"
    },
    {
      name: "Hollywood Hills Luxury Homes",
      coordinates: { lat: 34.0928, lng: -118.3287 },
      description: "Celebrity Homes & Luxury Estate Services",
      responseTime: "15-25 min VIP"
    },
    {
      name: "Beverly Hills Exclusive",
      coordinates: { lat: 34.0736, lng: -118.4004 },
      description: "Ultra-Luxury Residential & Boutique Services",
      responseTime: "15-25 min VIP"
    },
    {
      name: "Santa Monica Beachfront",
      coordinates: { lat: 34.0195, lng: -118.4912 },
      description: "Coastal Properties & Beach Club Services",
      responseTime: "20-30 min coastal"
    },
    {
      name: "Pasadena Historic District",
      coordinates: { lat: 34.1478, lng: -118.1445 },
      description: "Historic Homes & Heritage Property Care",
      responseTime: "20-30 min heritage"
    },
    {
      name: "Long Beach Port Services",
      coordinates: { lat: 33.7701, lng: -118.1937 },
      description: "Maritime & Industrial Port Operations",
      responseTime: "25-35 min industrial"
    },
    {
      name: "West Hollywood Entertainment",
      coordinates: { lat: 34.0900, lng: -118.3617 },
      description: "Nightlife & Entertainment Venue Services",
      responseTime: "18-28 min nightlife"
    }
  ];

  // 4. Rapid Response Emergency Network
  const emergencyZonesLA = [
    {
      name: "Priority Zone Alpha - Central LA",
      coordinates: { lat: 34.0522, lng: -118.2437 },
      description: "🚨 EMERGENCY HQ - Fastest Response Team",
      responseTime: "5-15 min URGENT"
    },
    {
      name: "Priority Zone Beta - West LA",
      coordinates: { lat: 34.0522, lng: -118.4437 },
      description: "🚨 Westside Emergency Unit - 24/7 Standby",
      responseTime: "10-20 min URGENT"
    },
    {
      name: "Priority Zone Gamma - East LA",
      coordinates: { lat: 34.0522, lng: -118.1437 },
      description: "🚨 Eastside Rapid Response - Mobile Units",
      responseTime: "10-20 min URGENT"
    },
    {
      name: "Priority Zone Delta - South LA",
      coordinates: { lat: 33.9522, lng: -118.2437 },
      description: "🚨 South LA Emergency Brigade - Hospital Priority",
      responseTime: "15-25 min URGENT"
    },
    {
      name: "Priority Zone Echo - North LA",
      coordinates: { lat: 34.1522, lng: -118.2437 },
      description: "🚨 Valley Emergency Response - Suburban Specialist",
      responseTime: "12-22 min URGENT"
    }
  ];

  // 5. Business & Corporate Districts
  const commercialDistricts = [
    {
      name: "Financial District Towers",
      coordinates: { lat: 34.0507, lng: -118.2467 },
      description: "🏢 Fortune 500 Companies & Banking Centers",
      responseTime: "15-25 min corporate"
    },
    {
      name: "Arts District Creative Hub",
      coordinates: { lat: 34.0394, lng: -118.2348 },
      description: "🎨 Creative Spaces & Artist Lofts",
      responseTime: "20-30 min creative"
    },
    {
      name: "Fashion District Showrooms",
      coordinates: { lat: 34.0394, lng: -118.2581 },
      description: "👗 Garment Industry & Fashion Houses",
      responseTime: "20-30 min fashion"
    },
    {
      name: "Koreatown Business Plaza",
      coordinates: { lat: 34.0522, lng: -118.3000 },
      description: "🏪 International Business & Restaurant District",
      responseTime: "25-35 min international"
    },
    {
      name: "Century City Corporate",
      coordinates: { lat: 34.0583, lng: -118.4156 },
      description: "🏢 Law Firms & Entertainment Agencies",
      responseTime: "18-28 min executive"
    }
  ];

  // 6. Luxury Residential Estates
  const residentialAreas = [
    {
      name: "Bel Air Mega Mansions",
      coordinates: { lat: 34.0900, lng: -118.4456 },
      description: "🏰 Ultra-Luxury Estates & Celebrity Homes",
      responseTime: "20-30 min luxury"
    },
    {
      name: "Manhattan Beach Oceanfront",
      coordinates: { lat: 33.8847, lng: -118.4109 },
      description: "🏖️ Beachfront Luxury Homes & Ocean Views",
      responseTime: "30-40 min beachfront"
    },
    {
      name: "Silver Lake Trendy Homes",
      coordinates: { lat: 34.0928, lng: -118.2739 },
      description: "🏡 Hip Residential & Artistic Community",
      responseTime: "20-30 min trendy"
    },
    {
      name: "Westwood Family Estates",
      coordinates: { lat: 34.0633, lng: -118.4456 },
      description: "👨‍👩‍👧‍👦 Family Neighborhoods & UCLA Area",
      responseTime: "25-35 min family"
    },
    {
      name: "Malibu Celebrity Retreats",
      coordinates: { lat: 34.0259, lng: -118.7798 },
      description: "🏖️ Exclusive Beach Homes & Private Estates",
      responseTime: "35-45 min exclusive"
    }
  ];

  // 7. Heavy Industry & Manufacturing
  const industrialAreas = [
    {
      name: "Port of LA Maritime Complex",
      coordinates: { lat: 33.7361, lng: -118.2644 },
      description: "⚓ Major Shipping Port & Container Facilities",
      responseTime: "35-45 min maritime"
    },
    {
      name: "Vernon Manufacturing Hub",
      coordinates: { lat: 34.0044, lng: -118.2317 },
      description: "🏭 Heavy Manufacturing & Industrial Plants",
      responseTime: "25-35 min industrial"
    },
    {
      name: "Commerce Logistics Center",
      coordinates: { lat: 34.0067, lng: -118.1597 },
      description: "📦 Warehousing & Distribution Centers",
      responseTime: "30-40 min logistics"
    },
    {
      name: "El Segundo Aerospace Valley",
      coordinates: { lat: 33.9192, lng: -118.4192 },
      description: "🚀 Aerospace & Defense Industry",
      responseTime: "30-40 min aerospace"
    },
    {
      name: "Torrance Auto Manufacturing",
      coordinates: { lat: 33.8358, lng: -118.3406 },
      description: "🚗 Automotive Plants & Tech Centers",
      responseTime: "32-42 min automotive"
    }
  ];

  // 8. Educational Excellence Network
  const educationalInstitutions = [
    {
      name: "UCLA Westwood Campus",
      coordinates: { lat: 34.0689, lng: -118.4452 },
      description: "🎓 Major University Campus & Research Facilities",
      responseTime: "20-30 min academic"
    },
    {
      name: "USC University Park",
      coordinates: { lat: 34.0224, lng: -118.2851 },
      description: "🏛️ Private University & Student Housing",
      responseTime: "25-35 min university"
    },
    {
      name: "CalTech Research Campus",
      coordinates: { lat: 34.1377, lng: -118.1253 },
      description: "🔬 Scientific Research & Laboratory Facilities",
      responseTime: "30-40 min research"
    },
    {
      name: "CSUN Valley Campus",
      coordinates: { lat: 34.2411, lng: -118.5291 },
      description: "📚 State University & Community College",
      responseTime: "35-45 min state"
    },
    {
      name: "LATTC Technical Institute",
      coordinates: { lat: 34.0067, lng: -118.2417 },
      description: "⚙️ Technical Training & Vocational Programs",
      responseTime: "28-38 min technical"
    }
  ];

  // 9. Critical Healthcare Network
  const healthcareFacilities = [
    {
      name: "Cedars-Sinai Medical Center",
      coordinates: { lat: 34.0755, lng: -118.3785 },
      description: "🏥 Level 1 Trauma Center & Emergency Care",
      responseTime: "15-25 min CRITICAL"
    },
    {
      name: "UCLA Medical Center",
      coordinates: { lat: 34.0689, lng: -118.4452 },
      description: "🚑 University Hospital & Specialty Care",
      responseTime: "20-30 min CRITICAL"
    },
    {
      name: "Children's Hospital LA",
      coordinates: { lat: 34.0975, lng: -118.2697 },
      description: "👶 Pediatric Specialty & NICU Services",
      responseTime: "20-30 min PEDIATRIC"
    },
    {
      name: "Good Samaritan Hospital",
      coordinates: { lat: 34.0611, lng: -118.2664 },
      description: "⛑️ Downtown Emergency & Trauma Services",
      responseTime: "15-25 min EMERGENCY"
    },
    {
      name: "Kaiser Permanente LA",
      coordinates: { lat: 34.0886, lng: -118.2439 },
      description: "🩺 Integrated Healthcare & Wellness Center",
      responseTime: "22-32 min HEALTHCARE"
    }
  ];

  // 10. Entertainment & Tourism Hotspots
  const entertainmentTourism = [
    {
      name: "Hollywood Walk of Fame",
      coordinates: { lat: 34.1022, lng: -118.3406 },
      description: "⭐ Iconic Tourist Attraction & Theater District",
      responseTime: "20-30 min entertainment"
    },
    {
      name: "Griffith Observatory",
      coordinates: { lat: 34.1184, lng: -118.3004 },
      description: "🔭 Observatory, Planetarium & Park Services",
      responseTime: "25-35 min observatory"
    },
    {
      name: "Santa Monica Pier",
      coordinates: { lat: 34.0089, lng: -118.4973 },
      description: "🎡 Iconic Pier, Amusement Park & Restaurants",
      responseTime: "30-40 min pier"
    },
    {
      name: "Getty Center",
      coordinates: { lat: 34.0780, lng: -118.4740 },
      description: "🎨 World-Class Art Museum & Cultural Center",
      responseTime: "25-35 min cultural"
    },
    {
      name: "Dodger Stadium",
      coordinates: { lat: 34.0739, lng: -118.2400 },
      description: "⚾ Major League Stadium & Sports Complex",
      responseTime: "22-32 min sports"
    },
    {
      name: "Universal Studios Hollywood",
      coordinates: { lat: 34.1381, lng: -118.3534 },
      description: "🎬 Theme Park & Movie Studio Tours",
      responseTime: "28-38 min theme park"
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-gray-50">
      <PlumbingHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Interactive Service Maps
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our comprehensive plumbing service coverage with 10 unique interactive maps showcasing real locations, precise response times, and specialized service areas across the nation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="flex items-center text-white">
                <Shield className="w-5 h-5 mr-2" />
                24/7 Emergency
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="flex items-center text-white">
                <Star className="w-5 h-5 mr-2" />
                Premium Service
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="flex items-center text-white">
                <Heart className="w-5 h-5 mr-2" />
                Local Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* 1. National Premium Network */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-blue-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-2xl mr-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  National Premium Service Network
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Elite plumbing services across America's major metropolitan areas with 24/7 emergency response</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-300">
              <MapboxMap
                centerCoordinates={[-98.5795, 39.8283]}
                zoom={4}
                locations={nationalLocations}
                areaName="USA Premium Network"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 2. California Golden State */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-xl border border-amber-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-2xl mr-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  California Golden State Network
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive coverage throughout California's diverse regions from Silicon Valley to Hollywood</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-300">
              <MapboxMap
                centerCoordinates={[-119.4179, 36.7783]}
                zoom={6}
                locations={californiaLocations}
                areaName="California Golden State"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 3. Los Angeles Premium Zones */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border border-purple-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Los Angeles Premium Service Zones
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Exclusive service areas covering luxury districts from Beverly Hills to Hollywood</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-300">
              <MapboxMap
                centerCoordinates={[-118.2437, 34.0522]}
                zoom={10}
                locations={losAngelesMetroLocations}
                areaName="LA Premium Zones"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 4. Emergency Response Network */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl shadow-xl border-4 border-red-300">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-2xl mr-4 animate-pulse">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  🚨 Rapid Emergency Response Network
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Priority emergency zones with lightning-fast response times for critical situations</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-red-400 ring-4 ring-red-200 ring-opacity-50">
              <MapboxMap
                centerCoordinates={[-118.2437, 34.0522]}
                zoom={11}
                locations={emergencyZonesLA}
                areaName="Emergency Response Zones"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 5. Business & Corporate */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-slate-600 to-gray-600 p-3 rounded-2xl mr-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                  Business & Corporate Districts
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized commercial services for business districts and corporate facilities</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-300">
              <MapboxMap
                centerCoordinates={[-118.2500, 34.0450]}
                zoom={12}
                locations={commercialDistricts}
                areaName="Business Districts"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 6. Luxury Residential */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-xl border border-emerald-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl mr-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Luxury Residential Estates
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Premium residential services for luxury homes and exclusive neighborhoods</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-emerald-300">
              <MapboxMap
                centerCoordinates={[-118.4000, 34.0600]}
                zoom={11}
                locations={residentialAreas}
                areaName="Luxury Residential"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 7. Industrial & Manufacturing */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-3xl shadow-xl border border-orange-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-2xl mr-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Heavy Industry & Manufacturing
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Industrial-grade plumbing for ports, manufacturing plants, and heavy industry</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-300">
              <MapboxMap
                centerCoordinates={[-118.2200, 33.9500]}
                zoom={11}
                locations={industrialAreas}
                areaName="Industrial Zones"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 8. Educational Excellence */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl shadow-xl border border-indigo-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-3 rounded-2xl mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Educational Excellence Network
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized campus services for universities, research facilities, and educational institutions</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-300">
              <MapboxMap
                centerCoordinates={[-118.3000, 34.1500]}
                zoom={10}
                locations={educationalInstitutions}
                areaName="Educational Network"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 9. Critical Healthcare */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl shadow-xl border-4 border-rose-300">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-3 rounded-2xl mr-4 animate-pulse">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Critical Healthcare Network
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Priority medical facility services for hospitals, emergency centers, and healthcare providers</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-rose-400 ring-4 ring-rose-200 ring-opacity-50">
              <MapboxMap
                centerCoordinates={[-118.3200, 34.0700]}
                zoom={11}
                locations={healthcareFacilities}
                areaName="Healthcare Network"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

          {/* 10. Entertainment & Tourism */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-3xl shadow-xl border border-violet-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-2xl mr-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Entertainment & Tourism Hotspots
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">Specialized services for major attractions, theme parks, and entertainment venues</p>
            </div>
            <div className="h-96 rounded-2xl shadow-2xl overflow-hidden border-4 border-violet-300">
              <MapboxMap
                centerCoordinates={[-118.3700, 34.0600]}
                zoom={11}
                locations={entertainmentTourism}
                areaName="Entertainment Zones"
                className="h-full"
                theme="plumbing"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Find Your Service Zone</h2>
          <p className="text-xl text-blue-100 mb-8">
            From emergency repairs to luxury installations, we're your trusted plumbing experts across every service zone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:5551234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (555) 123-4567
            </a>
            <a 
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
            >
              <Clock className="w-6 h-6 mr-2" />
              Get Instant Quote
            </a>
          </div>
        </div>
      </section>

      <PlumbingFooter />
    </div>
  );
};

export default PlumbingMaps;
