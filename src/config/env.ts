import { z } from 'zod'

const envSchema = z.object({
  VITE_API_BASE_URL: z.preprocess(
    (value) => (typeof value === 'string' && value.length > 0 ? value : undefined),
    z.string().url().default('http://localhost:8080/api'),
  ),
  VITE_APP_NAME: z.preprocess(
    (value) => (typeof value === 'string' && value.length > 0 ? value : undefined),
    z.string().min(1).default('SBT'),
  ),
  VITE_APP_ENV: z.preprocess(
    (value) => (typeof value === 'string' && value.length > 0 ? value : undefined),
    z.enum(['development', 'test', 'production']).default('development'),
  ),
})

const parsed = envSchema.safeParse(import.meta.env)

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
    .join('\n')
  throw new Error(`Invalid environment configuration:\n${issues}`)
}

export const env = {
  apiBaseUrl: parsed.data.VITE_API_BASE_URL.replace(/\/$/, ''),
  appName: parsed.data.VITE_APP_NAME,
  appEnv: parsed.data.VITE_APP_ENV,
  isDevelopment: parsed.data.VITE_APP_ENV === 'development',
  isProduction: parsed.data.VITE_APP_ENV === 'production',
} as const
