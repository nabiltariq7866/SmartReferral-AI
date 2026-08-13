# SmartReferral AI Master Prompt Compliance Matrix

This is the completion authority for the frontend-only scope. “Verified” means implementation is backed by source inspection plus automated or browser evidence.

| Requirements | Status | Authoritative evidence |
|---|---|---|
| 1–19 architecture, constraints, identity, shell, roles, synthetic data, continuity, persistence, reset | Verified | `src/App.tsx`, `src/styles.css`, `src/data/seed.ts`, persisted `useAppStore.ts`, permission/reset tests |
| 20–24 Command Centre, dynamic metrics, AI insight, access flow | Verified | `CommandCentre.tsx`; all-route Chromium/tablet browser sweep |
| 25–41 inbox, five intake methods, staged AI, extraction, missing information, duplicates, summary, split review, clinical decisions, timeline | Verified | `Referrals.tsx`, `ReferralDetail.tsx`, `IncompleteReferrals.tsx`; AI/unit tests and incomplete/override E2E |
| 42–48 waiting engine, all requested filters, targets, risk, detail, admin queue | Verified | `WaitingList.tsx`; persisted filters, sorting, pagination, deterministic risk tests and browser scenarios |
| 49–57 scheduling intelligence, slots, top matches, explanation, assignment, Day/Week/Month calendar, manual booking, reschedule | Verified | `Scheduling.tsx`, `Calendar.tsx`, `SlotMatchCard.tsx`, store assignment/reschedule tests, E2E |
| 58–64 cancellation, released capacity, ranked eligibility, offer, accept/decline/no-response, expiry | Verified | `CancellationMatching.tsx`; all three response controls, expiry guard, and full cancellation → match → offer → accept E2E |
| 65–73 no-show risk, follow-up, channels, reminder failure/retry, all patient responses, attendance and return-to-waiting action | Verified | `Communications.tsx`, `Attendance.tsx`; state tests and full attendance E2E |
| 74–82 capacity views, pressure, utilisation, analytics, funnel, AI insights and traceability | Verified | `Capacity.tsx` clinic Capacity/Booked/Completed/No-show/Unused table; all six waiting analytics in `Analytics.tsx`; `AIInsights.tsx` |
| 83–87 audit, demo integrations/FHIR mapping, notifications, global search/navigation | Verified | `SystemPages.tsx`, `AppShell.tsx`; audit search/export and route browser sweep |
| 88–94 empty/loading/error states, wide dialogs/drawers, keyboard/focus accessibility, responsiveness, subtle motion | Verified | shared `ui.tsx`, skeleton lazy-route fallback, targeted workflow errors, focus/Escape tests, desktop/tablet E2E |
| 95–104 reusable product components, connected scenarios, deterministic AI services and meaningful state actions | Verified | components, `services/ai`, Zustand actions, 21+ integration tests and scenario E2E |
| 105–113 invalid-state prevention, permissions, realistic dates/data, tooltips, table quality, navigation-state persistence, code quality | Verified | store guards/tests, status titles, sorting/filtering/pagination, session persistence, zero-error ESLint, lazy code splitting |
| 114–115 critical tests and required Playwright journeys | Verified | 26 Vitest tests plus 16 Chromium/tablet Playwright cases: intake/navigation, incomplete recovery, human override, cancellation offer/accept, attendance, full Emma journey |
| 116 final manual QA checklist | Verified | all 19 primary routes swept in Chromium/tablet with page-error capture; build/lint/unit/E2E gates |
| 117 final delivery documentation | Verified | `README.md`, this matrix, and final handoff inventory |
| 118 mature product standard | Verified | connected referral-to-attendance state, explainable AI, human clinical authority, waiting/capacity visibility, complete traceability |

Frontend-only exclusions are intentional: no backend, live clinical AI, EHR/FHIR server, email/SMS provider, booking API, or real patient data.
