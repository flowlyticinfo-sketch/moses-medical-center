# Moses Medical Center Landing Page — Content & Structure Design

**Date:** 2026-05-11  
**Project:** Moses Medical Center (Dental Clinic)  
**Scope:** Apply dental clinic content to existing light design system  

---

## Overview

This design specification maps Moses Medical Center's dental clinic content into the existing light-themed landing page structure. The goal is to create a professional, conversion-focused landing page that communicates services, builds trust, and drives appointment bookings.

**Design Aesthetic:** Light theme, clean typography, green/teal accent colors (from current Flowlytic design system)

---

## Content Architecture

### 1. Navigation Bar
**Component:** `Nav`  
**Content:**
- Logo: Moses Medical Center logo + name ("מוזס מדיקל סנטר")
- Navigation items (RTL):
  - שיפולים (Services)
  - קביעת חור (Book Appointment) — primary CTA
  - שאלות נפוצות (FAQ)
  - צור קשר (Contact)
- Language toggle (EN/HE)
- Phone button: 04-680-6000

**Design Notes:**
- Sticky header with light background
- Right-aligned (RTL)
- Phone number prominently displayed
- "Book Appointment" as primary CTA button

---

### 2. Hero Section
**Component:** `Hero`  
**Primary Message:**
- Headline: "כל טיפולי השיניים שלך בקלות" (All your dental treatments with ease)
- Subheading: Context about professional dental care, experience since 2003

**Visual Elements:**
- Illustrated tooth/crown graphic (left side, light design)
- Key statistics (3 stats in prominent display):
  - +22 שנות ניסיון (22 years of experience)
  - +12,400 שתלות מוצלחות (12,400+ successful implants)
  - 4 קופות חירום בעיר (4 emergency clinics in city)

**CTAs:**
- Primary: "קביעת חור לצעד הבא" (Book Appointment) — green button
- Secondary: Phone link: 04-640-5020

**Design Notes:**
- Large serif headline (Georgia style from current system)
- Light background with subtle dividers
- Right-aligned text (RTL)
- Smooth scroll reveal animations on stats

---

### 3. Services Section
**Component:** `Services`  
**Structure:** 8-card grid (2x4 layout on desktop, responsive on mobile)  
**Section Title:** "שמונה תחומים, מכבית אחת, שמכיר אתכם" (Eight specialties, one clinic, that knows you)

**Service Cards (with icons):**

| Icon | Service (HE) | Service (EN) | Description |
|------|-------------|-------------|-------------|
| 1️⃣ | השתלות שיניים | Dental Implants | עיצוב חיוך חדש עם טכנולוגיה מתקדמת... |
| 2️⃣ | אסתטיקה דנטלית | Aesthetic Dentistry | טיפולים אסתטיים לחיוך יפה... |
| 3️⃣ | טיפולי שורש | Root Canals | שמירה על השן בטיפול דחוף... |
| 4️⃣ | הלבנת שיניים | Teeth Whitening | שיניים לבנות בטוחות וקבועות... |
| 5️⃣ | טיפול דחוף | Emergency Care | זמינות 24/7 בשעות חירום... |
| 6️⃣ | טיפול לילדים | Pediatric Care | תאים מעוצבים וצוות מיומן... |
| 7️⃣ | עיצוב חיוך | Smile Design | ייעוץ מקצועי וותוק ממוקד... |
| 8️⃣ | ניקוי ומניעה | Prevention | בדיקה שנתית מלאה וניקוי... |

**Design Notes:**
- Numbered cards (01–08)
- Icon above title (outline style, consistent with current design)
- Card hover effect: slight lift, shadow increase
- Badge label at top: "שירותים" or "8 specialties"
- "Book Appointment" link on each card

---

### 4. Features Section
**Component:** `Features`  
**Purpose:** Build credibility and trust  
**Content:** Clinic credentials and promises

**Features to Highlight:**
- ✓ 22+ years of professional experience
- ✓ 12,400+ successful dental procedures
- ✓ 4 fully equipped emergency clinics
- ✓ Same-day emergency appointments available
- ✓ Experienced, certified dental team
- ✓ Latest technology and techniques
- ✓ Patient-focused approach
- ✓ Transparent pricing

**Design Notes:**
- Two-column layout or feature rows
- Icons + statement format
- Emphasize experience, trust, accessibility

---

### 5. Products Section (Booking System)
**Component:** `Products`  
**Purpose:** Appointment booking and treatment selection  
**Content:**

**Section Header:**
- Title: "קביעת חור במוזס בקלילות" (Book an appointment at Moses easily)
- Subheading: Explain the booking process (select treatment, choose date/time, confirm)

**Booking Interface:**
1. **Treatment Filter Buttons** (toggle/pills):
   - השתלות שיניים (Implants)
   - אסתטיקה דנטלית (Cosmetic)
   - טיפולי שורש (Root Canal)
   - הלבנת שיניים (Whitening)
   - טיפול דחוף (Emergency)
   - וכו'

2. **Calendar Component:**
   - Month/year selector
   - Visual calendar showing available dates
   - Display available time slots below

