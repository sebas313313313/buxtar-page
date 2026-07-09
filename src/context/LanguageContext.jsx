/**
 * Language Context.
 * Provides global language state with localStorage persistence
 * and cross-tab synchronization via the 'storage' event.
 */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n';

const STORAGE_KEY = 'buxtar-lang';

const LanguageContext = createContext(null);

/**
 * Get a nested value from an object using a dot-separated path.
 * e.g. getNestedValue(obj, 'hero.title') => obj.hero.title
 */
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((acc, part) => {
    if (acc === undefined || acc === null) return undefined;
    return acc[part];
  }, obj);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) {
        return stored;
      }
    } catch {
      // localStorage not available
    }
    return DEFAULT_LANGUAGE;
  });

  /**
   * Change language and persist to localStorage.
   */
  const setLanguage = useCallback((lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage not available
    }
    // Update the html lang attribute
    document.documentElement.lang = lang;
  }, []);

  /**
   * Translate a key path. Falls back to the Spanish (default) translation.
   * Supports interpolation: t('contact.validation.messageTooShort', { min: 10 })
   */
  const t = useCallback(
    (keyPath, interpolations = {}) => {
      let value = getNestedValue(translations[language], keyPath);

      // Fallback to default language
      if (value === undefined) {
        value = getNestedValue(translations[DEFAULT_LANGUAGE], keyPath);
      }

      // If still not found, return the key path
      if (value === undefined) return keyPath;

      // Interpolate {key} placeholders
      if (typeof value === 'string' && Object.keys(interpolations).length > 0) {
        return Object.entries(interpolations).reduce(
          (str, [key, val]) => str.replace(new RegExp(`\\{${key}\\}`, 'g'), val),
          value
        );
      }

      return value;
    },
    [language]
  );

  /**
   * Listen for cross-tab language changes via the storage event.
   */
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEY && e.newValue && translations[e.newValue]) {
        setLanguageState(e.newValue);
        document.documentElement.lang = e.newValue;
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Set initial lang attribute
    document.documentElement.lang = language;

    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to access the language context.
 * @returns {{ language: string, setLanguage: (lang: string) => void, t: (key: string, interpolations?: Object) => string, supportedLanguages: Array }}
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
