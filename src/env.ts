import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * @see https://create.t3.gg/en/usage/env-variables
 */
export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    /** Node.js Configuration */
    NODE_TLS_REJECT_UNAUTHORIZED: z.string().optional(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    PORT: z.coerce.number().default(3000),
    IGNORE_SSL_VERIFICATION: z
      .string()
      .transform(val => val.toLowerCase() === 'true')
      .default('true'),

    /** Database Configuration */
    DATABASE_URL: z
      .string()
      .url()
      .refine(
        url =>
          url.startsWith('postgres://') ||
          url.startsWith('mysql://') ||
          url.startsWith('sqlite://'),
        { message: 'DATABASE_URL must be a valid database connection string' }
      ),

    /** Email Configuration */
    EMAIL_USERNAME: z
      .string()
      .email({ message: 'Invalid email address format' }),
    EMAIL_APP_PASSWORD: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),

    /** Authentication Configuration */
    AUTH_URL: z.string().url().optional(),
    AUTH_SECRET: z.string().min(32).optional(),

    /** API Keys and External Services */
    // Add any API keys or external service configurations here
    // Example: OPENAI_API_KEY: z.string().min(1),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    /** Application Configuration */
    NEXT_PUBLIC_APP_AUTHOR: z.string().default('NextMotion Team'),
    NEXT_PUBLIC_APP_DESCRIPTION: z
      .string()
      .default('A powerful Next.js application'),
    NEXT_PUBLIC_APP_LOGO: z.string().default('/logo.svg'),
    NEXT_PUBLIC_APP_NAME: z.string().default('NextMotion'),
    NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),

    /** Logging Configuration */
    NEXT_PUBLIC_LOG_LEVEL: z
      .enum(['debug', 'info', 'warn', 'error'])
      .default('info'),
    NEXT_PUBLIC_SHOW_LOGGER: z
      .string()
      .transform(val => val.toLowerCase() === 'true')
      .default('false'),

    /** Analytics Configuration */
    NEXT_PUBLIC_ANALYTICS_ENABLED: z
      .string()
      .transform(val => val.toLowerCase() === 'true')
      .default('false')
      .optional(),
    NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    /** Node.js Configuration */
    NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_TLS_REJECT_UNAUTHORIZED,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    IGNORE_SSL_VERIFICATION: process.env.IGNORE_SSL_VERIFICATION,

    /** Database Configuration */
    DATABASE_URL: process.env.DATABASE_URL,

    /** Email Configuration */
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,

    /** Authentication Configuration */
    AUTH_URL: process.env.AUTH_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,

    /** Application Configuration */
    NEXT_PUBLIC_APP_AUTHOR: process.env.NEXT_PUBLIC_APP_AUTHOR,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_APP_LOGO: process.env.NEXT_PUBLIC_APP_LOGO,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

    /** Logging Configuration */
    NEXT_PUBLIC_LOG_LEVEL: process.env.NEXT_PUBLIC_LOG_LEVEL,
    NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,

    /** Analytics Configuration */
    NEXT_PUBLIC_ANALYTICS_ENABLED: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
