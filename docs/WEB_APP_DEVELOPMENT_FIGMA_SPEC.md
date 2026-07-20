# Web App Development Figma Specification

Route: `/services/web-app-development`

Dark frame: `1:1581` (`Web App Development`), 1440×17474

Light frame: `61:3803` (`Web App Development`), 1440×17512

Current implementation: semantic shared-chrome/title/intro/CTA content followed by
the existing dark/light compatibility image from page y=1000.

Conversion status: the title/breadcrumb hero and introduction through the first
Get Started CTA are semantic. Remaining sections are still static compatibility
content and must not be treated as complete.

## Shared Chrome

- Header/top bar group: 1440×140.
- Dark node: `209:18228`.
- Light node: `209:16184`.
- Rendered by `SiteChrome`; it must not be repeated inside page imagery.

## Title Hero

### Dark

- Node: `1:1595` (`Gradient+Shadow`).
- Source frame: 1440×605 at page y=3.
- Visible page-specific portion after shared chrome: 465px.
- Fill: linear gradient to top.
- Start color: `#080D19`.
- Start position: `41.318%`.
- End color: `rgba(8, 13, 25, 0)`.
- Heading node: `1:1596`.
- Heading: `Web App Development`.
- Heading box: 871×89 at x=284, y=199.
- Font: Sora ExtraBold, 800.
- Font size: 40px.
- Line height: 102px.
- Letter spacing: -1px.
- Color: `#FFFFFF`.
- Alignment: centered.

### Light

- Node: `79:6795` (`Group 634545`).
- Source frame: 1440×605.
- Background mask nodes: `79:6797` and `79:6803`, each 1440×872 at y=-267.
- Exported assets:
  - `hero-light-mask-base.svg`
  - `hero-light-mask-overlay.svg`
- Gradient node: `79:6809`, 1440×605.
- Gradient start: `#EAF0FE` at `41.318%`.
- Intermediate: `rgba(235, 240, 255, 0.35)` at `70.659%`.
- End: `rgba(8, 13, 25, 0)`.
- Heading node: `79:6874`.
- Heading box: 871×89 at x=284, y=202.
- Typography matches dark.
- Color: `#222222`.

### Breadcrumbs

- Dark group: `1:1597`.
- Light group: `79:6875`.
- Group size: 391–392×22 at x=524, y=295.
- Home icon: 22×22.
- Labels: Sora Regular, 400, 16px/20px.
- Current-page label: Sora Bold, 700, 16px/20px.
- Separator icon: 8×8.
- Dark color: `#FFFFFF`.
- Light color: `#222222`.
- `Home` and `Services` are underlined links.

## Introduction

### Shared heading

- Dark node: `1:1608`.
- Light node: `61:3832`.
- Text: `Custom Web App Development for`.
- Box: 881x58 at x=279, y=459.
- Font: Sora Bold, 700.
- Font size: 48px.
- Line height: 58px.
- Letter spacing: -1.5px.
- Dark color: `#FFFFFF`.
- Light color: `#222222`.

### Dark gradient heading

- Node: `1:2508`.
- Text: `Growing Businesses`.
- Box: 480x58 at x=479, y=531.
- Gradient:
  `linear-gradient(48.27621680122133deg, rgb(113, 77, 255) 2.744%, rgb(156, 131, 255) 34.43%, rgb(225, 81, 255) 64.628%, rgb(255, 247, 89) 90.663%)`.

### Light gradient heading

- Node: `61:4645`.
- Text lines: `For Growing Businesses` and ` - Scalable Solutions`.
- Box: 563x116 at x=438, y=531.
- Gradient:
  `linear-gradient(-25.83128904474583deg, rgb(225, 81, 255) 26.605%, rgb(56, 113, 242) 84.601%)`.

### Body and CTA

- Dark body node: `1:1609`, 980x108 at x=230, y=622.
- Light body node: `61:3833`, 980x180 at x=230, y=683.
- Body font: Sora Regular, 22px/36px.
- Dark CTA group: `1:2509`, 245x60 at x=597, y=772.
- Light CTA group: `61:4646`, 245x60 at x=597, y=908.
- CTA radius: 10px.
- CTA label: Sora Regular, 18px/24px.
- CTA destination: `/contact-us`.
- The semantic/raster boundary is page y=1000. The next device artwork begins at
  page y=1043, so no text or interactive control crosses the boundary.

## Remaining Section Order

1. Custom web app introduction.
2. Problem/solution split section.
3. “What You’ll Get” benefit cards.
4. “Our Capacity” expandable service cards.
5. Step-by-step workflow timeline.
6. Mid-page dual-CTA band.
7. Industries section with pill tabs and changing image/copy.
8. Custom-industry CTA.
9. Testimonials and supporting content.
10. Final CTA.
11. Blog/news cards.
12. Contact form and contact details.
13. Shared footer.

Exact section node IDs are recorded in the Figma metadata response for
`1:1581` and `61:3803`. Each section must receive its own design-context query
before semantic conversion.

## Responsive Behavior

No dedicated mobile Web App Development frame has been identified in the file.
The semantic title hero therefore uses the exact desktop values at 1440px and
responsive constraints below that width:

- full viewport width;
- no fixed 1440px stage;
- centered content;
- heading scales down without forced line breaks;
- breadcrumb items wrap as one accessible row where space allows;
- 24px mobile horizontal padding;
- no horizontal overflow.
