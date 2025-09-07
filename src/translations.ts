export type Language = 'de' | 'ar' | 'en';

export interface TranslationContent {
  navigation: { home: string; about: string; courses: string; services: string; faq: string; contact: string; };
  hero: { title: string; subtitle: string; description: string; cta: string; placementTest: string; stats: { levels: string; students: string; success: string; }; };
  features: { title: string; subtitle: string; personalizedLearning: string; personalizedLearningDesc: string; flexibleSchedule: string; flexibleScheduleDesc: string; certifiedCourses: string; certifiedCoursesDesc: string; smallGroups: string; smallGroupsDesc: string; conversationPractice: string; conversationPracticeDesc: string; examPreparation: string; examPreparationDesc: string; };
  statistics: { title: string; subtitle: string; successRate: string; countries: string; hoursOfTeaching: string; averageRating: string; };
  cta: { title: string; description: string; whatsappButton: string; callButton: string; ctaWhatsappMessage: string; quickStart: { title: string; description: string; }; flexibleLearning: { title: string; description: string; }; certifiedResults: { title: string; description: string; }; };
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
    kids: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    conversation: { title: string; description: string; details: string; forWhom: string; topics: string[]; whatsappMessage: string; };
    placement: { title: string; description: string; cta: string; };
  };
  courseDetail: { aboutCourse: string; forWhom: string; whatYouWillLearn: string; registerNow: string; backToCourses: string; courseNotFound: string; returnToCourses: string; };
  faq: { title: string; questions: Array<{ question: string; answer: string; }>; };
  contact: {
    title: string;
    getInTouch: string;
    quickResponse: string;
    quickResponseDesc: string;
    whatsapp: string;
    whatsappInquiry: string;
    phone: string;
    location: string;
    address: string;
    description: string;
  };
  footer: {
    quickLinks: string;
    contactUs: string;
    followUs: string;
    contactWhatsApp: string;
    copyright: string;
    facebookUrl: string;
    instagramUrl: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  // ================= GERMAN =================
  de: {
    navigation: { home: 'Startseite', about: 'Über uns', courses: 'Kurse', services: 'Services', faq: 'FAQ', contact: 'Kontakt' },
    hero: { title: 'DP Akademie', subtitle: 'Deutsch lernen von A1 bis B2 + Medizinisches Deutsch', description: 'Professioneller Deutschunterricht mit erfahrener Lehrerin. Online und Präsenzkurse.', cta: 'Jetzt starten', placementTest: 'Einstufungstest', stats: { levels: 'Niveaustufen', students: 'Studenten', success: 'Erfolgsquote' } },
    features: { title: 'Warum DP Akademie wählen?', subtitle: 'Entdecken Sie die Vorteile unseres professionellen Deutschunterrichts', personalizedLearning: 'Personalisiertes Lernen', personalizedLearningDesc: 'Individuell angepasste Lernpläne', flexibleSchedule: 'Flexible Termine', flexibleScheduleDesc: 'Unterricht wann und wo es Ihnen passt', certifiedCourses: 'Zertifizierte Kurse', certifiedCoursesDesc: 'Offizielle Anerkennung und Qualität', smallGroups: 'Kleine Gruppen', smallGroupsDesc: 'Mehr Aufmerksamkeit und bessere Lernergebnisse', conversationPractice: 'Konversationspraxis', conversationPracticeDesc: 'Intensive Sprechübungen für fließende Kommunikation', examPreparation: 'Prüfungsvorbereitung', examPreparationDesc: 'Professionelle Vorbereitung auf alle Sprachprüfungen' },
    statistics: { title: 'Unsere Erfolge in Zahlen', subtitle: 'Vertrauen Sie auf unsere bewährte Methodik', successRate: 'Erfolgsquote', countries: 'Länder', hoursOfTeaching: 'Unterrichtsstunden', averageRating: 'Durchschnittsbewertung' },
    cta: { title: 'Bereit, Ihr Deutsch zu verbessern?', description: 'Beginnen Sie Ihre Deutschreise heute. Kontaktieren Sie uns für eine kostenlose Beratung.', whatsappButton: 'WhatsApp kontaktieren', callButton: 'Anrufen', ctaWhatsappMessage: 'Hallo! Ich habe eine allgemeine Anfrage zu Ihren Deutschkursen.', quickStart: { title: 'Schneller Start', description: 'Beginnen Sie innerhalb von 24 Stunden' }, flexibleLearning: { title: 'Flexibles Lernen', description: 'Online oder vor Ort verfügbar' }, certifiedResults: { title: 'Zertifizierte Ergebnisse', description: 'Anerkannte Sprachzertifikate' } },
    about: { 
        title: 'Über Uns', 
        instructorTitle: 'Ihre Kursleiterin für Deutsch',
        missionTitle: 'Unsere Mission', 
        certificationsTitle: 'Qualifikationen & Akkreditierungen',
        testimonialsTitle: 'Stimmen unserer Kursteilnehmer',
        instructorBio: 'Mit Kursleiterin Nada Mostafa wird das Deutschlernen zu einem klaren Erfolgsweg. Dank ihrer umfassenden Erfahrung und einer ergebnisorientierten Methodik werden die Teilnehmer optimal darauf vorbereitet, offizielle Prüfungen erfolgreich zu bestehen und im Berufs- und Studienalltag fließend zu kommunizieren.',
        missionText: 'Unsere Mission ist es, exzellente Deutschkurse anzubieten, die Studierende optimal auf ihre Ziele vorbereiten – sei es für ein Studium, eine berufliche Karriere oder das Leben in Deutschland. Wir legen Wert auf praxisorientiertes Lernen und individuelle Förderung.',
        certifications: [ 
            { 
                title: 'Spezialisiertes Lehrzertifikat (DaF)', 
                description: 'Offizielle akademische Akkreditierung, die eine hohe Kompetenz in der Anwendung europäischer Standards für den Sprachunterricht bestätigt.' 
            },
            { 
                title: 'Spezialisierung Medizinisches Deutsch', 
                description: 'Expertin für die Fachsprachprüfung (FSP) und ärztliche Kommunikation' 
            },
            { 
                title: 'Über 5 Jahre Lehrerfahrung', 
                description: 'Umfassende Erfahrung im Unterrichten aller Niveaustufen' 
            }
        ], 
        testimonials: [ 
            { name: 'Youssef El-Masry', text: 'Frau Nada hat mir geholfen, mein B2-Niveau zu erreichen. Ihre Methoden sind super effektiv.', course: 'B2 Kurs' }, 
            { name: 'Fatima Al-Jassem', text: 'Der medizinische Deutschkurs war perfekt für meine Arbeit. Sehr empfehlenswert!', course: 'Medizinisches Deutsch' }, 
            { name: 'Mona Adel', text: 'Ausgezeichnete Kursleiterin! Ich habe meine Goethe-Prüfung dank ihr auf Anhieb bestanden.', course: 'A2 Prüfungsvorbereitung' }
        ] 
    },
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
        exam: { title: 'Prüfungsvorbereitung (Goethe/Telc)', description: 'Gezieltes Training zur optimalen Vorbereitung.', details: 'Ein Intensivkurs, der sich vollständig auf die Struktur der Goethe- und Telc-Prüfungen konzentriert. Sie trainieren alle Prüfungsteile mit echten Prüfsungsmodellen.', forWhom: 'Studierende, die kurz vor der Prüfung stehen und eine abschließende Wiederholung und intensives Training benötigen.', topics: ['Strategien für alle Prüfungsteile', 'Zeitmanagement', 'Mündliches Training', 'Prüfungssimulationen'], whatsappMessage: 'Hallo! Ich interessiere mich für den Prüfungsvorbereitungeskurs.' },
        kids: { title: 'Deutsch für Kinder', description: 'Ein lustiges Abenteuer, um Deutsch mit Spielen und Liedern zu lernen.', details: 'Dieses Programm wurde speziell für Kinder entwickelt, um sie auf interaktive und ansprechende Weise an die deutsche Sprache heranzuführen. Wir konzentrieren uns auf praktische Aktivitäten, Spiele und Lieder, um eine starke und unterhaltsame sprachliche Grundlage zu schaffen.', forWhom: 'Für Kinder von 6 bis 12 Jahren, egal ob Anfänger oder mit geringen Vorkenntnissen.', topics: ['Kennenlernen und Farben', 'Tiere und Essen', 'Lernlieder und Spiele', 'Einfache Sätze für den Alltag'], whatsappMessage: 'Hallo! Ich interessiere mich für den Deutschkurs für Kinder.' },
        conversation: { title: 'Konversationskurse', description: 'Sprechen Sie Deutsch selbstbewusst und fließend.', details: 'Dieser Kurs konzentriert sich ausschließlich auf die Verbesserung Ihrer mündlichen Ausdrucksfähigkeit. Durch Diskussionen, Rollenspiele und praktische Übungen bauen Sie Hemmungen ab und gewinnen an Flüssigkeit.', forWhom: 'Für Lernende ab dem B1-Niveau, die ihre Sprechfähigkeiten in alltäglichen und beruflichen Situationen verbessern möchten.', topics: ['Alltägliche Diskussionen', 'Meinungen äußern und argumentieren', 'Präsentationen und Redewendungen', 'Telefonate und formelle Gespräche'], whatsappMessage: 'Hallo! Ich interessiere mich für den Konversationskurs.' },
        placement: { title: 'Einstufungstest', description: 'Finden Sie Ihr aktuelles Sprachniveau heraus.', cta: 'Test jetzt starten' },
    },
    courseDetail: { aboutCourse: 'Über den Kurs', forWhom: 'Für wen ist dieser Kurs?', whatYouWillLearn: 'Was Sie lernen werden', registerNow: 'Jetzt anmelden', backToCourses: 'Zurück zu allen Kursen', courseNotFound: 'Kurs nicht gefunden', returnToCourses: 'Zurück zur Kursübersicht' },
    faq: { 
        title: 'Häufig gestellte Fragen',
        questions: [
            { question: 'Wie sind die Schritte zur Anmeldung für einen Kurs?', answer: 'Ihre Reise beginnt mit einfachen Schritten: Machen Sie zuerst den Einstufungstest. Kontaktieren Sie uns dann per WhatsApp, um Ihr Ergebnis zu besprechen und den passenden Kurs auszuwählen. Bestätigen Sie schließlich Ihre Buchung durch Zahlung.' },
            { question: 'Wie lange dauert jede Niveaustufe und wie viele Stunden pro Woche?', answer: 'Normalerweise dauert jede Niveaustufe 2-3 Monate, mit 2-3 Unterrichtsstunden pro Woche. Wir bieten verschiedene Zeitpläne an, um allen Bedürfnissen gerecht zu werden.' },
            { question: 'Was kosten die Kurse und welche Zahlungsmethoden gibt es?', answer: 'Die Kosten variieren je nach Niveau und Kursart. Für die neuesten Preise und Angebote kontaktieren Sie uns bitte per WhatsApp. Wir akzeptieren Banküberweisungen und andere einfache Zahlungsmethoden.' },
            { question: 'Was ist, wenn ich eine Unterrichtsstunde verpasse? Gibt es Aufzeichnungen?', answer: 'Ja, alle Online-Unterrichtsstunden werden aufgezeichnet und den Studierenden zur Verfügung gestellt, damit Sie nichts verpassen.' },
            { question: 'Muss ich selbst Bücher oder Lehrmaterialien kaufen?', answer: 'Nein, alle benötigten Materialien, einschließlich PDFs und interaktiver Übungen, werden von der Akademie zur Verfügung gestellt und sind in den Kursgebühren enthalten.' },
            { question: 'Gibt es Prüfungen während des Kurses?', answer: 'Ja, unser System basiert auf kontinuierlicher Bewertung. Nach jeder Lektion gibt es eine kleine Prüfung, um das Verständnis zu sichern, und am Ende jeder Niveaustufe eine umfassende Prüfung, um Ihren Fortschritt zu messen.' }
        ]
    },
    contact: { 
        title: 'Kontaktieren Sie uns', 
        getInTouch: 'Treten Sie mit uns in Kontakt',
        quickResponse: 'Schnelle Antwort auf WhatsApp',
        quickResponseDesc: 'Erhalten Sie sofortige Antworten auf Ihre Fragen.',
        whatsapp: 'Diskutieren Sie per WhatsApp', 
        whatsappInquiry: 'Hallo! Ich habe eine Anfrage bezüglich der Deutschkurse.',
        phone: '+20 102 939 8799', 
        location: 'Standort',
        address: 'Belqas, Talaat Metawa Tower', 
        description: 'Wir stehen Ihnen jederzeit für Fragen zur Verfügung.' 
    },
    footer: {
        quickLinks: 'Schnellinks',
        contactUs: 'Kontaktdaten',
        followUs: 'Folgen Sie uns',
        contactWhatsApp: 'Kontakt per WhatsApp',
        copyright: '© 2025 DP Akademie. Alle Rechte vorbehalten.',
        facebookUrl: 'https://www.facebook.com/share/1RYo2cZtbE/',
        instagramUrl: 'https://www.instagram.com/dp_akademie?igsh=bjdoYW1sc2dkenBz'
    }
  },
  // ================= ARABIC =================
  ar: {
    navigation: { home: 'الرئيسية', about: 'من نحن', courses: 'الدورات', services: 'الخدمات', faq: 'الأسئلة الشائعة', contact: 'اتصل بنا' },
    hero: { title: 'أكاديمية DP', subtitle: 'تعلم الألمانية من A1 إلى B2 + الألمانية الطبية', description: 'تدريس ألماني احترافي مع معلمة خبيرة. دورات أونلاين وحضورية.', cta: 'ابدأ الآن', placementTest: 'اختبار تحديد المستوى', stats: { levels: 'المستويات', students: 'الطلاب', success: 'معدل النجاح' } },
    features: { title: 'لماذا تختار أكاديمية DP؟', subtitle: 'اكتشف مزايا تدريسنا الاحترافي', personalizedLearning: 'تعلم مخصص', personalizedLearningDesc: 'خطط تعليمية مصممة لكل طالب', flexibleSchedule: 'مواعيد مرنة', flexibleScheduleDesc: 'دروس في الوقت والمكان المناسب لك', certifiedCourses: 'دورات معتمدة', certifiedCoursesDesc: 'اعتراف رسمي وضمان للجودة', smallGroups: 'مجموعات صغيرة', smallGroupsDesc: 'اهتمام أكبر ونتائج تعلم أفضل', conversationPractice: 'ممارسة المحادثة', conversationPracticeDesc: 'تدريب مكثف على المحادثة للتواصل بطلاقة', examPreparation: 'التحضير للامتحانات', examPreparationDesc: 'تحضير مهني لجميع امتحانات اللغة' },
    statistics: { title: 'نجاحاتنا بالأرقام', subtitle: 'ثق في منهجيتنا المجربة', successRate: 'معدل النجاح', countries: 'البلدان', hoursOfTeaching: 'ساعات التدريس', averageRating: 'متوسط التقييم' },
    cta: { title: 'مستعد لتحسين لغتك الألمانية؟', description: 'ابدأ رحلتك في تعلم الألمانية اليوم. تواصل معنا لاستشارة مجانية.', whatsappButton: 'تواصل عبر واتساب', callButton: 'اتصل بنا', ctaWhatsappMessage: 'مرحباً! لدي استفسار عام بخصوص دورات اللغة الألمانية.', quickStart: { title: 'بداية سريعة', description: 'ابدأ دورتك خلال 24 ساعة' }, flexibleLearning: { title: 'تعلم مرن', description: 'متاح أونلاين أو حضورياً' }, certifiedResults: { title: 'نتائج معتمدة', description: 'شهادات لغة معترف بها' } },
    about: { 
        title: 'من نحن', 
        instructorTitle: 'محاضرة اللغة الألمانية',
        missionTitle: 'مهمتنا', 
        certificationsTitle: 'المؤهلات والاعتمادات',
        testimonialsTitle: 'آراء طلابنا', 
        instructorBio: 'مع المحاضرة ندى مصطفى، يتحول تعلم اللغة الألمانية إلى مسار نجاح واضح. بفضل خبرتها الممتدة ومنهجيتها التي تركز على النتائج، يتم تأهيل الطلاب لاجتياز الامتحانات الرسمية والتواصل بطلاقة في بيئات العمل والدراسة.',
        missionText: 'مهمتنا هي تقديم دورات ألمانية ممتازة وعالية الجودة تُعد الطلاب بشكل مثالي لتحقيق أهدافهم الأكاديمية أو المهنية أو الحياتية في ألمانيا. نركز على التعلم العملي والتوجيه الفردي.',
        certifications: [ 
            { 
                title: 'شهادة تدريس متخصصة في اللغة الألمانية (DaF)', 
                description: 'اعتماد أكاديمي رسمي يؤكد الكفاءة العالية في تطبيق المعايير الأوروبية لتعليم اللغات.' 
            },
            { 
                title: 'متخصصة في الألمانية الطبية', 
                description: 'خبيرة في امتحان اللغة التخصصي (FSP) والتواصل الطبي' 
            },
            { 
                title: 'أكثر من 5 سنوات خبرة تدريسية', 
                description: 'خبرة واسعة في تدريس جميع المستويات اللغوية' 
            }
        ], 
        testimonials: [ 
            { name: 'يوسف المصري', text: 'الأستاذة ندى ساعدتني جدًا في الوصول لمستوى B2. طرق تدريسها فعالة ومباشرة.', course: 'دورة B2' }, 
            { name: 'فاطمة الجاسم', text: 'دورة الألماني الطبي كانت ممتازة لعملي. أنصح بها وبقوة!', course: 'الألمانية الطبية' }, 
            { name: 'منى عادل', text: 'محاضرة ممتازة! نجحت في امتحان جوته من أول مرة بفضل مساعدتها.', course: 'تحضير لامتحان A2' } 
        ] 
    },
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
        exam: { title: 'التحضير للامتحانات (Goethe/Telc)', description: 'تدريب مكثف للتحضير الأمثل للامتحان.', details: 'دورة مكثفة تركز بشكل كامل على هيكل امتحانات جوته وتلك. ستتدرب على جميع أقسام الامتحان مع نماذج امتحانات حقيقية.', forWhom: 'للطلاب الذين أوشكوا على دخول الامتحان ويحتاجون إلى مراجعة نهائية وتدريب مكثف.', topics: ['استراتيجيات لكل قسم', 'إدارة الوقت', 'تدريب شفوي', 'محاكاة كاملة للامتحان'], whatsappMessage: 'مرحباً! أنا مهتم بدورة التحضير للامتحانات.' },
        kids: { title: 'دورات الأطفال', description: 'مغامرة ممتعة لتعلم الألمانية باللعب والأغاني.', details: 'تم تصميم هذا البرنامج خصيصًا للأطفال لتعريفهم باللغة الألمانية بطريقة تفاعلية ومحببة. نركز على الأنشطة العملية والألعاب والأغاني لبناء أساس لغوي قوي وممتع.', forWhom: 'للأطفال من سن 6 إلى 12 عامًا، سواء كانوا مبتدئين أو لديهم معرفة بسيطة.', topics: ['التعارف والألوان', 'الحيوانات والطعام', 'الأغاني والألعاب التعليمية', 'جمل بسيطة للحياة اليومية'], whatsappMessage: 'مرحباً! أنا مهتم بتسجيل طفلي في دورات الأطفال.' },
        conversation: { title: 'كورسات المحادثة', description: 'تحدث الألمانية بثقة وطلاقة.', details: 'يركز هذا الكورس بشكل كامل على تحسين مهاراتك الشفهية. من خلال المناقشات ولعب الأدوار والتمارين العملية، ستكسر حاجز الخوف وتكتسب الطلاقة في التحدث.', forWhom: 'للدارسين من مستوى B1 فما فوق، الراغبين في تعزيز قدرتهم على التحدث في المواقف اليومية والمهنية.', topics: ['مناقشات الحياة اليومية', 'التعبير عن الرأي وتقديم الحجج', 'العروض التقديمية والتعابير الاصطلاحية', 'المكالمات الهاتفية والمحادثات الرسمية'], whatsappMessage: 'مرحباً! أنا مهتم بكورس المحادثة.' },
        placement: { title: 'اختبار تحديد المستوى', description: 'حدد مستواك الحالي في اللغة الألمانية.', cta: 'ابدأ الاختبار الآن' },
    },
    courseDetail: { aboutCourse: 'عن الدورة', forWhom: 'لمن هذه الدورة؟', whatYouWillLearn: 'ماذا ستتعلم', registerNow: 'سجل الآن', backToCourses: 'العودة لكل الدورات', courseNotFound: 'لم يتم العثور على الدورة', returnToCourses: 'العودة إلى كل الدورات' },
    faq: { 
        title: 'الأسئلة الشائعة',
        questions: [
            { question: 'ما هي خطوات التسجيل في دورة؟', answer: 'تبدأ رحلتك معنا بخطوات بسيطة: أولاً، قم بإجراء اختبار تحديد المستوى. ثانيًا، تواصل معنا عبر واتساب لمناقشة نتيجتك واختيار الدورة المناسبة. أخيرًا، قم بتأكيد حجزك عبر الدفع، وستكون جاهزًا للبدء!' },
            { question: 'كم مدة كل مستوى، وكم عدد الحصص في الأسبوع؟', answer: 'عادةً ما يستغرق كل مستوى من شهرين إلى ثلاثة أشهر، بواقع حصتين إلى ثلاث حصص أسبوعيًا. نحن نقدم جداول زمنية متنوعة لتناسب جميع الاحتياجات.' },
            { question: 'ما هي تكلفة الدورات وطرق الدفع المتاحة؟', answer: 'تختلف تكلفة الدورات بناءً على المستوى. للحصول على أحدث الأسعار والعروض، يرجى التواصل معنا عبر واتساب. نقبل الدفع عبر التحويل البنكي وفودافون كاش.' },
            { question: 'ماذا لو فاتتني حصة؟ هل هناك تسجيلات للحصص؟', answer: 'نعم بالطبع. يتم تسجيل جميع الحصص الأونلاين وإتاحتها للطلاب. إذا فاتت-ك حصة، يمكنك مشاهدة التسجيل في أي وقت لمراجعة الدرس.' },
            { question: 'هل أحتاج إلى شراء كتب أو مواد تعليمية بنفسي؟', answer: 'لا، جميع المواد التعليمية التي ستحتاجها، بما في ذلك الكتب بصيغة PDF والتمارين، يتم توفيرها من قبل الأكاديمية وهي مشمولة في تكلفة الدورة.' },
            { question: 'هل يوجد امتحانات أثناء فترة الكورس؟', answer: 'نعم، نظامنا يعتمد على التقييم المستمر. يوجد امتحان قصير بعد كل درس لضمان الفهم، وامتحان شامل في نهاية كل مستوى لقياس مدى تقدمك واستعدادك للمستوى التالي.' }
        ]
    },
    contact: { 
        title: 'اتصل بنا', 
        getInTouch: 'تواصل معنا',
        quickResponse: 'رد سريع على واتساب',
        quickResponseDesc: 'احصل على إجابات فورية لأسئلتك.',
        whatsapp: 'تحدث معنا عبر واتساب', 
        whatsappInquiry: 'مرحباً! لدي استفسار بخصوص دورات اللغة الألمانية.',
        phone: '+20 102 939 8799',
        location: 'الموقع',
        address: 'بلقاس، برج طلعت مطاوع',
        description: 'نحن هنا لمساعدتك والإجابة على جميع استفساراتك.' 
    },
    footer: {
        quickLinks: 'روابط سريعة',
        contactUs: 'بيانات التواصل',
        followUs: 'تابعنا',
        contactWhatsApp: 'تواصل واتساب',
        copyright: '© 2025 أكاديمية DP. جميع الحقوق محفوظة.',
        facebookUrl: 'https://www.facebook.com/share/1RYo2cZtbE/',
        instagramUrl: 'https://www.instagram.com/dp_akademie?igsh=bjdoYW1sc2dkenBz'
    }
  },
  // ================= ENGLISH =================
  en: {
    navigation: { home: 'Home', about: 'About', courses: 'Courses', services: 'Services', faq: 'FAQ', contact: 'Contact' },
    hero: { title: 'DP Akademie', subtitle: 'Learn German from A1 to B2 + Medical German', description: 'Professional German teaching with an experienced instructor. Online and in-person courses.', cta: 'Start Now', placementTest: 'Placement Test', stats: { levels: 'Levels', students: 'Students', success: 'Success Rate' } },
    features: { title: 'Why Choose DP Akademie?', subtitle: 'Discover the advantages of our professional teaching', personalizedLearning: 'Personalized Learning', personalizedLearningDesc: 'Customized learning plans for each student', flexibleSchedule: 'Flexible Schedule', flexibleScheduleDesc: 'Classes when and where it suits you', certifiedCourses: 'Certified Courses', certifiedCoursesDesc: 'Official recognition and quality assurance', smallGroups: 'Small Groups', smallGroupsDesc: 'More attention and better learning outcomes', conversationPractice: 'Conversation Practice', conversationPracticeDesc: 'Intensive speaking practice for fluent communication', examPreparation: 'Exam Preparation', examPreparationDesc: 'Professional preparation for all language exams' },
    statistics: { title: 'Our Success in Numbers', subtitle: 'Trust our proven methodology', successRate: 'Success Rate', countries: 'Countries', hoursOfTeaching: 'Teaching Hours', averageRating: 'Average Rating' },
    cta: { title: 'Ready to Improve Your German?', description: 'Start your German journey today. Contact us for a free consultation.', whatsappButton: 'Contact via WhatsApp', callButton: 'Call Us', ctaWhatsappMessage: 'Hello! I have a general inquiry about your German courses.', quickStart: { title: 'Quick Start', description: 'Begin your course within 24 hours' }, flexibleLearning: { title: 'Flexible Learning', description: 'Available online or in-person' }, certifiedResults: { title: 'Certified Results', description: 'Recognized language certificates' } },
    about: { 
        title: 'About Us', 
        instructorTitle: 'Your German Instructor',
        missionTitle: 'Our Mission', 
        certificationsTitle: 'Qualifications & Accreditations',
        testimonialsTitle: 'Testimonials from Our Students', 
        instructorBio: 'With instructor Nada Mostafa, learning German becomes a clear path to success. Thanks to her extensive experience and results-focused methodology, students are prepared to confidently pass official exams and communicate fluently in professional and academic settings.',
        missionText: 'Our mission is to deliver excellent and high-quality German courses that optimally prepare students for their academic, professional, or life goals in Germany. We emphasize practical learning and individual guidance.',
        certifications: [ 
            { 
                title: 'Specialized Certificate in Teaching German (DaF)', 
                description: 'Official academic accreditation confirming high proficiency in applying European standards for language teaching.' 
            },
            { 
                title: 'Medical German Specialization', 
                description: 'Expert in the Fachsprachprüfung (FSP) and medical communication' 
            },
            { 
                title: 'Over 5 Years of Teaching Experience', 
                description: 'Extensive experience in teaching all language levels' 
            }
        ], 
        testimonials: [ 
            { name: 'Youssef El-Masry', text: 'Ms. Nada really helped me reach the B2 level. Her teaching methods are super effective.', course: 'B2 Course' }, 
            { name: 'Fatima Al-Jassem', text: 'The Medical German course was perfect for my job. Highly recommended!', course: 'Medical German' }, 
            { name: 'Mona Adel', text: 'Excellent instructor! I passed my Goethe exam on the first try thanks to her help.', course: 'A2 Exam Preparation' } 
        ] 
    },
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
        exam: { title: 'Exam Preparation (Goethe/Telc)', description: 'Intensive training for optimal exam preparation.', details: 'An intensive course focused entirely on the structure of the Goethe and Telc exams. You will practice all sections with real exam models.', forWhom: 'Students who are about to take an exam and need final revision and intensive training.', topics: ['Strategies for all sections', 'Time management', 'Oral practice', 'Full exam simulations'], whatsappMessage: 'Hello! I am interested in the exam preparation course.' },
        kids: { title: 'German for Kids', description: 'A fun adventure to learn German with games and songs.', details: 'This program is specially designed for children to introduce them to the German language in an interactive and engaging way. We focus on practical activities, games, and songs to build a strong and enjoyable linguistic foundation.', forWhom: 'For children aged 6 to 12, whether beginners or with little prior knowledge.', topics: ['Introductions and colors', 'Animals and food', 'Educational songs and games', 'Simple everyday sentences'], whatsappMessage: 'Hello! I am interested in the German for Kids course.' },
        conversation: { title: 'Conversation Courses', description: 'Speak German confidently and fluently.', details: 'This course focuses entirely on improving your oral expression. Through discussions, role-playing, and practical exercises, you will overcome inhibitions and gain fluency in speaking.', forWhom: 'For learners at B1 level and above who wish to enhance their speaking skills in everyday and professional situations.', topics: ['Everyday discussions', 'Expressing opinions and arguing', 'Presentations and idioms', 'Phone calls and formal conversations'], whatsappMessage: 'Hello! I am interested in the conversation course.' },
        placement: { 
            title: 'Placement Test', 
            description: 'Find out your current German language level.',
            cta: 'Start the Test Now'
        },
    },
    courseDetail: { aboutCourse: 'About The Course', forWhom: 'Who Is This Course For?', whatYouWillLearn: 'What You Will Learn', registerNow: 'Register Now', backToCourses: 'Back to All Courses', courseNotFound: 'Course Not Found', returnToCourses: 'Return to All Courses' },
    faq: { 
        title: 'Frequently Asked Questions',
        questions: [
            { question: 'What are the steps to register for a course?', answer: 'Your journey begins with simple steps: First, take the placement test. Second, contact us via WhatsApp to discuss your result and choose a suitable course. Finally, confirm your booking by making the payment, and you\'re ready to start!' },
            { question: 'How long is each level, and how many classes per week?', answer: 'Typically, each level takes two to three months, with two to three classes per week. We offer various schedules to suit all needs.' },
            { question: 'What are the course fees and available payment methods?', answer: 'Course fees vary by level. For the latest prices and offers, please contact us via WhatsApp. We accept bank transfers, Vodafone Cash, and other methods.' },
            { question: 'What if I miss a class? Are there recordings?', answer: 'Yes, of course. All online classes are recorded and made available to students. If you miss a class, you can watch the recording at any time.' },
            { question: 'Do I need to buy books or materials myself?', answer: 'No, all the materials you will need, including PDF books and exercises, are provided by the academy and are included in the course fee.' },
            { question: 'Are there exams during the course?', answer: 'Yes, our system is based on continuous assessment. There is a short quiz after each lesson to ensure understanding, and a comprehensive exam at the end of each level to measure your progress.' }
        ]
    },
    contact: { 
        title: 'Contact Us', 
        getInTouch: 'Get in Touch',
        quickResponse: 'Quick Response on WhatsApp',
        quickResponseDesc: 'Get instant answers to your questions.',
        whatsapp: 'Chat with us on WhatsApp', 
        whatsappInquiry: 'Hello! I have an inquiry regarding the German language courses.',
        phone: '+20 102 939 8799', 
        location: 'Location',
        address: 'Belqas, Talaat Metawa Tower', 
        description: 'We are here to help and answer all your inquiries.' 
    },
    footer: {
        quickLinks: 'Quick Links',
        contactUs: 'Contact Details',
        followUs: 'Follow Us',
        contactWhatsApp: 'Contact on WhatsApp',
        copyright: '© 2025 DP Akademie. All rights reserved.',
        facebookUrl: 'https://www.facebook.com/share/1RYo2cZtbE/',
        instagramUrl: 'https://www.instagram.com/dp_akademie?igsh=bjdoYW1sc2dkenBz'
    }
  }
};