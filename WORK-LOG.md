# Lodestone website — work log

**Last updated:** 8 August 2026
**Repo:** github.com/lodestoneasia/lodestonemalaysia (branch `main`)
**Live:** thelodestonesolution.com

---

## What still needs doing — yours

| # | Task | Why it matters |
|---|---|---|
| 1 | **Revoke the GitHub token** | It's been used nine times and is sitting in plain text in a chat log. github.com → Settings → Developer settings → Personal access tokens → Fine-grained → Revoke. |
| 2 | **Move `_internal/` and `Lodestone_Master_Student_List.xlsx` out of the website folder** | That spreadsheet holds children's personal data and currently lives one careless drag away from a public repo. `.gitignore` protects you, but only until it doesn't. |
| 3 | **Fix the sitemap submission in Search Console** | If it still shows *"appears to be an HTML page"*, delete the entry and type only `sitemap.xml` into the box — not the full URL. |
| 4 | **Request indexing, ~10 URLs a day** | See the priority order below. |

### Search Console indexing priority

**Batch 1 — brand fix and thin-content fix**

```
thelodestonesolution.com/
thelodestonesolution.com/lodestone-evo.html
thelodestonesolution.com/screening-check.html
thelodestonesolution.com/guides.html
thelodestonesolution.com/guide-adhd.html
thelodestonesolution.com/guide-dyslexia.html
thelodestonesolution.com/guide-autism.html
thelodestonesolution.com/guide-speech-delay.html
thelodestonesolution.com/guide-dyscalculia.html
thelodestonesolution.com/guide-dysgraphia.html
```

**Batch 2 — retitled pages**

```
thelodestonesolution.com/guide-slow-learners.html
thelodestonesolution.com/adhd-support.html
thelodestonesolution.com/dyslexia-support.html
thelodestonesolution.com/dyscalculia-support.html
thelodestonesolution.com/autism-support.html
thelodestonesolution.com/speech-delay-support.html
thelodestonesolution.com/slow-learners-support.html
thelodestonesolution.com/dysgraphia-support.html
thelodestonesolution.com/early-intervention.html
thelodestonesolution.com/for-schools.html
```

**Batch 3 — the new Malay guides**

```
thelodestonesolution.com/guides-ms.html
thelodestonesolution.com/guide-dyslexia-ms.html
thelodestonesolution.com/guide-adhd-ms.html
thelodestonesolution.com/guide-dyscalculia-ms.html
thelodestonesolution.com/guide-dysgraphia-ms.html
thelodestonesolution.com/guide-autism-ms.html
thelodestonesolution.com/guide-speech-delay-ms.html
thelodestonesolution.com/guide-slow-learners-ms.html
thelodestonesolution.com/screening-check-ms.html
```

Don't re-request the same URL repeatedly — it burns quota and speeds nothing up.

---

## What still needs doing — mine

- **Roll the consolidated nav to the other 26 pages.** Only `index.html` has it. The rest still carry the old flat nav, and mobile breakpoints are inconsistent (index 980px, support pages 900px, guides 820px).
- **Malay versions** of `lodestone-evo.html`, `for-schools.html` and the three location pages.
- **Per-guide social preview images.** All 14 guides currently share `og-image.png`.
- **PDF download buttons** on the guide pages — the PDFs exist but aren't linked from the guides.
- **Homepage section + sticky mobile bar** for the free check (proposed, never built).

---

## Completed — 8 August 2026

### 1. Homepage navigation consolidated · `2173fd7`

Nav went from 14 flat links to 4 top-level items.

| | |
|---|---|
| **Support ▾** | 7 condition pages, divider, then "Not sure yet?" with Find your path and Parent Guides |
| **Programs ▾** | 6 programmes, divider, Lodestone Evo |
| **Specialists ▾** | Our specialists, How it works, About the centre, FAQ |
| **For Schools** | stays visible as its own item |

Actions row: Easy read · BM · **Free 2-min check** (gold, primary) · Book a call (outlined, secondary).
Added a 1120px breakpoint so the bar doesn't crowd on smaller desktops.

### 2. Brand search fix · `f6eb566` · 35 files

**Problem:** searching "the lodestone" returned `lodestone-evo.html` as a standalone result, not the homepage. Evo out-matched the homepage on every brand signal.

| Signal | Homepage before | Evo |
|---|---|---|
| Title starts with | "ADHD, Dyslexia & Autism Support…" | **"Lodestone Evo…"** |
| H1 | "Where every child finds their direction." | **"Lodestone Evo, a Japanese-inspired…"** |
| URL slug | none | **lodestone-evo.html** |
| Internal links using its name | **0** | **41** |

**Fixed:**

- Homepage title → `The Lodestone Centre | Learning Support in Subang Jaya` (54 chars). Condition keywords deliberately removed so the homepage stops cannibalising the seven condition pages, which already target those terms properly.
- "The Lodestone Centre" added as a Cinzel kicker inside the homepage H1. The animated hero line is untouched.
- Footer now links home with the brand as anchor text on 20 pages; footer logo links home on all 32 non-home pages.
- **25 over-length titles trimmed to under 60 characters** so Google stops truncating or rewriting them. Evo went from 111 characters to 56.
- All sitemap `lastmod` dates refreshed.

