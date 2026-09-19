# SBT — Phase 1 Frontend Foundation Report

## 1. Purpose & Scope

The purpose of **Phase 1 (Frontend Foundation)** is to establish a production-grade, secure, accessible, and extensible frontend architecture for the **SBT — Sell Buy Trust** multi-vendor marketplace platform.

This foundation establishes the technological bedrock, design tokens, operational shells, data table architecture, status system, API client, environment validation, and authentication/authorization extension points—without prematurely implementing Phase 2+ business workflows or faking backend persistence.

---

## 2. Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core UI** | React 19 + TypeScript | Component model & strict type safety |
| **Build & Dev Tool** | Vite 8 | Fast HMR and optimized ESM bundling |
| **Routing** | React Router v7 | Nested shell routing, layout hierarchy, and route guards |
| **Design & Tokens** | Tailwind CSS v4 | Semantic theme tokens, HSL/OKLCH color mapping |
| **UI Primitives** | Radix UI + shadcn/ui | Accessible, unstyled headless primitives |
| **State (Server)** | TanStack Query v5 | Cache management and server state query keys |
| **State (Client)** | Zustand v5 | Lightweight client-only UI state (sidebar, search modal) |
| **Forms & Validation**| React Hook Form + Zod | Schema validation, typed field state, and error handling |
| **Icons** | Lucide React | Clean, consistent enterprise icon system |

---

## 3. Implemented Foundation

### 3.1 Design System & Semantic Tokens
- **Theme Palette**: Ink navy (`--primary`) and trust teal (`--sidebar-primary` / `--accent`) on warm paper canvas (`--background`).
- **Typography Scale**: Professional Inter Variable typography with tokens from `text-display` down to `text-caption`.
- **Status Badge System**: 13 standardized lifecycle states (`DRAFT`, `SUBMITTED`, `UNDER_REVIEW`, `MORE_INFORMATION_REQUIRED`, `RESUBMITTED`, `APPROVED`, `REJECTED`, `ACTIVE`, `SUSPENDED`, `DISABLED`, `PUBLISHED`, `UNPUBLISHED`, `ARCHIVED`) combining accessible icons, labels, and compliant color contrast.

### 3.2 Global Application Shells
- **Responsive Navigation**: Desktop collapsible sidebar (`AppSidebar`), header with command palette trigger (`AppHeader`), and mobile drawer (`MobileNav`).
- **Organization & Store Context Selector**: Reusable context switcher (`OrgStoreContextSelector`) supporting multi-tenant hierarchy (`Organization -> Store`).
- **Seller Workspace Shell**: Operational layout mounted at `/seller` featuring demo stats, interactive data table with sorting/filtering/selection, form modal, and empty/error state tabs.
- **Admin Control Plane Shell**: Platform administration layout mounted at `/admin` featuring multi-step verification stepper, governance audit stream, and approval queues.
- **Authentication Portal**: Identity shell at `/login` featuring split Email+Password and Mobile+OTP validation, remember-me toggle, forgot-password modal, and loading simulation.
- **404 Not Found & Error Boundary**: User-friendly fallback screens preventing stack trace leaks.

### 3.3 Core UI Primitives & Components
- **Components Available**: Button, Input, InputGroup, Textarea, Select, Combobox, Checkbox, RadioGroup, Switch, Badge, StatusBadge, StatusIndicator, Avatar, Tooltip, DropdownMenu, Dialog, Drawer/Sheet, Tabs, Card, StatCard, Table, DataTable, Pagination, Alert, Toast (Sonner), Skeleton, DataTableSkeleton, Spinner, PageLoader, EmptyState, ErrorState, Breadcrumb, PageHeader, Progress, Stepper, FileUpload.

### 3.4 Data Table Foundation
- Generic typed `DataTable<TData>` with:
  - Column sorting with direction indicators
  - Full-text search filtering across columns
  - Row selection with select-all header and bulk counter
  - Customizable row action dropdowns
  - Configurable pagination controls
  - Built-in skeleton loading, empty state, and error state fallbacks

