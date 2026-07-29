// ============================================
// NEXUS AGENCY — Dashboard Chat Component
// ============================================

export function renderDashboardChatView(isAdmin: boolean): string {
  return `
    <div class="glass-card" style="padding:0; overflow:hidden; display:grid; grid-template-columns: ${isAdmin ? '280px 1fr' : '1fr'}; height:600px;">
      ${isAdmin ? `
        <div style="border-right:1px solid var(--border-subtle); display:flex; flex-direction:column;">
          <div style="padding:var(--space-4); font-weight:700; border-bottom:1px solid var(--border-subtle);">Client Channels</div>
          <div id="chat-channels-list" style="overflow-y:auto; flex:1;">
            <div style="padding:var(--space-4); color:var(--text-tertiary); text-align:center;">No active channels.</div>
          </div>
        </div>
      ` : ''}
      <div style="display:flex; flex-direction:column; height:100%;">
        <!-- Chat Header -->
        <div style="padding:var(--space-4); border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.01);">
          <div style="display:flex; align-items:center; gap:var(--space-2);">
            <div style="width:10px; height:10px; border-radius:50%; background:var(--accent-secondary);" id="chat-status-dot"></div>
            <span style="font-weight:700;" id="chat-header-title">${isAdmin ? 'Select a channel' : 'Nexus Concierge support'}</span>
            <span id="chat-typing-indicator" style="display:none; font-size:var(--font-size-xs); color:var(--text-tertiary); margin-left:var(--space-2);">typing...</span>
          </div>
        </div>
        <!-- Chat Messages -->
        <div id="chat-messages-container" style="flex:1; overflow-y:auto; padding:var(--space-6); display:flex; flex-direction:column; gap:var(--space-4); background:rgba(0,0,0,0.15);"></div>
        <!-- Chat Input -->
        <form id="chat-input-form" onsubmit="handleSendDashboardMessage(event)" style="padding:var(--space-4); border-top:1px solid var(--border-subtle); display:flex; gap:var(--space-3); background:var(--bg-secondary);">
          <input type="text" id="chat-msg-input" placeholder="Type your message..." class="form-input" style="flex:1;" oninput="emitTypingState()" />
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  `;
}
