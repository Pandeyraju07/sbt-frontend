# SBT Frontend

SBT (Sell Buy Trust) is a multi-vendor e-commerce marketplace. This repository is the **Phase 1 frontend foundation**: tooling, architecture, design system, routing shells, and API client seams.

It does **not** implement seller, buyer, product, store, inventory, or admin business modules.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 + shadcn/ui + Lucide
- React Router
- TanStack Query, Zustand, React Hook Form, Zod
- ESLint + Prettier

## Prerequisites

- Windows 10/11
- Node.js **24.19.x** (LTS)
- npm **11.17+**
- Git
- VS Code recommended

Version pins: `.nvmrc`, `.node-version`, `package.json` `engines` / `volta`.

## Installation

```powershell
cd D:\RAJU\FRONTEND\sbt-frontend
npm install
```

Copy environment values if needed:

```powershell
Copy-Item .env.example .env.local
```

`.env.development` is already present for local development. Vite only exposes `VITE_*` variables to the browser. **Do not put secrets in frontend env files.**

## Running locally

```powershell
npm run dev
```

App: [http://localhost:5173](http://localhost:5173)

PowerShell, Git Bash, and the VS Code integrated terminal are all supported.

## Building

```powershell
npm run build
npm run preview
```

## Linting and formatting

```powershell
npm run lint
npm run format
npm run format:check
npm run typecheck
```

## Environment configuration

| Variable            | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| `VITE_API_BASE_URL` | Spring Boot API origin, including `/api` prefix if used |
| `VITE_APP_NAME`     | Product name                                            |
| `VITE_APP_ENV`      | `development` \| `test` \| `production`                 |

Authentication tokens are not environment variables. They are injected at runtime by the API client.

## Project structure

See [docs/PROJECT_STRUCTURE.md](docs/PROJECT_STRUCTURE.md).

## Development workflow

See [docs/DEVELOPMENT_WORKFLOW.md](docs/DEVELOPMENT_WORKFLOW.md).

## Documentation

- [Development setup](docs/DEVELOPMENT_SETUP.md)
- [Frontend architecture](docs/FRONTEND_ARCHITECTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Roadmap](docs/ROADMAP.md)
