# Lodestone website — work log

**Last updated:** 19 August 2026
**Repo:** github.com/lodestoneasia/lodestonemalaysia (branch `main`)
**Live:** thelodestonesolution.com

> This log is updated automatically after every change. If work has been done, it's recorded here.

---

## What still needs doing — yours

| # | Task | Why it matters |
|---|---|---|
| 1 | **Revoke the GitHub token** | It's been used nine times and is sitting in plain text in a chat log. github.com → Settings → Developer settings → Personal access tokens → Fine-grained → Revoke. |
| 2 | **Move `_internal/` and `Lodestone_Master_Student_List.xlsx` out of the website folder** | That spreadsheet holds children's personal data and currently lives one careless drag away from a public repo. `.gitignore` protects you, but only until it doesn't. |
| 3 | **Fix the sitemap submission in Search Console** | If it still shows *"appears to be an HTML page"*, delete the entry and type only `sitemap.xml` into the box — not the full URL. |
| 4 | **Request indexing, ~10 URLs a day** | Full batches and step-by-step are in `ANALYTICS.md`. |
| 5 | **Mark `screening_lead` as a key event in GA4** | Admin → Events → toggle. It is your actual enquiry count and is currently buried. |

### Search Console indexing

Moved to **`ANALYTICS.md`**, which has the four batches, the sitemap fix, the GA4 setup step, and the 19 Aug traffic baseline to compare against.

---

## Focus: the four priority conditions

**Set 19 August 2026.** The centre leads with **ADHD, dyslexia, dyscalculia and slower learning**.

Applied to: nav dropdown order on all 40 pages, the footer "Support by need" column, the homepage
lede, and the Search Console indexing batches in `ANALYTICS.md`.

**New guides and articles cover these four before anything else.**

Autism, dysgraphia and speech delay keep their pages, guides and quality. They are simply not
promoted ahead of the four. Note that this runs against the traffic data — autism was the
second-most-viewed page in the August baseline — so it is worth revisiting after the four have had
a fair run at being indexed. See the note in `ANALYTICS.md`.

---

## What still needs doing — mine

- **A Subang Jaya location page.** Now unblocked: the three existing pages reached 48-50% unique on 8 Aug (from 15%), so a fourth can be built without compounding a duplication problem. Subang Jaya is the obvious gap since the centre is physically there.
- **Malay versions of the three location pages** — only after the English ones are genuinely distinct. The reusable pipeline is in `_build/` — see `_build/README-RESUME.md`.
- **Per-guide social preview images.** All 14 guides currently share `og-image.png`.
- **Homepage section + sticky mobile bar** for the free check (proposed, never built).

---

## Completed — August 2026

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

### 7. Mobile navigation fixed site-wide · `feb94f9`, `a194826` · 41 files

Reported from an Android and an iOS device: the page scrolled sideways and the menu button sat off-screen to the right.

**Three faults, one of them mine.**

**a. The button row never collapsed.** Below 980px the nav *links* hid correctly, but the buttons beside them were never included in that rule, so they stayed at desktop size. On the homepage that made the bar roughly 714px wide inside a 360px viewport, pushing the hamburger about 320px off-screen.

That row already held three buttons and was already overflowing before the nav change in `2173fd7`. I added a fourth — "Free 2-min check", the widest, with `white-space:nowrap` so it couldn't even shrink. I made an existing fault considerably worse and should have checked at phone width before pushing.

**b. Nineteen pages had no mobile menu at all** — 14 guides, both guides hubs, both screening pages, Lodestone Evo. Their hamburger was wired to `location.href='#contact'` with no open-menu CSS or JS behind it. Below 900px the navigation simply disappeared. Pre-existing.

**c. Lodestone Evo had no collapse rule whatsoever.**

**Fixed:**

- One breakpoint (980px) everywhere, replacing 980 / 900 / 820 / 760
- Collapsed bar now carries only logo + gold check + hamburger
- Easy read, language switch and Book a call are **moved** into the open panel by JS on phones and moved back on desktop. Moved rather than cloned, so the Easy read toggle keeps its single ID
- Real working menu on the 19 pages that had none; the old onclick is stripped at runtime
- Homepage dropdowns become tap-to-expand accordions on touch
- Removed a duplicate mobile-menu script from `index` and `index-ms` that would have double-toggled and cancelled itself out
- `body{overflow-x:clip}` rather than `overflow-x:hidden`, which would have broken `position:sticky` on the nav bar

**Measured on a real device afterwards** (a temporary diagnostic page, since the sandbox blocks headless browsers):

```
index.html        360px in a 360px screen   fits
lodestone-evo     360px                     fits
guides, guide-*, screening ×2,
adhd-support, for-schools                   fits
index-ms.html     362px                     2px, sub-pixel rounding
```

