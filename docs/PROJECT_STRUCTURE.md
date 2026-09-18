# Project structure

```
sbt-frontend/
├── .vscode/                 Workspace editor config
├── docs/                    Practical documentation
├── public/                  Favicon and static assets
├── src/
│   ├── app/                 Providers, router, error boundary
│   ├── assets/              Static images used by the UI
│   ├── components/
│   │   ├── ui/              shadcn primitives + small SBT widgets
│   │   ├── layout/          Shell pieces
│   │   ├── forms/           RHF + Zod composition
│   │   ├── tables/          Table loading patterns
│   │   └── feedback/        Empty, error, loaders
│   ├── config/              Env, query client, navigation
│   ├── constants/           Routes, z-index
│   ├── features/            Empty — business modules start here later
│   ├── hooks/               Shared hooks
│   ├── layouts/             Auth, seller, admin, buyer shells
│   ├── lib/                 cn, error helpers
│   ├── routes/              Foundation pages only
│   ├── services/            API client and token storage
│   ├── store/               Zustand UI store
│   ├── styles/              Design tokens
│   ├── types/               Shared types
│   └── main.tsx
├── .env.example
├── .env.development
├── .editorconfig
├── .prettierrc
├── eslint.config.js
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

Folders exist because they have a current role, except `src/features` and `src/assets`, which are reserved seams for upcoming phases.
