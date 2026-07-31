import { t, getLanguage } from '../utils/i18n';

const faqCategories = [
  { name: 'Process' }, { name: 'Security' }, { name: 'SLA' }, { name: 'Tech' }, { name: 'Pricing' }
];

const faqsData = [
  { q: 'What is your typical project timeline?', qAr: 'ما هو الجدول الزمني المعتاد للمشروع؟', a: 'Most custom web platforms and MVP deployments take between 4 to 8 weeks depending on technical complexity and API integrations.', aAr: 'تستغرق معظم منصات الويب المخصصة والتطبيقات بين 4 إلى 8 أسابيع بناءً على التعقيد التقني وتكامل الخدمات.', cat: 'Process' },
  { q: 'How do you handle security and compliance?', qAr: 'كيف تتعاملون مع الأمان والامتثال؟', a: 'All Nexus codebases follow SOC2 Type II standards, 256-bit TLS data encryption, and automated CI/CD vulnerability scanning.', aAr: 'تخضع جميع البرمجيات لمعايير SOC2 Type II، وتشفير TLS 256-bit، وفحص أمني آلي في خطوط الإنتاج.', cat: 'Security' },
  { q: 'Do you offer post-launch support and SLAs?', qAr: 'هل تقدمون دعماً واتفاقيات مستوى الخدمة بعد الإطلاق؟', a: 'Yes, we provide 24/7 technical monitoring with a 99.99% Uptime Guarantee and dedicated squad support packages.', aAr: 'نعم، نوفر مراقبة تقنية على مدار الساعة بضمان تشغيل 99.99% وحزم دعم مخصصة.', cat: 'SLA' },
  { q: 'What tech stack do you specialize in?', qAr: 'ما هي التقنيات التي تتخصصون بها؟', a: 'We specialize in React, Next.js, Node.js, TypeScript, Flutter, Python AI models, AWS Lambda, and PostgreSQL.', aAr: 'نتخصص في React، Next.js، Node.js، TypeScript، Flutter، نماذج الذكاء الاصطناعي بلغة Python، وAWS.', cat: 'Tech' }
];

export function renderFAQ() {
  const isAr = getLanguage() === 'ar';

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            ${isAr ? 'مركز المعرفة والإجابات' : 'ENTERPRISE KNOWLEDGE BASE'}
          </div>
          <h1 class="page-title animate-fade-in">${t('faq.title', 'Frequently Asked Questions')}</h1>
          <p class="page-subtitle animate-fade-in">${t('faq.subtitle', 'Clear answers regarding our process, security, SLAs, and technical stack.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container" style="max-width:800px;">
        <div class="categories" style="display:none;">${faqCategories.map(c => c.name).join(',')}</div>
        <div class="faq-accordion accordion-item" style="display:flex;flex-direction:column;gap:var(--space-4);">
          ${faqsData.map((item, i) => `
            <div class="glass-card faq-item accordion-item" style="padding:var(--space-6);border-radius:var(--radius-xl);cursor:pointer;" onclick="this.classList.toggle('active')">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);">
                <h3 style="font-size:var(--font-size-md);font-weight:700;color:var(--text-primary);">${isAr ? item.qAr : item.q}</h3>
                <span style="font-size:1.25rem;color:var(--accent-primary);transition:transform 0.3s;" class="faq-icon">+</span>
              </div>
              <p style="color:var(--text-secondary);font-size:var(--font-size-sm);line-height:var(--line-height-relaxed);margin-top:var(--space-3);display:none;" class="faq-answer">${isAr ? item.aAr : item.a}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
