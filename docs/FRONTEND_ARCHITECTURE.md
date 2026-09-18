# Frontend architecture

SBT frontend is a single Vite React application, not a micro-frontend. Feature folders isolate future business domains.

## Layering

```
routes / layouts  →  feature pages  →  feature hooks / api
                              ↓
                    shared components
                              ↓
              services/api-client  +  TanStack Query
                              ↓
                         Spring Boot API
```

## State

| Kind         | Tool            | Use for                                   |
| ------------ | --------------- | ----------------------------------------- |
| Server state | TanStack Query  | API data, cache, retries                  |
| Client state | Zustand         | Sidebar, command palette, other UI chrome |
| Form state   | React Hook Form | Inputs, dirty/touched, submit             |
| Validation   | Zod             | Client schemas and env parsing            |

Do not put product lists, inventories, or user records in Zustand.

## Routing

React Router data-router (`createBrowserRouter`).

Current foundation routes:

- `/`
- `/login`, `/register` — Auth layout placeholders
- `/seller/*` — Seller shell
- `/admin/*` — Admin shell
- `/buyer/*` — Buyer shell

Authentication is **not** implemented. There is no fake login and no mocked backend session. Token injection and refresh live in `src/services/api-client.ts` as architecture only.

## API

`src/services/api-client.ts`:

- Absolute `VITE_API_BASE_URL`
- JSON requests
- Optional `Authorization: Bearer` from `tokenStorage`
- Single-flight refresh on 401
- Normalized `AppError` with user-safe messages
- `AbortSignal` support
- Typed helpers: `api.get/post/put/patch/delete`

Do not hardcode URLs in features. Do not display stack traces or SQL/internal exceptions.

## Authorization later

Navigation is data (`src/config/navigation.ts`), not hardcoded per layout component. Phase 5+ can filter `NavItem[]` by permissions without rewriting shells.

## Forms

Reusable pattern:

- `AppForm` — Zod resolver + FormProvider
- `FormField` — label, description, accessible error
- `FormError` — server-level submit error

## Errors and loading

- Route-level `ErrorBoundary`
- `ErrorState`, `EmptyState`, `PageLoader`, `DataTableSkeleton`, `Spinner`
- Prefer skeletons on content-heavy pages; use button `disabled` + spinner on submits

## Feature convention

See `src/features/README.md`. Create a feature folder only when that phase starts.
