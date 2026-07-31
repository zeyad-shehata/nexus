import { t, getLanguage } from '../utils/i18n';

const blogPosts = [
  { title: '10 Web Design Trends Dominating 2026', cat: 'Web Design', catAr: 'تصميم الويب', excerpt: 'Explore the cutting-edge design trends shaping the digital landscape from AI-driven interfaces to 3D experiences.', date: 'Jun 5, 2026', read: '8 min', readAr: '8 دقائق', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>` },
  { title: 'Why Your Brand Needs a Design System', cat: 'Branding', catAr: 'الهوية', excerpt: 'A design system is the foundation for scalable, consistent, and efficient product development.', date: 'Jun 2, 2026', read: '6 min', readAr: '6 دقائق', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
  { title: 'SEO in 2026: What Actually Works', cat: 'SEO', catAr: 'محركات البحث', excerpt: 'With AI-powered search reshaping the landscape, here are the strategies that still drive organic growth.', date: 'May 28, 2026', read: '10 min', readAr: '10 دقائق', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  { title: 'Building Accessible Web Applications', cat: 'Technology', catAr: 'الهندسة', excerpt: "Learn how to build inclusive digital products that work seamlessly for everyone.", date: 'May 22, 2026', read: '7 min', readAr: '7 دقائق', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { title: 'The ROI of Premium UX Design', cat: 'Business', catAr: 'الأعمال', excerpt: "Investment in UX design delivers measurable returns. Learn how to calculate and maximize your design ROI.", date: 'May 18, 2026', read: '5 min', readAr: '5 دقائق', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
  { title: 'AI-Powered Marketing: A Complete Guide', cat: 'Marketing', catAr: 'التسويق', excerpt: 'From predictive analytics to automated content creation — how AI is revolutionizing digital marketing.', date: 'May 12, 2026', read: '12 min', readAr: '12 دقيقة', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>` },
  { title: 'Micro-Animations That Boost Engagement', cat: 'Web Design', catAr: 'تصميم الويب', excerpt: 'Subtle animations can dramatically improve user experience.', date: 'May 8, 2026', read: '6 min', readAr: '6 دقائق' },
  { title: 'Choosing the Right Tech Stack in 2026', cat: 'Technology', catAr: 'الهندسة', excerpt: 'Navigate the complex landscape of modern web development technologies.', date: 'May 3, 2026', read: '9 min', readAr: '9 دقائق' },
  { title: 'E-Commerce Conversion Optimization', cat: 'Marketing', catAr: 'التسويق', excerpt: 'Proven strategies to turn more visitors into customers.', date: 'Apr 28, 2026', read: '8 min', readAr: '8 دقائق' }
];

function renderBlogPost(p: any, i: number) {
  const isAr = getLanguage() === 'ar';
  const cat = isAr ? (p.catAr || p.cat) : p.cat;
  const readTime = isAr ? (p.readAr || p.read) : p.read;
  const icon = p.icon || `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

  return `
    <div class="blog-card reveal reveal-delay-${(i % 3) + 1}" data-category="${p.cat}">
      <div class="blog-card-image-placeholder" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1));height:180px;">${icon}</div>
      <div class="blog-card-body" style="padding:var(--space-6);">
        <div class="blog-card-category" style="font-size:0.75rem;color:var(--accent-secondary);font-weight:700;margin-bottom:var(--space-2);">${cat}</div>
        <h3 class="blog-card-title" style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-2);">${p.title}</h3>
        <p class="blog-card-excerpt" style="font-size:var(--font-size-xs);color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-4);">${p.excerpt}</p>
        <div class="blog-card-meta" style="font-size:0.75rem;color:var(--text-tertiary);display:flex;gap:var(--space-4);">
          <span>📅 ${p.date}</span>
          <span>⏱️ ${readTime}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderBlog() {
  const isAr = getLanguage() === 'ar';
  const categories = isAr ? ['الكل', 'تصميم الويب', 'الهوية', 'التسويق', 'محركات البحث', 'الأعمال', 'الهندسة'] : ['All', 'Web Design', 'Branding', 'Marketing', 'SEO', 'Business', 'Technology'];

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container text-center">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            ${isAr ? 'رؤيات وتقارير رقمية' : 'DIGITAL INSIGHTS & REPORTS'}
          </div>
          <h1 class="page-title animate-fade-in">${t('blog.title', 'Engineering & Product Insights')}</h1>
          <p class="page-subtitle animate-fade-in">${t('blog.subtitle', 'Thought leadership, architecture patterns, and software strategy from our team.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="tabs portfolio-tabs" id="blog-tabs">
          ${categories.map((c, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="window.filterBlog('${c}')">${c}</button>
          `).join('')}
        </div>

        <div class="blog-grid posts" id="blog-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:var(--space-6);margin-top:var(--space-8);">
          ${blogPosts.map((p, i) => renderBlogPost(p, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initBlog() {
  (window as any).filterBlog = function(cat: string) {
    const isAr = getLanguage() === 'ar';
    const allLabel = isAr ? 'الكل' : 'All';
    const items = document.querySelectorAll('#blog-grid .blog-card');

    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      if (cat === allLabel || cat === 'All' || itemCat === cat) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });

    const buttons = document.querySelectorAll('#blog-tabs .tab-btn');
    buttons.forEach(btn => {
      if (btn.textContent?.trim() === cat) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };
}
