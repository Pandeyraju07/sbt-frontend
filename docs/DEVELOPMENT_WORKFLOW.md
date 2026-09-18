# Development workflow

## Daily loop

1. `npm run dev`
2. Work inside a feature folder when a phase starts; keep shared UI in `components/`
3. `npm run lint` and `npm run typecheck` before a commit
4. `npm run build` before opening a PR

## Branching (recommended)

- `main` — stable foundation
- `feat/<phase>-<name>` — implementation branches

No remote is configured until one is provided.

## Coding rules

- TypeScript strict; no `any`
- Import types with `import type`
- Relative API paths only
- Permissions and role checks will be data-driven; do not hardcode them in JSX
- Prefer skeletons over full-page spinners
- Do not invent business workflows that are not in the SBT architecture

## Commits

Use short, why-focused messages, for example:

`Add seller organization workspace routing`

Do not commit `.env.local`, tokens, or `node_modules`.
