# Hannah Nyambura Karanja (Wa Ruth) Memorial

A premium, faith-centered, responsive multi-page memorial website honouring Hannah Nyambura Karanja (Wa Ruth). Each subject has its own HTML page, with shared styling and navigation.

## Dedicated pages
- `public/index.html` — memorial home and introduction
- `public/story.html` — biography and life story
- `public/memories.html` — memories, qualities, and enduring legacy
- `public/eulogy.html` — full eulogy draft, printable or savable as PDF
- `public/service.html` — funeral/burial details and order of service
- `public/gallery.html` — family photo gallery
- `public/prayers.html` — Bible verses, Christian comfort, and prayer
- `public/tributes.html` — tribute composer with copy, download, and WhatsApp sharing; messages are not automatically published
- `public/family.html` — family acknowledgements and approved contact details
- `public/editing-guide.html` — browser-friendly editing instructions
- `public/theme.css` — shared premium design system and responsive styling
- `public/memorial-tools.js` / `public/memorial-tools.css` — shareable link, QR code, print/PDF action, local remembrance candle counter, gallery search, and tribute composer styling
- `public/app.js` — tribute page interaction

## Design
Forest green, warm ivory, antique gold, elegant serif typography, Christian motifs, responsive navigation, and dedicated pages rather than a single long landing page.

## Editing and privacy
See [EDITING-GUIDE.md](EDITING-GUIDE.md). Dates, venue details, contact information, and family-history details should be confirmed and approved before publication. Do not publish personal contact details or family photographs without permission. The tribute composer prepares a message in the visitor's browser and lets them copy, download, or share it. Remembrance candle counts are stored only in that visitor's browser. The QR-code action uses an external QR image service. These are not a shared guestbook or globally synchronized candle count. A true public condolence wall, family moderation dashboard, cross-device candle count, secure photo uploads, and hosted livestream require a backend/service integration and family-approved access controls.

## Hosting
The existing Hatchable preview is https://a-loving-farewell.hatchable.site. Pushing changes to this GitHub repository does not automatically update that separate Hatchable-hosted site unless a deployment connection is configured. The repository can also be deployed as a static site from the `public` directory.


## Interactive memorial features
- Share the current memorial page with the device share sheet or copy its link.
- Open a QR code for the current page to include in printed funeral programmes.
- Print or save pages as PDF using the browser print dialog (the eulogy has its own print action).
- Light a remembrance candle; the count is local to the visitor's browser and is not a global tally.
- Search gallery captions and prepare a tribute for copying, downloading, or sharing with family through WhatsApp.
- The farewell page includes a livestream information area, intentionally awaiting a family-confirmed link and schedule.

**Important platform limitation:** GitHub Pages is static hosting. Tribute submissions do not appear to other visitors automatically, uploaded photos must still be added to `public/images/` in the repository, and no livestream URL is fabricated. To enable a true shared moderated guestbook, online photo uploads, and globally synchronized candles, connect a backend and configure it securely before advertising those capabilities.
