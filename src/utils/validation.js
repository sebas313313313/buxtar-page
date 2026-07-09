/**
 * Validation rules for form inputs.
 * Provides reusable validation functions with error messages.
 */

/** Maximum allowed input lengths to prevent abuse */
const MAX_LENGTHS = {
  name: 100,
  email: 254,
  phone: 20,
  subject: 200,
  message: 2000,
};

/** Regex patterns for validation */
const PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[+]?[\d\s\-()]{7,20}$/,
  name: /^[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ\s'-]{2,100}$/,
  // Block common injection patterns
  noInjection: /^(?!.*(<script|javascript:|on\w+=|<iframe|<object|<embed|eval\(|alert\())/i,
};

/**
 * Validate a required field is not empty.
 * @param {string} value - Input value
 * @param {string} fieldName - Name of the field for error message
 * @returns {{ valid: boolean, error: string }}
 */
export const validateRequired = (value, fieldName = 'Este campo') => {
  if (!value || !value.trim()) {
    return { valid: false, error: `${fieldName} es obligatorio` };
  }
  return { valid: true, error: '' };
};

/**
 * Validate an email address.
 * @param {string} email
 * @returns {{ valid: boolean, error: string }}
 */
export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return { valid: false, error: 'El correo electrónico es obligatorio' };
  }
  if (email.length > MAX_LENGTHS.email) {
    return { valid: false, error: 'El correo electrónico es demasiado largo' };
  }
  if (!PATTERNS.email.test(email)) {
    return { valid: false, error: 'Ingresa un correo electrónico válido' };
  }
  return { valid: true, error: '' };
};

/**
 * Validate a name field.
 * @param {string} name
 * @returns {{ valid: boolean, error: string }}
 */
export const validateName = (name) => {
  if (!name || !name.trim()) {
    return { valid: false, error: 'El nombre es obligatorio' };
  }
  if (name.length > MAX_LENGTHS.name) {
    return { valid: false, error: 'El nombre es demasiado largo' };
  }
  if (!PATTERNS.name.test(name)) {
    return { valid: false, error: 'El nombre contiene caracteres no válidos' };
  }
  return { valid: true, error: '' };
};

/**
 * Validate a phone number.
 * @param {string} phone
 * @returns {{ valid: boolean, error: string }}
 */
export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return { valid: true, error: '' }; // Phone is optional
  }
  if (phone.length > MAX_LENGTHS.phone) {
    return { valid: false, error: 'El teléfono es demasiado largo' };
  }
  if (!PATTERNS.phone.test(phone)) {
    return { valid: false, error: 'Ingresa un número de teléfono válido' };
  }
  return { valid: true, error: '' };
};

/**
 * Validate a message/text area.
 * @param {string} message
 * @param {number} [minLength=10]
 * @returns {{ valid: boolean, error: string }}
 */
export const validateMessage = (message, minLength = 10) => {
  if (!message || !message.trim()) {
    return { valid: false, error: 'El mensaje es obligatorio' };
  }
  if (message.length < minLength) {
    return { valid: false, error: `El mensaje debe tener al menos ${minLength} caracteres` };
  }
  if (message.length > MAX_LENGTHS.message) {
    return { valid: false, error: `El mensaje no puede superar los ${MAX_LENGTHS.message} caracteres` };
  }
  return { valid: true, error: '' };
};

/**
 * Check for injection patterns in any input.
 * @param {string} value
 * @returns {{ valid: boolean, error: string }}
 */
export const validateNoInjection = (value) => {
  if (!value) return { valid: true, error: '' };
  if (!PATTERNS.noInjection.test(value)) {
    return { valid: false, error: 'La entrada contiene contenido no permitido' };
  }
  return { valid: true, error: '' };
};

/**
 * Run multiple validation rules on a value.
 * Returns the first error found.
 * @param {string} value
 * @param {Function[]} validators - Array of validator functions
 * @returns {{ valid: boolean, error: string }}
 */
export const validateField = (value, validators) => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.valid) return result;
  }
  return { valid: true, error: '' };
};

export { MAX_LENGTHS, PATTERNS };
