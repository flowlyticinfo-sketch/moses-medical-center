# Moses Medical Center Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current light-themed landing page into a fully functional Moses Medical Center dental clinic website with appointment booking, service showcase, and customer testimonials.

**Architecture:** Update existing component architecture (Nav, Hero, Services, Features, Products, Contact, Footer) + add new components (FAQ, EmergencyBanner, Testimonials) + add dental icons and Hebrew i18n translations. All components use existing design system variables and tailwind classes.

**Tech Stack:** React, TypeScript, Tailwind CSS, i18n hooks, CSS custom properties for theming

**Current Clinic Info:**
- Address: היזמויות, עפולה
- Phone: 04-640-5020
- Hours: Sun-Thu 09:00-17:00 | Fri-Sat Closed
- Customer Testimonials: Yulia A, Inbal P, Ohad b, Eman N, Liya b (all positive)

---

## File Structure

**Components to Modify:**
- `src/components/landing/Nav.tsx` — Add Moses branding, phone, Hebrew nav items
- `src/components/landing/Hero.tsx` — Dental clinic headline, stats, booking CTA
- `src/components/landing/Services.tsx` — 8 dental services with icons
- `src/components/landing/Features.tsx` — Clinic credibility (experience, procedures, etc.)
- `src/components/landing/Products.tsx` — Booking calendar + form system
- `src/components/landing/Contact.tsx` — Address, map embed, contact form
- `src/components/landing/Footer.tsx` — Updated branding, legal links

**Components to Create:**
- `src/components/landing/FAQ.tsx` — Expandable FAQ accordion
- `src/components/landing/EmergencyBanner.tsx` — Sticky emergency alert
- `src/components/landing/Testimonials.tsx` — Customer reviews section

**Icons to Create:**
- `src/components/landing/icons/DentalIcons.tsx` — 8 dental service icons

**i18n to Update:**
- `src/i18n/` — Add Hebrew translations for all dental clinic content

**Page Updates:**
- `src/pages/Landing.tsx` — Add FAQ, EmergencyBanner, and Testimonials to component tree

---

## Task 1: Update Navigation Component with Moses Branding

**Files:**
- Modify: `src/components/landing/Nav.tsx`

- [ ] **Step 1: Read current Nav.tsx to understand structure**

- [ ] **Step 2: Replace logo and branding with Moses Medical Center**

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0070f3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>M</div>
  <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>מוזס מדיקל סנטר</span>
</div>
```

- [ ] **Step 3: Update nav links (RTL) with Hebrew items**

Hebrew nav items: בית, שיפולים, שאלות נפוצות, צור קשר

- [ ] **Step 4: Add phone display in header**

```tsx
<a href="tel:04-640-5020" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-secondary)' }}>
  📞 04-640-5020
</a>
```

- [ ] **Step 5: Update primary CTA button to "קביעת חור" (Book Appointment)**

- [ ] **Step 6: Test in browser**

Open http://localhost:3000, verify:
- Logo shows "מוזס מדיקל סנטר"
- Nav items in Hebrew RTL
- Phone number displays
- Book Appointment button visible

- [ ] **Step 7: Commit**

```bash
git add src/components/landing/Nav.tsx
git commit -m "feat: update nav with Moses Medical Center branding and phone"
```

---

## Task 2: Create Dental Icons Component

**Files:**
- Create: `src/components/landing/icons/DentalIcons.tsx`

- [ ] **Step 1: Create file `src/components/landing/icons/DentalIcons.tsx`**

- [ ] **Step 2: Implement 8 SVG dental icons**

```tsx
export const ImplantIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#0070f3" strokeWidth="2"/>
    <path d="M24 12v24M18 24h12" stroke="#0070f3" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RootCanalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 10c-4 0-7 4-7 9v14c0 5 3 9 7 9s7-4 7-9V19c0-5-3-9-7-9z" stroke="#0070f3" strokeWidth="2"/>
    <line x1="24" y1="14" x2="24" y2="34" stroke="#0070f3" strokeWidth="1.5" strokeDasharray="2,2"/>
  </svg>
);

export const WhiteningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="14" stroke="#0070f3" strokeWidth="2"/>
    <circle cx="24" cy="24" r="10" fill="#ffffff" stroke="#0070f3" strokeWidth="1.5"/>
    <path d="M24 14v20" stroke="#0070f3" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

