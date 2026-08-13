# SmartReferral AI — Complete Frontend Product Demo Master Prompt

You are a Senior Frontend Engineer, Healthcare Product Architect, Patient Access Workflow Specialist, Scheduling Systems Designer, and Enterprise SaaS UI/UX Designer.

Your task is to build a polished portfolio product called:

# SmartReferral AI
## Referral, Waiting List & Intelligent Scheduling Platform

SmartReferral AI is an intelligent healthcare access platform designed to demonstrate how referrals can be received, analyzed, clinically validated, prioritized, moved into waiting lists, matched intelligently to available appointment capacity, and tracked through attendance.

The main operational problem this product demonstrates is:

Patients can wait unnecessarily because referrals are incomplete, reviewed manually, routed incorrectly, prioritized inconsistently, or not matched efficiently to available capacity.

The product must show how an AI-assisted workflow could reduce administrative friction while preserving clinical validation and human oversight.

This application will be shown to prospective healthcare clients.

It must therefore feel like a serious healthcare access-management product, not a static prototype, generic dashboard, or collection of disconnected screens.

---

# 1. READ EVERYTHING BEFORE CODING

Before creating or changing code:

1. Read every provided reference document.
2. Inspect the complete existing project.
3. Read:
   - package.json
   - routing
   - global styles
   - component architecture
   - existing mock data
   - state management
   - tests
   - reusable forms
   - tables
   - charts
   - drawers/modals
   - calendar components
4. Understand what already exists.
5. Preserve good existing implementation.
6. Refactor instead of duplicating.
7. Do not install unnecessary duplicate libraries.
8. Do not start coding before understanding the complete referral-to-attendance workflow.

If the project is initially empty, create a clean architecture from the beginning.

---

# 2. PROJECT CONSTRAINT

THIS IS FRONTEND ONLY.

Do NOT build:

- Django backend
- Node backend
- database server
- real EHR integration
- real FHIR server
- real clinical AI
- real referral ingestion API
- real email ingestion
- real SMS service
- real appointment booking API
- real machine-learning prediction service

Use only realistic synthetic healthcare data.

However:

This must NOT behave like a fake static frontend.

The application should simulate real system behavior using shared frontend state.

For example:

Upload Referral
→ simulated AI analyzes it
→ extracted patient information appears
→ specialty and urgency are suggested
→ missing information is identified
→ clinician modifies urgency
→ clinician approves referral
→ waiting-list entry is created
→ dashboard numbers change
→ cancellation later becomes available
→ AI recommends this patient
→ scheduler assigns slot
→ appointment appears in calendar
→ reminder status changes
→ attendance can be recorded.

The same patient and referral must persist throughout the complete workflow.

---

# 3. PRODUCT PRINCIPLE

SmartReferral AI is NOT an autonomous clinical triage system.

AI should:

- extract referral information,
- summarize referrals,
- detect missing information,
- identify potential duplicates,
- suggest specialty,
- suggest urgency,
- highlight referral-readiness issues,
- identify waiting-list risks,
- recommend suitable slots,
- match cancellations,
- estimate no-show risk,
- highlight capacity pressure.

Humans must make final decisions for:

- referral acceptance,
- specialty routing,
- urgency,
- rejection,
- clinical prioritization,
- appointment assignment where required.

Use patterns such as:

AI Suggestion  
Clinician Decision

and:

Approve  
Modify  
Reject

Do not let AI silently make irreversible clinical decisions.

---

# 4. PRIMARY END-TO-END WORKFLOW

The most important workflow is:

Referral Arrives
↓
AI Reads Referral
↓
Patient Information Extracted
↓
Specialty Suggested
↓
Urgency Suggested
↓
Missing Information Detected
↓
Duplicate Check
↓
Referral Summary Generated
↓
Clinical Validation
↓
Approve / Modify / Reject
↓
Waiting List
↓
Priority / Readiness / Breach Risk
↓
AI Scheduling
↓
Best Slot / Cancellation Match
↓
Human Confirmation
↓
Appointment Confirmed
↓
Reminder
↓
Attendance Tracked

This complete journey MUST work with shared state.

---

# 5. SECONDARY WORKFLOW

Cancellation Optimization:

Appointment Cancelled
↓
Slot Becomes Available
↓
AI Searches Waiting List
↓
Eligible Patients Identified
↓
Patients Ranked
↓
Best Match Recommended
↓
Scheduler Reviews
↓
Slot Assigned
↓
Patient Notified
↓
Waiting-List Position Updated
↓
Capacity Utilization Updated

---

# 6. THIRD WORKFLOW

Missing Information Recovery:

Referral Arrives
↓
AI Detects Missing Diagnostic Information
↓
Referral Status = Incomplete
↓
Missing Requirements Listed
↓
Staff Sends Simulated Information Request
↓
Referral Moves to Awaiting Information
↓
Information Added
↓
Readiness Recalculated
↓
Referral Returns to Clinical Review
↓
Approved
↓
Waiting List

