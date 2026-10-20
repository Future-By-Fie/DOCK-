# DOCK — Published browser QA

Date: 2026-10-20

## Environment
Published standalone Wix Headless static demo:
https://headless-kdchxaextdx-fthorgilsson-140c.wix-site-host.com

Automated browser smoke test executed against the live public URL (not a local mock).
Run record: https://agent.tinyfish.ai/runs/bd5ce72a-dc6b-4b10-916e-131c93df471d

## Result: 8 / 8 steps passed

1. North Hall Design hub card is visible and opens.
2. Arc Chair is visible and can be saved using '+ DOCK this'.
3. Save button changes to '✓ Docked · Remove'.
4. Arc Chair appears in My Drops.
5. 'Open source hub' navigates back to the source hub.
6. Removing Arc Chair returns My Drops to its empty state.
7. Hub Studio creates a new local hub named QA Test Hub.
8. Hub Studio adds QA Test Item, which can be docked and appears in My Drops.

Browser agent completed 38 interaction steps. This validates the primary discover → explore → dock → keep → undock path and local hub authoring.

## Scope and limitations
- Test covers one browser session and seeded/demo content; it does not certify production readiness.
- Custom hubs and saved Drops remain browser-local; no cross-device synchronization.
- No backend, authentication, payments, tenant isolation, privacy audit or real visitor analytics.
- Not a substitute for automated end-to-end tests in CI, accessibility review, device/browser matrix, security review or real-user pilot.
- A prior smoke test reported two issues due to an incorrect item name and incomplete page inspection; these were not reproduced in the targeted second test.

## Next technical quality steps
1. Add Playwright end-to-end tests to CI with reliable selectors.
2. Test mobile viewport and keyboard accessibility.
3. Replace browser-local authoring with an authenticated hosted CMS for cross-device sharing.
