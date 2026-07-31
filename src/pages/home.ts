// ============================================
// NEXUS AGENCY — Home Page
// Premium Edition v2.0
// ============================================

import { getTechLogo } from '../components/tech-logos';
import { featureIcons, serviceIcons } from '../components/ui-icons';
import { t } from '../utils/i18n';

export function renderHome() {
  return `
    ${heroSection()}
    ${techTicker()}
    ${statsSection()}
    ${whyChooseUs()}
    ${servicesPreview()}
    ${portfolioPreview()}
    ${testimonialsSection()}
    ${ctaSection()}
  `;
}

function heroSection() {
  // Generate particles
  const particles = Array.from({ length: 25 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = 8 + Math.random() * 12;
    const size = 2 + Math.random() * 4;
    const opacity = 0.2 + Math.random() * 0.4;
    return `<div class="hero-particle" style="left:${left}%;width:${size}px;height:${size}px;animation-duration:${duration}s;animation-delay:${delay}s;opacity:${opacity};"></div>`;
  }).join('');

  return `
    <section class="hero" id="hero">
      <div class="hero-bg"></div>
      <div class="hero-particles">${particles}</div>
      <div class="hero-shapes">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
      </div>
      <div class="container">
        <div class="hero-grid" style="display:grid;grid-template-columns:1.05fr 0.95fr;align-items:center;gap:var(--space-10);">
          
          <!-- Left Content -->
          <div class="hero-content" style="text-align:left;">
            <div class="hero-badge reveal">
              <span class="hero-badge-dot"></span>
              <span data-i18n="hero.badge">${t('hero.badge', 'Available for new projects')}</span>
            </div>
            <h1 class="hero-title reveal reveal-delay-1" style="font-size:clamp(2.5rem, 4.5vw, 4.2rem);line-height:1.1;letter-spacing:-0.03em;margin-bottom:var(--space-4);">
              <span data-i18n="hero.title_prefix">${t('hero.title_prefix', 'Turn Your Vision')}</span><br>
              <span data-i18n="hero.title_gradient">${t('hero.title_gradient', 'Into Reality.')}</span>
            </h1>
            <p class="hero-subtitle reveal reveal-delay-2" style="font-size:var(--font-size-md);line-height:1.6;color:var(--text-secondary);margin-bottom:var(--space-8);" data-i18n="hero.subtitle">
              ${t('hero.subtitle', 'We design and develop premium software solutions, high-scale web platforms, and AI systems that help high-growth companies scale and dominate.')}
            </p>
            <div class="hero-buttons reveal reveal-delay-3" style="display:flex;gap:var(--space-4);flex-wrap:wrap;margin-bottom:var(--space-8);">
              <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link data-i18n="hero.cta_start">
                ${t('hero.cta_start', 'Start Your Project')}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="./portfolio" class="btn btn-secondary btn-large" data-link data-i18n="hero.cta_explore">
                ${t('hero.cta_explore', 'Explore Solutions')}
              </a>
            </div>

            <!-- Enterprise Floating Trust Cards -->
            <div class="hero-kpis reveal reveal-delay-4" style="display:flex;align-items:center;gap:var(--space-3);flex-wrap:wrap;">
              <div class="glass-card hero-kpi-badge" style="padding:8px 14px;display:flex;align-items:center;gap:8px;border-radius:10px;border:1px solid rgba(255,255,255,0.08);background:rgba(18,18,28,0.5);backdrop-filter:blur(12px);">
                <span style="width:8px;height:8px;border-radius:50%;background:var(--accent-secondary);box-shadow:0 0 10px rgba(16,185,129,0.8);"></span>
                <span style="font-size:0.8125rem;font-weight:600;color:var(--text-primary);" data-i18n="hero.kpi_uptime">${t('hero.kpi_uptime', '99.99% Uptime SLA')}</span>
              </div>
              <div class="glass-card hero-kpi-badge" style="padding:8px 14px;display:flex;align-items:center;gap:8px;border-radius:10px;border:1px solid rgba(255,255,255,0.08);background:rgba(18,18,28,0.5);backdrop-filter:blur(12px);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                <span style="font-size:0.8125rem;font-weight:600;color:var(--text-primary);" data-i18n="hero.kpi_soc2">${t('hero.kpi_soc2', 'SOC2 Type II Certified')}</span>
              </div>
              <div class="glass-card hero-kpi-badge" style="padding:8px 14px;display:flex;align-items:center;gap:8px;border-radius:10px;border:1px solid rgba(255,255,255,0.08);background:rgba(18,18,28,0.5);backdrop-filter:blur(12px);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent-tertiary)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span style="font-size:0.8125rem;font-weight:600;color:var(--text-primary);" data-i18n="hero.kpi_apps">${t('hero.kpi_apps', '150+ Apps Delivered')}</span>
              </div>
            </div>
          </div>

          <!-- Right Visual: Enterprise Software Workspace Mockup -->
          <div class="hero-visual reveal reveal-delay-2" style="position:relative;">
            <div class="glass-card" style="padding:0;overflow:hidden;border-radius:16px;border:1px solid rgba(255,255,255,0.12);box-shadow:0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.15);background:rgba(12,12,20,0.85);backdrop-filter:blur(24px);">
              
              <!-- Window Control Header -->
              <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.08);">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="width:11px;height:11px;border-radius:50%;background:#ff5f56;display:inline-block;"></span>
                  <span style="width:11px;height:11px;border-radius:50%;background:#ffbd2e;display:inline-block;"></span>
                  <span style="width:11px;height:11px;border-radius:50%;background:#27c93f;display:inline-block;"></span>
                  <span style="font-size:11px;font-weight:700;color:var(--text-tertiary);margin-left:8px;letter-spacing:0.05em;" data-i18n="hero.mockup_title">${t('hero.mockup_title', 'NEXUS PLATFORM // CORE ENGINE V2.4')}</span>
                </div>
                <div style="display:flex;align-items:center;gap:6px;padding:3px 10px;border-radius:20px;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);">
                  <span style="width:6px;height:6px;border-radius:50%;background:var(--accent-secondary);animation:pulseRing 2s infinite;"></span>
                  <span style="font-size:10px;font-weight:700;color:var(--accent-secondary);" data-i18n="hero.mockup_status">${t('hero.mockup_status', 'PRODUCTION SQUAD ACTIVE')}</span>
                </div>
              </div>

              <!-- Dashboard Analytics Stats Grid -->
              <div style="padding:18px;display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;border-bottom:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.01);">
                <div style="padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);">
                  <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;" data-i18n="hero.mau">${t('hero.mau', 'Monthly Active Users')}</div>
                  <div style="font-size:18px;font-weight:800;color:var(--text-primary);margin-top:2px;">2.4M</div>
                  <div style="font-size:10px;color:var(--accent-secondary);font-weight:700;margin-top:2px;">+28.4% ↑</div>
                </div>
                <div style="padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);">
                  <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;" data-i18n="hero.latency">${t('hero.latency', 'Edge Latency')}</div>
                  <div style="font-size:18px;font-weight:800;color:var(--accent-primary-light);margin-top:2px;">14ms</div>
                  <div style="font-size:10px;color:var(--accent-secondary);font-weight:700;margin-top:2px;">99.99% SLA</div>
                </div>
                <div style="padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);">
                  <div style="font-size:10px;color:var(--text-tertiary);font-weight:600;" data-i18n="hero.security_score">${t('hero.security_score', 'Security Audit')}</div>
                  <div style="font-size:18px;font-weight:800;color:var(--text-primary);margin-top:2px;">99.8/100</div>
                  <div style="font-size:10px;color:var(--accent-secondary);font-weight:700;margin-top:2px;">SOC2 Passed</div>
                </div>
              </div>

              <!-- Live Architecture Code snippet preview -->
              <div style="padding:18px;background:rgba(5,5,10,0.95);font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;font-size:12px;line-height:1.6;color:#a9b7c6;">
                <div style="color:#64748b;margin-bottom:6px;">// Nexus Enterprise Engine Architecture</div>
                <div><span style="color:#c792ea;">import</span> { <span style="color:#82aaff;">EnterpriseEngine</span> } <span style="color:#c792ea;">from</span> <span style="color:#ecc48d;">'@nexus/core'</span>;</div>
                <div style="margin-top:4px;"><span style="color:#c792ea;">export const</span> <span style="color:#ffcb6b;">app</span> = <span style="color:#82aaff;">EnterpriseEngine</span>.<span style="color:#82aaff;">deploy</span>({</div>
                <div style="padding-left:16px;"><span style="color:#f78c6c;">architecture</span>: <span style="color:#ecc48d;">'microservices'</span>,</div>
                <div style="padding-left:16px;"><span style="color:#f78c6c;">security</span>: <span style="color:#ecc48d;">'SOC2-Type-II'</span>,</div>
                <div style="padding-left:16px;"><span style="color:#f78c6c;">sla</span>: <span style="color:#ecc48d;">'99.99%'</span>,</div>
                <div style="padding-left:16px;"><span style="color:#f78c6c;">aiEngine</span>: <span style="color:#82aaff;">true</span></div>
                <div>});</div>
              </div>
            </div>

            <!-- Floating Overlay Accent Badges -->
            <div class="glass-card" style="position:absolute;top:-16px;right:-16px;padding:10px 16px;border-radius:12px;background:rgba(16,16,28,0.85);border:1px solid rgba(99,102,241,0.3);box-shadow:0 12px 32px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;backdrop-filter:blur(16px);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary-light)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--text-primary);">Enterprise Security</div>
                <div style="font-size:9px;color:var(--accent-secondary);font-weight:600;">SOC2 Type II Certified</div>
              </div>
            </div>

            <div class="glass-card" style="position:absolute;bottom:-16px;left:-16px;padding:10px 16px;border-radius:12px;background:rgba(16,16,28,0.85);border:1px solid rgba(16,185,129,0.3);box-shadow:0 12px 32px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;backdrop-filter:blur(16px);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--text-primary);">High Performance</div>
                <div style="font-size:9px;color:var(--text-secondary);font-weight:600;">Global Edge Infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Downward Scroll Indicator -->
      <div class="hero-scroll-indicator scroll-indicator-down" onclick="window.scrollTo({top: window.innerHeight - 80, behavior: 'smooth'})" style="cursor:pointer;">
        <span data-i18n="hero.scroll">${t('hero.scroll', 'Scroll down')}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  `;
}
function techTicker() {
  const techs = [
    { name: 'OpenAI' },
    { name: 'GraphQL' },
    { name: 'Tailwind' },
    { name: 'PostgreSQL' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Vue.js' },
    { name: 'TypeScript' },
    { name: 'Python' },
    { name: 'Firebase' },
    { name: 'AWS' },
    { name: 'TensorFlow' },
    { name: 'Flutter' },
    { name: 'Figma' },
    { name: 'Docker' },
    { name: 'Node.js' }
  ];

  const items = techs.map(t => `
    <div class="ticker-item" style="display:inline-flex;align-items:center;gap:10px;padding:8px 20px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;white-space:nowrap;">
      <span class="ticker-icon" style="display:flex;align-items:center;">${getTechLogo(t.name, 22)}</span>
      <span style="font-size:0.875rem;font-weight:600;color:var(--text-secondary);">${t.name}</span>
    </div>
  `).join('');

  return `
    <div class="tech-ticker tech-ticker-container" style="padding:var(--space-6) 0;border-y:1px solid var(--border-subtle);background:rgba(5,5,9,0.5);">
      <div class="tech-ticker-track">
        ${items}${items}
      </div>
    </div>
  `;
}

function statsSection() {
  const stats = [
    { count: 150, suffix: '+', label: 'Projects Completed' },
    { count: 120, suffix: '+', label: 'Happy Clients' },
    { count: 8, suffix: '+', label: 'Years of Experience' },
    { count: 99, suffix: '%', label: 'Client Satisfaction' }
  ];

  return `
    <section class="section stats-section" id="stats">
      <div class="container">
        <div class="stats-grid">
          ${stats.map((s, i) => `
            <div class="stat-card glass-card reveal reveal-delay-${i + 1}">
              <div class="stat-number" data-count="${s.count}" data-suffix="${s.suffix}">0${s.suffix}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
function whyChooseUs() {
  const features = [
    { icon: featureIcons.experience(), title: '8+ Years Experience', desc: 'Engineered high-scale software solutions for startups, scaleups, and enterprise organizations.' },
    { icon: featureIcons.projects(), title: '150+ Projects Delivered', desc: 'Proven track record of delivering complex web apps, mobile solutions, and AI platforms on time.' },
    { icon: featureIcons.clients(), title: '120+ Global Clients', desc: 'Trusted by founders and product leaders across North America, Europe, and Asia.' },
    { icon: featureIcons.satisfaction(), title: '99% Client Satisfaction', desc: 'Relentless focus on user experience, performance, clean architecture, and measurable ROI.' },
    { icon: featureIcons.secure(), title: 'Enterprise Security', desc: 'SOC2 & GDPR compliant development practices to safeguard user data and private credentials.' },
    { icon: featureIcons.agile(), title: 'Agile Methodology', desc: 'Weekly sprint demos, continuous deployment pipelines, and complete project transparency.' },
    { icon: featureIcons.pm(), title: 'Dedicated Project Manager', desc: 'Single point of contact with direct Slack/Teams access for seamless collaboration.' },
    { icon: featureIcons.support(), title: 'Long-Term Support', desc: 'Post-launch maintenance, SLAs, infrastructure scaling, and continuous feature updates.' }
  ];

  return `
    <section class="section" id="why-us">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Why Choose Nexus</span>
          <h2 class="section-title">Engineered For <span class="gradient-text">Excellence</span></h2>
          <p class="section-subtitle">We combine deep technical expertise with product design mastery to build products users love.</p>
        </div>
        <div class="features-grid-8">
          ${features.map((f, i) => `
            <div class="glass-card feature-card reveal reveal-delay-${(i % 4) + 1}">
              <div class="feature-icon">${f.icon}</div>
              <h3 class="feature-title">${f.title}</h3>
              <p class="feature-desc">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function techStackSection() {
  const categories = [
    {
      name: 'Frontend & UI Engineering',
      techs: [
        { name: 'React', category: 'UI Framework', desc: 'Component architecture and state management.', badge: 'Core Stack', logo: getTechLogo('React', 28) },
        { name: 'Next.js', category: 'Full-Stack React', desc: 'Server-side rendering, SSG, and App Router.', badge: 'Core Stack', logo: getTechLogo('Next.js', 28) },
        { name: 'TypeScript', category: 'Typed JS', desc: 'Type safety and enterprise code maintainability.', badge: 'Enterprise Standard', logo: getTechLogo('TypeScript', 28) },
        { name: 'Tailwind CSS', category: 'Utility CSS', desc: 'Design tokens and responsive layout engine.', badge: 'Core Stack', logo: getTechLogo('Tailwind CSS', 28) }
      ]
    },
    {
      name: 'Backend, Cloud & Databases',
      techs: [
        { name: 'Node.js', category: 'Server Runtime', desc: 'Asynchronous event-driven backend microservices.', badge: 'Core Stack', logo: getTechLogo('Node.js', 28) },
        { name: 'PostgreSQL', category: 'Relational DB', desc: 'ACID-compliant data persistence and indexing.', badge: 'Enterprise Standard', logo: getTechLogo('PostgreSQL', 28) },
        { name: 'AWS', category: 'Cloud Infrastructure', desc: 'Serverless compute, S3, and CloudFront CDN.', badge: 'Production Ready', logo: getTechLogo('AWS', 28) },
        { name: 'Docker', category: 'Containerization', desc: 'Isolated containers and Kubernetes deployment.', badge: 'Enterprise Standard', logo: getTechLogo('Docker', 28) }
      ]
    },
    {
      name: 'Mobile & AI Engineering',
      techs: [
        { name: 'Flutter', category: 'Cross-Platform App', desc: 'High-performance native mobile compilation.', badge: 'Core Stack', logo: getTechLogo('Flutter', 28) },
        { name: 'Python', category: 'AI & Data Science', desc: 'Machine learning pipelines and data analysis.', badge: 'Core Stack', logo: getTechLogo('Python', 28) },
        { name: 'OpenAI', category: 'Generative AI', desc: 'Custom GPT models and LLM API integrations.', badge: 'Production Ready', logo: getTechLogo('OpenAI', 28) },
        { name: 'GraphQL', category: 'API Architecture', desc: 'Typed schema queries and efficient fetching.', badge: 'Enterprise Standard', logo: getTechLogo('GraphQL', 28) }
      ]
    }
  ];

  return `
    <section class="section" id="tech-stack" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Technology Stack</span>
          <h2 class="section-title">Built With <span class="gradient-text">Industry Standards</span></h2>
          <p class="section-subtitle">We leverage enterprise-grade frameworks and cloud infrastructure to ensure security, performance, and long-term maintainability.</p>
        </div>
        <div class="tech-stack-container">
          ${categories.map((cat, ci) => `
            <div class="tech-category-block reveal reveal-delay-${ci + 1}">
              <h3 class="tech-category-title">${cat.name}</h3>
              <div class="tech-grid">
                ${cat.techs.map((t) => `
                  <div class="glass-card tech-card">
                    <div class="tech-card-header">
                      <div class="tech-icon">${t.logo}</div>
                      <span class="badge badge-subtle">${t.badge}</span>
                    </div>
                    <div class="tech-name">${t.name}</div>
                    <div class="tech-meta">${t.category}</div>
                    <p class="tech-desc">${t.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function processTimeline() {
  const steps = [
    { num: '01', title: 'Discovery & Audit', desc: 'We analyze your requirements, business objectives, and technical constraints to define project scope.', duration: 'Week 1' },
    { num: '02', title: 'Architecture & Planning', desc: 'We design system architecture, technical specs, user journeys, and project milestones.', duration: 'Week 1-2' },
    { num: '03', title: 'UI/UX Design', desc: 'We create high-fidelity interactive Figma prototypes, design systems, and component tokens.', duration: 'Week 2-3' },
    { num: '04', title: 'Agile Development', desc: 'Clean, type-safe code implementation with continuous integration and weekly demo builds.', duration: 'Week 4-7' },
    { num: '05', title: 'QA & Security Audit', desc: 'Automated testing, load testing, security vulnerability scans, and cross-browser QA.', duration: 'Week 7-8' },
    { num: '06', title: 'Production Deployment', desc: 'Zero-downtime deployment, CDN caching, database migration, and domain setup.', duration: 'Launch' },
    { num: '07', title: '24/7 SLA & Growth', desc: 'Proactive monitoring, regular updates, maintenance, and continuous optimization.', duration: 'Ongoing' }
  ];

  return `
    <section class="section" id="process-workflow">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Proven Methodology</span>
          <h2 class="section-title">Our <span class="gradient-text">Development Process</span></h2>
          <p class="section-subtitle">A transparent, structured workflow engineered to deliver high-impact digital products on time and on budget.</p>
        </div>
        <div class="timeline-container reveal">
          <div class="timeline-grid">
            ${steps.map((s, i) => `
              <div class="timeline-card glass-card reveal reveal-delay-${(i % 3) + 1}">
                <div class="timeline-badge">${s.num}</div>
                <div class="timeline-header">
                  <h3 class="timeline-title">${s.title}</h3>
                  <span class="timeline-duration">${s.duration}</span>
                </div>
                <p class="timeline-desc">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function trustSection() {
  const points = [
    { icon: featureIcons.secure(), title: 'Enterprise Security', desc: 'SOC2 type II & GDPR compliant development workflows with automated vulnerability scanning.' },
    { icon: featureIcons.fast(), title: '99.9% Uptime Guarantee', desc: 'Reliable cloud-native architecture deployed across multi-region edge locations.' },
    { icon: featureIcons.quality(), title: 'Rigorous Code Audits', desc: 'Strict TypeScript typing, unit tests, end-to-end testing, and peer code reviews.' },
    { icon: featureIcons.support(), title: '24/7 Dedicated SLA', desc: 'Direct Slack/Teams channel with senior engineers for rapid response SLAs.' }
  ];

  return `
    <section class="section" id="trust-guarantee" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="trust-banner glass-card reveal">
          <div class="trust-banner-header">
            <span class="section-label">Institutional Credibility</span>
            <h2 class="section-title">Enterprise Standards <span class="gradient-text">Built In</span></h2>
            <p class="section-subtitle" style="margin:0 auto;max-width:600px;">Why Fortune 500s and scaling startups trust Nexus for mission-critical software.</p>
          </div>
          <div class="trust-grid">
            ${points.map((p) => `
              <div class="trust-card">
                <div class="trust-icon-box">${p.icon}</div>
                <h3 class="trust-title">${p.title}</h3>
                <p class="trust-desc">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function servicesPreview() {
  const services = [
    { icon: serviceIcons.web({ size: 28 }), name: 'Website Development', desc: 'Custom websites built with modern frameworks and best practices.', price: '$1,500' },
    { icon: serviceIcons.mobile({ size: 28 }), name: 'Mobile Applications', desc: 'Native and cross-platform apps for iOS and Android.', price: '$3,000' },
    { icon: serviceIcons.ecommerce({ size: 28 }), name: 'E-Commerce Stores', desc: 'Powerful online stores that convert visitors into customers.', price: '$2,000' },
    { icon: serviceIcons.uiux({ size: 28 }), name: 'UI/UX Design', desc: 'Intuitive interfaces designed for maximum user engagement.', price: '$1,000' },
    { icon: serviceIcons.graphic({ size: 28 }), name: 'Graphic Design', desc: 'Stunning visual assets that elevate your brand identity.', price: '$500' },
    { icon: serviceIcons.branding({ size: 28 }), name: 'Branding & Identity', desc: 'Complete brand identity systems that make you unforgettable.', price: '$2,000' },
    { icon: serviceIcons.ai({ size: 28 }), name: 'AI Solutions', desc: 'Intelligent automation and AI-powered tools for your business.', price: '$5,000' },
    { icon: serviceIcons.marketing({ size: 28 }), name: 'Digital Marketing', desc: 'Data-driven strategies to grow your reach and revenue.', price: '$800/mo' }
  ];

  return `
    <section class="section" id="services-preview" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Enterprise Capabilities</span>
          <h2 class="section-title">Engineered For <span class="gradient-text">Scale</span></h2>
          <p class="section-subtitle">End-to-end software engineering and digital transformation solutions built for ambitious brands.</p>
        </div>
        <div class="services-grid">
          ${services.map((s, i) => `
            <div class="glass-card service-card reveal reveal-delay-${(i % 4) + 1}" onclick="window.history.pushState({},'','/services');window.dispatchEvent(new PopStateEvent('popstate'))">
              <div class="service-card-top">
                <div class="service-icon-box">${s.icon}</div>
                <span class="service-price-pill">${s.price}</span>
              </div>
              <h3 class="service-name">${s.name}</h3>
              <p class="service-desc">${s.desc}</p>
              <div class="service-footer">
                <span class="service-link">Explore Solution →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function portfolioPreview() {
  const projects = [
    { title: 'Quantum Finance', category: 'Web Application', tech: ['React', 'Node.js', 'AWS'], color: '#7c5cfc', icon: getTechLogo('React', 48) },
    { title: 'Verdant Health', category: 'Mobile App', tech: ['Flutter', 'Firebase', 'TensorFlow'], color: '#00d4aa', icon: getTechLogo('Flutter', 48) },
    { title: 'Luxe Fashion', category: 'E-Commerce', tech: ['Next.js', 'Stripe', 'Sanity'], color: '#ff6b9d', icon: getTechLogo('Next.js', 48) },
    { title: 'Neural Analytics', category: 'AI Platform', tech: ['Python', 'TensorFlow', 'React'], color: '#ffa94d', icon: getTechLogo('TensorFlow', 48) }
  ];

  return `
    <section class="section" id="portfolio-preview">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Featured Work</span>
          <h2 class="section-title">Our <span class="gradient-text">Portfolio</span></h2>
          <p class="section-subtitle">Selected projects that showcase our expertise and commitment to excellence.</p>
        </div>
        <div class="portfolio-grid">
          ${projects.map((p, i) => `
            <div class="portfolio-card reveal reveal-delay-${(i % 2) + 1}">
              <div class="portfolio-image-wrapper">
                <div class="portfolio-image" style="height:280px;background:linear-gradient(135deg, ${p.color}22, ${p.color}11);display:flex;align-items:center;justify-content:center;">
                  ${p.icon}
                </div>
                <div class="portfolio-overlay">
                  <a href="./portfolio" class="btn btn-primary btn-shimmer" data-link>View Details</a>
                </div>
              </div>
              <div class="portfolio-info">
                <div class="portfolio-category">${p.category}</div>
                <h3 class="portfolio-title">${p.title}</h3>
                <div class="portfolio-tech">
                  ${p.tech.map(t => `<span class="badge">${t}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:var(--space-10);" class="reveal">
          <a href="./portfolio" class="btn btn-secondary btn-large" data-link>View All Projects →</a>
        </div>
      </div>
    </section>
  `;
}

function testimonialsSection() {
  const testimonials = [
    { name: 'Sarah Johnson', company: 'TechVentures Inc.', initials: 'SJ', quote: 'Nexus transformed our online presence completely. The attention to detail and the quality of design exceeded our expectations. Our conversion rate increased by 340% within the first month.', rating: 5 },
    { name: 'Michael Chen', company: 'GrowthLab', initials: 'MC', quote: 'Working with Nexus was the best investment we made for our startup. They delivered a beautiful, fast, and scalable platform that our users absolutely love. Highly recommend!', rating: 5 },
    { name: 'Emma Williams', company: 'Luxe Retail', initials: 'EW', quote: 'The e-commerce platform they built for us is stunning. Sales increased 250% after launch. The team is professional, responsive, and truly cares about delivering the best result.', rating: 5 },
    { name: 'David Park', company: 'NeuralWave AI', initials: 'DP', quote: 'Their AI solutions expertise is exceptional. They built a custom dashboard that saves our team 20+ hours per week. The design is world-class and the code quality is impeccable.', rating: 5 },
    { name: 'Lisa Zhang', company: 'Bloom Beauty', initials: 'LZ', quote: 'From branding to website to mobile app — Nexus handled everything flawlessly. They are a true partner who understands business needs and translates them into beautiful products.', rating: 5 }
  ];

  const starIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#ffa94d" stroke="#ffa94d" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const starsSvg = Array.from({ length: 5 }, () => starIcon).join('');

  return `
    <section class="section testimonials-section" id="testimonials" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Testimonials</span>
          <h2 class="section-title">What Our <span class="gradient-text">Clients Say</span></h2>
          <p class="section-subtitle">Don't just take our word for it — hear from some of our amazing clients.</p>
        </div>
        <div style="overflow:hidden;" class="reveal" id="testimonial-wrapper">
          <div class="testimonial-slider" id="testimonial-slider">
            ${testimonials.map(t => `
              <div class="glass-card testimonial-card">
                <div class="stars" style="margin-bottom:var(--space-4);display:flex;gap:4px;">${starsSvg}</div>
                <p class="testimonial-quote">${t.quote}</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">${t.initials}</div>
                  <div>
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-company">${t.company}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="testimonial-controls reveal">
          <button class="testimonial-btn" onclick="slideTestimonials(-1)" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div class="testimonial-dots" id="testimonial-dots">
            ${testimonials.map((_, i) => `<div class="testimonial-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></div>`).join('')}
          </div>
          <button class="testimonial-btn" onclick="slideTestimonials(1)" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

function ctaSection() {
  return `
    <section class="section cta-section" id="cta">
      <div class="cta-glow"></div>
      <div class="container">
        <div class="cta-content reveal">
          <span class="section-label">Ready to Start?</span>
          <h2 class="cta-title">Let's Build Something <span class="gradient-text">Extraordinary</span></h2>
          <p class="cta-subtitle">Your vision deserves a world-class digital presence. Let's make it happen together.</p>
          <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link>
            Let's Build Your Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}

// Typing effect
function initTypingEffect() {
  const words = ['websites', 'mobile apps', 'AI solutions', 'brands', 'platforms', 'experiences'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const el = document.getElementById('typing-text');
  if (!el) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      el.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = currentWord.substring(0, charIndex);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }
  setTimeout(type, 1500);
}

// Testimonial slider logic (exposed globally)
let currentSlide = 0;
let autoSlideInterval: ReturnType<typeof setInterval>;
let isPaused = false;

(window as any).slideTestimonials = function(dir: number) {
  const slider = document.getElementById('testimonial-slider');
  if (!slider) return;
  const cards = slider.children as HTMLCollectionOf<HTMLElement>;
  const total = cards.length;
  currentSlide = (currentSlide + dir + total) % total;
  const cardWidth = cards[0].offsetWidth + 24; // gap
  slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  updateDots();
};

(window as any).goToTestimonial = function(i: number) {
  const slider = document.getElementById('testimonial-slider');
  if (!slider) return;
  currentSlide = i;
  const cards = slider.children as HTMLCollectionOf<HTMLElement>;
  const cardWidth = cards[0].offsetWidth + 24;
  slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
  updateDots();
};

function updateDots() {
  const dots = document.querySelectorAll('.testimonial-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

// Pause on hover
document.addEventListener('mouseover', (e: MouseEvent) => {
  if ((e.target as HTMLElement).closest('#testimonial-wrapper')) isPaused = true;
});
document.addEventListener('mouseout', (e: MouseEvent) => {
  if ((e.target as HTMLElement).closest('#testimonial-wrapper')) isPaused = false;
});

// Auto-slide
setInterval(() => {
  if (document.getElementById('testimonial-slider') && !isPaused) {
    (window as any).slideTestimonials(1);
  }
}, 5000);

// Init typing on page load — called from router
export function initHomePage() {
  initTypingEffect();
}

