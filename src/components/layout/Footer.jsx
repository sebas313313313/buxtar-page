/**
 * Footer component.
 * Simplified footer with company info, social media, contact CTA and legal text.
 */
import { Link } from 'react-router-dom';
import { COMPANY, SOCIAL_LINKS } from '../../utils/constants';
import { getExternalLinkProps } from '../../utils/security';
import { useLanguage } from '../../context/LanguageContext';
import Container from './Container';
import { Button } from '../ui';

const SocialIcon = ({ name }) => {
  const icons = {
    linkedin: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
    ),
    instagram: (
      <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-7.5a1 1 0 110-2 1 1 0 010 2z" />
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
  };

  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      {icons[name] || null}
    </svg>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-brand-gray/30">
      <Container>
        <div className="py-8 md:py-10 flex flex-col md:flex-row justify-between items-center md:items-center gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="max-w-xl flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex-shrink-0">
              <img src={COMPANY.logo} alt={COMPANY.fullName} className="h-9 w-auto" />
            </Link>
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
                {t('hero.description')}
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    {...getExternalLinkProps(social.href)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-gray/20 text-brand-gray hover:bg-brand-orange hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col items-center md:items-end flex-shrink-0">
            <h3 className="text-white font-semibold mb-2">{t('contact.title') || 'Contacto'}</h3>
            <p className="text-brand-gray text-sm mb-4">{t('contact.subtitle')}</p>
            <Link to="/contacto" onClick={() => window.scrollTo(0,0)}>
              <Button variant="primary">
                {t('nav.cta')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-5 border-t border-brand-gray/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-xs text-center md:text-left">
            © {currentYear} {COMPANY.fullName}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-gray hover:text-white text-xs transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-brand-gray hover:text-white text-xs transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
