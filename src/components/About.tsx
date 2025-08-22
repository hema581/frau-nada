
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { GraduationCap, Heart, Target, Award, Star } from 'lucide-react';

const About = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-german-black mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-german-red to-german-gold mx-auto"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Instructor Info */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-german-black flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-german-red" />
                {t.about.instructorTitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.instructorBio}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-german-black flex items-center gap-3">
                <Target className="w-8 h-8 text-german-gold" />
                {t.about.missionTitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </div>

          {/* Image Placeholder - Replaceable */}
          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Placeholder for about page image */}
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">👩‍🏫</div>
                <p className="text-lg font-medium">صورة الأستاذة ندى</p>
                <p className="text-sm">يمكن تغييرها لاحقاً</p>
              </div>
              
              {/* German Cultural Elements Background */}
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-german-red/5 to-german-gold/5"></div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-german-black mb-4 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-german-gold" />
              {t.about.certificationsTitle}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl german-3d animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-german-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-german-gold" />
                </div>
                <h4 className="text-xl font-display font-semibold text-german-black mb-3">
                  {cert.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-german-black mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-german-gold" />
              {t.about.testimonialsTitle}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl german-3d animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-german-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-german-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
