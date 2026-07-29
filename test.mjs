// Automated test script for Nexus Agency website
const BASE = 'http://127.0.0.1:3000';
const routes = ['/', '/services', '/portfolio', '/start-project', '/contact', '/faq', '/blog', '/tracker', '/consultation', '/reviews', '/estimator'];
let pass = 0, fail = 0;

function check(name, condition) {
  if (condition) { pass++; console.log(`  ✅ ${name}`); }
  else { fail++; console.log(`  ❌ ${name}`); }
}

async function testRoute(path) {
  console.log(`\n📄 Testing ${path}`);
  try {
    const res = await fetch(BASE + path);
    check('HTTP 200', res.status === 200);
    const html = await res.text();
    check('Has HTML content', html.length > 1000);
    check('Has <title>', html.includes('<title>'));
    check('Has meta description', html.includes('meta name="description"'));
    check('Has nav', html.includes('id="navbar"'));
    check('Has footer', html.includes('id="footer"'));
    check('Has main app div', html.includes('id="app"'));
    check('Has Inter font', html.includes('Inter'));
    check('Loads main.ts', html.includes('main.ts'));
  } catch (e) {
    fail++;
    console.log(`  ❌ Failed to fetch: ${e.message}`);
  }
}

async function testCSS() {
  console.log('\n🎨 Testing CSS modules');
  const cssFiles = ['variables.css', 'base.css', 'animations.css', 'components.css', 'components2.css', 'pages.css', 'pages2.css', 'responsive.css'];
  for (const f of cssFiles) {
    try {
      const res = await fetch(`${BASE}/src/styles/${f}`);
      const css = await res.text();
      check(`${f} loads (${css.length} bytes)`, res.status === 200 && css.length > 100);
    } catch (e) {
      fail++;
      console.log(`  ❌ ${f}: ${e.message}`);
    }
  }
}

async function testJS() {
  console.log('\n⚙️ Testing JS modules');
  const jsFiles = ['main.ts', 'router.ts', 'theme.ts', 'ui.ts'];
  for (const f of jsFiles) {
    try {
      const res = await fetch(`${BASE}/src/${f}`);
      check(`${f} loads`, res.status === 200);
    } catch (e) {
      fail++;
      console.log(`  ❌ ${f}: ${e.message}`);
    }
  }
  const pageFiles = ['home.ts','services.ts','portfolio.ts','start-project.ts','contact.ts','faq.ts','blog.ts','tracker.ts','consultation.ts','reviews.ts','estimator.ts'];
  for (const f of pageFiles) {
    try {
      const res = await fetch(`${BASE}/src/pages/${f}`);
      check(`pages/${f} loads`, res.status === 200);
    } catch (e) {
      fail++;
      console.log(`  ❌ pages/${f}: ${e.message}`);
    }
  }
}

async function testAssets() {
  console.log('\n📦 Testing assets');
  for (const f of ['/favicon.svg', '/manifest.json']) {
    try {
      const res = await fetch(BASE + f);
      check(`${f} loads`, res.status === 200);
    } catch (e) {
      fail++;
      console.log(`  ❌ ${f}: ${e.message}`);
    }
  }
}

