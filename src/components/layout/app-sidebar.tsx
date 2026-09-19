import { Link, NavLink } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { SbtLogo } from '@/components/sbt-logo'
import { ROUTES } from '@/constants/routes'
import type { NavigationConfig } from '@/types/navigation'

type AppSidebarProps = {
  navigation: NavigationConfig
  collapsed: boolean
}

export function AppSidebar({ navigation, collapsed }: AppSidebarProps) {
  return (
    <aside
      className={cn(
        'border-sidebar-border bg-sidebar text-sidebar-foreground hidden h-full shrink-0 flex-col border-r transition-[width] duration-200 ease-[var(--ease-standard)] lg:flex',
        collapsed ? 'w-[72px]' : 'w-64',
      )}
      aria-label={`${navigation.title} navigation`}
    >
      <div
        className={cn(
          'border-sidebar-border flex h-14 items-center border-b px-4',
          collapsed && 'justify-center px-2',
        )}
      >
        <BrandMark compact={collapsed} />
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="flex flex-col gap-1">
          {navigation.items.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : undefined}
                  className={({ isActive }) =>
                    cn(
                      'text-sidebar-foreground/80 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                      'focus-visible:ring-sidebar-ring focus-visible:ring-2 focus-visible:outline-none',
                      collapsed && 'justify-center px-2',
                      isActive && !item.disabled && 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold',
                      item.disabled && 'pointer-events-none opacity-45 cursor-not-allowed',
                    )
                  }
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {collapsed ? (
                    <span className="sr-only">{item.label}</span>
                  ) : (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 font-normal bg-sidebar-accent text-sidebar-foreground/70 border-sidebar-border"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <div
        className={cn(
          'border-sidebar-border border-t p-3 text-[11px] text-sidebar-foreground/60',
          collapsed ? 'text-center' : 'flex items-center justify-between',
        )}
      >
        {!collapsed ? (
          <>
            <span>Phase 1 Foundation</span>
            <span className="text-sidebar-primary font-mono text-[10px]">v0.1.0</span>
          </>
        ) : (
          <span className="font-mono text-[10px]">v0.1</span>
        )}
      </div>
    </aside>
  )
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link to={ROUTES.home} className="flex items-center justify-center p-1" title="SBT — Sell Buy Trust">
        <SbtLogo format="icon" size="xs" />
        <span className="sr-only">SBT</span>
      </Link>
    )
  }
  return (
    <Link to={ROUTES.home} className="flex items-center" title="SBT — Sell Buy Trust">
      <SbtLogo format="horizontal" size="sm" />
    </Link>
  )
}
