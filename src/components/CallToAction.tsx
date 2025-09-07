import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Zap, Calendar, Award, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Zap, titleKey: 'quickStart' },
    { icon: Calendar, titleKey: 'flexibleLearning' },
    { icon: Award, titleKey: 'certifiedResults' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = t.contact.phone.replace(/\s/g, '');
    // 🟢 تم تعديل هذا السطر ليستخدم الرسالة الجديدة
    const message = encodeURIComponent(t.cta.ctaWhatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const telLink = `tel:${t.contact.phone.replace(/\s/g, '')}`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Left Side: CTA */}
          <div className="space-y-6 text-center lg:text-start">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-german-black">{t.cta.title}</h2>
            <p className="text-lg text-gray-600">{t.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={handleWhatsAppClick} size="lg" className="btn-primary flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t.cta.whatsappButton}
              </Button>
              <a href={telLink}>
                <Button variant="outline" size="lg" className="w-full flex items-center gap-2">
                   <Phone className="w-5 h-5" />
                   {t.cta.callButton}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featureData = t.cta[feature.titleKey as keyof typeof t.cta] as { title: string; description: string; };
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-german-gold/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-german-black">{featureData.title}</h4>
                    <p className="text-gray-600">{featureData.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;