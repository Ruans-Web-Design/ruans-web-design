# Ruan’s Web Design — project handover

## Start here

This repository contains the **React website built in the accompanying conversation**, not a WordPress theme. It is a working design preview, not a finished production launch. Preserve the user-approved design, pricing and honest preview labels unless the owner requests a change.

Read these documents in order:

1. [This handover](HANDOVER.md) — decisions, implementation and next steps.
2. [Conversation transcript](CHAT_TRANSCRIPT.md) — user-visible messages and form answers from this conversation, with sensitive authentication details redacted.
3. [Original J92 audit and website plan](J92_AUDIT_AND_PLAN.md) — reference research and initial recommendations. Later user decisions below override it.
4. [`design.md`](../design.md) — implemented visual direction.
5. [`task.md`](../task.md) — brief build status.

**Export boundary:** The transcript preserves archived user-visible message text where available, with form and delivery events rendered in Markdown. It is not a platform-generated raw export; internal reasoning, raw tool logs, actual credential values and unrelated chats are excluded. User-facing form questions/answers and build/authentication outcomes are included.

## Owner and repositories

- GitHub account: **Ruans-Web-Design**.
- Current project: https://github.com/Ruans-Web-Design/ruans-web-design — public, `main`.
- Related project: https://github.com/Ruans-Web-Design/colour-lab-hair-studio — existence and `main` branch were verified during this conversation.
- Website source was initially pushed at commit `abca5016aa605ffad26e7491621e7c04bdebe098`.
- This conversation does **not** contain Colour Lab Hair Studio’s full design/business research. Do not assume its salon prices, contact details, service list or implementation from this handover. Inspect that repository and request its separate handover if needed.

## What the owner asked for

The owner first requested an audit/scrape of https://j92labs.co.za/, including structure, layout, formatting, services, SEO basics and prices. They then requested a similar website for themselves under their existing GitHub identity, **without separately sold SEO services**: basic SEO should be part of website design.

The owner approved the audit before a build, then approved proceeding with a build. They requested South African agency research to inform the visual direction, explicitly approved using J92’s package prices, requested placeholder contact details, and supplied no logo or portfolio projects.

## Approved decisions — authoritative

| Topic | Decision |
|---|---|
| Public brand | **Ruan’s Web Design**, presented as a personal independent studio |
| Existing identity | **Ruans-Web-Design** on GitHub |
| Brand research | No business-name, trademark, domain or handle clearance completed |
| Service scope | Website design, website improvements/reviews, hosting and maintenance/support |
| SEO | Included basic foundations; no standalone SEO packages or ranking guarantees |
| Prices | Use J92’s package rates (explicit owner approval after the audit) |
| Contact details | Placeholders, clearly marked as not configured |
| Portfolio | No real projects supplied; original concepts clearly labelled as concepts |
| Final style | The user selected a quiet editorial scenic reference, overriding the earlier dark/orange and off-white/orange proposals |
| GitHub | New **public** repository named `ruans-web-design` |
| WordPress | Only discussed; no WordPress rebuild requested or completed |

## Current pricing shown on the website

All amounts in South African rand. Build fee **plus** monthly hosting/care; not either/or.

| Tier | Brochure pages | Build fee | Monthly |
|---|---|---:|---:|
| Starter | Home + Contact (2) | R500 | R120 |
| Standard | Home + About + Contact (3) | R750 | R150 |
| Growth | Home + About + Services + Contact (4) | R1,000 | R180 |

- Additional brochure pages: R150/page; complexity may require a separate quote.
- Basic SEO and responsive design included across tiers.
- Standard is visually emphasised as “The sweet spot.”
- Domain, email costs and tax treatment are to be confirmed in each quote. Do not invent their inclusion.
- Support/editing allowances, revisions, backup/restore scope, payment terms, ownership/handover and cancellation terms still need final business approval.
- The audit initially warned that these rates were a competitor benchmark, not necessarily sustainable. The owner later deliberately selected them. Do not silently change approved prices, but flag costs before making stronger commercial promises.

## Implemented design

