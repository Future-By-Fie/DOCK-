# DOCK — Architecture and implementation plan

## Product invariant
DOCK saves a *relationship to a source*, not just a screenshot or file. A saved Drop identifies the source hub and information item, with an eventual ability to show updates and preserve snapshots.

## Current prototype
A Vite-served static site uses localStorage. Domain logic is separated in `src/model.js`. No service endpoints exist. Deep links resolve seeded hubs by `?view=hub&hub=<id>`.

## Production data model (proposal)
- `organizations`: tenant and billing owner.
- `hubs`: place/event/business information endpoint, public slug, status.
- `items`: information attached to a hub.
- `item_versions`: immutable published snapshots, change summary and timestamp.
- `drops`: user-owned saved item references and saved version.
- `events`: privacy-conscious aggregate funnel data, subject to retention controls.
- `consents`: optional lead-sharing permission and revocation.
- `leads`: business contact access only when explicitly authorized.

## API proposal (not implemented)
- `GET /hubs/:slug`: public published hub and item summaries.
- `GET /hubs/:slug/items/:itemId`: current item and version.
- `POST /me/drops`: save item with snapshot reference.
- `GET /me/drops`: retrieve own saved items.
- `DELETE /me/drops/:id`: undock.
- `POST /org/hubs`: authenticated tenant-authorized publishing.
- `GET /org/analytics`: aggregate, privacy-reviewed engagement metrics.

## Trust boundaries
A business cannot see who saved a Drop without separate user consent. Tenant access is enforced on the server, never by hidden UI controls. Avoid recording raw location, device identifiers or cross-site behavioral profiles by default. Published links should be validated, and untrusted text must be rendered as text, not injected HTML.

## Tests before a real pilot
- Anonymous discover/explore/dock flow on mobile.
- Cross-device persistence and source updates.
- Tenant isolation, access control, malicious content and URL validation.
- QR deep links and offline behavior.
- Accessibility and browser compatibility.
- GDPR, retention and explicit optional lead sharing.

## Non-goals of v0.1
Real QR/NFC detection, CRM, accounts, billing, multi-tenant security, backend, notification push, real analytics and automatic content updates.
