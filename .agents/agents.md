# Holovise Pixel-Perfect Implementation Rules

## Source of truth

The Figma prototype is the only visual source of truth.

Do not infer or approximate values when they can be retrieved from Figma.

Every implementation task must use a node-specific Figma selection URL.

## Scope control

Only modify the exact page, section, component, and files listed in the task.

Never modify unrelated routes or components.

Never perform a whole-site redesign in one task.

Never change global CSS, Tailwind configuration, fonts, theme tokens, layout wrappers, or shared components unless the task explicitly authorizes it.

If another file must be changed, stop and request approval before modifying it.

## Mandatory workflow

Before editing:

1. Inspect the selected Figma node.
2. Inspect the existing component.
3. Capture a baseline screenshot.
4. Produce a table of exact Figma values.
5. List the files that would be modified.
6. Wait for implementation approval when operating in planning or Ask mode.

After editing:

1. Capture the updated screenshot.
2. Compare it with the Figma reference.
3. Run lint.
4. Run TypeScript checking.
5. Run the production build.
6. Show the complete Git diff.
7. Report any remaining discrepancy honestly.

## Exact design properties

Match the exact:

- Font family
- Font file
- Font weight
- Font size
- Line height
- Letter spacing
- Text color
- Text opacity
- Text wrapping
- Container width
- Element width and height
- Padding
- Margin
- Gap
- Alignment
- Background
- Gradient
- Border
- Border radius
- Shadow
- Image asset
- Image crop
- Icon asset
- Icon size
- Position
- Responsive variant
- Hover, focus, active, and disabled states

Use exact Figma values rather than nearby Tailwind presets.

## Forbidden changes

Do not:

- Replace pages with screenshots.
- Render complete Figma frames as page images.
- Use transform: scale() or zoom for responsiveness.
- Add arbitrary negative margins.
- Hide overflow instead of fixing the source.
- Use emojis instead of Figma icons.
- Use global filter: invert().
- Add random breakpoints.
- Duplicate complete desktop and mobile pages.
- change routes or business logic.
- change working navigation.
- weaken security headers.
- disable lint or TypeScript rules globally.
- modify generated files.
- modify node_modules.
- install new dependencies without approval.

## Shared components

Shared components may only be changed through dedicated shared-component tasks.

These include:

- TopBar
- Header
- Navigation
- Footer
- Theme toggle
- Floating Get Started button
- Shared buttons
- Shared forms
- Global typography
- Global theme tokens

A page-specific task must not modify these components unless explicitly authorized.

## Responsive requirements

Implement genuine responsive layouts.

Do not shrink desktop pages for mobile.

Test at:

- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844
- 375 × 812
- 320 × 568

## Completion standard

Do not claim “pixel-perfect” without:

- Exact Figma node ID
- Exact design-value table
- Before screenshot
- After screenshot
- Visual comparison
- Git diff
- Successful lint
- Successful type check
- Successful production build