---

# 7. FOURTH WORKFLOW

No-Show Risk:

Appointment Scheduled
↓
No-show Model Returns Risk
↓
High Risk Flag
↓
Administrative Follow-up Suggested
↓
Staff Sends Additional Confirmation
↓
Patient Confirms
↓
Risk Status Changes
↓
Attendance Later Recorded

Do not use no-show risk to automatically deny care.

---

# 8. RECOMMENDED TECH STACK

Use:

- React
- TypeScript
- Vite
- React Router
- Zustand
- localStorage or IndexedDB
- React Hook Form
- Zod
- Tailwind CSS
- shadcn/ui
- Radix UI
- TanStack Table
- FullCalendar or equivalent
- Recharts
- Lucide React
- Sonner
- date-fns
- Framer Motion only where useful

If suitable equivalent libraries already exist, reuse them.

Do not introduce dependencies simply because they are listed.

---

# 9. UNIQUE VISUAL IDENTITY

DO NOT copy the design of:

CareOps AI

or:

Clinician Copilot AI

SmartReferral AI must feel like a dedicated:

Patient Access
Referral Orchestration
Scheduling Intelligence
Capacity Optimization

platform.

The visual experience should communicate:

Movement
Flow
Priority
Routing
Capacity
Access
Optimization

The UI should feel faster and more operational than Clinician Copilot, but lighter and more refined than a traditional hospital operations dashboard.

Avoid:

- generic admin template
- CareOps dark navy theme
- Clinician Copilot sage/ivory theme
- cyberpunk
- neon
- excessive purple
- huge gradient backgrounds
- overly colorful KPI cards
- marketing website layouts
- dashboard clutter

---

# 10. SMARTREFERRAL COLOR SYSTEM

Create a unique cool access-management palette.

## Primary Indigo
#3346A8

Use for:

- sidebar
- primary actions
- selected navigation
- appointment intelligence
- workflow progress

## Scheduling Cyan
#19A7AE

Use for:

- available capacity
- slot matching
- successful routing
- active scheduling indicators

## Deep Ink
#182337

Use for:

- headings
- navigation text
- data-heavy interface areas

## App Background
#F5F7FB

## Surface
#FFFFFF

## Secondary Surface
#EEF2F8

## Border
#D9E0EA

## Main Text
#1D283A

## Secondary Text
#667287

## Success
#278666

## Warning
#D08A2F

## Critical
#C65454

## Referral Incomplete
#E09A45

## High Priority
#C94F60

## AI Accent
#6857C8

## AI Soft Background
#F1EEFC

## Capacity Highlight
#E8F8F8

## Selection Highlight
#EEF1FF

Use AI purple only for AI-generated recommendations.

Do not make the application a purple application.

---

# 11. COLOR USAGE PRINCIPLE

Approximately:

75% cool neutral / white
15% indigo / deep ink
10% cyan + semantic colors

Risk states should be understandable through:

icon
label
text
color

Never color alone.

---

# 12. TYPOGRAPHY

Use:

Inter

or another premium modern UI font already available.

Suggested sizing:

Page heading:
28px

Section title:
18–20px

Body:
14px

Table:
13–14px

Metadata:
12–13px

KPI:
28–34px

Do not use oversized marketing typography.

---

# 13. APPLICATION SHELL

Use a professional healthcare access-management shell.

## Suggested Sidebar

SMARTREFERRAL AI

ACCESS OVERVIEW
- Access Command Centre

REFERRALS
- Referral Inbox
- Clinical Review
- Incomplete Referrals

WAITING LIST
- Waiting List
- Breach Risk
- Cancellation Ready

SCHEDULING
- Appointment Calendar
- Capacity
- Cancellation Matching

PATIENT ACCESS
- Patient Communication
- Attendance

INTELLIGENCE
- AI Insights
- Access Analytics

SYSTEM
- Integrations
- Audit Trail
- Settings

Use Lucide icons consistently.

---

# 14. TOP BAR

Include:

Facility
Global referral/patient search
Date / current operating period
Alerts
Notifications
User profile
Demo Environment badge

Example:

Westbridge University Hospital

Global Search:
Search patient, referral ID, specialty...

Current user:

Laura Bennett
Referral Operations Lead

---

# 15. ROLE SIMULATION

Simulate:

Referral Administrator
Clinician
Scheduler
Access Manager
Consultant
Operations Manager
Administrator

Permissions should affect meaningful actions.

Example:

Referral Administrator:
can intake referrals
can request missing information

Clinician:
can approve specialty and urgency

Scheduler:
can assign appointments

Access Manager:
can review waiting-list risks and capacity

Do not implement real authentication.

---

# 16. SYNTHETIC DATA

Create realistic fictional data for:

Patients
Referrals
GPs
Clinicians
Specialties
Departments
Referral sources
Missing-information requirements
Waiting-list records
Appointment slots
Practitioners
Clinics
Locations
Capacity
Cancellations
Appointment reminders
Attendance
No-show risks
AI recommendations
Audit logs
Notifications

