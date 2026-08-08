# Location-based SEO — findings and plan

**Written:** 8 August 2026
**Applies to:** future builds. Read this before adding any new location page.

---

## 1. What I found in the three pages we already have

```
screening-petaling-jaya.html   1,425 words
screening-puchong.html         1,386 words
screening-shah-alam.html       1,404 words

petaling-jaya vs puchong       84.7% identical sentences
petaling-jaya vs shah-alam     85.9% identical sentences
puchong       vs shah-alam     85.9% identical sentences
```

On the Petaling Jaya page, **11 sentences out of 72 are unique**. The other 61 appear word for word on the other two.

**This is the pattern Google calls a doorway page.** Their guidance names it directly: multiple pages with substantially similar content that differ mainly by location, created to funnel visitors into the same destination. The penalty isn't usually dramatic — pages just quietly fail to rank, or get filtered so only one of the three ever shows.

The 11 unique sentences are genuinely good, by the way. Neighbourhood names, the NPE and LDP routes, travel time against school traffic. That's exactly the right instinct. There just isn't enough of it.

**So the first job isn't building more location pages. It's making the three we have genuinely different from each other.** Adding a fourth and fifth in the current shape makes the problem worse, not better.

---

## 2. The rule that separates location pages that work from ones that get ignored

A location page earns its place when **someone who lives there would notice it was written for them.**

Not "we serve Puchong" pasted into a template. Something a Puchong parent could not get from the Subang Jaya page.

| Fails | Works |
|---|---|
| "We serve families in Puchong." | "From Bandar Puteri, it's about 18 minutes down the LDP, and most of our Puchong families book the 4pm slot to miss the Sunway crawl." |
| Same FAQ block, place name swapped | FAQs that came from actual Puchong parents |
| "Near Puchong" in the title and little else | Named neighbourhoods, schools, routes, landmarks |
| Stock photo | A real photo, or none |

**The honest test:** delete the place name from the page. If it could now be about anywhere, Google thinks so too.

---

## 3. The trap to avoid: the condition × location matrix

The tempting next move is `dyslexia-support-puchong.html`, `adhd-support-shah-alam.html`, and so on. Seven conditions across six locations is 42 pages, and it looks like enormous SEO coverage.

**Don't.** It's the fastest route to a site-wide quality problem. Forty-two pages that are 90% identical will drag down the pages that currently work — including the seven condition pages, which are genuinely good.

There is also almost no search volume behind "dyslexia support Puchong" specifically. The volume sits in "dyslexia support Malaysia" and "dyslexia assessment Selangor", which your existing condition pages already target.

---

## 4. What actually drives local search — and it isn't these pages

For "learning centre near me" and similar, the ranking is decided mostly by:

1. **Google Business Profile** — proximity to the searcher, category, review count and recency, photos, posts. This is the big one and it's already working for you.
2. **NAP consistency** — name, address, phone identical everywhere it appears online.
3. **Local citations** — being listed on Malaysian directories.
4. **Then** on-page location signals.

Location pages help you appear for typed searches like "child screening Petaling Jaya". They do very little for map-pack results, which is where most "near me" traffic actually goes.

**Highest-value local work, in order:**

1. Keep getting Google reviews. You've had two recently — that's the single best local signal available.
2. Post to GBP occasionally. Barely used by most competitors.
3. Add photos to GBP. Real ones, of the centre.
4. Then improve location pages.

---

## 5. Recommended plan

### Phase 1 — fix what exists (before anything new)

Rewrite the three current pages so each is at least **50% unique**. Target: 30 or more unique sentences out of roughly 70.

The single strongest differentiator available, and one nobody else is doing: **a real local pathway section**.

> **Getting a formal assessment near Puchong**
> Your nearest Klinik Kesihatan is [name and address]. A referral from there goes to the paediatric department at [named hospital]. Typical wait, what to ask for, and what it costs.

