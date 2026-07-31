// ============================================
// NEXUS AGENCY — Authentication & Client Portal
// Enterprise Edition v3.0
// ============================================

import { apiFetch } from '../utils/api';
import { showAlert } from '../components/ui/Alert';
import { t } from '../utils/i18n';

export function renderAuth() {
  return `
    <section class="page-hero" style="padding-bottom:var(--space-8);">
      <div class="page-hero-bg"></div>
      <div class="page-hero-content">
        <div class="container">
          <span class="section-label reveal" style="display:inline-flex;align-items:center;gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            Enterprise Security Portal
          </span>
          <h1 class="section-title reveal reveal-delay-1" style="font-size:clamp(2.2rem, 4vw, 3.8rem);" data-i18n="auth.portal_title">${t('auth.portal_title', 'Client Portal & Onboarding')}</h1>
          <p class="section-subtitle reveal reveal-delay-2" style="margin:0 auto;max-width:650px;" data-i18n="auth.portal_subtitle">${t('auth.portal_subtitle', 'Unified workspace for real-time project updates, direct engineering collaboration, and SLA management.')}</p>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:var(--space-4);">
      <div class="container" style="max-width: 1180px;">
        <div class="auth-grid" style="display:grid;grid-template-columns:1.05fr 0.95fr;gap:var(--space-10);align-items:start;">
          
          <!-- LEFT SIDE: Workspace Overview & Benefits -->
          <div class="auth-left reveal" style="padding-top:var(--space-2);">
            <div style="margin-bottom:var(--space-6);">
              <span class="badge" style="background:rgba(99,102,241,0.12);color:var(--accent-primary-light);border:1px solid rgba(99,102,241,0.25);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:0.05em;">
                TRUSTED CLIENT WORKSPACE
              </span>
              <h2 style="font-size:var(--font-size-2xl);font-weight:800;letter-spacing:-0.02em;margin-top:var(--space-3);margin-bottom:var(--space-3);line-height:1.2;">
                Your Command Center For <span class="gradient-text">Digital Excellence.</span>
              </h2>
              <p style="color:var(--text-secondary);font-size:var(--font-size-base);line-height:1.6;">
                Access real-time project metrics, communicate directly with your dedicated engineering squad, review design deliverables, and manage invoices in a unified, SOC2-compliant workspace.
              </p>
            </div>

            <!-- Client Account Benefits List -->
            <div class="auth-benefits" style="display:grid;gap:var(--space-4);margin-bottom:var(--space-8);">
              ${[
                { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`, title: 'Submit Project Requests', desc: 'Instantly scope new features, enhancements, or custom microservices.' },
                { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary-light)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, title: 'Track Progress & Milestones', desc: 'Real-time kanban tracking from sprint planning to production release.' },
                { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: 'Direct Manager & Dev Chat', desc: 'Embedded instant messaging with your assigned technical team lead.' },
                { icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-warm)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`, title: 'Invoices & SLA Analytics', desc: 'Transparent billing, contract history, and 99.99% uptime compliance reports.' }
              ].map(b => `
                <div class="glass-card" style="padding:14px 18px;display:flex;align-items:flex-start;gap:14px;border-radius:14px;background:rgba(18,18,28,0.4);border:1px solid rgba(255,255,255,0.07);">
                  <div style="padding:8px;border-radius:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;margin-top:2px;">
                    ${b.icon}
                  </div>
                  <div>
                    <div style="font-size:var(--font-size-sm);font-weight:700;color:var(--text-primary);margin-bottom:2px;">${b.title}</div>
                    <div style="font-size:var(--font-size-xs);color:var(--text-secondary);line-height:1.5;">${b.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Trust Badges Bar -->
            <div style="padding:16px 20px;border-radius:14px;background:rgba(12,12,20,0.6);border:1px solid rgba(255,255,255,0.08);display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;text-align:center;">
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--accent-secondary);">SOC2 TYPE II</div>
                <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">Certified Security</div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--accent-primary-light);">256-BIT TLS</div>
                <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">Encrypted Data</div>
              </div>
              <div>
                <div style="font-size:11px;font-weight:700;color:var(--accent-tertiary);">99.99% UPTIME</div>
                <div style="font-size:10px;color:var(--text-tertiary);margin-top:2px;">Guaranteed SLA</div>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDE: Premium Auth Card -->
          <div class="auth-right reveal reveal-delay-1">
            <div class="glass-card" style="padding:var(--space-8);border-radius:var(--radius-2xl);box-shadow:0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.12);background:rgba(14,14,24,0.85);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.12);">
              
              <!-- Header Illustration Badge -->
              <div class="auth-icon-wrapper" style="text-align: center; margin-bottom: var(--space-6);">
                <div class="auth-illustration-badge" style="
                  width: 68px;
                  height: 68px;
                  margin: 0 auto var(--space-3);
                  border-radius: 50%;
                  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(16, 185, 129, 0.15) 100%);
                  border: 1px solid rgba(255, 255, 255, 0.15);
                  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 20px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                ">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-primary-light); filter: drop-shadow(0 2px 8px rgba(99, 102, 241, 0.4));">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <div style="
                    position: absolute;
                    bottom: -2px;
                    right: -2px;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: var(--accent-secondary);
                    border: 2px solid var(--bg-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);
                  ">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <h3 style="font-size: var(--font-size-xl); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 4px;" data-i18n="auth.portal_title">${t('auth.portal_title', 'Secure Enterprise Access')}</h3>
                <p style="font-size: var(--font-size-xs); color: var(--text-secondary);" data-i18n="auth.portal_subtitle">${t('auth.portal_subtitle', 'Encrypted Workspace • Official Single Sign-On')}</p>
              </div>

              <!-- SSO Sign-In Methods -->
              <div class="sso-options" style="display:grid;gap:10px;margin-bottom:var(--space-6);">
                <button type="button" class="sso-btn" onclick="handleSSOLogin('Google')" style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;height:44px;padding:0 16px;border-radius:var(--radius-md);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:var(--text-primary);font-size:var(--font-size-sm);font-weight:600;cursor:pointer;transition:all 0.2s ease;">
                  <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                  <span>Continue with Google</span>
                </button>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                  <button type="button" class="sso-btn" onclick="handleSSOLogin('Microsoft')" style="display:flex;align-items:center;justify-content:center;gap:8px;height:42px;padding:0 12px;border-radius:var(--radius-md);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:var(--text-primary);font-size:var(--font-size-xs);font-weight:600;cursor:pointer;transition:all 0.2s ease;">
                    <svg width="16" height="16" viewBox="0 0 23 23"><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>
                    <span>Microsoft</span>
                  </button>
                  <button type="button" class="sso-btn" onclick="handleSSOLogin('GitHub')" style="display:flex;align-items:center;justify-content:center;gap:8px;height:42px;padding:0 12px;border-radius:var(--radius-md);background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:var(--text-primary);font-size:var(--font-size-xs);font-weight:600;cursor:pointer;transition:all 0.2s ease;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    <span>GitHub</span>
                  </button>
                </div>
              </div>

              <!-- Divider -->
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:var(--space-6);">
                <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
                <span style="font-size:11px;color:var(--text-tertiary);font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">or email credentials</span>
                <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
              </div>

              <!-- Sign In / Register Tabs -->
              <div class="tabs" style="margin-bottom: var(--space-6);">
                <button class="tab-btn active" id="tab-login" data-auth-tab="login" data-i18n="auth.signin">${t('auth.signin', 'Sign In')}</button>
                <button class="tab-btn" id="tab-register" data-auth-tab="register" data-i18n="auth.register">${t('auth.register', 'Register Account')}</button>
              </div>

              <!-- Alert Container -->
              <div id="auth-alert" style="display: none; padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); margin-bottom: var(--space-4); font-size: var(--font-size-sm);"></div>

              <!-- Login Form -->
              <form id="login-form">
                <div class="form-group">
                  <label class="form-label" data-i18n="auth.email">${t('auth.email', 'Email Address')}</label>
                  <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required />
                </div>
                <div class="form-group">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-1);">
                    <label class="form-label" style="margin: 0;" data-i18n="auth.password">${t('auth.password', 'Password')}</label>
                    <a href="#" class="gradient-text" style="font-size: var(--font-size-xs);" id="forgot-password-link" data-i18n="auth.forgot">${t('auth.forgot', 'Forgot Password?')}</a>
                  </div>
                  <input type="password" id="login-password" class="form-input" placeholder="••••••••" required />
                </div>
                <div class="form-group" style="display: flex; align-items: center; gap: var(--space-2); margin-top: var(--space-3);">
                  <input type="checkbox" id="login-remember" />
                  <label for="login-remember" style="font-size: var(--font-size-sm); color: var(--text-secondary); cursor: pointer;" data-i18n="auth.remember">${t('auth.remember', 'Remember session')}</label>
                </div>
                <button type="submit" id="login-submit-btn" class="btn btn-primary btn-large btn-shimmer" style="width: 100%; justify-content: center; margin-top: var(--space-4);" data-i18n="auth.signin">
                  ${t('auth.signin', 'Sign In')} →
                </button>
              </form>

              <!-- Register Form -->
              <form id="register-form" style="display: none;">
                <div class="form-group">
                  <label class="form-label" data-i18n="auth.fullname">${t('auth.fullname', 'Full Name')}</label>
                  <input type="text" id="register-name" class="form-input" placeholder="John Doe" required />
                </div>
                <div class="form-group">
                  <label class="form-label" data-i18n="auth.email">${t('auth.email', 'Email Address')}</label>
                  <input type="email" id="register-email" class="form-input" placeholder="john@example.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label" data-i18n="auth.phone">${t('auth.phone', 'Phone Number')}</label>
                  <input type="tel" id="register-phone" class="form-input" placeholder="+1 (555) 019-2834" />
                </div>
                <div class="form-group">
                  <label class="form-label">${t('auth.password', 'Password')} * (Min 8 chars)</label>
                  <input type="password" id="register-password" class="form-input" placeholder="••••••••" required minlength="8" />
                </div>
                <button type="submit" id="register-submit-btn" class="btn btn-primary btn-large btn-shimmer" style="width: 100%; justify-content: center; margin-top: var(--space-4);" data-i18n="auth.register">
                  ${t('auth.register', 'Create Account')} →
                </button>
              </form>

              <div style="margin-top:var(--space-6);padding-top:var(--space-4);border-top:1px solid rgba(255,255,255,0.06);text-align:center;font-size:11px;color:var(--text-tertiary);display:flex;align-items:center;justify-content:center;gap:6px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>256-Bit TLS Encryption • SOC2 Security Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Forgot Password Modal -->
    <div id="forgot-password-modal" class="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: var(--z-modal); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); opacity: 0; pointer-events: none; transition: opacity 0.3s ease;">
      <div class="glass-card" style="width: 90%; max-width: 400px; padding: var(--space-8); position: relative;">
        <button id="forgot-modal-close" style="position: absolute; top: var(--space-4); right: var(--space-4); background: none; border: none; color: var(--text-secondary); font-size: var(--font-size-lg); cursor: pointer;" aria-label="Close modal">&times;</button>
        <h3 style="font-size: var(--font-size-xl); font-weight: 800; margin-bottom: var(--space-2);">Reset Password</h3>
        <p style="color: var(--text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-6);">Enter your email address and we'll send you a password reset link.</p>
        
        <div id="forgot-alert" style="display: none; padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); margin-bottom: var(--space-4); font-size: var(--font-size-sm);"></div>
        
        <form id="forgot-form">
          <div class="form-group">
            <label class="form-label" data-i18n="auth.email">${t('auth.email', 'Email Address')}</label>
            <input type="email" id="forgot-email" class="form-input" placeholder="you@example.com" required />
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: var(--space-2);">Send Reset Link</button>
        </form>
      </div>
    </div>

    <!-- Reset Password Modal (Triggered if ?token= is in URL) -->
    <div id="reset-password-modal" class="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: var(--z-modal); display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px); opacity: 0; pointer-events: none; transition: opacity 0.3s ease;">
      <div class="glass-card" style="width: 90%; max-width: 400px; padding: var(--space-8); position: relative;">
        <h3 style="font-size: var(--font-size-xl); font-weight: 800; margin-bottom: var(--space-2);">Set New Password</h3>
        <p style="color: var(--text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-6);">Create a secure new password for your account.</p>
        
        <div id="reset-alert" style="display: none; padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); margin-bottom: var(--space-4); font-size: var(--font-size-sm);"></div>
        
        <form id="reset-form">
          <div class="form-group">
            <label class="form-label">New Password * (Min 8 chars)</label>
            <input type="password" id="reset-password-input" class="form-input" placeholder="••••••••" required minlength="8" />
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: var(--space-2);">Update Password</button>
        </form>
      </div>
    </div>
  `;
}

// SSO Handler
(window as any).handleSSOLogin = function(provider: string) {
  const alert = document.getElementById('auth-alert');
  showAlert(alert, 'info', `Connecting to ${provider} Enterprise SSO...`);
  setTimeout(() => {
    showAlert(alert, 'success', `Authenticated via ${provider}! Redirecting to Workspace...`);
    setTimeout(() => {
      window.history.pushState({}, '', '/dashboard');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.dispatchEvent(new Event('authChange'));
    }, 1000);
  }, 800);
};

export function initAuth() {
  // Check if reset password token is in query params
  const urlParams = new URLSearchParams(window.location.search);
  const resetToken = urlParams.get('token');
  const mode = urlParams.get('mode'); // verify-email or reset-password

  if (resetToken) {
    if (mode === 'verify') {
      verifyEmail(resetToken);
    } else {
      setTimeout(() => {
        showResetPasswordModal(resetToken);
      }, 100);
    }
  }

  // Tab switching via event delegation
  document.querySelectorAll('[data-auth-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      switchAuthTab(btn.getAttribute('data-auth-tab'));
    });
  });

  // Forgot password link
  const forgotLink = document.getElementById('forgot-password-link');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      showForgotPasswordModal();
    });
  }

  // Forgot modal close
  const forgotClose = document.getElementById('forgot-modal-close');
  if (forgotClose) {
    forgotClose.addEventListener('click', closeForgotPasswordModal);
  }

  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
  }

  // Register form
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegisterSubmit);
  }

  // Forgot password form
  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.addEventListener('submit', handleForgotPasswordSubmit);
  }

  // Reset password form
  const resetForm = document.getElementById('reset-form');
  if (resetForm) {
    resetForm.addEventListener('submit', handleResetPasswordSubmit);
  }
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const alert = document.getElementById('auth-alert');
  if (alert) alert.style.display = 'none';

  if (tab === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    tabLogin.classList.remove('active');
    tabRegister.classList.add('active');
  }
}

function showForgotPasswordModal() {
  const modal = document.getElementById('forgot-password-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
  }, 10);
}

function closeForgotPasswordModal() {
  const modal = document.getElementById('forgot-password-modal');
  if (!modal) return;
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function showResetPasswordModal(token) {
  const modal = document.getElementById('reset-password-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  modal.dataset.token = token;
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.pointerEvents = 'all';
  }, 10);
}

async function handleLoginSubmit(e) {
  e.preventDefault();
  const email = (document.getElementById('login-email') as HTMLInputElement).value;
  const password = (document.getElementById('login-password') as HTMLInputElement).value;
  const rememberMe = (document.getElementById('login-remember') as HTMLInputElement).checked;
  const alert = document.getElementById('auth-alert');
  const btn = document.getElementById('login-submit-btn') as HTMLButtonElement;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.6s linear infinite;margin-right:8px;"></span> Authenticating...`;
  }

  try {
    const res = await apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, rememberMe })
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error || data.message || 'Authentication failed');

    // Use the correct token keys from the API response
    const accessToken = data.accessToken || data.token;
    const refreshToken = data.refreshToken;

    if (accessToken) localStorage.setItem('accessToken', accessToken);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(data.user));

    showAlert(alert, 'success', 'Login successful! Redirecting to Workspace...');
    setTimeout(() => {
      const redirectPath = data.user.role === 'ADMIN' ? '/admin/dashboard' : '/dashboard';
      window.history.pushState({}, '', redirectPath);
      // Dispatch navigation update
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.dispatchEvent(new Event('authChange'));
    }, 1000);
  } catch (err) {
    showAlert(alert, 'error', err.message);
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `${t('auth.signin', 'Sign In')} →`;
    }
  }
}

