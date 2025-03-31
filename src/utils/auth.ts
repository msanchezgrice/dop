'use client';

import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

/**
 * Store authentication token in cookies
 */
export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Expires in 7 days
};

/**
 * Get authentication token from cookies
 */
export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

/**
 * Remove authentication token from cookies
 */
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

/**
 * Check if user is authenticated
 * In a real app, you might also want to verify the token's validity
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
};

/**
 * Mock login function - in a real app, this would call your backend API
 */
export const login = async (email: string, password: string): Promise<boolean> => {
  // This is just a mock implementation
  // In a real app, you would make an API call to authenticate the user
  if (email && password.length >= 6) {
    // Mock successful login with a fake token
    const mockToken = 'mock_token_' + Math.random().toString(36).substr(2);
    setToken(mockToken);
    return true;
  }
  return false;
};

/**
 * Mock signup function - in a real app, this would call your backend API
 */
export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<boolean> => {
  // This is just a mock implementation
  // In a real app, you would make an API call to register the user
  if (name && email && password.length >= 6) {
    // Mock successful signup with a fake token
    const mockToken = 'mock_token_' + Math.random().toString(36).substr(2);
    setToken(mockToken);
    return true;
  }
  return false;
}; 