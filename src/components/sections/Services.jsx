/**
 * Services section.
 * Displays company services in a grid of image cards with overlay text.
 * Inspired by dark, cinematic card design with text directly on images.
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import services from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { SectionTitle } from '../ui';

const Services = () => {
  const { t } = useLanguage();

  return (
    <Section id="servicios" dark>
      <Container>
        <SectionTitle
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/servicios/${service.id}`}
                className="block h-full group"
              >
                <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                  {/* Background image */}
                  <img
                    src={service.image}
                    alt={t(`services.items.${service.id}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay — stronger at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 group-hover:via-black/40 transition-all duration-500" />

                  {/* Content positioned at the bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {t(`services.items.${service.id}.title`)}
                    </h3>

                    {/* CTA link */}
                    <div className="flex items-center text-brand-orange font-semibold text-sm gap-2 group-hover:gap-3 transition-all duration-300">
                      <span>{t('services.cta') || 'Conocer más'}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
