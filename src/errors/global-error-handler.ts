// ============================================
// NEXUS AGENCY — Client Global Error Handler
// ============================================

export function initGlobalErrorHandler() {
  window.addEventListener('error', (event) => {
    console.error('⚠️ [Global Error]:', event.error || event.message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.warn('⚠️ [Unhandled Rejection]:', event.reason);
  });
}
