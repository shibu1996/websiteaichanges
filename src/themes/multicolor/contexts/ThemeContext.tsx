
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'crimson-jet' | 'indigo-sand' | 'saffron-charcoal' | 'mint-slate' | 'marine-teal' | 'royal-plum' | 'electric-cobalt' | 'copper-forest' | 'ruby-night' | 'citrus-navy';

interface ColorElements {
  heading: string;
  description: string;
  surface: string;
  overlay: { color: string; blend: string };
  primaryButton: { bg: string; text: string; hover: string };
  secondaryButton: { bg: string; text: string; border: string; hover: string };
  accent: string;
  gradient: { from: string; to: string };
  ring: string;
  shadow: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setSpecificTheme: (theme: Theme) => void;
  getThemeColors: () => ColorElements;
}

const themeColors: Record<Theme, ColorElements> = {
  'crimson-jet': {
    heading: '#F8FAFC',
    description: '#C7CDD6',
    surface: '#0E1214',
    overlay: { color: 'rgba(14,16,20,0.55)', blend: 'multiply' },
    primaryButton: { bg: '#E11D48', text: '#FFFFFF', hover: '#BE123C' },
    secondaryButton: { bg: 'transparent', text: '#F8FAFC', border: '#F43F5E', hover: 'rgba(244,63,94,0.10)' },
    accent: '#F59E0B',
    gradient: { from: '#0E1214', to: '#1F2937' },
    ring: '#F43F5E',
    shadow: 'rgba(0,0,0,0.35)'
  },
  'indigo-sand': {
    heading: '#F8FAFC',
    description: '#BCC6DD',
    surface: '#0F1222',
    overlay: { color: 'rgba(12,14,28,0.57)', blend: 'multiply' },
    primaryButton: { bg: '#4F46E5', text: '#FFFFFF', hover: '#4338CA' },
    secondaryButton: { bg: 'transparent', text: '#E5E7EB', border: '#818CF8', hover: 'rgba(129,140,248,0.12)' },
    accent: '#EAB308',
    gradient: { from: '#0F1222', to: '#111827' },
    ring: '#818CF8',
    shadow: 'rgba(0,0,0,0.34)'
  },
  'saffron-charcoal': {
    heading: '#FFFFFF',
    description: '#E5E7EB',
    surface: '#121212',
    overlay: { color: 'rgba(12,12,12,0.46)', blend: 'multiply' },
    primaryButton: { bg: '#FDB022', text: '#1A1306', hover: '#DC8D05' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#FACC15', hover: 'rgba(250,204,21,0.14)' },
    accent: '#84CC16',
    gradient: { from: '#0B0B0B', to: '#1A1A1A' },
    ring: '#FACC15',
    shadow: 'rgba(0,0,0,0.45)'
  },
  'mint-slate': {
    heading: '#FFFFFF',
    description: '#D3DEDA',
    surface: '#0B1412',
    overlay: { color: 'rgba(8,12,12,0.52)', blend: 'multiply' },
    primaryButton: { bg: '#22C55E', text: '#FFFFFF', hover: '#179B4A' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#34D399', hover: 'rgba(52,211,153,0.16)' },
    accent: '#60A5FA',
    gradient: { from: '#0B1412', to: '#0F1A18' },
    ring: '#34D399',
    shadow: 'rgba(0,0,0,0.40)'
  },
  'marine-teal': {
    heading: '#FFFFFF',
    description: '#BDD0DB',
    surface: '#0B1720',
    overlay: { color: 'rgba(7,16,18,0.62)', blend: 'multiply' },
    primaryButton: { bg: '#0EA5A4', text: '#FFFFFF', hover: '#0C7E7D' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#22D3EE', hover: 'rgba(34,211,238,0.16)' },
    accent: '#A7F3D0',
    gradient: { from: '#0B1720', to: '#0F2430' },
    ring: '#22D3EE',
    shadow: 'rgba(0,0,0,0.38)'
  },
  'royal-plum': {
    heading: '#FFFFFF',
    description: '#D8CCE6',
    surface: '#120C18',
    overlay: { color: 'rgba(12,6,18,0.56)', blend: 'multiply' },
    primaryButton: { bg: '#A855F7', text: '#FFFFFF', hover: '#7E22CE' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#C084FC', hover: 'rgba(192,132,252,0.14)' },
    accent: '#F59E0B',
    gradient: { from: '#0F0A16', to: '#1A1230' },
    ring: '#C084FC',
    shadow: 'rgba(0,0,0,0.42)'
  },
  'electric-cobalt': {
    heading: '#F8FAFC',
    description: '#B8C7D9',
    surface: '#0A1220',
    overlay: { color: 'rgba(6,10,22,0.60)', blend: 'multiply' },
    primaryButton: { bg: '#2563EB', text: '#FFFFFF', hover: '#1E40AF' },
    secondaryButton: { bg: 'transparent', text: '#F8FAFC', border: '#38BDF8', hover: 'rgba(56,189,248,0.14)' },
    accent: '#22D3EE',
    gradient: { from: '#0A1220', to: '#0F172A' },
    ring: '#38BDF8',
    shadow: 'rgba(0,0,0,0.40)'
  },
  'copper-forest': {
    heading: '#FFFFFF',
    description: '#C9D6CF',
    surface: '#0D1512',
    overlay: { color: 'rgba(8,18,14,0.58)', blend: 'multiply' },
    primaryButton: { bg: '#D97706', text: '#0E0A04', hover: '#B45309' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#F59E0B', hover: 'rgba(245,158,11,0.14)' },
    accent: '#34D399',
    gradient: { from: '#0D1512', to: '#12201B' },
    ring: '#F59E0B',
    shadow: 'rgba(0,0,0,0.44)'
  },
  'ruby-night': {
    heading: '#FFFFFF',
    description: '#E2C9CF',
    surface: '#140A0D',
    overlay: { color: 'rgba(18,6,8,0.60)', blend: 'multiply' },
    primaryButton: { bg: '#DC2626', text: '#FFFFFF', hover: '#991B1B' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#F87171', hover: 'rgba(248,113,113,0.14)' },
    accent: '#FB923C',
    gradient: { from: '#140A0D', to: '#1F0E13' },
    ring: '#F87171',
    shadow: 'rgba(0,0,0,0.46)'
  },
  'citrus-navy': {
    heading: '#FFFFFF',
    description: '#C9D3E6',
    surface: '#0A1224',
    overlay: { color: 'rgba(8,12,28,0.62)', blend: 'multiply' },
    primaryButton: { bg: '#F59E0B', text: '#1A1306', hover: '#D97706' },
    secondaryButton: { bg: 'transparent', text: '#FFFFFF', border: '#FBBF24', hover: 'rgba(251,191,36,0.16)' },
    accent: '#10B981',
    gradient: { from: '#0A1224', to: '#0C1A33' },
    ring: '#FBBF24',
    shadow: 'rgba(0,0,0,0.43)'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('crimson-jet');

  useEffect(() => {
    const savedTheme = localStorage.getItem('heroTheme') as Theme;
    const validThemes: Theme[] = ['crimson-jet', 'indigo-sand', 'saffron-charcoal', 'mint-slate', 'marine-teal', 'royal-plum', 'electric-cobalt', 'copper-forest', 'ruby-night', 'citrus-navy'];
    if (savedTheme && validThemes.includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('heroTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const themes: Theme[] = ['crimson-jet', 'indigo-sand', 'saffron-charcoal', 'mint-slate', 'marine-teal', 'royal-plum', 'electric-cobalt', 'copper-forest', 'ruby-night', 'citrus-navy'];
      const currentIndex = themes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  const setSpecificTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const getThemeColors = () => {
    return themeColors[theme];
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setSpecificTheme, getThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
