# Rihaee – BNSS Section 479 Undertrial Case Management Platform

An enterprise-grade administrative decision-support and custody case-management platform built with **React**, **Vite**, **Tailwind CSS**, and **TypeScript**.

---

## 🏛️ Platform Purpose & Legal Framework
Rihaee assists jail superintendents, reviewing officers, and District Legal Services Authorities (DLSAs) in systematically identifying, verifying, and preparing undertrial review dossiers under **Section 479 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023** (formerly Section 436A CrPC).

> **Statutory Notice:** Rihaee is an administrative screening and decision-support platform. It does not grant bail, replace judicial discretion, or provide legal counsel. Final orders of release remain strictly with the competent court.

---

## 🚀 Key Modules & Architecture

### 1. Fixed Left Navigation & Enterprise Shell
- **Brand Identity**: Rihaee — Undertrial Review Platform.
- **Continuous Session State**: Jail Superintendent, Central Jail No. 1, Tihar (Online indicator).
- **Global Header**: Cross-dossier search, real-time alert popover, quick calculator shortcut.

### 2. Overview / Dashboard (`/`)
- Dynamic greeting banner with facility jurisdiction.
- **Clickable KPI Metric Cards**:
  - Total Undertrials (128 recorded in facility)
  - Approaching Threshold (< 30-90 days)
  - Review Required (Threshold reached)
  - Critical Cases (Exclusions / Multiple proceedings)
  - Pending Verification (Needs institutional check)
- **Priority Cases Live Table**: Interactive rows with priority indicators, threshold proximity, and direct workflow links.

### 3. Priority Review Queue (`/priority-queue`)
- Multi-tab queue: *All Cases, Critical, Threshold Reached, Approaching, Verification Required, Recently Updated*.
- Comprehensive multi-attribute filtering (Status, Priority, Court Jurisdiction, Offender Category).
- Column sorting, pagination, and instant case opening.

### 4. Undertrial Case Profile (`/undertrials/:id`)
- Deep multi-tab dossier: *Overview, Case Details, Detention, Section 479, Documents, Review History, Audit Trail*.
- Large Section 479 screening status indicator, excess detention meter, and visual progress bar.
- Individual condition cards explaining exactly why conditions passed or failed.
- Action triggers: *Start Review, Request Verification, Generate Review Document, View Audit Trail*.

### 5. Section 479 Compliance Monitor (`/monitor`)
- Visual compliance pipeline: *Already Reached, Approaching < 30 days, Approaching 30-90 days, Below Threshold, Excluded*.
- Chronological upcoming thresholds forecast table updating dynamically with detention duration.

### 6. Eligibility Calculator (`/calculator`)
- Interactive two-column decision-support tool.
- Rapid demo scenario presets (*Rahul Sharma, First-time 1/3, Capital Exclusion, Standard 1/2*).
- Real integration: Click **"Add to Review Queue"** to ingest calculated cases directly into the active priority queue.

### 7. Review Workflow (`/review-workflow` & `/review-workflow/:id`)
- Complete 5-step administrative stepper:
  1. **Case Screening**: Automated detention calculation and condition checks.
  2. **Verification Checklist**: Officer toggles for identity, custody history, remand sheets, multiple proceedings, and offence classification.
  3. **Officer Review**: Persistent notes textarea and evidence file uploads.
  4. **Document Preparation**: Section 479 Review Note generation.
  5. **Review Completed**: Formal administrative disposition (*Reviewed & Transmitted, Verification Hold, Court Referral*).

### 8. Official Document Preview & Generation Modal
- Formal Government of NCT of Delhi / Central Jail header with unique reference numbers.
- Detailed calculation tables, verification matrix, superintendent observations, and signature blocks.
- Real **Print** (`window.print()`) and **Download Dossier** capabilities.

### 9. Case Intelligence (`/case-intelligence`)
- Chronological custody timeline from admission to Section 479 milestone.
- Section 479(2) multiple pending trial cross-jurisdiction risk analysis.

### 10. Alerts (`/alerts`)
- Categorized feeds (*Critical, Threshold Reached, Approaching, Verification, System*).
- Mark as read, dismiss, and direct case navigation.

### 11. Reports & Analytics (`/analytics`)
- Status distribution, monthly screening vs. review trends, and threshold category breakdown.
- Export to CSV and print report.

### 12. System Audit Trail (`/audit-trail`)
- Immutable chronological log recording every case access, screening, verification, and document generation event.

### 13. Settings & Access Control (`/settings`, `/access-control`)
- Configurable statutory warning windows and facility parameters.
- Role-based access switcher (*Superintendent, Review Officer, Administrator, DLSA Liaison*).

---

## 🛠️ Tech Stack
- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Architecture**: Centralized reactive React Context (`RihaeeContext.tsx`)

---

## 🏃 Running the Application
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
