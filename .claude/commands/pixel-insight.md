# pixel-insight

Create a new Insight article for the Pixel Agency website (pixelagency.com.au).

## Inputs

**Required** (ask if not provided):
- `title` — the insight title
- `text` — full body text of the insight

**Optional:**
- `summary` — one-line summary sentence; auto-generate from text if not provided
- `tags` — topic tags array; auto-generate from text if not provided
- `featured` — boolean, defaults to `false`

---

## Step 1 — Derive metadata

**slug**
Lowercase the title, strip all punctuation except hyphens, replace spaces with `-`.
Example: "What a Good Brief Looks Like" → `what-a-good-brief-looks-like`

**publishedAt**
Today's date in `YYYY-MM-DD` format.

**dateLabel**
Today's date as `"Dth Month, YYYY"` with correct English ordinal suffix:
- 1st, 21st, 31st → `st`
- 2nd, 22nd → `nd`
- 3rd, 23rd → `rd`
- 4th–20th, 24th–30th → `th`

Example: 3 July 2026 → `"3rd July, 2026"`

**summary**
If not provided: read the insight text and write a single concise sentence (≤20 words) that describes what the reader will learn. Do not start with "This article".

**tags**
If not provided: pick 1–3 relevant tags from this approved list, choosing whichever best match the content:
`Discovery`, `Project Management`, `Off-shoring`, `Consulting`, `Technology`, `AI`, `Business`, `Knowledge Management`, `Risk Management`
Only introduce a new tag if none of the above fit.

**colour**
Rotate through this ordered list, picking the next colour after the last `colour` value in `src/data/insights.ts`:

```
pixel-solar → pixel-celestial → pixel-rosy → pixel-teal → pixel-fire → pixel-fawn → (back to pixel-solar)
```

Read `src/data/insights.ts`, find the `colour` of the last entry in the `insights` array, then pick the next colour in the cycle above.

---

## Step 2 — Create the .astro page

Read `src/pages/insights/why-and-when-to-do-a-discovery-phase.astro` as the template.

Create `src/pages/insights/<slug>.astro` following this exact structure:

```astro
---
import LetsTalk from '@components/home/LetsTalk.astro'
import Insight from '@components/insights/Insight.astro'
import InsightSignoff from '@components/insights/InsightSignoff.astro'
import Layout from '@layouts/Layout.astro'
import { getInsightNav } from '@data/insights'
import InsightNav from '@components/insights/InsightNav.astro'

const { previous, current, next } = getInsightNav('<slug>')
---

<Layout title={current?.title} description={current?.summary}>
  <Insight>
    <span slot="insight-title">{current?.title}</span>
    <span slot="insight-subtitle">{current?.dateLabel}</span>
    <span slot="insight-text">
      <!-- insight body paragraphs here -->
      <InsightSignoff />
    </span>
  </Insight>

  <InsightNav previousInsight={previous} nextInsight={next} />

  <LetsTalk />
</Layout>
```

**Formatting the insight text:**
- Wrap each paragraph in `<p>` tags
- Separate paragraphs with `<br />`
- Preserve any links from the provided text using `<a href="..." class="underline underline-offset-2">...</a>`
- Place `<InsightSignoff />` as the last item before closing `</span>`

---

## Step 3 — Update insights.ts

Open `src/data/insights.ts` and add a new entry to the **bottom** of the `insights` array:

```ts
{
  title: '<title>',
  publishedAt: '<YYYY-MM-DD>',
  dateLabel: '<Dth Month, YYYY>',
  summary: '<summary>',
  slug: '<slug>',
  published: true,
  featured: <true|false>,
  tags: [<tags>],
  colour: '<colour>'
},
```

---

## Step 4 — Confirm

Report back with:
- **File created:** `src/pages/insights/<slug>.astro`
- **Slug:** the derived slug
- **Colour assigned:** which colour was picked
- **Summary:** the generated/provided summary
- **Tags:** the generated/provided tags
- A reminder to commit when happy with the result
