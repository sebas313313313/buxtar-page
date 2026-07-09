/**
 * Reusable Input component with built-in validation display.
 * Supports text, email, textarea, and other input types.
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  error = '',
  touched = false,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  maxLength,
  rows = 4,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const showError = touched && error;
  const isTextarea = type === 'textarea';

  const inputClasses = `
    w-full px-4 py-3 rounded-xl
    bg-white border transition-all duration-300
    text-black placeholder-brand-gray/60 shadow-sm
    focus:outline-none focus:ring-2 focus:ring-brand-orange/30
    disabled:opacity-50 disabled:cursor-not-allowed
    ${showError
      ? 'border-red-500 focus:border-red-500'
      : focused
        ? 'border-brand-orange/50'
        : 'border-brand-gray/40 hover:border-brand-gray'
    }
    ${className}
  `;

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-black"
        >
          {label}
          {required && <span className="text-brand-orange ml-1">*</span>}
        </label>
      )}

      <InputComponent
        id={name}
        name={name}
        type={isTextarea ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        rows={isTextarea ? rows : undefined}
        className={inputClasses}
        aria-invalid={showError ? 'true' : 'false'}
        aria-describedby={showError ? `${name}-error` : undefined}
        {...props}
      />

      <AnimatePresence>
        {showError && (
          <motion.p
            id={`${name}-error`}
            className="text-red-400 text-xs mt-1 flex items-center gap-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            role="alert"
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {maxLength && (
        <p className="text-brand-gray text-xs text-right">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default Input;