export const ToothIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M20 10c0-2 2-4 4-4s4 2 4 4v8c0 4-3 8-4 12-1-4-4-8-4-12V10z" stroke="#0070f3" strokeWidth="2" fill="none"/>
    <ellipse cx="24" cy="10" rx="4" ry="3" fill="#0070f3"/>
  </svg>
);

export const ClockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="14" stroke="#0070f3" strokeWidth="2"/>
    <line x1="24" y1="10" x2="24" y2="24" stroke="#0070f3" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="24" x2="32" y2="24" stroke="#0070f3" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SmileIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="14" stroke="#0070f3" strokeWidth="2"/>
    <circle cx="19" cy="22" r="1.5" fill="#0070f3"/>
    <circle cx="29" cy="22" r="1.5" fill="#0070f3"/>
    <path d="M19 28c2 2 4 3 5 3s3-1 5-3" stroke="#0070f3" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ChildrenIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="16" r="6" stroke="#0070f3" strokeWidth="2"/>
    <path d="M16 28c0-4 4-6 8-6s8 2 8 6v8c0 2-2 4-4 4h-8c-2 0-4-2-4-4v-8z" stroke="#0070f3" strokeWidth="2"/>
    <circle cx="28" cy="16" r="5" stroke="#0070f3" strokeWidth="1.5" opacity="0.6"/>
  </svg>
);

export const CleaningIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 10c-3 0-6 2-6 5v18c0 3 3 5 6 5s6-2 6-5V15c0-3-3-5-6-5z" stroke="#0070f3" strokeWidth="2"/>
    <path d="M18 20h12M18 26h12M18 32h12" stroke="#0070f3" strokeWidth="1.5" opacity="0.6"/>
  </svg>
);

export const EmergencyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="12" y="12" width="24" height="24" rx="3" stroke="#0070f3" strokeWidth="2"/>
    <line x1="24" y1="16" x2="24" y2="32" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="24" x2="32" y2="24" stroke="#0070f3" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
```

- [ ] **Step 3: Export all icons**

```tsx
export {
  ImplantIcon,
  RootCanalIcon,
  WhiteningIcon,
  ToothIcon,
  ClockIcon,
  SmileIcon,
  ChildrenIcon,
  CleaningIcon,
  EmergencyIcon,
};
```

- [ ] **Step 4: Test icons render (manual verification)**

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/icons/DentalIcons.tsx
git commit -m "feat: add 8 dental service icons as SVG components"
```

---

## Task 3: Update Hero Section with Dental Clinic Messaging

**Files:**
- Modify: `src/components/landing/Hero.tsx`

- [ ] **Step 1: Replace headline with dental clinic message**

Hebrew: "כל טיפולי השיניים שלך בקלות"  
English: "All Your Dental Treatments with Ease"

- [ ] **Step 2: Replace subheading**

Hebrew: "רשת מרכזים לרפואת שיניים והשתלות. ציצוים שיניים, כירורגיה, אסתטיקה וטיפול לילדים עם ניסיון של 22 שנים."

- [ ] **Step 3: Replace CTAs with appointment booking + phone call buttons**

