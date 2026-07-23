export interface Insight {
  title: string
  publishedAt: string
  dateLabel: string
  summary: string
  slug: string
  published: boolean
  featured: boolean
  tags: string[]
  colour: string
}

export interface InsightLink {
  title: string
  slug: string
}

export interface InsightNav {
  previous?: InsightLink
  current?: Insight
  next?: InsightLink
}

const insights: Insight[] = [
  {
    title: 'Why and When To Do A Discovery Phase',
    publishedAt: '2026-06-06',
    dateLabel: '6th June, 2026',
    summary: 'What is its purpose, what does it involve, and how can it help ensure the success of your project.',
    slug: 'why-and-when-to-do-a-discovery-phase',
    published: true,
    featured: true,
    tags: ['Discovery', 'Project Management'],
    colour: 'pixel-solar'
  },
  {
    title: 'What a Discovery Phase Looks Like',
    publishedAt: '2026-06-06',
    dateLabel: '6th June, 2026',
    summary: 'What is typically involved in a Discovery phase, and what you should expect to receive at the end of it.',
    slug: 'what-a-discovery-phase-looks-like',
    published: true,
    featured: true,
    tags: ['Discovery', 'Project Management'],
    colour: 'pixel-celestial'
  },
  {
    title: 'What About Off-shoring?',
    publishedAt: '2026-06-07',
    dateLabel: '7th June, 2026',
    summary: 'What are the considerations and potential challenges when off-shoring a project?',
    slug: 'what-about-off-shoring',
    published: true,
    featured: false,
    tags: ['Off-shoring'],
    colour: 'pixel-rosy'
  },
  {
    title: 'What a Good Brief Looks Like',
    publishedAt: '2026-06-07',
    dateLabel: '7th June, 2026',
    summary: 'What to know what to include in a project brief?',
    slug: 'what-a-good-brief-looks-like',
    published: true,
    featured: true,
    tags: ['Discovery'],
    colour: 'pixel-teal'
  },
  {
    title: 'How To Manage Multiple Agencies Working On The Same Project',
    publishedAt: '2026-06-07',
    dateLabel: '7th June, 2026',
    summary:
      'How to coordinate and manage multiple agencies working on the same project to ensure a successful outcome.',
    slug: 'how-to-manage-multiple-agencies-working-on-the-same-project',
    published: true,
    featured: false,
    tags: ['Project Management'],
    colour: 'pixel-fawn'
  },
  {
    title: 'What Good Communication Looks Like On A Digital Project',
    publishedAt: '2026-06-08',
    dateLabel: '8th June, 2026',
    summary: 'How clear documentation, stage gates, and proactive updates keep digital projects on track.',
    slug: 'what-good-communication-looks-like-on-a-digital-project',
    published: true,
    featured: false,
    tags: ['Project Management'],
    colour: 'pixel-fire'
  },
  {
    title: 'How To Evaluate The Technology Your Agency Recommends',
    publishedAt: '2026-06-08',
    dateLabel: '8th June, 2026',
    summary: 'Practical questions non-technical clients can ask before committing to a proposed tech stack.',
    slug: 'how-to-evaluate-the-technology-your-agency-recommends',
    published: true,
    featured: false,
    tags: ['Consulting', 'Technology'],
    colour: 'pixel-fawn'
  },
  {
    title: 'Does AI Have a Sustainable Business Model?',
    publishedAt: '2026-06-18',
    dateLabel: '18th June, 2026',
    summary: 'No. And we tell you why.',
    slug: 'does-ai-have-a-sustainable-business-model',
    published: true,
    featured: true,
    tags: ['AI', 'Business'],
    colour: 'pixel-solar'
  },
  {
    title: 'Why You Should Consider Using Your Own AI Model',
    publishedAt: '2026-06-23',
    dateLabel: '23rd June, 2026',
    summary: 'The case for self-hosting AI models instead of relying on third-party APIs.',
    slug: 'why-you-should-consider-using-your-own-ai-model',
    published: true,
    featured: false,
    tags: ['AI'],
    colour: 'pixel-celestial'
  },
  {
    title: 'Open Knowledge Format: A Format For Company Knowledge That Your Team And Your AI Can Both Use',
    publishedAt: '2026-06-30',
    dateLabel: '30th June, 2026',
    summary:
      'A new open standard for storing company knowledge in a format that works for your team today and your AI systems tomorrow.',
    slug: 'open-knowledge-format-a-format-for-company-knowledge-that-your-team-and-your-ai-can-both-use',
    published: true,
    featured: false,
    tags: ['AI', 'Knowledge Management'],
    colour: 'pixel-teal'
  },
  {
    title: 'Lets Derisk Your Project Delivery',
    publishedAt: '2026-07-01',
    dateLabel: '1st July, 2026',
    summary:
      'A clear process, a good brief, and a well-defined scope are the best ways to derisk your project delivery.',
    slug: 'lets-derisk-your-project-delivery',
    published: true,
    featured: false,
    tags: ['Risk Management'],
    colour: 'pixel-rosy'
  },
  {
    title: 'How To Protect Your Business In Case Your Agency Closes',
    publishedAt: '2026-07-03',
    dateLabel: '3rd July, 2026',
    summary:
      'Practical steps to protect your hosting, domain, plugin licences, and agency relationship if your agency shuts down.',
    slug: 'how-to-protect-your-business-in-case-your-agency-closes',
    published: true,
    featured: true,
    tags: ['Risk Management', 'Business'],
    colour: 'pixel-fire'
  },
  {
    title: 'When Should You Deploy AI In Your Business',
    publishedAt: '2026-07-08',
    dateLabel: '8th July, 2026',
    summary:
      'AI works best when it solves a specific problem. Here are the eight problems where it tends to be a genuinely good fit for small and medium businesses.',
    slug: 'when-should-you-deploy-ai-in-your-business',
    published: true,
    featured: false,
    tags: ['AI', 'Business'],
    colour: 'pixel-fawn'
  },
  {
    title: 'What Happens When Your AI Actually Knows Your Business',
    publishedAt: '2026-07-14',
    dateLabel: '14th July, 2026',
    summary:
      'When your AI can query your own accumulated knowledge, the answers it gives are entirely different. Here is what that looks like in practice.',
    slug: 'what-happens-when-your-ai-actually-knows-your-business',
    published: true,
    featured: false,
    tags: ['AI', 'Knowledge Management'],
    colour: 'pixel-solar'
  },
  {
    title: 'POC vs MVP: What They Are and When to Use Them',
    publishedAt: '2026-07-14',
    dateLabel: '14th July, 2026',
    summary:
      'POC and MVP are not just buzz-words and are not the same thing. Here is what each one is, when to use it, and how to keep feature creep from turning both into something they were never meant to be.',
    slug: 'poc-vs-mvp-what-they-are-and-when-to-use-them',
    published: true,
    featured: false,
    tags: ['Project Management', 'Business'],
    colour: 'pixel-celestial'
  },
  {
    title: 'When Should You Rebuild Your Website?',
    publishedAt: '2026-07-21',
    dateLabel: '21st July, 2026',
    summary:
      'Not every website problem needs a full rebuild. Here is how to tell when it does and when something more targeted will do the job.',
    slug: 'when-should-you-rebuild-your-website',
    published: true,
    featured: false,
    tags: ['Technology', 'Business'],
    colour: 'pixel-rosy'
  },
  {
    title: 'How A Good AI Development Process Actually Works',
    publishedAt: '2026-07-23',
    dateLabel: '23rd July, 2026',
    summary: 'Describes the steps in a good software development process',
    slug: 'how-a-good-ai-development-process-actually-works',
    published: true,
    featured: false,
    tags: ['AI', 'Technology'],
    colour: 'pixel-teal'
  }
]

export const sortedInsights = [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
export const publishedInsights = sortedInsights.filter((insight) => insight.published)
export const featuredInsights = publishedInsights.filter((insight) => insight.featured)

export function getInsightNav(slug: string): InsightNav {
  const index = publishedInsights.findIndex((insight) => insight.slug === slug)
  if (index === -1) {
    throw new Error(`Insight with slug "${slug}" not found`)
  }

  const previous =
    index > 0 ? { title: publishedInsights[index - 1].title, slug: publishedInsights[index - 1].slug } : undefined
  const next =
    index < publishedInsights.length - 1
      ? { title: publishedInsights[index + 1].title, slug: publishedInsights[index + 1].slug }
      : undefined

  const current = publishedInsights[index]

  return { previous, current, next }
}
