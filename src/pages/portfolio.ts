import { apiFetch } from '../utils/api';
import { getTechLogo } from '../components/tech-logos';

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
            <div class="service-link" style="font-size:var(--font-size-xs);font-weight:700;">View Case Study →</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderPortfolio() {
  const categories = ['All', 'Web App', 'Mobile', 'E-Commerce', 'Branding', 'AI'];

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">Featured Case Studies</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Enterprise <span class="gradient-text">Portfolio</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:640px;">Deep dive into how Nexus engineered high-scale web platforms, mobile apps, and AI solutions for global clients.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tabs reveal" id="portfolio-tabs">
          ${categories.map((c, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" onclick="filterPortfolio('${c}')">${c}</button>
          `).join('')}
        </div>

        <div class="portfolio-grid" id="portfolio-masonry" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-6);">
          ${projectsData.map((p, i) => renderPortfolioItem(p, i)).join('')}
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox-overlay" id="portfolio-lightbox" onclick="if(event.target===this)closeProjectLightbox()">
      <div class="lightbox-content" id="lightbox-body"></div>
    </div>
  `;
}

export async function initPortfolio() {
  const container = document.getElementById('portfolio-masonry');
  if (!container) return;

  try {
    const res = await apiFetch('/portfolio');
    const data = await res.json();
    const dbProjects = Array.isArray(data) ? data : (data.portfolio || []);
    if (res.ok && dbProjects.length > 0) {
      container.innerHTML = dbProjects.map((p: any, i: number) => renderPortfolioItem(p, i)).join('');
    }
  } catch (e) {
    console.warn('⚠️ Could not fetch portfolio from API, falling back to static mock data.', e);
  }
}

// Lightbox
(window as any).openProjectLightbox = function(index: number) {
  const p = projectsData[index];
  if (!p) return;
  const lb = document.getElementById('portfolio-lightbox');
  const body = document.getElementById('lightbox-body');
  if (!lb || !body) return;

  body.innerHTML = `
    <button class="lightbox-close" onclick="closeProjectLightbox()" aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="lightbox-visual" style="background:linear-gradient(135deg, ${p.color}33, ${p.color}11);display:flex;align-items:center;justify-content:center;padding:var(--space-8);">
      ${p.icon}
    </div>
    <div class="lightbox-header" style="margin-top:var(--space-6);">
      <div class="portfolio-category" style="margin-bottom:var(--space-2);">${p.cat}</div>
      <h2 style="font-size:var(--font-size-2xl);font-weight:800;margin-bottom:var(--space-3);color:var(--text-primary);">${p.title}</h2>
      <p style="color:var(--text-secondary);line-height:var(--line-height-relaxed);">${p.desc}</p>
    </div>
    <div class="lightbox-tech" style="margin:var(--space-4) 0;display:flex;gap:8px;flex-wrap:wrap;">
      ${p.tech.map(t => `<span class="badge badge-subtle">${t}</span>`).join('')}
    </div>
    <div class="lightbox-stats" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--space-4);margin-bottom:var(--space-6);">
      <div class="lightbox-stat glass-card" style="padding:var(--space-4);text-align:center;">
        <div class="lightbox-stat-value gradient-text" style="font-weight:800;font-size:var(--font-size-lg);">${p.metrics}</div>
        <div class="lightbox-stat-label" style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Quantified Result</div>
      </div>
      <div class="lightbox-stat glass-card" style="padding:var(--space-4);text-align:center;">
        <div class="lightbox-stat-value" style="color:var(--accent-secondary);font-weight:800;font-size:var(--font-size-lg);">${p.duration}</div>
        <div class="lightbox-stat-label" style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Timeline</div>
      </div>
      <div class="lightbox-stat glass-card" style="padding:var(--space-4);text-align:center;">
        <div class="lightbox-stat-value" style="color:var(--text-primary);font-weight:700;font-size:var(--font-size-sm);">${p.client}</div>
        <div class="lightbox-stat-label" style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Client Partner</div>
      </div>
    </div>
    ${p.challenge ? `
      <div style="padding:var(--space-5);background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-xl);margin-bottom:var(--space-4);">
        <h4 style="font-weight:700;margin-bottom:var(--space-2);font-size:var(--font-size-xs);color:var(--accent-primary);text-transform:uppercase;letter-spacing:0.05em;">The Challenge</h4>
        <p style="color:var(--text-secondary);font-size:var(--font-size-xs);line-height:var(--line-height-relaxed);">${p.challenge}</p>
      </div>
    ` : ''}
    ${p.solution ? `
      <div style="padding:var(--space-5);background:var(--bg-glass);border:1px solid var(--bg-glass-border);border-radius:var(--radius-xl);margin-bottom:var(--space-6);">
        <h4 style="font-weight:700;margin-bottom:var(--space-2);font-size:var(--font-size-xs);color:var(--accent-secondary);text-transform:uppercase;letter-spacing:0.05em;">Our Architecture & Solution</h4>
        <p style="color:var(--text-secondary);font-size:var(--font-size-xs);line-height:var(--line-height-relaxed);">${p.solution}</p>
      </div>
    ` : ''}
    <div style="text-align:center;">
      <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link style="width:100%;justify-content:center;">Start a Similar Project →</a>
    </div>
  `;

  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
};

(window as any).closeProjectLightbox = function() {
  const lb = document.getElementById('portfolio-lightbox');
  if (lb) lb.classList.remove('active');
  document.body.style.overflow = '';
};

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') (window as any).closeProjectLightbox();
});

// Portfolio filter
(window as any).filterPortfolio = function(category: string) {
  const items = document.querySelectorAll<HTMLElement>('.masonry-item');
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(b => b.classList.toggle('active', b.textContent === category));
  items.forEach(item => {
    const show = category === 'All' || item.dataset.category === category;
    item.style.display = show ? '' : 'none';
  });
};
