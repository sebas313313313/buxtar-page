/**
 * Application-wide constants.
 */

/** Company information */
export const COMPANY = {
  name: 'Buxtar',
  fullName: 'Buxtar Digital Solutions',
  tagline: 'Soluciones digitales que transforman tu negocio',
  description:
    'Somos una empresa de tecnología especializada en desarrollo de software, transformación digital y soluciones empresariales innovadoras.',
  logo: '/logos/logo-buxtar-200.png',
  logoWhite: '/logos/logo-buxtar-200blank.png',
  email: 'contacto@buxtar.com',
  phone: '+57 300 000 0000',
  address: 'Colombia',
  website: 'https://www.buxtar.com',
};

/** Navigation links */
export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'servicios', label: 'Servicios', href: '/servicios' },
  { id: 'clientes', label: 'Clientes', href: '/clientes' },
  { id: 'aliados', label: 'Aliados', href: '/aliados' },
  { id: 'nosotros', label: 'Nosotros', href: '/nosotros' },
  { id: 'noticias', label: 'Noticias', href: '/noticias' },
  { id: 'contacto', label: 'Contacto', href: '/contacto' },
];

/** Social media links */
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
];

/** Statistics */
export const STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos completados' },
  { value: '50+', label: 'Clientes satisfechos' },
  { value: '15+', label: 'Aliados estratégicos' },
];

/** Rate limit configuration */
export const RATE_LIMIT = {
  maxRequests: parseInt(import.meta.env.VITE_RATE_LIMIT_MAX_REQUESTS) || 3,
  windowMs: parseInt(import.meta.env.VITE_RATE_LIMIT_WINDOW_MS) || 60000,
};
