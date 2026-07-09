/**
 * Container component.
 * Provides consistent max-width and padding.
 */
const Container = ({ children, className = '', narrow = false }) => {
  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${narrow ? 'max-w-4xl' : 'max-w-7xl'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
