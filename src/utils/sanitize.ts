// ============================================
// NEXUS AGENCY — Shared HTML Sanitizer
// ============================================

export function sanitizeHTML(str: string): string {
  if (!str) return '';
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}
