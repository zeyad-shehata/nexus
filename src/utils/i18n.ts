// ============================================
// NEXUS AGENCY — Internationalization (i18n)
// ============================================

import { en } from '../translations/en';
import { ar } from '../translations/ar';

export type Language = 'en' | 'ar';

const translations: Record<Language, Record<string, string>> = { en, ar };

let currentLang: Language = (localStorage.getItem('nexus_lang') as Language) || 'en';

export function getLanguage(): Language {
  return currentLang;
}

export function setLanguage(lang: Language) {
  currentLang = lang;
  localStorage.setItem('nexus_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
}

export function t(key: string, fallback?: string): string {
  const dict = translations[currentLang] || translations.en;
  return dict[key] || translations.en[key] || fallback || key;
}

// Initialize html attributes
document.documentElement.setAttribute('lang', currentLang);
document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
