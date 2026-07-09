/**
 * Reusable Button component.
 * Supports multiple variants, sizes, and loading state.
 */
import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40',
  secondary:
    'bg-black hover:bg-black/80 text-white border border-brand-gray/50 hover:border-brand-orange/50',
  outline:
    'bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  ghost:
    'bg-transparent hover:bg-brand-gray/10 text-brand-gray hover:text-black',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <motion.button
      type={type}
      className={`
        inline-flex items-center justify-center font-semibold rounded-xl
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:ring-offset-2 focus:ring-offset-dark
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
