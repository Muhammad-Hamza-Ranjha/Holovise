# Holovise Visual QA Audit

Date: 2026-07-15

## Scope

This audit covers the current Holovise Next.js project structure, shared UI components, route inventory, known visual risks, and the initial Figma mapping needed before page-by-page visual correction.

No implementation changes were made as part of this audit.

## Framework And Styling System

- Framework: Next.js 16.2.9 using the App Router.
- React: 19.2.4.
- Language: TypeScript.
- Styling: Tailwind CSS 4 through `app/globals.css` and `tailwind.config.ts`.
- Theme handling: `next-themes` plus manual `dark` / `light` class syncing.
- Main visual architecture:
  - Homepage is implemented with custom React components in `components/home/`.
  - Many inner pages use exported Figma frame images through `StaticFigmaPage` and `ThemeAwareStaticFigmaPage`.
  - Clickable areas, forms, dropdowns, carousel controls, and buttons are layered as React overlays on top of Figma frame images.

## Route Inventory

| Area | Routes |
| --- | --- |
| Home | `/` |
| About | `/about`, `/about/who-we-are`, `/about/our-gallery`, `/who-we-are`, `/gallery`, `/our-gallery` |
| Blog | `/blog`, `/blog/2025-tools-to-create-real-performing-tokens` |
| Careers | `/career`, `/careers`, `/careers/full-stack-developer` |
| Contact | `/contact`, `/contact-us` |
| Portfolio | `/portfolio`, `/our-portfolio`, `/portfolio/taskflow`, `/our-portfolio/taskflow`, `/portfolio-details/taskflow`, `/taskflow-web-application` |
| Services | `/services/full-stack-development`, `/services/product-development`, `/services/collaborative-models`, `/services/mobile-app-development`, `/services/desktop-app-development`, `/services/web-app-development`, `/services/ai-ml-development`, `/services/devsecops`, `/services/software-security`, `/services/blockchain-development`, `/services/web-3-development`, `/services/metaverse-ar-vr`, `/services/ui-ux-design`, `/services/game-development`, `/services/digital-transformation`, `/services/mvp-development`, `/services/no-code-development`, `/services/product-strategy-consulting`, `/services/staff-augmentation`, `/services/investment`, `/services/software-development-outsourcing` |
| Legacy aliases | `/full-stack-development`, `/product-development`, `/collaborative-models` |
| Legal | `/privacy`, `/privacy-policy`, `/terms`, `/terms-and-conditions`, `/cookie-consent` |
| Utility | `/side-drawer` |

## Shared Component Inventory

| Component Area | Files |
| --- | --- |
| Header and shell | `components/Header.tsx`, `components/TopBar.tsx`, `components/SiteChrome.tsx` |
| Navigation menus | `components/navigation/AboutMenu.tsx`, `components/navigation/ServicesMenu.tsx`, `components/navigation/LanguageMenu.tsx` |
| Theme | `components/ThemeProvider.tsx`, `components/navigation/ThemeToggleButton.tsx` |
| Buttons | `components/Button.tsx` |
| Footer | `components/Footer.tsx` |
| Static Figma pages | `components/figma/StaticFigmaPage.tsx`, `components/figma/ThemeAwareStaticFigmaPage.tsx`, `components/figma/ResponsiveFigmaCanvas.tsx`, `components/figma/StaticFrameLinks.ts` |
| Homepage | `components/home/DarkHomepage.tsx`, `components/home/LightHomepage.tsx`, `components/home/MobileHomepage.tsx`, `components/home/ThemedHomepage.tsx`, `components/home/HomeServicesTabs.tsx` |
| Forms | `components/forms/FigmaContactForm.tsx`, `components/portfolio/PortfolioContactForm.tsx` |
| Service interactions | `components/services/ServiceDetailFrame.tsx`, `components/services/ServiceInteractionLayers.tsx`, `components/services/WebAppInteractions.tsx`, `components/services/MobileAppInteractions.tsx`, `components/services/DesktopIndustryTabs.tsx`, `components/services/DesktopBenefitsCarousel.tsx`, `components/services/ServiceCapacityInteractions.tsx` |

