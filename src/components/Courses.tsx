
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { BookOpen, Stethoscope, FileText, TestTube, Target } from 'lucide-react';

const Courses = () => {
  const { t, isRTL } = useLanguage();
  
  const phoneNumber = '+491234567890';

  const handleCourseClick = (courseTitle: string) => {
    const message = `${t.courses.whatsappMessage} ${courseTitle}`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const courses = [
    {
      key: 'a1',
      icon: BookOpen,
      level: 'A1',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      key: 'a2',
      icon: BookOpen,
      level: 'A2',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      key: 'b1',
      icon: FileText,
      level: 'B1',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      key: 'b2',
      icon: FileText,
      level: 'B2',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      key: 'medical',
      icon: Stethoscope,
      level: 'Medical',
      color: 'from-german-red to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-german-red'
    },
    {
      key: 'exam',
      icon: TestTube,
      level: 'Exam Prep',
      color: 'from-german-gold to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-german-black mb-4">
            {t.courses.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => {
            const courseData = t.courses[course.key as keyof typeof t.courses] as { title: string; description: string };
            const IconComponent = course.icon;
            
            return (
              <div
                key={course.key}
                className="course-card animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCourseClick(courseData.title)}
              >
                <div className={`w-16 h-16 ${course.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${course.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-german-black mb-3">
                  {courseData.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {courseData.description}
                </p>
                
                <div className={`h-1 rounded-full bg-gradient-to-r ${course.color} opacity-60`}></div>
              </div>
            );
          })}
        </div>

        {/* Placement Test Card - Full Width */}
        <div
          className="course-card animate-fade-up cursor-pointer relative overflow-hidden border-2 border-dashed border-german-gold w-full"
          style={{ animationDelay: `${courses.length * 0.1}s` }}
          onClick={() => handleCourseClick(t.courses.placement.title)}
        >
          {/* Special background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-german-gold/5 to-german-red/5 german-pattern"></div>
          
          <div className="relative z-10 text-center py-8">
            <div className="w-20 h-20 bg-gradient-to-br from-german-gold to-german-red rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-german-black mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🎯</span>
              {t.courses.placement.title}
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-8 font-medium max-w-2xl mx-auto text-lg">
              {t.courses.placement.description}
            </p>
            
            <div className="h-1 w-32 rounded-full bg-gradient-to-r from-german-gold via-german-red to-german-gold mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
