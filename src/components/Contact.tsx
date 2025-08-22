
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t, isRTL, currentLanguage } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-german-black mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </div>

        <div className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold text-german-black mb-6">
                  {currentLanguage === 'ar' ? 'تواصل معنا' : currentLanguage === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
                </h3>
                
                <div className="space-y-6">
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="w-12 h-12 bg-german-red/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-german-red" />
                    </div>
                    <div>
                      <div className="font-semibold text-german-black">WhatsApp</div>
                      <div className="text-gray-600">+49 123 456 7890</div>
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="w-12 h-12 bg-german-gold/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-german-black">Email</div>
                      <div className="text-gray-600">info@dp-akademie.de</div>
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-german-black" />
                    </div>
                    <div>
                      <div className="font-semibold text-german-black">
                        {currentLanguage === 'ar' ? 'الموقع' : currentLanguage === 'de' ? 'Standort' : 'Location'}
                      </div>
                      <div className="text-gray-600">Berlin, Germany</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center german-3d">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-display font-semibold text-german-black mb-3">
                {currentLanguage === 'ar' ? 'رد سريع على واتساب' : 
                 currentLanguage === 'de' ? 'Schnelle Antwort auf WhatsApp' : 
                 'Quick Response on WhatsApp'}
              </h4>
              <p className="text-gray-600 mb-6">
                {currentLanguage === 'ar' ? 'احصل على إجابات فورية لأسئلتك' :
                 currentLanguage === 'de' ? 'Erhalten Sie sofortige Antworten auf Ihre Fragen' :
                 'Get instant answers to your questions'}
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold">
                {t.contact.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
