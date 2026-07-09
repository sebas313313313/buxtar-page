/**
 * Hero section.
 * Formal, centered hero with headline, CTA, and animated stats strip.
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Container from '../layout/Container';

const STAT_KEYS = [
  { value: '10+', key: 'experience' },
  { value: '100+', key: 'projects' },
  { value: '50+', key: 'clients' },
  { value: '15+', key: 'allies' },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(246,134,24,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(246,134,24,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orange accent top-left */}
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange opacity-80" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
          <span className="text-brand-orange text-sm font-semibold tracking-wider uppercase">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black leading-[1.05] tracking-tight mb-7 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t('hero.titleLine1')}{' '}
          <span className="text-brand-orange">{t('hero.titleHighlight1')}</span>{' '}
          {t('hero.titleLine2')}{' '}
          <span className="text-brand-orange">{t('hero.titleHighlight2')}</span>
        </motion.h1>

        {/* Divider accent */}
        <motion.div
          className="w-24 h-1 bg-brand-orange rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />

        {/* Description */}
        <motion.p
          className="text-brand-gray text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-base font-bold rounded-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-lg shadow-brand-orange/30"
          >
            {t('hero.ctaPrimary')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-black text-base font-bold rounded-xl border-2 border-black/20 hover:border-brand-orange/60 hover:text-brand-orange transition-all duration-300"
          >
            {t('hero.ctaSecondary')}
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-gray/20 rounded-2xl overflow-hidden border border-brand-gray/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {STAT_KEYS.map((stat) => (
            <div
              key={stat.key}
              className="bg-white py-8 px-4 text-center group hover:bg-brand-orange/5 transition-colors duration-300 border border-brand-gray/10"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-brand-orange mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-brand-gray text-sm font-medium tracking-wide uppercase">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-brand-gray text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
