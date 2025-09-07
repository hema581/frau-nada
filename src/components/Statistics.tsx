import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { TrendingUp, Globe, Clock, Star } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

// 🟢 تم تعديل هذا المكون بالكامل ليدعم اللغات المختلفة
const AnimatedNumber = ({ to, language, suffix = '' }: { to: number; language: string; suffix?: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  
  // نجهز صيغة الرقم بناءً على اللغة
  const numberFormat = new Intl.NumberFormat(language, {
    maximumFractionDigits: 1, // للسماح بالأرقام العشرية مثل 4.9
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        // @ts-ignore - This is a known workaround for animating numerical values
        count: to,
        transition: {
          duration: 2,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, to]);

  // هذه الدالة يتم استدعاؤها مع كل تحديث للرقم أثناء الأنيميشن
  const onUpdate = (latest: { count: number }) => {
    if (ref.current) {
      // نستخدم صيغة الرقم المجهزة لعرضه باللغة الصحيحة
      ref.current.innerHTML = `${numberFormat.format(latest.count)}${suffix}`;
    }
  };
  
  // @ts-ignore
  return <motion.h3 ref={ref} custom={{count: 0}} animate={controls} onUpdate={onUpdate} className="text-4xl font-bold mb-2" />;
};


const Statistics = () => {
  // 🟢 طلبنا اللغة الحالية من الهوك
  const { t, currentLanguage } = useLanguage();

  const stats = [
    { icon: TrendingUp, number: 95, labelKey: 'successRate' },
    { icon: Globe, number: 12, labelKey: 'countries' },
    { icon: Clock, number: 1000, labelKey: 'hoursOfTeaching' },
    { icon: Star, number: 4.9, labelKey: 'averageRating' }
  ];

  return (
    <section className="py-20 bg-german-red text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            {t.statistics.title}
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            {t.statistics.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            // 🟢 نحدد اللاحقة (+ أو %) لكل رقم
            const suffix = stat.number === 95 ? '%' : (Number.isInteger(stat.number) ? '+' : '');
            
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                {/* 🟢 نمرر اللغة واللاحقة للمكون */}
                <AnimatedNumber to={stat.number} language={currentLanguage} suffix={suffix} />
                <div className="text-red-100">
                  {t.statistics[stat.labelKey as keyof typeof t.statistics]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;