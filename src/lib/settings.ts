import type { Viewport } from 'next';
import { env } from '~/env';

/*
 * Define process.environment Mode - use NEXT_PUBLIC prefix for client-side access
 */
export const isProd = env.NODE_ENV === 'production';
export const isDev = env.NODE_ENV === 'development';
export const isTest = env.NODE_ENV === 'test';

/*
 * Show logger in local development or when explicitly enabled
 */
export const loggerConfig = {
  // Use the transformed boolean value directly
  enabled: isDev || isTest || env.NEXT_PUBLIC_SHOW_LOGGER === true,
  level: env.NEXT_PUBLIC_LOG_LEVEL,
} as const;

export const showLogger = loggerConfig.enabled;

/*
 * Define Application Constants - use NEXT_PUBLIC prefix for client-side access
 */
export const APP_AUTHOR = env.NEXT_PUBLIC_APP_AUTHOR;
export const APP_DESCRIPTION = env.NEXT_PUBLIC_APP_DESCRIPTION;
export const APP_LOGO = env.NEXT_PUBLIC_APP_LOGO;
export const APP_NAME =
  env.NODE_ENV === 'development'
    ? `DEV - ${env.NEXT_PUBLIC_APP_NAME}`
    : env.NEXT_PUBLIC_APP_NAME;

/*
 * Analytics Configuration
 */
export const analyticsConfig = {
  enabled: env.NEXT_PUBLIC_ANALYTICS_ENABLED === true,
  id: env.NEXT_PUBLIC_ANALYTICS_ID,
} as const;

/*
 * Define default viewport settings
 */
export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

/*
 * Define Site Config and export as type
 */
export type SiteConfig = typeof siteConfig;
export const siteConfig = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  author: APP_AUTHOR,
  logo: APP_LOGO,
  url: env.NEXT_PUBLIC_APP_URL,
};