- Warm paper `#f6f5f0`, alternate `#eeeee7`, charcoal/green ink `#353a32`, muted `#686d64`, olive `#6d7555`.
- **Cormorant Garamond** display, **Manrope** body, **Caveat** personal wordmark; loaded from Google Fonts in CSS.
- Full-width coastal sunset photograph, white serif hero and understated navigation below it.
- Centered editorial headings, open package columns, thin borders, numbered process timeline, concept previews, personal About section and dark contact/footer.
- Responsive navigation, stacked mobile sections, reduced-motion rules and keyboard focus styling.
- User reference was attached as `template-image_nlAmcM.png`. It is not copied into this public repository; the original remains in the conversation attachments. The design brief records its role.
- Hero image is committed as `packages/web/public/images/coast.jpg`. It came from an image search labelled as an Unsplash coastal-dunes photograph. Exact photographer/source page and final reuse attribution/licensing were not recorded in the repository; verify before client/public production use. Do not claim it is the owner’s photograph or proof of business location.
- “Field & Stem” and “The Still House” are original HTML/CSS **demonstration designs**, not real clients, testimonials or completed commissions.

## Pages and behaviour

| Route | Content |
|---|---|
| `/` | Hero, introduction, pricing, services, process, concept designs, About, FAQs, enquiry preview |
| `/services` | Service intro, package comparison, services, FAQs, enquiry preview |
| `/about` | Personal About presentation, process, enquiry preview |
| `/contact` | Placeholder contact details and project-brief preview form |
| `/privacy` | Explicit pre-launch privacy information |
| Other paths | Friendly not-found view |

Home sections have anchor links including `#packages`, `#services`, `#process`, `#work`, `#about` and `#contact`. Pricing links to `/contact?package=Starter`, `Standard` or `Growth`, and the form preselects the chosen package.

### Enquiry form is intentionally not connected

- It has name, email, business, package interest and project-description inputs.
- Browser validation requires name, valid email and a project description.
- The button reads **“Preview my enquiry”**, not “Send.”
- Submission displays a review message and a **Save my brief** button.
- A plain-text brief is created in the browser and downloaded to the visitor’s device as `my-website-brief.txt`.
- No email is sent and no enquiry is saved to a database.
- The form explicitly says this, and contact details are visible placeholders.
- Never change the success message to “sent” without implementing and testing real delivery.

## Technical architecture

Managed Runable monorepo: **Bun, Vite, React, Hono, oRPC, Drizzle**, with scaffolded Expo mobile and Electron desktop packages. Only the web studio website was customised. Scaffolded mobile/desktop folders do not mean bespoke mobile/desktop products were completed.

Important files:

```text
packages/web/src/web/pages/studio.tsx  Main website views and shared sections
packages/web/src/web/app.tsx           App provider and route composition
packages/web/src/web/styles.css        Typography, tokens, layouts, responsive CSS
packages/web/index.html                Initial title, metadata, preview noindex
packages/web/public/images/coast.jpg   Hero/concept landscape image
packages/web/public/favicon.svg        Custom r. monogram favicon
packages/web/public/robots.txt         Preview crawl block
design.md                             Visual/UX design brief
.env.template                         Non-secret environment variable names
.runable/ports.json                    Assigned ports
__ports.cjs                           Template-managed port configuration
```

API/database scaffold exists but is not used to submit enquiries. Preserve template analytics, bootstrap and runtime components. Files prefixed `__` and `.runable/protected-files.json` are template-managed; do not casually rewrite them. Static web assets belong in `packages/web/public/`.

### Local development

```bash
bun install
cp .env.template .env
# Configure .env for your own environment; never commit it.
bun run dev
bun run build
bun run lint
```

The assigned **web port is 4200**, mobile 4300 and desktop 4400. Do not change assigned ports to solve conflicts in the managed preview. The generic `.env.template` initially says `WEBSITE_URL=http://localhost:3000`; adjust your local environment value to the actual web address (`http://localhost:4200`) as needed.

Runable-provisioned secrets/database/gateway values were deliberately not pushed. A separate clone requires its own configuration for any backend feature actually used. An independent clean-clone setup with fresh environment values was **not** verified in this conversation.

### Verification completed during the build

- `bun run build` passed after final edits (template warning/deprecation messages were non-blocking).
- `bun run lint` passed with zero errors/warnings after formatting and accessibility fixes.
- Headless Chrome tests found no JavaScript page errors on the tested home view.
- One H1 on the home page.
- Standard pricing selection carried through to contact form.
- Form preview and local text download worked.
- Mobile menu opened and Services navigation worked.
- FAQ expanded.
- Tested mobile viewport (390 × 844) had no horizontal overflow.
- Desktop/mobile screenshots were reviewed; mobile hero spacing was subsequently refined and final build/lint passed.

These are recorded tests of the sandbox build, not a permanent CI setup, full accessibility audit or production reliability guarantee.

## SEO and launch status

Present: descriptive document titles, per-route client-side title/description updates, semantic headings, share metadata, image alt text/dimensions, responsive CSS and optimised hero asset on build.

