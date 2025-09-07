
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = '+201029398799';
  const message = t.courses.whatsappMessage;
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 german-3d"
      title={t.contact.whatsapp}
    >
      <MessageCircle className="w-8 h-8" />
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
    </a>
  );
};

export default WhatsAppButton;