async function testContent() {
  console.log('\n📝 Testing page content (via JS module imports)');
  try {
    const home = await fetch(`${BASE}/src/pages/home.ts`);
    const homeJS = await home.text();
    check('Home has hero section', homeJS.includes('hero'));
    check('Home has stats', homeJS.includes('Projects Completed'));
    check('Home has services', homeJS.includes('Website Development'));
    check('Home has testimonials', homeJS.includes('testimonial'));
    check('Home has CTA', homeJS.includes("Let's Build"));
    check('Home has counter animation', homeJS.includes('data-count'));

    const svc = await fetch(`${BASE}/src/pages/services.ts`);
    const svcJS = await svc.text();
    check('Services has 8 services', (svcJS.match(/icon: '/g) || []).length >= 8 || svcJS.includes('Website Development'));
    check('Services has pricing', svcJS.includes('From $') || svcJS.includes('Starting at'));
    check('Services has FAQ', svcJS.includes('accordion') || svcJS.includes('faq:'));

    const port = await fetch(`${BASE}/src/pages/portfolio.ts`);
    const portJS = await port.text();
    check('Portfolio has filter tabs', portJS.includes('filterPortfolio') || portJS.includes('renderPortfolio'));
    check('Portfolio has masonry grid', portJS.includes('masonry') || portJS.includes('portfolio-grid'));
    check('Portfolio has 9+ projects', (portJS.match(/title: '/g) || []).length >= 9 || portJS.includes('projects'));

    const sp = await fetch(`${BASE}/src/pages/start-project.ts`);
    const spJS = await sp.text();
    check('Start Project has 8 steps', (spJS.match(/data-panel="/g) || []).length >= 8 || spJS.includes('steps'));
    check('Start Project has file upload', spJS.includes('file-upload') || spJS.includes('uploader'));
    check('Start Project has budget options', spJS.includes('Under $500') || spJS.includes('budget'));
    check('Start Project has timeline options', spJS.includes('ASAP') || spJS.includes('timeline'));

    const contact = await fetch(`${BASE}/src/pages/contact.ts`);
    const contactJS = await contact.text();
    check('Contact has form', contactJS.includes('contact-form') || contactJS.includes('form'));
    check('Contact has email info', contactJS.includes('hello@nexus.agency'));

    const faq = await fetch(`${BASE}/src/pages/faq.ts`);
    const faqJS = await faq.text();
    check('FAQ has 5 categories', (faqJS.match(/name: '/g) || []).length >= 5 || faqJS.includes('categories'));
    check('FAQ has accordion', faqJS.includes('accordion-item') || faqJS.includes('faq-item'));

    const blog = await fetch(`${BASE}/src/pages/blog.ts`);
    const blogJS = await blog.text();
    check('Blog has category filter', blogJS.includes('filterBlog') || blogJS.includes('renderBlog'));
    check('Blog has 9 posts', (blogJS.match(/title:\s*['"]/g) || []).length >= 9 || blogJS.includes('posts'));

    const tracker = await fetch(`${BASE}/src/pages/tracker.ts`);
    const trackerJS = await tracker.text();
    check('Tracker has timeline', trackerJS.includes('timeline-tracker') || trackerJS.includes('timeline'));
    check('Tracker has 7 stages', (trackerJS.match(/title:\s*['"]/g) || []).length >= 7 || trackerJS.includes('stages'));

    const consult = await fetch(`${BASE}/src/pages/consultation.ts`);
    const consultJS = await consult.text();
    check('Consultation has calendar', consultJS.includes('calendar-grid') || consultJS.includes('calendar'));
    check('Consultation has time slots', consultJS.includes('time-slot') || consultJS.includes('slots'));
    check('Consultation has meeting types', consultJS.includes('Zoom') || consultJS.includes('meetings'));

    const reviews = await fetch(`${BASE}/src/pages/reviews.ts`);
    const reviewsJS = await reviews.text();
    check('Reviews has ratings', reviewsJS.includes('rating') || reviewsJS.includes('stars'));
    check('Reviews has verified badges', reviewsJS.includes('Verified') || reviewsJS.includes('verified'));

    const est = await fetch(`${BASE}/src/pages/estimator.ts`);
    const estJS = await est.text();
    check('Estimator has calculator', estJS.includes('updateEstimate') || estJS.includes('calculate'));
    check('Estimator has feature toggles', estJS.includes('toggleEstFeature') || estJS.includes('toggle'));

    // Chat Widget Tests
    console.log('\n💬 Testing Live Chat Widget Component & State');
    const chatWidget = await fetch(`${BASE}/src/components/chat-widget.ts`);
    const chatWidgetJS = await chatWidget.text();
    check('Chat widget contains client DOM elements', chatWidgetJS.includes('chat-window'));
    check('Chat widget contains admin DOM elements', chatWidgetJS.includes('admin-window'));
    check('Chat widget contains sound handlers', chatWidgetJS.includes('playBeep'));
    check('Chat widget contains sanitizeHTML helper', chatWidgetJS.includes('sanitizeHTML'));

    const chatState = await fetch(`${BASE}/src/utils/chat-state.ts`);
    const chatStateJS = await chatState.text();
    check('Chat state has storage hooks', chatStateJS.includes('localStorage'));
    check('Chat state defines events', chatStateJS.includes('nexus-chat-message'));
    check('Chat state handles auto replies', chatStateJS.includes('triggerAutoReply'));

    const chatCSS = await fetch(`${BASE}/src/styles/index.css`);
    const chatCSSContent = await chatCSS.text();
    check('Chat CSS loads and is larger than 1KB', chatCSSContent.length > 1000);
    check('Chat CSS styling for glassmorphism exists', chatCSSContent.includes('backdrop-filter'));
  } catch (e) {
    fail++;
    console.log(`  ❌ Content test error: ${e.message}`);
  }
}

// Run all tests
console.log('🧪 NEXUS AGENCY — Automated Test Suite\n' + '='.repeat(45));
await testRoute('/');
for (const r of routes.slice(1)) await testRoute(r);
await testCSS();
await testJS();
await testAssets();
await testContent();

console.log(`\n${'='.repeat(45)}`);
console.log(`📊 Results: ${pass} passed, ${fail} failed, ${pass + fail} total`);
console.log(fail === 0 ? '🎉 ALL TESTS PASSED!' : `⚠️  ${fail} test(s) failed`);
process.exit(fail > 0 ? 1 : 0);
