// ============================================
// NEXUS AGENCY — Enterprise Outline SVG Icons
// Lucide / Heroicons style (1.75px stroke, clean outline)
// ============================================

export interface IconOptions {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const defaultOptions: Required<IconOptions> = {
  size: 24,
  className: '',
  strokeWidth: 1.75
};

function createSvg(pathContent: string, opts?: IconOptions): string {
  const { size, className, strokeWidth } = { ...defaultOptions, ...opts };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="ui-icon ${className}" xmlns="http://www.w3.org/2000/svg">${pathContent}</svg>`;
}

// === FEATURE ICONS (Why Choose Us) ===
export const featureIcons = {
  // Professional Team -> Users
  team: (opts?: IconOptions) => createSvg(
    `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    opts
  ),
  // Fast Delivery -> Zap
  fast: (opts?: IconOptions) => createSvg(
    `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    opts
  ),
  // Premium Quality -> BadgeCheck
  quality: (opts?: IconOptions) => createSvg(
    `<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="m9 12 2 2 4-4"/>`,
    opts
  ),
  // Secure Process -> ShieldCheck
  secure: (opts?: IconOptions) => createSvg(
    `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>`,
    opts
  ),
  // Continuous Support -> Headset
  support: (opts?: IconOptions) => createSvg(
    `<path d="M3 11a9 9 0 0 1 18 0v5a3 3 0 0 1-3 3h-1v-6h3.9"/><path d="M18.4 13H21v5a3 3 0 0 1-3 3h-1v-6z"/><path d="M3 13h2.6v6H4.6A2.6 2.6 0 0 1 2 16.4V13zm0 0a9 9 0 0 1 18 0"/>`,
    opts
  ),
  // Modern Technologies -> Code2
  tech: (opts?: IconOptions) => createSvg(
    `<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`,
    opts
  ),
  // Years of Experience -> Award
  experience: (opts?: IconOptions) => createSvg(
    `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`,
    opts
  ),
  // Projects Delivered -> FolderCheck
  projects: (opts?: IconOptions) => createSvg(
    `<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/>`,
    opts
  ),
  // Happy Clients -> HeartHandshake
  clients: (opts?: IconOptions) => createSvg(
    `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"/>`,
    opts
  ),
  // Client Satisfaction -> Sparkles
  satisfaction: (opts?: IconOptions) => createSvg(
    `<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>`,
    opts
  ),
  // Agile Development -> GitBranch
  agile: (opts?: IconOptions) => createSvg(
    `<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`,
    opts
  ),
  // Dedicated PM -> UserCheck
  pm: (opts?: IconOptions) => createSvg(
    `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>`,
    opts
  )
};

// === SERVICE ICONS (Services Page & Previews) ===
export const serviceIcons = {
  // Website Development -> MonitorCode
  web: (opts?: IconOptions) => createSvg(
    `<path d="m10 15-3-3 3-3"/><path d="m14 9 3 3-3 3"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>`,
    opts
  ),
  // Mobile Applications -> Smartphone
  mobile: (opts?: IconOptions) => createSvg(
    `<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>`,
    opts
  ),
  // E-Commerce Stores -> ShoppingCart
  ecommerce: (opts?: IconOptions) => createSvg(
    `<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>`,
    opts
  ),
  // UI/UX Design -> PenTool
  uiux: (opts?: IconOptions) => createSvg(
    `<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.58 7.58"/><circle cx="11" cy="11" r="2"/>`,
    opts
  ),
  // Graphic Design -> PencilRuler
  graphic: (opts?: IconOptions) => createSvg(
    `<path d="m15 5 4 4"/><path d="M13 7 4 16v4h4l9-9"/><path d="M11 21H3v-8"/><path d="m21 11-8-8"/>`,
    opts
  ),
  // Branding -> Sparkles
  branding: (opts?: IconOptions) => createSvg(
    `<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>`,
    opts
  ),
  // AI Solutions -> BrainCircuit / Cpu
  ai: (opts?: IconOptions) => createSvg(
    `<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>`,
    opts
  ),
  // Digital Marketing -> TrendingUp
  marketing: (opts?: IconOptions) => createSvg(
    `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>`,
    opts
  )
};
