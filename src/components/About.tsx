import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Award, Target, UserCheck, GraduationCap } from 'lucide-react';
// 🟢 استيراد motion من framer-motion
import { motion } from 'framer-motion';

import instructorImage from '../assets/instructor-photo.jpg'; 
import secondImage from '../assets/second-photo.jpg'; // ⬅️ تأكد من أن هذا هو اسم ومسار صورتك الثانية

const AboutSection = () => {
  const { t } = useLanguage();

  // 🟢 تعريف المتغيرات الخاصة بالانيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // يجعل العناصر تظهر بالترتيب
        delayChildren: 0.2 // تأخير قبل بدء ظهور العناصر الفرعية
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white" id="about">
      {/* 🟢 استخدام motion.div للعنصر الأب للصفحة */}
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Section Title */}
        {/* 🟢 استخدام motion.div لعنوان القسم */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-german-black">{t.about.title}</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto mt-4"></div>
        </motion.div>
        
        {/* Instructor & Mission Section */}
        {/* 🟢 استخدام motion.div لقسم المدربة والمهمة */}
        <motion.div 
          className="max-w-6xl mx-auto mb-20"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
            
            {/* Photos Container */}
            <div className="w-full md:w-1/2 lg:w-2/5 grid grid-cols-2 gap-4">
              {/* يمكن إضافة انيميشن لكل صورة بشكل منفصل إذا أردت */}
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={instructorImage}
                  alt={t.about.instructorTitle}
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={secondImage}
                  alt="DP Akademie Impression"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-start">
              <h2 className="text-2xl font-bold text-german-black mb-3 flex items-center justify-center md:justify-start gap-2">
                <GraduationCap className="w-7 h-7 text-german-red" /> 
                {t.about.instructorTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.about.instructorBio}
              </p>
              
              <h2 className="text-2xl font-bold text-german-black mb-3 flex items-center justify-center md:justify-start gap-2">
                <Target className="w-7 h-7 text-german-gold" />
                {t.about.missionTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        {/* 🟢 استخدام motion.div لقسم الشهادات */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-german-black mb-10 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-german-gold" />
            {t.about.certificationsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Award className="w-12 h-12 text-german-gold mx-auto mb-4" />
                <h3 className="font-bold text-xl text-german-black mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        {/* 🟢 استخدام motion.div لقسم آراء الطلاب */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-german-black mb-10">
            {t.about.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <UserCheck className="w-10 h-10 text-german-gold mx-auto mb-4" />
                <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-german-black">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.course}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default AboutSection;