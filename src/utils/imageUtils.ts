/**
 * Utility function to get the correct image path for different deployment environments
 */
export const getImagePath = (imageName: string): string => {
  // Remove leading slash if present
  const cleanImageName = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanImageName}`;
  }
  
  // In production, use the base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${cleanImageName}`;
};

// Alternative function that works with import.meta.url
export const getPublicImagePath = (imageName: string): string => {
  const cleanImageName = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  
  // For GitHub Pages and other subdirectory deployments
  if (import.meta.env.PROD) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return `${baseUrl}${cleanImageName}`;
  }
  
  // For development
  return `/${cleanImageName}`;
};
