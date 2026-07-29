// ============================================
// NEXUS AGENCY — Official Technology SVG Logos
// ============================================

export interface TechIconOptions {
  size?: number;
  className?: string;
}

// 1. OpenAI
export const openAILogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.181a5.984 5.984 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.23a4.477 4.477 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.067l-4.832 2.793A4.496 4.496 0 0 1 3.6 18.304zm-1.503-9.58A4.476 4.476 0 0 1 4.437 6.44l.002.163v5.521a.788.788 0 0 0 .39.68l5.84 3.37-2.02 1.166a.08.08 0 0 1-.077.005L3.74 14.55a4.503 4.503 0 0 1-1.643-5.826zm16.14-3.033l-4.78 2.758a.773.773 0 0 0-.39.682v6.737l-2.02-1.168a.074.074 0 0 1-.038-.052V9.263a4.504 4.504 0 0 1 7.37-3.468l-.142.081zm2.345 9.585a4.47 4.47 0 0 1-.536 3.013l-.142-.084-4.78-2.758a.773.773 0 0 0-.78 0l-5.84 3.368v-2.332a.078.078 0 0 1 .035-.067l4.83-2.791a4.503 4.503 0 0 1 7.213 1.651zm-7.794-3.018l-2.02-1.164a.08.08 0 0 1-.037-.054V5.516A4.503 4.503 0 0 1 19.56 9.479l-.142-.085-4.783-2.758a.788.788 0 0 0-.78 0l-5.844 3.369zm-1.026 2.454l-2.73-1.576 2.73-1.576 2.73 1.576z"/>
</svg>
`;

// 2. GraphQL
export const graphQLLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2z" stroke="#E10098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 2v22M2.5 7.5l19 11M2.5 18.5l19-11" stroke="#E10098" stroke-width="1.5"/>
  <circle cx="12" cy="2" r="2" fill="#E10098"/>
  <circle cx="2.5" cy="7.5" r="2" fill="#E10098"/>
  <circle cx="21.5" cy="7.5" r="2" fill="#E10098"/>
  <circle cx="2.5" cy="18.5" r="2" fill="#E10098"/>
  <circle cx="21.5" cy="18.5" r="2" fill="#E10098"/>
  <circle cx="12" cy="24" r="2" fill="#E10098"/>
</svg>
`;

// 3. Tailwind CSS
export const tailwindLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#38BDF8" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
</svg>
`;

// 4. PostgreSQL
export const postgresqlLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#4169E1" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.968 1.5c-4.148 0-7.398 2.502-7.398 5.753 0 1.944.972 3.673 2.52 4.793l-.865 3.324a.5.5 0 0 0 .614.614l3.324-.865c.576.144 1.18.22 1.805.22 4.148 0 7.398-2.503 7.398-5.754S16.116 1.5 11.968 1.5zm-2.8 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm5.6 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
  <path d="M12 12c-2.5 0-4.5 1.5-5 3.5h10c-.5-2-2.5-3.5-5-3.5z" fill="#4169E1" opacity="0.6"/>
</svg>
`;

// 5. React / React Native
export const reactLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" stroke-width="1.5"/>
  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" stroke-width="1.5"/>
</svg>
`;

// 6. Next.js
export const nextjsLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5l-6.84-9.352V17.5H8.25V6.5h1.91l6.76 9.243V6.5h1.41v11h-1.83z" fill-rule="evenodd"/>
</svg>
`;

// 7. Vue.js
export const vueLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" fill="#4FC08D"/>
  <path d="M6 3h3.5L12 9.5 14.5 3H18L12 15 6 3z" fill="#35495E"/>
</svg>
`;

// 8. TypeScript
export const typescriptLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="4" fill="#3178C6"/>
  <path d="M11.5 14.7c0 2.2-1.4 3.3-3.6 3.3-1.4 0-2.6-.5-3.4-1.2l.9-1.6c.6.5 1.5.9 2.4.9 1 0 1.7-.5 1.7-1.2 0-.8-.7-1.1-1.9-1.5l-.8-.3c-1.6-.6-2.5-1.5-2.5-2.9 0-2.1 1.6-3.3 3.6-3.3 1.2 0 2.2.4 2.9.9l-.8 1.6c-.6-.4-1.3-.7-2.1-.7-1 0-1.6.5-1.6 1.1 0 .7.6 1 1.7 1.4l.8.3c1.9.7 2.7 1.6 2.7 2.9zM18.8 8.7h-2.9v9.1h-2.1V8.7h-2.9V7h7.9v1.7z" fill="#FFFFFF"/>
</svg>
`;