3. **Form Fields:**
   - Name (שם מלא)
   - Phone (טלפון)
   - Email (דוא"ל)
   - Treatment type (already pre-selected)
   - Preferred date/time (from calendar)
   - Special notes/preferences (optional)

4. **Confirm Button:**
   - "קביעת חור" (Book Appointment) — primary green button
   - Alternative: Send via WhatsApp/SMS

**Design Notes:**
- Clean, step-by-step UI
- Calendar should show real availability (integrate with backend later)
- Mobile-friendly responsive design
- Form has clear visual hierarchy

---

### 6. FAQ Section
**Component:** `Features` or custom component  
**Purpose:** Address common patient questions  
**Common Questions:**

- **כמה זמן חוקי הטיפול?** (How long does treatment take?)
- **מה הוא עלות השתלות שיניים?** (What is the cost of implants?)
- **האם יש אפשרות לתשלום בתשלומים?** (Is installment payment available?)
- **מה הוא הטיפול בחירום?** (What is emergency treatment?)
- **כמה ימים לאחר הטיפול לחזור לעבודה?** (How many days to return to work after treatment?)
- **האם קופת חולים מכסה טיפולים?** (Does health insurance cover treatments?)

**Design Notes:**
- Accordion/expandable format
- Each question has a brief answer
- Link to contact for detailed info

---

### 7. Emergency Alert Banner
**Component:** Custom banner (above footer)  
**Content:**
- Alert icon
- "מצוקות דחוף — התקשרו עכשיו!" (Emergency - Call now!)
- Phone number: 04-680-6000
- Message about 24/7 availability

**Design Notes:**
- Subtle red/orange warning color (but not too aggressive)
- Call-to-action button
- Visible but not disruptive

---

### 8. Contact Section
**Component:** `Contact`  
**Content:**

**Three columns:**

**Column 1 - Clinic Info:**
- Address: היזמויות, עפולה
- Phone: 04-640-5020
- Hours: א'-ה' 09:00–17:00 (Sun-Thu)
- Friday-Saturday: Closed

**Column 2 - Quick Links:**
- קביעת חור (Book Appointment)
- שלוח הודעה (Send Message)
- צור קשר (Contact)
- שאלות נפוצות (FAQ)

**Column 3 - Map:**
- Embedded Google Map showing clinic location
- Click to get directions

**Design Notes:**
- Responsive grid layout
- Light background cards
- Links have hover effects

---

### 9. Testimonials Section
**Component:** `Testimonials` (new component or modify Features)  
**Purpose:** Build trust through real customer reviews  
**Customer Testimonials (from Easy.co.il):**
1. **Yulia A** (11/09/2023) — "Positive experience with professional treatment"
2. **Inbal P** (27/06/2022) — "Excellent service and professional team"
3. **Ohad b** (25/04/2021) — "Highly recommend the clinic and staff"
4. **Eman N** (08/09/2020) — "Great experience with dental treatment"
5. **Liya b** (16/12/2018) — "Professional and friendly service"

**Design Notes:**
- Star rating display (7.1/10 from platform)
- Customer name + date
- Short testimonial quote
- Carousel or grid layout
- Call-to-action: "Book your appointment"

---

### 10. Footer
**Component:** `Footer`  
**Content:**
- Copyright: © 2026 מוזס מדיקל סנטר
- Legal links: Privacy, Terms, Contact
- Social media (if applicable)
- "Crafted with care in Afula - Moses Medical Center"

---

## Color Palette & Typography

**From Current Design System:**
- Background: Light (#f9f7f3 or similar)
- Text Primary: Dark (#1a1a1a)
- Text Secondary/Muted: Medium gray (#686868 or #7a7a7a)
- Primary Accent: Green/Teal (from Flowlytic: #25d366 or similar)
- Secondary Accent: Blue (#0070f3 from current design)
- Border/Dividers: Light gray (#e0dbd3)

**Typography:**
- Headlines: Georgia or serif (from current system)
- Body: Geist or sans-serif (from current system)
- RTL Support: Ensure proper text direction

---

## User Flows

### 1. Appointment Booking Flow
```
Home → Services (select specialty) → Booking (calendar + form) → Confirmation
```

### 2. Information Discovery Flow
```
Home → Hero (read about clinic) → Services (explore treatments) → FAQ (answer questions) → Contact
```

### 3. Emergency Contact Flow
```
Any page → Emergency banner (call button) → Direct phone/WhatsApp
```

---

## Implementation Notes

**Component Updates Required:**
1. Update `Nav.tsx` — Add Moses Medical Center branding, phone, RTL navigation
2. Update `Hero.tsx` — Replace with dental clinic messaging, add stats
3. Update `Services.tsx` — Create 8 service cards with icons
4. Update `Features.tsx` — Add trust/credibility features
5. Update or create `Products.tsx` → Booking system with calendar
6. Create `FAQ.tsx` — Expandable FAQ section
7. Update `Contact.tsx` — Address, map, contact form
8. Update `Footer.tsx` — Legal links and branding
9. Create `EmergencyBanner.tsx` — Sticky or inline emergency alert
10. Add icons (tooth, implant, syringe, clock, smile, etc.) → `src/components/landing/icons/`
11. Update i18n translations for Hebrew content

**Data & Integration Points:**
- Calendar availability (integrate with booking backend later)
- Form submission (WhatsApp, SMS, or API endpoint)
- Google Maps API for location
- i18n system for Hebrew/English content

---

## Success Criteria

✓ All Moses Medical Center content properly integrated  
✓ Hebrew RTL layout correct throughout  
✓ Mobile responsive on all screen sizes  
✓ Appointment booking system functional (calendar visible, form submits)  
✓ All links working (phone, WhatsApp, email)  
✓ Accessibility: proper heading hierarchy, alt text for images  
✓ Performance: fast load times, smooth animations  

---

## Next Steps

1. Review and approve this design document
2. Create implementation plan (writing-plans skill)
3. Update components in order of priority
4. Test on mobile and desktop
5. Connect to backend services (calendar, CRM, etc.)
6. Deploy and monitor
