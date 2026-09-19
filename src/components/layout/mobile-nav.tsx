import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { BrandMark } from '@/components/layout/app-sidebar'
import { OrgStoreContextSelector } from '@/components/layout/org-store-context-selector'
import { cn } from '@/lib/utils'
import type { NavigationConfig } from '@/types/navigation'

type MobileNavProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  navigation: NavigationConfig
}

export function MobileNav({ open, onOpenChange, navigation }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="border-sidebar-border bg-sidebar text-sidebar-foreground w-80 p-0 flex flex-col justify-between"
      >
        <div>
          <SheetHeader className="border-sidebar-border border-b px-4 py-3">
            <SheetTitle className="sr-only">{navigation.title} navigation</SheetTitle>
            <BrandMark />
          </SheetHeader>

          <div className="p-3 border-b border-sidebar-border">
            <OrgStoreContextSelector className="w-full bg-sidebar-accent/50 text-sidebar-foreground border-sidebar-border" />
          </div>

          <nav className="p-3" aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {navigation.items.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.href}
                      onClick={() => !item.disabled && onOpenChange(false)}
                      aria-disabled={item.disabled}
                      tabIndex={item.disabled ? -1 : undefined}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                          isActive && !item.disabled && 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold',
                          item.disabled && 'pointer-events-none opacity-45 cursor-not-allowed',
                        )
                      }
                    >
                      <Icon className="size-4 shrink-0" aria-hidden="true" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 font-normal bg-sidebar-accent text-sidebar-foreground/70 border-sidebar-border"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="border-sidebar-border border-t p-4 text-xs text-sidebar-foreground/60 flex items-center justify-between">
          <span>Phase 1 Foundation</span>
          <span className="font-mono text-[11px] text-sidebar-primary">v0.1.0</span>
        </div>
      </SheetContent>
    </Sheet>
  )
}
