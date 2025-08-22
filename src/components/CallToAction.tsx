
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

const CallToAction = () => {
  const { t, isRTL } = useLanguage();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(t.courses.whatsappMessage);
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-german-gold/10 to-german-red/10">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl lg:text-4xl font-display font-bold text-german-black mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t.cta.title}
          </h2>
          <p className={`text-xl text-gray-700 mb-8 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {t.cta.description}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-end' : 'justify-center'}`}>
            <Button 
              size="lg" 
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl flex items-center gap-3"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsappButton}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-german-black text-german-black hover:bg-german-black hover:text-white flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {t.cta.callButton}
            </Button>
          </div>

          <div className={`mt-12 grid md:grid-cols-3 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className={`font-semibold text-german-black mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.quickStart.title}
              </h3>
              <p className={`text-gray-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.quickStart.description}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className={`font-semibold text-german-black mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.flexibleLearning.title}
              </h3>
              <p className={`text-gray-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.flexibleLearning.description}
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className={`font-semibold text-german-black mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.certifiedResults.title}
              </h3>
              <p className={`text-gray-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                {t.cta.certifiedResults.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
