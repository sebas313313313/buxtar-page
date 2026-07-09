/**
 * Sanitization utilities using DOMPurify.
 * Protects against XSS by cleaning user inputs.
 */
import DOMPurify from 'dompurify';

/**
 * Sanitize a single string input.
 * Strips all HTML tags and dangerous content.
 * @param {string} input - Raw user input
 * @returns {string} Sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  }).trim();
};

/**
 * Sanitize an email address.
 * Only allows valid email characters.
 * @param {string} email - Raw email input
 * @returns {string} Sanitized email
 */
export const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return '';
  const sanitized = sanitizeInput(email).toLowerCase();
  return sanitized.replace(/[^a-z0-9@._+-]/g, '');
};

/**
 * Sanitize a phone number.
 * Only allows digits, spaces, dashes, parentheses, and plus sign.
 * @param {string} phone - Raw phone input
 * @returns {string} Sanitized phone number
 */
export const sanitizePhone = (phone) => {
  if (typeof phone !== 'string') return '';
  return sanitizeInput(phone).replace(/[^0-9\s\-()+ ]/g, '');
};

/**
 * Sanitize all fields in a form data object.
 * @param {Object} formData - Object with form field values
 * @returns {Object} Sanitized form data
 */
export const sanitizeFormData = (formData) => {
  if (!formData || typeof formData !== 'object') return {};

  const sanitized = {};
  for (const [key, value] of Object.entries(formData)) {
    if (key === 'email') {
      sanitized[key] = sanitizeEmail(value);
    } else if (key === 'phone' || key === 'telefono') {
      sanitized[key] = sanitizePhone(value);
    } else {
      sanitized[key] = sanitizeInput(value);
    }
  }
  return sanitized;
};

/**
 * Sanitize content that may contain safe HTML (for rich text).
 * Only allows basic formatting tags.
 * @param {string} html - Raw HTML content
 * @returns {string} Sanitized HTML
 */
export const sanitizeRichText = (html) => {
  if (typeof html !== 'string') return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'br', 'p', 'span'],
    ALLOWED_ATTR: [],
  });
};
