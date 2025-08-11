/**
 * Utility functions for handling paths in different deployment environments
 */

// Get the base URL for assets
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${cleanPath}`;
};

// Get the full URL for sharing or external links
export const getFullUrl = (path: string = ''): string => {
  if (typeof window === 'undefined') return path;
  
  const baseUrl = window.location.origin;
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${baseUrl}${basePath}${cleanPath}`;
};

// Check if we're in a subdirectory deployment
export const isSubdirectoryDeployment = (): boolean => {
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl !== '/';
};

// Get the current deployment base path
export const getBasePath = (): string => {
  return import.meta.env.BASE_URL?.replace(/\/$/, '') || '';
};