Do not use:

Lorem Ipsum
Test Patient
Patient 1
Doctor 1

Use realistic synthetic names.

---

# 17. CORE DATA CONTINUITY

Use centralized state.

Recommended stores:

patientStore
referralStore
waitingListStore
appointmentStore
capacityStore
notificationStore
analyticsStore
auditStore

Important:

A single referral must not become different unrelated data across screens.

Example:

Referral ID:
REF-2026-0842

Patient:
Emma Hughes

Specialty:
Cardiology

If approved:

the same Emma Hughes must appear in:

Waiting List
Appointment Matching
Patient Communication
Appointment Calendar
Attendance

---

# 18. PERSISTENCE

Use localStorage or IndexedDB for demo state.

Persist:

referrals
waiting-list changes
appointments
attendance
messages
human decisions

Avoid persisting huge file blobs in localStorage.

For uploaded referral documents, persist metadata only when necessary.

---

# 19. RESET DEMO

Settings:

Demo Controls

Button:

Reset Demo Data

Require confirmation.

Restore original seeded state.

---

# 20. ACCESS COMMAND CENTRE

This should be the strongest management screen.

Title:

Patient Access Command Centre

Subtitle:

Real-time visibility across referral readiness, waiting-list pressure, appointment capacity and access risks.

---

# 21. CORE DASHBOARD METRICS

Use the client reference data as seeded demo values where useful:

Total Waiting Patients
8,420

Urgent
612

Waiting > 18 Weeks
1,104

Missing Information
327

Cancellation Ready
842

High No-show Risk
296

Also optionally show:

Referrals Received Today
Clinical Reviews Pending
Available Slots This Week
Appointments Filled from Cancellations
Average Wait
Breach Risk

Metrics should become dynamically derived from demo state wherever practical.

---

# 22. DASHBOARD DESIGN

Avoid six giant unrelated colored cards.

Use refined KPI cards with:

value
label
trend
context
small status indicator

Example:

Waiting > 18 Weeks

1,104

13.1% of active waiting list

High Priority

---

# 23. AI INSIGHT PANEL

Use the example concept:

AI ACCESS INSIGHT

327 referrals are currently unable to progress because required information is missing.

Primary missing items:
Diagnostic imaging
Recent blood results
Medication history

Recommended administrative action:

Request outstanding information.

Button:

Review Incomplete Referrals

Clearly label:

AI-generated operational recommendation.

Do not make it a clinical decision.

---

# 24. ACCESS FLOW VISUALIZATION

Create a flow component:

Referral Intake
→ Clinical Review
→ Waiting List
→ Scheduling
→ Appointment
→ Attendance

Show current counts at every stage.

Example:

Received
1,240

Needs Review
184

Incomplete
327

Waiting
8,420

Scheduled
1,486

Completed
1,071

This should visually communicate bottlenecks.

---

# 25. REFERRAL INBOX

Build a professional referral inbox.

Filters:

All
New
AI Processed
Needs Review
Urgent
Incomplete
Duplicate Risk
Approved
Rejected

Search by:

patient
referral ID
GP
specialty

Columns:

Patient
Referral ID
Source
Received
Requested Service
AI Specialty
AI Urgency
Missing Info
Status
Actions

---

# 26. REFERRAL INTAKE METHODS

Create options:

New Manual Referral

Upload Referral

Simulate Email Referral

Simulate FHIR Referral

Simulate API Referral

Do not build real integrations.

---

# 27. UPLOAD REFERRAL

Button:

Upload Referral

Modal:

Drag & drop referral

or

Select Demo Document

Use sample synthetic referral files.

After selecting:

Document name
Source
Received date
Referring GP

Button:

Analyze Referral

---

# 28. AI PROCESSING EXPERIENCE

Show short staged process:

Reading referral...
Extracting patient information...
Identifying requested care...
Checking referral completeness...
Reviewing specialty routing...
Assessing urgency indicators...
Checking possible duplicates...
Preparing referral summary...

Keep it under a reasonable simulated duration.

---

# 29. AI REFERRAL EXTRACTION

Output sections:

Patient Information

Name
DOB
Patient ID
Phone

Referral Source

GP
Practice
Received date

Clinical Information

Reason for referral
Symptoms
Relevant history
Investigations
Current medications where present

---

# 30. SPECIALTY SUGGESTION

Example:

AI Suggested Specialty

Cardiology

Confidence:
High

Reason:

Referral describes exertional chest discomfort with cardiovascular history.

Label:

AI-assisted routing suggestion.

Clinical validation required.

---

# 31. URGENCY SUGGESTION

Example:

AI Suggested Urgency

Urgent

Reason:

Symptoms described in referral may require expedited review.

Important:

Do not present as final clinical triage.

---

# 32. MISSING INFORMATION DETECTION

Show:

Referral Readiness

Incomplete

Missing:

Recent ECG
Medication list

