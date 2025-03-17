import { env } from '~/env';
import { logger } from '~/lib/logger';
import { isDev } from '~/lib/settings';

export interface CertificateConfig {
  rejectUnauthorized: boolean;
}

export class CertificateManager {
  private static instance: CertificateManager;
  private config: CertificateConfig;

  private constructor() {
    this.config = this.initializeConfig();
  }

  public static getInstance(): CertificateManager {
    if (!CertificateManager.instance) {
      CertificateManager.instance = new CertificateManager();
    }

    return CertificateManager.instance;
  }

  public getConfig(): CertificateConfig {
    return this.config;
  }

  private initializeConfig(): CertificateConfig {
    const config: CertificateConfig = {
      rejectUnauthorized: true,
    };

    if (isDev && env.IGNORE_SSL_VERIFICATION) {
      logger.warn('SSL verification disabled in development environment');
      config.rejectUnauthorized = false;
    }

    return config;
  }
}
