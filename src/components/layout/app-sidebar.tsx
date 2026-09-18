import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
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
                  className={({ isActive }) =>
                    cn(
                      'text-sidebar-foreground/80 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                      'focus-visible:ring-sidebar-ring focus-visible:ring-2 focus-visible:outline-none',
                      collapsed && 'justify-center px-2',
                      isActive && 'bg-sidebar-accent text-sidebar-accent-foreground',
                      item.disabled && 'pointer-events-none opacity-50',
                    )
                  }
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {collapsed ? <span className="sr-only">{item.label}</span> : item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="text-sidebar-foreground flex items-center gap-2.5">
      <span
        className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-semibold"
        aria-hidden="true"
      >
        S
      </span>
      {compact ? (
        <span className="sr-only">SBT</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-tight">SBT</span>
          <span className="text-sidebar-foreground/70 text-[11px]">Sell Buy Trust</span>
        </span>
      )}
    </div>
  )
}