Possible statuses:

Complete
Incomplete
Needs Clarification

Action:

Request Information

---

# 33. INFORMATION REQUEST WORKFLOW

Click:

Request Information

Open modal:

Recipient
Referring Practice
Missing Items
Message Preview

Example:

We require the following information before this referral can progress:

- Recent ECG
- Current medication list

Button:

Send Demo Request

Then:

Referral status:
Awaiting Information

Timeline event created.

---

# 34. ADD MISSING INFORMATION

Provide demo action:

Add Received Information

Select:

ECG
Medication List
Blood Results
Imaging
Other

After adding all mandatory information:

Referral Readiness changes to:

Complete

and referral becomes available for clinical validation.

---

# 35. DUPLICATE REFERRAL DETECTION

AI should detect possible duplicate referrals.

Example:

Possible Duplicate

Current:
REF-2026-0842

Existing:
REF-2026-0761

Same patient
Same specialty
Received 9 days earlier

Match:
High

Actions:

Review Existing
Keep Both
Mark Duplicate

Do not automatically merge or delete.

---

# 36. REFERRAL SUMMARY

AI generates concise summary:

Reason for referral
Symptoms
Relevant history
Investigations
Outstanding information

Allow:

Copy
Edit
Regenerate
View Source

---

# 37. ORIGINAL DOCUMENT + AI REVIEW

Use split layout.

LEFT:

Original referral document

RIGHT:

AI Referral Analysis

This should be a key portfolio screen.

Sections:

Patient
Specialty
Urgency
Missing Information
Duplicate Status
Summary
Routing

---

# 38. CLINICAL VALIDATION

Clinician receives referral.

Display:

AI Suggestion

Specialty:
Cardiology

Urgency:
Urgent

Routing:
Rapid Access Cardiology

Then:

Final Clinical Decision

Specialty dropdown
Urgency dropdown
Route dropdown
Notes

Actions:

Approve
Modify & Approve
Reject

---

# 39. HUMAN OVERSIGHT

If clinician changes AI suggestion, preserve both.

Example:

AI Suggested:
General Cardiology

Clinician Decision:
Rapid Access Chest Pain Clinic

Show:

Decision modified by Dr. Nathan Cole.

Never overwrite historical AI suggestion.

---

# 40. REFERRAL REJECTION

Allow reasons:

Not appropriate for service
Insufficient information
Duplicate
Alternative service recommended
Other

Require optional notes.

Update audit log.

---

# 41. REFERRAL TIMELINE

Every referral detail should show:

Received
AI processed
Information requested
Information received
Clinical review
Approved
Waiting-list entry created
Appointment matched
Appointment confirmed

Use timestamps and actor.

---

# 42. WAITING LIST ENGINE

This is another major module.

Create a powerful operational table.

Columns:

Patient
Referral
Specialty
Priority
Waiting Since
Days Waiting
Target
Breach Risk
Referral Readiness
Cancellation Ready
No-show Risk
Suggested Slot
Status
Actions

---

# 43. WAITING-LIST FILTERS

Functional filters:

Specialty
Priority
Wait duration
Breach risk
Readiness
Cancellation readiness
No-show risk
Age group
Status

---

# 44. WAITING-LIST PRIORITY

Priority can include:

Routine
Priority
Urgent
Very Urgent

Keep final priority human-approved.

AI may assist.

---

# 45. WAIT TARGET

For demo:

Every waiting-list record should include:

targetDays

Then derive:

Days Remaining

or:

Overdue by X Days

Example:

Target:
14 days

Waiting:
18 days

Status:
4 days overdue

---

# 46. BREACH RISK

Display:

Low
Medium
High
Breached

Calculate deterministically from:

waiting time
target
available capacity

Use sensible demo logic.

Do not pretend this is a validated clinical model.

---

# 47. WAITING LIST DETAIL PANEL

Click patient.

Side drawer:

Patient details
Referral summary
Priority
Wait history
Readiness
Missing information
Preferred days/times
Previous appointments
No-show risk
Available slots
Recommended action

---

# 48. AI ADMINISTRATIVE PRIORITIZATION

Generate a queue:

Patients Requiring Attention

Examples:

Referral incomplete
Breach within 3 days
Cancellation-ready urgent patient
High no-show risk
Referral waiting for clinical validation

---

# 49. INTELLIGENT SCHEDULING MODULE

Create:

Scheduling Intelligence

Tabs:

Best Matches
Available Slots
Calendar
Capacity
Cancellations

---

# 50. SLOT DATA MODEL

Each slot should contain:

Practitioner
Specialty
Clinic
Date
Start
Duration
Location
Capacity
Status
Appointment type

---

# 51. FIND BEST SLOT

Waiting-list row action:

Find Best Slot

Click:

AI searches mock capacity.

Show processing:

Checking specialty...
Checking priority...
Reviewing patient preferences...
Reviewing target wait...
Checking available capacity...
Ranking suitable appointments...

---

