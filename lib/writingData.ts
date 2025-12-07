// This defines all your writing pieces - easier than hardcoding in components

export interface WritingPiece {
    slug: string;
    title: string;
    description: string;
    tag: 'Product Leadership' | 'Building Teams' | 'Data & Analytics' | 'AI';
    type: 'case-study' | 'article';
    outcome?: string; // Only for case studies
    readingTime: string;
    published: boolean;
    publishedDate?: string; // Format: "21-November-2025"
  }
  
  export const writingPieces: WritingPiece[] = [
    // CASE STUDIES
    {
      slug: 'product-led-data-teams',
      title: 'Transforming a Service-Led Data Team into Product-Led',
      description: 'How we rebuilt Pollen’s data function to be product-led, cutting support demand and driving self-serve adoption.',
      tag: 'Data & Analytics',
      type: 'case-study',
      outcome: 'Burnout → Impact',
      readingTime: '17 min',
      published: true,
      publishedDate: '07-December-2025',
    },
    {
      slug: 'embedded-analytics-launch',
      title: 'Embedded Analytics Platform Launch',
      description: 'Built self-service analytics suite for 60K+ event management users across 50 countries, unlocking new revenue streams.',
      tag: 'Product Leadership',
      type: 'case-study',
      outcome: '$2.5M ARR',
      readingTime: '12 min',
      published: false,
    },
    {
      slug: 'event-taxonomy-classifier',
      title: 'Event Taxonomy Classifier',
      description: 'Developed LLM-driven classification system to power customer benchmarking and competitive intelligence tools.',
      tag: 'AI',
      type: 'case-study',
      outcome: '0.85 F1 Score',
      readingTime: '10 min',
      published: false,
    },
    {
      slug: 'data-platform-restructure',
      title: 'Data Platform Restructure & Cost Optimization',
      description: 'Led platform modernization for fintech serving 50K SMBs, reducing costs while improving data accessibility and governance.',
      tag: 'Data & Analytics',
      type: 'case-study',
      outcome: '£100K+ Saved',
      readingTime: '15 min',
      published: false,
    },
    {
      slug: 'scaling-analytics-users',
      title: 'Scaling Analytics from 30 to 400+ Users',
      description: 'Embedded analytics engineers across 8 verticals, democratizing data access and establishing self-service culture.',
      tag: 'Building Teams',
      type: 'case-study',
      outcome: '13x Growth',
      readingTime: '14 min',
      published: false,
    },
    // ARTICLES
    {
      slug: 'prioritisation-framework',
      title: 'A Prioritisation Framework That Actually Works For Data Teams',
      description: 'A walktrough with realworld examples of how to effectively prioritise initiatives and products.',
      tag: 'Product Leadership',
      type: 'article',
      readingTime: '11 min',
      published: true,
      publishedDate: '21-November-2025',
    },
    {
      slug: 'growth-mindset',
      title: 'How to Hire for a Growth Mindset',
      description: 'What is a growth mindset, why is it important, and how to hire for it.',
      tag: 'Building Teams',
      type: 'article',
      readingTime: '8 min',
      published: true,
      publishedDate: '25-November-2025',
    },
    {
      slug: 'brag-document',
      title: 'The Brag Document: Helping Your Team Advocate for Themselves',
      description: 'A practical framework for combating imposter syndrome and building promotion-ready cases. Includes template.',
      tag: 'Building Teams',
      type: 'article',
      readingTime: '8 min',
      published: false,
    },
    {
      slug: 'four-levels-of-ownership',
      title: 'Four Levels of Ownership (And Why Most Teams Get Stuck at Level 2)',
      description: 'NDL → Should Do → Could Do → Others Should Do. A framework for clarifying who owns what on product teams.',
      tag: 'Product Leadership',
      type: 'article',
      readingTime: '7 min',
      published: false,
    },
    {
      slug: 'why-data-teams-need-pms',
      title: 'Why Data Teams Need Product Managers (Not Just Analysts)',
      description: 'The case for treating data platforms, APIs, and analytics as products—not projects. Lessons from 3 scale-ups.',
      tag: 'Data & Analytics',
      type: 'article',
      readingTime: '10 min',
      published: false,
    },
    {
      slug: 'analytics-operating-models',
      title: 'Centralized vs. Embedded: Choosing Your Analytics Operating Model',
      description: 'When to centralize, when to embed, and how to evolve your model as you scale. Includes decision framework.',
      tag: 'Data & Analytics',
      type: 'article',
      readingTime: '12 min',
      published: false,
    },
    {
      slug: 'effective-strategy-sessions',
      title: 'Running Effective Strategy Sessions Without the Fluff',
      description: 'My approach to quarterly planning: hypothesis-driven, outcome-focused, and actually useful for engineering teams.',
      tag: 'Product Leadership',
      type: 'article',
      readingTime: '9 min',
      published: false,
    },
    {
      slug: 'managing-through-strengths',
      title: 'Managing Through Your Strengths (Without Letting Them Become Weaknesses)',
      description: 'Reflections on leading with empathy, context, and a tendency to fix everything. Lessons from CliftonStrengths.',
      tag: 'Building Teams',
      type: 'article',
      readingTime: '11 min',
      published: false,
    },
    {
      slug: 'self-service-analytics',
      title: 'Building Self-Service Analytics That People Actually Use',
      description: 'Why most self-service analytics initiatives fail, and what worked for me at Pollen (30 → 400+ users).',
      tag: 'Data & Analytics',
      type: 'article',
      readingTime: '13 min',
      published: false,
    },
  ];
  
  // Helper functions to filter by type and published status
  export const caseStudies = writingPieces.filter(p => p.type === 'case-study' && p.published);
  export const articles = writingPieces.filter(p => p.type === 'article' && p.published);