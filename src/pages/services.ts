import { apiFetch } from '../utils/api';
import { serviceIcons } from '../components/ui-icons';

function renderServiceCard(s, i) {
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
          ${benefits.map(b => `
            <div class="benefit-item">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${b}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="service-tech-list">
        ${tech.map(t => `<span class="badge badge-subtle">${t}</span>`).join('')}
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
      price: '$1,500',
      faq: [
        { q: 'How long does a website take?', a: 'Typically 2-6 weeks depending on complexity and features required.' },
        { q: 'Do you provide hosting?', a: 'Yes, we offer managed hosting with 99.9% uptime guarantee.' },
      ]
    },
    {
      icon: serviceIcons.mobile({ size: 28 }), name: 'Mobile Applications', desc: 'Native and cross-platform mobile apps that provide seamless, fast user experiences across iOS and Android.',
      benefits: ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Ready', 'Performance Optimized', 'Biometric Auth'],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      price: '$3,000',
      faq: [
        { q: 'iOS or Android first?', a: 'We recommend cross-platform development with Flutter or React Native for cost efficiency.' },
        { q: 'Do you handle app store submission?', a: 'Yes, we handle the entire submission process for both App Store and Google Play.' },
      ]
    },
    {
      icon: serviceIcons.ecommerce({ size: 28 }), name: 'E-Commerce Stores', desc: 'Powerful online stores designed to maximize conversion rates, streamline checkout, and scale global sales.',
      benefits: ['Payment Integration', 'Inventory Management', 'Multi-Currency', 'Order Tracking', 'Custom Analytics', 'Instant Checkout'],
      tech: ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Sanity', 'Tailwind'],
      price: '$2,000',
      faq: [
        { q: 'Which payment gateways?', a: 'We integrate Stripe, PayPal, Apple Pay, Google Pay, and regional providers.' },
        { q: 'Can I manage products myself?', a: 'Absolutely! We build an intuitive admin panel for complete control.' },
      ]
    },
    {
      icon: serviceIcons.uiux({ size: 28 }), name: 'UI/UX Design', desc: 'Research-driven, pixel-perfect design systems and interactive prototypes crafted for maximum retention.',
      benefits: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Usability Testing', 'Design Systems', 'WCAG Accessibility'],
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Tokens'],
      price: '$1,000',
      faq: [
        { q: 'Do you do user research?', a: 'Yes, we conduct user interviews, surveys, and usability testing.' },
        { q: 'How many revisions?', a: 'Our packages include 3-5 revision rounds to ensure perfection.' },
      ]
    },
    {
      icon: serviceIcons.graphic({ size: 28 }), name: 'Graphic Design', desc: 'Eye-catching visual assets, marketing materials, and digital graphics that elevate your brand visual identity.',
      benefits: ['Brand Consistency', 'Print & Digital', 'Social Media Kits', 'Marketing Collateral', 'Custom Vector Art', '3D Graphics'],
      tech: ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Blender', 'Cinema 4D'],
      price: '$500',
      faq: [
        { q: 'What file formats?', a: 'We deliver in all formats needed — SVG, PNG, PDF, AI, PSD, and more.' },
        { q: 'Do you do motion graphics?', a: 'Yes! We create animated logos, social media content, and video intros.' },
      ]
    },
    {
      icon: serviceIcons.branding({ size: 28 }), name: 'Branding & Identity', desc: 'Complete corporate brand identity systems that make your business unforgettable and drive market leadership.',
      benefits: ['Logo Design Systems', 'Brand Guidelines', 'Color Palettes', 'Typography Kits', 'Brand Strategy', 'Stationery Assets'],
      tech: ['Figma', 'Illustrator', 'InDesign', 'Photoshop', 'Brand Strategy'],
      price: '$2,000',
      faq: [
        { q: 'What does branding include?', a: 'Logo, color palette, typography, brand guidelines, stationery, and social media kit.' },
        { q: 'How long does branding take?', a: 'A complete branding project typically takes 2-4 weeks.' },
      ]
    },
    {
      icon: serviceIcons.ai({ size: 28 }), name: 'AI Solutions', desc: 'Leverage artificial intelligence, custom LLMs, and predictive analytics to automate operations and drive growth.',
      benefits: ['Intelligent Chatbots', 'Predictive Analytics', 'Workflow Automation', 'Custom LLM Fine-Tuning', 'NLP Processing', 'Computer Vision'],
      tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS', 'PyTorch'],
      price: '$5,000',
      faq: [
        { q: 'What kind of AI solutions?', a: 'Chatbots, recommendation engines, data analytics, process automation, and custom ML models.' },
        { q: 'Do you train custom models?', a: 'Yes, we build and train custom models tailored to your specific business needs.' },
      ]
    },
    {
      icon: serviceIcons.marketing({ size: 28 }), name: 'Digital Marketing', desc: 'Data-driven marketing strategies, technical SEO, and targeted campaigns to scale qualified traffic and revenue.',
      benefits: ['Technical SEO', 'Social Media Strategy', 'High-ROI PPC Campaigns', 'Content Marketing', 'Conversion Funnels', 'Real-Time Analytics'],
      tech: ['Google Ads', 'Meta Ads', 'Ahrefs', 'HubSpot', 'Mailchimp', 'GA4'],
      price: '$800/mo',
      faq: [
        { q: 'How soon will I see results?', a: 'SEO takes 3-6 months; paid campaigns can show results within the first week.' },
        { q: 'Do you provide reports?', a: 'Yes, detailed monthly reports with KPIs, insights, and recommendations.' },
      ]
    },
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

    <section class="section cta-section" style="background:var(--bg-secondary);">
      <div class="cta-glow"></div>
      <div class="container">
        <div class="cta-content reveal">
          <h2 class="cta-title">Ready to Architect Your Next Project?</h2>
          <p class="cta-subtitle">Schedule a technical consultation with our engineering team for a free quote and architecture roadmap.</p>
          <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link>Start Your Project →</a>
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
    console.warn('⚠️  Could not fetch services from API, falling back to static mock data.', e);
  }
}
