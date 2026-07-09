/**
 * Rate limiting hook.
 * Prevents abuse by limiting the number of actions within a time window.
 */
import { useState, useCallback, useRef } from 'react';
import { RATE_LIMIT } from '../utils/constants';

/**
 * @param {Object} options
 * @param {number} [options.maxRequests=3] - Maximum requests in the time window
 * @param {number} [options.windowMs=60000] - Time window in milliseconds
 * @returns {{ isLimited: boolean, remainingAttempts: number, cooldownTime: number, checkRateLimit: () => boolean, resetLimit: () => void }}
 */
const useRateLimit = ({
  maxRequests = RATE_LIMIT.maxRequests,
  windowMs = RATE_LIMIT.windowMs,
} = {}) => {
  const [isLimited, setIsLimited] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const requestTimestamps = useRef([]);
  const cooldownInterval = useRef(null);

  /**
   * Start a cooldown timer that updates the remaining time.
   */
  const startCooldown = useCallback((endTime) => {
    if (cooldownInterval.current) {
      clearInterval(cooldownInterval.current);
    }

    cooldownInterval.current = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      setCooldownTime(Math.ceil(remaining / 1000));

      if (remaining <= 0) {
        setIsLimited(false);
        setCooldownTime(0);
        clearInterval(cooldownInterval.current);
        cooldownInterval.current = null;
      }
    }, 1000);
  }, []);

  /**
   * Check if the current action is within rate limits.
   * @returns {boolean} true if the action is allowed, false if rate limited
   */
  const checkRateLimit = useCallback(() => {
    const now = Date.now();

    // Remove timestamps outside the current window
    requestTimestamps.current = requestTimestamps.current.filter(
      (timestamp) => now - timestamp < windowMs
    );

    // Check if limit is exceeded
    if (requestTimestamps.current.length >= maxRequests) {
      setIsLimited(true);
      const oldestInWindow = requestTimestamps.current[0];
      const endTime = oldestInWindow + windowMs;
      startCooldown(endTime);
      return false;
    }

    // Record this request
    requestTimestamps.current.push(now);
    return true;
  }, [maxRequests, windowMs, startCooldown]);

  /**
   * Reset the rate limit counter.
   */
  const resetLimit = useCallback(() => {
    requestTimestamps.current = [];
    setIsLimited(false);
    setCooldownTime(0);
    if (cooldownInterval.current) {
      clearInterval(cooldownInterval.current);
      cooldownInterval.current = null;
    }
  }, []);

  const remainingAttempts = Math.max(
    0,
    maxRequests -
      requestTimestamps.current.filter((ts) => Date.now() - ts < windowMs).length
  );

  return {
    isLimited,
    remainingAttempts,
    cooldownTime,
    checkRateLimit,
    resetLimit,
  };
};

export default useRateLimit;
