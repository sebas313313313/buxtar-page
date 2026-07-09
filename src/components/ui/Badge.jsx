/**
 * Reusable Badge component.
 */
const badgeVariants = {
  primary: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
  secondary: 'bg-brand-gray/10 text-brand-gray border-brand-gray/30',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const Badge = ({ children, variant = 'primary', className = '' }) => {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        border transition-colors duration-200
        ${badgeVariants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
