import mbImage from '@assets/mb.png'
import holmesglen from '@assets/case-studies/holmesglen/tile.webp'
import vincentcare from '@assets/case-studies/vincentcare/tile.webp'
import yoplait from '@assets/case-studies/yoplait/tile.webp'
import bhn from '@assets/case-studies/bhn/tile.webp'
import farmers from '@assets/case-studies/farmers-union/tile.webp'
import stemhub from '@assets/case-studies/stemhub/tile.webp'
import simple from '@assets/case-studies/simple/tile.webp'

import type { ImageMetadata } from 'astro'

export interface CaseStudy {
  title: string
  slug: string
  industry: string[]
  services: string[]
  overview: string
  colour: string
  image: ImageMetadata
  imagePosition?: string // e.g. 'top', 'center', 'bottom'
  published: boolean
  featured: boolean
}

export interface CaseStudyLink {
  name: string
  slug: string
}

export interface CaseStudyNav {
  previous?: CaseStudyLink
  next?: CaseStudyLink
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Better Health Network',
    slug: 'bhn',
    industry: ['Health', 'Community'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'Unified three merging community health organisations online, achieving a 115% increase in total visitors within six months of launch.',
    colour: 'bg-pixel-green',
    image: bhn,
    published: true,
    featured: true
  },
  {
    title: 'Dare Iced Coffee',
    slug: 'dare',
    industry: ['Food & Beverage'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      "Transformed Dare Iced Coffee's digital presence, delivering a 200%+ increase in time on site and a meaningful reduction in support load.",
    colour: 'bg-pixel-red',
    image: mbImage,
    published: true,
    featured: false
  },
  {
    title: 'Explorers Early Learning',
    slug: 'eel',
    industry: ['Education', 'Childcare'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'Redesigned the website to drive 9% more centre tour bookings and a 24% increase in session time from prospective parents.',
    colour: 'bg-pixel-pink',
    image: mbImage,
    published: true,
    featured: false
  },
  {
    title: 'Fletcher Insulation',
    slug: 'insulation',
    industry: ['Construction', 'Manufacturing'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'A full website rebuild that drove a 40% lift in visitors and 300%+ increase in session time, while cutting support requests by 30%.',
    colour: 'bg-pixel-blue',
    image: mbImage,
    published: true,
    featured: true
  },
  {
    title: 'Holmesglen Institute',
    slug: 'holmesglen',
    industry: ['Education'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'Built a student-employer platform from the ground up. 200+ registered students, 1,200+ registered employers and 80+ student job placements in year one.',
    colour: 'bg-pixel-pink',
    image: holmesglen,
    imagePosition: 'top',
    published: true,
    featured: true
  },
  {
    title: 'Sonata AI',
    slug: 'sonata-ai',
    industry: ['Technology', 'AI'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'A ground-up digital experience built to redefine how AI-powered software is designed, marketed and sold — from positioning through to product interface.',
    colour: 'bg-pixel-pink',
    image: mbImage,
    published: false,
    featured: false
  },
  {
    title: 'VincentCare',
    slug: 'vincentcare',
    industry: ['Not-for-profit'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview: "Redesigned VincentCare's website, achieving a 14% increase in donations and 22% longer session times.",
    colour: 'bg-pixel-yellow',
    image: vincentcare,
    published: true,
    featured: true
  },
  {
    title: 'Yoplait',
    slug: 'yoplait',
    industry: ['Food & Beverage'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      "Transformed Yoplait Australia's digital presence, delivering +30% more traffic and +50% longer session times.",
    colour: 'bg-pixel-orange',
    image: yoplait,
    published: true,
    featured: true
  },
  {
    title: 'Stemhub',
    slug: 'stemhub',
    industry: ['Education'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview: 'TBD',
    colour: 'bg-pixel-orange',
    image: stemhub,
    published: false,
    featured: false
  },
  {
    title: 'Farmers Union Greek Style Yogurt',
    slug: 'farmers',
    industry: ['Food & Beverage'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview: 'TBD',
    colour: 'bg-pixel-orange',
    image: farmers,
    published: false,
    featured: false
  },
  {
    title: 'Simple.io',
    slug: 'simple',
    industry: ['SaaS', 'Technology'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview: 'TBD',
    colour: 'bg-pixel-orange',
    image: simple,
    published: false,
    featured: false
  }
]

const sorted = [...caseStudies].sort((a, b) => a.title.localeCompare(b.title))

export const publishedCaseStudies = sorted.filter((cs) => cs.published)

export const featuredCaseStudies = sorted.filter((cs) => cs.featured)

export function getCaseStudyNav(slug: string): CaseStudyNav {
  const index = publishedCaseStudies.findIndex((cs) => cs.slug === slug)
  if (index === -1) return {}
  return {
    previous:
      index > 0
        ? { name: publishedCaseStudies[index - 1].title, slug: publishedCaseStudies[index - 1].slug }
        : undefined,
    next:
      index < publishedCaseStudies.length - 1
        ? { name: publishedCaseStudies[index + 1].title, slug: publishedCaseStudies[index + 1].slug }
        : undefined
  }
}

export function resolveColour(colour: string): { class?: string; style?: string } {
  if (colour.startsWith('#') || colour.startsWith('rgb')) {
    return { style: `background-color: ${colour}` }
  }
  return { class: colour }
}
