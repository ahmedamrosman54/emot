export type Language = "en" | "ar";

export interface Translation {
  dir: "ltr" | "rtl";
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    pricing: string;
    testimonials: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    bio1: string;
    bio2: string;
    bio3: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    experience: string;
    projects: string;
    clients: string;
    uptime: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    supportBadge: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    viewProject: string;
    project1Title: string;
    project1Category: string;
    project2Title: string;
    project2Category: string;
    project3Title: string;
    project3Category: string;
    project4Title: string;
    project4Category: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    popular: string;
    perProject: string;
    package1Name: string;
    package1Price: string;
    package1Features: string[];
    package2Name: string;
    package2Price: string;
    package2Features: string[];
    package3Name: string;
    package3Price: string;
    package3Features: string[];
    addonsTitle: string;
    addon1: string;
    addon2: string;
    addon2Price: string;
    addon3: string;
    addon3Price: string;
    cta: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: { name: string; role: string; text: string; rating: number }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    whatsapp: string;
    phone: string;
    emailLabel: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
    phone: string;
    whatsapp: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      pricing: "Pricing",
      testimonials: "Reviews",
      contact: "Contact",
      cta: "Get Started",
    },
    hero: {
      badge: "Enterprise Web & Cloud Systems",
      titleLine1: "Building the",
      titleLine2: "Digital Future",
      titleHighlight: "emot",
      description:
        "I am Ahmed Amr, software engineer and founder of emot — crafting high-performance cloud systems, intelligent databases, and immersive web experiences engineered for scale.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Portfolio",
      stat1Label: "Projects Delivered",
      stat2Label: "Client Satisfaction",
      stat3Label: "Years Experience",
    },
    about: {
      badge: "About",
      title: "Engineer. Architect. Founder.",
      subtitle: "The mind behind emot",
      bio1: "Ahmed Amr is a software engineer specializing in cloud-native architectures and high-performance database systems. As the founder of emot, he transforms complex business requirements into elegant, scalable digital solutions.",
      bio2: "With deep expertise in distributed systems, real-time data pipelines, and modern frontend engineering, Ahmed delivers platforms that are as fast as they are beautiful — every interface tuned for instant response and every database optimized for lightning queries.",
      bio3: "From enterprise admin dashboards to customer-facing applications, emot stands for precision, performance, and pixel-perfect craftsmanship.",
      card1Title: "Cloud Architecture",
      card1Desc:
        "Distributed systems engineered for horizontal scale and zero-downtime deploys.",
      card2Title: "Database Engineering",
      card2Desc:
        "Schema design, query optimization, and security for mission-critical data.",
      card3Title: "Frontend Performance",
      card3Desc:
        "Sub-second load times, 100/100 Lighthouse scores, buttery-smooth UX.",
      card4Title: "System Integration",
      card4Desc:
        "APIs, webhooks, and automation pipelines that connect everything.",
      experience: "Years Experience",
      projects: "Projects Built",
      clients: "Happy Clients",
      uptime: "System Uptime",
    },
    services: {
      badge: "Services",
      title: "Technical Services",
      subtitle: "Full-stack engineering from pixel to pipeline",
      supportBadge: "24/7 Support",
      card1Title: "UI/UX Digital Design",
      card1Desc:
        "Crafting modern, immersive user interfaces with the highest standards of usability, accessibility, and visual impact.",
      card2Title: "Database Engineering",
      card2Desc:
        "Designing, architecting, and securing customer and product databases with instant query performance and bulletproof integrity.",
      card3Title: "High-Speed Frontend",
      card3Desc:
        "Building ultra-responsive, lightning-fast user-facing pages that load instantly and adapt flawlessly to every screen.",
      card4Title: "Admin Dashboards",
      card4Desc:
        "Intelligent company management panels and smart control dashboards that streamline operations and empower decision-making.",
    },
    portfolio: {
      badge: "Portfolio",
      title: "Selected Works",
      subtitle: "Projects built with emot engineering",
      viewProject: "View Project",
      project1Title: "Food Delivery App",
      project1Category: "Grocery Delivery Platform",
      project2Title: "Real Estate Website",
      project2Category: "Real Estate Listings",
      project3Title: "Hotel Booking",
      project3Category: "Hotel Booking System",
      project4Title: "Doctor Booking",
      project4Category: "Appointment Booking Platform",
    },
    pricing: {
      badge: "Pricing",
      title: "Packages & Pricing",
      subtitle: "Transparent pricing for every scale",
      popular: "Most Popular",
      perProject: "/ project",
      package1Name: "Standard",
      package1Price: "$199",
      package1Features: [
        "Identity showcase website",
        "Free hosting included",
        "Free non-custom domain",
        "Responsive design",
        "Basic SEO setup",
      ],
      package2Name: "Premium",
      package2Price: "$299",
      package2Features: [
        "Full customer & product database",
        "Data control & monitoring page",
        "5 GB hosting included",
        "Free non-custom domain",
        "Advanced SEO optimization",
        "Analytics integration",
      ],
      package3Name: "Ultra",
      package3Price: "$349",
      package3Features: [
        "Full customer & product database",
        "Data control & monitoring page",
        "10 GB hosting included",
        "Custom professional domain",
        "1 month direct support from Ahmed Amr",
        "Priority 24/7 technical support",
        "Performance optimization",
      ],
      addonsTitle: "Database Storage Add-ons",
      addon1: "500 MB Free — included with every project",
      addon2: "5 GB Extra Database Storage",
      addon2Price: "$20",
      addon3: "15 GB Extra Database Storage",
      addon3Price: "$50",
      cta: "Choose Package",
    },
    testimonials: {
      badge: "Reviews",
      title: "Client Testimonials",
      subtitle: "What clients say about working with emot",
      items: [
        {
          name: "Ahmed Hassan",
          role: "Owner, Food Delivery App",
          text: "The food delivery app made taking orders much easier for me. Customers can browse the menu quickly, and I can manage every order in one place.",
          rating: 5,
        },
        {
          name: "Mohamed Ali",
          role: "Owner, Real Estate Website",
          text: "I needed a clear website for my properties and offers. The listings are now organized, and clients can find the right apartment much faster.",
          rating: 5,
        },
        {
          name: "Karim Samir",
          role: "Owner, Hotel Booking",
          text: "The hotel booking website saved us a lot of back and forth. Guests can see the details and send their booking easily, while our team follows every reservation.",
          rating: 5,
        },
        {
          name: "Omar Khaled",
          role: "Owner, Doctor Booking",
          text: "The doctor booking website feels professional and is easy for patients to use. We started receiving organized appointment requests from day one.",
          rating: 5,
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Get In Touch",
      subtitle: "Start your project with emot today",
      name: "Your Name",
      namePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@example.com",
      message: "Project Details",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I will get back to you soon.",
      error:
        "Something went wrong. Please try again or contact me on WhatsApp.",
      whatsapp: "WhatsApp",
      phone: "Phone",
      emailLabel: "Email",
    },
    footer: {
      tagline:
        "Enterprise web development and cloud systems engineered for the future.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
      phone: "Phone & WhatsApp",
      whatsapp: "Chat on WhatsApp",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "مشاريعنا",
      pricing: "باقاتنا",
      testimonials: "آراء العملاء",
      contact: "تواصل معنا",
      cta: "ابدأ الآن",
    },
    hero: {
      badge: "تطوير المواقع والأنظمة السحابية المتكاملة",
      titleLine1: "نبني",
      titleLine2: "المستقبل الرقمي",
      titleHighlight: "إيموت",
      description:
        "أنا أحمد عمرو، مهندس برمجيات ومؤسس منصة إيموت — أصمم أنظمة سحابية عالية الأداء وقواعد بيانات ذكية وتجارب ويب غامرة مهندسة للتوسع.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "تصفح المشاريع",
      stat1Label: "مشروع منجز",
      stat2Label: "رضا العملاء",
      stat3Label: "سنوات خبرة",
    },
    about: {
      badge: "من نحن",
      title: "مهندس. معمار. مؤسس.",
      subtitle: "العقل المبدع وراء إيموت",
      bio1: "أحمد عمرو مهندس برمجيات متخصص في البنى السحابية وأنظمة قواعد البيانات عالية الأداء. كمؤسس لمنصة إيموت، يحول المتطلبات التجارية المعقدة إلى حلول رقمية أنيقة قابلة للتوسع.",
      bio2: "بخبرة عميقة في الأنظمة الموزعة ومسارات البيانات اللحظية والهندسة الأمامية الحديثة، يقدم أحمد منصات سريعة بقدر ما هي جميلة — كل واجهة مضبوطة لاستجابة فورية وكل قاعدة بيانات محسنة لاستعلامات لحظية.",
      bio3: "من لوحات تحكم المؤسسات إلى تطبيقات خدمة العملاء، تقف إيموت للدقة والأداء والإتقان في كل تفصيل.",
      card1Title: "البنية السحابية",
      card1Desc: "أنظمة موزعة مهندسة للتوسع الأفقي وانتشار بدون توقف.",
      card2Title: "هندسة قواعد البيانات",
      card2Desc: "تصميم المخططات وتحسين الاستعلامات وتأمين البيانات الحرجة.",
      card3Title: "أداء الواجهة الأمامية",
      card3Desc:
        "أوقات تحميل أقل من ثانية وتقييم لighthouse 100/100 وتجربة سلسة.",
      card4Title: "تكامل الأنظمة",
      card4Desc: "واجهات برمجية وخطوط أتمتة تربط كل شيء معاً بسلاسة.",
      experience: "سنوات الخبرة",
      projects: "مشاريع منجزة",
      clients: "عملاء سعداء",
      uptime: "وقت تشغيل النظام",
    },
    services: {
      badge: "خدماتنا",
      title: "الخدمات التقنية",
      subtitle: "هندسة كاملة من البكسل إلى خط الإنتاج",
      supportBadge: "دعم 24/7",
      card1Title: "تصميم الواجهات الرقمية",
      card1Desc:
        "تصميم واجهات مستخدم حديثة وغامرة بأعلى معايير القابلية للاستخدام والوصول والتأثير البصري.",
      card2Title: "هندسة قواعد البيانات",
      card2Desc:
        "تصميم وهندسة وتأمين قواعد بيانات العملاء والمنتجات بأداء استعلام لحظي وسلامة بيانات مطلقة.",
      card3Title: "الواجهات فائقة السرعة",
      card3Desc:
        "بناء صفحات أمامية فائقة الاستجابة والسرعة تحمل فوراً وتتكيف بإتقان مع كل شاشة.",
      card4Title: "لوحات التحكم الذكية",
      card4Desc:
        "لوحات إدارة شركات ولوحات تحكم ذكية تيسر العمليات وتمكن اتخاذ القرار.",
    },
    portfolio: {
      badge: "مشاريعنا",
      title: "أعمال مختارة",
      subtitle: "مشاريع بُنيت بهندسة إيموت",
      viewProject: "عرض المشروع",
      project1Title: "تطبيق توصيل الطعام",
      project1Category: "منصة توصيل بقالة",
      project2Title: "موقع عقارات",
      project2Category: "عروض وعقارات",
      project3Title: "حجز الفنادق",
      project3Category: "نظام حجوزات فنادق",
      project4Title: "حجز الأطباء",
      project4Category: "منصة حجز مواعيد",
    },
    pricing: {
      badge: "باقاتنا",
      title: "الباقات والأسعار",
      subtitle: "أسعار شفافة لكل حجم",
      popular: "الأكثر طلباً",
      perProject: "/ مشروع",
      package1Name: "الباقة العادية",
      package1Price: "$199",
      package1Features: [
        "موقع إلكتروني لعرض الهوية",
        "استضافة مجانية",
        "دومين مجاني غير مخصص",
        "تصميم متجاوب",
        "إعداد SEO أساسي",
      ],
      package2Name: "الباقة المميزة",
      package2Price: "$299",
      package2Features: [
        "موقع متكامل لقواعد بيانات العملاء والمنتجات",
        "صفحة للتحكم في البيانات ومتابعتها",
        "5 جيجا استضافة هدية",
        "دومين مجاني غير مخصص",
        "تحسين SEO متقدم",
        "تكامل التحليلات",
      ],
      package3Name: "باقة الالترا",
      package3Price: "$349",
      package3Features: [
        "موقع متكامل لقواعد بيانات العملاء والمنتجات",
        "صفحة للتحكم في البيانات ومتابعتها",
        "10 جيجا استضافة هدية",
        "دومين مخصص احترافي",
        "شهر متابعة ودعم فني مباشر من أحمد عمرو",
        "دعم فني أولوية 24/7",
        "تحسين الأداء",
      ],
      addonsTitle: "ملحق مساحات قواعد البيانات",
      addon1: "500 ميجا مجاني — تمنح مع كل مشروع",
      addon2: "5 جيجا مساحة إضافية لقواعد البيانات",
      addon2Price: "$20",
      addon3: "15 جيجا مساحة إضافية لقواعد البيانات",
      addon3Price: "$50",
      cta: "اختر الباقة",
    },
    testimonials: {
      badge: "آراء العملاء",
      title: "تقييمات العملاء",
      subtitle: "ما يقوله العملاء عن العمل مع إيموت",
      items: [
        {
          name: "أحمد حسن",
          role: "صاحب موقع تطبيق توصيل الطعام",
          text: "تطبيق توصيل الأكل سهّل عليا استقبال الطلبات جداً. الزباين بقت تتصفح المنيو بسرعة وأنا بقدر أتابع كل الأوردرات من مكان واحد.",
          rating: 5,
        },
        {
          name: "محمد علي",
          role: "صاحب موقع العقارات",
          text: "كنت محتاج موقع واضح أعرض فيه الشقق والعروض، وده اللي حصل بالظبط. الإعلانات بقت مترتبة والعميل بيوصل للعقار المناسب أسرع بكتير.",
          rating: 5,
        },
        {
          name: "كريم سمير",
          role: "صاحب موقع حجز الفنادق",
          text: "موقع حجز الفنادق وفر علينا كلام كتير رايح جاي. النزيل بيشوف التفاصيل ويبعت حجزه بسهولة، وفريقنا بيتابع كل حجز من مكان واحد.",
          rating: 5,
        },
        {
          name: "عمر خالد",
          role: "صاحب موقع حجز الأطباء",
          text: "موقع حجز الأطباء شكله احترافي وفي نفس الوقت سهل للمرضى. من أول يوم بدأنا نستقبل طلبات مواعيد مرتبة وواضحة.",
          rating: 5,
        },
      ],
    },
    contact: {
      badge: "تواصل",
      title: "تواصل معنا",
      subtitle: "ابدأ مشروعك مع إيموت اليوم",
      name: "الاسم",
      namePlaceholder: "محمد أحمد",
      email: "البريد الإلكتروني",
      emailPlaceholder: "mohamed@example.com",
      message: "تفاصيل المشروع",
      messagePlaceholder: "أخبرني عن مشروعك...",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال الرسالة بنجاح! سأعود إليك قريباً.",
      error: "حدث خطأ ما. حاول مرة أخرى أو تواصل معي عبر واتساب.",
      whatsapp: "واتساب",
      phone: "الهاتف",
      emailLabel: "البريد الإلكتروني",
    },
    footer: {
      tagline: "تطوير مواقع وأنظمة سحابية متكاملة مهندسة للمستقبل.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      phone: "الهاتف والواتساب",
      whatsapp: "محادثة واتساب",
      email: "البريد الإلكتروني",
      github: "جيت هاب",
      linkedin: "لينكد إن",
    },
  },
};
