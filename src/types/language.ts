
export type Language = 'de' | 'ar' | 'en';

export interface TranslationContent {
  navigation: {
    home: string;
    about: string;
    courses: string;
    services: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    placementTest: string;
    stats: {
      levels: string;
      students: string;
      success: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    personalizedLearning: string;
    personalizedLearningDesc: string;
    flexibleSchedule: string;
    flexibleScheduleDesc: string;
    certifiedCourses: string;
    certifiedCoursesDesc: string;
    smallGroups: string;
    smallGroupsDesc: string;
    conversationPractice: string;
    conversationPracticeDesc: string;
    examPreparation: string;
    examPreparationDesc: string;
  };
  statistics: {
    title: string;
    subtitle: string;
    successRate: string;
    countries: string;
    hoursOfTeaching: string;
    averageRating: string;
  };
  cta: {
    title: string;
    description: string;
    whatsappButton: string;
    callButton: string;
    quickStart: {
      title: string;
      description: string;
    };
    flexibleLearning: {
      title: string;
      description: string;
    };
    certifiedResults: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    instructorTitle: string;
    missionTitle: string;
    certificationsTitle: string;
    testimonialsTitle: string;
    instructorBio: string;
    missionText: string;
    certifications: Array<{ title: string; description: string; }>;
    testimonials: Array<{ name: string; text: string; course: string; }>;
  };
  courses: {
    title: string;
    a1: { title: string; description: string; };
    a2: { title: string; description: string; };
    b1: { title: string; description: string; };
    b2: { title: string; description: string; };
    medical: { title: string; description: string; };
    exam: { title: string; description: string; };
    placement: { title: string; description: string; };
    whatsappMessage: string;
  };
  faq: {
    title: string;
    questions: Array<{ question: string; answer: string; }>;
  };
  contact: {
    title: string;
    whatsapp: string;
    phone: string;
    email: string;
    address: string;
    description: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  de: {
    navigation: {
      home: 'Startseite',
      about: 'Über uns',
      courses: 'Kurse',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Kontakt'
    },
    hero: {
      title: 'DP Akademie',
      subtitle: 'Deutsch lernen von A1 bis B2 + Medizinisches Deutsch mit Frau Nada Mostafa',
      description: 'Professioneller Deutschunterricht mit erfahrener Lehrerin. Online und Präsenzkurse verfügbar.',
      cta: 'Jetzt starten',
      placementTest: 'Einstufungstest',
      stats: {
        levels: 'Niveaustufen',
        students: 'Studenten',
        success: 'Erfolgsquote'
      }
    },
    features: {
      title: 'Warum DP Akademie wählen?',
      subtitle: 'Entdecken Sie die Vorteile unseres professionellen Deutschunterrichts',
      personalizedLearning: 'Personalisiertes Lernen',
      personalizedLearningDesc: 'Individuell angepasste Lernpläne für jeden Studenten',
      flexibleSchedule: 'Flexible Termine',
      flexibleScheduleDesc: 'Unterricht wann und wo es Ihnen passt',
      certifiedCourses: 'Zertifizierte Kurse',
      certifiedCoursesDesc: 'Offizielle Anerkennung und Qualitätssicherung',
      smallGroups: 'Kleine Gruppen',
      smallGroupsDesc: 'Mehr Aufmerksamkeit und bessere Lernergebnisse',
      conversationPractice: 'Konversationspraxis',
      conversationPracticeDesc: 'Intensive Sprechübungen für fließende Kommunikation',
      examPreparation: 'Prüfungsvorbereitung',
      examPreparationDesc: 'Professionelle Vorbereitung auf alle deutschen Sprachprüfungen'
    },
    statistics: {
      title: 'Unsere Erfolge in Zahlen',
      subtitle: 'Vertrauen Sie auf unsere bewährte Lehrmethodik',
      successRate: 'Erfolgsquote',
      countries: 'Länder',
      hoursOfTeaching: 'Unterrichtsstunden',
      averageRating: 'Durchschnittsbewertung'
    },
    cta: {
      title: 'Bereit, Ihr Deutsch zu verbessern?',
      description: 'Beginnen Sie noch heute Ihre Deutschreise mit der DP Akademie. Kontaktieren Sie uns für eine kostenlose Beratung.',
      whatsappButton: 'WhatsApp kontaktieren',
      callButton: 'Anrufen',
      quickStart: {
        title: 'Schneller Start',
        description: 'Beginnen Sie innerhalb von 24 Stunden'
      },
      flexibleLearning: {
        title: 'Flexibles Lernen',
        description: 'Online oder vor Ort verfügbar'
      },
      certifiedResults: {
        title: 'Zertifizierte Ergebnisse',
        description: 'Anerkannte Sprachzertifikate'
      }
    },
    about: {
      title: 'Über uns',
      instructorTitle: 'Ihre Deutschlehrerin',
      missionTitle: 'Unsere Mission',
      certificationsTitle: 'Qualifikationen & Zertifikate',
      testimonialsTitle: 'Meinungen unserer Studenten',
      instructorBio: 'Frau Nada Mostafa ist eine erfahrene Deutschlehrerin mit jahrelanger Expertise im Unterrichten der deutschen Sprache. Sie verfügt über umfassende Qualifikationen und hilft Studenten dabei, ihre Deutschkenntnisse von Grundkenntnissen bis zur Fließend zu entwickeln.',
      missionText: 'Die DP Akademie wurde gegründet, um hochwertige Deutschkurse anzubieten, die Studenten dabei helfen, ihre Ziele zu erreichen - sei es für das Studium, den Beruf oder das Leben in Deutschland.',
      certifications: [
        {
          title: 'Zertifizierte Deutschlehrerin',
          description: 'Offizielle Qualifikation für Deutsch als Fremdsprache'
        },
        {
          title: 'Medizinisches Deutsch Spezialistin',
          description: 'Expertin für Fachsprachprüfung im medizinischen Bereich'
        },
        {
          title: '5+ Jahre Erfahrung',
          description: 'Umfangreiche Erfahrung im Unterrichten aller Niveaus'
        }
      ],
      testimonials: [
        {
          name: 'Ahmed Hassan',
          text: 'Frau Nada hat mir sehr geholfen, mein B2-Niveau zu erreichen. Ihre Unterrichtsmethoden sind sehr effektiv.',
          course: 'B2 Kurs'
        },
        {
          name: 'Sarah Ali',
          text: 'Der medizinische Deutschkurs war perfekt für meine Arbeit im Krankenhaus. Sehr empfehlenswert!',
          course: 'Medizinisches Deutsch'
        },
        {
          name: 'Omar Mahmoud',
          text: 'Ausgezeichnete Lehrerin! Ich habe meine Goethe-Prüfung beim ersten Versuch bestanden.',
          course: 'A2 Prüfungsvorbereitung'
        }
      ]
    },
    courses: {
      title: 'Unsere Kurse',
      a1: {
        title: 'A1 - Anfänger',
        description: 'Grundlagen, Begrüßungen und alltägliche Phrasen lernen'
      },
      a2: {
        title: 'A2 - Grundstufe',
        description: 'Erweiterten Wortschatz und längere Gespräche führen'
      },
      b1: {
        title: 'B1 - Mittelstufe',
        description: 'Texte schreiben, Meinungen äußern und B1-Prüfungsvorbereitung'
      },
      b2: {
        title: 'B2 - Obere Mittelstufe',
        description: 'Fließende Kommunikation, formelles Schreiben und B2-Prüfungsvorbereitung'
      },
      medical: {
        title: 'Medizinisches Deutsch',
        description: 'Krankenhauskommunikation, Terminologie und Fachsprachprüfung'
      },
      exam: {
        title: 'Prüfungsvorbereitung',
        description: 'Goethe & Telc Prüfungen professionell vorbereiten'
      },
      placement: {
        title: 'Einstufungstest',
        description: 'Online-Einstufungstest zur Bestimmung Ihres Niveaus'
      },
      whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs bei DP Akademie.'
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      questions: [
        {
          question: 'Welche Niveaus sind in der DP Akademie verfügbar?',
          answer: 'Wir bieten Kurse von A1 bis B2 sowie spezialisierte medizinische Deutschkurse an.'
        },
        {
          question: 'Sind die Kurse online oder offline?',
          answer: 'Wir bieten sowohl Online- als auch Präsenzkurse an, je nach Ihren Bedürfnissen.'
        },
        {
          question: 'Gibt es einen Einstufungstest?',
          answer: 'Ja, wir bieten einen kostenlosen Online-Einstufungstest an, um Ihr aktuelles Deutschniveau zu bestimmen.'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      whatsapp: 'WhatsApp kontaktieren',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      description: 'Kontaktieren Sie uns für weitere Informationen über unsere Deutschkurse'
    }
  },
  ar: {
    navigation: {
      home: 'الرئيسية',
      about: 'من نحن',
      courses: 'الدورات',
      services: 'الخدمات',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'أكاديمية DP',
      subtitle: 'تعلم الألمانية من A1 إلى B2 + الألمانية الطبية مع الأستاذة ندى مصطفى',
      description: 'تدريس ألماني احترافي مع معلمة خبيرة. دورات أونلاين وحضورية متاحة.',
      cta: 'ابدأ الآن',
      placementTest: 'اختبار تحديد المستوى',
      stats: {
        levels: 'المستويات',
        students: 'الطلاب',
        success: 'معدل النجاح'
      }
    },
    features: {
      title: 'لماذا تختار أكاديمية DP؟',
      subtitle: 'اكتشف مزايا تدريس الألمانية المهني لدينا',
      personalizedLearning: 'تعلم مخصص',
      personalizedLearningDesc: 'خطط تعليمية مصممة خصيصاً لكل طالب',
      flexibleSchedule: 'مواعيد مرنة',
      flexibleScheduleDesc: 'دروس في الوقت والمكان المناسب لك',
      certifiedCourses: 'دورات معتمدة',
      certifiedCoursesDesc: 'اعتراف رسمي وضمان جودة',
      smallGroups: 'مجموعات صغيرة',
      smallGroupsDesc: 'اهتمام أكبر ونتائج تعلم أفضل',
      conversationPractice: 'ممارسة المحادثة',
      conversationPracticeDesc: 'تدريب مكثف على المحادثة للتواصل بطلاقة',
      examPreparation: 'التحضير للامتحانات',
      examPreparationDesc: 'تحضير مهني لجميع امتحانات اللغة الألمانية'
    },
    statistics: {
      title: 'نجاحاتنا بالأرقام',
      subtitle: 'ثق في منهجية التدريس المجربة لدينا',
      successRate: 'معدل النجاح',
      countries: 'البلدان',
      hoursOfTeaching: 'ساعات التدريس',
      averageRating: 'متوسط التقييم'
    },
    cta: {
      title: 'مستعد لتحسين ألمانيتك؟',
      description: 'ابدأ رحلتك الألمانية اليوم مع أكاديمية DP. اتصل بنا للحصول على استشارة مجانية.',
      whatsappButton: 'تواصل عبر واتساب',
      callButton: 'اتصل بنا',
      quickStart: {
        title: 'بداية سريعة',
        description: 'ابدأ خلال 24 ساعة'
      },
      flexibleLearning: {
        title: 'تعلم مرن',
        description: 'متاح أونلاين أو حضورياً'
      },
      certifiedResults: {
        title: 'نتائج معتمدة',
        description: 'شهادات لغة معترف بها'
      }
    },
    about: {
      title: 'من نحن',
      instructorTitle: 'معلمة اللغة الألمانية',
      missionTitle: 'مهمتنا',
      certificationsTitle: 'المؤهلات والشهادات',
      testimonialsTitle: 'آراء طلابنا',
      instructorBio: 'الأستاذة ندى مصطفى معلمة ألمانية ذات خبرة واسعة في تدريس اللغة الألمانية. تتمتع بمؤهلات شاملة وتساعد الطلاب على تطوير مهاراتهم في اللغة الألمانية من المستوى المبتدئ إلى الطلاقة.',
      missionText: 'تأسست أكاديمية DP لتقديم دورات ألمانية عالية الجودة تساعد الطلاب على تحقيق أهدافهم - سواء للدراسة أو العمل أو الحياة في ألمانيا.',
      certifications: [
        {
          title: 'معلمة ألمانية معتمدة',
          description: 'مؤهل رسمي لتدريس اللغة الألمانية كلغة أجنبية'
        },
        {
          title: 'متخصصة في الألمانية الطبية',
          description: 'خبيرة في امتحان اللغة المتخصصة في المجال الطبي'
        },
        {
          title: 'خبرة أكثر من 5 سنوات',
          description: 'خبرة واسعة في تدريس جميع المستويات'
        }
      ],
      testimonials: [
        {
          name: 'أحمد حسن',
          text: 'الأستاذة ندى ساعدتني كثيراً في الوصول لمستوى B2. طرق التدريس فعالة جداً.',
          course: 'دورة B2'
        },
        {
          name: 'سارة علي',
          text: 'دورة الألمانية الطبية كانت مثالية لعملي في المستشفى. أنصح بها بشدة!',
          course: 'الألمانية الطبية'
        },
        {
          name: 'عمر محمود',
          text: 'معلمة ممتازة! نجحت في امتحان جوته من المحاولة الأولى.',
          course: 'التحضير لامتحان A2'
        }
      ]
    },
    courses: {
      title: 'دوراتنا',
      a1: {
        title: 'A1 - مبتدئ',
        description: 'تعلم الأساسيات والتحيات والعبارات اليومية'
      },
      a2: {
        title: 'A2 - أساسي',
        description: 'مفردات موسعة ومحادثات أطول'
      },
      b1: {
        title: 'B1 - متوسط',
        description: 'كتابة النصوص وإبداء الآراء والتحضير لامتحان B1'
      },
      b2: {
        title: 'B2 - متوسط متقدم',
        description: 'التواصل بطلاقة والكتابة الرسمية والتحضير لامتحان B2'
      },
      medical: {
        title: 'الألمانية الطبية',
        description: 'التواصل في المستشفى والمصطلحات وامتحان اللغة المتخصصة'
      },
      exam: {
        title: 'التحضير للامتحانات',
        description: 'التحضير المهني لامتحانات جوته وتيلك'
      },
      placement: {
        title: 'اختبار تحديد المستوى',
        description: 'اختبار تحديد المستوى عبر الإنترنت لتحديد مستواك'
      },
      whatsappMessage: 'مرحباً! أريد معرفة المزيد عن الدورات في أكاديمية DP.'
    },
    faq: {
      title: 'الأسئلة الشائعة',
      questions: [
        {
          question: 'ما هي المستويات المتاحة في أكاديمية DP؟',
          answer: 'نقدم دورات من A1 إلى B2 بالإضافة إلى دورات الألمانية الطبية المتخصصة.'
        },
        {
          question: 'هل الدورات عبر الإنترنت أم حضورية؟',
          answer: 'نقدم دورات عبر الإنترنت وحضورية حسب احتياجاتك.'
        },
        {
          question: 'هل يوجد اختبار تحديد مستوى؟',
          answer: 'نعم، نقدم اختبار تحديد مستوى مجاني عبر الإنترنت لتحديد مستواك الحالي في الألمانية.'
        }
      ]
    },
    contact: {
      title: 'اتصل بنا',
      whatsapp: 'تواصل عبر واتساب',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      description: 'اتصل بنا للحصول على مزيد من المعلومات حول دورات الألمانية لدينا'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      courses: 'Courses',
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'DP Akademie',
      subtitle: 'Learn German from A1 to B2 + Medical German with Frau Nada Mostafa',
      description: 'Professional German teaching with experienced instructor. Online and in-person courses available.',
      cta: 'Start Now',
      placementTest: 'Placement Test',
      stats: {
        levels: 'Levels',
        students: 'Students',
        success: 'Success Rate'
      }
    },
    features: {
      title: 'Why Choose DP Akademie?',
      subtitle: 'Discover the advantages of our professional German teaching',
      personalizedLearning: 'Personalized Learning',
      personalizedLearningDesc: 'Customized learning plans for each student',
      flexibleSchedule: 'Flexible Schedule',
      flexibleScheduleDesc: 'Classes when and where it suits you',
      certifiedCourses: 'Certified Courses',
      certifiedCoursesDesc: 'Official recognition and quality assurance',
      smallGroups: 'Small Groups',
      smallGroupsDesc: 'More attention and better learning outcomes',
      conversationPractice: 'Conversation Practice',
      conversationPracticeDesc: 'Intensive speaking practice for fluent communication',
      examPreparation: 'Exam Preparation',
      examPreparationDesc: 'Professional preparation for all German language exams'
    },
    statistics: {
      title: 'Our Success in Numbers',
      subtitle: 'Trust our proven teaching methodology',
      successRate: 'Success Rate',
      countries: 'Countries',
      hoursOfTeaching: 'Teaching Hours',
      averageRating: 'Average Rating'
    },
    cta: {
      title: 'Ready to Improve Your German?',
      description: 'Start your German journey today with DP Akademie. Contact us for a free consultation.',
      whatsappButton: 'Contact WhatsApp',
      callButton: 'Call Us',
      quickStart: {
        title: 'Quick Start',
        description: 'Begin within 24 hours'
      },
      flexibleLearning: {
        title: 'Flexible Learning',
        description: 'Available online or in-person'
      },
      certifiedResults: {
        title: 'Certified Results',
        description: 'Recognized language certificates'
      }
    },
    about: {
      title: 'About Us',
      instructorTitle: 'Your German Instructor',
      missionTitle: 'Our Mission',
      certificationsTitle: 'Qualifications & Certificates',
      testimonialsTitle: 'Student Testimonials',
      instructorBio: 'Frau Nada Mostafa is an experienced German language instructor with years of expertise in teaching German. She has comprehensive qualifications and helps students develop their German skills from basic to fluent level.',
      missionText: 'DP Akademie was founded to provide high-quality German courses that help students achieve their goals - whether for study, work, or life in Germany.',
      certifications: [
        {
          title: 'Certified German Instructor',
          description: 'Official qualification for teaching German as a foreign language'
        },
        {
          title: 'Medical German Specialist',
          description: 'Expert in Fachsprachprüfung for medical professionals'
        },
        {
          title: '5+ Years Experience',
          description: 'Extensive experience teaching all levels'
        }
      ],
      testimonials: [
        {
          name: 'Ahmed Hassan',
          text: 'Frau Nada helped me reach B2 level successfully. Her teaching methods are very effective.',
          course: 'B2 Course'
        },
        {
          name: 'Sarah Ali',
          text: 'The Medical German course was perfect for my hospital work. Highly recommended!',
          course: 'Medical German'
        },
        {
          name: 'Omar Mahmoud',
          text: 'Excellent teacher! I passed my Goethe exam on the first try.',
          course: 'A2 Exam Preparation'
        }
      ]
    },
    courses: {
      title: 'Our Courses',
      a1: {
        title: 'A1 - Beginner',
        description: 'Learn basics, greetings, and everyday phrases'
      },
      a2: {
        title: 'A2 - Elementary',
        description: 'Extended vocabulary and longer conversations'
      },
      b1: {
        title: 'B1 - Intermediate',
        description: 'Writing texts, expressing opinions, and B1 exam preparation'
      },
      b2: {
        title: 'B2 - Upper Intermediate',
        description: 'Fluent communication, formal writing, and B2 exam preparation'
      },
      medical: {
        title: 'Medical German',
        description: 'Hospital communication, terminology, and Fachsprachprüfung preparation'
      },
      exam: {
        title: 'Exam Preparation',
        description: 'Professional preparation for Goethe & Telc exams'
      },
      placement: {
        title: 'Placement Test',
        description: 'Online placement test to determine your level'
      },
      whatsappMessage: 'Hello! I would like to know more about the courses at DP Akademie.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'What levels are available at DP Akademie?',
          answer: 'We offer courses from A1 to B2 levels, plus specialized Medical German courses.'
        },
        {
          question: 'Are the courses online or offline?',
          answer: 'We offer both online and in-person courses depending on your needs.'
        },
        {
          question: 'Is there a placement test?',
          answer: 'Yes, we offer a free online placement test to determine your current German level.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      whatsapp: 'Contact WhatsApp',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      description: 'Contact us for more information about our German courses'
    }
  }
};
