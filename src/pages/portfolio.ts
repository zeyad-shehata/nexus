import { getTechLogo } from '../components/tech-logos';
import { t, getLanguage } from '../utils/i18n';

const projectsData = [
  {
    title: 'Quantum Finance', cat: 'Web App',
    desc: 'A cutting-edge fintech platform with real-time analytics, AI-powered insights, and seamless payment processing.',
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL'], icon: getTechLogo('React', 48),
    metrics: '+340% Conversion', color: '#7c5cfc', client: 'FinEdge Capital', duration: '3 months',
    challenge: 'Building a high-frequency real-time trading dashboard handling 10K+ concurrent WebSockets with sub-10ms latency.',
    solution: 'Engineered event-driven React components with WebGL chart rendering and an AWS Lambda serverless backend.'
  },
  {
    title: 'Verdant Health', cat: 'Mobile',
    desc: 'A comprehensive health and wellness app with AI-driven personalized recommendations and telemedicine.',
    tech: ['Flutter', 'Firebase', 'TensorFlow', 'Python'], icon: getTechLogo('Flutter', 48),
    metrics: '500K+ Active Users', color: '#00d4aa', client: 'Verdant Health Inc.', duration: '4 months',
    challenge: 'Integrating HIPAA-compliant encrypted video streaming alongside edge-compiled AI health risk models.',
    solution: 'Implemented WebRTC peer-to-peer encryption with WebAssembly-compiled TensorFlow Lite models on mobile devices.'
  },
  {
    title: 'Luxe Fashion', cat: 'E-Commerce',
    desc: 'Premium fashion e-commerce with AR try-on, personalized styling, and global shipping integration.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS', 'GraphQL'], icon: getTechLogo('Next.js', 48),
    metrics: '+250% Revenue', color: '#ff6b9d', client: 'Luxe Retail Group', duration: '2.5 months',
    challenge: 'Creating a web-based AR try-on experience that operates smoothly across mobile Safari and Android Chrome.',
    solution: 'Built WebGL 3D avatar rendering pipelines with head tracking and instant Stripe one-click checkout.'
  },
  {
    title: 'Neural Analytics', cat: 'AI',
    desc: 'An intelligent data analytics dashboard with predictive modeling and natural language querying.',
    tech: ['Python', 'TensorFlow', 'React', 'OpenAI'], icon: getTechLogo('TensorFlow', 48),
    metrics: '20hrs/wk Saved', color: '#ffa94d', client: 'NeuralWave AI', duration: '5 months',
    challenge: 'Training domain-specific custom LLM models on private enterprise data without data leakage risks.',
    solution: 'Deployed air-gapped vector store embeddings with RAG (Retrieval-Augmented Generation) infrastructure.'
  },
  {
    title: 'Bloom Beauty', cat: 'Branding',
    desc: 'Complete brand identity redesign for a luxury beauty brand including logo, packaging, and digital presence.',
    tech: ['Figma', 'TypeScript', 'Tailwind CSS'], icon: getTechLogo('Figma', 48),
    metrics: '180% Growth', color: '#e879f9', client: 'Bloom Beauty Co.', duration: '6 weeks',
    challenge: 'Reimagining brand heritage into a digital design system with sub-50ms page load speeds.',
    solution: 'Designed complete atomic design tokens and headless CMS component library.'
  },
  {
    title: 'CloudSync Pro', cat: 'Web App',
    desc: 'Enterprise cloud management platform with automated deployment, monitoring, and cost optimization.',
    tech: ['Vue.js', 'AWS', 'Docker', 'PostgreSQL'], icon: getTechLogo('AWS', 48),
    metrics: '60% Cost Reduced', color: '#38bdf8', client: 'CloudSync Inc.', duration: '4 months',
    challenge: 'Multi-cloud resource orchestration across AWS, Azure, and GCP with automated cost anomaly alerts.',
    solution: 'Built unified GraphQL telemetry aggregator with real-time Kubernetes cluster auto-scaling.'
  }
];

