/**
 * French translations.
 */
const fr = {
  nav: {
    inicio: 'Accueil',
    servicios: 'Services',
    clientes: 'Clients',
    aliados: 'Partenaires',
    nosotros: 'À propos',
    noticias: 'Actualités',
    contacto: 'Contact',
    cta: 'Contactez-nous',
  },

  hero: {
    badge: 'Solutions Numériques',
    titleLine1: 'Nous transformons',
    titleHighlight1: 'les idées',
    titleLine2: 'en solutions',
    titleHighlight2: 'numériques',
    description:
      'Nous sommes une entreprise technologique spécialisée dans le développement de logiciels, la transformation numérique et les solutions d\'entreprise innovantes.',
    ctaPrimary: 'Démarrer un projet',
    ctaSecondary: 'Nos services',
  },

  stats: {
    experience: 'Années d\'expérience',
    projects: 'Projets réalisés',
    clients: 'Clients satisfaits',
    allies: 'Partenaires stratégiques',
  },

  services: {
    badge: 'Ce que nous faisons',
    title: 'Nos Services',
    subtitle:
      'Nous offrons des solutions technologiques complètes pour stimuler la croissance de votre entreprise',
    cta: 'En savoir plus',
    items: {
      'consultoria-transformacion': {
        title: 'Conseil d\'Entreprise et Transformation Numérique',
        description:
          'Nous accompagnons les organisations dans leur processus de transformation avec des stratégies innovantes et technologiques.',
      },
      'marketing-digital': {
        title: 'Marketing Numérique',
        description:
          'Nous boostons la présence en ligne de votre marque pour vous connecter à votre public et atteindre vos objectifs commerciaux.',
      },
      'desarrollo-software': {
        title: 'Développement de Logiciels',
        description:
          'Nous créons des solutions logicielles sur mesure qui augmentent la productivité et optimisent les processus de votre entreprise.',
      },
      'formulacion-proyectos': {
        title: 'Formulation et Évaluation de Projets',
        description:
          'Nous structurons, planifions et analysons la viabilité technique et financière de vos projets technologiques.',
      },
    },
  },

  clients: {
    badge: 'Ils nous font confiance',
    title: 'Nos Clients',
    subtitle:
      'Entreprises et institutions qui ont fait confiance à Buxtar pour impulser leurs projets technologiques',
  },

  allies: {
    badge: 'Écosystème d\'innovation',
    title: 'Nos Partenaires',
    subtitle:
      'Nous travaillons aux côtés d\'institutions leaders de l\'écosystème d\'entrepreneuriat et d\'innovation en Colombie',
  },

  about: {
    badge: 'Qui sommes-nous',
    title: 'À Propos',
    subtitle:
      'Nous sommes une équipe passionnée par la technologie avec plus d\'une décennie d\'expérience dans la transformation des entreprises',
    mission: {
      title: 'Notre Mission',
      description:
        'Impulser la transformation numérique des entreprises colombiennes grâce à des solutions technologiques innovantes, accessibles et de haute qualité qui génèrent une valeur réelle et durable.',
    },
    vision: {
      title: 'Notre Vision',
      description:
        'Être l\'entreprise technologique de référence en Colombie et en Amérique latine, reconnue pour l\'excellence de nos solutions et l\'impact positif que nous générons dans chaque organisation.',
    },
    values: {
      innovation: {
        title: 'Innovation',
        description:
          'Nous cherchons constamment de nouvelles façons de résoudre les problèmes avec une technologie de pointe.',
      },
      trust: {
        title: 'Confiance',
        description:
          'Nous construisons des relations solides basées sur la transparence, la conformité et les résultats.',
      },
      commitment: {
        title: 'Engagement',
        description:
          'Nous nous engageons pour le succès de nos clients comme s\'il s\'agissait du nôtre.',
      },
      excellence: {
        title: 'Excellence',
        description:
          'Nous recherchons la plus haute qualité dans chaque ligne de code et chaque solution que nous livrons.',
      },
    },
  },

  news: {
    badge: 'Dernières nouvelles',
    title: 'Actualités',
    subtitle:
      'Restez informé de nos réalisations, événements et nouvelles du monde technologique',
    readMore: 'Lire la suite',
    items: {
      'noticia-1': {
        title: 'Buxtar stimule la transformation numérique dans le Cauca',
        excerpt:
          'Notre entreprise dirige des initiatives d\'innovation technologique dans la région, en travaillant main dans la main avec des entités gouvernementales et privées.',
        category: 'Innovation',
      },
      'noticia-2': {
        title: 'Nouvelles alliances stratégiques avec l\'écosystème d\'entrepreneuriat',
        excerpt:
          'Buxtar renforce son réseau de partenaires pour offrir de meilleures solutions technologiques aux entreprises en croissance.',
        category: 'Alliances',
      },
      'noticia-3': {
        title: 'Reconnaissance de Minciencias pour l\'innovation technologique',
        excerpt:
          'Notre engagement envers la recherche et le développement nous a conduits à être reconnus comme entreprise innovante.',
        category: 'Distinctions',
      },
    },
  },

  contact: {
    badge: 'Parlons',
    title: 'Contact',
    subtitle: 'Vous avez un projet en tête ? Dites-nous comment nous pouvons vous aider',
    infoTitle: 'Nous sommes là pour vous',
    infoDescription:
      'Remplissez le formulaire et nous vous contacterons dans les plus brefs délais. Vous pouvez également nous écrire directement.',
    labels: {
      email: 'E-mail',
      phone: 'Téléphone',
      location: 'Emplacement',
    },
    form: {
      name: 'Nom complet',
      namePlaceholder: 'Votre nom',
      email: 'Adresse e-mail',
      emailPlaceholder: 'vous@email.com',
      phone: 'Téléphone',
      phonePlaceholder: '+33 1 23 45 67 89',
      subject: 'Sujet',
      subjectPlaceholder: 'Comment pouvons-nous vous aider ?',
      message: 'Message',
      messagePlaceholder: 'Parlez-nous de votre projet...',
      submit: 'Envoyer le message',
      rateLimited: 'Trop de tentatives. Réessayez dans',
      success: 'Message envoyé avec succès ! Nous vous contacterons bientôt.',
    },
    validation: {
      nameRequired: 'Le nom est obligatoire',
      nameTooLong: 'Le nom est trop long',
      nameInvalid: 'Le nom contient des caractères non valides',
      emailRequired: 'L\'e-mail est obligatoire',
      emailTooLong: 'L\'e-mail est trop long',
      emailInvalid: 'Entrez une adresse e-mail valide',
      phoneTooLong: 'Le numéro de téléphone est trop long',
      phoneInvalid: 'Entrez un numéro de téléphone valide',
      subjectRequired: 'Le sujet est obligatoire',
      messageRequired: 'Le message est obligatoire',
      messageTooShort: 'Le message doit contenir au moins {min} caractères',
      messageTooLong: 'Le message ne peut pas dépasser {max} caractères',
      injectionDetected: 'L\'entrée contient du contenu non autorisé',
      fieldRequired: 'Ce champ est obligatoire',
    },
  },

  footer: {
    navigation: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions Générales',
  },

  languages: {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    pt: 'Português',
  },
};

export default fr;