## Initial Figma Mapping

Figma file:

`https://www.figma.com/design/j9VvnuQSl2xz7Lsd7yV94m/Holovise-Web-v3---TEL--Copy-`

Metadata calls completed:

| Node | Result |
| --- | --- |
| No node ID | Succeeded. Returned top-level page list. |
| `99:9292` | Succeeded. Top-level page is `Cover`. |
| `99:9294` | Found as direct child frame, name `Cover`, size `1920 x 960`. |
| `61:2749` | Failed with HTTP 504. This node is likely too large and should be inspected through smaller child-frame calls. |

Known service frame mappings from code:

| Service | Dark Node | Light Node |
| --- | --- | --- |
| Mobile App Development | `1:546` | `70:5000` |
| Desktop App Development | `1:3594` | `75:4575` |
| Web App Development | `1:1581` | `61:3803` |
| DevSecOps | `1:2596` | `61:4838` |
| AI/ML Development | `1:4639` | `61:7027` |
| Web 3.0 Development | `1:6890` | `61:9278` |
| Metaverse AR/VR | `1:7989` | `61:10464` |
| UI/UX Design | `1:8893` | `61:11354` |
| Software Security | `1:9853` | `61:12339` |
| Blockchain Development | `1:10954` | `61:13432` |
| Game Development | `1:15608` | `61:18251` |
| MVP Development | `1:12223` | `61:14780` |
| Product Strategy Consulting | `1:12913` | `61:15458` |
| No Code Development | `1:13815` | `61:16385` |
| Staff Augmentation | `1:14913` | `61:17505` |
| Digital Transformation | `1:16427` | `61:19053` |
| Software Development Outsourcing | `1:17749` | `61:20355` |
| Investment | `458:4760` | Not mapped in code |

## Identified Visual Risks

1. `ResponsiveFigmaCanvas.tsx` scales a fixed `1440px` stage with CSS transforms. This conflicts with the requirement to avoid shrinking desktop layouts for mobile and is a likely cause of deployed empty-space issues.
2. Several pages are implemented as large Figma frame images. This makes responsiveness, accessibility, theme fidelity, and performance fragile.
3. Header and navigation behavior exists in both real React components and static-frame overlays, creating inconsistent interactions between homepage and inner pages.
4. Light theme behavior relies on asset swaps, generated rails, and some image-filter fallbacks. This has caused inverted colors, duplicated buttons, and missing floating controls.
5. Many links are absolute coordinate overlays, so small design or scaling changes can break click targets.
6. Homepage desktop and mobile are separate implementations, which increases drift between breakpoints.
7. Large page images are often loaded as priority full-page assets, which can hurt LCP and interaction performance.
8. Floating buttons, carousel arrows, and service controls have recurring z-index and click-layer conflicts.

## Proposed Implementation Order

1. Stabilize the shared responsive canvas behavior and remove desktop-transform scaling where it creates viewport bugs.
2. Normalize the single floating `Get Started` implementation across all static pages.
3. Stabilize header, navigation, side drawer, and theme toggle behavior across local and Vercel deployments.
4. Correct shared homepage services tabs, card links, and slider behavior.
5. Audit light and dark theme asset handling, especially avoiding accidental image inversion.
6. Fix footer, social links, and shared form submission behavior.
7. Move page-by-page through services, about, portfolio, blog, and careers.
8. Add a repeatable visual QA workflow after shared layout foundations are stable.

## Next Recommended Batch

The first implementation batch should focus on shared layout and interaction foundations:

- `components/figma/ResponsiveFigmaCanvas.tsx`
- `components/figma/ThemeAwareStaticFigmaPage.tsx`
- `components/navigation/ThemeToggleButton.tsx`
- `components/Header.tsx`
- `components/home/HomeServicesTabs.tsx`

These files affect the most visible bugs while minimizing page-specific churn.
