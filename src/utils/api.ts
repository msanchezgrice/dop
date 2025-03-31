import { getToken } from './auth';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface ApiOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
  requiresAuth?: boolean;
}

export async function apiRequest<T>(
  endpoint: string, 
  options: ApiOptions = {}
): Promise<T> {
  const {
    method = 'GET',
    body,
    headers = {},
    requiresAuth = true,
  } = options;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // Add authorization header if needed
  if (requiresAuth) {
    const token = getToken();
    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    } else {
      throw new Error('Authentication required');
    }
  }

  const config: RequestInit = {
    method,
    headers: requestHeaders,
    credentials: 'include',
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  get: <T>(endpoint: string, options?: Omit<ApiOptions, 'method' | 'body'>) => 
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),
  
  post: <T>(endpoint: string, body: Record<string, unknown>, options?: Omit<ApiOptions, 'method'>) => 
    apiRequest<T>(endpoint, { ...options, method: 'POST', body }),
  
  put: <T>(endpoint: string, body: Record<string, unknown>, options?: Omit<ApiOptions, 'method'>) => 
    apiRequest<T>(endpoint, { ...options, method: 'PUT', body }),
  
  delete: <T>(endpoint: string, options?: Omit<ApiOptions, 'method'>) => 
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
}; 