### 3. Screening pages made indexable · `221819c`

**Problem:** the tool builds all 84 questions in JavaScript, so the raw HTML held only 470 words (617 in Malay), mostly boilerplate. Google's first pass saw thin content and never promoted the page. That's why it read as "not on Google" while the 2,000-word guides indexed fine.

**Fixed:** added ~1,200 words of genuine parent-facing prose below the tool — what the ten areas mean, why age changes everything, the three questions that matter (duration, setting, impact), conditions that mimic learning difficulties (hearing, vision, sleep, multilingual load, relative age, anxiety), and what to do with a result. Plus four FAQs with `FAQPage` schema.

```
English   470 → 1,684 words
Malay     617 → 1,797 words
```

### 4. Malay screening tool rebuilt · `76c44e4`

The Malay page was still the original tick-only checklist, carrying the exact flaw you spotted: a child doing well produced a blank result, and a four-year-old got the same questions as a fourteen-year-old.

Ported from the current English file so the logic is identical:

| | English | Malay |
|---|---|---|
| Prompts | 84 | 84 |
| Per band | 15/15/21/19/14 | 15/15/21/19/14 |
| Domains | 10 | 10 |
| Gate questions | 3 | 3 |
| Wellbeing flags | 13 | 13 |
| JS syntax | ✓ | ✓ |

Scales read **Ya / Kadangkala / Belum lagi** for milestone bands and **Jarang / Kadangkala / Kerap** for school age.

### 5. Indonesian-influenced wording corrected · `db3ab60`, `ea6103d`, `6249e73`

Audited all 15 Malay pages against 60 Indonesian-form markers. 15 corrections:

| Was | Now |
|---|---|
| baik-baik sahaja | *(removed entirely — see below)* |
| mempengaruhi | menjejaskan |
| Kenapa | Mengapa |
| cuma *(in body prose)* | hanya / sekadar |
| kemudian hanyut | kemudian hilang tumpuan |
| Meledak marah / mendiamkan diri | Mengamuk atau terus membisu |
| Mood rendah | Murung |
| mentadbir dan menskor | mentadbir dan memberi markah |
| Tiada apa yang menonjol | Tiada apa-apa yang menonjol |

The reassuring result headline now reads:

> **Berdasarkan jawapan anda, anak anda menunjukkan perkembangan yang baik.**

Also a **factual correction**: long-sightedness is what makes close work uncomfortable, so the vision item is **rabun dekat**, not rabun jauh. A parent could have read the old line and ruled out the wrong thing.

### 6. Seven Malay parent guides written · `c209131` · 16,638 words

`guides-ms.html` linked to seven pages that didn't exist — every card on the Malay guides hub was a live 404.

| File | Words |
|---|---|
| guide-adhd-ms.html | 2,942 |
| guide-dyscalculia-ms.html | 2,364 |
| guide-autism-ms.html | 2,303 |
| guide-speech-delay-ms.html | 2,277 |
| guide-slow-learners-ms.html | 2,273 |
| guide-dyslexia-ms.html | 2,253 |
| guide-dysgraphia-ms.html | 2,226 |
| **Total** | **16,638** |

Each carries `lang=ms`, a self-referencing canonical, the full en-MY / ms-MY / x-default hreflang trio, `og:locale ms_MY`, and translated BreadcrumbList, Article and FAQPage schema. All JSON-LD validated.

**Localised rather than translated literally:** the English dyslexia guide uses *b/d, was/saw* as reversal examples. "was/saw" is meaningless in Malay, so the Malay version uses **buku/kuku** and **batu/buta** — real pairs a Malay-reading child actually confuses.

**Deliberately left in English:** book titles (*Overcoming Dyslexia*, *Uniquely Human*, *Make It Stick*), organisation names (NASOM, Hanen Centre, British Dyslexia Association, Child Mind Institute) and the brand itself.

---

## Site health at time of writing

```
Total pages                34
Broken internal links       0
Orphan pages                0
Pages missing from sitemap  0
Titles over 60 chars        0
Sitemap URLs               45
Sitemap XML                 valid
JSON-LD blocks              all valid
```

---

## Things worth knowing for next time

**Brand vs keyword split.** The homepage owns the brand. The seven condition pages own the condition searches. The guides own the symptom searches ("why does my child reverse letters"). Keep those lanes separate — when two pages target the same query, Google picks one, often the weaker one.

**Brand-entity changes are slow.** Expect 2–6 weeks before "the lodestone" resolves to the homepage. The test is simply: search it, see which page comes up.

**JavaScript-built content is close to invisible.** If a future page generates its content with JS, it needs static prose alongside it or Google won't index it.

**Google Business Profile outweighs almost everything for brand searches.** Make sure the GBP name is exactly "The Lodestone Centre" and its website field points at the bare homepage.
