/**
 * Reusable Card component with glassmorphism support.
 */
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  glass = false,
  hover = true,
  padding = 'p-6',
  onClick,
  ...props
}) => {
  return (
    <motion.div
      className={`
        rounded-2xl transition-all duration-300
        ${glass
          ? 'bg-white/80 backdrop-blur-xl border border-brand-gray/30'
          : 'bg-white border border-brand-gray/30'
        }
        ${hover ? 'hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/10 shadow-sm shadow-brand-gray/20' : 'shadow-sm shadow-brand-gray/20'}
        ${padding}
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/** Card Header sub-component */
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

/** Card Body sub-component */
Card.Body = ({ children, className = '' }) => (
  <div className={`${className}`}>{children}</div>
);

/** Card Footer sub-component */
Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-brand-gray/20 ${className}`}>
    {children}
  </div>
);

export default Card;
