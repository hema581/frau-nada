
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { TrendingUp, Globe, Clock, Star } from 'lucide-react';

const Statistics = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      number: '95%',
      labelKey: 'successRate',
      color: 'text-green-600'
    },
    {
      icon: Globe,
      number: '12+',
      labelKey: 'countries',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      number: '1000+',
      labelKey: 'hoursOfTeaching',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      number: '4.9',
      labelKey: 'averageRating',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-german-red text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl lg:text-4xl font-display font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t.statistics.title}
          </h2>
          <p className={`text-xl text-red-100 max-w-3xl ${isRTL ? 'mr-auto font-arabic' : 'mx-auto'}`}>
            {t.statistics.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`w-16 h-16 rounded-full bg-white/20 flex items-center justify-center ${isRTL ? 'mr-auto' : 'mx-auto'} mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className={`text-red-100 ${isRTL ? 'font-arabic' : ''}`}>
                  {t.statistics[stat.labelKey as keyof typeof t.statistics]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
