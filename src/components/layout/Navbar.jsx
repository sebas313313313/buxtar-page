/**
 * Navbar component.
 * Sticky header with logo, nav links, language switcher, and mobile menu.
 * "Servicios" link has a hover dropdown submenu showing individual services.
 */
import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY, NAV_LINKS } from '../../utils/constants';
import { useLanguage } from '../../context/LanguageContext';
import services from '../../data/services';
import Container from './Container';
import LanguageSwitcher from '../ui/LanguageSwitcher';

/** Desktop dropdown for services */
const ServicesDropdown = ({ isVisible, t }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden min-w-[280px]">
          {/* Small arrow/triangle pointing up */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-l border-t border-white/10 rotate-45" />

          <div className="relative py-2">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/servicios/${service.id}`}
                className="flex items-center gap-3 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 group"
              >
                {/* Service icon */}
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors duration-200">
                  <svg
                    className="w-4 h-4 text-brand-orange"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </span>

                {/* Service title */}
                <span className="font-medium group-hover:translate-x-0.5 transition-transform duration-200">
                  {t(`services.items.${service.id}.title`)}
                </span>
              </Link>
            ))}

            {/* Divider + "Ver todos" link */}
            <div className="border-t border-white/10 mt-1 pt-1">
              <Link
                to="/servicios"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm text-brand-orange hover:text-brand-orange-light font-semibold transition-colors duration-200"
              >
                <span>{t('services.cta') || 'Ver todos'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);

  // Scroll window to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop dropdown hover handlers with delay to prevent flicker
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
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
              <li
                key={link.id}
                className="relative"
                {...(link.id === 'servicios'
                  ? {
                      onMouseEnter: handleDropdownEnter,
                      onMouseLeave: handleDropdownLeave,
                    }
                  : {})}
              >
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-white inline-flex items-center gap-1 ${
                      isActive
                        ? 'bg-white/20'
                        : 'hover:bg-white/10'
                    }`
                  }
                >
                  {t(`nav.${link.id}`)}
                  {/* Chevron indicator for Servicios */}
                  {link.id === 'servicios' && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </NavLink>

                {/* Services dropdown */}
                {link.id === 'servicios' && (
                  <ServicesDropdown isVisible={servicesDropdownOpen} t={t} />
                )}
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
                <div className="flex flex-col items-center justify-center h-full overflow-y-auto py-20">
                  <ul className="flex flex-col items-center gap-4">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.id}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        {link.id === 'servicios' ? (
                          <>
                            {/* Servicios with toggle */}
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className={`text-2xl font-semibold transition-colors duration-200 text-white inline-flex items-center gap-2 ${
                                location.pathname.startsWith('/servicios')
                                  ? 'opacity-100 bg-white/10 px-4 py-2 rounded-lg'
                                  : 'opacity-80 hover:opacity-100'
                              }`}
                            >
                              {t(`nav.${link.id}`)}
                              <svg
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  mobileServicesOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            {/* Mobile services sub-list */}
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.ul
                                  className="mt-3 flex flex-col items-center gap-2"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {services.map((service, sIndex) => (
                                    <motion.li
                                      key={service.id}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: sIndex * 0.06 }}
                                    >
                                      <Link
                                        to={`/servicios/${service.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base text-white/70 hover:text-brand-orange transition-colors duration-200 px-4 py-1.5 block"
                                      >
                                        {t(`services.items.${service.id}.title`)}
                                      </Link>
                                    </motion.li>
                                  ))}
                                  <motion.li
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: services.length * 0.06 }}
                                  >
                                    <Link
                                      to="/servicios"
                                      onClick={() => setIsOpen(false)}
                                      className="text-base text-brand-orange font-semibold hover:text-brand-orange-light transition-colors duration-200 px-4 py-1.5 block"
                                    >
                                      {t('services.cta') || 'Ver todos'} →
                                    </Link>
                                  </motion.li>
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
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
                        )}
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

