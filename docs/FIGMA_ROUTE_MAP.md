# Holovise Figma Route Map

Updated: 2026-07-18

Figma file: `j9VvnuQSl2xz7Lsd7yV94m`

The Figma API exposes one top-level page, `99:9292` (`Cover`). The design frames
below live inside that page. Node `0:1` and the large light-theme collection
`61:2749` time out when requested as a whole, so implementation work must query
the smaller route or section nodes listed here.

Status legend:

- `semantic`: responsive React implementation.
- `static compatibility`: full-page Figma image with interactive overlays;
  accurate at its source width but not a completed responsive implementation.
- `alias`: route reuses the canonical route component and Figma frame.

| Route | Source file | Existing component | Figma frame | Node ID (dark / light) | Themes | Responsive variants | Status |
|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | `ThemedHomepage` | Homepage | `192:5523` / `204:6497` | dark + light | coded desktop; mobile reference `550:5818` | semantic |
| `/about` | `app/about/page.tsx` | `AboutDark` | About menu/open state | `194:14415` / `204:11309` | dark + light | none identified | static compatibility |
| `/about/who-we-are` | `app/about/who-we-are/page.tsx` | `WhoWeAreDark` | Who We Are | `192:6326` / `204:7271` | dark + light | none identified | static compatibility |
| `/who-we-are` | `app/who-we-are/page.tsx` | `WhoWeAreDark` | Who We Are | `192:6326` / `204:7271` | dark + light | none identified | alias |
| `/about/our-gallery` | `app/about/our-gallery/page.tsx` | `OurGalleryDark` | Our Gallery | `192:7486` / `204:8871` | dark + light | none identified | static compatibility |
| `/gallery` | `app/gallery/page.tsx` | `OurGalleryDark` | Our Gallery | `192:7486` / `204:8871` | dark + light | none identified | alias |
| `/our-gallery` | `app/our-gallery/page.tsx` | `OurGalleryDark` | Our Gallery | `192:7486` / `204:8871` | dark + light | none identified | alias |
| `/blog` | `app/blog/page.tsx` | `BlogDark` | Blog | `414:6105` / not identified | dark; generated light fallback | none identified | static compatibility |
| `/blog/2025-tools-to-create-real-performing-tokens` | `app/blog/2025-tools-to-create-real-performing-tokens/page.tsx` | `BlogTokenToolsDetailsDark` | Token Tools article | `414:7204` / not identified | dark; generated light fallback | none identified | static compatibility |
| `/career` | `app/career/page.tsx` | `CareerPageDark` | Careers | `192:7765` / `204:9253` | dark + light | none identified | alias |
| `/careers` | `app/careers/page.tsx` | `CareerPageDark` | Careers | `192:7765` / `204:9253` | dark + light | none identified | static compatibility |
| `/careers/full-stack-developer` | `app/careers/full-stack-developer/page.tsx` | `FullStackDeveloperDark` | Full Stack Developer role | `413:5541` / not identified | dark; generated light fallback | none identified | static compatibility |
| `/contact` | `app/contact/page.tsx` | `ContactUsDark` | Contact Us | `192:8087` / `204:9680` | dark + light | none identified | alias |
| `/contact-us` | `app/contact-us/page.tsx` | `ContactUsDark` | Contact Us | `192:8087` / `204:9680` | dark + light | none identified | static compatibility |
| `/portfolio` | `app/portfolio/page.tsx` | `OurPortfolioDark` | Our Portfolio | `192:6728` / `204:7811` | dark + light | none identified | alias |
| `/our-portfolio` | `app/our-portfolio/page.tsx` | `OurPortfolioDark` | Our Portfolio | `192:6728` / `204:7811` | dark + light | none identified | static compatibility |
| `/portfolio/taskflow` | `app/portfolio/taskflow/page.tsx` | `TaskflowPortfolioDark` | Taskflow Web Application | `350:4772` / not identified | dark; generated light fallback | none identified | alias |
| `/our-portfolio/taskflow` | `app/our-portfolio/taskflow/page.tsx` | `TaskflowPortfolioDark` | Taskflow Web Application | `350:4772` / not identified | dark; generated light fallback | none identified | alias |
| `/portfolio-details/taskflow` | `app/portfolio-details/taskflow/page.tsx` | `TaskflowPortfolioDark` | Taskflow Web Application | `350:4772` / not identified | dark; generated light fallback | none identified | alias |
| `/taskflow-web-application` | `app/taskflow-web-application/page.tsx` | `TaskflowPortfolioDark` | Taskflow Web Application | `350:4772` / not identified | dark; generated light fallback | none identified | alias |
| `/services/full-stack-development` | `app/services/full-stack-development/page.tsx` | `FullStackDevelopmentDark` | Services menu: Full Stack selected | `192:9947` / `204:11111` | dark + light | none identified | static compatibility |
| `/full-stack-development` | `app/full-stack-development/page.tsx` | `FullStackDevelopmentDark` | Services menu: Full Stack selected | `192:9947` / `204:11111` | dark + light | none identified | alias |
| `/services/product-development` | `app/services/product-development/page.tsx` | `ProductDevelopmentDark` | Services menu: Product selected | `192:13652` / `204:11177` | dark + light | none identified | static compatibility |
| `/product-development` | `app/product-development/page.tsx` | `ProductDevelopmentDark` | Services menu: Product selected | `192:13652` / `204:11177` | dark + light | none identified | alias |
| `/services/collaborative-models` | `app/services/collaborative-models/page.tsx` | `CollaborativeModelsDark` | Services menu: Collaborative selected | `194:14174` / `204:11243` | dark + light | none identified | static compatibility |
| `/collaborative-models` | `app/collaborative-models/page.tsx` | `CollaborativeModelsDark` | Services menu: Collaborative selected | `194:14174` / `204:11243` | dark + light | none identified | alias |
| `/services/mobile-app-development` | `app/services/mobile-app-development/page.tsx` | `ServiceDetailFrame` | Mobile App Development | `1:546` / `70:5000` | dark + light | none identified | static compatibility |
| `/services/desktop-app-development` | `app/services/desktop-app-development/page.tsx` | `ServiceDetailFrame` | Desktop App Development | `1:3594` / `75:4575` | dark + light | none identified | static compatibility |
| `/services/web-app-development` | `app/services/web-app-development/page.tsx` | `ServiceDetailFrame` | Web App Development | `1:1581` / `61:3803` | dark + light | none identified | static compatibility |
| `/services/ai-ml-development` | `app/services/ai-ml-development/page.tsx` | `ServiceDetailFrame` | AI/ML Development | `1:4639` / `61:7027` | dark + light | none identified | static compatibility |
| `/services/devsecops` | `app/services/devsecops/page.tsx` | `ServiceDetailFrame` | DevSecOps | `1:2596` / `61:4838` | dark + light | none identified | static compatibility |
| `/services/software-security` | `app/services/software-security/page.tsx` | `ServiceDetailFrame` | Software Security | `1:9853` / `61:12339` | dark + light | none identified | static compatibility |
| `/services/blockchain-development` | `app/services/blockchain-development/page.tsx` | `ServiceDetailFrame` | Blockchain Development | `1:10954` / `61:13432` | dark + light | none identified | static compatibility |
| `/services/web-3-development` | `app/services/web-3-development/page.tsx` | `ServiceDetailFrame` | Web 3.0 Development | `1:6890` / `61:9278` | dark + light | none identified | static compatibility |
| `/services/metaverse-ar-vr` | `app/services/metaverse-ar-vr/page.tsx` | `ServiceDetailFrame` | Metaverse / AR & VR | `1:7989` / `61:10464` | dark + light | none identified | static compatibility |
| `/services/ui-ux-design` | `app/services/ui-ux-design/page.tsx` | `ServiceDetailFrame` | UI/UX Design | `1:8893` / `61:11354` | dark + light | none identified | static compatibility |
| `/services/game-development` | `app/services/game-development/page.tsx` | `ServiceDetailFrame` | Game Development | `1:15608` / `61:18251` | dark + light | none identified | static compatibility |
| `/services/digital-transformation` | `app/services/digital-transformation/page.tsx` | `ServiceDetailFrame` | Digital Transformation | `1:16427` / `61:19053` | dark + light | none identified | static compatibility |
| `/services/mvp-development` | `app/services/mvp-development/page.tsx` | `ServiceDetailFrame` | MVP Development | `1:12223` / `61:14780` | dark + light | none identified | static compatibility |
| `/services/no-code-development` | `app/services/no-code-development/page.tsx` | `ServiceDetailFrame` | No Code Development | `1:13815` / `61:16385` | dark + light | none identified | static compatibility |
| `/services/product-strategy-consulting` | `app/services/product-strategy-consulting/page.tsx` | `ServiceDetailFrame` | Product Strategy Consulting | `1:12913` / `61:15458` | dark + light | none identified | static compatibility |
| `/services/staff-augmentation` | `app/services/staff-augmentation/page.tsx` | `ServiceDetailFrame` | Staff Augmentation | `1:14913` / `61:17505` | dark + light | none identified | static compatibility |
| `/services/investment` | `app/services/investment/page.tsx` | `ServiceDetailFrame` | Investment | `458:4760` / not identified | dark only | none identified | static compatibility |
| `/services/software-development-outsourcing` | `app/services/software-development-outsourcing/page.tsx` | `ServiceDetailFrame` | Software Development Outsourcing | `1:17749` / `61:20355` | dark + light | none identified | static compatibility |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | `PrivacyPolicyDark` | Privacy Policy | `192:6986` / `204:8171` | dark + light | none identified | static compatibility |
| `/privacy` | `app/privacy/page.tsx` | `PrivacyPolicyDark` | Privacy Policy | `192:6986` / `204:8171` | dark + light | none identified | alias |
| `/terms-and-conditions` | `app/terms-and-conditions/page.tsx` | `TermsAndConditionsDark` | Terms and Conditions | `192:7236` / `204:8521` | dark + light | none identified | static compatibility |
| `/terms` | `app/terms/page.tsx` | `TermsAndConditionsDark` | Terms and Conditions | `192:7236` / `204:8521` | dark + light | none identified | alias |
| `/cookie-consent` | `app/cookie-consent/page.tsx` | `CookieConsentDark` | Cookie Consent | `192:5463` / `204:9919` | dark + light | none identified | static compatibility |
| `/side-drawer` | `app/side-drawer/page.tsx` | `SideDrawerDark` | Side drawer | `192:5403` / `204:9855` | dark + light | viewport overlay | utility/static compatibility |

## Verified Figma Structure

`1:1581` (`Web App Development`) was queried directly and confirmed as a
1440×17474 frame. Its direct structure includes:

- shared top bar and header: `209:18228`, 1440×140;
- page title/breadcrumb hero: `1:1595`, 1440×605;
- introduction content and art;
- benefits grid;
- expandable capacity cards;
- workflow timeline;
- industry tabs and imagery;
- CTA bands;
- shared footer mask: `2:21736`, 1440×1501.

This validates the 140px/1501px compatibility crops, but those crops do not
replace the required semantic conversion of each page section.
