# Prototype verification and next milestones

## What the repository claims
A browser-local Information Hub / My Drops demonstration using synthetic examples and localStorage, not a deployed multi-user service.

## Local verification checklist
- Install Node.js 20+.
- Run `npm install`.
- Run `npm test`.
- Run `npm run build`.
- Run `npm run dev`; test hub navigation, dock/undock, refresh persistence and shared URLs.
- Record actual results; the existence of scripts is not proof they pass.

## Next technical tasks
1. Test malformed and oversized localStorage data and recovery after corrupted saved state.
2. Validate external URLs and guard against unsafe injected content in community-created hubs.
3. Test deep links, keyboard navigation and mobile layouts.
4. Specify content ownership, updates, expiration and trust indicators for future publisher accounts.

## Good first issue
Add unit tests for invalid stored state and safe fallback behavior without deleting valid saved drops.
