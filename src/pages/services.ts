import { apiFetch } from '../utils/api';
import { serviceIcons } from '../components/ui-icons';

function renderServiceCard(s: any, i: number) {
  const priceStr = s.startingPrice ? `$${s.startingPrice}` : (s.price || 'Custom Quote');
  const benefits = s.benefits || ['SEO Optimized', 'Lightning Fast', 'Fully Responsive', 'Analytics Dashboard'];
  const tech = s.tech || ['React', 'Next.js', 'Node.js', 'Prisma'];
  const descText = s.description || s.desc;
  const sName = s.title || s.name;

  return `
    <div class="service-enterprise-card reveal reveal-delay-${(i % 2) + 1}">
      <div class="service-enterprise-header">
        <div class="service-icon-box">
          ${s.icon}
        </div>
        <div class="service-pricing-badge">
          <span class="pricing-label">Starting at</span>
          <span class="pricing-value">${priceStr}</span>
        </div>
      </div>

      <h3 class="service-enterprise-title">${sName}</h3>
      <p class="service-enterprise-desc">${descText}</p>

      <div class="service-benefits-section">
        <div class="benefits-title">Key Capabilities</div>
        <div class="benefits-grid">
          ${benefits.map((b: string) => `
            <div class="benefit-item">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="service-tech-list">
        ${tech.map((t: string) => `<span class="badge badge-subtle">${t}</span>`).join('')}
      </div>

      <div class="service-card-footer">
        <a href="./start-project" class="btn btn-primary btn-shimmer" data-link style="width:100%;justify-content:center;">
          Start Your Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `;
}

export function renderServices() {
  const services = [
    {
      icon: serviceIcons.web({ size: 28 }), name: 'Website Development', desc: 'Custom-built, high-performance websites tailored to your brand and business goals. From landing pages to complex web applications.',
      benefits: ['SEO Optimized', 'Lightning Fast', 'Fully Responsive', 'CMS Integration', 'Analytics Dashboard', 'Enterprise Security'],
      tech: ['React', 'Next.js', 'Vue', 'Node.js', 'TypeScript', 'Prisma'],
      price: '$1,500'
    },
    {
      icon: serviceIcons.mobile({ size: 28 }), name: 'Mobile Applications', desc: 'Native and cross-platform mobile apps that provide seamless, fast user experiences across iOS and Android.',
      benefits: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Ready', 'Performance Optimized', 'Biometric Auth'],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      price: '$3,000'
    },
    {
      icon: serviceIcons.ecommerce({ size: 28 }), name: 'E-Commerce Stores', desc: 'Powerful online stores designed to maximize conversion rates, streamline checkout, and scale global sales.',
      benefits: ['Payment Integration', 'Inventory Management', 'Multi-Currency', 'Order Tracking', 'Custom Analytics', 'Instant Checkout'],
      tech: ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Sanity', 'Tailwind'],
      price: '$2,000'
    },
    {
      icon: serviceIcons.uiux({ size: 28 }), name: 'UI/UX Design', desc: 'Research-driven, pixel-perfect design systems and interactive prototypes crafted for maximum retention.',
      benefits: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Usability Testing', 'Design Systems', 'WCAG Accessibility'],
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Tokens'],
      price: '$1,000'
    },
    {
      icon: serviceIcons.graphic({ size: 28 }), name: 'Graphic Design', desc: 'Eye-catching visual assets, marketing materials, and digital graphics that elevate your brand visual identity.',
      benefits: ['Brand Consistency', 'Print & Digital', 'Social Media Kits', 'Marketing Collateral', 'Custom Vector Art', '3D Graphics'],
      tech: ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Blender', 'Cinema 4D'],
      price: '$500'
    },
    {
      icon: serviceIcons.branding({ size: 28 }), name: 'Branding & Identity', desc: 'Complete corporate brand identity systems that make your business unforgettable and drive market leadership.',
      benefits: ['Logo Design Systems', 'Brand Guidelines', 'Color Palettes', 'Typography Kits', 'Brand Strategy', 'Stationery Assets'],
      tech: ['Figma', 'Illustrator', 'InDesign', 'Photoshop', 'Brand Strategy'],
      price: '$2,000'
    },
    {
      icon: serviceIcons.ai({ size: 28 }), name: 'AI Solutions', desc: 'Leverage artificial intelligence, custom LLMs, and predictive analytics to automate operations and drive growth.',
      benefits: ['Intelligent Chatbots', 'Predictive Analytics', 'Workflow Automation', 'Custom LLM Fine-Tuning', 'NLP Processing', 'Computer Vision'],
      tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS', 'PyTorch'],
      price: '$5,000'
    },
    {
      icon: serviceIcons.marketing({ size: 28 }), name: 'Digital Marketing', desc: 'Data-driven marketing strategies, technical SEO, and targeted campaigns to scale qualified traffic and revenue.',
      benefits: ['Technical SEO', 'Social Media Strategy', 'High-ROI PPC Campaigns', 'Content Marketing', 'Conversion Funnels', 'Real-Time Analytics'],
      tech: ['Google Ads', 'Meta Ads', 'Ahrefs', 'HubSpot', 'Mailchimp', 'GA4'],
      price: '$800/mo'
    }
  ];

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">Our Services</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Enterprise Digital <span class="gradient-text">Solutions</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:640px;">Engineering world-class digital products that help ambitious companies scale, dominate, and lead their markets.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-detail-grid" id="services-list-container">
          ${services.map((s, i) => renderServiceCard(s, i)).join('')}
        </div>
      </div>
    </section>

    ${pricingPackagesSection()}

    ${servicesFAQSection()}

    <section class="section cta-section" style="background:var(--bg-primary);">
      <div class="cta-glow"></div>
      <div class="container">
        <div class="cta-content reveal">
          <h2 class="cta-title">Ready to Architect Your Next Project?</h2>
          <p class="cta-subtitle">Schedule a technical consultation with our engineering team for a free quote and architecture roadmap.</p>
          <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link>Schedule Discovery Call →</a>
        </div>
      </div>
    </section>
  `;
}

function pricingPackagesSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: 'one-time',
      popular: false,
      desc: 'Ideal for early-stage startups and small businesses needing high-converting landing pages or MVP websites.',
      features: ['Up to 5 Pages', 'Custom UI/UX Design', 'Fully Responsive Layout', 'Basic SEO Setup', '2 Weeks Turnaround', '30 Days Support']
    },
    {
      name: 'Business',
      price: '$3,500',
      period: 'one-time',
      popular: true,
      desc: 'Designed for growing brands requiring custom web applications, CMS integration, and scalable architecture.',
      features: ['Up to 15 Pages / Features', 'Custom React/Next.js Architecture', 'CMS & API Integration', 'Advanced SEO & Performance', 'Dedicated Project Manager', '4 Weeks Turnaround', '60 Days Support']
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      period: 'starting at',
      popular: false,
      desc: 'Complete full-stack platforms, mobile apps, or custom AI solutions with enterprise security and SLA guarantees.',
      features: ['Full-Stack Web & Mobile App', 'Custom Microservices Architecture', 'AI & Database Integration', 'SOC2 / GDPR Security Standards', 'Dedicated Tech Team & PM', '24/7 SLA & Priority Support']
    },
    {
      name: 'Custom Solution',
      price: 'Custom',
      period: 'flexible scoping',
      popular: false,
      desc: 'Bespoke software development, legacy system modernization, and dedicated engineering squad augmentation.',
      features: ['Dedicated Squad (Dev + QA + PM)', 'Custom Scope & Milestones', 'Architecture & Security Audit', 'Multi-Cloud Infrastructure', 'Custom SLA & Maintenance']
    }
  ];

  return `
    <section class="section" id="pricing-packages" style="background:var(--bg-secondary);">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Transparent Investment</span>
          <h2 class="section-title">Enterprise <span class="gradient-text">Pricing Packages</span></h2>
          <p class="section-subtitle">Flexible engagement models tailored to your business stage, budget, and growth velocity.</p>
        </div>
        <div class="pricing-grid">
          ${tiers.map((t, i) => `
            <div class="glass-card pricing-card ${t.popular ? 'popular-pricing' : ''} reveal reveal-delay-${i + 1}">
              ${t.popular ? '<div class="popular-badge">Most Popular</div>' : ''}
              <div class="pricing-header">
                <h3 class="pricing-title">${t.name}</h3>
                <div class="pricing-amount">
                  <span class="price-val">${t.price}</span>
                  <span class="price-period">/ ${t.period}</span>
                </div>
                <p class="pricing-desc">${t.desc}</p>
              </div>
              <div class="pricing-features">
                ${t.features.map((f: string) => `
                  <div class="pricing-feature-item">
                    <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
              <div class="pricing-action">
                <a href="./start-project" class="btn ${t.popular ? 'btn-primary btn-shimmer' : 'btn-secondary'}" data-link style="width:100%;justify-content:center;">
                  ${t.name === 'Custom Solution' ? 'Request Proposal' : 'Choose ' + t.name} →
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function servicesFAQSection() {
  const faqs = [
    { q: 'What is the typical timeline for an enterprise web application?', a: 'Most custom web applications take 4 to 8 weeks from discovery to production deployment, depending on system complexity and integrations.' },
    { q: 'Do you offer ongoing maintenance and SLA support?', a: 'Yes! We provide 24/7 SLA monitoring, weekly updates, security patches, and cloud infrastructure management.' },
    { q: 'How do you handle IP ownership and codebase transfer?', a: 'You retain 100% full intellectual property rights and full source code access via private GitHub repository from day one.' },
    { q: 'Can you work with our existing in-house engineering team?', a: 'Absolutely. We regularly embed as specialized squads or staff augmentation to accelerate feature delivery.' }
  ];

  return `
    <section class="section" id="services-faq">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Common Questions</span>
          <h2 class="section-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
          <p class="section-subtitle">Everything you need to know about partnering with Nexus for digital engineering.</p>
        </div>
        <div class="faq-accordion accordion reveal" style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:var(--space-4);">
          ${faqs.map((f) => `
            <div class="glass-card accordion-item faq-item" onclick="this.classList.toggle('active')">
              <div class="accordion-header" style="padding:var(--space-5) var(--space-6);display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-weight:700;color:var(--text-primary);">
                <span>${f.q}</span>
                <span class="accordion-icon">+</span>
              </div>
              <div class="accordion-content" style="padding:0 var(--space-6) var(--space-5);color:var(--text-secondary);font-size:var(--font-size-xs);line-height:var(--line-height-relaxed);">
                ${f.a}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export async function initServices() {
  const container = document.getElementById('services-list-container');
  if (!container) return;

  try {
    const res = await apiFetch('/services');
    const data = await res.json();
    const dbServices = Array.isArray(data) ? data : (data.services || []);
    if (res.ok && dbServices.length > 0) {
      const enriched = dbServices.map((s: any) => {
        const key = (s.slug || s.name || s.title || '').toLowerCase();
        let icon = serviceIcons.web({ size: 28 });
        if (key.includes('mobile') || key.includes('app')) icon = serviceIcons.mobile({ size: 28 });
        else if (key.includes('commerce') || key.includes('shop') || key.includes('store')) icon = serviceIcons.ecommerce({ size: 28 });
        else if (key.includes('ui') || key.includes('ux') || key.includes('design')) icon = serviceIcons.uiux({ size: 28 });
        else if (key.includes('graphic')) icon = serviceIcons.graphic({ size: 28 });
        else if (key.includes('brand')) icon = serviceIcons.branding({ size: 28 });
        else if (key.includes('ai') || key.includes('intelligence')) icon = serviceIcons.ai({ size: 28 });
        else if (key.includes('market') || key.includes('seo')) icon = serviceIcons.marketing({ size: 28 });

        return { ...s, icon };
      });
      container.innerHTML = enriched.map((s: any, i: number) => renderServiceCard(s, i)).join('');
    }
  } catch (e) {
    console.warn('⚠️ Could not fetch services from API, falling back to static mock data.', e);
  }
}
