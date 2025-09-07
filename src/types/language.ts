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
    quickStart: { title: string; description: string; };
    flexibleLearning: { title: string; description: string; };
    certifiedResults: { title: string; description: string; };
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
    learnMore: string;
    placementTestMessage: string;
    genericCourseInquiry: string;
    a1: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    a2: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    b1: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    b2: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    medical: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    exam: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    placement: { 
        title: string; 
        description: string; 
        cta: string;
    };
  };
  courseDetail: {
    aboutCourse: string;
    forWhom: string;
    whatYouWillLearn: string;
    registerNow: string;
    backToCourses: string;
    courseNotFound: string;
    returnToCourses: string;
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
  footer: {
    quickLinks: string;
    contactUs: string;
    followUs: string;
    contactWhatsApp: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // ================= GERMAN =================
  de: {
    navigation: { home: 'Startseite', about: 'Über uns', courses: 'Kurse', services: 'Services', faq: 'FAQ', contact: 'Kontakt' },
    hero: { title: 'DP Akademie', subtitle: 'Deutsch lernen von A1 bis B2 + Medizinisches Deutsch', description: 'Professioneller Deutschunterricht mit erfahrener Lehrerin. Online und Präsenzkurse.', cta: 'Jetzt starten', placementTest: 'Einstufungstest', stats: { levels: 'Niveaustufen', students: 'Studenten', success: 'Erfolgsquote' } },
    features: { title: 'Warum DP Akademie wählen?', subtitle: 'Entdecken Sie die Vorteile unseres professionellen Deutschunterrichts', personalizedLearning: 'Personalisiertes Lernen', personalizedLearningDesc: 'Individuell angepasste Lernpläne', flexibleSchedule: 'Flexible Termine', flexibleScheduleDesc: 'Unterricht wann und wo es Ihnen passt', certifiedCourses: 'Zertifizierte Kurse', certifiedCoursesDesc: 'Offizielle Anerkennung und Qualität', smallGroups: 'Kleine Gruppen', smallGroupsDesc: 'Mehr Aufmerksamkeit und bessere Lernergebnisse', conversationPractice: 'Konversationspraxis', conversationPracticeDesc: 'Intensive Sprechübungen für fließende Kommunikation', examPreparation: 'Prüfungsvorbereitung', examPreparationDesc: 'Professionelle Vorbereitung auf alle Sprachprüfungen' },
    statistics: { title: 'Unsere Erfolge in Zahlen', subtitle: 'Vertrauen Sie auf unsere bewährte Methodik', successRate: 'Erfolgsquote', countries: 'Länder', hoursOfTeaching: 'Unterrichtsstunden', averageRating: 'Durchschnittsbewertung' },
    cta: { title: 'Bereit, Ihr Deutsch zu verbessern?', description: 'Beginnen Sie Ihre Deutschreise heute. Kontaktieren Sie uns für eine kostenlose Beratung.', whatsappButton: 'WhatsApp kontaktieren', callButton: 'Anrufen', quickStart: { title: 'Schneller Start', description: 'Beginnen Sie innerhalb von 24 Stunden' }, flexibleLearning: { title: 'Flexibles Lernen', description: 'Online oder vor Ort verfügbar' }, certifiedResults: { title: 'Zertifizierte Ergebnisse', description: 'Anerkannte Sprachzertifikate' } },
    about: { title: 'Über uns', instructorTitle: 'Ihre Deutschlehrerin', missionTitle: 'Unsere Mission', certificationsTitle: 'Qualifikationen', testimonialsTitle: 'Meinungen unserer Studenten', instructorBio: 'Frau Nada Mostafa ist eine erfahrene Deutschlehrerin mit jahrelanger Expertise. Sie hilft Studenten, ihre Deutschkenntnisse von Grund auf zu entwickeln.', missionText: 'Unsere Mission ist es, hochwertige Deutschkurse anzubieten, die Studenten helfen, ihre Ziele zu erreichen – sei es für Studium, Beruf oder das Leben in Deutschland.', certifications: [ { title: 'Zertifizierte Lehrerin', description: 'Qualifikation für Deutsch als Fremdsprache' }, { title: 'Spezialistin Medizinisches Deutsch', description: 'Expertin für die Fachsprachprüfung' }, { title: '5+ Jahre Erfahrung', description: 'Erfahrung im Unterrichten aller Niveaus' } ], testimonials: [ { name: 'Youssef El-Masry', text: 'Frau Nada hat mir geholfen, mein B2-Niveau zu erreichen. Ihre Methoden sind super effektiv.', course: 'B2 Kurs' }, { name: 'Fatima Al-Jassem', text: 'Der medizinische Deutschkurs war perfekt für meine Arbeit. Sehr empfehlenswert!', course: 'Medizinisches Deutsch' }, { name: 'Mona Adel', text: 'Ausgezeichnete Lehrerin! Ich habe meine Goethe-Prüfung dank ihr auf Anhieb bestanden.', course: 'A2 Prüfungsvorbereitung' } ] },
    courses: { 
        title: 'Unsere Fachkurse',
        learnMore: 'Mehr erfahren',
        placementTestMessage: 'Hallo! Ich bin daran interessiert, den Einstufungstest zu machen.',
        genericCourseInquiry: 'Ich interessiere mich für den Kurs: ',
        a1: { title: 'A1 - Anfängerkurs', description: 'Ihr erster Einstieg in die deutsche Sprache.', details: 'Der A1-Kurs ist für absolute Anfänger konzipiert und konzentriert sich auf den Aufbau einer soliden Grundlage durch das Erlernen des Alphabets, der korrekten Aussprache, grundlegender Begrüßungen und der Fähigkeit, einfache Sätze zu bilden.', forWhom: 'Dieser Kurs ist ideal für alle, die keine Vorkenntnisse in der deutschen Sprache haben und von Grund auf beginnen möchten.', topics: ['Alphabet und Aussprache', 'Begrüßungen und Vorstellung', 'Zahlen, Uhrzeit und Datum', 'Einfache Alltagsgespräche'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "A1 - Anfängerkurs".' },
        a2: { title: 'A2 - Grundkurs', description: 'Erweitern Sie Ihren Wortschatz und führen Sie längere Gespräche.', details: 'Im A2-Niveau beginnen Sie, häufig verwendete Sätze zu verstehen und sich in vertrauten Situationen auszudrücken. Sie lernen, Ihre Vergangenheit, Ihre Umgebung und Ihre Bedürfnisse in einfachen Worten zu beschreiben.', forWhom: 'Für Studierende, die das A1-Niveau erfolgreich abgeschlossen haben und ihr Sprachverständnis vertiefen möchten.', topics: ['Vergangene Ereignisse beschreiben (Perfekt)', 'Wegbeschreibungen und Orte', 'Einkaufen und Essen bestellen', 'Kurze Notizen und E-Mails schreiben'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "A2 - Grundkurs".' },
        b1: { title: 'B1 - Mittelstufenkurs', description: 'Auf dem Weg zur Sprachgewandtheit und Meinungsäußerung.', details: 'Das B1-Niveau befähigt Sie zur selbstständigen Kommunikation in den meisten Alltagssituationen. Sie können die Hauptpunkte von Gesprächen verstehen, Ihre Meinung äußern und Zukunftspläne beschreiben.', forWhom: 'Für Studierende, die ernsthaft die Sprachgewandtheit anstreben, was oft für das Universitätsstudium oder die Arbeit erforderlich ist.', topics: ['Meinungen und Hoffnungen ausdrücken', 'Erfahrungen und Ereignisse erzählen', 'Texte zu vertrauten Themen schreiben', 'Verwendung von Nebensätzen'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "B1 - Mittelstufenkurs".' },
        b2: { title: 'B2 - Fortgeschrittenenkurs', description: 'Komplexe Texte verstehen und fließend und spontan sprechen.', details: 'Das B2-Niveau konzentriert sich auf das genaue Verständnis komplexer Texte zu verschiedenen Themen und die fließende Interaktion mit Muttersprachlern. Sie lernen, starke Argumente aufzubauen.', forWhom: 'Für Studierende, die in einem Umfeld studieren oder arbeiten möchten, das hohe Deutschkenntnisse erfordert.', topics: ['Komplexe Texte und Fachdiskussionen', 'Formelle Berichte und Aufsätze verfassen', 'Redewendungen und Dialekte verstehen', 'Fortgeschrittene Grammatik (Konjunktiv II)'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "B2 - Fortgeschrittenenkurs".' },
        medical: { title: 'Medizinisches Deutsch', description: 'Kommunikation in Krankenhäusern und im medizinischen Bereich.', details: 'Ein Fachkurs für Ärzte und medizinisches Personal, der sich auf medizinische Terminologie, Anamneseerhebung und die effektive Kommunikation mit Kollegen und Patienten konzentriert.', forWhom: 'Ärzte, Zahnärzte, Apotheker und Pflegekräfte, die sich auf die FSP-Prüfung oder die Arbeit in Deutschland vorbereiten.', topics: ['Medizinische Terminologie', 'Simulation von Arzt-Patienten-Gesprächen', 'Verfassen von Arztbriefen', 'Patientenaufklärung'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "Medizinisches Deutsch".' },
        exam: { title: 'Prüfungsvorbereitung', description: 'Gezieltes Training für Goethe & Telc Prüfungen.', details: 'Ein Intensivkurs, der sich vollständig auf die Struktur der Goethe- und Telc-Prüfungen konzentriert. Sie trainieren alle Prüfungsteile (Lesen, Schreiben, Hören, Sprechen) mit echten Prüfungsmodellen.', forWhom: 'Studierende, die kurz vor der Prüfung stehen und eine abschließende Wiederholung und intensives Training benötigen.', topics: ['Strategien für alle Prüfungsteile', 'Zeitmanagement während der Prüfung', 'Training für den mündlichen Teil', 'Vollständige Prüfungssimulationen'], whatsappMessage: 'Hallo! Ich interessiere mich für den Kurs "Prüfungsvorbereitung".' },
        placement: { 
            title: 'Einstufungstest', 
            description: 'Finden Sie Ihr aktuelles Sprachniveau heraus.',
            cta: 'Test jetzt starten'
        },
    },
    courseDetail: { aboutCourse: 'Über den Kurs', forWhom: 'Für wen ist dieser Kurs?', whatYouWillLearn: 'Was Sie lernen werden', registerNow: 'Jetzt anmelden', backToCourses: 'Zurück zu allen Kursen', courseNotFound: 'Kurs nicht gefunden', returnToCourses: 'Zurück zur Kursübersicht' },
    faq: { title: 'Häufig gestellte Fragen', questions: [ { question: 'Welche Niveaus bieten Sie an?', answer: 'Wir bieten Kurse von A1 bis B2 sowie medizinisches Deutsch an.' }, { question: 'Sind die Kurse online?', answer: 'Wir bieten sowohl Online- als auch Präsenzkurse an.' }, { question: 'Gibt es einen Einstufungstest?', answer: 'Ja, wir bieten einen kostenlosen Online-Einstufungstest an.' } ] },
    contact: { title: 'Kontakt', whatsapp: 'WhatsApp kontaktieren', phone: 'Telefon', email: 'E-Mail', address: 'Adresse', description: 'Kontaktieren Sie uns für weitere Informationen.' },
    footer: { quickLinks: 'Schnellinks', contactUs: 'Kontakt', followUs: 'Folgen Sie uns', contactWhatsApp: 'Kontakt per WhatsApp', copyright: '© 2025 DP Akademie. Alle Rechte vorbehalten.' }
  },
  // ================= ARABIC =================
  ar: {
    navigation: { home: 'الرئيسية', about: 'من نحن', courses: 'الدورات', services: 'الخدمات', faq: 'الأسئلة الشائعة', contact: 'اتصل بنا' },
    hero: { title: 'أكاديمية DP', subtitle: 'تعلم الألمانية من A1 إلى B2 + الألمانية الطبية', description: 'تدريس ألماني احترافي مع معلمة خبيرة. دورات أونلاين وحضورية.', cta: 'ابدأ الآن', placementTest: 'اختبار تحديد المستوى', stats: { levels: 'المستويات', students: 'الطلاب', success: 'معدل النجاح' } },
    features: { title: 'لماذا تختار أكاديمية DP؟', subtitle: 'اكتشف مزايا تدريسنا الاحترافي', personalizedLearning: 'تعلم مخصص', personalizedLearningDesc: 'خطط تعليمية مصممة لكل طالب', flexibleSchedule: 'مواعيد مرنة', flexibleScheduleDesc: 'دروس في الوقت والمكان المناسب لك', certifiedCourses: 'دورات معتمدة', certifiedCoursesDesc: 'اعتراف رسمي وضمان للجودة', smallGroups: 'مجموعات صغيرة', smallGroupsDesc: 'اهتمام أكبر ونتائج تعلم أفضل', conversationPractice: 'ممارسة المحادثة', conversationPracticeDesc: 'تدريب مكثف على المحادثة للتواصل بطلاقة', examPreparation: 'التحضير للامتحانات', examPreparationDesc: 'تحضير مهني لجميع امتحانات اللغة' },
    statistics: { title: 'نجاحاتنا بالأرقام', subtitle: 'ثق في منهجيتنا المجربة', successRate: 'معدل النجاح', countries: 'البلدان', hoursOfTeaching: 'ساعات التدريس', averageRating: 'متوسط التقييم' },
    cta: { title: 'مستعد لتحسين لغتك الألمانية؟', description: 'ابدأ رحلتك في تعلم الألمانية اليوم. تواصل معنا لاستشارة مجانية.', whatsappButton: 'تواصل عبر واتساب', callButton: 'اتصل بنا', quickStart: { title: 'بداية سريعة', description: 'ابدأ دورتك خلال 24 ساعة' }, flexibleLearning: { title: 'تعلم مرن', description: 'متاح تعلم عن بعد (أونلاين) أو حضوري (أوفلاين)' }, certifiedResults: { title: 'نتائج معتمدة', description: 'شهادات لغة معترف بها' } },
    about: { title: 'من نحن', instructorTitle: 'معلمة اللغة الألمانية', missionTitle: 'مهمتنا', certificationsTitle: 'المؤهلات', testimonialsTitle: 'آراء طلابنا', instructorBio: 'الأستاذة ندى مصطفى معلمة ألمانية خبيرة لسنوات طويلة، تساعد الطلاب على تطوير مهاراتهم في اللغة الألمانية من الصفر.', missionText: 'مهمتنا هي تقديم دورات ألمانية عالية الجودة تساعد الطلاب على تحقيق أهدافهم، سواء للدراسة أو العمل أو الحياة في ألمانيا.', certifications: [ { title: 'معلمة معتمدة', description: 'مؤهلة لتدريس الألمانية كلغة أجنبية' }, { title: 'متخصصة في الألمانية الطبية', description: 'خبيرة في امتحان اللغة التخصصي FSP' }, { title: 'خبرة +5 سنوات', description: 'خبرة في تدريس جميع المستويات' } ], testimonials: [ { name: 'يوسف المصري', text: 'فراو ندى ساعدتني جدًا في الوصول لمستوى B2. طرق تدريسها فعالة ومباشرة.', course: 'دورة B2' }, { name: 'فاطمة الجاسم', text: 'دورة الألماني الطبي كانت ممتازة لعملي. أنصح بها وبقوة!', course: 'الألمانية الطبية' }, { name: 'منى عادل', text: 'معلمة ممتازة! نجحت في امتحان جوته من أول مرة بفضل مساعدتها.', course: 'تحضير لامتحان A2' } ] },
    courses: { 
        title: 'دوراتنا المتخصصة',
        learnMore: 'اعرف المزيد',
        placementTestMessage: 'مرحباً! أنا مهتم بإجراء اختبار تحديد المستوى.',
        genericCourseInquiry: 'أنا مهتم بالتسجيل في دورة: ',
        a1: { title: 'A1 - مستوى المبتدئين', description: 'بوابتك الأولى لعالم اللغة الألمانية.', details: 'تم تصميم دورة A1 للمبتدئين تمامًا وتركز على بناء أساس قوي من خلال تعلم الحروف الأبجدية، النطق السليم، التحيات الأساسية، والقدرة على تكوين جمل بسيطة.', forWhom: 'هذه الدورة مثالية لمن لا يمتلك أي معرفة مسبقة باللغة الألمانية ويرغب في البدء من الصفر.', topics: ['الحروف الأبجدية والنطق', 'التحيات والتعريف بالنفس', 'الأرقام، الوقت والتاريخ', 'محادثات يومية بسيطة'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "A1 - مستوى المبتدئين".' },
        a2: { title: 'A2 - المستوى الأساسي', description: 'توسيع المفردات وإجراء محادثات أطول.', details: 'في مستوى A2، ستبدأ في فهم الجمل شائعة الاستخدام والتعبير عن نفسك في مواقف مألوفة. ستتعلم كيفية وصف ماضيك، بيئتك، واحتياجاتك بعبارات مباشرة.', forWhom: 'للطلاب الذين أنهوا مستوى A1 بنجاح ويريدون تعميق فهمهم للغة.', topics: ['وصف التجارب الماضية (Perfekt)', 'الاتجاهات ووصف الأماكن', 'التسوق وطلب الطعام', 'كتابة ملاحظات ورسائل قصيرة'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "A2 - المستوى الأساسي".' },
        b1: { title: 'B1 - المستوى المتوسط', description: 'الانطلاق نحو الطلاقة والتعبير عن الرأي.', details: 'يؤهلك مستوى B1 للتواصل بشكل مستقل في معظم المواقف اليومية. ستتمكن من فهم النقاط الرئيسية في المحادثات، التعبير عن رأيك، ووصف خططك المستقبلية.', forWhom: 'للطلاب الجادين في الوصول إلى الطلاقة، والمطلوب غالبًا للدراسة الجامعية أو العمل.', topics: ['التعبير عن الآراء والآمال', 'سرد القصص والأحداث', 'كتابة نصوص حول مواضيع مألوفة', 'استخدام الجمل الثانوية'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "B1 - المستوى المتوسط".' },
        b2: { title: 'B2 - المستوى المتقدم', description: 'فهم النصوص المعقدة والتحدث بطلاقة.', details: 'يركز مستوى B2 على الفهم الدقيق للنصوص المعقدة في مجالات متنوعة، والتفاعل بطلاقة وعفوية مع الناطقين الأصليين. ستتعلم بناء حجج قوية.', forWhom: 'للطلاب الذين يهدفون إلى الدراسة أو العمل في بيئة تتطلب إتقانًا عاليًا للغة الألمانية.', topics: ['فهم النصوص المعقدة والنقاشات المتخصصة', 'كتابة التقارير والمقالات الرسمية', 'فهم التعبيرات الاصطلاحية واللهجات', 'قواعد متقدمة (Konjunktiv II)'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "B2 - المستوى المتقدم".' },
        medical: { title: 'الألمانية الطبية', description: 'لغة التواصل في المستشفيات والمجال الطبي.', details: 'دورة متخصصة للأطباء والكوادر الطبية، تركز على المصطلحات الطبية، أخذ التاريخ المرضي، والتواصل الفعال مع الزملاء والمرضى.', forWhom: 'الأطباء، أطباء الأسنان، الصيادلة، والممرضون الذين يستعدون لامتحان FSP أو للعمل في ألمانيا.', topics: ['المصطلحات الطبية', 'محاكاة لمحادثات بين الطبيب والمريض', 'كتابة التقارير الطبية (Arztbrief)', 'شرح الإجراءات للمرضى'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "الألمانية الطبية".' },
        exam: { title: 'التحضير للامتحانات', description: 'تدريب مكثف على امتحانات Goethe و Telc.', details: 'دورة مكثفة تركز بشكل كامل على هيكل امتحانات Goethe و Telc. ستتدرب على جميع أقسام الامتحان (القراءة، الكتابة، السمع، المحادثة) مع نماذج امتحانات حقيقية.', forWhom: 'للطلاب الذين أوشكوا على دخول الامتحان ويحتاجون إلى مراجعة نهائية وتدريب مكثف.', topics: ['استراتيجيات لكل قسم من الامتحان', 'إدارة الوقت أثناء الامتحان', 'التدريب على القسم الشفوي', 'محاكاة كاملة للامتحان'], whatsappMessage: 'مرحباً! أنا مهتم بالتسجيل في دورة "التحضير للامتحانات".' },
        placement: { 
            title: 'اختبار تحديد المستوى', 
            description: 'حدد مستواك الحالي في اللغة الألمانية.',
            cta: 'ابدأ الاختبار الآن'
        },
    },
    courseDetail: { aboutCourse: 'عن الدورة', forWhom: 'لمن هذه الدورة؟', whatYouWillLearn: 'ماذا ستتعلم', registerNow: 'سجل الآن', backToCourses: 'العودة لكل الدورات', courseNotFound: 'لم يتم العثور على الدورة', returnToCourses: 'العودة إلى كل الدورات' },
    faq: { title: 'الأسئلة الشائعة', questions: [ { question: 'ما هي المستويات المتاحة؟', answer: 'نقدم دورات من A1 إلى B2، بالإضافة إلى الألمانية الطبية.' }, { question: 'هل الدورات عبر الإنترنت؟', answer: 'نقدم دورات عبر الإنترنت وحضورية حسب احتياجاتك.' }, { question: 'هل يوجد اختبار تحديد مستوى؟', answer: 'نعم، نقدم اختبار تحديد مستوى مجاني عبر الإنترنت.' } ] },
    contact: { title: 'اتصل بنا', whatsapp: 'تواصل عبر واتساب', phone: 'الهاتف', email: 'البريد الإلكتروني', address: 'العنوان', description: 'تواصل معنا لمزيد من المعلومات.' },
    footer: { quickLinks: 'روابط سريعة', contactUs: 'تواصل معنا', followUs: 'تابعنا', contactWhatsApp: 'تواصل واتساب', copyright: '© 2025 أكاديمية DP. جميع الحقوق محفوظة.' }
  },
  // ================= ENGLISH =================
  en: {
    navigation: { home: 'Home', about: 'About', courses: 'Courses', services: 'Services', faq: 'FAQ', contact: 'Contact' },
    hero: { title: 'DP Akademie', subtitle: 'Learn German from A1 to B2 + Medical German', description: 'Professional German teaching with an experienced instructor. Online and in-person courses.', cta: 'Start Now', placementTest: 'Placement Test', stats: { levels: 'Levels', students: 'Students', success: 'Success Rate' } },
    features: { title: 'Why Choose DP Akademie?', subtitle: 'Discover the advantages of our professional teaching', personalizedLearning: 'Personalized Learning', personalizedLearningDesc: 'Customized learning plans for each student', flexibleSchedule: 'Flexible Schedule', flexibleScheduleDesc: 'Classes when and where it suits you', certifiedCourses: 'Certified Courses', certifiedCoursesDesc: 'Official recognition and quality assurance', smallGroups: 'Small Groups', smallGroupsDesc: 'More attention and better learning outcomes', conversationPractice: 'Conversation Practice', conversationPracticeDesc: 'Intensive speaking practice for fluent communication', examPreparation: 'Exam Preparation', examPreparationDesc: 'Professional preparation for all language exams' },
    statistics: { title: 'Our Success in Numbers', subtitle: 'Trust our proven methodology', successRate: 'Success Rate', countries: 'Countries', hoursOfTeaching: 'Teaching Hours', averageRating: 'Average Rating' },
    cta: { title: 'Ready to Improve Your German?', description: 'Start your German journey today. Contact us for a free consultation.', whatsappButton: 'Contact via WhatsApp', callButton: 'Call Us', quickStart: { title: 'Quick Start', description: 'Begin your course within 24 hours' }, flexibleLearning: { title: 'Flexible Learning', description: 'Available online or in-person' }, certifiedResults: { title: 'Certified Results', description: 'Recognized language certificates' } },
    about: { title: 'About Us', instructorTitle: 'Your German Instructor', missionTitle: 'Our Mission', certificationsTitle: 'Qualifications', testimonialsTitle: 'Our Students\' Opinions', instructorBio: 'Mrs. Nada Mostafa is an experienced German instructor with years of expertise, helping students develop their German skills from scratch.', missionText: 'Our mission is to provide high-quality German courses that help students achieve their goals, whether for study, work, or life in Germany.', certifications: [ { title: 'Certified Instructor', description: 'Qualification for German as a foreign language' }, { title: 'Medical German Specialist', description: 'Expert in the Fachsprachprüfung (FSP) exam' }, { title: '5+ Years of Experience', description: 'Experience in teaching all levels' } ], testimonials: [ { name: 'Youssef El-Masry', text: 'Frau Nada really helped me reach the B2 level. Her teaching methods are super effective.', course: 'B2 Course' }, { name: 'Fatima Al-Jassem', text: 'The Medical German course was perfect for my job. Highly recommended!', course: 'Medical German' }, { name: 'Mona Adel', text: 'Excellent teacher! I passed my Goethe exam on the first try thanks to her help.', course: 'A2 Exam Preparation' } ] },
    courses: { 
        title: 'Our Specialized Courses',
        learnMore: 'Learn More',
        placementTestMessage: 'Hello! I am interested in taking the placement test.',
        genericCourseInquiry: 'I am interested in registering for the course: ',
        a1: { title: 'A1 - Beginner Level', description: 'Your first gateway into the German language.', details: 'The A1 course is designed for absolute beginners, focusing on building a strong foundation by learning the alphabet, correct pronunciation, basic greetings, and the ability to form simple sentences.', forWhom: 'This course is ideal for anyone with no prior knowledge of German who wants to start from scratch.', topics: ['Alphabet and pronunciation', 'Greetings and self-introduction', 'Numbers, time, and date', 'Simple daily conversations'], whatsappMessage: 'Hello! I am interested in the "A1 - Beginner Level" course.' },
        a2: { title: 'A2 - Elementary Level', description: 'Expand your vocabulary and hold longer conversations.', details: 'At the A2 level, you will start to understand commonly used sentences and express yourself in familiar situations. You will learn how to describe your past, your environment, and your needs in direct terms.', forWhom: 'For students who have successfully completed the A1 level and want to deepen their understanding.', topics: ['Describing past events (Perfect tense)', 'Directions and describing places', 'Shopping and ordering food', 'Writing short notes and emails'], whatsappMessage: 'Hello! I am interested in the "A2 - Elementary Level" course.' },
        b1: { title: 'B1 - Intermediate Level', description: 'Moving towards fluency and expressing opinions.', details: 'The B1 level enables you to communicate independently in most everyday situations. You will be able to understand the main points of conversations, express your opinion, and describe your future plans.', forWhom: 'For serious students aiming for fluency, often required for university studies or work.', topics: ['Expressing opinions and hopes', 'Narrating stories and events', 'Writing texts on familiar topics', 'Using subordinate clauses'], whatsappMessage: 'Hello! I am interested in the "B1 - Intermediate Level" course.' },
        b2: { title: 'B2 - Upper-Intermediate Level', description: 'Understand complex texts and speak fluently.', details: 'The B2 level focuses on the detailed understanding of complex texts on various topics and interacting fluently with native speakers. You will learn to construct strong arguments.', forWhom: 'For students who aim to study or work in an environment that requires a high proficiency in German.', topics: ['Understanding complex texts and specialized discussions', 'Writing formal reports and essays', 'Understanding idioms and dialects', 'Advanced grammar (Subjunctive II)'], whatsappMessage: 'Hello! I am interested in the "B2 - Upper-Intermediate Level" course.' },
        medical: { title: 'Medical German', description: 'Communication in hospitals and the medical field.', details: 'A specialized course for doctors and medical staff, focusing on medical terminology, taking a patient\'s history, and effective communication with colleagues and patients.', forWhom: 'Doctors, dentists, pharmacists, and nurses preparing for the FSP exam or to work in Germany.', topics: ['Medical terminology', 'Simulating doctor-patient conversations', 'Writing medical reports (Arztbrief)', 'Explaining procedures to patients'], whatsappMessage: 'Hello! I am interested in the "Medical German" course.' },
        exam: { title: 'Exam Preparation', description: 'Intensive training for Goethe & Telc exams.', details: 'An intensive course focused entirely on the structure of the Goethe and Telc exams. You will practice all sections (reading, writing, listening, speaking) with real exam models.', forWhom: 'Students who are about to take an exam and need final revision and intensive training.', topics: ['Strategies for all exam sections', 'Time management during the exam', 'Training for the oral part', 'Full exam simulations'], whatsappMessage: 'Hello! I am interested in the "Exam Preparation" course.' },
        placement: { 
            title: 'Placement Test', 
            description: 'Find out your current German language level.',
            cta: 'Start the Test Now'
        },
    },
    courseDetail: { aboutCourse: 'About The Course', forWhom: 'Who Is This Course For?', whatYouWillLearn: 'What You Will Learn', registerNow: 'Register Now', backToCourses: 'Back to All Courses', courseNotFound: 'Course Not Found', returnToCourses: 'Return to All Courses' },
    faq: { title: 'Frequently Asked Questions', questions: [ { question: 'What levels do you offer?', answer: 'We offer courses from A1 to B2, plus specialized Medical German.' }, { question: 'Are the courses online?', answer: 'We offer both online and in-person courses depending on your needs.' }, { question: 'Is there a placement test?', answer: 'Yes, we offer a free online placement test.' } ] },
    contact: { title: 'Contact Us', whatsapp: 'Contact via WhatsApp', phone: 'Phone', email: 'Email', address: 'Address', description: 'Contact us for more information.' },
    footer: { quickLinks: 'Quick Links', contactUs: 'Contact Us', followUs: 'Follow Us', contactWhatsApp: 'Contact via WhatsApp', copyright: '© 2025 DP Akademie. All rights reserved.' }
  }
};