### 3.5 API Architecture & Security
- Centralized `apiClient` (`src/services/api-client.ts`) with:
  - Base URL configuration via `VITE_API_BASE_URL`
  - Automated 401 interceptor with refresh-token rotation queue
  - User-safe error normalization (`AppError`, `normalizeApiError`) sanitizing internal exceptions and stack traces
  - Typed helper methods (`api.get`, `api.post`, `api.put`, `api.patch`, `api.delete`)

### 3.6 Auth & Authorization Extension Points
- **Domain Hierarchy**: `User -> Role -> Permission -> Scope`
- **Context & Hooks**: `AuthProvider`, `useAuth()`, `useAuthorization()`
- **Guards**: `ProtectedRoute` (guards based on authentication, roles, permissions, or store/org scopes), `PublicRoute`, and `<Can />` conditional rendering component.

---

## 4. Project Folder Structure

```
src/
├── app/
│   ├── App.tsx
│   ├── error-boundary.tsx
│   ├── providers.tsx
│   └── router.tsx
├── assets/
├── components/
│   ├── feedback/       # StatCard, EmptyState, ErrorState, Spinner, PageLoader
│   ├── forms/          # AppForm, FormField, FormError
│   ├── layout/         # AppHeader, AppSidebar, MobileNav, PageContainer, PageHeader, OrgStoreSelector
│   ├── tables/         # DataTable, DataTableSkeleton
│   └── ui/             # Reusable primitives (Button, Dialog, Drawer, StatusBadge, etc.)
├── config/
│   ├── env.ts          # Zod environment validation
│   ├── navigation.ts   # Navigation configuration definitions
│   └── query-client.ts # TanStack Query configuration
├── constants/
│   ├── routes.ts       # Canonical route paths
│   └── z-index.ts      # Layer stacking constants
├── features/           # Architectural boundary placeholders for Phase 2+
│   ├── auth/           # Session context, RBAC, ProtectedRoute, Can
│   ├── users/
│   ├── organizations/
│   ├── stores/
│   ├── employees/
│   ├── categories/
│   ├── products/
│   ├── inventory/
│   ├── media/
│   ├── reviews/
│   └── admin/
├── hooks/
│   ├── use-disclosure.ts
│   └── use-media-query.ts
├── layouts/            # AppShell, AuthLayout, SellerLayout, AdminLayout, BuyerLayout
├── lib/
│   ├── errors.ts       # Error normalization & user-safe mapping
│   └── utils.ts        # Tailwind merge & clsx utility
├── routes/             # Route page entry points
│   ├── auth/           # LoginPage, RegisterPage
│   ├── seller/         # SellerOverviewPage
│   ├── admin/          # AdminOverviewPage
│   ├── home-page.tsx
│   └── not-found-page.tsx
├── services/           # apiClient, tokenStorage, queryKeys
├── store/              # Zustand UI store (sidebar collapsed, command palette)
├── styles/             # index.css (tokens, typography, colors)
├── types/              # TypeScript definitions (api.ts, navigation.ts)
└── main.tsx
```

---

## 5. Development Workflow & Commands

### Running Locally
```bash
npm run dev
```
Starts the Vite development server at `http://localhost:5173`.

### Typechecking
```bash
npm run typecheck
```
Executes TypeScript compiler in strict mode across the workspace.

### Linting & Formatting
```bash
npm run lint          # Run ESLint checks
npm run format:check  # Check Prettier formatting
npm run format        # Automatically format files
```

### Production Build
```bash
npm run build
```
Compiles and generates the optimized production bundle in `dist/`.

### Containerized Execution
```bash
# Build and run containerized frontend
docker compose up --build
```
Serves the production build on `http://localhost:3000`.

---

## 6. What is Intentionally NOT Implemented in Phase 1

To preserve architectural integrity and avoid throwaway code:
- **No Phase 2+ Business Logic**: Seller registration, store creation, employee invitation, catalog editing, variant matrix, inventory counts, or checkout are intentionally not implemented.
- **No Fake REST Backend**: No mock servers or fake API endpoints pretend to be the backend. The API client is configured to connect to the actual backend via `VITE_API_BASE_URL`.
- **No Stored Fake Credentials**: Authentication and session state connect via clean abstractions ready for Phase 2 Identity Provider integration.
