# Development setup

## Machine baseline (this workstation)

| Tool                 | Status        | Version          | Action taken                                      |
| -------------------- | ------------- | ---------------- | ------------------------------------------------- |
| Windows              | Present       | 10.0.26200       | None                                              |
| Git                  | Present       | 2.55.0.windows.3 | None                                              |
| Git Bash             | Present       | 5.3.15           | None                                              |
| Node.js              | Present       | 24.19.0 (LTS)    | None — already suitable                           |
| npm                  | Present       | 11.17.0          | Not upgraded to npm 12 (major bump, not required) |
| npx                  | Present       | 11.17.0          | None                                              |
| VS Code              | Present       | 1.134.0          | None                                              |
| VS Code `code` CLI   | Present       | 1.134.0          | None                                              |
| Chrome               | Present       | 152.0.7977.83    | None                                              |
| Java                 | Present       | OpenJDK 25.0.2   | Left in place for future backend work             |
| Docker Desktop / CLI | Not installed | —                | Not required for this frontend foundation         |

Git user: `Raju Kumar Pandey` / `pandeyraju071@gmail.com`.

## Node version management

No nvm/fnm/volta binary was installed. Node 24.19.0 is already the current LTS and replacing it with nvm-windows would disrupt the existing system install.

Reproducibility is provided by:

- `.nvmrc` / `.node-version` → `24.19.0`
- `package.json` `engines.node` → `>=24.19.0 <25`
- `package.json` `volta` pins for developers who use Volta later

## First-time setup

1. Install Node 24.19.x if missing.
2. `cd D:\RAJU\FRONTEND\sbt-frontend`
3. `npm install`
4. Open the folder in VS Code and accept recommended workspace extensions.
5. `npm run dev`

## Verify

```powershell
node --version
npm --version
git --version
code --version
npm run lint
npm run build
```

## VS Code workspace

Workspace files live in `.vscode/`:

- `settings.json` — format on save, ESLint fixes, TypeScript SDK
- `extensions.json` — recommended extensions
- `launch.json` — Chrome against Vite
- `tasks.json` — dev / build / lint

These are workspace-scoped and do not overwrite user-wide settings.
