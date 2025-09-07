import { useState, useEffect, useMemo } from 'react';
import { translations, Language, TranslationContent } from '../translations'; // تأكد من أن مسار ملف الترجمة صحيح

// دالة للحصول على اللغة المحفوظة أو الافتراضية
const getInitialLanguage = (): Language => {
  // حاول قراءة اللغة من localStorage
  const storedLang = localStorage.getItem('language');
  // تحقق إذا كانت اللغة المحفوظة هي إحدى اللغات المعتمدة
  if (storedLang && (storedLang === 'de' || storedLang === 'ar' || storedLang === 'en')) {
    return storedLang;
  }
  // إذا لم تكن موجودة، استخدم لغة المتصفح أو الألمانية كافتراضي
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'ar' || browserLang === 'de' || browserLang === 'en') {
    return browserLang;
  }
  return 'de'; // اللغة الافتراضية
};

export const useLanguage = () => {
  // الخطوة 1: استخدام useState لتخزين اللغة الحالية في ذاكرة التطبيق
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  // الخطوة 2: استخدام useEffect لحفظ اللغة في localStorage كلما تغيرت
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    // تحديث اتجاه الصفحة (RTL/LTR)
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // الخطوة 3 (الأهم): استخدام useMemo لإعادة حساب الترجمات فقط عند تغير اللغة
  const t = useMemo((): TranslationContent => {
    return translations[currentLanguage];
  }, [currentLanguage]);

  const isRTL = useMemo(() => currentLanguage === 'ar', [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  // إرجاع كل القيم التي تحتاجها المكونات
  return { currentLanguage, setLanguage, t, isRTL };
};