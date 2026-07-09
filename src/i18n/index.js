/**
 * i18n barrel export.
 * Maps language codes to their translation modules.
 */
import es from './es';
import en from './en';
import fr from './fr';
import pt from './pt';

export const translations = { es, en, fr, pt };

export const SUPPORTED_LANGUAGES = [
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
];

export const DEFAULT_LANGUAGE = 'es';
