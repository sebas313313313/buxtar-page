/**
 * News section.
 * Displays recent news/updates in a card grid.
 */
import { motion } from 'framer-motion';
import news from '../../data/news';
import { useLanguage } from '../../context/LanguageContext';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { SectionTitle, Card, Badge } from '../ui';

const formatDate = (dateStr, lang) => {
  const localeMap = { es: 'es-CO', en: 'en-US', fr: 'fr-FR', pt: 'pt-BR' };
  const date = new Date(dateStr);
  return date.toLocaleDateString(localeMap[lang] || 'es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const News = () => {
  const { t, language } = useLanguage();

  return (
    <Section id="noticias" dark={false}>
      <Container>
        <SectionTitle
          badge={t('news.badge')}
          title={t('news.title')}
          subtitle={t('news.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full group cursor-pointer" glass>
                <div className="w-full h-48 rounded-xl bg-brand-gray/5 mb-4 overflow-hidden flex items-center justify-center group-hover:bg-brand-gray/10 transition-colors duration-300">
                  <svg className="w-12 h-12 text-brand-gray/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>

                <Card.Header>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="primary">{t(`news.items.${item.id}.category`)}</Badge>
                    <span className="text-brand-gray text-xs">{formatDate(item.date, language)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                    {t(`news.items.${item.id}.title`)}
                  </h3>
                </Card.Header>

                <Card.Body>
                  <p className="text-brand-gray text-sm leading-relaxed line-clamp-3">
                    {t(`news.items.${item.id}.excerpt`)}
                  </p>
                </Card.Body>

                <Card.Footer>
                  <span className="text-brand-orange text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    {t('news.readMore')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default News;
