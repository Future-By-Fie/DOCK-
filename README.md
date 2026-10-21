# DOCK™ — Take information with you

**Discover → Explore → DOCK → Keep**

DOCK is a Future-by-Fie proof-of-concept for a **personal information layer for the physical world**. Businesses and places publish Information Hubs that visitors can open from a QR code or URL, explore without installing an app, and save useful information into **My Drops**.

This is **not** DOCKS (the separate wearable attachment concept), nor a file-transfer tool.

## What works in this MVP
- Mobile-first Information Hubs for a fictional trade show, museum and property.
- Deep-linkable hub URLs suitable for turning into QR codes.
- Product/event/guide information and external source links.
- One-click **DOCK / undock** and **My Drops** personal library.
- Source hub and last-updated information remain visible on saved items.
- Browser-local Hub Studio: create hubs, add information items, share hub URLs.
- Browser-local demo funnel counters: Discover → Explore → Dock.
- Data persists in browser localStorage; no account or server required.
- Pure, tested state/domain functions and GitHub Actions validation.

## Quick start
Requires Node.js 20+.

```bash
npm install
npm run dev
npm test
npm run build
```

Open the URL shown by Vite. Use **Hub Studio** to create a hub, **Explore** to open it, and **My Drops** to view saved information. All initial hubs, locations, people, items and statistics are fictional.

## Architecture
- `src/data.js`: synthetic example hubs and items.
- `src/model.js`: validation, storage normalization, hub creation, docking and demo analytics.
- `src/main.js`: small dependency-light client UI and URL navigation.
- `src/style.css`: responsive visual design.
- `test/model.test.js`: Node built-in tests.
- `.github/workflows/quality.yml`: automated tests and production build.

## Known limitations
**No production backend, login, hosted CMS, real multi-device synchronization, QR-code generator, NFC/BLE integration, verified analytics, permission model, consent management or real business accounts.** Custom hubs exist only in the browser where they were created; sharing their URL with another device will **not** transfer their locally created content. Seeded demo hubs can be opened on any deployment of the same version. Saved items reflect the current browser's local copy; cross-device update notifications are not implemented.

**Privacy:** No analytics are transmitted; interaction counts are local only. Do not enter sensitive or confidential information in the demo. Any production analytics or optional lead collection would need consent and privacy review.

## Commercial direction
First wedge: trade shows and exhibitions, where visitors need a frictionless way to retain product information and exhibitors want insight into meaningful interest. Other markets include museums, hotels, properties, offices, retail and public spaces. Potential business model: B2B SaaS per hub/location, event packages, premium analytics and future integrations. These are hypotheses, not validated sales.

## Production roadmap
1. Backend persistence for hubs/items and version history.
2. Published hub URLs, tenant permissions and a real business CMS.
3. Anonymous user-owned collections with optional accounts and synchronization.
4. QR generation, stable deep links and optional NFC.
5. Consent-based lead capture, privacy-preserving aggregate analytics.
6. Security, accessibility and integration testing; real pilot with an event organizer.

**Future-by-Fie** · Independent innovation concept.

## Collaboration & rights

This public repository is available for evaluation; it is **not currently offered under an open-source license**. We are open to conversations with potential technical and commercial partners, but contributions and reuse require prior written agreement. See [Collaboration & intellectual property](COLLABORATION.md) and [Build with us](https://www.future-by-fie.com/#partners).