# 52. SLOT RECOMMENDATIONS

Display top 3.

Example:

BEST MATCH

Dr. Sarah Wilson

Cardiology Clinic 2

14 Aug 2026
10:30

Match Quality:
High

Why:

Correct specialty
Earliest clinically approved slot
Within target window
Patient prefers mornings
No scheduling conflict

Button:

Assign

---

# 53. VIEW ALTERNATIVES

Alternative slots should have trade-offs.

Example:

Slot A:
Tomorrow
Patient preference mismatch

Slot B:
3 days later
Preferred consultant

Slot C:
5 days later
Preferred location

This makes scheduling intelligence feel real.

---

# 54. APPOINTMENT ASSIGNMENT

Assign should:

create appointment
remove/update waiting-list status
update slot capacity
create referral timeline event
update dashboard
create notification/reminder state
update audit log

---

# 55. APPOINTMENT CALENDAR

Use professional:

Day
Week
Month

calendar.

Filters:

Specialty
Clinician
Location
Service

Show:

Available
Booked
Reserved
Cancelled

---

# 56. BOOK MANUALLY

Allow scheduler:

Book Appointment

Fields:

Patient
Referral
Specialty
Practitioner
Date
Time
Clinic
Location
Duration

Check conflicts.

---

# 57. RESCHEDULE

Allow:

Reschedule

Original slot becomes available.

If appropriate:

Generate waiting-list opportunity.

---

# 58. CANCELLATION WORKFLOW

When appointment is cancelled:

Appointment status:
Cancelled

Slot:
Available

System creates:

Cancellation Opportunity

---

# 59. CANCELLATION MATCHING

Create dedicated:

Cancellation Matching

screen.

Header:

Available Cancellation Slots

Each slot should show:

Date
Time
Specialty
Clinician
Location
Original cancellation time

Then:

Eligible waiting patients.

---

# 60. CANCELLATION ELIGIBILITY

Demo matching can consider:

Specialty
Priority
Readiness
Patient preference
Wait duration
Existing appointment
Travel/location preference

---

# 61. CANCELLATION MATCH RANKING

Example:

1. Emma Hughes

Urgent
Waiting 11 days
Morning preference
Referral Complete

Match:
Excellent

2. Peter Martin

Routine
Waiting 19 days
Any time

Match:
Good

Allow:

Offer Slot

---

# 62. OFFER SLOT

Click:

Offer Slot

Status:

Offer Sent

Simulated patient response:

Accept
Decline
No Response

Allow staff to simulate.

---

# 63. ACCEPTED CANCELLATION

If patient accepts:

slot assigned
existing later appointment optionally released
waiting list updated
appointment created
dashboard updated

---

# 64. DECLINED CANCELLATION

If declined:

patient remains waiting
next eligible patient can be offered

Keep history.

---

# 65. NO-SHOW RISK

Each scheduled appointment may show:

No-show Risk:
Low / Medium / High

Factors may be represented generically:

Previous missed appointment
Recent confirmation missing
Long waiting period
Appointment time

Do not use sensitive/protected factors unnecessarily.

---

# 66. NO-SHOW FOLLOW-UP

For High Risk:

Recommended Action:

Send additional confirmation.

Actions:

Send SMS Reminder
Send Email
Call Patient
Mark Confirmed

All simulated.

---

# 67. PATIENT COMMUNICATION

Create:

Patient Communication

Show messages for:

Referral received
Missing information
Waiting-list confirmation
Appointment offered
Appointment confirmed
Reminder
Cancellation offer

---

# 68. COMMUNICATION TIMELINE

Patient-level history:

13 Aug
Appointment reminder sent

12 Aug
Appointment confirmed

11 Aug
Cancellation slot offered

08 Aug
Added to waiting list

---

# 69. REMINDER WORKFLOW

Channels:

SMS
Email
Portal

Click:

Send Reminder

Status:

Sending...
Sent

Then:

Last Reminder:
Today 14:32

---

# 70. PATIENT RESPONSE

Allow simulated:

Confirmed
Needs Reschedule
Cancelled
No Response

Appointment/waiting state must update appropriately.

---

# 71. ATTENDANCE

Statuses:

Scheduled
Confirmed
Arrived
In Progress
Completed
No-show
Cancelled

Actions should work.

---

# 72. CHECK-IN

Button:

Mark Arrived

Then:

Appointment:
Arrived

Dashboard attendance metrics update.

---

# 73. NO-SHOW

Mark No-show

Then:

attendance status updates
patient history updates
no-show metric updates

Optional:

Return to waiting list

must require staff action.

---

# 74. CAPACITY MANAGEMENT

Create:

Capacity

Views:

By Specialty
By Clinician
By Location
By Week

Metrics:

Available Slots
Booked
Utilization
Waiting Demand
Capacity Gap

---

# 75. CAPACITY VS DEMAND

Example:

Cardiology

Waiting:
1,420

Slots next 4 weeks:
840

Capacity pressure:
High

