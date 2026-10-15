# DischargeDost — MVP plan

## Implementation
A fast, single-page React + TypeScript web client on Vite/port 3000, with a static `/review` route and five text fixtures. The fixed synthetic cardiac example is the end-to-end path; uploads are visible but inert. No model/API key or patient record is used. Sample data, deterministic risk rules, view code, and fixture evaluation stay separate. Browser-only APIs handle speech, print, WhatsApp deep link, and `.ics` download. Later production work requires PDF/image ingest, PII minimization, OCR/LLM adapter, strict schema, exact-quote/number verification, reviewed rule tests, real human access control, and clinical validation. This first five-minute pass intentionally prioritizes transparent safety over false claims of functioning medical extraction.

## Structure
- `src/App.tsx`, `src/style.css`: patient and reviewer journeys.
- `src/lib/samples.ts`: fictional sample records and quote/reminder helpers.
- `src/lib/safety/rules.ts`: deterministic safety flags and frequency label normalization.
- `samples/`: five synthetic source files.
- `eval/run.mjs`: fixture metrics (not model benchmarks).
- `README.md`, `SAFETY.md`: runbook and limitations.

## Design direction
- Three possible styles: quiet pharmacy ledger (7%); clinical editorial, warm paper and deep teal (6%); bright public-service kiosk (5%). Chosen: **clinical editorial**.
- **Design Movement:** contemporary editorial healthcare, anchored in a printed discharge folder.
- **Core Principles:** readable on phones; source before summary; calm, high-contrast risk cues; no decorative complexity.
- **Color Philosophy:** deep teal conveys practical reassurance, warm paper supports long reading, restrained rust/amber marks uncertainty without alarm overload.
- **Layout Paradigm:** vertical patient narrative with a prominent risk stripe, fixed-feeling tab row, and four timetable columns that collapse to two on small screens.
- **Signature Elements:** simple intersecting cross mark; source quote popover; paper-like sample reviewer pane.
- **Interaction Philosophy:** explicit, reversible controls; every action remains labelled; uncertainty is never hidden behind a tooltip.
- **Animation:** brief spinner only during demo progress; no celebratory animation for medical decisions.
- **Typography System:** DM Sans for compact interface labels and DM Serif Display for patient-facing section headings, with system fallbacks.
- **Brand Essence:** “A clearer reading companion for patients and families”; calm, candid, practical.
- **Brand Voice:** plain, non-judgmental, explicit. Examples: “Nothing is guessed.” “This sample is not a care instruction.”
- **Wordmark & Logo:** lowercase wordmark with a hand-drawn-like cross assembled from two rounded strokes inside a tilted rounded square.
- **Signature Brand Color:** deep teal (`#176b64`).

## Scope trade-off
User supplied a comprehensive three-day product brief but set a five-minute immediate build deadline. The deliverable is a runnable polished demo, not a complete care system. See README and SAFETY for unfinished requirements and safe boundaries.
