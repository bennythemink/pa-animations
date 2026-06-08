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
    dateLabel: 'June, 2026',
    summary: 'What is its purpose, what does it involve, and how can it help ensure the success of your project.',
    slug: 'why-and-when-to-do-a-discovery-phase',
    published: true,
    featured: true,
    tags: ['discovery', 'project management'],
    colour: 'pixel-solar'
  },
  {
    title: 'What a Discovery Phase Looks Like',
    publishedAt: '2026-06-06',
    dateLabel: 'June, 2026',
    summary: 'What is typically involved in a Discovery phase, and what you should expect to receive at the end of it.',
    slug: 'what-a-discovery-phase-looks-like',
    published: true,
    featured: true,
    tags: ['discovery', 'project management'],
    colour: 'pixel-celestial'
  },
  {
    title: 'What About Off-shoring?',
    publishedAt: '2026-06-06',
    dateLabel: 'June, 2026',
    summary: 'What are the considerations and potential challenges when off-shoring a project?',
    slug: 'what-about-off-shoring',
    published: true,
    featured: false,
    tags: ['off-shoring'],
    colour: 'pixel-rosy'
  },
  {
    title: 'What a Good Brief Looks Like',
    publishedAt: '2026-06-06',
    dateLabel: 'June, 2026',
    summary: 'What to know what to include in a project brief?',
    slug: 'what-a-good-brief-looks-like',
    published: true,
    featured: true,
    tags: ['discovery'],
    colour: 'pixel-teal'
  },
  {
    title: 'How To Manage Multiple Agencies Working On The Same Project',
    publishedAt: '2026-06-06',
    dateLabel: 'June, 2026',
    summary:
      'How to coordinate and manage multiple agencies working on the same project to ensure a successful outcome.',
    slug: 'how-to-manage-multiple-agencies-working-on-the-same-project',
    published: true,
    featured: false,
    tags: ['project management'],
    colour: 'pixel-fawn'
  },
  {
    title: 'What Good Communication Looks Like On A Digital Project',
    publishedAt: '2026-06-08',
    dateLabel: 'June, 2026',
    summary: 'How clear documentation, stage gates, and proactive updates keep digital projects on track.',
    slug: 'what-good-communication-looks-like-on-a-digital-project',
    published: true,
    featured: false,
    tags: ['project management', 'communication'],
    colour: 'pixel-fire'
  },
  {
    title: 'How To Evaluate The Technology Your Agency Recommends',
    publishedAt: '2026-06-08',
    dateLabel: 'June, 2026',
    summary: 'Practical questions non-technical clients can ask before committing to a proposed tech stack.',
    slug: 'how-to-evaluate-the-technology-your-agency-recommends',
    published: true,
    featured: false,
    tags: ['consulting', 'technology'],
    colour: 'pixel-solar'
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
