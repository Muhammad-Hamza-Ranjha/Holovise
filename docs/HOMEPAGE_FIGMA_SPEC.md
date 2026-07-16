# Homepage Figma implementation specification

Measured on 2026-07-15 from Figma file `j9VvnuQSl2xz7Lsd7yV94m`. This document is the implementation contract for `/` and its shared navigation/footer controls. Values are taken from the Figma node tree; they are not inferred from screenshots.

## Route and frame map

| Route/state | Figma page | Canonical frame | Code entry point |
| --- | --- | --- | --- |
| `/`, light, desktop | `61:2749` — `🔅 Services pages - Light` | `204:6497` — `Holovise - Homepage`, 1440×12496 | `app/page.tsx` → `ThemedHomepage` → `LightHomepage` |
| `/`, dark, desktop | `0:1` — `🌙 Services pages - Dark` | `192:5523` — `Holovise - Homepage`, 1440×12496 | `app/page.tsx` → `ThemedHomepage` → `DarkHomepage` |
| `/`, light/dark, responsive | No separate responsive homepage frame exists in the inspected primary area | Preserve the desktop content order and measured tokens while reflowing below 1440 px | `ThemedHomepage` → `MobileHomepage` |

The Figma file also contains `Cover` (`99:9292`), the component library (`191:4930`), prompts/dialogues (`103:2`), and data (`351:5501`). They are out of scope until the homepage and its shared components pass verification.

## Shared design tokens

| Token | Light | Dark | Notes |
| --- | --- | --- | --- |
| Page background | `#EAF0FE` | `#080D19` | Exact frame fills |
| Primary text | `#222222` | `#FFFFFF` | Sora unless specified |
| Primary blue | `#3871F2` | `#3871F2` | Buttons, icons, light eyebrows |
| Dark accent | — | `#9C50FF` | Dark-theme eyebrows |
| Dark surface | — | `#111729` | Form/card surface |
| Desktop content rail | 1180 px | 1180 px | x=130 through x=1310 |
| Main three-column rhythm | 380 px columns, 20 px gaps | same | Process/content grid |
| Industry card rhythm | 394 px columns | same | 3 columns within 1181 px |

Typography families:

- Sora: all primary headings, body copy, navigation, labels, cards, and buttons unless noted.
- Bricolage Grotesque ExtraBold: contact title, 48/56, -2% letter spacing.
- Inter: blog card titles/meta and the form submit button.

Canonical text styles:

| Use | Exact style |
| --- | --- |
| Section eyebrow | Sora Medium 20 px / 19.6 px, 10 px letter spacing, centered uppercase |
| Section H2 | Sora Bold 36 px / 58 px, -1.5 px letter spacing |
| Body lead | Sora Regular 22 px / 36 px |
| Card heading | Sora Bold 24 px / 32 px |
| Card body | Sora Regular 18 px / 30.8 px |
| Contact label | Sora Regular 16 px / 24 px, -1% letter spacing |
| Contact detail label | Sora Regular 14 px / 20 px |
| Contact detail value | Sora SemiBold 20 px / 24 px, -1% letter spacing |

## Homepage section map

| Section | Y range / anchor | Light nodes | Dark nodes | Code component |
| --- | --- | --- | --- | --- |
| Shared header | 0–140 | header group `206:11806`; hero mask `204:6556` | header group `192:9722`; language `574:7595`; hero mask `192:5564` | local `Header`, shared `LanguageMenu`, `ThemeToggleButton` |
| Hero | 140–916 | world `204:6566`; eyebrow `204:6575`; body `204:6568`; CTA `204:6569` | world `192:5572`; corresponding header/hero descendants | `Hero` |
| Services | eyebrow y=974; cards y=1429–2440 | `204:6761`, intro `204:6581`, card instances `204:6498`–`204:6517` | theme-equivalent descendants of `192:5523` | `Services` |
| Primary CTA | y=2558, 1181×413 | `204:6609` | full-width dark CTA band | `CtaBand` |
| Industries | eyebrow y=3131; cards y=3726 | `204:6762`, intro `204:6746`, chart `204:6634`, grid `204:6635` | theme-equivalent descendants | `Industries` |
| Testimonials | heading y=5130; cards y=5275–5723; logos y=5723 | `204:6763`, `204:6760`, cards `204:7207`/`204:7208`, logos `204:6520` | heading `551:6520`, cards `192:5634`/`192:5635`, logos `192:5528` | `Testimonials` |
| Process | eyebrow y=5965; steps y=6278–7398 | `204:6767`, intro `204:6764`, step nodes `204:6775`–`204:6802`, glow `204:6517` | theme-equivalent descendants and dark glow asset | `Process` |
| Fit CTA | y=7585, h=413 | mask `204:6622`, copy `204:6630`, art `204:6803` | full-width dark CTA artwork | `FitCta` |
| Why Holovise | eyebrow y=8215; cards y=8556–9380 | `204:6771`, intro `204:6768`, grid `204:6804` | intro `192:5837`; cards `192:5873`, `192:5878`, `192:5883` | `WhyChoose` |
| Blog | eyebrow y=9490; cards y=9653; CTA y=10159 | `204:6774`, heading `204:6772`, CTA `204:6888` | corresponding descendants; CTA `192:5935` | `Blog` |
| Contact | title y=10451; form y=10368; details y=10689 | title `204:6994`, form `204:7014`, details `204:7182` | title `192:5936`, form `192:5956`, details `192:6207` | `Contact` |
| Footer | y=10995–12496 | `206:14019` | `192:12635` | `Footer` |

