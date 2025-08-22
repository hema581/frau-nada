
import { useState, useEffect } from 'react';
import { Language, translations } from '../types/language';

const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('ar')) return 'ar';
  return 'en'; // Default to English
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('dp-akademie-language');
    return (saved as Language) || detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('dp-akademie-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const t = translations[currentLanguage];

  return {
    currentLanguage,
    setLanguage: setCurrentLanguage,
    t,
    isRTL: currentLanguage === 'ar'
  };
};
