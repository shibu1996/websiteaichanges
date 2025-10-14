
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { currentTheme } from '../App';
import { useSEO } from '../hooks/useSEO';

// Cleaning Theme
import CleaningIndex from '../themes/cleaning/pages/CleaningIndex';

import MulticolorIndex from '../themes/multicolor/pages/Index'

const ThemeIndex = () => {
  const { seoData } = useSEO('/home');

  const renderThemeComponent = () => {
    switch (currentTheme) {
      case 'cleaning':
        return <CleaningIndex />;
                                    case 'multicolor':
        return <MulticolorIndex />;
      default:
        return <CleaningIndex />;
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

export default ThemeIndex;
