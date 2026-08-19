# Analytics & Search Console

**Written:** 19 August 2026
**GA4 property:** The Lodestone's Website · `G-YC6ZRBTYTS`

Two tools, two different questions. Keep them straight and both become useful.

- **Search Console** — what people *searched for* before they arrived. The more useful of the two at your stage.
- **GA4** — what they *did* once they were on the site.

---

## Part 1 — Search Console

### 1a. Sitemap — confirmed working, leave it alone

**Status as of 19 Aug 2026: the sitemap is submitted and Google is reading it.** Confirmed from a
URL inspection, which listed `Discovery → Sitemaps: thelodestonesolution.com/sitemap.xml`. That line
only appears when Google has found the URL through the sitemap.

**Do not remove and re-add a working sitemap.** It gains nothing and discards the processing
history Google has built up against it. When the file changes, Google re-fetches on its own
schedule, and the refreshed `lastmod` dates are the signal that prompts it.

The file itself: 43 URLs matching 43 real pages, valid XML, served as `application/xml`.

**Only if it ever shows an error** — most likely *"Your Sitemap appears to be an HTML page"* — is the
submission wrong. That error means the full URL was pasted into a box that already carries the
domain as a grey prefix, so Google fetched
`https://thelodestonesolution.com/https://thelodestonesolution.com/sitemap.xml`. The fix is to
delete the entry and type only `sitemap.xml`, eleven characters.

### 1b. Request indexing

**URL Inspection** → paste a URL → **Request indexing**. Roughly 10–12 a day. It takes about 30 seconds each and you're looking for "Indexing requested".

**Batch 1 — the four priorities, plus the brand fix.**

```
thelodestonesolution.com/
thelodestonesolution.com/guides.html
thelodestonesolution.com/guide-adhd.html
thelodestonesolution.com/guide-dyslexia.html
thelodestonesolution.com/guide-dyscalculia.html
thelodestonesolution.com/guide-slow-learners.html
thelodestonesolution.com/adhd-support.html
thelodestonesolution.com/dyslexia-support.html
thelodestonesolution.com/dyscalculia-support.html
thelodestonesolution.com/slow-learners-support.html
```

**Batch 2 — the screening tool, Evo, and the remaining conditions**

```
thelodestonesolution.com/screening-check.html
thelodestonesolution.com/lodestone-evo.html
thelodestonesolution.com/guide-autism.html
thelodestonesolution.com/guide-dysgraphia.html
thelodestonesolution.com/guide-speech-delay.html
thelodestonesolution.com/autism-support.html
thelodestonesolution.com/dysgraphia-support.html
thelodestonesolution.com/speech-delay-support.html
thelodestonesolution.com/early-intervention.html
thelodestonesolution.com/for-schools.html
```

**Batch 3 — Malay pages and the rewritten location pages**

```
thelodestonesolution.com/guides-ms.html
thelodestonesolution.com/guide-dyslexia-ms.html
thelodestonesolution.com/guide-adhd-ms.html
thelodestonesolution.com/guide-autism-ms.html
thelodestonesolution.com/guide-dyscalculia-ms.html
thelodestonesolution.com/guide-dysgraphia-ms.html
thelodestonesolution.com/guide-speech-delay-ms.html
thelodestonesolution.com/guide-slow-learners-ms.html
thelodestonesolution.com/screening-check-ms.html
thelodestonesolution.com/for-schools-ms.html
```

**Batch 4 — the rest**

```
thelodestonesolution.com/lodestone-evo-ms.html
thelodestonesolution.com/index-ms.html
thelodestonesolution.com/screening-petaling-jaya.html
thelodestonesolution.com/screening-puchong.html
thelodestonesolution.com/screening-shah-alam.html
thelodestonesolution.com/early-intervention-ms.html
```

**Don't re-request the same URL repeatedly.** It burns quota and speeds nothing up.

### Progress

**19 Aug 2026 — batch 1 complete, batch 2 complete up to `early-intervention.html`.** Quota hit
there. Roughly 18 URLs requested in one sitting.

Remaining, in priority order:

```
for-schools.html                     (finishes batch 2)
early-intervention.html              (if it was not completed)
batch 3, the Malay pages             (10)
batch 4, the rest                    (6)
```

**These remaining ones are genuinely optional.** The four priority conditions, their guides, the
guides hub and the homepage are all requested. The Malay and location pages will be crawled through
the sitemap in their own time — requesting only speeds that up, and they are not where the demand
is right now.

Expect the requested pages to move from "Discovered" to "Indexed" over roughly one to two weeks.
Check **Indexing → Pages** around **2 September** and compare against 13 indexed / 32 discovered.