// 9. Python
export const pythonLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.872 1a5.6 5.6 0 0 0-5.541 5.568v1.652h5.666v.816H3.97a3.96 3.96 0 0 0-3.97 3.97v3.529a3.96 3.96 0 0 0 3.97 3.97h1.652v-2.316a3.3 3.3 0 0 1 3.296-3.296h5.666a2.48 2.48 0 0 0 2.474-2.474V6.568A5.6 5.6 0 0 0 11.872 1zm-2.062 2.063a1.03 1.03 0 1 1 0 2.062 1.03 1.03 0 0 1 0-2.062z" fill="#3776AB"/>
  <path d="M12.128 23a5.6 5.6 0 0 0 5.541-5.568v-1.652h-5.666v-.816h8.027a3.96 3.96 0 0 0 3.97-3.97V7.465a3.96 3.96 0 0 0-3.97-3.97h-1.652v2.316a3.3 3.3 0 0 1-3.296 3.296h-5.666a2.48 2.48 0 0 0-2.474 2.474v5.864A5.6 5.6 0 0 0 12.128 23zm2.062-2.063a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 0 1 0 2.062z" fill="#FFD43B"/>
</svg>
`;

// 10. Firebase
export const firebaseLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.89 15.672L6.155 1.55a.555.555 0 0 1 1.037-.116l2.457 4.793L3.89 15.672z" fill="#FFA000"/>
  <path d="M13.486 11.088l-2.22-4.24-7.376 8.824 9.596-4.584z" fill="#F57C00"/>
  <path d="M12.186 22.427a1.144 1.144 0 0 0 .907 0l7.246-4.137-2.658-16.326a.555.555 0 0 0-.986-.23L3.89 15.672l8.296 6.755z" fill="#FFCA28"/>
</svg>
`;

// 11. AWS
export const awsLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.86 9.87c0 .76.14 1.34.42 1.74.28.4.73.6 1.35.6.51 0 .97-.15 1.38-.45.41-.3.72-.73.93-1.29v1.61h1.56V6.5h-1.56v.83c-.22-.3-.53-.54-.92-.72-.39-.18-.83-.27-1.32-.27-.67 0-1.2.22-1.59.66-.39.44-.58 1.06-.58 1.87v1.0c0 .32.03.66.09 1.0zm1.75-2.61c.23 0 .44.06.63.18.19.12.33.29.42.51v2.13c-.09.21-.23.38-.42.5-.19.12-.4.18-.63.18-.32 0-.57-.12-.75-.36-.18-.24-.27-.6-.27-1.08v-.94c0-.49.09-.86.27-1.1.18-.24.43-.36.75-.36zm5.83 4.82l.96-3.88h-1.6l-.61 3.01-.68-3.01h-1.6l1.04 3.88h1.89zm4.01-3.69c-.27-.12-.6-.18-.99-.18-.33 0-.61.07-.84.21-.23.14-.35.34-.35.6 0 .23.08.41.24.54.16.13.43.25.81.36.49.14.86.32 1.11.54.25.22.37.52.37.9 0 .48-.19.86-.57 1.14-.38.28-.9.42-1.56.42-.42 0-.82-.07-1.2-.21l.33-1.25c.34.15.71.22 1.11.22.36 0 .64-.07.84-.21.2-.14.3-.34.3-.6 0-.22-.09-.4-.27-.54-.18-.14-.46-.26-.84-.36-.5-.13-.86-.31-1.08-.54-.22-.23-.33-.53-.33-.9 0-.46.18-.83.54-1.11.36-.28.84-.42 1.44-.42.39 0 .76.06 1.11.18l-.33 1.25z" fill="#FF9900"/>
  <path d="M3.86 16.59c3.96 2.11 8.92 2.11 12.88 0l.54.91c-4.32 2.3-9.64 2.3-13.96 0l.54-.91z" fill="#FF9900"/>
  <path d="M16.48 15.68l2.52 2.52-3.48.96.96-3.48z" fill="#FF9900"/>
