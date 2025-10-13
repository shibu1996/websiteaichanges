
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from "react-helmet-async";
import { DynamicColorProvider } from "./components/DynamicColorProvider";
import ScrollToTop from "./components/ScrollToTop";

import React, { useEffect, useState } from 'react';
import { httpFile } from '../src/config.js';    // wherever your config lives
// Dynamic Theme Components
import ThemeIndex from "./components/ThemeIndex";
import ThemeAbout from "./components/ThemeAbout";
import ThemeServices from "./components/ThemeServices";
import ThemeContact from "./components/ThemeContact";
import ThemeServiceDetail from "./components/ThemeServiceDetail";
import ThemeAreas from "./components/ThemeAreas";
import ThemeAreaDetail from "./components/ThemeAreaDetail";
import ThemeCountry from "./components/ThemeCountry";
import ThemeState from "./components/ThemeState";
import ThemeCity from "./components/ThemeCity";
import ThemePrivacyPolicy from "./components/ThemePrivacyPolicy"
import ThemeTermsConditions from "./components/ThemeTermsConditons";
// Legal Pages
import StateDetail from "./pages/StateDetail";
import CityDetail from "./pages/CityDetail";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Theme-specific legal pages
import CleaningTermsConditions from "./themes/cleaning/pages/CleaningTermsConditions";
import CleaningPrivacyPolicy from "./themes/cleaning/pages/CleaningPrivacyPolicy";
import PlumbingTermsConditions from "./themes/plumbing/pages/PlumbingTermsConditions";
import PlumbingPrivacyPolicy from "./themes/plumbing/pages/PlumbingPrivacyPolicy";
import HVACTermsConditions from "./themes/hvac/pages/HVACTermsConditions";
import HVACPrivacyPolicy from "./themes/hvac/pages/HVACPrivacyPolicy";
import RoofingTermsConditions from "./themes/roofing/pages/RoofingTermsConditions";
import RoofingPrivacyPolicy from "./themes/roofing/pages/RoofingPrivacyPolicy";
import PaintingTermsConditions from "./themes/painting/pages/PaintingTermsConditions";
import PaintingPrivacyPolicy from "./themes/painting/pages/PaintingPrivacyPolicy";
import MultiBlog from "./themes/multicolor/pages/multiblog"
import PlumbingMaps from "./themes/plumbing/pages/PlumbingMaps";
import ListBlogs from "./themes/multicolor/pages/ListBlogs"

// import themess from "./cleaning.css"

const queryClient = new QueryClient();
// import ThemeToggle from "./themes/multicolor/components/ThemeToggle";
import { ThemeProvider } from "./themes/multicolor/contexts/ThemeContext";

// Dynamic theme configuration - define the type properly

export type ThemeType =
  | 'cleaning'
  | 'plumbing'
  | 'roofing'
  | 'hvac'
  | 'painting'
  | 'multicolor';

// 2) Declare and export a mutable theme variable
export let currentTheme: ThemeType;

const cleaningcss = "../src/cleaningcss.css"

