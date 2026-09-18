# Design system

SBT’s visual language is **ink navy + trust teal on warm paper**. It is meant to feel like a premium marketplace control surface: calm, dense enough for operations, never generic purple-dashboard.

Inspiration (not copies): Stripe hierarchy, Shopify Admin operational layout, modern SaaS shells.

## Principles

- Semantic tokens only (`primary`, `surface`, `success`, …)
- Light mode is the shipped theme
- Dark-mode CSS variables already exist on `.dark`
- Inter Variable for UI type
- Visible focus rings, 4.5:1 text contrast on body copy
- Desktop-first, with a real mobile navigation sheet rather than a squashed sidebar

## Tokens

Defined in `src/styles/index.css`.

| Token                              | Role                        |
| ---------------------------------- | --------------------------- |
| `background`                       | Warm canvas                 |
| `surface` / `card`                 | Elevated panels             |
| `foreground`                       | Primary text                |
| `primary`                          | Ink navy actions            |
| `secondary` / `muted`              | Quiet fills                 |
| `accent`                           | Teal-tinted hover/selection |
| `success` `warning` `error` `info` | Status                      |
| `sidebar*`                         | Dark operational nav        |

Typography classes:

`text-display`, `text-h1`–`text-h4`, `text-body`, `text-small`, `text-caption`, `text-label`

Spacing, radius, shadows, motion, breakpoints, and z-index are also tokenized.

## Components

shadcn/ui (Radix Nova primitives) plus SBT wrappers:

| Need                                        | Location                    |
| ------------------------------------------- | --------------------------- |
| Buttons, inputs, dialogs, tables, …         | `src/components/ui/*`       |
| Date picker, combobox, file upload, stepper | `src/components/ui/*`       |
| Page header, breadcrumb, shells             | `src/components/layout/*`   |
| Empty/error/skeleton/stat                   | `src/components/feedback/*` |
| Form composition                            | `src/components/forms/*`    |

Do not add one-off colors in feature components. If a new color is required, add a token first.
