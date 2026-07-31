// ============================================
// NEXUS AGENCY — Dashboard Sidebar Component
// ============================================

import { getLanguage } from '../../utils/i18n';

export function renderDashboardSidebar(isAdmin: boolean): string {
  const isAr = getLanguage() === 'ar';
  const align = isAr ? 'right' : 'left';

  return `
    <div class="glass-card" style="padding:var(--space-4); display:flex; flex-direction:column; gap:var(--space-2);">
      <button class="tab-btn active" id="btn-tab-overview" onclick="switchDashboardTab('overview')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        ${isAr ? 'لوحة القيادة' : 'Overview'}
      </button>

      <button class="tab-btn" id="btn-tab-projects" onclick="switchDashboardTab('projects')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        ${isAr ? 'المشاريع النشطة' : 'Projects'}
      </button>

      <button class="tab-btn" id="btn-tab-chat" onclick="switchDashboardTab('chat')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        ${isAr ? 'محادثات الدعم' : 'Support Chat'}
      </button>

      ${isAdmin ? `
        <button class="tab-btn" id="btn-tab-cms" onclick="switchDashboardTab('cms')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          ${isAr ? 'إدارة المحتوى (CMS)' : 'CMS Manager'}
        </button>

        <button class="tab-btn" id="btn-tab-clients" onclick="switchDashboardTab('clients')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          ${isAr ? 'دليل العملاء' : 'Clients'}
        </button>
      ` : `
        <button class="tab-btn" id="btn-tab-notifications" onclick="switchDashboardTab('notifications')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          ${isAr ? 'التنبيهات' : 'Notifications'}
        </button>
      `}

      <button class="tab-btn" id="btn-tab-settings" onclick="switchDashboardTab('settings')" style="width:100%; text-align:${align}; justify-content:flex-start; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        ${isAr ? 'إعدادات الحساب' : 'Account'}
      </button>
    </div>
  `;
}
