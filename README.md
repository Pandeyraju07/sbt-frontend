# SBT Frontend — Sell Buy Trust

SBT (Sell Buy Trust) is an enterprise multi-vendor e-commerce marketplace platform. This repository is the **Phase 1 Frontend Foundation**: design tokens, typography scale, responsive application shells, reusable UI primitives, status badge system, data table foundation, API client architecture, environment validation, Docker containerization, and RBAC/Scope extension points.

It does **not** implement Phase 2+ business workflows (seller onboarding, store management, employee RBAC management, product catalog, inventory tracking, checkout, or real identity authentication).

---

## Technology Stack

- **React 19** + **TypeScript** (Strict Mode)
- **Vite 8**
- **Tailwind CSS v4** + **shadcn/ui** + **Lucide React**
- **React Router v7**
- **TanStack Query v5**, **Zustand v5**, **React Hook Form**, **Zod**
- **ESLint** + **Prettier**
- **Docker** + **Docker Compose**

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
```
*(On Windows PowerShell: `Copy-Item .env.example .env.local`)*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts & Verification

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Start local Vite development server |
| `npm run typecheck` | Run TypeScript compiler in strict check mode |
| `npm run lint` | Run ESLint across all codebase files |
| `npm run format:check` | Check code formatting via Prettier |
| `npm run format` | Auto-format codebase with Prettier |
| `npm run build` | Generate production build in `dist/` |
| `npm run preview` | Preview production build locally |

---

## Containerized Execution (Docker)

```bash
docker compose up --build
```
Access the containerized frontend on [http://localhost:3000](http://localhost:3000).

---

## Foundation Architecture & Documentation

- [Phase 1 Foundation Report](docs/PHASE_1.md)
- [Frontend Architecture](docs/FRONTEND_ARCHITECTURE.md)
- [Design System & Tokens](docs/DESIGN_SYSTEM.md)
- [Project Structure](docs/PROJECT_STRUCTURE.md)
- [Development Workflow](docs/DEVELOPMENT_WORKFLOW.md)
- [Development Setup](docs/DEVELOPMENT_SETUP.md)
- [Phase Roadmap](docs/ROADMAP.md)
