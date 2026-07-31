import { t, getLanguage } from '../utils/i18n';

const trackerStages = [
  { title: 'Project Kickoff' }, { title: 'Architecture Review' }, { title: 'Active Sprint 1' },
  { title: 'Active Sprint 2' }, { title: 'Security Audit' }, { title: 'Staging Release' }, { title: 'Production Launch' }
];

export function renderTracker() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            ${isAr ? 'تتبع المشاريع في الوقت الفعلي' : 'LIVE SPRINT TRACKER'}
          </div>
          <h1 class="page-title animate-fade-in">${t('tracker.title', 'Real-Time Project Tracker')}</h1>
          <p class="page-subtitle animate-fade-in">${t('tracker.subtitle', 'Track your project status, release milestones, and active squad tasks.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container" style="max-width:700px;">
        <div class="glass-card" style="padding:var(--space-8);border-radius:var(--radius-2xl);margin-bottom:var(--space-8);">
          <form onsubmit="event.preventDefault();if(window.trackProject)window.trackProject();" style="display:flex;gap:var(--space-3);">
            <input type="text" id="tracker-input" class="input" style="flex:1;padding:var(--space-4);" placeholder="${t('tracker.input_placeholder', 'Enter your Project ID (e.g. NX-8921)...')}" value="NX-8921" />
            <button type="submit" class="btn btn-primary btn-shimmer" style="padding:var(--space-4) var(--space-6);">${t('tracker.btn_track', 'Track Project')}</button>
          </form>
        </div>

        <div id="tracker-results" class="glass-card timeline timeline-tracker stages" style="padding:var(--space-8);border-radius:var(--radius-2xl);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-6);padding-bottom:var(--space-4);border-bottom:1px solid rgba(255,255,255,0.08);">
            <div>
              <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'مشروع رقم' : 'Project Identifier'}</div>
              <div style="font-size:var(--font-size-lg);font-weight:800;color:var(--text-primary);">NX-8921 • Enterprise Web Platform</div>
            </div>
            <div class="badge badge-accent">${isAr ? 'المرحلة 3: التطوير النشط' : 'Stage 3: Active Development'}</div>
          </div>

          <div class="tracker-steps" style="display:flex;flex-direction:column;gap:var(--space-6);">
            ${trackerStages.map((stage, i) => `
              <div style="display:flex;gap:var(--space-4);align-items:start;">
                <div style="width:32px;height:32px;border-radius:50%;background:${i < 3 ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.8rem;">${i + 1}</div>
                <div>
                  <h4 style="font-size:var(--font-size-sm);font-weight:700;">${stage.title}</h4>
                  <p style="font-size:var(--font-size-xs);color:var(--text-secondary);">${isAr ? 'مرحلة التنفيذ والاختبار المعتمدة' : 'Verified milestone deliverable.'}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initTracker() {
  (window as any).trackProject = function() {
    const isAr = getLanguage() === 'ar';
    if ((window as any).showToast) {
      (window as any).showToast(isAr ? 'تم تحديث بيانات التتبع بنجاح' : 'Project status updated live!');
    }
  };
}
