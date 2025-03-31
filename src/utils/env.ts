/**
 * Helper function to ensure environment variables are properly loaded
 * This is useful for debugging environment variable issues
 */
export function getEnvVars() {
  const envVars = {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY ? '****' : undefined,
    // Add other environment variables as needed
  };
  
  console.log('Environment variables:', envVars);
  return envVars;
}

/**
 * Set up mock environment variables for development if needed
 * Only use this in development and testing environments
 */
export function setupMockEnv() {
  if (process.env.NODE_ENV !== 'production') {
    if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
      console.warn('NEXT_PUBLIC_OPENAI_API_KEY is not set, using mock API responses');
    }
  }
} 