### A note on priority, 19 Aug 2026

The centre's focus is **ADHD, dyslexia, dyscalculia and slower learning**. Those four lead the
navigation, the footer, the homepage copy and the indexing queue.

**This is a deliberate choice against the traffic data.** Autism was the second-most-viewed page
in the 90-day baseline — 56 views against 16 for dyscalculia and 15 for slow learners. Autism keeps
its page, its guide and its place in the nav; it simply is not promoted ahead of the four.

**Worth watching:** if autism keeps out-performing the four after they have been indexed and given
a fair run, that is a genuine signal about where demand sits, and worth revisiting. Give it a full
quarter before drawing any conclusion.

### 1c. Reading Search Console once it has data

**Performance → Queries**, last 3 months. Two things to look for:

**Queries at position 11–20.** These are page-two results. A better title or a paragraph answering that query more directly can move them to page one, which is where the clicks are. This is the highest-return SEO work there is, and it needs data to find.

**Pages with impressions but almost no clicks.** Google shows the page, nobody clicks. That's usually a title or description problem, not a content problem.

**To send me the data:** Performance → download icon (top right) → CSV. Drop it in Google Drive or this folder and ask me to look. A CSV gives me every query, not just the visible ten.

---

## Part 2 — GA4

### 2a. The one setup job

Five custom events already fire on your site. None are marked as key events, so they're buried.

```
screening_completed   someone finished the free check
screening_lead        they sent their answers on WhatsApp   <- the one that matters
guide_download        a guide PDF was downloaded
easy_read_toggle      dyslexia-friendly font switched on
share                 a guide was shared
```

**Admin → Events.** Find `screening_lead` and toggle **Mark as key event**. Do the same for `guide_download`.

`screening_lead` is your actual enquiry count. Everything else is a proxy.

### 2b. The three reports worth opening

**Reports → Engagement → Pages and screens.** Which pages get read, and bounce rate per page.

**Reports → Acquisition → Traffic acquisition.** Where people come from.

**Explore → Funnel exploration.** Build: *viewed screening-check → screening_completed → screening_lead*. Shows exactly where parents drop out. If many complete but few send, the handoff needs work rather than the tool.

---

## Part 3 — Baseline, 21 May to 18 August 2026

Recorded so there's something concrete to compare against later.

```
Active users        127
New users           127      <- zero returning visitors in 90 days
Avg engagement      49s
Event count         1.1K
```

**Top pages** (rows merged where a title change split them in two):

| Page | Views | Bounce |
|---|---|---|
| Homepage | 123 *(74 + 49)* | 45–49% |
| Autism support | 56 *(35 + 21)* | 43–47% |
| Malay homepage | 18 | **25.0%** |
| Dyscalculia | 16 | **11.8%** |
| Slow learners | 15 | **13.3%** |

### What this baseline says

**The title change is visible in the data.** The homepage and autism pages each appear twice — old title and new. Those rows will merge over the coming weeks. Not a traffic drop.

**Autism is disproportionately popular.** 56 views against 16 for dyscalculia. Real demand, unprompted. The centre has since chosen to lead with ADHD, dyslexia, dyscalculia and slower learning instead — a deliberate call against this number. Autism keeps its page and guide but is not promoted. Revisit after the four have had a fair run at being indexed.

**Condition pages hold attention far better than the homepage.** Bounce roughly 12–13% on dyscalculia and slow learners against 45–49% on the homepage. Strong support for the strategy: homepage owns the brand, condition pages own the searches.

**Zero returning visitors.** Nothing currently gives anyone a reason to come back. The guides should change this once they're indexed.

**No guide page appears at all.** They went live late July and early August and are almost certainly still unindexed. Roughly 30,000 words invisible to Google.

**Volume:** 127 users over 90 days is about 1.4 a day. Small enough that week-to-week movement means nothing. Read it monthly.

---

## Part 4 — The monthly rhythm

Once a month, about ten minutes:

1. Search Console → Performance → last 28 days → download CSV
2. GA4 → Pages and screens → screenshot
3. Note the `screening_lead` count
4. Send both to me and ask what changed

Three months of that shows real signal. Weekly checking shows noise.

### The one number that matters

**`screening_lead`** — actual enquiries. Traffic, bounce rate and engagement time are all proxies for it.

### The test to run in 60 days

**Does any `guide-*` page appear in the top pages list?**

- **Yes** — the content strategy works. Write more guides.
- **No** — the problem is indexing or ranking, not writing. Change approach before writing another word.