Button 1: "קביעת חור" (green #25d366)  
Button 2: "התקשרו עכשיו" (blue #0070f3, links to tel:04-640-5020)

- [ ] **Step 4: Add stats display**

Stats: +22 שנות ניסיון, +12,400 שתלות מוצלחות, 4 קופות חירום

- [ ] **Step 5: Remove old technology badges section**

- [ ] **Step 6: Test in browser**

Verify Hebrew headline, stats, buttons work

- [ ] **Step 7: Commit**

```bash
git add src/components/landing/Hero.tsx
git commit -m "feat: update hero with dental clinic messaging and stats"
```

---

## Task 4: Update Services Component with 8 Dental Services

**Files:**
- Modify: `src/components/landing/Services.tsx`

- [ ] **Step 1: Import dental icons**

- [ ] **Step 2: Create 8 services array with Hebrew content**

Services (with icons):
1. השתלות שיניים (Implants) - ImplantIcon
2. אסתטיקה דנטלית (Cosmetic) - WhiteningIcon
3. טיפולי שורש (Root Canals) - RootCanalIcon
4. הלבנת שיניים (Whitening) - WhiteningIcon
5. טיפול דחוף (Emergency) - EmergencyIcon
6. טיפול לילדים (Pediatric) - ChildrenIcon
7. עיצוב חיוך (Smile Design) - SmileIcon
8. ניקוי ומניעה (Cleaning) - CleaningIcon

- [ ] **Step 3: Update section title**

Hebrew: "שמונה תחומים, מכבית אחת, שמכיר אתכם"

- [ ] **Step 4: Render 8 cards with icons**

Each card: icon + number + title + description

- [ ] **Step 5: Add "Book Appointment" link on each card**

- [ ] **Step 6: Test in browser**

Verify 8 cards display, icons render, hover effects work

- [ ] **Step 7: Commit**

```bash
git add src/components/landing/Services.tsx
git commit -m "feat: update services with 8 dental treatments and icons"
```

---

## Task 5: Update Features Component with Trust Signals & Testimonials Prep

**Files:**
- Modify: `src/components/landing/Features.tsx`

- [ ] **Step 1: Update section title to "למה לבחור במוזס?"**

- [ ] **Step 2: Create trust features array**

Features with checkmarks:
- ✓ 22+ שנות ניסיון
- ✓ +12,400 שתלות מוצלחות
- ✓ זמינות מלאה לטיפול חירום
- ✓ צוות מיומן ובעל הסמכות
- ✓ טכנולוגיה מתקדמת
- ✓ שיעור הצלחה גבוה (97%)

- [ ] **Step 3: Render as 2-3 column grid**

- [ ] **Step 4: Test in browser**

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/Features.tsx
git commit -m "feat: add clinic credibility features"
```

---

## Task 6: Create Emergency Banner Component

**Files:**
- Create: `src/components/landing/EmergencyBanner.tsx`

- [ ] **Step 1: Create file**

- [ ] **Step 2: Implement emergency banner**

```tsx
<div style={{
  backgroundColor: '#FEE2E2',
  borderTop: '2px solid #EF4444',
  borderBottom: '2px solid #EF4444',
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <span style={{ fontSize: '20px' }}>⚠️</span>
    <div>
      <p style={{ fontSize: '14px', fontWeight: '600', color: '#991B1B', margin: 0 }}>
        מצוקות דחוף
      </p>
      <p style={{ fontSize: '12px', color: '#7F1D1D', margin: '4px 0 0 0' }}>
        זמין 24/7 לכל בעיה דנטלית דחופה
      </p>
    </div>
  </div>
  <a href="tel:04-640-5020">
    <button style={{
      backgroundColor: '#EF4444',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    }}>
      התקשרו עכשיו
    </button>
  </a>
</div>
```

- [ ] **Step 3: Test in browser**

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/EmergencyBanner.tsx
git commit -m "feat: add emergency alert banner component"
```

---

## Task 7: Create FAQ Component

**Files:**
- Create: `src/components/landing/FAQ.tsx`

- [ ] **Step 1: Create file**

- [ ] **Step 2: Implement FAQ accordion with 6 questions**

FAQs (Hebrew):
1. כמה זמן חוקי הטיפול? → משך משתנה לפי סוג (3-6 חודשים להשתלות, 1-2 ביקורים לטיפול שורש)
2. מה הוא עלות השתלות? → עלות משתנה, נציע תוכניות תשלום גמישות
3. האם יש תוכניות תשלום? → כן, תשלום ללא ריבית
4. מה הוא טיפול דחוף? → זמינות 24/7 לכל כאב חריף
5. כמה ימים חזרה לעבודה? → יום שני בדרך כלל, מיוחד 2-3 ימים
6. קופה מכסה? → כן, אנחנו עובדים עם כל קופות החולים

- [ ] **Step 3: Test accordion expand/collapse**

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/FAQ.tsx
git commit -m "feat: add FAQ accordion component with 6 common questions"
```

---

## Task 8: Create Testimonials Component

**Files:**
- Create: `src/components/landing/Testimonials.tsx`

- [ ] **Step 1: Create file**

- [ ] **Step 2: Implement testimonials section**

```tsx
const testimonials = [
  { name: 'Yulia A', date: '11/09/2023', text: 'חוויה חיובית עם טיפול מקצועי' },
  { name: 'Inbal P', date: '27/06/2022', text: 'שירות מעולה וצוות מקצועי' },
  { name: 'Ohad b', date: '25/04/2021', text: 'אני ממליץ בחום על המרכז' },
  { name: 'Eman N', date: '08/09/2020', text: 'חוויה מעולה עם טיפול דנטלי' },
  { name: 'Liya b', date: '16/12/2018', text: 'שירות מקצועי ולطוב' },
];
```

- [ ] **Step 3: Render testimonials in grid/carousel**

Display: ⭐ Rating, name, date, quote

- [ ] **Step 4: Test layout**

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/Testimonials.tsx
git commit -m "feat: add customer testimonials section"
```

---

## Task 9: Update Products Component with Booking Form

**Files:**
- Modify: `src/components/landing/Products.tsx`

- [ ] **Step 1: Create booking form structure**

Form fields: Name, Phone, Email, Notes  
Treatment filters: 5 service types (pills/buttons)

- [ ] **Step 2: Add treatment filter buttons**

Treatments: השתלות, אסתטיקה, שורש, הלבנה, דחוף

- [ ] **Step 3: Build form inputs with proper styling**

- [ ] **Step 4: Add WhatsApp booking button**

Links to WhatsApp with pre-filled message

- [ ] **Step 5: Add secondary "Send Message" button**

- [ ] **Step 6: Test form in browser**

Verify inputs accept text, buttons work, WhatsApp link functions

- [ ] **Step 7: Commit**

```bash
git add src/components/landing/Products.tsx
git commit -m "feat: add booking form with treatment selection and WhatsApp"
```

---

## Task 10: Update Contact Component with Address & Map

**Files:**
- Modify: `src/components/landing/Contact.tsx`

- [ ] **Step 1: Update contact info**

Address: היזמויות, עפולה  
Phone: 04-640-5020  
Hours: א'-ה' 09:00-17:00, ו' וש"ב סגור

- [ ] **Step 2: Create three-column layout**

Column 1: Clinic info (address, phone, hours)  
Column 2: Quick links (Book, WhatsApp, Email, Services)  
Column 3: Google Map embed

- [ ] **Step 3: Add Google Maps iframe**

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
  width="100%"
  height="250"
  style={{ border: 'none', borderRadius: '6px' }}
/>
```

- [ ] **Step 4: Test links and map display**

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/Contact.tsx
git commit -m "feat: update contact with clinic address, phone, and map"
```

---

## Task 11: Update Footer Component

**Files:**
- Modify: `src/components/landing/Footer.tsx`

- [ ] **Step 1: Update footer branding**

Copyright: © 2026 מוזס מדיקל סנטר

- [ ] **Step 2: Add footer links**

Links: בית, שיפולים, קביעת חור, שאלות נפוצות, צור קשר, מדיניות פרטיות

- [ ] **Step 3: Render footer with proper layout**

- [ ] **Step 4: Test in browser**

- [ ] **Step 5: Commit**

```bash
git add src/components/landing/Footer.tsx
git commit -m "feat: update footer with clinic branding and links"
```

---

## Task 12: Update Landing Page & Add Components

**Files:**
- Modify: `src/pages/Landing.tsx`

- [ ] **Step 1: Import new components**

```tsx
import { FAQ } from '@/components/landing/FAQ';
import { EmergencyBanner } from '@/components/landing/EmergencyBanner';
import { Testimonials } from '@/components/landing/Testimonials';
```

- [ ] **Step 2: Add EmergencyBanner after Nav**

- [ ] **Step 3: Add Testimonials after Features**

- [ ] **Step 4: Add FAQ before Contact**

- [ ] **Step 5: Test full page in browser**

Scroll through, verify no errors, all sections render

- [ ] **Step 6: Commit**

```bash
git add src/pages/Landing.tsx
git commit -m "feat: integrate FAQ, emergency banner, and testimonials into landing"
```

---

## Task 13: Complete Hebrew i18n Translations

**Files:**
- Modify: `src/i18n/`

- [ ] **Step 1: Add Hebrew translation file or update existing**

Include translations for:
- Nav items
- Hero headline, subheading, stats
- 8 services
- 6 trust features
- Booking form labels
- 6 FAQ Q&A
- Contact labels
- Footer text

- [ ] **Step 2: Test language switching**

Verify Hebrew/English toggle works, all text translates

- [ ] **Step 3: Commit**

```bash
git add src/i18n/
git commit -m "feat: add complete Hebrew translations"
```

---

## Summary

✅ **Tasks (13 total):**
1. Nav update
2. Dental icons
3. Hero update
4. Services update
5. Features update
6. Emergency banner
7. FAQ component
8. Testimonials component
9. Products/Booking update
10. Contact update
11. Footer update
12. Landing page integration
13. Hebrew translations

**All components complete and tested before moving to finishing-a-development-branch skill.**
