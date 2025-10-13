
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { currentTheme } from '../App';
import { useSEO } from '../hooks/useSEO';

// Cleaning Theme
import CleaningTermsConditionsPage from '../themes/cleaning/pages/CleaningTermsConditions';

// Plumbing Theme
import PlumbingTermsConditions from '../themes/plumbing/pages/PlumbingTermsConditions';

// Roofing Theme
import RoofingTermsConditions from '../themes/roofing/pages/RoofingTermsConditions';

// HVAC Theme
import HVACTermsConditions from '../themes/hvac/pages/HVACTermsConditions';

// Painting Theme
import PaintingTermsConditionsPage from '../themes/painting/pages/PaintingTermsConditions';

import MultiColorTermsConditionsPage from '../themes/multicolor/pages/TermsConditons'

const ThemeTermsConditions = () => {
  const { seoData } = useSEO('/TermsConditions');

  const renderThemeComponent = () => {
    switch (currentTheme) {
      case 'cleaning':
        return <CleaningTermsConditionsPage />;
      case 'plumbing':
        return <PlumbingTermsConditions />;
      case 'roofing':
        return <RoofingTermsConditions />;
      case 'hvac':
        return <HVACTermsConditions />;
      case 'painting':
        return <PaintingTermsConditionsPage />;
           case 'multicolor':
        return <MultiColorTermsConditionsPage />;
      default:
        return <MultiColorTermsConditionsPage />;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{seoData.meta_title}</title>
        <meta name="description" content={seoData.meta_description} />
        <meta name="keywords" content={seoData.meta_keywords} />
      </Helmet>
      {renderThemeComponent()}
    </HelmetProvider>
  );
};

export default ThemeTermsConditions;
