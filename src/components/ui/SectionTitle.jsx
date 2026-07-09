/**
 * Reusable SectionTitle component.
 * Consistent heading style for all landing page sections.
 */
import { motion } from 'framer-motion';
import Badge from './Badge';

const SectionTitle = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
  lightText = false,
}) => {
  return (
    <motion.div
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <Badge>{badge}</Badge>
        </div>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${lightText ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-brand-gray text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-6 ${centered ? 'flex justify-center' : ''}`}>
        <div className="section-divider" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