---

# 76. AI CAPACITY INSIGHT

Example:

AI Capacity Insight

Cardiology demand currently exceeds scheduled capacity.

An additional 86 appointment slots would be required to reduce the highest-risk waiting cohort over the next four weeks.

Clearly mark as:

Operational simulation.

Do not present fake forecast as validated fact.

---

# 77. CLINIC UTILIZATION

Show:

Clinic
Capacity
Booked
Completed
No-show
Unused

Use bar charts carefully.

---

# 78. ACCESS ANALYTICS

Create:

Access Analytics

Metrics:

Referral volume
Referral completion rate
Average validation time
Average wait
Breach rate
Cancellation fill rate
No-show rate
Appointment utilization
Referrals missing information

---

# 79. REFERRAL FUNNEL

Visualization:

Received
Processed
Complete
Approved
Waiting
Scheduled
Attended

Allow date filtering.

---

# 80. WAITING LIST ANALYTICS

Charts:

Waiting by specialty
Waiting duration
Priority distribution
Breach risk
Incomplete referrals
Cancellation-ready patients

---

# 81. AI INSIGHTS SCREEN

Create a prioritized feed.

Examples:

327 referrals blocked by missing information.

64 urgent referrals are within three days of target breach.

21 cancellation slots are currently unfilled.

Cardiology capacity is below forecast demand.

High no-show risk identified for 38 upcoming appointments.

Each insight needs:

Why it matters
Affected records
Recommended administrative action
Review button

---

# 82. AI TRACEABILITY

For scheduling recommendations show:

Why this recommendation?

Example:

Recommended Emma Hughes because:

- Cardiology referral
- Clinically approved as urgent
- Referral complete
- 11 days waiting
- Morning preference
- Earliest suitable slot

This is important.

Avoid unexplained AI scores.

---

# 83. AUDIT TRAIL

Create enterprise-grade audit log.

Examples:

Referral uploaded
AI analysis generated
Clinician modified urgency
Referral approved
Patient added to waiting list
Slot assigned
Reminder sent
Patient confirmed
Attendance recorded

Columns:

Time
User
Patient
Referral
Action
Previous
New

---

# 84. INTEGRATIONS

Create simulated:

Referral Sources & Integrations

Cards:

GP Portal
Email
FHIR
REST API
EHR
Patient Portal

Statuses:

Demo Connected
Simulation
Disabled
Attention

Do NOT claim real live integrations.

---

# 85. FHIR CONCEPT

Optionally show demo resource mapping:

Patient
ServiceRequest
Appointment
Practitioner
Schedule
Slot
Task
Communication

Clearly label:

FHIR Demo Mapping

No live server.

---

# 86. NOTIFICATIONS

Notification center:

Urgent referral awaiting review
Cancellation slot available
Patient accepted earlier appointment
Referral information received
Appointment high no-show risk
Target breach warning

---

# 87. GLOBAL SEARCH

Search:

patient
referral ID
appointment
GP
specialty

Results grouped.

Click result navigates correctly.

---

# 88. EMPTY STATES

Examples:

No urgent referrals awaiting review.

No cancellation slots available.

No incomplete referrals match current filters.

No patients currently at breach risk.

Make empty states professional.

---

# 89. LOADING STATES

Use:

skeletons
short AI progress states
calendar loading
table loading

No fake 10-second waits.

---

# 90. ERROR STATES

Simulate edge cases:

Unsupported referral file
AI extraction failed
Referral duplicate detected
Clinical review already completed
Missing mandatory information
No suitable appointment
Slot already assigned
Appointment conflict
Patient declined cancellation
Reminder failed
Integration unavailable

Buttons must not silently fail.

---

# 91. MODALS & DRAWERS

Use appropriate larger dialogs.

Referral review:
wide drawer

Appointment booking:
medium modal

Cancellation matching:
wide drawer

Missing information:
medium modal

Do not cram complex workflow into tiny popup.

---

# 92. ACCESSIBILITY

Include:

keyboard navigation
visible focus states
labels
focus trap
Escape handling
ARIA
good contrast
non-color status indicators

---

# 93. RESPONSIVENESS

Primary:

1440px
1280px

Tablet support.

Complex tables may use:

horizontal scroll
responsive column priorities
detail drawers

Do not sacrifice desktop productivity for mobile.

---

# 94. ANIMATION

Use subtle:

flow transitions
AI processing
new appointment
slot highlight
drawer transitions

Avoid excessive motion.

---

# 95. UNIQUE VISUAL COMPONENTS

Create SmartReferral-specific reusable UI:

ReferralFlowStepper
ReferralReadinessBadge
AISpecialtySuggestion
AIUrgencySuggestion
WaitingRiskIndicator
SlotMatchCard
CancellationOpportunityCard
CapacityPressureBar
AccessInsightCard
ReferralTimeline
ReferralComparison
PatientPreferenceBadge

---

# 96. DEMO SCENARIO 1 — COMPLETE REFERRAL JOURNEY