const App = () => {

  const [theme, setTheme] = useState<'cleaning' | 'plumbing' | 'roofing' | 'hvac' | 'painting' | 'multicolor' | null>(null);
const [themeSubColor, setThemeSubColor] = useState<string | null>(null);  // New state for themeSubColor

useEffect(() => {
  const projectId = import.meta.env.VITE_PROJECT_ID;
  httpFile
    .post<{ theme: ThemeType, themeSubColor: string }>('/webapp/v1/theme', { projectId })
    .then(({ data }) => {
      const fetchedTheme = data.theme;
      const fetchedThemeSubColor = data.themeSubColor;

      // Set the theme and themeSubColor in state
      setTheme(fetchedTheme);
      setThemeSubColor(fetchedThemeSubColor);

      // Save the theme and themeSubColor to localStorage
      localStorage.setItem('maintheme', fetchedTheme);
      localStorage.setItem('theme', fetchedThemeSubColor);

      currentTheme = fetchedTheme;  // Dynamically export the fetched theme
    })
    .catch(console.error);
}, []);


  if (!theme) return <div></div>;



  return (


    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet>
          {/* Will load /themes/cleaning.css, /themes/plumbing.css, etc. */}
          <link rel="stylesheet" href={`../src/${theme}.css`} />
        </Helmet>


        <DynamicColorProvider>
          <ThemeProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  {/* Main Theme Routes */}
                  <Route path="/" element={<ThemeIndex />} />
                  <Route path="/about" element={<ThemeAbout />} />
                  <Route path="/services" element={<ThemeServices />} />
                  <Route path="/:countryname/services" element={<ThemeServices />} />
                  <Route path="/:countryname/:statename/services" element={<ThemeServices />} />
                  <Route path="/:countryname/:statename/:cityname/services" element={<ThemeServices />} />
                  <Route path="/:countryname/:statename/:cityname/:localareaname/services" element={<ThemeServices />} />

                  <Route path="/contact" element={<ThemeContact />} />
                  <Route path="/services/:serviceName" element={<ThemeServiceDetail />} />
                  <Route path="/:countryname/services/:serviceName" element={<ThemeServiceDetail />} />
                  <Route path="/:countryname/:statename/services/:serviceName" element={<ThemeServiceDetail />} />
                  <Route path="/:countryname/:statename/:cityname/services/:serviceName" element={<ThemeServiceDetail />} />
                  <Route path="/:countryname/:statename/:cityname/:localareaname/services/:serviceName" element={<ThemeServiceDetail />} />

                  <Route path="/areas" element={<ThemeAreas />} />
                  <Route path="/areas/:slug" element={<ThemeAreaDetail />} />
                  <Route path="/:slug" element={<ThemeCountry />} />
                  <Route path="/country/:countryname" element={<ThemeCountry />} />
                  <Route path="/:countryname" element={<ThemeCountry />} />
                  <Route path="/:countryname/:statename" element={<ThemeCountry />} />
                  <Route path="/:countryname/:statename/:cityname" element={<ThemeCountry />} />
                  <Route path="/:countryname/:statename/:cityname/:localareaname" element={<ThemeCountry />} />
                  <Route path="/states" element={<ThemeState />} />
                  <Route path="/cities" element={<ThemeCity />} />
                  <Route path="/privacy-policy" element={<ThemePrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<ThemeTermsConditions />} />
                  <Route path="/cities/:slug" element={<CityDetail />} />
                  <Route path="/states/:slug" element={<StateDetail />} />
                  <Route path="/maps" element={<PlumbingMaps />} />

                  {/* Theme-specific Legal Pages */}
                  <Route path="/terms-conditions" element={<CleaningTermsConditions />} />
                  <Route path="/privacy-policy" element={<CleaningPrivacyPolicy />} />

                  {/* General Legal Pages */}
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                  <Route path="/plumbing/terms-conditions" element={<PlumbingTermsConditions />} />
                  <Route path="/blog/:slug" element={<MultiBlog />} />
                  <Route path="/ListBlogs" element={<ListBlogs />} />
                  <Route path="/plumbing/privacy-policy" element={<PlumbingPrivacyPolicy />} />
                  <Route path="/hvac/terms-conditions" element={<HVACTermsConditions />} />
                  <Route path="/hvac/privacy-policy" element={<HVACPrivacyPolicy />} />
                  <Route path="/roofing/terms-conditions" element={<RoofingTermsConditions />} />
                  <Route path="/roofing/privacy-policy" element={<RoofingPrivacyPolicy />} />
                  <Route path="/painting/terms-conditions" element={<PaintingTermsConditions />} />
                  <Route path="/painting/privacy-policy" element={<PaintingPrivacyPolicy />} />
                  {/* Catch-all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>

              {/* Show the colors bar of primary secondary color change in multi color theme */}
              {/* {theme === 'multicolor' && <ThemeToggle />} */}

            </TooltipProvider>
          </ThemeProvider>

        </DynamicColorProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
};

export default App;
