// ============================================
// NEXUS AGENCY — Client Global Error Handler
// ============================================

import { logger } from '../utils/logger';

export function initGlobalErrorHandler() {
  window.addEventListener('error', (event) => {
    logger.error('Unhandled Global Error', event.error || event.message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    logger.warn('Unhandled Rejection', event.reason);
  });
}