Seed a specific referral:

Emma Hughes

Referral:
Cardiology

Process:

Upload
→ AI analysis
→ specialty Cardiology
→ urgency Urgent
→ ECG missing
→ request ECG
→ add ECG
→ clinician reviews
→ clinician approves
→ waiting list
→ find best appointment
→ assign
→ reminder
→ patient confirms
→ mark arrived
→ completed

Every step must modify shared state.

---

# 97. DEMO SCENARIO 2 — CANCELLATION OPTIMIZATION

Create a scheduled Cardiology appointment.

Cancel it.

Then:

Slot becomes cancellation opportunity.

AI finds suitable patients.

Choose best match.

Offer earlier appointment.

Patient accepts.

Appointment state changes.

Capacity dashboard updates.

---

# 98. DEMO SCENARIO 3 — WAITING TARGET RISK

Seed patient:

High-priority referral

Target:
14 days

Waiting:
12 days

Status:

High breach risk.

Dashboard flags patient.

Access Manager opens record.

Find suitable slot.

Assign within target.

Risk disappears.

---

# 99. DEMO SCENARIO 4 — INCOMPLETE REFERRAL

Referral arrives missing:

Diagnostic imaging

Staff:

Request Information

Referral becomes:

Awaiting Information

Then simulate:

Information Received

Referral Readiness:
Complete

Returns to Clinical Review.

---

# 100. DEMO SCENARIO 5 — HIGH NO-SHOW RISK

Appointment scheduled.

Risk:
High

Staff sends:

Additional confirmation.

Patient confirms.

State becomes:

Confirmed

Attendance later marked:

Completed.

---

# 101. SIMULATED AI ARCHITECTURE

Create clean services.

Suggested:

src/services/ai/

referralExtractionAI.ts
specialtyRoutingAI.ts
urgencyAI.ts
referralCompletenessAI.ts
duplicateReferralAI.ts
waitingListAI.ts
slotMatchingAI.ts
cancellationMatchingAI.ts
noShowAI.ts
capacityAI.ts
accessInsightsAI.ts

Functions might include:

analyzeReferral()
suggestSpecialty()
suggestUrgency()
detectMissingInformation()
detectDuplicateReferral()
calculateBreachRisk()
recommendSlots()
rankCancellationPatients()
calculateNoShowRisk()
generateCapacityInsight()

---

# 102. AI LOGIC PRINCIPLE

Do not create fully random outputs.

Use deterministic mock logic.

Example:

Referral with:

chest discomfort
cardiac history

may suggest:

Cardiology

Referral missing ECG:

Incomplete

Same patient + same specialty + similar date:

Possible Duplicate

This makes demo behavior credible.

---

# 103. SOURCE DOCUMENT LINKAGE

For extracted referral fields allow:

View Source

Example:

AI identified:

Chest discomfort on exertion

Source:

Referral PDF
Page 1
Clinical History

This adds credibility.

---

# 104. STATE ACTIONS

Ensure stores contain meaningful actions.

Examples:

addReferral
updateReferral
approveReferral
rejectReferral
requestInformation
addReferralInformation
addWaitingListEntry
updatePriority
assignAppointment
cancelAppointment
rescheduleAppointment
createCancellationOpportunity
offerCancellationSlot
acceptSlotOffer
declineSlotOffer
sendReminder
recordAttendance
resetDemo

---

# 105. PREVENT INVALID STATE

Examples:

Cannot schedule rejected referral.

Cannot add incomplete referral to normal scheduling flow without appropriate status.

Cannot assign already booked slot.

Cannot mark appointment completed before appropriate workflow.

Cannot accept expired cancellation offer.

Cannot create duplicate waiting-list record for same referral.

---

# 106. FRONTEND PERMISSIONS

Use role permissions.

Example:

Clinician can approve referral.

Scheduler can assign slot.

Referral admin cannot make final clinical urgency decision unless role allows.

Operations manager can view analytics but not clinically approve referral.

---

# 107. DESIGN DETAILS THAT MAKE IT FEEL REAL

Use:

Referral IDs

REF-2026-0842

Patient IDs

PT-10492

Wait time

12 days

Target

14 days

Last action

Reviewed 12 minutes ago

Source

GP Portal

Workflow owner

Access Team 2

Appointment:

Cardiology Clinic 4

Location:

North Wing

---

# 108. DATE/TIME REALISM

Use consistent dates.

Avoid contradictory dates.

Generate relative labels from state where possible:

Received 2 days ago

Waiting 11 days

Appointment tomorrow 10:30

---

# 109. TOOLTIP EXPLANATIONS

For unfamiliar concepts:

Breach Risk
Referral Readiness
Cancellation Ready
No-show Risk

add short tooltip explanations.

---

# 110. TABLE QUALITY

Tables should include:

sort
filters
search
pagination
row actions
sticky header where useful
selected row
loading state
empty state

Do not make tables purely decorative.

---

