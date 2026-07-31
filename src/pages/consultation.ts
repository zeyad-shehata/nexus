import { t, getLanguage } from '../utils/i18n';

export function renderConsultation() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${isAr ? 'حجز جلسة استكشافية' : 'STRATEGIC ARCHITECTURE CALL'}
          </div>
          <h1 class="page-title animate-fade-in">${t('consultation.title', 'Book Engineering Consultation')}</h1>
          <p class="page-subtitle animate-fade-in">${t('consultation.subtitle', 'Schedule a 30-minute strategic discovery call with our Lead Architect.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container" style="max-width:850px;">
        <div class="glass-card" style="padding:var(--space-10);border-radius:var(--radius-2xl);">
          <form onsubmit="event.preventDefault();if(window.showToast)window.showToast('${isAr ? 'تم حجز الاستشارة بنجاح!' : 'Consultation booked successfully!'}');this.reset();">
            <h3 style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-4);">${isAr ? '1. اختر نوع الاستشارة' : '1. Select Consultation Focus'}</h3>
            <div class="meetings" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:var(--space-4);margin-bottom:var(--space-8);">
              <label class="radio-option" style="padding:var(--space-4);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);cursor:pointer;display:flex;align-items:center;gap:10px;">
                <input type="radio" name="consultation-type" checked />
                <span>Zoom Architecture Review</span>
              </label>
              <label class="radio-option" style="padding:var(--space-4);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);cursor:pointer;display:flex;align-items:center;gap:10px;">
                <input type="radio" name="consultation-type" />
                <span>Zoom AI Integration Strategy</span>
              </label>
            </div>

            <!-- Calendar & Time Slots -->
            <h3 style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-4);">${isAr ? '2. اختيار الموعد والوقت' : '2. Date & Time Selection'}</h3>
            <div class="calendar calendar-grid" style="display:grid;grid-template-columns:repeat(7, 1fr);gap:8px;margin-bottom:var(--space-6);">
              <div class="calendar-day" style="padding:10px;text-align:center;background:rgba(255,255,255,0.05);border-radius:var(--radius-sm);">Mon 10</div>
              <div class="calendar-day" style="padding:10px;text-align:center;background:rgba(255,255,255,0.05);border-radius:var(--radius-sm);">Tue 11</div>
              <div class="calendar-day" style="padding:10px;text-align:center;background:var(--accent-primary);color:#fff;border-radius:var(--radius-sm);">Wed 12</div>
            </div>

            <div class="slots" style="display:flex;gap:var(--space-3);margin-bottom:var(--space-8);">
              <div class="time-slot" style="padding:8px 16px;background:rgba(255,255,255,0.05);border-radius:var(--radius-md);cursor:pointer;">10:00 AM EST</div>
              <div class="time-slot" style="padding:8px 16px;background:var(--accent-primary);color:#fff;border-radius:var(--radius-md);cursor:pointer;">02:00 PM EST</div>
            </div>

            <h3 style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-4);">${isAr ? '3. بيانات التواصل' : '3. Your Contact Information'}</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-8);">
              <div class="form-group">
                <label class="form-label">${isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                <input type="text" required class="input" style="width:100%;padding:var(--space-3);" placeholder="${isAr ? 'اسمك' : 'Your name'}" />
              </div>
              <div class="form-group">
                <label class="form-label">${isAr ? 'البريد الإلكتروني للعمل' : 'Work Email'}</label>
                <input type="email" required class="input" style="width:100%;padding:var(--space-3);" placeholder="${isAr ? 'name@company.com' : 'name@company.com'}" />
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-shimmer" style="width:100%;justify-content:center;padding:var(--space-4);">${isAr ? 'تأكيد وحجز الجلسة' : 'Confirm & Schedule Consultation'}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}
