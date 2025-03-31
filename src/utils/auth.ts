import Cookies from 'js-cookie';

// Cookie names
const ACCESS_TOKEN = 'pm_agent_access_token';

// Cookie options
const cookieOptions = {
  expires: 7, // 7 days
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
};

// Auth functions
export const setToken = (token: string): void => {
  Cookies.set(ACCESS_TOKEN, token, cookieOptions);
};

export const getToken = (): string | undefined => {
  return Cookies.get(ACCESS_TOKEN);
};

export const removeToken = (): void => {
  Cookies.remove(ACCESS_TOKEN);
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
}; 