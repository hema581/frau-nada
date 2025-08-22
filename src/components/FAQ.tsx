
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { HelpCircle } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import FAQItem from './FAQItem';

const FAQ = () => {
  const { t } = useLanguage();

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
            <Accordion type="single" collapsible className="space-y-2">
              {t.faq.questions.map((item, index) => (
                <FAQItem
                  key={index}
                  value={`item-${index}`}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
