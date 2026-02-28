# Landing Page Build Specification
## Developer Prompt — Ready to Paste Into Any Coding Tool

---

You are building a single-page marketing landing page. Below is the complete specification. Follow it exactly. The page should be a single HTML file (HTML + CSS + JS) unless the client specifies a framework. If a framework is requested, map each section below to its own component.

---

## Global Design Rules

### Typography
- **Headlines / Display text:** Use a bold serif font. Recommended: `Playfair Display` (weights: 600, 700, 800). Load from Google Fonts.
- **Body / UI text:** Use a clean geometric sans-serif. Recommended: `DM Sans` (weights: 400, 500, 700). Load from Google Fonts.
- **Base body size:** 16px (`1rem`), line-height `1.7`.
- **Headline sizing:** Use `clamp()` for fluid scaling. The hero `h1` should range from roughly `2.8rem` on mobile to `5rem` on large screens. Section headings should range from `2rem` to `2.8rem`.
- **Letter-spacing:** Labels and small uppercase text should use `2–3px` letter-spacing. Body text uses default.

### Color Palette
Use CSS custom properties for all colors. Here is the palette:

| Token | Value | Usage |
|---|---|---|
| `--dark` | `#1a1a2e` | Header, hero background, dark sections |
| `--dark-mid` | `#232340` | Hover states on dark backgrounds |
| `--accent` | `#e8a838` | CTAs, labels, highlights (warm gold) |
| `--accent-hover` | `#f0bc5e` | Hover state for accent buttons |
| `--light` | `#faf9f6` | Default page background (warm off-white) |
| `--light-warm` | `#f3f1ec` | Alternate light background |
| `--text` | `#3a3a4a` | Primary body text |
| `--text-light` | `#7a7a8a` | Secondary / muted text |
| `--white` | `#ffffff` | Card backgrounds, pure white |

### Spacing and Layout
- **Max content width:** `1200px`, centered with `margin: 0 auto`.
- **Section padding:** `100px` vertical, `24px` horizontal. Reduce to `72px` vertical on mobile.
- **Design philosophy:** Generous whitespace everywhere. Let content breathe. Don't crowd elements.
- **Border radius:** `12px` for cards and containers, `8–10px` for buttons and inputs.

### Shadows
- **Default shadow:** `0 4px 24px rgba(26,26,46,0.08)` — use on card hover states.
- **Large shadow:** `0 12px 48px rgba(26,26,46,0.12)` — use on elevated hover states.

### Animations
- **Page load:** Hero content should fade up with staggered delays (label → headline → subtext → buttons), each offset by `~0.2s`.
- **Scroll reveal:** All section content should fade up when scrolling into view. Use `IntersectionObserver` with a `0.15` threshold. Add a `.reveal` class that transitions `opacity` and `transform: translateY(30px)` over `0.7s`.
- **Hover transitions:** All interactive elements (buttons, cards, links) should have `0.2–0.35s` transitions.

---

## Component-by-Component Specification

### 1. HEADER (Sticky)

**Behavior:** `position: sticky; top: 0; z-index: 1000`. Stays at the top of the viewport at all times. When the user scrolls past `10px`, add a class that applies a stronger `box-shadow` to give it depth.

**Background:** `var(--dark)` (the dark navy).

**Height:** `72px`.

**Contents (left to right):**
- **Logo (left):** Text-based. The brand name in white using the display/serif font at `1.6rem`, weight `700`. The period at the end of the name should be colored `var(--accent)`.
- **Navigation (right):** Horizontal row of links. Link color: `rgba(255,255,255,0.75)`, turning white on hover. Font size `0.9rem`, weight `500`. Include these links: About, Services, Testimonials, Contact. Each links to the corresponding section via anchor (`href="#about"`, etc.).
- **CTA button (far right, inside nav):** A "Get Started" button styled differently from the nav links — gold background (`var(--accent)`), dark text, `10px 24px` padding, `8px` border radius, `700` weight. Hover: lighten background, slight `translateY(-1px)`.

**Mobile (below `768px`):**
- Hide the nav links and CTA. Show a hamburger icon (three horizontal lines, `24px` wide, `2px` thick, `6px` gap, white color).
- Tapping the hamburger toggles the nav into a vertical dropdown below the header with a dark background, `24px` padding, and a subtle top border. Tapping any nav link closes the dropdown.

---

### 2. HERO SECTION

**Background:** `var(--dark)`. This section visually extends from the header — same dark background, so they feel connected.

**Padding:** `100px` top, `120px` bottom (desktop). `64px / 80px` on mobile.

