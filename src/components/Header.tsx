import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
// تم استيراد الصورة هنا
import logoImage from '../assets/logo.png'; 

const Header = () => {
  const { currentLanguage, setLanguage, t, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'de' as const, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar' as const, name: 'العربية', flag: '🇸🇦' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' }
  ];

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'courses', path: '/courses' },
    { key: 'faq', path: '/faq' },
    { key: 'contact', path: '/contact' } 
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link to="/" className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            
            {/* تم استبدال النص بصورة الشعار */}
            <img src={logoImage} alt="DP Akademie Logo" className="w-12 h-12" />

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className="text-xl font-display font-bold text-german-black">DP Akademie</h1>
              <p className="text-sm text-gray-600">
                {currentLanguage === 'ar' ? 'تعلم الألمانية' : 'Deutsch lernen'}
              </p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-gray-700 hover:text-german-red transition-colors font-medium whitespace-nowrap"
              >
                {t.navigation[item.key as keyof typeof t.navigation]}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <Globe className="w-4 h-4" />
                  <span>{languages.find(l => l.code === currentLanguage)?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 rounded-lg shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                      currentLanguage === lang.code ? 'bg-german-gold/10' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium whitespace-nowrap">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className="text-gray-700 hover:text-german-red transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.navigation[item.key as keyof typeof t.navigation]}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;