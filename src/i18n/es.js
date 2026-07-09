/**
 * Spanish translations (default).
 */
const es = {
  // Navbar
  nav: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    clientes: 'Clientes',
    aliados: 'Aliados',
    nosotros: 'Nosotros',
    noticias: 'Noticias',
    contacto: 'Contacto',
    cta: 'Contáctanos',
  },

  // Hero
  hero: {
    badge: 'Soluciones Digitales',
    titleLine1: 'Transformamos',
    titleHighlight1: 'ideas',
    titleLine2: 'en soluciones',
    titleHighlight2: 'digitales',
    description:
      'Somos una empresa de tecnología especializada en desarrollo de software, transformación digital y soluciones empresariales innovadoras.',
    ctaPrimary: 'Empezar un proyecto',
    ctaSecondary: 'Nuestros servicios',
  },

  // Stats
  stats: {
    experience: 'Años de experiencia',
    projects: 'Proyectos completados',
    clients: 'Clientes satisfechos',
    allies: 'Aliados estratégicos',
  },

  // Services
  services: {
    badge: 'Lo que hacemos',
    title: 'Nuestros Servicios',
    subtitle:
      'Ofrecemos soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa',
    cta: 'Conocer más',
    items: {
      'consultoria-transformacion': {
        title: 'Consultoría y Transformación Digital Empresarial',
        description:
          'Acompañamos a las organizaciones en su proceso de transformación con estrategias innovadoras y tecnología.',
      },
      'marketing-digital': {
        title: 'Marketing Digital',
        description:
          'Potenciamos la presencia de tu marca en línea para conectar con tu audiencia y alcanzar tus objetivos comerciales.',
      },
      'desarrollo-software': {
        title: 'Desarrollo de Software',
        description:
          'Creamos soluciones de software a medida que impulsan la productividad y optimizan los procesos de tu empresa.',
      },
      'formulacion-proyectos': {
        title: 'Formulación y Evaluación de Proyectos',
        description:
          'Estructuramos, planificamos y analizamos la viabilidad técnica y financiera de tus proyectos tecnológicos.',
      },
    },
  },

  // Clients
  clients: {
    badge: 'Confían en nosotros',
    title: 'Nuestros Clientes',
    subtitle:
      'Empresas e instituciones que han confiado en Buxtar para impulsar sus proyectos tecnológicos',
  },

  // Allies
  allies: {
    badge: 'Ecosistema de innovación',
    title: 'Nuestros Aliados',
    subtitle:
      'Trabajamos junto a instituciones líderes del ecosistema de emprendimiento e innovación en Colombia',
  },

  // About
  about: {
    badge: 'Quiénes somos',
    title: 'Sobre Nosotros',
    subtitle:
      'Somos un equipo apasionado por la tecnología con más de una década de experiencia transformando empresas',
    mission: {
      title: 'Nuestra Misión',
      description:
        'Impulsar la transformación digital de las empresas colombianas a través de soluciones tecnológicas innovadoras, accesibles y de alta calidad que generen valor real y sostenible.',
    },
    vision: {
      title: 'Nuestra Visión',
      description:
        'Ser la empresa de tecnología referente en Colombia y Latinoamérica, reconocida por la excelencia en nuestras soluciones y por el impacto positivo que generamos en cada organización.',
    },
    values: {
      innovation: {
        title: 'Innovación',
        description:
          'Buscamos constantemente nuevas formas de resolver problemas con tecnología de vanguardia.',
      },
      trust: {
        title: 'Confianza',
        description:
          'Construimos relaciones sólidas basadas en transparencia, cumplimiento y resultados.',
      },
      commitment: {
        title: 'Compromiso',
        description:
          'Nos comprometemos con el éxito de nuestros clientes como si fuera nuestro propio éxito.',
      },
      excellence: {
        title: 'Excelencia',
        description:
          'Buscamos la máxima calidad en cada línea de código y cada solución que entregamos.',
      },
    },
  },

  // News
  news: {
    badge: 'Últimas novedades',
    title: 'Noticias',
    subtitle:
      'Mantente informado sobre nuestros logros, eventos y novedades del mundo tecnológico',
    readMore: 'Leer más',
    items: {
      'noticia-1': {
        title: 'Buxtar impulsa la transformación digital en el Cauca',
        excerpt:
          'Nuestra empresa lidera iniciativas de innovación tecnológica en la región, trabajando de la mano con entidades gubernamentales y privadas.',
        category: 'Innovación',
      },
      'noticia-2': {
        title: 'Nuevas alianzas estratégicas con el ecosistema de emprendimiento',
        excerpt:
          'Buxtar fortalece su red de aliados para ofrecer mejores soluciones tecnológicas a empresas en crecimiento.',
        category: 'Alianzas',
      },
      'noticia-3': {
        title: 'Reconocimiento de Minciencias por innovación tecnológica',
        excerpt:
          'Nuestro compromiso con la investigación y el desarrollo nos ha llevado a ser reconocidos como empresa innovadora.',
        category: 'Reconocimientos',
      },
    },
  },

  // Contact
  contact: {
    badge: 'Hablemos',
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente? Cuéntanos cómo podemos ayudarte',
    infoTitle: 'Estamos para ayudarte',
    infoDescription:
      'Completa el formulario y nos pondremos en contacto contigo lo antes posible. También puedes escribirnos directamente.',
    labels: {
      email: 'Correo electrónico',
      phone: 'Teléfono',
      location: 'Ubicación',
    },
    form: {
      name: 'Nombre completo',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu@email.com',
      phone: 'Teléfono',
      phonePlaceholder: '+57 300 000 0000',
      subject: 'Asunto',
      subjectPlaceholder: '¿En qué podemos ayudarte?',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      submit: 'Enviar mensaje',
      rateLimited: 'Demasiados intentos. Intenta de nuevo en',
      success: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
    },
    validation: {
      nameRequired: 'El nombre es obligatorio',
      nameTooLong: 'El nombre es demasiado largo',
      nameInvalid: 'El nombre contiene caracteres no válidos',
      emailRequired: 'El correo electrónico es obligatorio',
      emailTooLong: 'El correo electrónico es demasiado largo',
      emailInvalid: 'Ingresa un correo electrónico válido',
      phoneTooLong: 'El teléfono es demasiado largo',
      phoneInvalid: 'Ingresa un número de teléfono válido',
      subjectRequired: 'El asunto es obligatorio',
      messageRequired: 'El mensaje es obligatorio',
      messageTooShort: 'El mensaje debe tener al menos {min} caracteres',
      messageTooLong: 'El mensaje no puede superar los {max} caracteres',
      injectionDetected: 'La entrada contiene contenido no permitido',
      fieldRequired: 'Este campo es obligatorio',
    },
  },

  // Footer
  footer: {
    navigation: 'Navegación',
    services: 'Servicios',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  },

  // Language names
  languages: {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    pt: 'Português',
  },
};

export default es;
