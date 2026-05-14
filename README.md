# Moto Paradise — Website

Production-ready local business website for Moto Paradise, a specialized motorcycle mechanic shop in Monterrey, N.L.

## Tech Stack

- **React 19** + **TypeScript** (Vite)
- **Tailwind CSS v3**
- **Framer Motion** — scroll-based animations
- **Lucide React** — icons
- **@calcom/embed-react** — appointment booking
- **Web3Forms** — contact form (no backend needed)

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Deployment

### Vercel (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo — Vercel auto-detects Vite
4. Deploy — free SSL included automatically

### Netlify
1. Push to GitHub → connect on [netlify.com](https://netlify.com)
2. Build command: `npm run build` / Publish directory: `dist`

---

## Placeholder Replacement Guide

| Placeholder | File | Replace with |
|---|---|---|
| `info@motoparadise.mx` | Multiple | Real business email |
| `YOUR_WEB3FORMS_ACCESS_KEY` | `Contact.tsx` | Your Web3Forms key |
| `https://motoparadise.mx` | `index.html`, `sitemap.xml` | Real domain |
| Google Maps embed `src` | `Location.tsx` | Real embed URL from Google Maps |
| `https://www.google.com/maps/place/Moto+Paradise` | `Reviews.tsx` | Real Google Business Profile URL |
| `reviewCount: "87"` | `index.html` (JSON-LD) | Real review count |

### Updating Hours
Edit the `HOURS` array in `src/components/Location.tsx`.

### Adding Real Photos
Replace the Unsplash URLs in `Hero.tsx` and `About.tsx` with your own hosted images.

---

## Contact Form Setup (Web3Forms — free)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email → receive your Access Key
3. In `src/components/Contact.tsx`, replace:
   ```
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'
   ```
4. Form submissions arrive directly in your inbox — no server needed.

---

## Cal.com Booking

The Reservations section uses Cal.com for `cal.com/bob-ftnxbw`.

To change the calendar: update `calLink: 'bob-ftnxbw'` in `src/components/Reservations.tsx`.

---

## Google Reviews

Static review cards are in `src/components/Reviews.tsx` (`STATIC_REVIEWS` array). Replace with real reviews or swap in an Elfsight widget:

```html
<div class="elfsight-app-YOUR_WIDGET_ID"></div>
<script src="https://static.elfsight.com/platform/platform.js"></script>
```

---

## SEO Checklist

- [ ] Replace canonical URL in `index.html`
- [ ] Update `og:image` with a real hosted photo
- [ ] Update `reviewCount` in JSON-LD schema
- [ ] Submit `public/sitemap.xml` to Google Search Console
- [ ] Add real Google Maps embed URL in `Location.tsx`
