
import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value} className="border-b border-gray-200">
      <AccordionTrigger className="text-left py-6 text-lg font-semibold text-german-black hover:text-german-red transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
