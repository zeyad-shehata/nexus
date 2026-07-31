import { serviceIcons } from '../components/ui-icons';
import { t, getLanguage } from '../utils/i18n';

function renderServiceCard(s: any, i: number) {
  const isAr = getLanguage() === 'ar';
  const priceStr = s.startingPrice ? `$${s.startingPrice}` : (s.price || (isAr ? 'عرض سعر مخصص' : 'Custom Quote'));
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
          <span class="pricing-label">${isAr ? 'يبدأ من' : 'Starting at'}</span>
          <span class="pricing-value">${priceStr}</span>
        </div>
      </div>

      <h3 class="service-enterprise-title">${sName}</h3>
      <p class="service-enterprise-desc">${descText}</p>

      <div class="service-benefits-section">
        <div class="benefits-title">${isAr ? 'الميزات الرئيسية' : 'Key Capabilities'}</div>
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
          ${t('hero.cta_start', 'Start Your Project')}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="${isAr ? 'M19 12H5M12 19l-7-7 7-7' : 'M5 12h14M12 5l7 7-7 7'}"/></svg>
        </a>
      </div>
    </div>
  `;
}

export function renderServices() {
  const isAr = getLanguage() === 'ar';
  const services = [
    {
      icon: serviceIcons.web({ size: 28 }),
      name: t('services.web_dev', 'Website Development'),
      desc: t('services.web_dev_desc', 'Custom-built, high-performance websites tailored to your brand and business goals.'),
      benefits: isAr ? ['تحسين محركات البحث', 'سرعة استجابة عالية', 'تصميم متوافق تماماً', 'لوحة تحكم إدارية', 'تحليلات مباشرة', 'أمان المؤسسات'] : ['SEO Optimized', 'Lightning Fast', 'Fully Responsive', 'CMS Integration', 'Analytics Dashboard', 'Enterprise Security'],
      tech: ['React', 'Next.js', 'Vue', 'Node.js', 'TypeScript', 'Prisma'],
      price: '$1,500'
    },
    {
      icon: serviceIcons.mobile({ size: 28 }),
      name: t('services.mobile_apps', 'Mobile Applications'),
      desc: t('services.mobile_apps_desc', 'Native and cross-platform mobile apps that provide seamless, fast user experiences across iOS and Android.'),
      benefits: isAr ? ['متعدد المنصات', 'إشعارات فورية', 'دعم بدون إنترنت', 'جاهز للمتاجر', 'أداء عالي', 'بصمة وأمان'] : ['Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Ready', 'Performance Optimized', 'Biometric Auth'],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      price: '$3,000'
    },
    {
      icon: serviceIcons.ecommerce({ size: 28 }),
      name: t('services.ecommerce', 'E-Commerce Stores'),
      desc: t('services.ecommerce_desc', 'Powerful online stores designed to maximize conversion rates, streamline checkout, and scale global sales.'),
      benefits: isAr ? ['بوابات الدفع', 'إدارة المخزون', 'عملات متعددة', 'تتبع الطلبات', 'تحليلات مخصصة', 'دفع سريع'] : ['Payment Integration', 'Inventory Management', 'Multi-Currency', 'Order Tracking', 'Custom Analytics', 'Instant Checkout'],
      tech: ['Shopify', 'WooCommerce', 'Next.js', 'Stripe', 'Sanity', 'Tailwind'],
      price: '$2,000'
    },
    {
      icon: serviceIcons.uiux({ size: 28 }),
      name: t('services.uiux', 'UI/UX Design'),
      desc: t('services.uiux_desc', 'Research-driven, pixel-perfect design systems and interactive prototypes crafted for maximum retention.'),
      benefits: isAr ? ['دراسة المستخدمين', 'نماذج هيكلية', 'نماذج تفاعلية', 'اختبار الاستخدام', 'أنظمة التصميم', 'دعم سهولة الوصول'] : ['User Research', 'Wireframing', 'Interactive Prototypes', 'Usability Testing', 'Design Systems', 'WCAG Accessibility'],
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Tokens'],
      price: '$1,000'
    },
    {
      icon: serviceIcons.graphic({ size: 28 }),
      name: t('services.graphic', 'Graphic Design'),
      desc: t('services.graphic_desc', 'Eye-catching visual assets, marketing materials, and digital graphics that elevate your brand visual identity.'),
      benefits: isAr ? ['اتساق الهوية', 'طباعة ورقمي', 'حزم وسائل التواصل', 'مواد تسويقية', 'رسوم متجهة', 'رسوم 3D'] : ['Brand Consistency', 'Print & Digital', 'Social Media Kits', 'Marketing Collateral', 'Custom Vector Art', '3D Graphics'],
      tech: ['Photoshop', 'Illustrator', 'After Effects', 'Figma', 'Blender', 'Cinema 4D'],
      price: '$500'
    },
    {
      icon: serviceIcons.branding({ size: 28 }),
      name: t('services.branding', 'Branding & Identity'),
      desc: t('services.branding_desc', 'Complete corporate brand identity systems that make your business unforgettable and drive market leadership.'),
      benefits: isAr ? ['أنظمة الشعارات', 'أدلة الهوية', 'لوحات الألوان', 'حزم الخطوط', 'استراتيجية العلامة', 'أصول المطبوعات'] : ['Logo Design Systems', 'Brand Guidelines', 'Color Palettes', 'Typography Kits', 'Brand Strategy', 'Stationery Assets'],
      tech: ['Figma', 'Illustrator', 'InDesign', 'Photoshop', 'Brand Strategy'],
      price: '$2,000'
    },
    {
      icon: serviceIcons.ai({ size: 28 }),
      name: t('services.ai_solutions', 'AI Solutions'),
      desc: t('services.ai_solutions_desc', 'Leverage artificial intelligence, custom LLMs, and predictive analytics to automate operations and drive growth.'),
      benefits: isAr ? ['شات بوت ذكي', 'تحليلات تنبؤية', 'أتمتة سير العمل', 'ضبط نماذج اللغة', 'معالجة اللغة', 'الرؤية الحاسوبية'] : ['Intelligent Chatbots', 'Predictive Analytics', 'Workflow Automation', 'Custom LLM Fine-Tuning', 'NLP Processing', 'Computer Vision'],
      tech: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS', 'PyTorch'],
      price: '$5,000'
    },
    {
      icon: serviceIcons.marketing({ size: 28 }),
      name: t('services.cybersecurity', 'Enterprise Security & Audit'),
      desc: t('services.cybersecurity_desc', 'SOC2 compliance preparation, penetration testing, and zero-trust cloud security.'),
      benefits: isAr ? ['امتثال SOC2', 'اختبار الاختراق', 'أمان السحابة', 'تشفير كامل', 'حماية البيانات', 'مراقبة 24/7'] : ['SOC2 Compliance', 'Penetration Testing', 'Zero-Trust Cloud', 'Full Encryption', 'Data Protection', '24/7 Monitoring'],
      tech: ['Cloud Security', 'IAM', 'SOC2', 'KMS', 'Vault', 'Zero-Trust'],
      price: '$3,500'
    }
  ];

  return `
    <!-- Services Hero Section -->
    <section class="page-hero section">
      <div class="hero-glow"></div>
      <div class="container text-center">
        <div class="badge badge-accent animate-fade-in" style="margin-bottom:var(--space-4);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          ${isAr ? 'القدرات البرمجية للمؤسسات' : 'ENTERPRISE CAPABILITIES'}
        </div>
        <h1 class="page-title animate-fade-in">${t('services.title', 'Enterprise Services')}</h1>
        <p class="page-subtitle animate-fade-in text-balance">${t('services.subtitle', 'End-to-end digital solutions engineered for high-velocity teams.')}</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="services-grid" id="services-grid-container">
          ${services.map((s, i) => renderServiceCard(s, i)).join('')}
        </div>
      </div>
    </section>

    <!-- Enterprise Pricing Packages -->
    <section class="section bg-secondary">
      <div class="container text-center">
        <h2 class="section-title text-gradient">${t('services.pricing_title', 'Enterprise Pricing Packages')}</h2>
        <p class="section-subtitle text-balance" style="margin-bottom:var(--space-10);">${t('services.pricing_subtitle', 'Flexible engagement models tailored to your business stage and growth velocity.')}</p>

        <div class="pricing-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:var(--space-6);align-items:stretch;">
          <div class="glass-card pricing-card" style="padding:var(--space-8);display:flex;flex-direction:column;">
            <h3 style="font-size:var(--font-size-xl);font-weight:700;">${t('services.plan_starter', 'Starter')}</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--text-primary);margin:var(--space-4) 0;">$2,500 <span style="font-size:1rem;color:var(--text-tertiary);">${t('services.one_time', '/ one-time')}</span></div>
            <p style="color:var(--text-secondary);font-size:var(--font-size-sm);margin-bottom:var(--space-6);">${isAr ? 'مثالي للشركات الناشئة التي تبحث عن إطلاق سريع وموثوق.' : 'Ideal for early-stage startups needing rapid MVP deployment.'}</p>
            <a href="./start-project" class="btn btn-secondary" data-link style="margin-top:auto;justify-content:center;">${t('nav.get_started', 'Get Started')}</a>
          </div>

          <div class="glass-card pricing-card popular" style="padding:var(--space-8);display:flex;flex-direction:column;border-color:var(--accent-primary);position:relative;">
            <div class="badge badge-accent" style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);font-size:0.7rem;">${t('services.popular_badge', 'MOST POPULAR')}</div>
            <h3 style="font-size:var(--font-size-xl);font-weight:700;">${t('services.plan_business', 'Business')}</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--accent-primary);margin:var(--space-4) 0;">$6,500 <span style="font-size:1rem;color:var(--text-tertiary);">${t('services.one_time', '/ one-time')}</span></div>
            <p style="color:var(--text-secondary);font-size:var(--font-size-sm);margin-bottom:var(--space-6);">${isAr ? 'مصمم للشركات النامية التي تتطلب حلول برمجية متكاملة عالية القوة.' : 'Tailored for scaling businesses requiring robust web & mobile infrastructure.'}</p>
            <a href="./start-project" class="btn btn-primary" data-link style="margin-top:auto;justify-content:center;">${t('nav.get_started', 'Get Started')}</a>
          </div>

          <div class="glass-card pricing-card" style="padding:var(--space-8);display:flex;flex-direction:column;">
            <h3 style="font-size:var(--font-size-xl);font-weight:700;">${t('services.plan_enterprise', 'Enterprise')}</h3>
            <div style="font-size:2.5rem;font-weight:900;color:var(--text-primary);margin:var(--space-4) 0;">$15,000+ <span style="font-size:1rem;color:var(--text-tertiary);">${t('services.one_time', '/ one-time')}</span></div>
            <p style="color:var(--text-secondary);font-size:var(--font-size-sm);margin-bottom:var(--space-6);">${isAr ? 'فريق كامل مخصص مع معايير أمان عالية لاتفاقية مستوى الخدمة 99.99%.' : 'Dedicated squad with 99.99% SLA, custom AI, and SOC2 compliance.'}</p>
            <a href="./start-project" class="btn btn-secondary" data-link style="margin-top:auto;justify-content:center;">${t('nav.get_started', 'Get Started')}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion Anchor -->
    <div class="faq-accordion" style="display:none;">FAQ</div>
  `;
}

export function initServices() {}
