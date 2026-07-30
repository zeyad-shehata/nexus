export function renderEstimator() {
  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">Cost Estimator</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Project <span class="gradient-text">Estimator</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:600px;">Configure your project parameters to get an instant cost and timeline estimate.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width:850px;">
        <div class="glass-card reveal" style="padding:var(--space-10);">
          <!-- Project Type -->
          <div style="margin-bottom:var(--space-8);">
            <h3 style="font-weight:700;margin-bottom:var(--space-4);color:var(--text-primary);">1. Select Project Type</h3>
            <div class="radio-group" id="est-type">
              ${[
                { label: 'Landing Page', value: 1500 },
                { label: 'Business Website', value: 3000 },
                { label: 'E-Commerce Store', value: 5000 },
                { label: 'Web Application', value: 8000 },
                { label: 'Mobile Application', value: 10000 },
                { label: 'Full Enterprise Platform', value: 20000 },
              ].map((t, i) => `
                <div class="radio-option ${i === 0 ? 'selected' : ''}" role="radio" tabindex="0" aria-checked="${i === 0 ? 'true' : 'false'}" data-value="${t.value}" onclick="selectEstOption(this, 'est-type')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
                  <div class="radio-dot"></div>
                  <span>${t.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Features -->
          <div style="margin-bottom:var(--space-8);">
            <h3 style="font-weight:700;margin-bottom:var(--space-4);color:var(--text-primary);">2. Additional Capabilities & Features</h3>
            <div class="radio-group" id="est-features" style="grid-template-columns:1fr 1fr;">
              ${[
                { label: 'User Authentication & OAuth', value: 500 },
                { label: 'Payment Gateway Integration', value: 800 },
                { label: 'Admin Dashboard & Analytics', value: 1500 },
                { label: 'Real-Time Messaging & Chat', value: 1000 },
                { label: 'Custom AI / ML Integration', value: 3000 },
                { label: 'Multi-Language Support (i18n)', value: 600 },
              ].map((f) => `
                <div class="radio-option est-feature-option" role="checkbox" tabindex="0" aria-checked="false" data-value="${f.value}" onclick="toggleEstFeature(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
                  <div class="radio-dot"></div>
                  <span>${f.label} (+${f.value}$)</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Timeline Speed -->
          <div style="margin-bottom:var(--space-8);">
            <h3 style="font-weight:700;margin-bottom:var(--space-4);color:var(--text-primary);">3. Desired Turnaround Velocity</h3>
            <div class="radio-group" id="est-speed">
              ${[
                { label: 'Standard Delivery (Regular Pace)', mult: 1 },
                { label: 'Accelerated Sprint (1.3x speed)', mult: 1.25 },
                { label: 'Rush / Express Priority (2x speed)', mult: 1.5 },
              ].map((s, i) => `
                <div class="radio-option ${i === 0 ? 'selected' : ''}" role="radio" tabindex="0" aria-checked="${i === 0 ? 'true' : 'false'}" data-mult="${s.mult}" onclick="selectEstOption(this, 'est-speed')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
                  <div class="radio-dot"></div>
                  <span>${s.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Estimate Result -->
          <div class="glass-card" style="padding:var(--space-8);background:var(--bg-glass);border:1px solid var(--border-accent);border-radius:var(--radius-xl);text-align:center;">
            <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:var(--space-2);">Estimated Investment Range</div>
            <div id="est-total-price" class="gradient-text" style="font-size:var(--font-size-4xl);font-weight:900;line-height:1;margin-bottom:var(--space-3);">$1,500 – $2,100</div>
            <p style="font-size:var(--font-size-xs);color:var(--text-secondary);max-width:500px;margin:0 auto var(--space-6);">Final pricing depends on complete technical specs. Includes dedicated PM, QA, and 30-day warranty.</p>
            <a href="./start-project" class="btn btn-primary btn-large btn-shimmer" data-link>Start Project With This Estimate →</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

(window as any).selectEstOption = function(el: HTMLElement, groupId: string) {
  const group = document.getElementById(groupId);
  if (!group) return;
  const options = group.querySelectorAll('.radio-option');
  options.forEach(o => {
    o.classList.remove('selected');
    o.setAttribute('aria-checked', 'false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-checked', 'true');
  updateEstimate();
};

(window as any).toggleEstFeature = function(el: HTMLElement) {
  const isSelected = el.classList.toggle('selected');
  el.setAttribute('aria-checked', isSelected ? 'true' : 'false');
  updateEstimate();
};

function updateEstimate() {
  const typeEl = document.querySelector('#est-type .radio-option.selected') as HTMLElement;
  const speedEl = document.querySelector('#est-speed .radio-option.selected') as HTMLElement;
  const featureEls = document.querySelectorAll('#est-features .radio-option.selected');

  let base = typeEl ? parseInt(typeEl.dataset.value || '1500') : 1500;
  let mult = speedEl ? parseFloat(speedEl.dataset.mult || '1') : 1;

  let featuresTotal = 0;
  featureEls.forEach(f => {
    featuresTotal += parseInt((f as HTMLElement).dataset.value || '0');
  });

  const minTotal = Math.round((base + featuresTotal) * mult);
  const maxTotal = Math.round(minTotal * 1.35);

  const priceEl = document.getElementById('est-total-price');
  if (priceEl) {
    priceEl.textContent = `$${minTotal.toLocaleString()} – $${maxTotal.toLocaleString()}`;
  }
}
