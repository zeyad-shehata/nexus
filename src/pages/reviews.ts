import { t, getLanguage } from '../utils/i18n';

const reviewsData = [
  { name: 'Alexander Wright', role: 'CTO, FinEdge Capital', rating: 5, comment: 'Nexus delivered our high-frequency WebGL trading platform ahead of schedule. Their engineering standards are comparable to top Silicon Valley teams.', commentAr: 'سلمت نيكسوس منصة التداول الخاصة بنا قبل الموعد المحدد. معاييرهم الهندسة تضاهي أفضل الفرق في سيليكون فالي.', badge: 'Verified Enterprise Client' },
  { name: 'Dr. Elena Rostova', role: 'Founder, Verdant Health', rating: 5, comment: 'The telemedicine app built by Nexus scaled seamlessly to 500,000 active users with zero downtime. Exceptional attention to security and UX.', commentAr: 'تطبيق الطب عن بعد الذي بنته نيكسوس توسع بسلاسة إلى 500,000 مستخدم نشط دون أي انقطاع. اهتمام استثنائي بالأمان وتجربة المستخدم.', badge: 'Verified Client' },
  { name: 'Marcus Chen', role: 'VP of Product, Luxe Retail Group', rating: 5, comment: 'Our e-commerce conversion rates jumped 250% after launching the headless Next.js platform designed by Nexus.', commentAr: 'ارتفعت معدلات التحويل في متجرنا الإلكتروني بنسبة 250% بعد إطلاق المنصة المصممة من قبل نيكسوس.', badge: 'Verified Client' }
];

export function renderReviews() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></polygon></svg>
            ${isAr ? 'تقييمات وثقة العملاء' : 'VERIFIED CLIENT TESTIMONIALS'}
          </div>
          <h1 class="page-title animate-fade-in">${t('reviews.title', 'Client Reviews & Case Feedback')}</h1>
          <p class="page-subtitle animate-fade-in">${t('reviews.subtitle', 'Read verified reviews from CEOs, CTOs, and Product Directors who build with Nexus.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="reviews-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:var(--space-8);">
          ${reviewsData.map((r, i) => `
            <div class="glass-card" style="padding:var(--space-8);border-radius:var(--radius-2xl);display:flex;flex-direction:column;justify-space-between;">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4);">
                  <div style="color:#fbbf24;font-size:1.1rem;">★★★★★</div>
                  <span class="badge badge-accent" style="font-size:0.7rem;">${isAr ? 'عميل معتمد' : r.badge}</span>
                </div>
                <p style="color:var(--text-secondary);font-size:var(--font-size-sm);line-height:var(--line-height-relaxed);margin-bottom:var(--space-6);font-style:italic;">"${isAr ? r.commentAr : r.comment}"</p>
              </div>
              <div style="padding-top:var(--space-4);border-top:1px solid rgba(255,255,255,0.08);">
                <div style="font-size:var(--font-size-sm);font-weight:800;color:var(--text-primary);">${r.name}</div>
                <div style="font-size:0.75rem;color:var(--text-tertiary);">${r.role}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initReviews() {}