That is factual, genuinely useful to a worried parent, unique per area by definition, and impossible to template. It also reinforces the honest positioning we've used throughout — we tell you the public route even when it isn't us.

Other per-area material worth gathering:

- Named neighbourhoods, expanded from the handful already there
- The route and realistic travel time, including traffic behaviour
- Schools in that area you've actually worked with (with permission)
- One anonymised family from that area, in the style of the guides
- Which concerns come up most from that area, if you've noticed a pattern

### Phase 2 — only then, add locations

Add a new location page only when **all three** are true:

1. You already get enquiries from there
2. You can write 400+ words that apply only to that area
3. It's somewhere a parent would plausibly type into Google

Likely candidates in priority order: **Subang Jaya** (your own area, and currently the only one without a dedicated page), **USJ**, **Klang**, **Bandar Sunway**.

Subang Jaya is the obvious gap. You're physically there and it's your strongest local claim.

### Phase 3 — Malay location pages

Only after the English ones are genuinely distinct. Translating three near-duplicate pages produces three more near-duplicate pages in another language.

---

## 6. Template: what every location page must contain

Everything in bold must be **written fresh for that location**, not templated.

1. **H1 with the location** — "Child Learning Screening near [Area]"
2. **Opening paragraph naming real neighbourhoods** — three or more
3. **Getting here** — route, road names, realistic travel time, traffic advice
4. **Signs parents in this area bring us** — reordered and reworded per area
5. **Getting a formal assessment near [Area]** — nearest Klinik Kesihatan, referral hospital, costs, waits
6. **One anonymised local family**, guide-style
7. Shared: what we screen for, what happens in a session, pricing *(this part may be templated)*
8. **FAQs specific to this area** — at least three of six unique
9. Contact block

Roughly 60% unique, 40% shared. That ratio is defensible; 15% is not.

## 7. Technical, per page

- Canonical to itself
- `LocalBusiness` schema with a single `areaServed` for that location, plus `geo` for the actual centre — never fake coordinates for the target area
- Unique title under 60 chars and unique meta description
- Internal links: from the homepage area section and from the other location pages
- **No hreflang unless a Malay version genuinely exists.** All three currently declared a Malay alternate pointing at themselves; that was removed on 8 Aug.

## 8. How to tell whether it's working

In Search Console, filter Performance by page and look for **impressions on queries containing the place name**. If a location page gets impressions only for your brand name, it isn't earning its keep.

Give it 8–12 weeks. Local pages are slower than content pages.

---

## 9. One honest caveat

Location pages are a modest lever. Realistically they might bring a few enquiries a month once they're good, whereas one well-written guide ranking for "why does my child reverse letters" can bring more than all of them combined.

If time is limited, the order I'd put them in:

1. Google reviews and GBP posts
2. More parent guides
3. Fixing the three existing location pages
4. New location pages

---

## 10. Progress log

**8 Aug 2026 — Phase 1, first pass. Commit `pending`.**

Added a per-area "Getting a formal assessment in [Area]" section to all three pages, built on
verified government facility details (see `_build/location-facts.md`), plus three area-specific
FAQ answers per page.

```
                    unique sentences        pages identical to each other
before                  ~15%                        85-86%
after                   35-40%                      59-64%
```

Still short of the 50% target. **The remaining gap needs material only Roshan has:**

1. **Schools you actually work with in each area**, named, with permission. One or two per page.
2. **One anonymised family per area**, in the style of the guides. This alone would add 6-8
   unique sentences per page and is the single highest-value addition.
3. **Which concerns come up most from each area**, if there's a pattern you've noticed. Puchong
   parents may ask about different things from Shah Alam parents.
4. **Whether the travel times and neighbourhoods I wrote are accurate.** I inferred routes from
   maps, not from experience. Correct them.

Once those go in, the pages will clear 50% comfortably and can be considered done.

**Do not add a fourth location page until the three existing ones clear 50%.**
