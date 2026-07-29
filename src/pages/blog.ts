import { apiFetch } from '../utils/api';

const blogPosts = [
  { title: '10 Web Design Trends Dominating 2026', cat: 'Web Design', excerpt: 'Explore the cutting-edge design trends that are shaping the digital landscape this year, from AI-driven interfaces to immersive 3D experiences.', date: 'Jun 5, 2026', read: '8 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>` },
  { title: 'Why Your Brand Needs a Design System', cat: 'Branding', excerpt: "A design system is more than a style guide — it's the foundation for scalable, consistent, and efficient product development.", date: 'Jun 2, 2026', read: '6 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
  { title: 'SEO in 2026: What Actually Works', cat: 'SEO', excerpt: 'With AI-powered search reshaping the landscape, here are the strategies that still drive organic traffic and sustainable growth.', date: 'May 28, 2026', read: '10 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  { title: 'Building Accessible Web Applications', cat: 'Technology', excerpt: "Accessibility isn't optional — it's essential. Learn how to build inclusive digital products that work for everyone.", date: 'May 22, 2026', read: '7 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { title: 'The ROI of Premium UX Design', cat: 'Business Tips', excerpt: "Investment in UX design delivers measurable returns. Here's how to calculate and maximize your design ROI.", date: 'May 18, 2026', read: '5 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
  { title: 'AI-Powered Marketing: A Complete Guide', cat: 'Marketing', excerpt: 'From predictive analytics to automated content creation — how AI is revolutionizing digital marketing strategies.', date: 'May 12, 2026', read: '12 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>` },
  { title: 'Micro-Animations That Boost Engagement', cat: 'Web Design', excerpt: 'Subtle animations can dramatically improve user experience. Learn the principles behind effective micro-interactions.', date: 'May 8, 2026', read: '6 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
  { title: 'Choosing the Right Tech Stack in 2026', cat: 'Technology', excerpt: 'React vs Vue vs Svelte? Node.js vs Go? Navigate the complex landscape of modern web development technologies.', date: 'May 3, 2026', read: '9 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>` },
  { title: 'E-Commerce Conversion Optimization', cat: 'Marketing', excerpt: 'Proven strategies to turn more visitors into customers, from checkout optimization to personalized experiences.', date: 'Apr 28, 2026', read: '8 min', icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>` },
];

function renderBlogPost(p, i) {
  const cat = p.category || p.cat || 'Technology';
  const excerptText = p.excerpt || (p.content ? p.content.slice(0, 120) + '...' : '');
  const dateStr = p.date || new Date(p.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const readTime = p.read || '5 min';
  const icon = p.icon || `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
  const coverImg = p.coverImage || '';

  const visualHtml = coverImg 
    ? `<img src="${coverImg}" style="width:100%; height:200px; object-fit:cover; border-top-left-radius:var(--radius-md); border-top-right-radius:var(--radius-md);" />`
    : `<div class="blog-card-image-placeholder" style="display:flex;align-items:center;justify-content:center;">${icon}</div>`;

  return `
    <div class="blog-card reveal reveal-delay-${(i % 3) + 1}" data-category="${cat}">
      ${visualHtml}
      <div class="blog-card-body">
        <div class="blog-card-category">${cat}</div>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-card-excerpt">${excerptText}</p>
        <div class="blog-card-meta">
          <span style="display:inline-flex;align-items:center;gap:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${dateStr}</span>
          <span style="display:inline-flex;align-items:center;gap:4px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${readTime} read</span>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedPost(p) {
  return `
    <div class="blog-featured reveal" data-category="${p.cat}">
      <div class="blog-featured-image" style="background:linear-gradient(135deg, rgba(124, 92, 252, 0.15), rgba(0, 212, 170, 0.08));display:flex;align-items:center;justify-content:center;">
        <span style="font-size:6rem;">${p.icon}</span>
      </div>
      <div class="blog-featured-content">
        <div class="blog-featured-badge">
          <span class="badge badge-warm">✨ Featured</span>
        </div>
        <h2 class="blog-featured-title">${p.title}</h2>
        <p class="blog-featured-excerpt">${p.excerpt}</p>
        <div class="blog-featured-meta">
          <span>📅 ${p.date}</span>
          <span>⏱️ ${p.read} read</span>
          <span>🏷️ ${p.cat}</span>
        </div>
      </div>
    </div>
  `;
}

export function renderBlog() {
  const categories = ['All', 'Web Design', 'Branding', 'Marketing', 'SEO', 'Business Tips', 'Technology'];
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">? Blog</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Insights & <span class="gradient-text">Articles</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;">Tips, trends, and insights from our team of experts.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Featured Post -->
        ${renderFeaturedPost(featured)}

        <div class="tabs reveal" id="blog-tabs">
          ${categories.map((c, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="filterBlog('${c}')">${c}</button>
          `).join('')}
        </div>

        <div class="blog-grid" id="blog-grid">
          ${rest.map((p, i) => renderBlogPost(p, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function initBlog() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  try {
    const res = await apiFetch('/blog');
    const data = await res.json();
    const dbBlogs = Array.isArray(data) ? data : (data.blogs || []);
    if (res.ok && dbBlogs.length > 0) {
      container.innerHTML = dbBlogs.map((p: any, i: number) => renderBlogPost(p, i)).join('');
    }
  } catch (e) {
    console.warn('?? Could not fetch blogs from API, falling back to static mock data.', e);
  }
}

(window as any).filterBlog = function(category: string) {
  const cards = document.querySelectorAll<HTMLElement>('.blog-card');
  const featured = document.querySelector<HTMLElement>('.blog-featured');
  const btns = document.querySelectorAll('#blog-tabs .tab-btn');
  btns.forEach(b => b.classList.toggle('active', b.textContent === category));
  cards.forEach(card => {
    const show = category === 'All' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
    if (show) card.style.animation = 'scaleIn 0.4s ease forwards';
  });
  if (featured) {
    const showFeatured = category === 'All' || featured.dataset.category === category;
    featured.style.display = showFeatured ? '' : 'none';
  }
};
