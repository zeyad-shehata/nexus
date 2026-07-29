// ============================================
// NEXUS AGENCY — Frontend Centralized Logger
// ============================================

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class AppLogger {
  private isDev = (typeof import.meta !== 'undefined' && import.meta.env?.DEV) ?? true;

  info(message: string, ...args: any[]) {
    console.log(`[INFO] ${new Date().toISOString()} — ${message}`, ...args);
  }

  warn(message: string, ...args: any[]) {
    console.warn(`[WARN] ${new Date().toISOString()} — ${message}`, ...args);
  }

  error(message: string, ...args: any[]) {
    console.error(`[ERROR] ${new Date().toISOString()} — ${message}`, ...args);
  }

  debug(message: string, ...args: any[]) {
    if (this.isDev) {
      console.debug(`[DEBUG] ${new Date().toISOString()} — ${message}`, ...args);
    }
  }
}

export const logger = new AppLogger();
