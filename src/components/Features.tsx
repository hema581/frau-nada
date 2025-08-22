
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { BookOpen, Clock, Award, Users, MessageCircle, GraduationCap } from 'lucide-react';

const Features = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleKey: 'personalizedLearning',
      descriptionKey: 'personalizedLearningDesc',
      color: 'text-german-red'
    },
    {
      icon: Clock,
      titleKey: 'flexibleSchedule',
      descriptionKey: 'flexibleScheduleDesc',
      color: 'text-german-gold'
    },
    {
      icon: GraduationCap,
      titleKey: 'certifiedCourses',
      descriptionKey: 'certifiedCoursesDesc',
      color: 'text-german-black'
    },
    {
      icon: Users,
      titleKey: 'smallGroups',
      descriptionKey: 'smallGroupsDesc',
      color: 'text-german-red'
    },
    {
      icon: MessageCircle,
      titleKey: 'conversationPractice',
      descriptionKey: 'conversationPracticeDesc',
      color: 'text-german-gold'
    },
    {
      icon: Award,
      titleKey: 'examPreparation',
      descriptionKey: 'examPreparationDesc',
      color: 'text-german-black'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl lg:text-4xl font-display font-bold text-german-black mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t.features.title}
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl ${isRTL ? 'mr-auto font-arabic' : 'mx-auto'}`}>
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isRTL ? 'mr-auto' : 'mx-auto'} bg-gray-100`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 text-german-black ${isRTL ? 'text-right font-arabic' : 'text-center'}`}>
                  {t.features[feature.titleKey as keyof typeof t.features]}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-center'}`}>
                  {t.features[feature.descriptionKey as keyof typeof t.features]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
