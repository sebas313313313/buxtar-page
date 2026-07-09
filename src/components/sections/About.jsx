/**
 * About Us section.
 * Company overview with mission, vision, and values.
 */
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { SectionTitle } from '../ui';

const VALUE_KEYS = ['innovation', 'trust', 'commitment', 'excellence'];

const VALUE_ICONS = {
  innovation: 'M13 10V3L4 14h7v7l9-11h-7z',
  trust: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  commitment: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  excellence: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="nosotros" dark={false}>
      <Container>
        <SectionTitle
          badge={t('about.badge')}
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            className="bg-white border border-brand-gray/30 shadow-sm rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors duration-500" />
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{t('about.mission.title')}</h3>
              <p className="text-brand-gray leading-relaxed">{t('about.mission.description')}</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white border border-brand-gray/30 shadow-sm rounded-2xl p-8 relative overflow-hidden group hover:shadow-md transition-shadow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/10 transition-colors duration-500" />
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{t('about.vision.title')}</h3>
              <p className="text-brand-gray leading-relaxed">{t('about.vision.description')}</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_KEYS.map((key, index) => (
            <motion.div
              key={key}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white shadow-sm border border-brand-gray/30 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={VALUE_ICONS[key]} />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-black mb-2">{t(`about.values.${key}.title`)}</h4>
              <p className="text-brand-gray text-sm leading-relaxed">{t(`about.values.${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default About;
