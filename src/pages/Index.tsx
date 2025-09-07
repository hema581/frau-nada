import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';

const IndexPage = () => {
  // متغيرات الانيميشن لظهور الأقسام بشكل متتابع
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const, // 🟢 تم التعديل هنا
      },
    }),
  };

  // قائمة المكونات التي ستظهر في الصفحة الرئيسية
  const components = [
    { component: <Hero /> },
    { component: <Features /> },
    { component: <Statistics /> },
    { component: <CallToAction /> },
  ];

  return (
    <>
      {components.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {item.component}
        </motion.div>
      ))}
    </>
  );
};

export default IndexPage;