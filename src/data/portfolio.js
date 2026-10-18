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
    tags: ['C#', 'Available on Steam'],
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
     platform: 'steam',
  },
  {
    id: 'skincancer',
    name: 'WCS Skin Cancer Diagnostics AI',
    type: 'Machine learning healthcare app',
    year: '2026',
    tags: ['Python', 'PyTorch', 'Next.js', 'FastAPI',],
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
    id: 'towerdefence',
    name: 'Tower Defence',
    type: 'Tower defence game',
      year: '2025',
      tags: ['C#', 'Unity'],
      description:
        'A C# tower defence game built with Unity, where players place ' +
        'defensive towers to stop waves of enemies.',
    detail:
        'The game is organized across reusable C# scripts and Unity assets for the game with ' +
        'loop, enemies, settings, and menus.',
      color: 'tower',
      repositoryUrl: 'https://github.com/brianlee8974/Tower-Defence',
      repositoryLabel: 'GitHub',
  },
]
