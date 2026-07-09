/**
 * Navbar component.
 * Sticky header with logo, nav links, language switcher, and mobile menu.
 */
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY, NAV_LINKS } from '../../utils/constants';
import { useLanguage } from '../../context/LanguageContext';
import Container from './Container';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Scroll window to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-brand-gray/20 shadow-lg shadow-black/10'
          : 'bg-black'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img
              src={COMPANY.logo}
              alt={COMPANY.fullName}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-white ${
                      isActive
                        ? 'bg-white/20'
                        : 'hover:bg-white/10'
                    }`
                  }
                >
                  {t(`nav.${link.id}`)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side: Language Switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/contacto"
              className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40"
            >
              {t('nav.cta')}
            </Link>
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden z-50">
            <LanguageSwitcher />
            <button
              className="p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black/95 backdrop-blur-xl lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <ul className="flex flex-col items-center gap-4">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <NavLink
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            `text-2xl font-semibold transition-colors duration-200 text-white ${
                              isActive ? 'opacity-100 bg-white/10 px-4 py-2 rounded-lg' : 'opacity-80 hover:opacity-100'
                            }`
                          }
                        >
                          {t(`nav.${link.id}`)}
                        </NavLink>
                      </motion.li>
                    ))}
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: NAV_LINKS.length * 0.08 }}
                    >
                      <Link
                        to="/contacto"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 inline-flex items-center px-8 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-xl transition-all duration-300"
                      >
                        {t('nav.cta')}
                      </Link>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </motion.header>
  );
};

export default Navbar;
