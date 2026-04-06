# Bipolar Factory — Hiring Portal

A gamified, multi-step hiring application built with Next.js 14 (App Router), Tailwind CSS, deployed on Vercel. No database required. Submissions go to Google Sheets via a Google Apps Script webhook.

---

## Folder Structure

```
bipolar-factory/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Entry point
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── HiringFlow.tsx      # Main orchestrator (state + routing)
│   ├── SuccessScreen.tsx   # Post-submit screen
│   ├── steps/
│   │   ├── Step1CandidateDetails.tsx
│   │   ├── Step2Personality.tsx
│   │   ├── Step3Memory.tsx
│   │   ├── Step4Department.tsx
│   │   └── Step5Final.tsx
│   └── ui/
│       └── ProgressBar.tsx
├── utils/
│   ├── types.ts                # All TypeScript types + initial state
│   ├── personalityQuestions.ts # 14 MCQ questions across 7 categories
│   ├── departmentQuestions.ts  # Dept-specific questions (11 departments)
│   └── submit.ts               # Cloudinary upload + GAS webhook call
├── google-apps-script/
│   └── webhook.gs          # Paste this into Google Apps Script
├── .env.local.example
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Tech Stack

| Concern | Solution |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Database | None |
| File storage | Cloudinary (free tier) |
| Data collection | Google Sheets via Apps Script |
| Animations | CSS keyframes |

---

## Setup Instructions

### 1. Clone and install

```bash
git clone <your-repo>
cd bipolar-factory
npm install
```

### 2. Set up Cloudinary (for resume uploads)

1. Sign up at [cloudinary.com](https://cloudinary.com) (free)
2. Go to **Settings → Upload → Upload presets**
3. Create a new **Unsigned** upload preset
4. Note your **Cloud Name** and **Upload Preset name**

### 3. Set up Google Apps Script webhook

1. Open [script.google.com](https://script.google.com)
2. Click **New Project**
3. Delete the default code
4. Paste the contents of `google-apps-script/webhook.gs`
5. Click **Deploy → New deployment**
6. Select type: **Web app**
7. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** → authorize → copy the **Web app URL**

### 4. Configure environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_GAS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### 5. Run locally

```bash
npm run dev
# Open http://localhost:3000
```

---

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo in the Vercel dashboard.

**Add environment variables in Vercel:**
- Go to your project → Settings → Environment Variables
- Add the three variables from your `.env.local`

---

## Google Sheets Structure

Each submission creates one row with these columns:

| Column | Data |
|---|---|
| Timestamp | ISO 8601 |
| Name | Full name |
| Email | Email address |
| Phone | Phone number |
| Department | Selected department |
| P: Awareness | Score 0–8 |
| P: Accountability | Score 0–8 |
| P: Proactivity | Score 0–8 |
| P: Ethics | Score 0–8 |
| P: Communication | Score 0–8 |
| P: Agility | Score 0–8 |
| P: Integrity | Score 0–8 |
| P: Total Score | Max 56 |
| Memory Time (s) | Seconds taken |
| Memory Moves | Number of moves |
| Memory Score | 0–100 computed |
| Department Answers | Pipe-separated answers |
| Why Bipolar Factory | Free text |
| Company Understanding | Free text |
| Resume URL | Cloudinary URL |
| Notice Period | Dropdown value |
| Current CTC | Text |
| Expected CTC | Text |
| Status | "New" (HR fills this) |

The script auto-creates the sheet and headers on first submission. Old rows are never overwritten.

---

## App Flow

```
Step 1: Candidate Details    → Name, Email, Phone, Department
Step 2: Personality (14 Qs) → 7 categories × 2 questions, scored MCQs
Step 3: Memory Game          → Card matching, tracks time + moves → score
Step 4: Dept Questions       → 2–3 questions specific to chosen department
Step 5: Final Submission     → Motivation, resume upload, CTC, notice period
                             → POST to Google Sheets
```

---

## Customisation

**Add/edit personality questions** → `utils/personalityQuestions.ts`

**Add/edit department questions** → `utils/departmentQuestions.ts`

**Change card count in memory game** → `Step3Memory.tsx` → `CARD_COUNT`

**Change brand colors** → `tailwind.config.js` and `app/globals.css`

---

## Notes

- Resume files are uploaded to Cloudinary before form submission. Only the URL is stored.
- The GAS webhook uses `mode: 'no-cors'`, which is required for cross-origin POST to Apps Script. This means the client cannot read the response body, but data is delivered correctly.
- All state is managed in a single `AppState` object in `HiringFlow.tsx` — no external state library needed.
- The app works fully on mobile.
