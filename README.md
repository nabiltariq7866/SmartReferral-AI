# SmartReferral AI

Frontend-only referral, waiting-list and intelligent scheduling product demo. Every person, organisation and clinical record is synthetic. AI, communication and integration behaviour is deterministic simulation.

## Run and verify

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
npm run test:e2e
```

Playwright requires its Chromium binary (`npx playwright install chromium`). The repository's E2E script manages the Windows Vite server lifecycle explicitly for reliable cleanup.

## Routes

- `/` Patient Access Command Centre
- `/referrals`, `/referrals/:id`, `/clinical-review`, `/incomplete-referrals`
- `/waiting-list`, `/breach-risk`, `/cancellation-ready`
- `/scheduling`, `/calendar`, `/capacity`, `/cancellation-matching`
- `/communications`, `/attendance`
- `/ai-insights`, `/analytics`
- `/integrations`, `/audit`, `/settings`

## Component structure

- `src/components/layout`: responsive application shell, grouped global search, notifications and role simulation.
- `src/components/ui.tsx`: accessible cards, buttons, badges, dialogs, drawers, focus management and skeletons.
- `src/components/product.tsx`: SmartReferral-specific flow, readiness, AI suggestion, waiting risk, cancellation, capacity, insight, comparison and preference components.
- `src/pages`: lazy-loaded operational and management routes.

## State and synthetic data architecture

`src/stores/useAppStore.ts` is the persisted Zustand domain engine. It owns patients, referrals, waiting records, slots, appointments, cancellation opportunities, communication, notifications and audit history. Actions validate permissions and prevent invalid transitions such as scheduling rejected/incomplete referrals, reusing booked slots, accepting expired offers or completing attendance out of order.

`src/data/seed.ts` provides realistic fictional patients, GPs, services, clinicians, locations, referrals, targets, capacity and operational history. Referral and patient IDs remain stable across every screen. Browser localStorage persists operational changes; sessionStorage preserves useful table/calendar filters. Settings → Reset Demo Data restores the seed.

## Deterministic AI simulation

`src/services/ai/index.ts` implements referral extraction, specialty/urgency suggestions, completeness and duplicate detection, breach risk, slot recommendations, cancellation ranking, no-show risk and capacity pressure. Outputs are explainable and never silently make clinical decisions. AI suggestions and final clinician decisions are stored separately.

## Role and permission architecture

- Referral Administrator: intake and missing-information recovery.
- Clinician / Consultant: specialty, urgency, routing, approval and rejection.
- Scheduler: booking, rescheduling, cancellation and attendance operations.
- Access Manager: waiting risk, scheduling and capacity oversight.
- Operations Manager: analytics and operational review.
- Administrator: full demo permissions.

Unauthorized state actions fail visibly. This is role simulation, not authentication.

## Demonstration workflows

### Referral to attendance

1. Open Emma Hughes (`REF-2026-0842`) in Referral Inbox.
2. Request the ECG and medication list; add both in Incomplete Referrals.
3. Approve or modify the clinical decision. The original AI suggestion remains visible.
4. Find Emma in Waiting List, inspect breach risk, and assign an explainable slot recommendation.
5. Send a reminder and record patient confirmation in Patient Communication.
6. Move the appointment through Arrived, In Progress and Completed in Attendance.

### Cancellation optimisation

1. Open Elena Petrova's booked Cardiology appointment in Calendar and cancel it.
2. Open Cancellation Matching and review ranked eligible patients.
3. Offer the slot and simulate Accept, Decline or No Response. Expired offers cannot be accepted.

### Waiting-target risk

Open Breach Risk, inspect a patient within three days of target, review the deterministic explanation, and assign compatible capacity. Scheduling removes the patient from the active-risk queue.

## Testing completed

- Vitest unit/integration coverage for AI analysis, missing information, duplicate detection, human overrides, permissions, breach risk, slot assignment, conflicts, cancellation, expiry, rescheduling, reminders, no-show response, attendance, reset and accessible dialogs.
- Playwright Chromium and tablet coverage for every route, referral inbox controls, incomplete recovery, human specialty override, cancellation opportunity, reminder/attendance and the complete Emma referral-to-attendance journey.
- ESLint, strict TypeScript production build, encoding/placeholder scan and dead-button scan.

## Known limitations

- No backend, database, live EHR/FHIR server, real referral ingestion, clinical AI, SMS/email provider or booking API; these are deliberately excluded by the frontend-only specification.
- Forecasts, breach indicators and no-show risk are deterministic operational simulations, not validated medical models.
- Uploaded referral files are metadata/demo selections only; file blobs are not persisted.

## TODOs

No actionable TODO remains within the master prompt's frontend-only scope. Production deployment, real integrations, clinical validation, security certification and governance approval would belong to a separate implementation phase.

See [COMPLIANCE_MATRIX.md](COMPLIANCE_MATRIX.md) for requirement-by-requirement evidence.
