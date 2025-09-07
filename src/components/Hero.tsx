import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/my-hero-image.jpg';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-red-50/30"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-german-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-german-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className={`text-4xl lg:text-6xl font-display font-bold text-german-black leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                {t.hero.title}
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-700 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t.hero.subtitle}
              </p>
              <p className={`text-lg text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                {t.hero.description}
              </p>
            </div>

            <div className={`flex flex-wrap gap-4`}>
              <Link to="/courses">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl">
                  {t.hero.cta}
                </Button>
              </Link>
              {/* 🟢 تم حذف زر اختبار تحديد المستوى من هنا */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-german-red/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-german-red" />
                </div>
                <div className="text-2xl font-bold text-german-black">A1-B2</div>
                <div className={`text-sm text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>{t.hero.stats.levels}</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-german-gold/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-german-black">500+</div>
                <div className={`text-sm text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>{t.hero.stats.students}</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-german-black" />
                </div>
                <div className="text-2xl font-bold text-german-black">95%</div>
                <div className={`text-sm text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>{t.hero.stats.success}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={HeroImage} 
              alt="DP Akademie - تعلم اللغة الألمانية"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;