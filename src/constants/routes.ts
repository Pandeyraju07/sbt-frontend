export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  notFound: '/404',
  designSystem: '/design-system',
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

