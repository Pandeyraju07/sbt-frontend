export const queryKeys = {
  root: ['sbt'] as const,
  session: () => [...queryKeys.root, 'session'] as const,
}
