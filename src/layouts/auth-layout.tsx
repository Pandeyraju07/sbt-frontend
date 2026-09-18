import { Link, Outlet } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'

export function AuthLayout() {
  return (
    <div className="bg-background flex min-h-svh flex-col">
      <header className="flex h-14 items-center justify-between px-4 md:px-8">
        <Link to={ROUTES.home} className="text-foreground flex items-center gap-2.5">
          <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-semibold">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight">SBT</span>
            <span className="text-muted-foreground text-[11px]">Sell Buy Trust</span>
          </span>
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