# 111. NAVIGATION STATE

Persist useful filter state where appropriate.

Example:

User opens:

Urgent Cardiology

then returns from detail.

Keep filters if reasonable.

---

# 112. CODE QUALITY

Avoid:

giant page components
duplicated forms
random inline mock arrays
hardcoded changing metrics
dead buttons
non-functional menu items
console errors
uncaught state contradictions

---

# 113. SUGGESTED STRUCTURE

Adapt to the real codebase.

Conceptually:

src/
  components/
    ui/
    layout/
    referrals/
    waitingList/
    scheduling/
    access/
    ai/
    analytics/

  pages/
    CommandCentre/
    ReferralInbox/
    ReferralDetail/
    ClinicalReview/
    IncompleteReferrals/
    WaitingList/
    BreachRisk/
    CancellationReady/
    AppointmentCalendar/
    Capacity/
    CancellationMatching/
    PatientCommunication/
    Attendance/
    AIInsights/
    AccessAnalytics/
    Integrations/
    AuditTrail/
    Settings/

  stores/

  services/
    ai/

  data/
    seed/

  types/

  utils/

---

# 114. TESTING

Add tests for critical frontend workflows.

At minimum:

Referral analysis
Referral approval
Human specialty override
Human urgency override
Missing information
Information request
Duplicate detection
Waiting-list creation
Breach calculation
Slot matching
Appointment assignment
Cancellation
Cancellation match
Reminder
Attendance
No-show risk
Reset demo

---

# 115. END-TO-END TESTS

If tooling supports Playwright:

Test:

Referral → Waiting List → Appointment → Attendance

Test:

Incomplete Referral → Information Added → Approval

Test:

Appointment Cancellation → Matching → Offer → Accept

Test:

Human modifies AI specialty → correct specialty persists into waiting list.

This last regression test is especially important.

---

# 116. FINAL MANUAL QA

Before declaring complete verify:

## Navigation
All pages load.

## Referrals
Upload works.
Manual referral works.
AI processing works.
Missing information works.
Duplicate detection works.
Summary works.
Approve works.
Modify works.
Reject works.

## Human Oversight
AI suggestion preserved.
Final clinician decision preserved separately.

## Waiting List
Patient appears.
Priority works.
Target works.
Days waiting works.
Breach risk works.
Filters work.

## Scheduling
Slots work.
Recommendations work.
Alternatives work.
Appointment assignment works.
Conflict prevention works.

## Cancellations
Cancellation frees capacity.
Opportunity created.
Patient matching works.
Offer/accept/decline works.

## Communication
Reminder works.
Confirmation works.
History updates.

## Attendance
Arrived works.
Completed works.
No-show works.

## Analytics
Metrics reflect state.

## Integrations
Clearly demo/simulated.

## Permissions
Restricted actions properly blocked.

## General
No dead buttons.
No broken routes.
No console errors.
No contradictory demo data.
No encoding issues.
No unsupported fake clinical claims.

---

# 117. FINAL RESPONSE AFTER IMPLEMENTATION

When implementation is complete provide:

1. Summary.
2. Files created.
3. Files modified.
4. Routes.
5. Component structure.
6. State architecture.
7. Synthetic data model.
8. AI simulation architecture.
9. Role/permission architecture.
10. Referral workflow instructions.
11. Cancellation workflow instructions.
12. Waiting-risk workflow instructions.
13. Testing completed.
14. Known limitations.
15. TODOs.

Do not simply explain what would be built.

Actually build the frontend.

---

# 118. FINAL PRODUCT STANDARD

SmartReferral AI should feel like a mature healthcare access product that an organization could use to understand:

Where referrals are stuck.

Why referrals cannot progress.

Which patients are at risk of excessive waiting.

Which appointments should be offered next.

Where unused capacity exists.

Which cancellations can be filled.

Which patients need additional administrative follow-up.

The final product should make this story easy to demonstrate:

"We received a referral."

Upload referral.

"AI has extracted and reviewed the incoming information."

Show analysis.

"It is incomplete."

Request missing information.

"We received the missing document."

Add it.

"The clinician confirms specialty and urgency."

Approve it.

"The patient now enters the waiting list."

Open waiting list.

"The system knows this patient is approaching their target."

Show risk.

"A cancellation has just opened."

Open matching.

"SmartReferral recommends this patient because the referral is complete, urgency is approved, the patient has waited 11 days, and the slot matches their preferences."

Assign appointment.

"Now the patient receives a confirmation."

Send reminder.

"The patient arrived."

Mark attendance.

All of this must happen inside one connected frontend experience.

The product should look polished enough to present to:

Hospitals
Specialist clinics
Health systems
Referral management providers
Scheduling platforms
Digital-health companies
Healthcare software vendors

The demo must communicate:

AI accelerates access workflows.

Humans remain responsible for clinical decisions.

Waiting-list capacity becomes visible.

Appointment opportunities are used more intelligently.

And the complete referral-to-attendance journey is traceable.