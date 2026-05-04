export type Lang = 'ar' | 'fr';

export interface Metric {
  label: string;
  before: number;
  after: number;
  suffix: string;
  direction: 'up' | 'down';
}

export interface Translations {
  nav: {
    services: string;
    results: string;
    testimonials: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    videoLabel: string;
  };
  logos: { title: string };
  testimonials: {
    title: string;
    subtitle: string;
    playLabel: string;
    clients: { name: string; role: string; company: string; niche: string; quote: string }[];
  };
  results: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
    metrics: Metric[];
    cases: { sector: string; before: string; after: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  };
  certifications: {
    title: string;
    subtitle: string;
    items: { name: string; badge: string; desc: string }[];
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    location: string;
    city: string;
    stats: { label: string; value: string }[];
  };
  form: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    sector: string;
    sectorPlaceholder: string;
    sectorOptions: string[];
    budget: string;
    budgetPlaceholder: string;
    budgetOptions: string[];
    cta: string;
    success: string;
    successSub: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    address: string;
    whatsapp: string;
  };
}

export const translations: Record<Lang, Translations> = {
  ar: {
    nav: {
      services: 'الخدمات',
      results: 'النتائج',
      testimonials: 'آراء العملاء',
      about: 'من نحن',
      contact: 'تواصل',
      cta: 'طلب تحليل',
    },
    hero: {
      badge: 'وكالة أداء رقمي متخصصة • أكادير، المغرب',
      headline: 'مشكلتك ماشي فالإعلانات… المشكل فالإستراتيجية',
      subheadline:
        'كنحللو الأرقام، كنكتاشفو فين كاين الخلل، وكنخليو الحملات ديالك تولي مربحة',
      cta: 'طلب تحليل مجاني',
      ctaSecondary: 'شوف النتائج',
      videoLabel: 'شاهد كيف نعمل',
    },
    logos: { title: 'عملاء وثقوا فينا' },
    testimonials: {
      title: 'ما كنقولوش… العملاء هما اللي يقولو',
      subtitle: 'آراء حقيقية من عملاء حقيقيين',
      playLabel: 'استمع للتسجيل',
      clients: [
        {
          name: 'يوسف المنصوري',
          role: 'CEO & Founder',
          company: 'E-Shop Maroc',
          niche: 'تجارة إلكترونية',
          quote:
            'قبل Shark Digital كنت كنخسر فالإعلانات كل يوم. دابا ROAS ديالي واصل لـ 4.7x وكل شيء مضمون ومحسوب.',
        },
        {
          name: 'سارة بنعلي',
          role: 'Founder',
          company: 'Luxe Immobilier',
          niche: 'عقارات',
          quote:
            'الاستراتيجية اللي بنيوها ليا خفضت CPA ديالي بـ 62%. هاد النتيجة ما توقعتهاش في هاد الوقت القصير.',
        },
        {
          name: 'كريم الإدريسي',
          role: 'Manager',
          company: 'FitLife Academy',
          niche: 'تدريب ولياقة',
          quote:
            'فأقل من 3 شهور وصلت لـ 300 عميل جديد بميزانية معقولة. هادا مو فريق — هادا شركاء في النجاح.',
        },
      ],
    },
    results: {
      title: 'الأرقام ما كتكدبش',
      subtitle: 'نتائج حقيقية من حملات حقيقية مع عملاء حقيقيين',
      before: 'قبل',
      after: 'بعد',
      metrics: [
        { label: 'ROAS متوسط', before: 1.8, after: 4.7, suffix: 'x', direction: 'up' },
        { label: 'CPA', before: 280, after: 105, suffix: 'MAD', direction: 'down' },
        { label: 'Revenue شهري', before: 45, after: 180, suffix: 'k+', direction: 'up' },
      ],
      cases: [
        {
          sector: 'تجارة إلكترونية',
          before: 'ROAS 1.2x — خسارة يومية وعدم استقرار',
          after: 'ROAS 5.1x — ربح صافي ونمو مستمر',
        },
        {
          sector: 'عقارات',
          before: 'CPA 450 MAD — لا نتائج ملموسة',
          after: 'CPA 98 MAD — 12 lead مؤهل يوميًا',
        },
      ],
    },
    services: {
      title: 'ما كنبيعوش إعلانات',
      subtitle: 'كنبيعو نتائج قابلة للقياس',
      items: [
        {
          icon: 'fb',
          title: 'Facebook & Instagram Ads',
          desc: 'حملات مُستهدفة بدقة — الجمهور الصح، التوقيت الصح، Creatives تحول المشاهد لعميل',
        },
        {
          icon: 'gg',
          title: 'Google Ads',
          desc: 'Search، Display، وShopping — كل حملة مبنية على بيانات حقيقية لا خمينة',
        },
        {
          icon: 'tt',
          title: 'TikTok Ads',
          desc: 'منصة النمو الأسرع في 2025 — للبراندات اللي باغيا تكسب الجيل الجديد وتحقق مبيعات حقيقية',
        },
        {
          icon: 'cr',
          title: 'Creatives & Copywriting',
          desc: 'ما كفاش تعلن — خاصك Creative يوقف الـ Scroll ويحول المشاهد لعميل مدفوع',
        },
      ],
    },
    certifications: {
      title: 'شركاء معتمدون',
      subtitle: 'مو بس شهادات — خبرة حقيقية ونتائج مضمونة',
      items: [
        {
          name: 'Meta Business Partner',
          badge: 'META',
          desc: 'شريك رسمي معتمد من Meta لـ Facebook وInstagram Ads',
        },
        {
          name: 'Google Partner',
          badge: 'GOOGLE',
          desc: 'شريك معتمد من Google Ads بمستوى Premier',
        },
        {
          name: 'TikTok Ads Partner',
          badge: 'TIKTOK',
          desc: 'شريك رسمي لـ TikTok for Business في المغرب',
        },
      ],
    },
    about: {
      title: 'ما كنطلقوش حملات… كنصلحو فين كايوقف النمو ديالك',
      paragraph1:
        'Shark Digital ماشي وكالة عادية. نحن فريق متخصص في تحليل الأداء وتطوير الاستراتيجيات اللي تخلي كل درهم تنفقو في الإعلانات يرجع بضعف.',
      paragraph2:
        'كنبداو بتشخيص الوضع الحالي ديالك — الأرقام، الـ Funnel، الـ Creatives، والـ Targeting. كنكتاشفو فين كاين الخلل، وعندها كنبنيو الاستراتيجية الصح.',
      location: 'Tilila',
      city: 'أكادير، المغرب',
      stats: [
        { label: 'سنوات خبرة', value: '7+' },
        { label: 'عميل راضي', value: '120+' },
        { label: 'حملة ناجحة', value: '500+' },
        { label: 'متوسط ROAS', value: '4.2x' },
      ],
    },
    form: {
      title: 'طلب مراجعة الحساب',
      subtitle: 'خاصو يكون عندك ميزانية إعلانية نشيطة',
      name: 'الاسم الكامل',
      namePlaceholder: 'محمد الأمين…',
      phone: 'رقم الهاتف',
      phonePlaceholder: '+212 6…',
      company: 'اسم الشركة أو المشروع',
      companyPlaceholder: 'شركتك…',
      sector: 'المجال',
      sectorPlaceholder: 'اختر المجال',
      sectorOptions: [
        'تجارة إلكترونية',
        'عقارات',
        'تدريب وتعليم',
        'صحة وجمال',
        'مطاعم وفنادق',
        'خدمات',
        'أخرى',
      ],
      budget: 'الميزانية الإعلانية الشهرية',
      budgetPlaceholder: 'اختر الميزانية',
      budgetOptions: [
        'أقل من 5,000 MAD',
        '5,000 – 15,000 MAD',
        '15,000 – 30,000 MAD',
        '30,000 – 50,000 MAD',
        '+50,000 MAD',
      ],
      cta: 'طلب مراجعة الحساب ←',
      success: 'تم إرسال طلبك بنجاح!',
      successSub: 'سيتواصل معك فريقنا خلال 24 ساعة',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'ما تتردداش — كنجاوبو على جميع الأسئلة',
      phone: '+212 6XX XXX XXX',
      address: 'تيليلا، أكادير، المغرب',
      whatsapp: 'واتساب مباشر',
    },
  },

  fr: {
    nav: {
      services: 'Services',
      results: 'Résultats',
      testimonials: 'Témoignages',
      about: 'À propos',
      contact: 'Contact',
      cta: 'Demander un audit',
    },
    hero: {
      badge: 'Agence Performance Digitale • Agadir, Maroc',
      headline: "Votre problème n'est pas vos publicités… c'est votre stratégie",
      subheadline:
        'Nous analysons les données, identifions les blocages, et transformons vos campagnes en machines à profits',
      cta: 'Demander une analyse gratuite',
      ctaSecondary: 'Voir les résultats',
      videoLabel: 'Voir comment nous travaillons',
    },
    logos: { title: 'Ils nous font confiance' },
    testimonials: {
      title: 'Pas des promesses — des résultats concrets',
      subtitle: 'Témoignages authentiques de clients réels',
      playLabel: 'Écouter le témoignage',
      clients: [
        {
          name: 'Youssef Mansouri',
          role: 'CEO & Founder',
          company: 'E-Shop Maroc',
          niche: 'E-commerce',
          quote:
            "Avant Shark Digital, je perdais de l'argent sur mes pubs chaque jour. Maintenant mon ROAS est à 4.7x et c'est stable.",
        },
        {
          name: 'Sara Ben Ali',
          role: 'Founder',
          company: 'Luxe Immobilier',
          niche: 'Immobilier',
          quote:
            "La stratégie qu'ils ont mise en place a réduit mon CPA de 62%. Des résultats que je n'espérais pas en si peu de temps.",
        },
        {
          name: 'Karim Idrissi',
          role: 'Manager',
          company: 'FitLife Academy',
          niche: 'Coaching Fitness',
          quote:
            "En moins de 3 mois, j'ai atteint 300 nouveaux clients avec un budget raisonnable. Ce n'est pas une agence, ce sont des partenaires.",
        },
      ],
    },
    results: {
      title: 'Les chiffres ne mentent pas',
      subtitle: 'Résultats réels de campagnes réelles avec de vrais clients',
      before: 'Avant',
      after: 'Après',
      metrics: [
        { label: 'ROAS Moyen', before: 1.8, after: 4.7, suffix: 'x', direction: 'up' },
        { label: 'CPA', before: 280, after: 105, suffix: 'MAD', direction: 'down' },
        { label: 'Revenue Mensuel', before: 45, after: 180, suffix: 'k+', direction: 'up' },
      ],
      cases: [
        {
          sector: 'E-commerce',
          before: 'ROAS 1.2x — Perte quotidienne et instabilité',
          after: 'ROAS 5.1x — Profit net et croissance continue',
        },
        {
          sector: 'Immobilier',
          before: 'CPA 450 MAD — Zéro résultat concret',
          after: 'CPA 98 MAD — 12 leads qualifiés par jour',
        },
      ],
    },
    services: {
      title: 'Nous ne vendons pas de pubs',
      subtitle: 'Nous vendons des résultats mesurables',
      items: [
        {
          icon: 'fb',
          title: 'Facebook & Instagram Ads',
          desc: "Campagnes ultra-ciblées — la bonne audience, le bon moment, des creatives qui convertissent vraiment",
        },
        {
          icon: 'gg',
          title: 'Google Ads',
          desc: 'Search, Display, Shopping — chaque campagne basée sur de vraies données, pas des suppositions',
        },
        {
          icon: 'tt',
          title: 'TikTok Ads',
          desc: 'La plateforme de croissance la plus rapide en 2025 — pour les marques qui veulent conquérir la Gen Z',
        },
        {
          icon: 'cr',
          title: 'Creatives & Copywriting',
          desc: "Diffuser des pubs ne suffit pas — il vous faut un creative qui arrête le scroll et convertit",
        },
      ],
    },
    certifications: {
      title: 'Partenaires Certifiés',
      subtitle: 'Pas juste des certifications — une vraie expertise terrain',
      items: [
        {
          name: 'Meta Business Partner',
          badge: 'META',
          desc: 'Partenaire officiel Meta pour Facebook et Instagram Ads',
        },
        {
          name: 'Google Partner',
          badge: 'GOOGLE',
          desc: 'Partenaire certifié Google Ads avec badge Premier',
        },
        {
          name: 'TikTok Ads Partner',
          badge: 'TIKTOK',
          desc: 'Partenaire officiel TikTok for Business au Maroc',
        },
      ],
    },
    about: {
      title: "Nous ne lançons pas des campagnes… nous corrigeons ce qui bloque votre croissance",
      paragraph1:
        "Shark Digital n'est pas une agence ordinaire. Nous sommes une équipe spécialisée dans l'analyse de performance et le développement de stratégies qui font que chaque dirham dépensé en pub vous rapporte le double.",
      paragraph2:
        "Nous commençons par diagnostiquer votre situation — les chiffres, le funnel, les creatives, le ciblage. Nous identifions les blocages, puis nous construisons la bonne stratégie.",
      location: 'Tilila',
      city: 'Agadir, Maroc',
      stats: [
        { label: "Ans d'expérience", value: '7+' },
        { label: 'Clients satisfaits', value: '120+' },
        { label: 'Campagnes réussies', value: '500+' },
        { label: 'ROAS Moyen', value: '4.2x' },
      ],
    },
    form: {
      title: 'Demander un audit de compte',
      subtitle: 'Réservé aux entreprises avec un budget publicitaire actif',
      name: 'Nom complet',
      namePlaceholder: 'Mohammed Amine…',
      phone: 'Numéro de téléphone',
      phonePlaceholder: '+212 6…',
      company: "Nom de l'entreprise",
      companyPlaceholder: 'Votre entreprise…',
      sector: "Secteur d'activité",
      sectorPlaceholder: 'Choisir le secteur',
      sectorOptions: [
        'E-commerce',
        'Immobilier',
        'Formation & Éducation',
        'Santé & Beauté',
        'Restauration',
        'Services',
        'Autre',
      ],
      budget: 'Budget mensuel publicitaire',
      budgetPlaceholder: 'Choisir le budget',
      budgetOptions: [
        'Moins de 5 000 MAD',
        '5 000 – 15 000 MAD',
        '15 000 – 30 000 MAD',
        '30 000 – 50 000 MAD',
        '+50 000 MAD',
      ],
      cta: 'Demander un audit de compte →',
      success: 'Votre demande a été envoyée !',
      successSub: 'Notre équipe vous contactera dans les 24 heures',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: "N'hésitez pas — nous répondons à toutes vos questions",
      phone: '+212 6XX XXX XXX',
      address: 'Tilila, Agadir, Maroc',
      whatsapp: 'WhatsApp Direct',
    },
  },
};
