# The Nutty Pelican

Buildless static website for GitHub Pages. `index.html`, `styles.css`, and `site.js` are the source; photos and original logo are in `assets/`. No dependencies or build step.

Preview: `python3 -m http.server 8000` from this directory.

## Content maintenance

Update upcoming event dates and locations in `index.html` before publication. The business confirmed the holiday schedule for 2026 on November 18, 2026. Remove or replace events after they pass. The direct Square booking URL was verified to show Novotny Concessions LLC and The Nutty Pelican Corporate Event. Social handles are preserved as text pending verified profile URLs. The original logo is preserved. Real customer-provided product and stand photos appear alongside an AI-enhanced pouch hero and illustrative AI food scenes. Generated images are temporary and can be replaced individually. A brief disclosure appears in the footer.

## Domain setup

`CNAME` retains thenuttypelican.com. In GitHub Settings → Pages, verify the custom domain and DNS checks, then enforce HTTPS after GitHub provisions a valid certificate. Check both apex and www. Source changes alone cannot repair DNS or the live TLS certificate.

## Photo policy

Keep the original logo artwork and accurate labels, packaging, product color, and texture. Light photo cleanup is appropriate. Never use AI to invent an offered variety or change the contents of a bag.

## Replace temporary imagery

- `assets/hero-buffalo-ranch.jpg`: AI-enhanced scene based on supplied popcorn pouches, with Buffalo Ranch wording requested by the business.
- `assets/popcorn-ai.jpg`: illustrative cheddar close-up.
- `assets/nuts-reference-ai.jpg`: illustrative nuts based on supplied texture references.
- `assets/holiday-popcorn-vibrant.jpg`: seasonal category and holiday flavor card image.

Replace the corresponding image files or update their `src` in `index.html`. Keep image dimensions and alternative text accurate. Original uploaded product photos are separate files and unchanged.

## Flavor photo background cleanup

The flavor photo strip uses `flavor-pouches-enhanced.jpg`, `flavor-stand-enhanced.jpg`, and `flavor-display-enhanced.jpg`. These are AI-enhanced versions of the supplied originals, with warm blurred backgrounds and corrected lighting. Originals remain in the assets folder. The rightmost image removes the canopy crossbars, reversed tent lettering, and outdoor clutter. Keep originals when replacing these temporary images.

## Current flavor lineup

Confirmed by the business on November 18, 2026: Cheddar, White Cheddar, Dill Pickle, Caramel Corn, Buffalo Ranch, Salt & Vinegar, Churro Crunch. Seasonal: Holiday Birthday Cake and Caramel Apple. The image-label notice was removed at the owner’s request.

The nut section now uses `assets/nut-warmer-enhanced.jpg`, edited from the actual cabinet photo to replace the tent background and improve lighting. The original remains `assets/real-nut-pouches.jpg`.

## Photo flavor cards and gifts

Nine flavor cards use decorative popcorn images with a warm beige fade. Current flavors include Churro Crunch. The Caramel Apple card shows caramel-brown and green apple-colored popcorn as specified. Holiday Birthday Cake uses a more vibrant pink/red and green image. The gift section uses the supplied `holiday-gift-tote.jpg` without changing its artwork. The Knife’s Edge reference was removed from the family story.

## Security and accessibility

See `SECURITY-ACCESSIBILITY.md` for the review, validations and remaining limitations. Square booking now opens directly on Square, without embedding third-party scripts. The local source has a restrictive Content Security Policy. The live certificate was repaired with owner approval on November 18, 2026. GitHub Pages reports DNS check successful and Enforce HTTPS enabled. HTTPS validation and HTTP/www redirects were independently verified.