**Background decoration:** Add two large, soft radial gradients using `::before` and `::after` pseudo-elements. Use `rgba(232,168,56, 0.12)` and `rgba(232,168,56, 0.06)` — warm gold glows. Position them off-center (top-right and bottom-left). They should be `400–600px` circles, absolutely positioned, no pointer events. This creates atmospheric depth without images.

**Contents (all left-aligned, stacked vertically):**
1. **Label:** Small uppercase text — `0.8rem`, `700` weight, `3px` letter-spacing, colored `var(--accent)`. Example text: "Growth-Driven Marketing".
2. **Headline (`h1`):** Large, bold serif. `clamp(2.8rem, 6vw, 5rem)`, weight `800`, white, line-height `1.1`, max-width `780px`. Example: "We Build Brands That People Actually Remember".
3. **Subtext (`p`):** `1.15rem`, color `rgba(255,255,255, 0.6)`, max-width `540px`. One to two sentences describing the value proposition.
4. **Button row:** Two buttons side by side (wrap on mobile):
   - **Primary CTA:** Gold background, dark text, `16px 36px` padding, `10px` radius, `700` weight. Arrow or `→` after text. Hover: lighten, lift `2px`, add gold glow shadow.
   - **Secondary CTA:** Transparent background, white text, `1.5px` semi-transparent white border, same padding/radius. Hover: border brightens, subtle background tint.

**Staggered animation:** Each of the four content blocks fades up with increasing delay (`0.2s`, `0.4s`, `0.6s`, `0.8s`).

---

### 3. ABOUT SECTION

**Background:** `var(--white)`.

**Layout:** Two-column grid, `80px` gap. On mobile, stack to single column.

**Left column — Visual block:**
A `4:3` aspect-ratio container with rounded corners (`12px`). Background: dark gradient from `var(--dark)` to `var(--dark-mid)`. Overlay two soft radial gradients in gold for atmosphere. Centered inside it, display a large stat — for example, "12+" in `5rem` serif bold gold, with a label like "Years of Experience" in small uppercase white text below it. This serves as a visual placeholder that still communicates value.

**Right column — Text content:**
1. Section label (small gold uppercase, same style as hero label).
2. Section title (serif, same size pattern as other sections).
3. One or two paragraphs of body text in `var(--text-light)`.
4. A horizontal divider (just a `1px` top border, `rgba(0,0,0,0.08)`).
5. A row of three stats below the divider. Each stat: a large bold serif number (e.g., "200+", "94%", "3.2×") with a small muted label beneath (e.g., "Projects Delivered", "Client Retention", "Avg. ROI Increase"). Display these in a horizontal flex row with `40px` gap.

---

### 4. SERVICES SECTION

**Background:** `var(--light)` (the warm off-white).

**Intro:** Section label, section title, and one line of subtitle text — all left-aligned above the cards.

**Card grid:** Four cards in a row on desktop (`grid-template-columns: repeat(4, 1fr)`, `24px` gap). Two columns on tablet. Single column on mobile.

**Each card contains:**
1. **Icon container:** `52px` square, `12px` radius, light gold-tinted background (`rgba(232,168,56, 0.12)`). Center an emoji or icon inside at `~1.4rem`.
2. **Title (`h3`):** Serif font, `1.25rem`, `700` weight, dark color.
3. **Description (`p`):** `0.92rem`, `var(--text-light)`, `1.7` line-height.

**Card styling:** White background, `12px` radius, `40px 28px` padding, subtle `1px` border in `rgba(0,0,0,0.04)`.

**Card hover:** Lift `4px` (`translateY(-4px)`), apply the large shadow. Also reveal a `3px` gold accent bar at the top of the card (use a `::before` pseudo-element that scales from `scaleX(0)` to `scaleX(1)` on hover).

**Suggested services:** Brand Strategy, Web Design, Growth Marketing, Content Creation. (Client will replace these.)

---

### 5. TESTIMONIALS SECTION

**Background:** `var(--dark)`. All text defaults to white tones.

**Intro:** Section label (gold), section title (white), subtitle (`rgba(255,255,255,0.5)`) — left-aligned.

**Card grid:** Three cards in a row on desktop. Single column on mobile. `24px` gap.

**Each testimonial card contains:**
1. **Star rating:** Five gold star characters (`★★★★★`), `0.9rem`, `2px` letter-spacing.
2. **Quote (`blockquote`):** `1rem`, italic, `rgba(255,255,255,0.75)`, `1.75` line-height. Wrap in quotation marks.
3. **Author row:** A circular avatar (`44px`, gold gradient background, centered initials in dark bold text) next to the author's name (white, `0.95rem` bold) and their title/company (`0.8rem`, `rgba(255,255,255,0.4)`).

