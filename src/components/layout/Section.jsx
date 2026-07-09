/**
 * Section wrapper component.
 * Provides consistent spacing and optional background variants.
 */
const Section = ({
  children,
  id,
  className = '',
  dark = false,
  noPadding = false,
}) => {
  return (
    <section
      id={id}
      className={`
        ${noPadding ? '' : 'py-16 md:py-24'}
        ${dark ? 'bg-white' : 'bg-white'}
        relative overflow-hidden
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
