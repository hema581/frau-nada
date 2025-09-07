import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react'; 

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-german-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-start">
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-german-gold transition-colors">{t.navigation.home}</Link></li>
              <li><Link to="/about" className="hover:text-german-gold transition-colors">{t.navigation.about}</Link></li>
              <li><Link to="/courses" className="hover:text-german-gold transition-colors">{t.navigation.courses}</Link></li>
              <li><Link to="/faq" className="hover:text-german-gold transition-colors">{t.navigation.faq}</Link></li>
              <li><Link to="/contact" className="hover:text-german-gold transition-colors">{t.navigation.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-2">
              <li><a href={`mailto:${t.contact.email}`} className="hover:text-german-gold transition-colors">{t.contact.email}</a></li>
              <li><a href={`tel:${t.contact.phone.replace(/\s/g, '')}`} className="hover:text-german-gold transition-colors">{t.contact.phone}</a></li>
              <li><a href={`https://wa.me/201029398799`} target="_blank" rel="noopener noreferrer" className="hover:text-german-gold transition-colors">{t.footer.contactWhatsApp}</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.followUs}</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={t.footer.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-german-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={t.footer.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-german-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright.replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;