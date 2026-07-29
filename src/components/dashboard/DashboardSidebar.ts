// ============================================
// NEXUS AGENCY — Dashboard Sidebar Component
// ============================================

export function renderDashboardSidebar(isAdmin: boolean): string {
  return `
    <div class="glass-card" style="padding:var(--space-4); display:flex; flex-direction:column; gap:var(--space-2);">
      <button class="tab-btn active" id="btn-tab-overview" onclick="switchDashboardTab('overview')" style="width:100%; text-align:left; justify-content:flex-start;">📊 Overview</button>
      <button class="tab-btn" id="btn-tab-projects" onclick="switchDashboardTab('projects')" style="width:100%; text-align:left; justify-content:flex-start;">📁 Projects</button>
      <button class="tab-btn" id="btn-tab-chat" onclick="switchDashboardTab('chat')" style="width:100%; text-align:left; justify-content:flex-start;">💬 Support Chat</button>
      ${isAdmin ? `
        <button class="tab-btn" id="btn-tab-cms" onclick="switchDashboardTab('cms')" style="width:100%; text-align:left; justify-content:flex-start;">⚙️ CMS Manager</button>
        <button class="tab-btn" id="btn-tab-clients" onclick="switchDashboardTab('clients')" style="width:100%; text-align:left; justify-content:flex-start;">👥 Clients</button>
        <button class="tab-btn" id="btn-tab-logs" onclick="switchDashboardTab('logs')" style="width:100%; text-align:left; justify-content:flex-start;">📜 Audit Logs</button>
      ` : `
        <button class="tab-btn" id="btn-tab-notifications" onclick="switchDashboardTab('notifications')" style="width:100%; text-align:left; justify-content:flex-start;">🔔 Notifications <span class="badge" id="noti-unread-count" style="display:none; background:var(--accent-tertiary); margin-left:var(--space-2);">0</span></button>
      `}
      <button class="tab-btn" id="btn-tab-settings" onclick="switchDashboardTab('settings')" style="width:100%; text-align:left; justify-content:flex-start;">🔑 Account</button>
    </div>
  `;
}
