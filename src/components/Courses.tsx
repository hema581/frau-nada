import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CoursesPreview = () => {
  const { t } = useLanguage();

  const mainCourses = [
    { id: 'a1', title: t.courses.a1.title, description: t.courses.a1.description },
    { id: 'a2', title: t.courses.a2.title, description: t.courses.a2.description },
    { id: 'b1', title: t.courses.b1.title, description: t.courses.b1.description },
    { id: 'b2', title: t.courses.b2.title, description: t.courses.b2.description },
    { id: 'medical', title: t.courses.medical.title, description: t.courses.medical.description },
    { id: 'exam', title: t.courses.exam.title, description: t.courses.exam.description },
    { id: 'kids', title: t.courses.kids.title, description: t.courses.kids.description },
    { id: 'conversation', title: t.courses.conversation.title, description: t.courses.conversation.description },
  ];

  const handlePlacementTest = () => {
    const messageText = t.courses.placementTestMessage || t.courses.placement.title;
    const message = encodeURIComponent(messageText);
    window.open(`https://wa.me/201029398799?text=${message}`, '_blank');
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-german-black mb-4">
            {t.courses.title} 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {mainCourses.map((course) => (
            <motion.div key={course.id} variants={cardVariants}>
              <Link
                to={`/courses/${course.id}`}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold text-german-black mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>
                </div>
                <div className="flex items-center justify-center text-german-red font-semibold mt-auto">
                  <span>{t.courses.learnMore}</span> 
                  <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 ltr:ml-2 rtl:mr-2" />
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div variants={cardVariants}>
            <div
              onClick={handlePlacementTest}
              className="bg-german-gold/10 border-2 border-german-gold rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
            >
              <div>
                <h3 className="text-2xl font-display font-bold text-german-black mb-4">
                  {t.courses.placement.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.courses.placement.description}
                </p>
              </div>
              <div className="flex items-center justify-center text-german-black font-semibold mt-auto">
                <span>{t.courses.placement.cta}</span> 
                <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 ltr:ml-2 rtl:mr-2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesPreview;