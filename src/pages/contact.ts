import { t, getLanguage } from '../utils/i18n';

export function renderContact() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            ${isAr ? 'قنوات التواصل المباشرة' : 'DIRECT ENGINEERING CHANNELS'}
          </div>
          <h1 class="page-title animate-fade-in">${t('contact.title', 'Contact Engineering')}</h1>
          <p class="page-subtitle animate-fade-in">${t('contact.subtitle', 'Have a project in mind? Our engineering leadership responds within 24 hours.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="contact-grid" style="display:grid;grid-template-columns:1fr 1.2fr;gap:var(--space-10);align-items:start;">
          <!-- Contact Details -->
          <div>
            <h2 style="font-size:var(--font-size-xl);font-weight:800;margin-bottom:var(--space-4);">${isAr ? 'تواصل مباشرة مع مهندسينا' : 'Connect Directly With Our Squad'}</h2>
            <p style="color:var(--text-secondary);font-size:var(--font-size-sm);line-height:var(--line-height-relaxed);margin-bottom:var(--space-8);">${isAr ? 'نحن نسعد بمناقشة الأفكار التقنية الجديدة، تقديم الاستشارات، وتوسيع المنتجات الرقمية عالية الأداء.' : 'We love discussing new technical challenges, architecture reviews, and scaling strategies.'}</p>

            <div style="display:flex;flex-direction:column;gap:var(--space-6);">
              <div class="glass-card" style="padding:var(--space-6);display:flex;align-items:center;gap:var(--space-4);">
                <div style="width:48px;height:48px;border-radius:var(--radius-md);background:linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15));display:flex;align-items:center;justify-content:center;color:var(--accent-primary);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'البريد الإلكتروني للعمل' : 'Direct Email'}</div>
                  <a href="mailto:hello@nexus.agency" style="font-size:var(--font-size-sm);font-weight:700;color:var(--text-primary);">hello@nexus.agency</a>
                </div>
              </div>

              <div class="glass-card" style="padding:var(--space-6);display:flex;align-items:center;gap:var(--space-4);">
                <div style="width:48px;height:48px;border-radius:var(--radius-md);background:linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15));display:flex;align-items:center;justify-content:center;color:var(--accent-primary);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'الهاتف المباشر' : 'Direct Line'}</div>
                  <a href="tel:+1234567890" style="font-size:var(--font-size-sm);font-weight:700;color:var(--text-primary);">+1 (234) 567-890</a>
                </div>
              </div>

              <div class="glass-card" style="padding:var(--space-6);display:flex;align-items:center;gap:var(--space-4);">
                <div style="width:48px;height:48px;border-radius:var(--radius-md);background:linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15));display:flex;align-items:center;justify-content:center;color:var(--accent-primary);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'المقر الرئيسي' : 'Global Headquarters'}</div>
                  <div style="font-size:var(--font-size-sm);font-weight:700;color:var(--text-primary);">San Francisco, CA • Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="glass-card" style="padding:var(--space-8);border-radius:var(--radius-2xl);">
            <form id="contact-form" onsubmit="event.preventDefault();if(window.showToast)window.showToast('Message sent');this.reset();">
              <div class="form-group" style="margin-bottom:var(--space-4);">
                <label class="form-label">${t('contact.form_name', 'Full Name')}</label>
                <input type="text" required class="input" style="width:100%;padding:var(--space-3);" placeholder="${isAr ? 'أدخل اسمك الكامل' : 'Enter your name'}" />
              </div>
              <div class="form-group" style="margin-bottom:var(--space-4);">
                <label class="form-label">${t('contact.form_email', 'Work Email')}</label>
                <input type="email" required class="input" style="width:100%;padding:var(--space-3);" placeholder="hello@nexus.agency" />
              </div>
              <div class="form-group" style="margin-bottom:var(--space-4);">
                <label class="form-label">${t('contact.form_subject', 'Subject / Topic')}</label>
                <input type="text" required class="input" style="width:100%;padding:var(--space-3);" placeholder="${isAr ? 'موضوع الاستفسار' : 'Project Inquiry'}" />
              </div>
              <div class="form-group" style="margin-bottom:var(--space-6);">
                <label class="form-label">${t('contact.form_message', 'Project Details & Requirements')}</label>
                <textarea required class="input" rows="5" style="width:100%;padding:var(--space-3);resize:vertical;" placeholder="${isAr ? 'اكتب تفاصيل مشروعك هنا...' : 'Tell us about your requirements...'}"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-shimmer" style="width:100%;justify-content:center;padding:var(--space-4);">${t('contact.send', 'Send Message to Team')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContact() {}