Every oversized decorative element — the 400px spotlight, the 5,269px marquee track, the Evo mountain layers — is now clipped by its container rather than dragging the page sideways.

The diagnostic page was deleted afterwards (`a194826`).

**Left alone by decision:** the two floating buttons, "Urgent? Call us now" and WhatsApp, stay as separate buttons.

### 7b. Overflow guard moved to the root element · `917413b` · 41 files

The page could still be swiped sideways on a real phone even though the diagnostic reported 360px.

**Cause:** the guard was on `body` alone. When `overflow` is set on `body` while `html` stays at its default, the browser **propagates that value to the viewport and resets `body` to visible**. Body therefore stops clipping, and whether the viewport honours `clip` varies between browsers. In practice there was often no guard at all.

**Fixed:**

- `overflow-x: clip` now on `html` as well as `body`, so it cannot be propagated away. Still `clip` rather than `hidden`, so `position:sticky` on the nav bar survives
- `overscroll-behavior-x: none` on `body`, which stops the horizontal rubber-band gesture itself
- `.float-actions` capped to `calc(100vw - 28px)` on the three pages with floating buttons

**Why the earlier diagnostic missed it:** it skipped `position:fixed` elements by design, and it measured pages inside an iframe. Neither fully represents a real mobile viewport with a resizing address bar. A clean result from that tool means "the document fits", not "the page cannot be swiped".

### 8. Consolidated nav rolled out site-wide · `e35432e` · 40 files

Every page now carries the same three grouped dropdowns (Support, Programs, Specialists) plus For Schools, replacing flat rows of up to ten links. Malay pages get Malay labels. `aria-current="page"` marks the current page in the menu.

The desktop dropdown CSS was added to the 19 guide and screening pages that had never had it. Existing language switches, Easy read toggles and CTAs were preserved.

**Two bugs found and fixed during the rollout:**

**a. 80 cross-language links.** Malay pages linked to English pages throughout their navigation *and* body copy — `adhd-support-ms.html` pointed at `dyslexia-support.html`, `guides.html`, `screening-check.html` and others. A Malay-speaking parent was dumped into English after a single click. All repointed to their `-ms` equivalents. The EN/BM switcher is deliberately left crossing languages.

**b. An unclosed `<div class="container">`** in the Specialists section of both homepages. Pre-existing, browsers auto-corrected it, but the section was nesting wrongly.

### 9. Guide PDFs linked · 14 files

The 14 guide PDFs had been sitting in the repo unlinked since they were generated. Each guide now carries a download card directly under its contents box — English guides link the English PDF, Malay guides the BM one. Placed near the top rather than the end, since a parent who wants to read it later decides that early.

### 10. Malay For Schools and Lodestone Evo · `3c264ae`, `da8f1f4`

| Page | Words |
|---|---|
| for-schools-ms.html | 1,555 |
| lodestone-evo-ms.html | 1,485 |

Built through a resumable pipeline in `_build/` (gitignored) so the job could survive an interruption: one translation file per page, an idempotent builder, and a state table in `_build/README-RESUME.md`. Each page was pushed on completion rather than at the end.

Japanese terms and kanji on the Evo page were left as they are — they're the substance of the programme, not translatable labels.

**Three further fixes found along the way:**

- `for-schools.html` already carried hreflang tags where `ms-MY` pointed at **itself**. Both pages now declare the correct trio exactly once.
- The three location pages declared a Malay alternate pointing back at their own English selves, telling Google a Malay version existed when none did. Removed.
- An English typo on the Evo page: *"Evo is an character and virtue programme"* → *"a character"*.
- Both Evo pages had no language switch at all. Added.

---

### 11. Legacy 404s redirected, and anchor links fixed site-wide · 43 files

Search Console reported three "Not found (404)" URLs left over from an earlier version of the
site: `/contact`, `/about` and `/programs`. The current site uses homepage anchors instead.

Added a small stub at each path that carries a canonical to the right anchor, an instant redirect,
and `noindex, follow` so it never competes with the homepage in results. Deliberately **not** added
to the sitemap, since they are redirects rather than pages.

**Then Roshan reported the redirect landed on the homepage but stayed at the top.** Two rounds to
get this right, and the first diagnosis was wrong.

*First attempt* blamed font loading — the browser jumping to the anchor before Fraunces and Inter
swapped in and changed every heading height. Plausible, and a real effect, but not what was
happening here.

*The actual cause* was **Lenis**, a smooth-scroll library the homepage loads alongside GSAP. Lenis
does not use native scrolling at all. It holds its own virtual scroll position and re-applies it
every animation frame via the GSAP ticker. A native `scrollIntoView` therefore moved the page for
exactly one frame before Lenis put it back to zero. Fixed by driving Lenis directly with
`lenis.scrollTo(..., {immediate:true})`, repeated after `requestAnimationFrame`, after `load` and
after `document.fonts.ready` so it survives layout shifting as fonts arrive.

