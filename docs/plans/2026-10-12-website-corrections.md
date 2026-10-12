# Website Corrections & Enhancement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the Ahuja Career Institute website with required text corrections, brand updates, form conditional logic, uncropped gallery lightbox, chapter-wise curriculum breakdown, working syllabus download, new faculty cards, center exterior imagery, and student showcase corrections.

**Architecture:** Next.js 15 App Router with TypeScript and Tailwind CSS. Centralized mock data in `src/data/mockData.ts` is updated and consumed across views (`HomePage`, `AboutPage`, `CoursesPage`, `GalleryPage`, `ContactPage`) and components (`InquireModal`, `SyllabusModal`, `StudentShowcase`, `Footer`).

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React icons.

---

### Task 1: Centralized Mock Data & Global Text Corrections

**Files:**
- Modify: `src/data/mockData.ts`
- Modify: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/about/page.tsx`

**Step 1: Update brand tagline & founder naming**
- Update `brandTagline.hindi` from `'कलम से कामयाबी, तब हैं'` to `'कलम से कामयाबी, तय है'`.
- Update all occurrences of `Est. 1998` / `Est 1998` / `EST. 1998` to `Since 1998`.
- Rename `Late Rajkumar Ahuja Sir` / `Rajkumar Ahuja Sir` to `Late Shri R.A. Ahuja Sir` across `mockData.ts`, `Footer.tsx`, `layout.tsx`, and `about/page.tsx`.
- Update JEE/NEET phrasing: change `JEE, and NEET` / `JEE and NEET` to `JEE/NEET`.
- Update clinic sessions phrasing: in FAQ answer line 1779, change `'scheduled weekend clinic sessions'` to `'dedicated weekend doubt-resolution sessions'`.
- Update counseling/campus timings to `'10:00 AM - 6:00 PM (Mon - Sat) [To Verify]'`.
- Update stats: `{ value: '99.38%', label: 'Top JEE Main Percentile' }` → `{ value: '99.38', label: 'Top JEE Main Percentile' }`.

**Step 2: Anonymize school names with generic descriptions**
- In `mockData.ts`, replace specific school names (`Nelson's School`, `Punit Ashram School`, `Best High School`, `Divine Buds School`, `Saint Xavier's School`, `Hebron School`, etc.) with generic terms like `'Reputed School'`, `'Leading English Medium School'`, `'Reputed Partner School'`.
- Update FAQ answer line 1783 from `'Nelson\'s School, Punit Ashram School, and feeder institutions'` to `'reputed partner schools and institutions'`.

**Step 3: Verify and run typecheck**
- Run `npm run build` to confirm data structure validity.

---

### Task 2: Enrollment & Inquiry Form Conditional Class Logic

**Files:**
- Modify: `src/components/InquireModal.tsx`
- Modify: `src/views/HomePage.tsx`
- Modify: `src/views/ContactPage.tsx`

**Step 1: Update student name placeholder**
- Change `placeholder="e.g. Saloni Vaghela"` to `placeholder="e.g. John Doe"`.

**Step 2: Implement bidirectional conditional filtering for Program & Class**
- Define class options mapped by program:
  - `11th & 12th Science (JEE/NEET)`: `Class 11th`, `Class 12th`, `Repeater / Dropper` (hide 9th–10th and 6th–8th)
  - `11th & 12th Commerce`: `Class 11th`, `Class 12th`
  - `JEE / NEET Prep`: `Class 11th`, `Class 12th`, `Repeater / Dropper`
  - `6th to 10th Foundation`: `Class 9th to 10th`, `Class 6th to 8th`
- Synchronize when either `Target Program` or `Current Class` changes, ensuring only valid options are visible and selected.
- Apply this logic uniformly across `InquireModal.tsx`, `HomePage.tsx` (quick inquiry), and `ContactPage.tsx`.

---

### Task 3: Home Page Visual & Alignment Fixes

**Files:**
- Modify: `src/views/HomePage.tsx`

**Step 1: Fix Late Shri R.A. Ahuja Sir card text & alignment**
- Update name to `Late Shri R.A. Ahuja Sir`.
- Update subtitle to `The Visionary Founder (Since 1998)`.
- Fix the vertical misalignment on the bottom bar:
  - Re-align `<Sparkles className="w-3.5 h-3.5 text-red-500 shrink-0" /> Academic Excellence · Legacy` and `1998 — Present` with baseline-aligned flexbox (`items-center justify-between leading-normal`).

**Step 2: Clean up hero badge and typography**
- Ensure motto badge displays `कलम से कामयाबी, तय है • 27+ Years Legacy (Since 1998)`.
- Update hero description to reflect `Std. 5th to 12th (Science & Commerce | English & Gujarati Medium), JEE/NEET`.
- Unclutter mobile view spacing.

---

### Task 4: Gallery Page Full-Viewport Lightbox Fix

**Files:**
- Modify: `src/views/GalleryPage.tsx`

**Step 1: Redesign lightbox modal to prevent image cropping**
- Replace the cramped card-in-modal container (`max-h-[60vh] max-w-4xl`) with a full-viewport lightbox overlay:
  - Overlay: `fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6`
  - Image element: `max-h-[78vh] sm:max-h-[82vh] max-w-[95vw] object-contain mx-auto my-auto block rounded-lg select-none`
  - Position prev/next arrows prominently with high contrast.
  - Floating top bar for category/location/close button and sleek bottom bar for title and admission CTA.

---

### Task 5: Courses Page Chapter-Wise Syllabus & Working PDF Download

**Files:**
- Modify: `src/views/CoursesPage.tsx`
- Modify: `src/components/SyllabusModal.tsx`

**Step 1: Re-architect Curriculum Breakdown to be Subject & Chapter-Wise**
- Structure curriculum data with subjects containing numbered Chapters/Modules:
  - Example Physics: `Chapter 1: Units, Measurements & Kinematics`, `Chapter 2: Laws of Motion & Work-Energy`, `Chapter 3: Thermodynamics & Kinetic Theory`, etc.
  - Display chapter badges, key focus points, and a subtle tag `(Syllabus structure to be faculty-verified)`.

**Step 2: Make "Download Full Syllabus PDF" fully functional**
- Update `handleDownload` in `SyllabusModal.tsx` and the download button in `CoursesPage.tsx`:
  - Link directly to the existing brochure PDF `/assets/pamplete/ahuja-institute-23x33.pdf` or trigger native file download (`download="Ahuja-Institute-Curriculum-2026-27.pdf"`).

---

### Task 6: Faculty Section Creation

**Files:**
- Modify: `src/data/mockData.ts`
- Modify: `src/views/AboutPage.tsx`
- Modify: `src/views/HomePage.tsx`

**Step 1: Add faculty member profiles in `mockData.ts`**
- Add cards with consistent layout for:
  1. `Saumil Sir` — Senior Science & JEE/NEET Faculty
  2. `N P Sir` — Senior Academic Mentor
  3. `Ketul Sir` — Senior Subject Specialist
  4. `Vishvesh Sir` — Senior Science Faculty
  5. `Nirav Sir` — Senior Competitive Mentor
  6. `Vishal Sir` — Junior Division H.O.D.
  7. `Bhavna Ma'am` — Commerce H.O.D.
