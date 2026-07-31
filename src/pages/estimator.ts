import { t, getLanguage } from '../utils/i18n';

export function renderEstimator() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            ${isAr ? 'حاسبة التكلفة التقديرية' : 'INSTANT SCOPE & COST ESTIMATOR'}
          </div>
          <h1 class="page-title animate-fade-in">${t('estimator.title', 'Project Cost Estimator')}</h1>
          <p class="page-subtitle animate-fade-in">${t('estimator.subtitle', 'Calculate instant estimates tailored to your required technical architecture and features.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container" style="max-width:900px;">
        <div class="estimator-grid" style="display:grid;grid-template-columns:1.5fr 1fr;gap:var(--space-8);align-items:start;">
          <!-- Options -->
          <div class="glass-card" style="padding:var(--space-8);border-radius:var(--radius-2xl);">
            <h3 style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-4);">${isAr ? '1. الميزات والتكاملات البرمجية' : '1. Architecture & Features'}</h3>
            <div class="toggle" style="display:flex;flex-direction:column;gap:var(--space-4);">
              <label class="checkbox-option" style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3);background:rgba(255,255,255,0.03);border-radius:var(--radius-md);cursor:pointer;">
                <span style="font-size:var(--font-size-sm);">${isAr ? 'تطوير منصة ويب تفاعلية (React/Next.js)' : 'Interactive Web App (React / Next.js)'}</span>
                <input type="checkbox" checked class="est-feature" data-cost="2500" onchange="window.calcEstTotal()" />
              </label>
              <label class="checkbox-option" style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3);background:rgba(255,255,255,0.03);border-radius:var(--radius-md);cursor:pointer;">
                <span style="font-size:var(--font-size-sm);">${isAr ? 'تطبيق جوال (iOS & Android)' : 'Mobile Application (Flutter / React Native)'}</span>
                <input type="checkbox" class="est-feature" data-cost="3000" onchange="window.calcEstTotal()" />
              </label>
              <label class="checkbox-option" style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3);background:rgba(255,255,255,0.03);border-radius:var(--radius-md);cursor:pointer;">
                <span style="font-size:var(--font-size-sm);">${isAr ? 'دمج الذكاء الاصطناعي التوليدي (OpenAI / LLM)' : 'Generative AI & Custom LLM Integration'}</span>
                <input type="checkbox" class="est-feature" data-cost="2000" onchange="window.calcEstTotal()" />
              </label>
              <label class="checkbox-option" style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-3);background:rgba(255,255,255,0.03);border-radius:var(--radius-md);cursor:pointer;">
                <span style="font-size:var(--font-size-sm);">${isAr ? 'بوابة دفع إلكترونية وأمان المؤسسات' : 'Stripe Payments & Enterprise Security'}</span>
                <input type="checkbox" class="est-feature" data-cost="1000" onchange="window.calcEstTotal()" />
              </label>
            </div>
          </div>

          <!-- Total summary -->
          <div class="glass-card text-center calculate" style="padding:var(--space-8);border-radius:var(--radius-2xl);border-color:var(--accent-primary);">
            <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'التكلفة التقديرية الإجمالية' : 'Estimated Investment'}</div>
            <div id="est-total-val" style="font-size:3rem;font-weight:900;color:var(--accent-primary);margin:var(--space-4) 0;">$2,500</div>
            <p style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-bottom:var(--space-6);">${isAr ? 'يشمل ضمان اتفاقية مستوى الخدمة 99.99% ودعم الفني' : 'Includes 99.99% SLA Uptime & Dedicated Engineer Deployment.'}</p>
            <a href="./start-project" class="btn btn-primary btn-shimmer" data-link style="width:100%;justify-content:center;padding:var(--space-4);">${isAr ? 'طلب التقدير النهائي' : 'Request Final Quote Proposal'}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

(window as any).calcEstTotal = function() {
  const checkboxes = document.querySelectorAll('.est-feature:checked');
  let total = 0;
  checkboxes.forEach(cb => {
    total += parseInt(cb.getAttribute('data-cost') || '0', 10);
  });
  const el = document.getElementById('est-total-val');
  if (el) {
    el.textContent = `$${total.toLocaleString()}`;
  }
};
(window as any).calculate = (window as any).calcEstTotal;
(window as any).toggleEstFeature = (window as any).calcEstTotal;
