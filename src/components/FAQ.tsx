import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { HelpCircle } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';
import { motion } from 'framer-motion';

const FAQ = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const, // 🟢 تم التعديل هنا
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-german-black mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="w-10 h-10 text-german-red" />
            {t.faq.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 german-3d">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-2">
                {t.faq.questions.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <FAQItem
                      value={`item-${index}`}
                      question={item.question}
                      answer={item.answer}
                    />
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;