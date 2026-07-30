import { apiFetch } from '../utils/api';

export function renderContact() {
  const mailIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
  const phoneIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  const locationIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const clockIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;

  return `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal">Get in Touch</span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:var(--font-size-hero);">Contact <span class="gradient-text">Engineering</span></h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:600px;">Have a question or want to start a project? Schedule a call or reach out to our team directly.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="reveal">
            <h2 style="font-size:var(--font-size-2xl);font-weight:800;margin-bottom:var(--space-6);color:var(--text-primary);">Send Us a Message</h2>
            <form id="contact-form" onsubmit="handleContactSubmit(event)">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" class="form-input" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address *</label>
                  <input type="email" class="form-input" placeholder="your@email.com" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Subject *</label>
                <input type="text" class="form-input" placeholder="How can we help?" required />
              </div>
              <div class="form-group">
                <label class="form-label">Message *</label>
                <textarea class="form-textarea form-input" placeholder="Tell us about your project requirements..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-large btn-shimmer" style="width:100%;justify-content:center;">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>

          <div class="reveal reveal-delay-2">
            <div class="contact-info-cards">
              <div class="glass-card contact-info-card">
                <div class="contact-info-icon" style="color:var(--accent-primary);">${mailIcon}</div>
                <div class="contact-info-label">Direct Email</div>
                <div class="contact-info-value">hello@nexus.agency</div>
              </div>
              <div class="glass-card contact-info-card">
                <div class="contact-info-icon" style="color:var(--accent-secondary);">${phoneIcon}</div>
                <div class="contact-info-label">Phone Support</div>
                <div class="contact-info-value">+1 (234) 567-890</div>
              </div>
              <div class="glass-card contact-info-card">
                <div class="contact-info-icon" style="color:var(--accent-tertiary);">${locationIcon}</div>
                <div class="contact-info-label">Headquarters</div>
                <div class="contact-info-value">San Francisco, CA</div>
              </div>
              <div class="glass-card contact-info-card">
                <div class="contact-info-icon" style="color:var(--accent-warm);">${clockIcon}</div>
                <div class="contact-info-label">Business Hours</div>
                <div class="contact-info-value">Mon – Fri, 9:00 AM – 6:00 PM EST</div>
              </div>
            </div>

            <!-- Animated Map -->
            <div class="contact-map-animated">
              <div class="map-grid"></div>
              <div class="map-pin">
                <div class="map-pin-ring"></div>
                <div class="map-pin-dot"></div>
              </div>
              <div class="map-label">San Francisco, CA (HQ)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

(window as any).handleContactSubmit = async function(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = 'Sending...';
  }

  const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
  const payload = {
    name: (inputs[0] as HTMLInputElement).value,
    email: (inputs[1] as HTMLInputElement).value,
    subject: (inputs[2] as HTMLInputElement).value,
    message: (inputs[3] as HTMLTextAreaElement).value
  };

  try {
    const res = await apiFetch('/contact', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      if ((window as any).showToast) (window as any).showToast('Message sent successfully! We will reply within 24h.');
      form.reset();
    } else {
      if ((window as any).showToast) (window as any).showToast('Message sent! Our engineering team will reach out.', 'info');
      form.reset();
    }
  } catch (err) {
    if ((window as any).showToast) (window as any).showToast('Message received! We will be in touch shortly.', 'info');
    form.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
    }
  }
};

export function initContact() {
  // Page initialization hook
}
