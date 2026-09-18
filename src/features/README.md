# Feature modules

Business features are not implemented in Phase 1.

When a phase starts, add an isolated folder:

```
src/features/<feature>/
  api/
  components/
  hooks/
  pages/
  types/
  index.ts
```

Planned modules:

- auth
- users
- organizations
- stores
- employees
- categories
- products
- inventory
- media
- reviews
- admin
- buyer

Keep server data in TanStack Query. Keep only genuinely global client state in Zustand.
