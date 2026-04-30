import mbImage from '@assets/mb.png'
import holmesglen from '@assets/case-studies/holmesglen/tile.svg'
import vincentcare from '@assets/case-studies/vincentcare/tile.webp'
import yoplait from '@assets/case-studies/yoplait/tile.webp'
import bhn from '@assets/case-studies/bhn/tile.webp'
import farmers from '@assets/case-studies/farmers-union/tile.webp'
import stemhub from '@assets/case-studies/stemhub/tile.svg'
import simple from '@assets/case-studies/simple/tile.webp'
import insulation from '@assets/case-studies/insulation/tile.webp'
import eel from '@assets/case-studies/eel/tile.webp'
import dare from '@assets/case-studies/dare/tile.webp'
import toll from '@assets/case-studies/toll/tile.webp'
import bawbaw from '@assets/case-studies/bawbaw/tile.webp'
import cyprusays from '@assets/case-studies/cyprusays/tile.webp'
import jamala from '@assets/case-studies/jamala/tile.webp'
import miele from '@assets/case-studies/miele/tile.webp'
import fletcherDam from '@assets/case-studies/fletcher-dam/tile.webp'
import fletcherAi from '@assets/case-studies/fletcher-ai/tile.webp'
import sonataAi from '@assets/case-studies/sonata-ai/tile.webp'

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
    image: dare,
    published: false,
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
    image: eel,
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
    image: insulation,
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
    published: false,
    featured: false
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
    title: 'Swinburne University',
    slug: 'stemhub',
    industry: ['Education'],
    services: ['Discovery + direction', 'Design', 'Consulting'],
    overview:
      'Shaped a gamified online STEM learning concept for Swinburne University, with full desktop and mobile design and a complete tender response to anchor their national grant bid.',
    colour: 'bg-pixel-orange',
    image: stemhub,
    published: true,
    featured: false
  },
  {
    title: 'Farmers Union Greek Style Yogurt',
    slug: 'farmers',
    industry: ['Food & Beverage'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      "Translated Farmers Union Greek Yogurt's refreshed packaging brand into a cohesive web and mobile experience, lifting traffic on launch.",
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
    overview:
      "Redesigned Simple.io's website, delivering a 26% lift in leads and 76% longer session times, plus a distinctive illustration-led brand identity.",
    colour: 'bg-pixel-orange',
    image: simple,
    published: true,
    featured: false
  },
  {
    title: 'Toll Uncrewed Systems',
    slug: 'toll',
    industry: ['Logistics', 'Emergency Services'],
    services: ['Discovery + direction', 'Design'],
    overview:
      'Two legacy sites consolidated into a unified brand, with discovery, design, and a head-office-ready business case delivered.',
    colour: 'bg-pixel-orange',
    image: toll,
    published: false,
    featured: false
  },
  {
    title: 'Mt Baw Baw',
    slug: 'bawbaw',
    industry: ['Tourism'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      "Redesigned Mt. Baw Baw Alpine Resort's website, lifting customer satisfaction by 88% and accommodation bookings by 25%+.",
    colour: 'bg-pixel-orange',
    image: bawbaw,
    published: true,
    featured: false
  },
  {
    title: 'Cyprusays',
    slug: 'cyprusays',
    industry: ['Education', 'Community'],
    services: ['Consulting'],
    overview:
      'Took an off-shore-built Greek Cypriot language app from rudderless to launched on iOS and Android, with the founders trained to run delivery themselves.',
    colour: 'bg-pixel-green',
    image: cyprusays,
    published: true,
    featured: false
  },
  {
    title: 'Jamala Properties',
    slug: 'jamala',
    industry: ['Construction'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'A 12-month time-boxed digital experiment that gave a specialist childcare builder a clear, data-backed answer on whether a national market existed, letting them close the venture cleanly without overcommitting.',
    colour: 'bg-pixel-green',
    image: jamala,
    published: false,
    featured: false
  },
  {
    title: 'Miele Australia',
    slug: 'miele',
    industry: ['Home Appliances'],
    services: ['Consulting'],
    overview:
      'Digital consulting and strategy for Miele Australia in the domestic and commercial appliances sector. Pixel Agency mapped its technology landscape ahead of the global SAP S/4HANA transition, securing a market-specific implementation that now benchmarks similar Miele markets.',
    colour: 'bg-pixel-red',
    image: miele,
    published: false,
    featured: false
  },
  {
    title: 'Fletcher Insulation Digital Asset Management Platform',
    slug: 'fletcher-dam',
    industry: ['Construction', 'Manufacturing'],
    services: ['Discovery + direction', 'Design', 'Development'],
    overview:
      'Custom Digital Asset Management platform design and development for Fletcher Insulation, an Australian leader in the building and construction insulation products sector. Pixel Agency built a self-service DAM for Fletcher employees and approved partners with a custom approval workflow, cutting asset support requests by 15% and replacing scattered files with a single source of truth.',
    colour: 'bg-pixel-green',
    image: fletcherDam,
    published: true,
    featured: false
  },
  {
    title: 'Fletcher Insulation + Pixel Assist',
    slug: 'fletcher-ai',
    industry: ['Construction', 'Manufacturing'],
    services: ['AI'],
    overview:
      'AI for Fletcher Insulation. Pixel Agency deployed Pixel Assist, our AI knowledge assistant product on insulation.com.au, surfacing product information instantly and cutting support queries in a successful trial.',
    colour: 'bg-pixel-green',
    image: fletcherAi,
    published: true,
    featured: false
  },
  {
    title: 'Sonata AI Acoustic Risk Calculator',
    slug: 'sonata-ai',
    industry: ['Construction', 'Manufacturing'],
    services: ['AI'],
    overview:
      'AI for Sonata AI. Pixel Agency built a custom acoustic risk calculator for Sonata AI, demonstrating the potential of AI-powered tools to provide instant, accurate insights and drive informed decision-making in the construction industry.',
    colour: 'bg-pixel-green',
    image: sonataAi,
    published: true,
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