**Indexing is intentionally disabled:**

- `packages/web/index.html`: `robots` is `noindex, nofollow`.
- `packages/web/public/robots.txt`: `Disallow: /`.

No production canonical domain or sitemap was fabricated. When the real domain and complete business content are approved, configure canonical URLs, sitemap, absolute share-image URLs and consistent URL handling. Evaluate prerendering/SSR or equivalent crawlable route-specific HTML for these marketing pages: current per-route metadata changes happen in React, so non-JavaScript social crawlers may only see the shared initial HTML. Do not call this a completed production SEO rollout.

### Before public launch

1. Supply real email, WhatsApp, location and genuine service coverage.
2. Approve pricing economics and final tax/domain/email assumptions.
3. Agree revision limits, support allowance, ownership, billing, backup/restore and cancellation terms.
4. Connect the enquiry destination; implement abuse protection, error handling and actual delivery checks.
5. Finalise privacy notice, tracking controls and terms from real operations.
6. Verify photograph permissions/attribution or replace with licensed/user-owned imagery.
7. Replace concepts with real projects only when available; keep demo labels otherwise.
8. Set production domain, canonicals, route metadata, share previews and sitemap.
9. Remove preview indexing blocks **only after launch readiness is approved**.
10. Re-test desktop/mobile/keyboard/forms/performance in the real deployment.

## Research and source context

Primary reference: https://j92labs.co.za/. The original report includes source URLs and exact observed pricing. It found six main navigation pages, a coming-soon blog, contact methods but no HTML form on the agency’s own Contact page, and missing canonical/social/JSON-LD metadata on inspected pages. These were point-in-time observations, not permanent claims or a full search-ranking audit.

South African inspiration sample (not “all websites”):

- https://woww.co.za/
- https://www.webpartner.co.za/
- https://oceandigitalstudio.co.za/
- https://www.lamusdesign.co.za/
- https://limencodesign.co.za/
- https://designtalks.co.za/ — appeared in search; direct retrieval failed during the sample.

The user ultimately chose their supplied visual reference rather than blindly cloning any sampled agency.

**Date correction:** The user’s initial date message said **2026-11-22**. The original report incorrectly labelled its review **20 November 2026 (user-provided date)**. Preserve the original as historical evidence but do not repeat that claim as fact. Neither label should be used to invent exact capture timestamps. Tool/host dates and this user-supplied date were not aligned.

## WordPress discussion

The owner asked whether these websites could be converted to WordPress. The answer was yes, by rebuilding in Gutenberg/Elementor/Bricks or developing a custom WordPress theme—not by one-click conversion. Copy, imagery, colours and layout can be reused where permitted; routing, forms and interactions need recreation. No WordPress version exists in this repository and no migration was authorised.

## Continuing in Claude

The owner intends to use Claude with GitHub as context. Add the repository files to a Claude Project/chat through the GitHub integration and refresh/sync after changes. Logging in alone does not automatically load all repositories. Select `docs/`, `design.md`, the core web code, styles and relevant configuration; avoid unnecessary lockfiles/generated assets when conserving context.

Reference checked during this conversation: https://support.claude.com/en/articles/10167454-use-the-github-integration. Features/UI may change; re-check current documentation if giving account-specific instructions. Standard GitHub context sync is not itself deployment or an automatic code-push workflow.

Suggested starting prompt:

> Read docs/HANDOVER.md, docs/CHAT_TRANSCRIPT.md, design.md and the studio website source. Preserve the approved pricing, editorial design and clear concept/placeholder labels. First identify the remaining production-launch work. Do not claim enquiries are sent, indexing is enabled, or the site is WordPress. Ask before changing service scope or publishing unapproved business details.

## Security and sharing

- The owner explicitly requested a **public repository** and this conversation handover.
- Actual `.env` values, database credentials and GitHub tokens are not committed.
- The first token failed with GitHub 403; a replacement enabled a successful push. No token values belong in this transcript or handover.
- A credential scan of staged project files found no configured secret values or token/private-key patterns before the initial push. This is a limited check, not an exhaustive security certification.
- GitHub tokens used for the upload can be revoked when no longer needed. Do not paste them into Claude/chat/project files.
- Do not upload client customer records, salon personal data or private business correspondence into either public repository.

## What this handover does not claim

No WordPress conversion, public production deployment, business-name clearance, real enquiry backend, authorised client portfolio, verified client testimonials, guaranteed rankings, exhaustive South African market study or complete Colour Lab business handover was completed in this conversation.