</svg>
`;

// 12. TensorFlow
export const tensorflowLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.292 5.856L11.54 0v24l-4.14-2.417V15.93L3.376 13.57V8.291l4.024 2.32V5.885L1.292 5.856zM22.708 5.856L12.46 0v24l4.14-2.417V15.93l4.024-2.36V8.291l-4.024 2.32V5.885l6.108-.029z" fill="#FF6F00"/>
</svg>
`;

// 13. Node.js
export const nodejsLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#339933" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1.8L2.2 7.5v11.4L12 24.6l9.8-5.7V7.5L12 1.8zm0 2.6l7.5 4.3v8.6L12 21.7l-7.5-4.3V8.7L12 4.4z"/>
</svg>
`;

// 14. Figma
export const figmaLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
  <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
  <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
  <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
  <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
</svg>
`;

// 15. Docker
export const dockerLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#2496ED" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 0 0 .186-.186V3.575a.185.185 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186zm0 2.716h2.118a.186.186 0 0 0 .186-.186V6.291a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.083.186.185.186zm0 2.714h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H8.075a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 0 0 .185-.186V6.291a.185.185 0 0 0-.185-.186H8.075a.185.185 0 0 0-.185.186v1.887c0 .102.083.186.185.186zm-2.955 2.714h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.166a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185zm16.892.42c-.287.112-.6.18-.925.18h-2.12a.185.185 0 0 1-.185-.185v-1.887c0-.103.083-.186.185-.186h2.12c.16 0 .313.023.46.066.425-1.127 1.34-1.92 2.457-2.13.197.64.12 1.455-.224 2.222.955.438 1.636 1.36 1.764 2.46-.388.24-.88.375-1.428.375a3.42 3.42 0 0 1-2.104-.735zM.001 13.022c0 2.91 2.302 5.098 5.753 5.098 5.37 0 9.073-2.607 10.963-6.076.993.09 2.012-.083 2.825-.562-.258 1.135-1.107 2.02-2.186 2.404C15.603 16.92 11.233 20.5 5.754 20.5.941 20.5 0 17.152 0 13.022z"/>
</svg>
`;

// 16. Flutter
export const flutterLogo = (size = 24, className = '') => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#02569B" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372z" fill="#47C5FB"/>
  <path d="M14.286 11.4L8.571 17.1l5.715 5.7h7.414L16 17.1l5.714-5.7h-7.428z" fill="#02569B"/>
  <path d="M11.429 14.25L8.571 17.1l2.858 2.85 2.857-2.85-2.857-2.85z" fill="#01579B"/>
</svg>
`;

// Helper map for dynamic tech icon lookups
const techLogosMap: Record<string, (size?: number, className?: string) => string> = {
  openai: openAILogo,
  graphql: graphQLLogo,
  tailwind: tailwindLogo,
  'tailwind css': tailwindLogo,
  postgresql: postgresqlLogo,
  postgres: postgresqlLogo,
  react: reactLogo,
  'react native': reactLogo,
  nextjs: nextjsLogo,
  'next.js': nextjsLogo,
  vue: vueLogo,
  'vue.js': vueLogo,
  typescript: typescriptLogo,
  ts: typescriptLogo,
  python: pythonLogo,
  firebase: firebaseLogo,
  aws: awsLogo,
  tensorflow: tensorflowLogo,
  nodejs: nodejsLogo,
  'node.js': nodejsLogo,
  figma: figmaLogo,
  docker: dockerLogo,
  flutter: flutterLogo
};

export function getTechLogo(name: string, size = 24, className = ''): string {
  const key = name.toLowerCase().trim();
  if (techLogosMap[key]) {
    return techLogosMap[key](size, className);
  }
  // Generic tech code fallback
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="tech-logo-svg ${className}" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
    </svg>
  `;
}

// Clean Vector Service Icons (for Services page & previews)
export const serviceIcons = {
  web: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  mobile: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
  ecommerce: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  uiux: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.58 7.58"/><circle cx="11" cy="11" r="2"/></svg>`,
  graphic: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`,
  branding: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  ai: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12L2.1 12.1"/><path d="M12 12L19.1 5.1"/></svg>`,
  marketing: (size = 28) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
};