**Card styling:** Semi-transparent background (`rgba(255,255,255, 0.04)`), `1px` border in `rgba(255,255,255,0.08)`, `12px` radius, `36px` padding.

**Card hover:** Background brightens to `0.07` opacity, border tints toward gold.

---

### 6. CONTACT SECTION

**Background:** `var(--white)`.

**Layout:** Two-column grid — info on the left (`1fr`), form on the right (`1.2fr`), `80px` gap. Stack on mobile.

**Left column — Contact info:**
1. Section label, title, subtitle (same pattern as other sections).
2. Three info items stacked vertically, each with: a `44px` square icon container (light gold background, `10px` radius, emoji/icon centered), and next to it, a bold label (e.g., "Email") with the detail below in muted text (e.g., "hello@example.com"). Spacing: `28px` between items.

**Right column — Contact form:**
Container: `var(--light)` background, `12px` radius, `44px` padding.

**Form fields:**
1. **Row 1:** First Name + Last Name side by side (two-column grid, `16px` gap). Stack on mobile.
2. **Row 2:** Email Address (full width).
3. **Row 3:** Dropdown select — "What do you need help with?" with options matching the services plus a "Something Else" option.
4. **Row 4:** Textarea — "Tell us about your project". Min-height `120px`, vertically resizable.
5. **Submit button:** Full width, `var(--dark)` background, white text, `16px` padding, `10px` radius, `700` weight. Hover: lighten background, lift `1px`, add shadow.

**Input styling:** `14px 16px` padding, `1.5px` border in `rgba(0,0,0,0.08)`, `8px` radius, white background. On focus: border turns gold, add a `3px` gold glow ring (`box-shadow: 0 0 0 3px rgba(232,168,56, 0.12)`).

**Labels:** `0.85rem`, `600` weight, dark color, `8px` margin below.

---

### 7. FOOTER

**Background:** `var(--dark)`. Text color: `rgba(255,255,255, 0.5)`.

**Padding:** `64px` top, `32px` bottom.

**Top section — Four-column grid** (`2fr 1fr 1fr 1fr`, `48px` gap):
1. **Brand column (wider):** Logo (same as header but slightly smaller at `1.4rem`), followed by a short `0.9rem` tagline in muted white, max-width `280px`.
2. **Three link columns:** Each with a heading (`0.85rem`, white, uppercase, `700` weight, `1.5px` letter-spacing) and 3–4 links below (`0.9rem`, muted white, `12px` vertical spacing). Links turn gold on hover.
   - Column 1: "Services" — Brand Strategy, Web Design, Growth Marketing, Content Creation
   - Column 2: "Company" — About, Careers, Blog, Contact
   - Column 3: "Connect" — LinkedIn, Twitter / X, Instagram, Dribbble

**Divider:** `1px` bottom border in `rgba(255,255,255, 0.08)` between the top and bottom sections.

**Bottom section:** Flex row, space-between. Left: copyright text (`0.82rem`). Right: Privacy Policy and Terms of Service links. On mobile, stack centered.

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| **Below `1024px`** | Services grid → 2 columns. Footer top → 2 columns. |
| **Below `768px`** | Header nav becomes hamburger dropdown. Hero padding reduces. About grid → 1 column. Services grid → 1 column. Testimonials grid → 1 column. Contact grid → 1 column. Form first-name/last-name row → 1 column. Footer → 1 column. Footer bottom → stacked centered. Stat numbers shrink slightly. |

---

## Smooth Scrolling

Enable `scroll-behavior: smooth` on `html`. Set `scroll-padding-top: 80px` (or match header height) so anchor links don't land behind the sticky header.

---

## Accessibility Notes

- All interactive elements should be keyboard-accessible.
- The hamburger button needs an `aria-label="Menu"`.
- Use semantic HTML: `<header>`, `<section>`, `<footer>`, `<nav>`, `<blockquote>`.
- Form inputs must have associated `<label>` elements.
- Maintain sufficient color contrast — the gold accent on dark backgrounds meets WCAG AA.

---

## Summary Checklist

- [ ] Sticky dark header with logo, nav links, gold CTA, and mobile hamburger
- [ ] Hero with decorative background glows, bold serif headline, subtext, two CTAs, staggered fade-in
- [ ] About section with two-column layout, visual stat block, text content, and inline stats row
- [ ] Services section with four hover-animated cards in a responsive grid
- [ ] Testimonials on dark background with three client quote cards
- [ ] Contact section with info on left, styled form on right
- [ ] Footer with four-column link layout, divider, copyright row
- [ ] All sections have scroll-reveal animations
- [ ] Fully responsive at 1024px and 768px breakpoints
- [ ] Smooth scroll with header offset