function renderPortfolioItem(p: any, i: number) {
  const isAr = getLanguage() === 'ar';
  const cat = p.category || p.cat || 'Web App';
  const descText = p.description || p.desc;
  const tech = p.technologies || p.tech || ['React', 'Next.js'];
  const metricsText = p.metrics || 'Successful Deployment';
  const iconText = p.icon || '';
  const colorText = p.color || '#7c5cfc';
  const coverImg = p.coverImage || '';

  const visualHtml = coverImg 
    ? `<img src="${coverImg}" style="width:100%; height:220px; object-fit:cover;" />`
    : `<div style="height:220px;background:linear-gradient(135deg, ${colorText}22, ${colorText}11);display:flex;align-items:center;justify-content:center;transition:transform 0.5s;">${iconText}</div>`;

  return `
    <div class="masonry-item reveal reveal-delay-${(i % 3) + 1}" data-category="${cat}" onclick="openProjectLightbox(${i})" style="cursor:pointer;">
      <div class="glass-card" style="padding:0;overflow:hidden;height:100%;display:flex;flex-direction:column;justify-content:space-between;">
        ${visualHtml}
        <div style="padding:var(--space-6);flex:1;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-2);">
              <span class="portfolio-category">${cat}</span>
              <span class="badge badge-subtle" style="font-weight:700;color:var(--accent-secondary);">${metricsText}</span>
            </div>
            <h3 style="font-size:var(--font-size-md);font-weight:700;margin-bottom:var(--space-2);color:var(--text-primary);">${p.title || ''}</h3>
            <p style="font-size:var(--font-size-xs);color:var(--text-secondary);line-height:var(--line-height-relaxed);margin-bottom:var(--space-4);">${descText}</p>
          </div>
          <div>
            <div class="portfolio-tech" style="margin-bottom:var(--space-4);">
              ${tech.map((t: string) => `<span class="badge">${t}</span>`).join('')}
            </div>
            <div class="service-link" style="font-size:var(--font-size-xs);font-weight:700;">${isAr ? 'عرض دراسة الحالة ←' : 'View Case Study →'}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderPortfolio() {
  const isAr = getLanguage() === 'ar';
  const categories = isAr ? ['الكل', 'تطوير الويب', 'تطبيقات الجوال', 'التجارة الإلكترونية', 'الهوية', 'الذكاء الاصطناعي'] : ['All', 'Web App', 'Mobile', 'E-Commerce', 'Branding', 'AI'];

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            ${isAr ? 'دراسات الحالة والتطبيقات' : 'ENTERPRISE CASE STUDIES'}
          </div>
          <h1 class="page-title animate-fade-in">${t('portfolio.title', 'Featured Case Studies')}</h1>
          <p class="page-subtitle animate-fade-in">${t('portfolio.subtitle', 'Explore our selected projects showcasing engineering excellence.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="tabs portfolio-tabs" id="portfolio-filter-tabs">
          <button class="tab-btn active" data-filter="All">${isAr ? 'جميع المشاريع' : 'All Projects'}</button>
          <button class="tab-btn" data-filter="Web App">${isAr ? 'تطوير الويب' : 'Web App'}</button>
          <button class="tab-btn" data-filter="Mobile">${isAr ? 'تطبيقات الجوال' : 'Mobile'}</button>
          <button class="tab-btn" data-filter="E-Commerce">${isAr ? 'التجارة الإلكترونية' : 'E-Commerce'}</button>
          <button class="tab-btn" data-filter="Branding">${isAr ? 'الهوية البصرية' : 'Branding'}</button>
          <button class="tab-btn" data-filter="AI">${isAr ? 'الذكاء الاصطناعي' : 'AI & Data'}</button>
        </div>

        <!-- Portfolio Masonry Grid -->
        <div class="masonry-grid" id="portfolio-masonry-grid" style="margin-top:var(--space-8);">
          ${projectsData.map((p, i) => renderPortfolioItem(p, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initPortfolio() {
  const tabs = document.querySelectorAll('#portfolio-filter-tabs .tab-btn');
  const items = document.querySelectorAll('#portfolio-masonry-grid .masonry-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'All' || filter === cat) {
          (item as HTMLElement).style.display = 'block';
        } else {
          (item as HTMLElement).style.display = 'none';
        }
      });
    });
  });
}

(window as any).openProjectLightbox = function(index: number) {
  const p = projectsData[index];
  if (!p) return;
  const isAr = getLanguage() === 'ar';

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop visible';
  modal.style.zIndex = '100000';
  modal.innerHTML = `
    <div class="glass-card modal-content" style="max-width:650px;width:90%;padding:var(--space-8);position:relative;">
      <button onclick="this.closest('.modal-backdrop').remove()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:1.5rem;">&times;</button>
      <div style="font-size:var(--font-size-xs);color:var(--accent-primary);font-weight:700;margin-bottom:var(--space-2);">${p.cat} • ${p.client}</div>
      <h2 style="font-size:var(--font-size-xl);font-weight:800;margin-bottom:var(--space-4);">${p.title}</h2>
      <p style="color:var(--text-secondary);font-size:var(--font-size-sm);line-height:var(--line-height-relaxed);margin-bottom:var(--space-6);">${p.desc}</p>
      
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-6);background:rgba(255,255,255,0.03);padding:var(--space-4);border-radius:var(--radius-md);">
        <div>
          <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'التحدي الهندسي' : 'Challenge'}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:4px;">${p.challenge}</div>
        </div>
        <div>
          <div style="font-size:0.75rem;color:var(--text-tertiary);">${isAr ? 'الحل المطور' : 'Solution'}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:4px;">${p.solution}</div>
        </div>
      </div>

      <div style="display:flex;gap:var(--space-3);justify-content:flex-end;">
        <button onclick="this.closest('.modal-backdrop').remove()" class="btn btn-secondary">${isAr ? 'إغلاق' : 'Close'}</button>
        <a href="./start-project" class="btn btn-primary" data-link onclick="this.closest('.modal-backdrop').remove()">${isAr ? 'طلب مشروع مماثل' : 'Request Similar Project'}</a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};