**Two things this turned up that were affecting the whole site, not just the redirects:**

- **No `scroll-padding-top` anywhere.** Every in-page anchor landed underneath the sticky nav —
  including the "What's in this guide" contents links on all 14 guides. A parent clicking
  "The signs, by age" got that heading hidden behind the nav bar. Added, 88px desktop / 72px mobile.
- **The homepage anchor handler used a fixed `offset: -20`**, under a quarter of the nav height.
  Replaced with `navOff()`, which measures the nav element live, so it stays correct on mobile and
  if the nav height ever changes again.

Only the two homepages load Lenis. The other 41 pages use a plain end-of-body fallback, which now
stands down when `window.__lenis` exists so the two never fight.

**For Roshan:** in Search Console → Indexing → Pages → Not found (404), click **VALIDATE FIX**.


### 12. /contact/ made a real page, replacing the redirect

Three attempts at making the redirect scroll to the homepage contact section failed. Roshan called
it: stop guessing and suggest before implementing. The right answer was to remove the problem
rather than fight it. **A contact page has nothing to scroll to, so the bug cannot occur.**

It is also worth more. As a `noindex` redirect that URL told Google nothing. As a page it can rank
for "lodestone centre address", "learning centre subang jaya contact" and similar, and it carries a
full `LocalBusiness` record with address, geo, opening hours and areaServed.

**877 words, no invented detail.** Address, hours, phone, email, WhatsApp, getting here by car and
by LRT, areas served, and what happens after you get in touch. Everything is taken from the
`LocalBusiness` schema already on the homepage or the verified transit research behind the location
pages. **Parking is deliberately not described** because it was never verified; the page offers to
send directions on WhatsApp instead.

**Built for more locations, as asked.** The location card is one marked HTML block with a
duplicate-me comment, and the schema graph takes one extra `LocalBusiness` node per centre. Adding
a second centre touches nothing else on the page. The builder is `_build/contact_page.py` and is
idempotent.

Built from `for-schools.html` so nav, footer, fonts and the mobile fixes stay in step. **No GSAP and
no Lenis on this page.** Relative paths rewritten to root-absolute since it lives in a subfolder.

14 internal links added so Google can find it; sitemap now 44 URLs. Left out of the Malay footers
on purpose, since no Malay contact page exists yet and Malay pages should not link out to English
ones. `/about` and `/programs` stay as redirects, since they genuinely duplicate the homepage.

**Not visually verified.** The Chrome extension was not connected, so the checks were structural
only: balanced markup, valid JSON-LD, no relative paths left, no `noindex`, valid sitemap. Roshan
to eyeball it.

**Lesson recorded:** three failed pushes on confident diagnoses. Fonts, then Lenis, then Lenis
timing. Each was plausible and each was untested. When a fix cannot be verified before pushing, say
so and offer options instead of shipping the guess.


## Site health at time of writing

```
Total pages                43
Broken internal links       0
Orphan pages                0
Pages missing from sitemap  0
Titles over 60 chars        0
Sitemap URLs               47
Sitemap XML                 valid
JSON-LD blocks              139, all valid
JS blocks parsing clean     128
Mobile nav breakpoints      1 (was 4)
Pages fitting at 360px      33 of 34
hreflang problems            0
Pages with the grouped nav  41 of 43 (Evo uses a Back link)
Cross-language links         0
Unbalanced HTML tags         0
Guide PDFs linked           14 of 14
```

---

## Things worth knowing for next time

**Brand vs keyword split.** The homepage owns the brand. The seven condition pages own the condition searches. The guides own the symptom searches ("why does my child reverse letters"). Keep those lanes separate — when two pages target the same query, Google picks one, often the weaker one.

**Brand-entity changes are slow.** Expect 2–6 weeks before "the lodestone" resolves to the homepage. The test is simply: search it, see which page comes up.

**JavaScript-built content is close to invisible.** If a future page generates its content with JS, it needs static prose alongside it or Google won't index it.

**Google Business Profile outweighs almost everything for brand searches.** Make sure the GBP name is exactly "The Lodestone Centre" and its website field points at the bare homepage.

**Check phone width before pushing any nav or layout change.** The 980px collapse rule must cover *every* item in the header, not just the links. Drag a desktop browser narrow, or use the device toolbar in dev tools.

**If the layout misbehaves on mobile again**, the fastest route is a temporary diagnostic page that iframes the site at 360px and reports which elements exceed the viewport and whether an ancestor already clips them. It takes one tap on a real phone and removes all the guesswork. Rebuild it rather than reasoning from the CSS.

**`overflow-x: hidden` on `html` or `body` breaks `position:sticky`.** Use `overflow-x: clip` instead.
