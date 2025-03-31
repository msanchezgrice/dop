import { track } from '@vercel/analytics';

/**
 * Tracks a custom event with the Vercel Analytics API
 * 
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  track(eventName, properties);
};

/**
 * Predefined event names for consistency across the application
 */
export const AnalyticsEvents = {
  // Auth events
  SIGN_UP: 'sign_up',
  LOGIN: 'login',
  LOGOUT: 'logout',
  
  // Project events
  PROJECT_VIEW: 'project_view',
  PROJECT_CREATE: 'project_create',
  PROJECT_UPDATE: 'project_update',
  PROJECT_DELETE: 'project_delete',
  
  // Task events
  TASK_VIEW: 'task_view',
  TASK_CREATE: 'task_create',
  TASK_UPDATE: 'task_update',
  TASK_STATUS_CHANGE: 'task_status_change',
  TASK_DELETE: 'task_delete',
  
  // Page views
  PAGE_VIEW: 'page_view',
}; 