- Include structured fields: role, department, experience, specialization, and clean fallback avatar graphics.

**Step 2: Render Faculty Section in `AboutPage.tsx` and feature on `HomePage.tsx`**
- Insert an elegant "Faculty & Academic Mentors" section with responsive grid cards matching the existing design language.

---

### Task 7: Our Centers Section Updates

**Files:**
- Modify: `src/views/ContactPage.tsx`
- Modify: `src/data/mockData.ts`

**Step 1: Replace map placeholder graphics with exterior photographs**
- Replace the grey map placeholder headers with exterior branch photos (using existing high-res campus assets with clear campus overlays and badges).

**Step 2: Update timings and mobile numbers with verification flags**
- Display `Timings: 10:00 AM - 6:00 PM (Mon - Sat) [To Verify]`.
- Keep verified contact numbers with `[To Verify]` tag.

---

### Task 8: Success Stories & Student Showcase Corrections

**Files:**
- Modify: `src/data/mockData.ts`
- Modify: `src/components/StudentShowcase.tsx`

**Step 1: Student data & spelling updates**
- `Seema Chaudhary`: Replace entry with `Dhvani Prajapati` (using Dhvani Prajapati's photo and details).
- `Rai Aastha`: Correct name to `Astha Rai` and update image reference.
- Spelling corrections:
  - `Prathana Shah` → `Prarthana Shah`
  - `Srusti Soni` → `Shrishty Soni`
  - `Shena Mistry` → `Sneha Mistry`
  - `Tirth Jirawala` → `Tirath Jariwala`
  - `Divyaesh Rana` → `Divyesh Rana`
  - `Jahanvi Agarwal` → `Jahanvi Agrawal`
- `Maahi Gupta (8th std)`: Update marks to `English Text: 94, English GMR: 91, Science: 100, Maths: 96, Social Science: 99`.
- `Dhruva Patel (10th std)`: Anonymize school to `'Reputed School GSEB'`.
- `Dhruti Panchal`: Update/add 10th std entry with `Science: 95, Social Science: 82, Maths: 93, English: 84`.
- Change marks label in `StudentShowcase.tsx` line 510 from `Official Subject Marks (/100)` to `Subject Marks (Out of 100)`.

**Step 2: Unclutter mobile layout in `StudentShowcase.tsx`**
- Improve mobile spacing, symmetric grid margins, and filter pill layout for clean, symmetric presentation.

---

### Task 9: Verification, Testing & Manual Input Changelog

**Step 1: Production build & type validation**
- Run `npm run build` to ensure 0 TypeScript errors and 0 build warnings.

**Step 2: Manual Input Changelog generation**
- Document exact items needing user manual input/confirmation.
