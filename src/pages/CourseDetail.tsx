import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowLeft, BookCheck, Users, Target, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseData {
  title: string;
  description: string;
  details: string;
  forWhom: string;
  topics: string[];
  whatsappMessage?: string; 
}

const CourseDetailPage = () => {
  // 🟢 تم طلب 'language' من الهوك لمعرفة اللغة الحالية
const { t, currentLanguage: language } = useLanguage();
  const { courseId } = useParams<{ courseId: string }>();

  const course = t.courses[courseId as keyof typeof t.courses] as CourseData;

  if (!course || !course.title) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">{t.courseDetail.courseNotFound}</h2>
        <Link to="/courses" className="text-german-red hover:underline mt-4 inline-block">
          {t.courseDetail.returnToCourses}
        </Link>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    let messageText: string;
    const courseTitle = course.title; // اسم الدورة

    // 🟢 تم تعديل الكود بالكامل هنا ليناسب طلبك
    // سيتم بناء الجملة بناءً على اللغة المختارة
    if (language === 'ar') {
      messageText = `مرحباً! أنا مهتم بالتسجيل في دورة "${courseTitle}".`;
    } else if (language === 'de') {
      messageText = `Hallo! Ich interessiere mich für den Kurs "${courseTitle}".`;
    } else { // 'en' and any other language
      messageText = `Hello! I am interested in registering for the course "${courseTitle}".`;
    }

    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/201029398799?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <Link to="/courses" className="inline-flex items-center text-gray-600 hover:text-german-black mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 ltr:mr-2 rtl:ml-2" />
            <span>{t.courseDetail.backToCourses}</span>
          </Link>

          <h1 className="text-4xl lg:text-5xl font-display font-bold text-german-black mb-4">{course.title}</h1>
          <p className="text-xl text-gray-500 mb-8">{course.description}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mb-12"></div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><Target className="w-7 h-7 text-german-red" /> {t.courseDetail.aboutCourse}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{course.details}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><Users className="w-7 h-7 text-german-red" /> {t.courseDetail.forWhom}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{course.forWhom}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-4"><BookCheck className="w-7 h-7 text-german-red" /> {t.courseDetail.whatYouWillLearn}</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                {course.topics.map((topic, index) => <li key={index}>{topic}</li>)}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="btn-primary px-10 py-4 text-xl font-semibold rounded-xl flex items-center gap-3" onClick={handleWhatsAppContact}>
              <MessageCircle className="w-6 h-6" />
              <span>{t.courseDetail.registerNow}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailPage;