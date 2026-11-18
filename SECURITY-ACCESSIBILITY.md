# Security and accessibility review

Reviewed November 18, 2026. This review covers the redesigned website source. Certificate repair was verified on the live domain; GitHub Pages deployment status determines when source changes become live.

## Certificate: repaired and HTTPS enforced

With the owner's explicit approval, the custom domain was removed and immediately re-added in GitHub Pages on November 18, 2026. GitHub reports DNS check successful and Enforce HTTPS is checked. Independent verified HTTPS requests succeeded for both thenuttypelican.com and www.thenuttypelican.com. The root HTTPS page returns 200 OK; HTTP redirects with 301 to HTTPS; www redirects with 301 to the canonical HTTPS root. The live HTTPS response includes HSTS with max-age=31556952. Certificate verification was not disabled during these checks.

## Security improvements prepared

- Added a restrictive Content Security Policy to the homepage: local scripts, styles, fonts and images only; inline structured data allowed by an exact SHA-256 hash; no external connections, frames, objects, base URL overrides, or form submissions.
- Added a restrictive policy to the 404 page and removed its inline style.
- Removed the dynamically loaded Square booking script and embed. Booking uses the verified direct Square URL with a visible email alternative. No customer payment or booking data is collected by this static page.
- No insecure HTTP asset references or inline event handlers remain.
- Pattern checks across the fetched repository history found no private keys, GitHub token patterns, or AWS access-key patterns. This is a limited check, not a guarantee that no secret exists anywhere.
- No runtime package dependencies are used by this buildless site.

GitHub Pages does not provide arbitrary response-header configuration through these source files. Do not mistake a meta policy for server-enforced `frame-ancestors`, HSTS, Permissions-Policy, or X-Content-Type-Options. Server-level header hardening needs an appropriate hosting/proxy capability; it was not configured here. Certificate repair and HTTPS enforcement are now complete.

## Accessibility improvements prepared

Target: WCAG 2.2 Level AA, without claiming comprehensive conformance or legal ADA certification.

- Fixed mid-word category-heading breaks on small screens; headings scale from 21.6px at 320px to 22.5px at 375px.
- Verified no horizontal page overflow at those two phone widths.
- Retained meaningful headings, English page language, a main landmark and a skip-to-content link.
- Decorative flavor backgrounds have empty alternative text; product images have descriptive alternative text.
- Enlarged small controls and contact/direction link targets.
- Added a strong two-color keyboard focus indicator and scroll offsets for the sticky header.
- Tested opening the mobile menu with Enter and closing it with Escape; focus returns to the menu button. Selecting a mobile navigation link transfers focus to the corresponding section.
- Added distinct accessible names for the two map links.
- Added a website-accessibility assistance email link.
- Improved text backdrops over photographs and made flavor-card copy sit on an opaque beige surface.
- Retained reduced-motion support; section navigation now jumps reliably without an animated scroll.
- Added forced-colors handling for decorative cards and focus indicators.

Measured contrast examples:

| Foreground / background | Ratio |
| --- | ---: |
| Green heading / beige | 10.64:1 |
| Flavor description / beige | 7.81:1 |
| Gold label / beige | 5.58:1 |
| White / gold button | 4.71:1 |
| Muted footer text / footer background | 5.14:1 |

The checked pairs exceed the 4.5:1 AA threshold for normal text. These measurements do not constitute an exhaustive audit of every rendered pixel or state.

## Validation and limits

Passed source checks for unique IDs, internal anchors, referenced files, image descriptions and dimensions, no inline styles/handlers, no HTTP assets, the structured-data CSP hash, JSON, sitemap XML, JavaScript syntax and whitespace errors. Browser checks found no page errors, missing loaded images, embedded frames, or external scripts in the checked preview.

A complete independent WCAG conformance evaluation, screen-reader testing with assistive technology, additional browser/device checks, and the external Square booking journey remain outside the completed checks. ADA legal compliance is not certified. The reviewed code is prepared for publication; confirm the GitHub Pages deployment completes before treating the source fixes as live.

## References

- GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- W3C: https://www.w3.org/TR/WCAG22/
- US Department of Justice: https://www.ada.gov/resources/web-guidance/
- MDN CSP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
