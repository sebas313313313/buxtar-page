/**
 * Form validation hook.
 * Combines validation rules with sanitization for secure form handling.
 */
import { useState, useCallback } from 'react';
import { sanitizeFormData } from '../utils/sanitize';
import { validateNoInjection } from '../utils/validation';

/**
 * @param {Object} initialValues - Initial form field values
 * @param {Object} validationRules - Object mapping field names to validator functions
 * @returns {{ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit, resetForm, setFieldValue }}
 */
const useFormValidation = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /**
   * Validate a single field.
   */
  const validateField = useCallback(
    (name, value) => {
      // Always check for injection
      const injectionCheck = validateNoInjection(value);
      if (!injectionCheck.valid) {
        return injectionCheck.error;
      }

      // Run field-specific validator
      const validator = validationRules[name];
      if (validator) {
        const result = validator(value);
        if (!result.valid) {
          return result.error;
        }
      }

      return '';
    },
    [validationRules]
  );

  /**
   * Validate all fields.
   */
  const validateAllFields = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    for (const [name, value] of Object.entries(values)) {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  /**
   * Handle input change with real-time validation.
   */
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Validate on change if field has been touched
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField]
  );

  /**
   * Handle input blur - triggers validation and sanitization.
   */
  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Validate on blur
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  /**
   * Handle form submission with full validation and sanitization.
   * @param {Function} onSubmit - Callback with sanitized data
   * @returns {Function} Event handler
   */
  const handleSubmit = useCallback(
    (onSubmit) => (e) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched = {};
      for (const key of Object.keys(values)) {
        allTouched[key] = true;
      }
      setTouched(allTouched);

      // Validate all fields
      const isValid = validateAllFields();

      if (isValid) {
        // Sanitize all values before submitting
        const sanitizedData = sanitizeFormData(values);
        onSubmit(sanitizedData);
      }
    },
    [values, validateAllFields]
  );

  /**
   * Set a single field value programmatically.
   */
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  /**
   * Reset the form to initial values.
   */
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  /** Check if the form is currently valid (no errors) */
  const isValid =
    Object.values(errors).every((error) => !error) &&
    Object.keys(touched).length > 0;

  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  };
};

export default useFormValidation;
