import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react'; // 🟢 تم حذف أيقونة Mail
import { motion } from 'framer-motion';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = t.contact.phone.replace(/\s/g, '');
    const message = encodeURIComponent("مرحباً، لدي استفسار.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-display font-bold text-german-black mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </motion.div>

        <div className={`max-w-4xl mx-auto`}>
          <motion.div className="grid md:grid-cols-2 gap-12" variants={itemVariants}>
            {/* Contact Info */}
            <div className={`space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-display font-semibold text-german-black mb-6">
                {t.contact.getInTouch}
              </h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-german-red/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-german-red" />
                  </div>
                  <div>
                    <div className="font-semibold text-german-black">WhatsApp</div>
                    <div className="text-gray-600">{t.contact.phone}</div>
                  </div>
                </div>
                
                {/* 🟢 تم حذف قسم البريد الإلكتروني من هنا */}
                
                {/* Location */}
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-german-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-german-black">
                      {t.contact.location}
                    </div>
                    <div className="text-gray-600">{t.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center flex flex-col justify-center german-3d">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-display font-semibold text-german-black mb-3">
                {t.contact.quickResponse}
              </h4>
              <p className="text-gray-600 mb-6">
                {t.contact.quickResponseDesc}
              </p>
              
              <Button 
                onClick={handleWhatsAppClick} 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold w-fit mx-auto"
              >
                {t.contact.whatsapp}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;