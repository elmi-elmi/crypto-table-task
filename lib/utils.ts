

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number as currency
 */
export function formatCurrency(
    value: number,
    currency: string = 'USD',
    options?: Intl.NumberFormatOptions
): string {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency === 'USD' ? 'USD' : undefined,
    minimumFractionDigits: currency === 'USD' ? 2 : 8,
    maximumFractionDigits: currency === 'USD' ? 2 : 8,
  };

  if (currency === 'BTC' || currency === 'ETH') {
    return `${formatNumber(value, {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8
    })} ${currency}`;
  }

  try {
    return new Intl.NumberFormat('en-US', {
      ...defaultOptions,
      ...options,
    }).format(value);
  } catch {
    return `${currency} ${formatNumber(value)}`;
  }
}

/**
 * Format number with appropriate suffixes (K, M, B, T)
 */
export function formatNumber(
    value: number,
    options?: Intl.NumberFormatOptions
): string {
  if (value === 0) return '0';

  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  };

  // For very large numbers, use suffixes
  if (Math.abs(value) >= 1e12) {
    return (value / 1e12).toFixed(2) + 'T';
  } else if (Math.abs(value) >= 1e9) {
    return (value / 1e9).toFixed(2) + 'B';
  } else if (Math.abs(value) >= 1e6) {
    return (value / 1e6).toFixed(2) + 'M';
  } else if (Math.abs(value) >= 1e3) {
    return (value / 1e3).toFixed(2) + 'K';
  }

  try {
    return new Intl.NumberFormat('en-US', {
      ...defaultOptions,
      ...options,
    }).format(value);
  } catch {
    return value.toString();
  }
}

/**
 * Format percentage
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  if (value === 0) return '0.00%';
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format market cap
 */
export function formatMarketCap(value: number): string {
  if (value === 0) return '$0';
  return formatCurrency(value, 'USD');
}

/**
 * Get percentage color class
 */
export function getPercentageColor(value: number): string {
  if (value > 0) return 'text-green-600 dark:text-green-400';
  if (value < 0) return 'text-red-600 dark:text-red-400';
  return 'text-gray-600 dark:text-gray-400';
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Generate cache key
 */
export function generateCacheKey(page: number, limit: number, filters?: any): string {
  const filterStr = filters ? JSON.stringify(filters) : '';
  return `crypto-${page}-${limit}-${btoa(filterStr)}`;
}

/**
 * Check if cache is valid
 */
export function isCacheValid(timestamp: number, duration: number): boolean {
  return Date.now() - timestamp < duration;
}

/**
 * Get crypto logo URL
 */
export function getCryptoLogoUrl(id: number, size: number = 64): string {
  return `https://s2.coinmarketcap.com/static/img/coins/${size}x${size}/${id}.png`;
}

/**
 * Sanitize search query
 */
export function sanitizeSearchQuery(query: string): string {
  return query
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/gi, '');
}

/**
 * Calculate pagination info
 */
export function calculatePagination(
    currentPage: number,
    totalItems: number,
    itemsPerPage: number
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return {
    totalPages,
    hasNextPage,
    hasPreviousPage,
    startIndex,
    endIndex,
    currentPage,
    totalItems,
  };
}

/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * Get responsive image sizes
 */
export function getResponsiveImageSizes(): string {
  return "(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px";
}

/**
 * Format time ago
 */
export function formatTimeAgo(date: Date | string): string {
  const now = new Date();
  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;

  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
