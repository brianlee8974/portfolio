// Edit your personal details and project content here.
export const profile = {
  name: 'Taehyun Lee',
  initials: 'TL',
  role: 'Creative developer',
  email: 'brianlee8974@gmail.com',
  location: 'London, Ontario',
}

export const projects = [
  {
    id: 'deskcanvas',
    name: 'DeskCanvas',
    type: 'Windows desktop customization',
    year: '2026',
    tags: ['Windows', 'Desktop customization', 'Productivity'],
    description:
      'A Windows app for making your desktop your own. Arrange customizable ' +
      'panels, organize apps, and build a workspace around your daily workflow.',
    detail:
      'Combine app launchers, shortcuts, clocks, and system information in ' +
      'flexible panels. Personalize colors, spacing, and layouts, with ' +
      'automatic saving and independent resets for individual sections.',
    color: 'deskcanvas',
    url: 'https://store.steampowered.com/app/4889250/DeskCanvas/',
    linkLabel: 'View on Steam',
  },
  {
    id: 'skincancer',
    name: 'WCS Skin Cancer Diagnostics AI',
    type: 'Machine learning healthcare app',
    year: '2026',
    tags: ['Next.js', 'FastAPI', 'PyTorch'],
    description:
      'An AI-assisted screening tool that classifies skin lesion images ' +
      'and returns confidence scores and recommendations.',
    detail:
      'The full-stack application combines a Next.js interface, FastAPI ' +
      'backend, and EfficientNetV2-S model. It is intended for education ' +
      'and informational use, not clinical diagnosis.',
    color: 'skin',
    url: 'https://skin-cancer-ai-gules.vercel.app',
    linkLabel: 'Live Demo',
    repositoryUrl: 'https://github.com/brianlee8974/WCS_SkinCancerDiagnosticsAI',
    repositoryLabel: 'GitHub',
  },
  {
    id: 'folio',
    name: 'Folio',
    type: 'Developer portfolio',
    year: '2025',
    tags: ['Vite', 'React', 'Tailwind CSS'],
    description:
      'A little personality, a lot of intention. A responsive home for ' +
      'the things you make and the story behind them.',
    detail:
      'The portfolio you are exploring is the working implementation of ' +
      'this concept. It includes responsive navigation, accessible project ' +
      'dialogs, reusable components, and a content-first layout.',
    color: 'mint',
  },
]
