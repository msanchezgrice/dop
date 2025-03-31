// Site metadata
export const SITE_NAME = 'PM Agent';
export const SITE_DESCRIPTION = 'AI-powered project management assistant';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://pmagent.ai';

// Navigation
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' }
];

// Feature cards
export const FEATURES = [
  {
    title: 'Task Management',
    description: 'Intelligent task prioritization and automation based on your workflow.',
    icon: 'task',
  },
  {
    title: 'Team Collaboration',
    description: 'Seamless sharing and collaboration with team members.',
    icon: 'team',
  },
  {
    title: 'AI Assistance',
    description: 'Smart suggestions and automation powered by advanced AI.',
    icon: 'ai',
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools for a unified workflow.',
    icon: 'integration',
  },
];

// Pricing tiers
export const PRICING_TIERS = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Up to 3 projects',
      'Basic task management',
      'Limited AI assistance',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '19',
    interval: 'month',
    features: [
      'Unlimited projects',
      'Advanced task management',
      'Full AI assistance',
      'Team collaboration',
      'Priority support',
    ],
    cta: 'Start Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

// Support contact
export const SUPPORT_EMAIL = 'support@pmagent.ai';

// Social media
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/pmagent',
  github: 'https://github.com/pmagent',
  linkedin: 'https://linkedin.com/company/pmagent',
}; 