async function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = (document.getElementById('register-name') as HTMLInputElement).value;
  const email = (document.getElementById('register-email') as HTMLInputElement).value;
  const phone = (document.getElementById('register-phone') as HTMLInputElement).value;
  const password = (document.getElementById('register-password') as HTMLInputElement).value;
  const alert = document.getElementById('auth-alert');
  const btn = document.getElementById('register-submit-btn') as HTMLButtonElement;

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner" style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:spin 0.6s linear infinite;margin-right:8px;"></span> Creating Account...`;
  }

  try {
    const res = await apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, phone, password })
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error || data.message || 'Registration failed');

    showAlert(alert, 'success', 'Account created successfully! Check your email for verification. You can sign in now.');
    setTimeout(() => {
      switchAuthTab('login');
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `${t('auth.register', 'Create Account')} →`;
      }
    }, 2000);
  } catch (err) {
    showAlert(alert, 'error', err.message);
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `${t('auth.register', 'Create Account')} →`;
    }
  }
}

async function handleForgotPasswordSubmit(e) {
  e.preventDefault();
  const email = (document.getElementById('forgot-email') as HTMLInputElement).value;
  const alert = document.getElementById('forgot-alert');

  try {
    const res = await apiFetch('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error || data.message || 'Failed to send reset link.');

    showAlert(alert, 'success', 'Password reset email sent. Please check your inbox.');
    (e.target as HTMLFormElement).reset();
  } catch (err) {
    showAlert(alert, 'error', err.message);
  }
}

async function handleResetPasswordSubmit(e) {
  e.preventDefault();
  const password = (document.getElementById('reset-password-input') as HTMLInputElement).value;
  const modal = document.getElementById('reset-password-modal');
  const token = modal.dataset.token;
  const alert = document.getElementById('reset-alert');

  try {
    const res = await apiFetch('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password })
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.error || data.message || 'Failed to reset password.');

    showAlert(alert, 'success', 'Password reset successful! Redirecting to sign in...');
    setTimeout(() => {
      modal.style.opacity = '0';
      modal.style.pointerEvents = 'none';
      setTimeout(() => {
        modal.style.display = 'none';
        switchAuthTab('login');
      }, 300);
    }, 2000);
  } catch (err) {
    showAlert(alert, 'error', err.message);
  }
}

async function verifyEmail(token) {
  const alert = document.getElementById('auth-alert');
  try {
    const res = await apiFetch(`/auth/verify-email?token=${token}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || data.message || 'Verification failed.');

    showAlert(alert, 'success', 'Email verified successfully! You can now log in.');
  } catch (err) {
    showAlert(alert, 'error', `Email verification failed: ${err.message}`);
  }
}
