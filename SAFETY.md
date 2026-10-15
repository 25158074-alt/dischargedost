# DischargeDost safety notes

## Safety status

**Prototype only. Not a medical device, medical record system, prescription reader, or source of care instructions.** Current UI content is fictional test data. Do not use it to make treatment decisions. The permanent patient footer says: “This is a reading aid. It does not replace medical advice.”

## Incorrect or unsupported responses

- The app does not currently OCR, parse, translate, summarize, or answer questions about real documents.
- The file picker only reports a selected filename; the file is not read or sent to any service. Do not add a network model call without a reviewed privacy, security, grounding, and safety design.
- Sample entries are hand-authored and fictional. Their source popovers refer to synthetic text, not an uploaded record.
- No medication, diagnosis, or warning should be inferred, added, or changed. A future extraction must return null plus a reason when the original is missing/unclear; every displayed item needs a verbatim quote and page reference, checked by deterministic code.
- The UI must not answer free-form clinical questions. If that feature is ever implemented, constrain it to the source text and show citations—or omit it.

## Sensitive information

- No real document contents are ingested, stored, logged, or uploaded in this prototype. There is no backend/database.
- A future implementation must redact name, phone, address, Aadhaar, UHID/MRN, and DOB before any reasoning call; minimize local restore maps; avoid logging; delete working data on session end; and receive security/privacy review.
- Do not upload genuine records to this demo. Browser filenames are transient UI state only.

## Uncertain results

- The fictional Furosemide handwriting contains a question mark and is marked “ask your doctor”; the app does not silently select a confident dose.
- Low confidence and explicit flags are visible. A future OCR pipeline must show low-quality page warnings and retain page/line locations.
- Hindi strings are manually authored illustration only. There is no machine translation, language coverage guarantee, or back-translation check. Drug names and numeric tokens need a locked-token verification before translation is trusted.

## High-risk decisions

- Synthetic warfarin and ambiguous Furosemide keep the overall plan RED. The fixed warning is “In an emergency call 108 / go to the nearest hospital.”
- The deterministic helper is only a demo heuristic, not a complete drug interaction, dosing, or clinical risk engine. A future system must test high-risk drugs, missing dose/frequency/duration, ambiguous abbreviations, duplicate drugs, conflicts, low OCR confidence, and pediatric/pregnancy/renal/hepatic signals.
- The reviewer edit is synthetic. There is no nurse account, verified identity, audit trail, or secure PIN gate; the hard-coded client-side demo PIN is trivially bypassable. The UI explicitly says the simulated action is not real clinical approval; RED remains after the edit.
- A future RED plan must not be shown as verified or acted upon until the required qualified hospital staff review is completed and traceable.

## Human review

- Real high-risk, ambiguous, low-confidence, pediatric, pregnancy, renal, or hepatic cases require human review before any verified status.
- A future staff flow needs authenticated roles, source-document comparison, edit/approve/reject for each item, a timestamped audit trail, and a safe way to return questions to the issuing hospital.
- No staff action should erase the original quote, uncertainty, or provenance. Human-entered corrections must be clearly distinguished from source text.

## Fixed emergency line and boundaries

The app always includes “In an emergency call 108 / go to the nearest hospital.” Follow local emergency services and treating-clinician guidance. DischargeDost must not diagnose, recommend new medicines, change doses, or replace emergency services or a clinician.

## Pre-release blockers

Real OCR/vision and PDF processing, PII minimization, volatile processing/deletion, strict schema validation, quote-and-number grounding, deterministic risk-rule coverage/tests, provider security review, true reviewer authentication, translation number/name integrity, supported language/TTS review, clinical usability evaluation, and a formal privacy/medical regulatory assessment are absent. Do not use real patient data until these have been designed, independently reviewed, and validated.
