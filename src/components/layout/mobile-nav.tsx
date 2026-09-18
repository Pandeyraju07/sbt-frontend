import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { BrandMark } from '@/components/layout/app-sidebar'
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
        className="border-sidebar-border bg-sidebar text-sidebar-foreground w-72 p-0"
      >
        <SheetHeader className="border-sidebar-border border-b px-4 py-3">
          <SheetTitle className="sr-only">{navigation.title} navigation</SheetTitle>
          <BrandMark />
        </SheetHeader>
        <nav className="p-3" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navigation.items.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    onClick={() => onOpenChange(false)}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
                        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                        isActive && 'bg-sidebar-accent text-sidebar-accent-foreground',
                      )
                    }
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
