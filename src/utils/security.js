/**
 * Security utilities for frontend protection.
 * Provides CSP helpers, secure fetch wrapper, and security checks.
 */

/**
 * Content Security Policy directives.
 * Use this to generate CSP meta tags dynamically if needed.
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https:'],
  'connect-src': ["'self'"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

/**
 * Generate CSP string from directives object.
 * @param {Object} directives
 * @returns {string}
 */
export const generateCSP = (directives = CSP_DIRECTIVES) => {
  return Object.entries(directives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
};

/**
 * Secure fetch wrapper that adds security headers
 * and validates the response.
 * @param {string} url - The URL to fetch
 * @param {Object} options - Fetch options
 * @returns {Promise<Response>}
 */
export const secureFetch = async (url, options = {}) => {
  // Validate URL
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL provided');
  }

  // Only allow HTTPS in production
  if (import.meta.env.PROD && !url.startsWith('https://')) {
    throw new Error('Only HTTPS URLs are allowed in production');
  }

  // Merge security headers
  const secureOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'same-origin',
  };

  try {
    const response = await fetch(url, secureOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Secure fetch error:', error.message);
    throw error;
  }
};

/**
 * Check if a URL is from an allowed domain.
 * @param {string} url - URL to check
 * @param {string[]} allowedDomains - List of allowed domains
 * @returns {boolean}
 */
export const isAllowedDomain = (url, allowedDomains = []) => {
  try {
    const parsedUrl = new URL(url);
    return allowedDomains.some(
      (domain) => parsedUrl.hostname === domain || parsedUrl.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};

/**
 * Add rel="noopener noreferrer" to external links for security.
 * @param {string} href
 * @returns {Object} Props to spread on an <a> tag
 */
export const getExternalLinkProps = (href) => {
  try {
    const url = new URL(href);
    if (url.origin !== window.location.origin) {
      return {
        target: '_blank',
        rel: 'noopener noreferrer',
      };
    }
  } catch {
    // Not a valid URL, treat as internal
  }
  return {};
};