## Exact section geometry

### Header and hero

- Header total height: 140 px; utility bar 40 px; main navigation 100 px.
- Utility copy starts x=55, y=8. Navigation labels are Sora Regular 18/24.
- Desktop language control: x=1191, y=68, 86×44; flag slot 32×24 and chevron slot 20×20.
- Hero world art: x=865, y=107, 730×809.
- Hero body: x=130, y=570, 684×72, Sora 22/36.
- Hero primary CTA: x=130, y=667, 297×60.

### Testimonials

- Eyebrow: x=530, y=5130, 380×20.
- Heading: x=330, y=5172, 780×57, Sora Bold 36/58.
- Card strip: x=-24, y=5275, 1488×448. Each card is 480×212 with 15 px radius; columns begin at -24, 480, and 984, rows at 5275 and 5511.
- Visible inner content begins 20 px inside each viewport card. Avatar: 44×44 with 22 px radius. Identity text starts 60 px after the content origin. Quote width: 424 px; Sora 16/24.
- Light card surface: solid white plus the Figma linear overlay, border `#262626` at 50%.
- Dark card surface: white at 4% plus the Figma linear overlay.
- Partner logo rail: x=0, y=5723, 1440×132; six 223.33×72 slots with 20 px gaps. Active fourth logo at full opacity, the others at 25%.

### Process

- Heading block: eyebrow x=530/y=5965; H2 x=410/y=6007/w=620; body x=330/y=6136/w=780.
- Step columns: x=130, 530, 930. Row anchors: y=6278, 6647, 7058.
- Number tile: 88×88, 15 px radius. Heading starts x=108 relative to the card and uses Sora Bold 22/30. Body starts y=116 and uses Sora 18/28.

### Why Holovise

- Eyebrow: x=530, y=8215, 380×20.
- Heading: x=410, y=8257, 620×57. Exact copy: “Why We’re the Right Fit for You!”
- Supporting copy: x=330, y=8339, 780×144, Sora 22/36, with one blank line between its two sentences.
- Grid: x=130, y=8556, 1180×824; four 590×412 cards with no gap or corner radius.
- Light border: `#222222` at 50%. Dark border: white at 20%.
- Card content origin: x=62, y=62. Artwork: 80×80. Heading starts x=100 within the header row. Body starts x=62/y=174 and is 466 px wide.

### Contact

- Left content title block: x=130, y=10451, 459×159.
- Exact title: Bricolage Grotesque ExtraBold 48/56, width 400, -2% letter spacing.
- Form: x=740, y=10368, 570×627, 30 px radius, 30 px inner inset.
- Light form surface: white at 50%; inputs `#222222` at 10%. Dark surface: `#111729`; inputs `#3D3F43` at 25%.
- Input radius: 16 px. Name: 510×60. Email/phone: 250×60 with 10 px gap. Message: 510×135.
- Form vertical anchors relative to its 30 px inset: name y=28, email/phone group y=132, message y=239.5, opt-in y=394, submit y=471.65, disclaimer y=555.65.
- Submit: 510×60, radius 8, `#3871F2`, Inter Extra Bold 16/24, exact label “Send Message!”.
- Contact details: x=130, y=10689, width 570; row anchors y=10689, 10767, 10845. Icon circle 45×45; text begins x=199. Dark address is two lines and makes the final row 76 px high.

### Footer

- Footer root: 1440×1501 at y=10995.
- Symbol: x=652, y=11145, 135×156. Wordmark: x=571, y=11341, 299×32.
- “Follow us”: x=435, y=11455, 570 px wide. Social row: x=563, y=11500, 313×39.
- Link columns start x=130, 430, 730, 1030 at y=11659.
- Divider: x=55, y=12386, 1330×1. Bottom row begins y=12422.

## Responsive and interaction contract

- At widths 1440 px and above, render the canonical 1440 px desktop stage without geometry drift.
- Below 1440 px, use the responsive document flow. Preserve section order, exact theme tokens, semantic headings, legible body sizes, touch targets of at least 44 px, and no horizontal overflow.
- Validate 1920×1080, 1440×900, 1366×768, 1280×720, 1024×768, 768×1024, 412×915, and 390×844 in both themes.
- About and Services navigation menus must support pointer and keyboard use. Escape and outside click close open menus.
- Theme selection must update the rendered homepage and remain consistent with the document theme.
- Language selection must be a keyboard-accessible listbox/menu, update the flag and language code, set `document.documentElement.lang`, persist the selected locale, close on Escape/outside click, and use a complete Union Jack for `en-GB`.
- Forms require semantic labels and browser validation. The homepage contact form builds a mailto enquiry with the entered values; no backend endpoint exists in this scope.

## Verification gates

- Desktop light/dark full-page screenshots compared with `visual-tests/references/home/{theme}/figma-1440x12496.png`.
- Section-level diffs for hero, services, CTA, industries, testimonials, process, fit CTA, impact, blog, contact, and footer.
- Playwright interaction coverage for theme and language persistence, menu keyboard behavior, responsive overflow, links, and contact form behavior.
- `npm run lint`, TypeScript checking, the production build, and the full Playwright suite must pass before moving to another route.
