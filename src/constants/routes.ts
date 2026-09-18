export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  seller: {
    root: '/seller',
  },
  admin: {
    root: '/admin',
  },
  buyer: {
    root: '/buyer',
  },
} as const

export type AppRoute = typeof ROUTES
